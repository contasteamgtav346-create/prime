import type { NextFunction, Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'
import { getSessionCookieName } from '../lib/cookies.js'
import { sha256Base64Url } from '../lib/crypto.js'

export async function sessionMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const raw = (req.cookies?.[getSessionCookieName()] as string | undefined) ?? ''
  if (!raw) {
    next()
    return
  }

  const tokenHash = sha256Base64Url(raw)

  const session = await prisma.session.findUnique({
    where: { tokenHash },
    include: { user: { select: { id: true, username: true, role: true, avatarUrl: true } } },
  })

  if (!session) {
    next()
    return
  }

  if (session.expiresAt.getTime() <= Date.now()) {
    await prisma.session.delete({ where: { id: session.id } }).catch(() => {})
    next()
    return
  }

  req.user = session.user
  req.sessionId = session.id

  next()
}
