import { Router, type Request, type Response } from 'express'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'
import { requireAdmin } from '../middleware/requireAuth.js'
import {
  tournamentConfigSchema,
  readTournamentConfig,
} from '../lib/tournament.js'
import { readSiteMetrics, writeSiteMetrics } from '../lib/siteMetrics.js'
import { createUpdate, deleteUpdate, readUpdates } from '../lib/updates.js'

const router = Router()
const ADMIN_USERNAME = 'larinhaofcvv_'

const eventCreateSchema = z.object({
  title: z.string().trim().min(3).max(80),
  description: z.string().trim().min(0).max(2000),
  startAt: z.string().datetime(),
  endAt: z.string().datetime().nullable().optional(),
  borderColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).nullable().optional(),
  published: z.boolean().optional(),
})

const eventUpdateSchema = eventCreateSchema.partial()
const userSearchSchema = z.object({
  query: z.string().trim().min(1).max(64),
})
const siteMetricsSchema = z.object({
  championshipsCount: z.number().int().min(0).max(100000000),
  clansCount: z.number().int().min(0).max(100000000),
})
const updateChangeSchema = z.object({
  id: z.string().trim().min(1).max(120).optional(),
  kind: z.enum(['MELHORIA', 'CORRECAO', 'REMOCAO']),
  description: z.string().trim().min(3).max(300),
})
const updateCreateSchema = z.object({
  versionLabel: z.string().trim().min(2).max(24),
  bannerImage: z.string().trim().max(6000000).nullable().optional(),
  publishedAt: z.string().datetime(),
  changesCount: z.number().int().min(1).max(999),
  changes: z.array(updateChangeSchema).min(1).max(50),
})

function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!domain) return '***'
  const head = (local ?? '').slice(0, 2)
  return `${head}***@${domain}`
}

router.use(requireAdmin)

router.get('/agenda', async (_req: Request, res: Response): Promise<void> => {
  const events = await prisma.agendaEvent.findMany({
    orderBy: { startAt: 'asc' },
    take: 500,
  })

  res.status(200).json({
    success: true,
    events: events.map((e) => ({
      id: e.id,
      title: e.title,
      description: e.description,
      startAt: e.startAt.toISOString(),
      endAt: e.endAt ? e.endAt.toISOString() : null,
      borderColor: e.borderColor ?? null,
      published: e.published,
      createdAt: e.createdAt.toISOString(),
      updatedAt: e.updatedAt.toISOString(),
    })),
  })
})

router.post('/agenda', async (req: Request, res: Response): Promise<void> => {
  const parsed = eventCreateSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ success: false, error: 'Invalid request' })
    return
  }

  const created = await prisma.agendaEvent.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      startAt: new Date(parsed.data.startAt),
      endAt: parsed.data.endAt ? new Date(parsed.data.endAt) : null,
      borderColor: parsed.data.borderColor ?? null,
      published: parsed.data.published ?? false,
      createdByUserId: req.user!.id,
    },
  })

  res.status(201).json({
    success: true,
    event: {
      id: created.id,
      title: created.title,
      description: created.description,
      startAt: created.startAt.toISOString(),
      endAt: created.endAt ? created.endAt.toISOString() : null,
      borderColor: created.borderColor ?? null,
      published: created.published,
      createdAt: created.createdAt.toISOString(),
      updatedAt: created.updatedAt.toISOString(),
    },
  })
})

router.patch('/agenda/:id', async (req: Request, res: Response): Promise<void> => {
  const parsed = eventUpdateSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ success: false, error: 'Invalid request' })
    return
  }

  try {
    const updated = await prisma.agendaEvent.update({
      where: { id: req.params.id },
      data: {
        title: parsed.data.title,
        description: parsed.data.description,
        startAt: parsed.data.startAt ? new Date(parsed.data.startAt) : undefined,
        endAt:
          parsed.data.endAt === undefined
            ? undefined
            : parsed.data.endAt
              ? new Date(parsed.data.endAt)
              : null,
        borderColor: parsed.data.borderColor === undefined ? undefined : parsed.data.borderColor,
        published: parsed.data.published,
      },
    })

    res.status(200).json({
      success: true,
      event: {
        id: updated.id,
        title: updated.title,
        description: updated.description,
        startAt: updated.startAt.toISOString(),
        endAt: updated.endAt ? updated.endAt.toISOString() : null,
        borderColor: updated.borderColor ?? null,
        published: updated.published,
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString(),
      },
    })
  } catch {
    res.status(404).json({ success: false, error: 'Not found' })
  }
})

router.delete('/agenda/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.agendaEvent.delete({ where: { id: req.params.id } })
    res.status(200).json({ success: true })
  } catch {
    res.status(404).json({ success: false, error: 'Not found' })
  }
})

router.get('/tournament', async (_req: Request, res: Response): Promise<void> => {
  const tournament = await readTournamentConfig()
  res.status(200).json({ success: true, tournament })
})

router.get('/home-metrics', async (_req: Request, res: Response): Promise<void> => {
  const metrics = await readSiteMetrics()
  res.status(200).json({ success: true, metrics })
})

router.get('/updates', async (_req: Request, res: Response): Promise<void> => {
  const updates = await readUpdates()
  res.status(200).json({ success: true, updates })
})

router.post('/updates', async (req: Request, res: Response): Promise<void> => {
  const parsed = updateCreateSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ success: false, error: 'Invalid request' })
    return
  }

  const created = await createUpdate(parsed.data)
  res.status(201).json({ success: true, update: created })
})

router.delete('/updates/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await deleteUpdate(req.params.id)
    res.status(200).json({ success: true, removedUpdateId: req.params.id })
  } catch {
    res.status(404).json({ success: false, error: 'Not found' })
  }
})

router.put('/home-metrics', async (req: Request, res: Response): Promise<void> => {
  const parsed = siteMetricsSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ success: false, error: 'Invalid request' })
    return
  }

  const metrics = await writeSiteMetrics(parsed.data)
  res.status(200).json({ success: true, metrics })
})

router.put('/tournament', async (req: Request, res: Response): Promise<void> => {
  const parsed = tournamentConfigSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ success: false, error: 'Invalid request' })
    return
  }

  const updated = await prisma.tournamentState.upsert({
    where: { id: 'main' },
    update: {
      groupsJson: JSON.stringify(parsed.data.groups),
      bracketJson: JSON.stringify(parsed.data.bracket),
    },
    create: {
      id: 'main',
      groupsJson: JSON.stringify(parsed.data.groups),
      bracketJson: JSON.stringify(parsed.data.bracket),
    },
  })

  res.status(200).json({
    success: true,
    tournament: {
      groups: JSON.parse(updated.groupsJson),
      bracket: JSON.parse(updated.bracketJson),
    },
  })
})

router.get('/users', async (_req: Request, res: Response): Promise<void> => {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
    select: { id: true, username: true, email: true, role: true, createdAt: true, avatarUrl: true, discordId: true },
  })

  res.status(200).json({
    success: true,
    users: users.map((u) => ({
      id: u.id,
      username: u.username,
      emailMasked: u.discordId ? 'Discord conectado' : maskEmail(u.email),
      role: u.role,
      createdAt: u.createdAt.toISOString(),
      avatarUrl: u.avatarUrl ?? null,
    })),
  })
})

router.get('/users/search', async (req: Request, res: Response): Promise<void> => {
  const parsed = userSearchSchema.safeParse(req.query)
  if (!parsed.success) {
    res.status(400).json({ success: false, error: 'Busca invalida' })
    return
  }

  const normalizedQuery = parsed.data.query.replace(/^@+/, '').trim().toLowerCase()
  if (normalizedQuery.length < 2) {
    res.status(200).json({ success: true, users: [] })
    return
  }

  const users = await prisma.user.findMany({
    where: {
      discordId: { not: null },
    },
    orderBy: { createdAt: 'desc' },
    take: 200,
    select: {
      id: true,
      username: true,
      avatarUrl: true,
    },
  })

  const ranked = users
    .map((user) => {
      const username = user.username.toLowerCase()
      let score = -1

      if (username === normalizedQuery) score = 3
      else if (username.startsWith(normalizedQuery)) score = 2
      else if (username.includes(normalizedQuery)) score = 1

      return { user, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score
      return left.user.username.localeCompare(right.user.username)
    })
    .slice(0, 6)
    .map((entry) => ({
      id: entry.user.id,
      username: entry.user.username,
      avatarUrl: entry.user.avatarUrl ?? null,
    }))

  res.status(200).json({
    success: true,
    users: ranked,
  })
})

router.delete('/users/:id', async (req: Request, res: Response): Promise<void> => {
  const targetUser = await prisma.user.findUnique({
    where: { id: req.params.id },
    select: { id: true, username: true, role: true },
  })

  if (!targetUser) {
    res.status(404).json({ success: false, error: 'Usuario nao encontrado' })
    return
  }

  if (targetUser.id === req.user!.id) {
    res.status(400).json({ success: false, error: 'Voce nao pode remover sua propria conta por aqui' })
    return
  }

  if (targetUser.role === 'ADMIN' || targetUser.username.toLowerCase() === ADMIN_USERNAME) {
    res.status(400).json({ success: false, error: 'A conta principal do admin fica protegida' })
    return
  }

  await prisma.user.delete({
    where: { id: targetUser.id },
  })

  res.status(200).json({
    success: true,
    removedUserId: targetUser.id,
    removedUsername: targetUser.username,
  })
})

export default router
