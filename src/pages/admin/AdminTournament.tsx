import { useEffect, useState } from 'react'
import { LoaderCircle, Save, Search, X } from 'lucide-react'
import type { DiscordUserPreview, TournamentConfig, TournamentMatch } from '@/types'
import { apiFetch } from '@/utils/api'
import GroupStageBoard from '@/components/tournament/GroupStageBoard'
import BracketBoard from '@/components/tournament/BracketBoard'

function normalizeDiscordQuery(input: string) {
  return input.trim().replace(/^@+/, '')
}

function updateMatchList(matches: TournamentMatch[], index: number, side: 'top' | 'bottom', value: string) {
  return matches.map((match, currentIndex) =>
    currentIndex === index
      ? {
          ...match,
          [side]: value,
        }
      : match,
  )
}

function updateGroupSlot(
  tournament: TournamentConfig,
  groupIndex: number,
  slotIndex: number,
  value: string,
) {
  return {
    ...tournament,
    groups: tournament.groups.map((item, currentGroupIndex) =>
      currentGroupIndex === groupIndex
        ? {
            ...item,
            slots: item.slots.map((name, currentSlotIndex) => (currentSlotIndex === slotIndex ? value : name)),
          }
        : item,
    ),
  }
}

function DiscordSlotInput({
  value,
  onConfirm,
  placeholder,
}: {
  value: string
  onConfirm: (value: string) => void
  placeholder: string
}) {
  const [query, setQuery] = useState(value ? `@${value}` : '')
  const [results, setResults] = useState<DiscordUserPreview[]>([])
  const [searching, setSearching] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)

  useEffect(() => {
    setQuery(value ? `@${value}` : '')
  }, [value])

  useEffect(() => {
    const trimmedQuery = query.trim()
    const normalizedQuery = normalizeDiscordQuery(trimmedQuery).toLowerCase()
    const confirmedQuery = value ? `@${value}` : ''

    if (trimmedQuery === confirmedQuery || !trimmedQuery.startsWith('@') || normalizedQuery.length < 2) {
      setResults([])
      setSearching(false)
      setSearchError(null)
      return
    }

    let cancelled = false
    const timeoutId = window.setTimeout(async () => {
      setSearching(true)
      setSearchError(null)

      try {
        const response = await apiFetch<{ success: boolean; users?: DiscordUserPreview[]; error?: string }>(
          `/api/admin/users/search?query=${encodeURIComponent(trimmedQuery)}`,
        )

        if (cancelled) return

        if (!response.success || !response.users) {
          setResults([])
          setSearchError(response.error || 'Falha ao buscar usuario')
          return
        }

        setResults(response.users)
      } catch {
        if (!cancelled) {
          setResults([])
          setSearchError('Falha ao buscar usuario')
        }
      } finally {
        if (!cancelled) setSearching(false)
      }
    }, 250)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [query])

  const trimmedQuery = query.trim()
  const normalizedQuery = normalizeDiscordQuery(trimmedQuery)
  const confirmedQuery = value ? `@${value}` : ''
  const showPreview = trimmedQuery !== confirmedQuery && trimmedQuery.startsWith('@') && normalizedQuery.length >= 2

  return (
    <div className="grid gap-2">
      {showPreview ? (
        <div className="rounded-2xl border border-white/10 bg-black/25 p-2">
          <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/45">
            <Search className="h-3.5 w-3.5" />
            Previa do Discord
          </div>

          {searching ? (
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-xs text-white/60">
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Buscando usuario...
            </div>
          ) : results.length > 0 ? (
            <div className="grid gap-2">
              {results.map((user) => (
                <button
                  key={user.id}
                  type="button"
                  onClick={() => {
                    onConfirm(user.username)
                    setQuery(`@${user.username}`)
                    setResults([])
                    setSearchError(null)
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left transition hover:border-[color:var(--accent)]/35 hover:bg-[color:var(--accent)]/10"
                >
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.username} className="h-10 w-10 rounded-full object-cover" />
                  ) : (
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm text-white/70">
                      {user.username.slice(0, 1).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="truncate font-[Oxanium] text-sm font-semibold text-white">@{user.username}</div>
                    <div className="truncate text-xs text-white/55">Clique para confirmar este usuario</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-xs text-white/55">
              {searchError || 'Nenhum usuario do Discord encontrado. A pessoa precisa ter logado no site antes.'}
            </div>
          )}
        </div>
      ) : null}

      <div className="relative">
        <input
          value={query}
          onChange={(e) => {
            const nextValue = e.target.value
            setQuery(nextValue)

            if (!nextValue.trim()) {
              setResults([])
              setSearchError(null)
              onConfirm('')
            }
          }}
          className="h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 pr-11 text-sm text-white/88 outline-none transition focus:border-white/25"
          placeholder={placeholder}
        />

        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setResults([])
              setSearchError(null)
              onConfirm('')
            }}
            className="absolute right-2 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-white/45 transition hover:bg-white/10 hover:text-white/80"
            aria-label="Limpar usuario"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <div className="text-[11px] text-white/45">
        {trimmedQuery && !trimmedQuery.startsWith('@')
          ? 'Comece com @ para buscar o usuario do Discord.'
          : value
            ? `Confirmado agora: @${value}`
            : 'Digite @usuario e clique no card da previa para confirmar.'}
      </div>
    </div>
  )
}

function RoundEditor({
  title,
  matches,
  onChange,
}: {
  title: string
  matches: TournamentMatch[]
  onChange: (matches: TournamentMatch[]) => void
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <div className="font-[Oxanium] text-sm font-semibold uppercase tracking-[0.18em] text-white/85">{title}</div>

      <div className="mt-4 grid gap-3">
        {matches.map((match, index) => (
          <div key={match.id} className="rounded-2xl border border-white/10 bg-black/25 p-3">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Confronto {index + 1}</div>
            <div className="mt-3 grid gap-2">
              <DiscordSlotInput
                value={match.top}
                onConfirm={(value) => onChange(updateMatchList(matches, index, 'top', value))}
                placeholder="Ex.: @usuario superior"
              />
              <DiscordSlotInput
                value={match.bottom}
                onConfirm={(value) => onChange(updateMatchList(matches, index, 'bottom', value))}
                placeholder="Ex.: @usuario inferior"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AdminTournament({
  tournament,
  setTournament,
  csrfToken,
  loading,
  setError,
}: {
  tournament: TournamentConfig
  setTournament: React.Dispatch<React.SetStateAction<TournamentConfig>>
  csrfToken: string | null
  loading: boolean
  setError: (msg: string | null) => void
}) {
  const [draft, setDraft] = useState<TournamentConfig>(tournament)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setDraft(tournament)
  }, [tournament])

  async function saveTournament() {
    setSaving(true)
    setError(null)
    try {
      const response = await apiFetch<{ success: boolean; tournament?: TournamentConfig; error?: string }>('/api/admin/tournament', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(draft),
        csrfToken: csrfToken ?? undefined,
      })

      if (!response.success || !response.tournament) {
        setError(response.error || 'Falha ao salvar torneio')
        return
      }

      setTournament(response.tournament)
    } catch {
      setError('Falha ao salvar torneio')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="grid gap-5">
      <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/25 p-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="font-[Oxanium] text-lg font-semibold text-white">Gerenciar torneio</div>
          <div className="mt-1 text-sm text-white/60">
            Use o @username de quem ja entrou com Discord no site. Clique na previa para confirmar cada vaga.
          </div>
        </div>
        <button
          type="button"
          onClick={() => void saveTournament()}
          disabled={saving || loading}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-[color:var(--accent)] px-5 text-sm font-semibold text-white transition hover:brightness-95 disabled:opacity-60"
        >
          <Save className="h-4 w-4" />
          {saving ? 'Salvando...' : 'Salvar torneio'}
        </button>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.25fr_1fr]">
        <GroupStageBoard groups={draft.groups} />
        <BracketBoard bracket={draft.bracket} />
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
        <div className="font-[Oxanium] text-lg font-semibold text-white">Fase de grupos</div>
        <div className="mt-1 text-sm text-white/60">Cada grupo vai do A ao H com 4 vagas editaveis.</div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {draft.groups.map((group, groupIndex) => (
            <div key={group.letter} className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="font-[Oxanium] text-sm font-semibold uppercase tracking-[0.18em] text-[#d8c8ff]">
                Grupo {group.letter}
              </div>

              <div className="mt-4 grid gap-2">
                {group.slots.map((slot, slotIndex) => (
                  <DiscordSlotInput
                    key={`${group.letter}-${slotIndex}`}
                    value={slot}
                    onConfirm={(value) => setDraft((current) => updateGroupSlot(current, groupIndex, slotIndex, value))}
                    placeholder={`Ex.: @usuario ${slotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <RoundEditor
          title="Oitavas"
          matches={draft.bracket.roundOf16}
          onChange={(matches) => setDraft((current) => ({ ...current, bracket: { ...current.bracket, roundOf16: matches } }))}
        />
        <RoundEditor
          title="Quartas"
          matches={draft.bracket.quarterfinals}
          onChange={(matches) =>
            setDraft((current) => ({ ...current, bracket: { ...current.bracket, quarterfinals: matches } }))
          }
        />
        <RoundEditor
          title="Semifinais"
          matches={draft.bracket.semifinals}
          onChange={(matches) => setDraft((current) => ({ ...current, bracket: { ...current.bracket, semifinals: matches } }))}
        />
        <RoundEditor
          title="Final"
          matches={draft.bracket.final}
          onChange={(matches) => setDraft((current) => ({ ...current, bracket: { ...current.bracket, final: matches } }))}
        />
      </div>
    </div>
  )
}
