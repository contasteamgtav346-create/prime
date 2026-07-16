import type { Role } from '@prisma/client'

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        username: string
        role: Role
        avatarUrl?: string | null
      }
      sessionId?: string
      csrfToken?: string
    }
  }
}

export {}
