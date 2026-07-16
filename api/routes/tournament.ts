import { Router, type Request, type Response } from 'express'
import { readTournamentConfig } from '../lib/tournament.js'

const router = Router()

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  const tournament = await readTournamentConfig()
  res.status(200).json({ success: true, tournament })
})

export default router
