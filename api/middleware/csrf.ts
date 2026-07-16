import type { NextFunction, Request, Response } from 'express'
import { randomToken } from '../lib/crypto.js'
import { getCsrfCookieName, getDefaultCookieOptions } from '../lib/cookies.js'

function ensureCsrfCookie(req: Request, res: Response): string {
  const name = getCsrfCookieName()
  const existing = req.cookies?.[name] as string | undefined
  if (existing && existing.length >= 16) return existing

  const token = randomToken(24)
  const opts = getDefaultCookieOptions(req)
  res.cookie(name, token, { ...opts, httpOnly: false, maxAge: 1000 * 60 * 60 * 6 })
  return token
}

export function csrfMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = ensureCsrfCookie(req, res)
  req.csrfToken = token

  const method = req.method.toUpperCase()
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
    next()
    return
  }

  const header = (req.headers['x-xsrf-token'] as string | undefined) ?? ''
  const cookieToken = (req.cookies?.[getCsrfCookieName()] as string | undefined) ?? ''

  if (!header || header !== cookieToken) {
    res.status(403).json({ success: false, error: 'Forbidden' })
    return
  }

  next()
}
