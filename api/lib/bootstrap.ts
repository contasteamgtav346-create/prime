import bcrypt from 'bcryptjs'
import { prisma } from './prisma.js'

export async function ensureAdminUser(): Promise<void> {
  const existing = await prisma.user.findUnique({
    where: { username: 'adminstrador' },
    select: { id: true },
  })

  if (existing) return

  const adminInitialPassword = process.env.ADMIN_INITIAL_PASSWORD

  if (!adminInitialPassword || adminInitialPassword.trim().length < 12) {
    return
  }

  const passwordHash = await bcrypt.hash(adminInitialPassword, 12)

  await prisma.user.create({
    data: {
      username: 'adminstrador',
      email: 'admin@prime.gg',
      passwordHash,
      role: 'ADMIN',
    },
  })
}
