import type { NextFunction, Request, Response } from 'express'

const ADMIN_USERNAME = 'larinhaofcvv_'

function hasAdminAccess(username?: string | null): boolean {
  return (username ?? '').trim().toLowerCase() === ADMIN_USERNAME
}

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (!req.user) {
    res.status(401).json({ success: false, error: 'Unauthorized' })
    return
  }
  next()
}

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!req.user) {
    res.status(401).json({ success: false, error: 'Unauthorized' })
    return
  }

  if (!hasAdminAccess(req.user.username)) {
    res.status(403).json({ success: false, error: 'Forbidden' })
    return
  }

  next()
}
