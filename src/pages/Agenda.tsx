import { useEffect, useMemo, useState } from 'react'
import { CalendarDays, Filter } from 'lucide-react'
import SiteShell from '@/components/layout/SiteShell'
import { useLocale } from '@/contexts/LocaleContext'
import type { AgendaEvent } from '@/types'
import { apiFetch } from '@/utils/api'
import WeekCalendar from '@/components/calendar/WeekCalendar'
import { addDays, endOfYear, formatDayMonthUpper, startOfWeekMonday } from '@/utils/date'
import { buildNeonBorderStyle } from '@/utils/eventStyle'

function formatDate(iso: string, locale: string): string {
  const d = new Date(iso)
  return d.toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' })
}

function formatEventPeriod(startAt: string, endAt: string | null, locale: string): string {
  const start = formatDate(startAt, locale)
  if (!endAt) return start

  const end = new Date(endAt)
  const sameDay =
    new Date(startAt).getFullYear() === end.getFullYear() &&
    new Date(startAt).getMonth() === end.getMonth() &&
    new Date(startAt).getDate() === end.getDate()

  if (sameDay) {
    const endTime = end.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
    return `${start} - ${endTime}`
  }

  return `${start} - ${formatDate(endAt, locale)}`
}

export default function Agenda() {
  const { locale, text } = useLocale()
  const [events, setEvents] = useState<AgendaEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const dateLocale = locale === 'en' ? 'en-US' : locale === 'es' ? 'es-ES' : 'pt-BR'

  useEffect(() => {
    let mounted = true
    setLoading(true)
    apiFetch<{ success: boolean; events: AgendaEvent[] }>('/api/agenda')
      .then((r) => {
        if (!mounted) return
        if (r.success) setEvents(r.events)
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return events
    return events.filter((e) => (e.title + ' ' + e.description).toLowerCase().includes(q))
  }, [events, query])

  const weeks = useMemo(() => {
    const start = startOfWeekMonday(new Date())
    const end = endOfYear(new Date())
    const arr: Date[] = []
    for (let d = start; d.getTime() <= end.getTime(); d = addDays(d, 7)) {
      arr.push(d)
    }
    return arr
  }, [])

  return (
    <SiteShell>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <CalendarDays className="h-5 w-5 text-[color:var(--accent)]" />
          </div>
          <div>
            <div className="font-[Oxanium] text-3xl font-semibold tracking-tight text-white">{text.agenda.title}</div>
            <div className="text-sm text-white/65">{text.agenda.subtitle}</div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="max-h-[560px] space-y-4 overflow-auto rounded-3xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
          {weeks.map((w, idx) => (
            <WeekCalendar
              key={w.toISOString()}
              weekStart={w}
              events={events}
              title={idx === 0 ? text.agenda.currentWeek : text.agenda.week}
              rightLabel={`${formatDayMonthUpper(w, dateLocale)} - ${formatDayMonthUpper(addDays(w, 6), dateLocale)}`}
              dayLabels={text.agenda.dayLabels}
              todayLabel={text.agenda.today}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <Filter className="h-4 w-4 text-white/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={text.agenda.filterPlaceholder}
              className="w-full bg-transparent text-sm text-white/90 placeholder:text-white/40 outline-none"
            />
          </div>
          <div className="text-xs text-white/55">
            {loading ? text.agenda.loading : `${filtered.length} ${text.agenda.publishedEvents}`}
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          {filtered.map((e) => (
            <div
              key={e.id}
              className="rounded-3xl border bg-white/5 p-5 transition hover:bg-white/8"
              style={e.borderColor ? buildNeonBorderStyle(e.borderColor) : { borderColor: 'rgba(255,255,255,0.10)' }}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="font-[Oxanium] text-lg font-semibold text-white">{e.title}</div>
                  <div className="mt-1 text-sm text-white/65">{e.description}</div>
                </div>
                <div className="shrink-0 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/75">
                  {formatEventPeriod(e.startAt, e.endAt, dateLocale)}
                </div>
              </div>
            </div>
          ))}

          {!loading && filtered.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/65">
              {text.agenda.noEvents}
            </div>
          ) : null}
        </div>
      </div>
    </SiteShell>
  )
}
