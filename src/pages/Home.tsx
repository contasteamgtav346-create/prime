import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Swords,
  Trophy,
  Users,
} from 'lucide-react'
import { localeLabels, useLocale } from '@/contexts/LocaleContext'
import SiteShell from '@/components/layout/SiteShell'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/stores/authStore'
import type { HomeMetrics } from '@/types'
import { apiFetch } from '@/utils/api'

const PRIME_PIXEL_LETTERS = {
  P: [
    '0011111110',
    '0111111111',
    '1110000111',
    '1110000111',
    '1111111110',
    '1111111000',
    '1110000000',
    '1110000000',
    '1110000000',
    '1110000000',
    '1110000000',
  ],
  R: [
    '0011111110',
    '0111111111',
    '1110000111',
    '1110000111',
    '1111111110',
    '1111111000',
    '1110011000',
    '1110001100',
    '1110000110',
    '1110000011',
    '1110000001',
  ],
  I: [
    '011110',
    '111111',
    '001110',
    '001110',
    '001110',
    '001110',
    '001110',
    '001110',
    '001110',
    '111111',
    '011110',
  ],
  M: [
    '110000000011',
    '111000000111',
    '111100001111',
    '111110011111',
    '111111111111',
    '111111111111',
    '111011110111',
    '111001100111',
    '111000000111',
    '111000000111',
    '111000000111',
  ],
  E: [
    '0111111111',
    '1111111111',
    '1110000000',
    '1110000000',
    '1111111100',
    '1111111100',
    '1110000000',
    '1110000000',
    '1111111111',
    '1111111111',
    '0111111111',
  ],
} as const

function joinWordmarkRows(letters: ReadonlyArray<ReadonlyArray<string>>, gapSize: number) {
  const gap = '0'.repeat(gapSize)
  const totalRows = letters[0]?.length ?? 0

  return Array.from({ length: totalRows }, (_, rowIndex) => letters.map((letter) => letter[rowIndex]).join(gap))
}

const PRIME_PIXEL_MAP = joinWordmarkRows(
  [PRIME_PIXEL_LETTERS.P, PRIME_PIXEL_LETTERS.R, PRIME_PIXEL_LETTERS.I, PRIME_PIXEL_LETTERS.M, PRIME_PIXEL_LETTERS.E],
  2,
)

function expandPixelMap(map: string[], factor: number) {
  return map.flatMap((row) => {
    const expandedRow = row
      .split('')
      .map((cell) => cell.repeat(factor))
      .join('')

    return Array.from({ length: factor }, () => expandedRow)
  })
}

const DENSE_PRIME_PIXEL_MAP = expandPixelMap(PRIME_PIXEL_MAP, 3)

const PRIME_CANVAS_CELL_SIZE = 3.15
const PRIME_CANVAS_GAP = 2.05
const PRIME_SKEW_DEGREES = -16
const PRIME_SKEW_FACTOR = Math.tan((PRIME_SKEW_DEGREES * Math.PI) / 180)

const PRIME_CANVAS_PIXELS = DENSE_PRIME_PIXEL_MAP.flatMap((row, rowIndex) =>
  row.split('').flatMap((cell, columnIndex) => {
    if (cell !== '1') return []

    return [
      {
        rowIndex,
        columnIndex,
        toneSeed: ((rowIndex + 5) * 19 + (columnIndex + 7) * 13) % 100,
      },
    ]
  }),
)

const PRIME_CANVAS_COLUMNS = DENSE_PRIME_PIXEL_MAP[0]?.length ?? 0
const PRIME_CANVAS_ROWS = DENSE_PRIME_PIXEL_MAP.length
const PRIME_CANVAS_WIDTH =
  PRIME_CANVAS_COLUMNS * PRIME_CANVAS_CELL_SIZE + Math.max(0, PRIME_CANVAS_COLUMNS - 1) * PRIME_CANVAS_GAP
const PRIME_CANVAS_HEIGHT =
  PRIME_CANVAS_ROWS * PRIME_CANVAS_CELL_SIZE + Math.max(0, PRIME_CANVAS_ROWS - 1) * PRIME_CANVAS_GAP
const PRIME_SKEW_PADDING = Math.abs(PRIME_SKEW_FACTOR) * PRIME_CANVAS_HEIGHT * 0.5 + PRIME_CANVAS_CELL_SIZE
const PRIME_DRAW_WIDTH = PRIME_CANVAS_WIDTH + PRIME_SKEW_PADDING * 2

const socials = [
  { label: 'TikTok', imageSrc: '/ttkk.png', href: 'https://www.tiktok.com/@primecompetitive' },
  { label: 'Instagram', imageSrc: '/insth.png', href: 'https://www.instagram.com/primecompetitivo?igsh=MTgzNGhvcThwZjI2YQ%3D%3D&utm_source=qr' },
] as const

function formatNumber(value: number) {
  return new Intl.NumberFormat('pt-BR').format(value)
}

function PixelPrime({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      active: false,
    }

    let raf = 0
    let dpr = 1

    const onPointerMove = (event: PointerEvent) => {
      pointer.targetX = event.clientX
      pointer.targetY = event.clientY
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.active = true
    }

    const onPointerLeave = () => {
      pointer.active = false
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(PRIME_DRAW_WIDTH * dpr))
      canvas.height = Math.max(1, Math.floor(PRIME_CANVAS_HEIGHT * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const scaleX = rect.width / Math.max(PRIME_DRAW_WIDTH, 1)
      const scaleY = rect.height / Math.max(PRIME_CANVAS_HEIGHT, 1)
      const originY = PRIME_CANVAS_HEIGHT / 2
      const time = performance.now() * 0.001

      pointer.x = pointer.targetX
      pointer.y = pointer.targetY

      ctx.clearRect(0, 0, PRIME_DRAW_WIDTH, PRIME_CANVAS_HEIGHT)

      for (let index = 0; index < PRIME_CANVAS_PIXELS.length; index += 1) {
        const pixel = PRIME_CANVAS_PIXELS[index]
        const localX = pixel.columnIndex * (PRIME_CANVAS_CELL_SIZE + PRIME_CANVAS_GAP)
        const localY = pixel.rowIndex * (PRIME_CANVAS_CELL_SIZE + PRIME_CANVAS_GAP)
        const localCenterX = localX + PRIME_CANVAS_CELL_SIZE / 2
        const localCenterY = localY + PRIME_CANVAS_CELL_SIZE / 2
        const skewShift = (localCenterY - originY) * PRIME_SKEW_FACTOR
        const skewedCenterX = PRIME_SKEW_PADDING + localCenterX + skewShift
        const centerX = rect.left + skewedCenterX * scaleX
        const centerY = rect.top + localCenterY * scaleY
        const dx = centerX - pointer.x
        const dy = centerY - pointer.y
        const distance = Math.hypot(dx, dy) || 1
        const influence = 216
        const lensRadius = 70
        const ballRadius = 62
        let translateX = 0
        let translateY = 0

        if (pointer.active && distance < influence) {
          const outer = 1 - Math.min(1, Math.max(0, (distance - lensRadius) / Math.max(influence - lensRadius, 1)))
          const inner = Math.min(1, Math.max(0, (ballRadius - distance) / Math.max(ballRadius, 1)))
          const radialX = dx / distance
          const radialY = dy / distance
          const lensPush = outer * 8.4

          translateX += (radialX * lensPush) / Math.max(scaleX, 0.001)
          translateY += (radialY * lensPush) / Math.max(scaleY, 0.001)

          if (inner > 0) {
            const edgeX = pointer.x + radialX * ballRadius
            const edgeY = pointer.y + radialY * ballRadius
            translateX += ((edgeX - centerX) / Math.max(scaleX, 0.001)) * inner * 0.52
            translateY += ((edgeY - centerY) / Math.max(scaleY, 0.001)) * inner * 0.52
          }
        }

        const tone = pixel.toneSeed / 100
        const phase = ((pixel.rowIndex + 3) * 0.37 + (pixel.columnIndex + 5) * 0.21 + tone * Math.PI) * 1.8
        const pulse = (Math.sin(time * (0.75 + tone * 0.9) + phase) + 1) / 2
        const alpha = 0.2 + tone * 0.18 + pulse * 0.28
        const fillR = Math.round(78 + tone * 20 + pulse * 22)
        const fillG = Math.round(58 + tone * 18 + pulse * 16)
        const fillB = Math.round(174 + tone * 46 + pulse * 38)
        ctx.fillStyle = `rgba(${fillR}, ${fillG}, ${fillB}, ${alpha})`
        const drawCenterX = PRIME_SKEW_PADDING + localCenterX + skewShift
        ctx.fillRect(
          drawCenterX - PRIME_CANVAS_CELL_SIZE / 2 + translateX,
          localY + translateY,
          PRIME_CANVAS_CELL_SIZE,
          PRIME_CANVAS_CELL_SIZE,
        )
      }

      raf = window.requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('blur', onPointerLeave)
    document.addEventListener('mouseleave', onPointerLeave)
    raf = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('blur', onPointerLeave)
      document.removeEventListener('mouseleave', onPointerLeave)
      window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={cn('origin-center', className)} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="block"
        style={{
          width: `${PRIME_DRAW_WIDTH}px`,
          height: `${PRIME_CANVAS_HEIGHT}px`,
        }}
      />
    </div>
  )
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08))]" />
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a698ff]">{eyebrow}</div>
        <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent)]" />
      </div>
      <h2 className="mt-5 font-[Oxanium] text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base text-white/58 md:text-lg">{subtitle}</p>
    </div>
  )
}

function StatCard({
  value,
  label,
  icon: Icon,
}: {
  value: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="rounded-[1.9rem] border border-[#ffffff10] bg-[#081321]/78 px-5 py-7 text-center shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-[#6d5bff40] bg-[#0b1628]/78 text-[#8f83ff]">
        <Icon className="h-6 w-6" />
      </div>
      <div className="font-[Oxanium] text-3xl font-semibold text-[#6d5bff]">{value}</div>
      <div className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">{label}</div>
    </div>
  )
}

export default function Home() {
  const user = useAuthStore((s) => s.user)
  const startDiscordAuth = useAuthStore((s) => s.startDiscordAuth)
  const { locale, setLocale, text } = useLocale()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [metrics, setMetrics] = useState<HomeMetrics>({
    accountsCount: 0,
    championshipsCount: 100,
    clansCount: 2720,
  })

  useEffect(() => {
    apiFetch<{ success: boolean; metrics: HomeMetrics }>('/api/site/home-metrics')
      .then((response) => {
        if (response.success) setMetrics(response.metrics)
      })
      .catch(() => undefined)
  }, [])

  return (
    <SiteShell contentClassName="max-w-none px-0 py-0">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(5,8,20,0.38),rgba(5,8,20,0.38)),radial-gradient(circle_at_50%_16%,rgba(92,72,214,0.06),transparent_42%)]" />

        <div className="pointer-events-none fixed inset-x-0 top-1/2 z-0 flex -translate-y-1/2 justify-center opacity-[0.24]">
          <div className="scale-[1.48] md:scale-[1.96]">
            <PixelPrime />
          </div>
        </div>

        <section className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <div className="mb-5">
              <img src="/prmgb.png" alt="Prime" className="mx-auto h-20 w-auto object-contain md:h-24" />
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/44">
                By players, for players.
              </div>
            </div>

            <div className="relative">
              <h1 className="font-[Oxanium] text-5xl font-semibold uppercase leading-[0.92] tracking-tight text-white md:text-7xl xl:text-[5.8rem]">
                {text.home.heroTitleLead} <span className="text-[#6d5bff]">{text.home.heroTitleAccent}</span>
              </h1>
            </div>

            <div className="mt-5 text-lg font-medium uppercase tracking-[0.2em] text-white/64 md:text-2xl">
              {text.home.heroSubtitle}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {user ? (
                <>
                  <Link
                    to="/agenda"
                    className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#6d5bff] px-8 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    {text.home.openAgenda}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/torneio"
                    className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-[#0b1628]/78 px-8 text-sm font-semibold text-white/86 transition hover:bg-white/8"
                  >
                    {text.home.viewTournament}
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  disabled={loading}
                  onClick={async () => {
                    setError(null)
                    setLoading(true)
                    const result = await startDiscordAuth()
                    if (!result.ok) {
                      setError(result.error || 'Falha ao iniciar Discord')
                      setLoading(false)
                    }
                  }}
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#6d5bff] px-8 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
                >
                  <Sparkles className="h-5 w-5" />
                  {loading ? text.home.openingDiscord : text.home.registerDiscord}
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>

            {error ? (
              <div className="mt-4 max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}
          </div>
        </section>

        <section className="relative z-10 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow={text.home.pathEyebrow}
              title={text.home.pathTitle}
              subtitle={text.home.pathSubtitle}
            />

            <div className="mt-8 rounded-[2.2rem] border border-[#ffffff10] bg-[#081321]/78 px-8 py-8 text-center text-lg leading-10 text-white/70 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-12">
              {text.home.pathBody}
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {[
                { value: formatNumber(metrics.accountsCount), label: text.home.statsAccounts, icon: Users },
                { value: formatNumber(metrics.championshipsCount), label: text.home.statsChampionships, icon: Trophy },
                { value: formatNumber(metrics.clansCount), label: text.home.statsClans, icon: Swords },
              ].map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 py-18">
          <div className="mx-auto max-w-6xl rounded-[2.3rem] border border-[#ffffff10] bg-[#081321]/78 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-start">
              <div>
                <img src="/prmgb.png" alt="Prime" className="h-16 w-auto object-contain" />
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/44">
                  By players, for players.
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLanguageMenuOpen((current) => !current)}
                  className="inline-flex items-center gap-3 rounded-2xl border border-[#6d5bff50] bg-[#0b162a]/82 px-5 py-3 text-sm font-semibold text-white"
                >
                  <span>{localeLabels[locale].flag}</span>
                  <span>{localeLabels[locale].label}</span>
                  <ChevronDown className={cn('h-4 w-4 transition', languageMenuOpen && 'rotate-180')} />
                </button>

                {languageMenuOpen ? (
                  <div className="absolute right-0 top-[calc(100%+0.75rem)] z-20 min-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b1628]/96 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.34)] backdrop-blur-xl">
                    {(['pt', 'en', 'es'] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setLocale(option)
                          setLanguageMenuOpen(false)
                        }}
                        className={cn(
                          'flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-white/80 transition hover:bg-white/8',
                          locale === option && 'bg-white/8 text-white',
                        )}
                      >
                        <span>{localeLabels[option].flag}</span>
                        <span>{localeLabels[option].label}</span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-8 h-px bg-white/8" />

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                {socials.map((item) => {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 min-w-[3.3rem] items-center justify-center"
                    >
                      <img
                        src={item.imageSrc}
                        alt={item.label}
                        className="block h-auto max-h-10 w-auto max-w-[3.3rem] rounded-[0.85rem] object-contain"
                      />
                    </a>
                  )
                })}
              </div>

              <a
                href="https://discord.gg/gPyFGmfcjp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-[#6d5bff50] bg-[#0b162a]/82 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#8f83ff] hover:bg-[#111d36]"
              >
                <img src="/vector.png" alt="Discord" className="h-4 w-4 object-contain" />
                <span>Discord da PRIME</span>
              </a>
            </div>

            <div className="mt-8 h-px bg-white/8" />

            <div className="mt-7 text-sm leading-8 text-white/40">
              {text.home.footerLegal}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-8 text-sm text-white/32">
              <div>{text.home.footerCopyright}</div>
              <a
                href="/termos"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white/68"
              >
                {text.home.footerTerms}
              </a>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  )
}
