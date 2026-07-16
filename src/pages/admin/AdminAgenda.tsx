import { useMemo, useState } from 'react'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import type { AgendaEvent } from '@/types'
import { apiFetch } from '@/utils/api'
import { addDays, formatDayMonthUpper, isSameDay, startOfWeekMonday } from '@/utils/date'
import { cn } from '@/lib/utils'
import { buildNeonBorderStyle } from '@/utils/eventStyle'

const dayLabels = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom']
const palette = ['#8b5cf6', '#c084fc', '#a78bfa', '#4db8ff', '#ff4d6d', '#ff6b00', '#f472b6', '#ffffff']

type EditorState =
  | {
      mode: 'create'
      day: Date
      dayKey: string
      title: string
      color: string
      startTime: string
      endTime: string
    }
  | {
      mode: 'edit'
      day: Date
      dayKey: string
      title: string
      color: string
      eventId: string
      startTime: string
      endTime: string
    }
  | null

function normalizeDayKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function toTimeValue(input: string | null | undefined, fallback: string): string {
  if (!input) return fallback
  const date = new Date(input)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

function buildIsoFromDayAndTime(day: Date, timeValue: string): string {
  const [hours, minutes] = timeValue.split(':').map((part) => Number(part))
  const date = new Date(day)
  date.setHours(hours || 0, minutes || 0, 0, 0)
  return date.toISOString()
}

function formatTimeRange(startAt: string, endAt: string | null): string {
  const start = new Date(startAt)
  const startLabel = start.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

  if (!endAt) return startLabel

  const end = new Date(endAt)
  const endLabel = end.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  return `${startLabel} - ${endLabel}`
}

function formatEditorDay(d: Date): string {
  return d.toLocaleDateString('pt-BR', {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
  })
}

export default function AdminAgenda({
  events,
  setEvents,
  csrfToken,
  loading,
  setError,
}: {
  events: AgendaEvent[]
  setEvents: React.Dispatch<React.SetStateAction<AgendaEvent[]>>
  csrfToken: string | null
  loading: boolean
  setError: (msg: string | null) => void
}) {
  const weekStart = useMemo(() => startOfWeekMonday(new Date()), [])
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])
  const [editor, setEditor] = useState<EditorState>(null)
  const [saving, setSaving] = useState(false)

  const days = useMemo(() => dayLabels.map((_, i) => addDays(weekStart, i)), [weekStart])

  const eventsByDay = useMemo(() => {
    const m = new Map<string, AgendaEvent[]>()
    for (const e of events) {
      const d = new Date(e.startAt)
      d.setHours(0, 0, 0, 0)
      const k = normalizeDayKey(d)
      const cur = m.get(k) ?? []
      cur.push(e)
      m.set(k, cur)
    }
    for (const [k, v] of m.entries()) {
      v.sort((a, b) => a.startAt.localeCompare(b.startAt))
      m.set(k, v)
    }
    return m
  }, [events])

  const rangeLabel = `${formatDayMonthUpper(weekStart)} - ${formatDayMonthUpper(addDays(weekStart, 6))}`

  async function createEvent() {
    if (!editor || editor.mode !== 'create') return
    const title = editor.title.trim()
    if (title.length < 3) {
      setError('Nome do evento muito curto')
      return
    }
    if (!editor.startTime) {
      setError('Defina o horario de inicio do evento')
      return
    }
    if (editor.endTime && editor.endTime <= editor.startTime) {
      setError('O horario final precisa ser maior que o horario inicial')
      return
    }

    setSaving(true)
    setError(null)
    try {
      const startAt = buildIsoFromDayAndTime(editor.day, editor.startTime)
      const endAt = editor.endTime ? buildIsoFromDayAndTime(editor.day, editor.endTime) : null
      const r = await apiFetch<{ success: boolean; event?: AgendaEvent; error?: string }>('/api/admin/agenda', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          title,
          description: title,
          startAt,
          endAt,
          borderColor: editor.color,
          published: true,
        }),
        csrfToken: csrfToken ?? undefined,
      })

      if (!r.success || !r.event) {
        setError(r.error || 'Falha ao criar evento')
        return
      }

      setEvents((prev) => [r.event!, ...prev])
      setEditor(null)
    } catch {
      setError('Falha ao criar evento')
    } finally {
      setSaving(false)
    }
  }

  async function updateEvent() {
    if (!editor || editor.mode !== 'edit') return
    const title = editor.title.trim()
    if (title.length < 3) {
      setError('Nome do evento muito curto')
      return
    }
    if (!editor.startTime) {
      setError('Defina o horario de inicio do evento')
      return
    }
    if (editor.endTime && editor.endTime <= editor.startTime) {
      setError('O horario final precisa ser maior que o horario inicial')
      return
    }

    setSaving(true)
    setError(null)
    try {
      const r = await apiFetch<{ success: boolean; event?: AgendaEvent; error?: string }>(
        `/api/admin/agenda/${editor.eventId}`,
        {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            title,
            description: title,
            startAt: buildIsoFromDayAndTime(editor.day, editor.startTime),
            endAt: editor.endTime ? buildIsoFromDayAndTime(editor.day, editor.endTime) : null,
            borderColor: editor.color,
            published: true,
          }),
          csrfToken: csrfToken ?? undefined,
        },
      )

      if (!r.success || !r.event) {
        setError(r.error || 'Falha ao atualizar evento')
        return
      }

      setEvents((prev) => prev.map((p) => (p.id === editor.eventId ? r.event! : p)))
      setEditor(null)
    } catch {
      setError('Falha ao atualizar evento')
    } finally {
      setSaving(false)
    }
  }

  async function removeEvent(eventId: string) {
    setSaving(true)
    setError(null)
    try {
      const r = await apiFetch<{ success: boolean; error?: string }>(`/api/admin/agenda/${eventId}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({}),
        csrfToken: csrfToken ?? undefined,
      })

      if (!r.success) {
        setError(r.error || 'Falha ao apagar evento')
        return
      }

      setEvents((prev) => prev.filter((p) => p.id !== eventId))
      if (editor?.mode === 'edit' && editor.eventId === eventId) {
        setEditor(null)
      }
    } catch {
      setError('Falha ao apagar evento')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="font-[Oxanium] text-base font-semibold tracking-[0.18em] uppercase text-white/85">SEMANA ATUAL</div>
        <div className="text-xs tracking-[0.18em] uppercase text-white/55">{rangeLabel}</div>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {dayLabels.map((l) => (
          <div key={l} className="text-center text-xs tracking-[0.22em] uppercase text-white/40">
            {l}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3">
        {days.map((d) => {
          const k = normalizeDayKey(d)
          const dayEvents = eventsByDay.get(k) ?? []
          const border = dayEvents[0]?.borderColor ?? null
          const isToday = isSameDay(d, today)

          return (
            <div
              key={k}
              className={cn(
                'group relative min-h-[12.6rem] overflow-hidden rounded-2xl border bg-[linear-gradient(180deg,rgba(2,19,41,0.98),rgba(1,13,30,1))] px-3 py-3 transition',
                'border-[#1575c93a] hover:border-[#2f9fff66]',
              )}
              style={buildNeonBorderStyle(border) ?? undefined}
            >
              <div className="flex items-start justify-between">
                <div className="pl-1 font-[Oxanium] text-[1.65rem] font-semibold leading-none text-[#73bfff]">
                  {d.getDate()}
                </div>
                <div
                  className="mr-1 mt-1 h-2.5 w-2.5 rounded-full shadow-[0_0_14px_currentColor]"
                  style={{ color: border ?? '#36a2ff', backgroundColor: border ?? '#36a2ff' }}
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  setEditor({
                    mode: 'create',
                    day: d,
                    dayKey: k,
                    title: '',
                    color: border ?? palette[0],
                    startTime: '19:00',
                    endTime: '21:00',
                  })
                }
                className="absolute left-3 top-11 rounded-full border border-[#39a0ff22] bg-[#04172b]/92 px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase text-[#8fccff] opacity-0 transition group-hover:opacity-100"
              >
                <span className="inline-flex items-center gap-1">
                  <Plus className="h-3 w-3" />
                  Novo
                </span>
              </button>

              <div className="mt-7">
                <div className="grid gap-3">
                  {dayEvents.slice(0, 4).map((ev) => (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() =>
                        setEditor({
                          mode: 'edit',
                          day: d,
                          dayKey: k,
                          title: ev.title,
                          color: ev.borderColor ?? palette[0],
                          eventId: ev.id,
                          startTime: toTimeValue(ev.startAt, '19:00'),
                          endTime: toTimeValue(ev.endAt, ''),
                        })
                      }
                      className="group/event relative mx-auto min-h-[70px] w-[86%] rounded-[0.8rem] border border-[#0f3d71] bg-[linear-gradient(180deg,rgba(6,39,82,0.96),rgba(3,25,56,0.98))] px-3 py-3 text-left text-xs font-semibold text-white shadow-[0_10px_26px_rgba(0,0,0,0.22)] transition hover:brightness-110"
                      style={buildNeonBorderStyle(ev.borderColor ?? '#39a0ff')}
                    >
                      <div className="pr-14 text-[0.78rem] uppercase leading-[1rem] tracking-tight">{ev.title}</div>
                      <div className="mt-2 text-[10px] font-medium tracking-[0.14em] text-white/72">
                        {formatTimeRange(ev.startAt, ev.endAt)}
                      </div>
                      <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition group-hover/event:opacity-100">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setEditor({
                              mode: 'edit',
                              day: d,
                              dayKey: k,
                              title: ev.title,
                              color: ev.borderColor ?? palette[0],
                              eventId: ev.id,
                              startTime: toTimeValue(ev.startAt, '19:00'),
                              endTime: toTimeValue(ev.endAt, ''),
                            })
                          }}
                          className="rounded-md border border-white/10 bg-black/50 p-1 text-white/75 hover:bg-white/10"
                        >
                          <Pencil className="h-3 w-3" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            void removeEvent(ev.id)
                          }}
                          className="rounded-md border border-red-500/20 bg-red-500/10 p-1 text-red-200 hover:bg-red-500/20"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {isToday ? (
                <div className="pointer-events-none absolute bottom-0 right-1">
                  <div className="font-[Oxanium] text-[3.45rem] font-bold leading-none tracking-[-0.03em] text-[#1a78cf]/34">
                    HOJE
                  </div>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>

      {editor ? (
        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-black/55 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-[Oxanium] text-lg font-semibold text-white">
                {editor.mode === 'create' ? 'Adicionar evento' : 'Editar evento'}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{formatEditorDay(editor.day)}</div>
            </div>
            <button
              type="button"
              onClick={() => setEditor(null)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10"
            >
              Fechar
            </button>
          </div>

          <div className="mt-4">
            <div className="text-[11px] tracking-[0.18em] uppercase text-white/50">Nome do evento</div>
            <input
              value={editor.title}
              onChange={(e) => setEditor({ ...editor, title: e.target.value })}
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 outline-none transition focus:border-white/25"
              placeholder="Digite o nome do evento"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-white/50">Inicio do evento</div>
              <input
                type="time"
                value={editor.startTime}
                onChange={(e) => setEditor({ ...editor, startTime: e.target.value })}
                className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 outline-none transition focus:border-white/25"
              />
            </div>

            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-white/50">Final do evento</div>
              <input
                type="time"
                value={editor.endTime}
                onChange={(e) => setEditor({ ...editor, endTime: e.target.value })}
                className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 outline-none transition focus:border-white/25"
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="text-[11px] tracking-[0.18em] uppercase text-white/50">Escolha a cor</div>
            <div className="mt-2 grid gap-3 sm:grid-cols-[132px,minmax(0,1fr)]">
              <label className="group relative block h-[132px] cursor-pointer overflow-hidden rounded-[1.4rem] border border-white/10 shadow-[0_12px_34px_rgba(0,0,0,0.24)]">
                <div className="absolute inset-0 bg-[linear-gradient(0deg,#ff0000,#ff0000),linear-gradient(60deg,#ff0000_0%,#ffff00_16%,#00ff00_33%,#00ffff_50%,#0000ff_66%,#ff00ff_83%,#ff0000_100%)] bg-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(255,255,255,0)_42%),linear-gradient(90deg,rgba(255,255,255,0),rgba(0,0,0,0.28)_100%)]" />
                <div className="absolute inset-x-3 bottom-3 rounded-xl bg-black/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-sm">
                  Paleta livre
                </div>
                <input
                  type="color"
                  value={editor.color}
                  onChange={(e) => setEditor({ ...editor, color: e.target.value })}
                  className="absolute inset-0 cursor-pointer opacity-0"
                  aria-label="Abrir paleta de cores"
                />
              </label>

              <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-3">
                <div className="flex flex-wrap gap-2">
                  {palette.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setEditor({ ...editor, color: c })}
                      className={cn(
                        'h-9 w-9 rounded-full border transition',
                        editor.color === c ? 'scale-105 border-white/80 shadow-[0_0_0_3px_rgba(255,255,255,0.08)]' : 'border-white/10 hover:border-white/30',
                      )}
                      style={{ backgroundColor: c }}
                      aria-label={c}
                    />
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/46">Cor selecionada</div>
                  <div className="mt-2 flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-xl border border-white/10 shadow-[0_10px_22px_rgba(0,0,0,0.24)]"
                      style={{ backgroundColor: editor.color }}
                    />
                    <div className="text-sm font-semibold uppercase tracking-[0.12em] text-white/80">{editor.color}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-[11px] tracking-[0.18em] uppercase text-white/50">Prévia</div>
            <div
              className="mt-2 rounded-xl border bg-black/35 px-3 py-3 text-sm font-semibold text-white/88"
              style={buildNeonBorderStyle(editor.color)}
            >
              <div>{editor.title.trim() || 'Nome do evento'}</div>
              <div className="mt-1 text-[10px] font-medium tracking-[0.16em] text-white/48">
                {editor.startTime
                  ? editor.endTime
                    ? `${editor.startTime} - ${editor.endTime}`
                    : editor.startTime
                  : 'Horario do evento'}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-2">
            <button
              type="button"
              disabled={saving || !editor.title.trim()}
              onClick={() => void (editor.mode === 'create' ? createEvent() : updateEvent())}
              className="h-11 rounded-2xl bg-[color:var(--accent)] text-sm font-semibold text-white transition hover:brightness-95 disabled:opacity-60"
            >
              {saving ? 'Salvando...' : 'Confirmar formulário'}
            </button>

            {editor.mode === 'edit' ? (
              <button
                type="button"
                disabled={saving}
                onClick={() => void removeEvent(editor.eventId)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 text-sm font-semibold text-red-200 transition hover:bg-red-500/18 disabled:opacity-60"
              >
                <Trash2 className="h-4 w-4" />
                Apagar evento
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      {!loading && events.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/65">
          Nenhum evento criado ainda.
        </div>
      ) : null}
    </div>
  )
}
