import { PrismaClient } from '../../generated/prisma/index.js'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: [],
  })

globalForPrisma.prisma = prisma
