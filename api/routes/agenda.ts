import { Router, type Request, type Response } from 'express'
import { prisma } from '../lib/prisma.js'

const router = Router()

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  const events = await prisma.agendaEvent.findMany({
    where: { published: true },
    orderBy: { startAt: 'asc' },
    take: 200,
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

export default router
