/**
 * This is a user authentication API route demo.
 * Handle user registration, login, token management, etc.
 */
import { Router, type Request, type Response } from 'express'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'
import { randomToken, sha256Base64Url } from '../lib/crypto.js'
import { clearSessionCookie, setSessionCookie } from '../lib/cookies.js'
import { requireAuth } from '../middleware/requireAuth.js'

const router = Router()
const DISCORD_STATE_COOKIE = 'pg_discord_state'

const registerSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3)
    .max(24)
    .regex(/^[a-z0-9_]+$/),
  email: z.string().trim().email().max(254),
  password: z.string().min(12).max(200),
})

const loginSchema = z.object({
  identifier: z.string().trim().min(3).max(254),
  password: z.string().min(1).max(200),
})

const discordExchangeSchema = z.object({
  code: z.string().min(1),
  state: z.string().min(1),
})

type DiscordTokenResponse = {
  access_token: string
  token_type: string
}

type DiscordUserResponse = {
  id: string
  username: string
  global_name: string | null
  avatar: string | null
}

function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!domain) return '***'
  const head = (local ?? '').slice(0, 2)
  return `${head}***@${domain}`
}

function buildAvatarUrl(discordId: string, avatar: string | null): string | null {
  if (!avatar) return null
  const ext = avatar.startsWith('a_') ? 'gif' : 'png'
  return `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.${ext}?size=256`
}

function buildPublicUser(user: {
  id: string
  username: string
  email: string
  role: 'USER' | 'ADMIN'
  avatarUrl?: string | null
  discordId?: string | null
}) {
  return {
    id: user.id,
    username: user.username,
    emailMasked: user.discordId ? 'Discord conectado' : maskEmail(user.email),
    role: user.role,
    avatarUrl: user.avatarUrl ?? null,
  }
}

function getFrontendUrl(): string {
  return (
    process.env.FRONTEND_URL?.trim() ||
    (process.env.NODE_ENV === 'production'
      ? 'https://primecompetiive.netlify.app'
      : 'http://localhost:5173')
  )
}

function getDiscordConfig() {
  const clientId = process.env.DISCORD_CLIENT_ID?.trim()
  const clientSecret = process.env.DISCORD_CLIENT_SECRET?.trim()
  const redirectUri = `${getFrontendUrl()}/auth/discord/callback`
  return {
    configured: Boolean(clientId && clientSecret),
    clientId,
    clientSecret,
    redirectUri,
  }
}

function cookieOpts(req: Request) {
  const secure =
    req.secure ||
    (req.headers['x-forwarded-proto'] === 'https' && req.headers.host != null) ||
    process.env.NODE_ENV === 'production'

  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure,
    path: '/',
  }
}

function normalizeDiscordUsername(input: string, discordId: string): string {
  const base = input
    .trim()
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .slice(0, 32)

  if (base.length >= 2) return base
  return `discord_${discordId.slice(-8)}`
}

async function ensureUniqueUsername(preferred: string, discordId: string): Promise<string> {
  let candidate = normalizeDiscordUsername(preferred, discordId)
  let count = 0

  while (count < 20) {
    const existing = await prisma.user.findUnique({
      where: { username: candidate },
      select: { id: true, discordId: true },
    })

    if (!existing || existing.discordId === discordId) return candidate

    count += 1
    const suffix = `_${count}`
    const head = candidate.slice(0, Math.max(2, 32 - suffix.length))
    candidate = `${head}${suffix}`
  }

  return `discord_${discordId.slice(-8)}`
}

router.get('/csrf', async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ success: true, csrfToken: req.csrfToken ?? null })
})

router.get('/discord/url', async (req: Request, res: Response): Promise<void> => {
  const config = getDiscordConfig()
  if (!config.configured || !config.clientId) {
    res.status(200).json({
      success: false,
      configured: false,
      error: 'Discord OAuth não configurado no servidor',
    })
    return
  }

  const state = randomToken(24)
  res.cookie(DISCORD_STATE_COOKIE, state, { ...cookieOpts(req), maxAge: 1000 * 60 * 10 })

  const url = new URL('https://discord.com/oauth2/authorize')
  url.searchParams.set('client_id', config.clientId)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('redirect_uri', config.redirectUri)
  url.searchParams.set('scope', 'identify')
  url.searchParams.set('prompt', 'consent')
  url.searchParams.set('state', state)

  res.status(200).json({
    success: true,
    configured: true,
    url: url.toString(),
  })
})

router.post('/discord/exchange', async (req: Request, res: Response): Promise<void> => {
  const parsed = discordExchangeSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ success: false, error: 'Requisição inválida' })
    return
  }

  const config = getDiscordConfig()
  if (!config.configured || !config.clientId || !config.clientSecret) {
    res.status(503).json({ success: false, error: 'Discord OAuth não configurado no servidor' })
    return
  }

  const storedState = (req.cookies?.[DISCORD_STATE_COOKIE] as string | undefined) ?? ''
  if (!storedState || storedState !== parsed.data.state) {
    res.status(400).json({ success: false, error: 'Estado OAuth inválido' })
    return
  }

  res.clearCookie(DISCORD_STATE_COOKIE, cookieOpts(req))

  const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      grant_type: 'authorization_code',
      code: parsed.data.code,
      redirect_uri: config.redirectUri,
    }),
  }).catch(() => null)

  if (!tokenResponse?.ok) {
    res.status(401).json({ success: false, error: 'Falha ao autorizar com Discord' })
    return
  }

  const tokenData = (await tokenResponse.json()) as DiscordTokenResponse

  const discordResponse = await fetch('https://discord.com/api/users/@me', {
    headers: {
      authorization: `${tokenData.token_type} ${tokenData.access_token}`,
    },
  }).catch(() => null)

  if (!discordResponse?.ok) {
    res.status(401).json({ success: false, error: 'Falha ao buscar dados do Discord' })
    return
  }

  const discordUser = (await discordResponse.json()) as DiscordUserResponse
  const avatarUrl = buildAvatarUrl(discordUser.id, discordUser.avatar)
  const username = await ensureUniqueUsername(discordUser.username, discordUser.id)
  const randomPasswordHash = await bcrypt.hash(randomToken(24), 10)
  const syntheticEmail = `discord-${discordUser.id}@users.prime.gg`

  const user = await prisma.user.upsert({
    where: { discordId: discordUser.id },
    update: {
      username,
      avatarUrl,
    },
    create: {
      username,
      email: syntheticEmail,
      passwordHash: randomPasswordHash,
      role: 'USER',
      discordId: discordUser.id,
      avatarUrl,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      avatarUrl: true,
      discordId: true,
    },
  })

  const token = randomToken(32)
  const tokenHash = sha256Base64Url(token)
  const maxAgeMs = 1000 * 60 * 60 * 24 * 14
  const expiresAt = new Date(Date.now() + maxAgeMs)

  await prisma.session.create({
    data: {
      userId: user.id,
      tokenHash,
      expiresAt,
    },
  })

  setSessionCookie(res, req, token, maxAgeMs)

  res.status(200).json({
    success: true,
    user: buildPublicUser(user),
  })
})

router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const parsed = registerSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ success: false, error: 'Invalid request' })
    return
  }

  const username = parsed.data.username.toLowerCase()
  if (username === 'adminstrador') {
    res.status(400).json({ success: false, error: 'Invalid request' })
    return
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 12)

  try {
    const created = await prisma.user.create({
      data: {
        username,
        email: parsed.data.email.toLowerCase(),
        passwordHash,
        role: 'USER',
      },
      select: { id: true, username: true, email: true, role: true },
    })

    res.status(201).json({
      success: true,
      user: buildPublicUser(created),
    })
  } catch {
    res.status(400).json({ success: false, error: 'Invalid request' })
  }
})

router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const parsed = loginSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ success: false, error: 'Invalid request' })
    return
  }

  const identifier = parsed.data.identifier.toLowerCase()

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { username: identifier }],
    },
    select: { id: true, username: true, email: true, passwordHash: true, role: true },
  })

  if (!user) {
    res.status(401).json({ success: false, error: 'Invalid credentials' })
    return
  }

  const ok = await bcrypt.compare(parsed.data.password, user.passwordHash)
  if (!ok) {
    res.status(401).json({ success: false, error: 'Invalid credentials' })
    return
  }

  const token = randomToken(32)
  const tokenHash = sha256Base64Url(token)
  const maxAgeMs = 1000 * 60 * 60 * 24 * 14
  const expiresAt = new Date(Date.now() + maxAgeMs)

  const session = await prisma.session.create({
    data: {
      userId: user.id,
      tokenHash,
      expiresAt,
    },
    select: { id: true },
  })

  setSessionCookie(res, req, token, maxAgeMs)

  res.status(200).json({
    success: true,
    user: buildPublicUser(user),
    sessionId: session.id,
  })
})

router.post('/logout', async (req: Request, res: Response): Promise<void> => {
  if (req.sessionId) {
    await prisma.session.delete({ where: { id: req.sessionId } }).catch(() => {})
  }

  clearSessionCookie(res, req)
  res.status(200).json({ success: true })
})

router.get('/me', requireAuth, async (req: Request, res: Response): Promise<void> => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: { id: true, username: true, email: true, role: true, avatarUrl: true, discordId: true },
  })

  if (!user) {
    res.status(401).json({ success: false, error: 'Unauthorized' })
    return
  }

  res.status(200).json({
    success: true,
    user: buildPublicUser(user),
  })
})

export default router
