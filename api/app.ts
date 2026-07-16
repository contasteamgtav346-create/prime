/**
 * This is a API server
 */

import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'
import agendaRoutes from './routes/agenda.js'
import adminRoutes from './routes/admin.js'
import tournamentRoutes from './routes/tournament.js'
import siteRoutes from './routes/site.js'
import { csrfMiddleware } from './middleware/csrf.js'
import { sessionMiddleware } from './middleware/session.js'
import { ensureAdminUser } from './lib/bootstrap.js'

// for esm mode
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// load env
dotenv.config()

const app: express.Application = express()
const allowedOrigins = new Set(
  ['http://localhost:5173', process.env.FRONTEND_URL?.trim()].filter((value): value is string => Boolean(value)),
)

app.set('trust proxy', 1)

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, true)
        return
      }

      callback(new Error('Origin not allowed by CORS'))
    },
    credentials: true,
  }),
)
app.use(helmet())
app.use(cookieParser())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(csrfMiddleware)
app.use(sessionMiddleware)

app.use(
  ['/api/auth/login', '/api/auth/register'],
  rateLimit({
    windowMs: 1000 * 60 * 10,
    limit: 25,
    standardHeaders: true,
    legacyHeaders: false,
  }),
)

/**
 * API Routes
 */
void ensureAdminUser()
app.use('/api/auth', authRoutes)
app.use('/api/agenda', agendaRoutes)
app.use('/api/tournament', tournamentRoutes)
app.use('/api/site', siteRoutes)
app.use('/api/admin', adminRoutes)

/**
 * health
 */
app.use(
  '/api/health',
  (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).json({
      success: true,
      message: 'ok',
    })
  },
)

/**
 * error handler middleware
 */
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    error: 'Server internal error',
  })
})

/**
 * 404 handler
 */
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'API not found',
  })
})

export default app
