import type { CSSProperties } from 'react'
import { CalendarDays } from 'lucide-react'
import type { AgendaEvent } from '@/types'
import { addDays, isSameDay } from '@/utils/date'
import { cn } from '@/lib/utils'
import { buildNeonBorderStyle } from '@/utils/eventStyle'

function normalizeDayKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function eventDayKey(e: AgendaEvent): string {
  const d = new Date(e.startAt)
  d.setHours(0, 0, 0, 0)
  return normalizeDayKey(d)
}

function formatEventTimeRange(startAt: string, endAt: string | null): string {
  const start = new Date(startAt)
  const startLabel = start.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

  if (!endAt) return startLabel

  const end = new Date(endAt)
  const endLabel = end.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  return `${startLabel} - ${endLabel}`
}

export default function WeekCalendar({
  weekStart,
  events,
  title,
  rightLabel,
  onDayClick,
  hoverActionLabel,
  dayLabels = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
  todayLabel = 'HOJE',
}: {
  weekStart: Date
  events: AgendaEvent[]
  title: string
  rightLabel: string
  onDayClick?: (day: Date) => void
  hoverActionLabel?: string
  dayLabels?: string[]
  todayLabel?: string
}) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const byDay = new Map<string, AgendaEvent[]>()
  for (const e of events) {
    const k = eventDayKey(e)
    const cur = byDay.get(k) ?? []
    cur.push(e)
    byDay.set(k, cur)
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <CalendarDays className="h-4 w-4 text-[color:var(--accent)]" />
          </div>
          <div className="font-[Oxanium] text-base font-semibold tracking-[0.18em] uppercase text-white/85">
            {title}
          </div>
        </div>
        <div className="text-xs tracking-[0.18em] uppercase text-white/55">{rightLabel}</div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-3">
        {dayLabels.map((l) => (
          <div key={l} className="text-center text-xs tracking-[0.22em] uppercase text-white/40">
            {l}
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-7 gap-3">
        {dayLabels.map((_, idx) => {
          const d = addDays(weekStart, idx)
          const key = normalizeDayKey(d)
          const dayEvents = (byDay.get(key) ?? []).slice().sort((a, b) => a.startAt.localeCompare(b.startAt))
          const border = dayEvents[0]?.borderColor ?? null
          const isToday = isSameDay(d, today)

          return (
            <button
              key={key}
              type="button"
              onClick={() => onDayClick?.(d)}
              className={cn(
                'group relative flex min-h-44 flex-col overflow-hidden rounded-2xl border bg-[#050914]/60 px-4 pb-4 pt-3 text-left transition',
                'border-white/10 hover:border-white/20 hover:bg-[#070d1e]/70',
              )}
              style={border ? ({ ...buildNeonBorderStyle(border) } as CSSProperties) : undefined}
            >
              <div className="flex items-start justify-between">
                <div className="font-[Oxanium] text-base font-semibold leading-none text-white/85">{d.getDate()}</div>
                {hoverActionLabel ? (
                  <div className="pointer-events-none mt-0.5 opacity-0 transition group-hover:opacity-100">
                    <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] tracking-[0.18em] uppercase text-white/70">
                      {hoverActionLabel}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col justify-center pb-8 pt-5">
                <div className="grid gap-2">
                  {dayEvents.slice(0, 3).map((ev) => {
                    const c = ev.borderColor ?? 'rgba(255,255,255,0.15)'
                    return (
                      <div
                        key={ev.id}
                        className="mx-auto flex min-h-[82px] w-[96%] max-w-[10.6rem] flex-col justify-center rounded-xl border bg-black/30 px-3 py-3 text-sm font-semibold text-white/85"
                        style={buildNeonBorderStyle(c)}
                      >
                        <div className="text-[0.78rem] uppercase leading-[0.98rem] tracking-tight [word-break:keep-all]">
                          {ev.title}
                        </div>
                        <div className="mt-2 text-[11px] font-medium tracking-[0.16em] text-white/48">
                          {formatEventTimeRange(ev.startAt, ev.endAt)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {isToday ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-1 flex justify-center">
                  <div className="font-[Oxanium] text-5xl font-bold tracking-[0.08em] text-white/10">{todayLabel}</div>
                </div>
              ) : null}
            </button>
          )
        })}
      </div>

    </section>
  )
}
