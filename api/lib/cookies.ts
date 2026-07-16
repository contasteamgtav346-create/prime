import type { CookieOptions, Response, Request } from 'express'

export function getSessionCookieName(): string {
  return process.env.SESSION_COOKIE_NAME?.trim() || 'pg_session'
}

export function getCsrfCookieName(): string {
  return 'pg_xsrf'
}

function normalizeOrigin(value: string | undefined): string {
  const raw = (value ?? '').trim()
  if (!raw) return ''

  try {
    return new URL(raw).origin
  } catch {
    return ''
  }
}

function getBackendOrigin(req: Request): string {
  const forwardedProto = req.headers['x-forwarded-proto']
  const protocol =
    typeof forwardedProto === 'string' && forwardedProto
      ? forwardedProto.split(',')[0].trim()
      : req.secure || process.env.NODE_ENV === 'production'
        ? 'https'
        : 'http'

  const host = req.headers.host ?? ''
  return host ? `${protocol}://${host}` : ''
}

export function getDefaultCookieOptions(req: Request): CookieOptions {
  const frontendOrigin = normalizeOrigin(process.env.FRONTEND_URL)
  const backendOrigin = normalizeOrigin(getBackendOrigin(req))
  const crossSite = Boolean(frontendOrigin && backendOrigin && frontendOrigin !== backendOrigin)
  const secure =
    crossSite ||
    req.secure ||
    (req.headers['x-forwarded-proto'] === 'https' && req.headers.host != null) ||
    process.env.NODE_ENV === 'production'

  return {
    httpOnly: true,
    sameSite: crossSite ? 'none' : 'lax',
    secure,
    path: '/',
  }
}

export function setSessionCookie(res: Response, req: Request, token: string, maxAgeMs: number): void {
  const opts = getDefaultCookieOptions(req)
  res.cookie(getSessionCookieName(), token, { ...opts, maxAge: maxAgeMs })
}

export function clearSessionCookie(res: Response, req: Request): void {
  const opts = getDefaultCookieOptions(req)
  res.clearCookie(getSessionCookieName(), { ...opts })
}
