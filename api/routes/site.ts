import { Router, type Request, type Response } from 'express'
import { readSiteMetrics } from '../lib/siteMetrics.js'
import { readUpdates } from '../lib/updates.js'

const router = Router()

router.get('/home-metrics', async (_req: Request, res: Response): Promise<void> => {
  const metrics = await readSiteMetrics()
  res.status(200).json({ success: true, metrics })
})

router.get('/updates', async (_req: Request, res: Response): Promise<void> => {
  const updates = await readUpdates()
  res.status(200).json({ success: true, updates })
})

export default router
