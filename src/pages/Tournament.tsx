import { useEffect, useMemo, useState } from 'react'
import { GitBranch, LayoutGrid } from 'lucide-react'
import SiteHeader from '@/components/layout/SiteHeader'
import DotGridBackground from '@/components/background/DotGridBackground'
import GroupStageBoard from '@/components/tournament/GroupStageBoard'
import BracketBoard from '@/components/tournament/BracketBoard'
import { useLocale } from '@/contexts/LocaleContext'
import { cn } from '@/lib/utils'
import { apiFetch } from '@/utils/api'
import type { TournamentConfig } from '@/types'
import { createDefaultTournamentConfig } from '@/lib/tournament'

type ViewMode = 'groups' | 'bracket'

export default function Tournament() {
  const { text } = useLocale()
  const [view, setView] = useState<ViewMode>('groups')
  const [tournament, setTournament] = useState<TournamentConfig>(createDefaultTournamentConfig())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    apiFetch<{ success: boolean; tournament: TournamentConfig }>('/api/tournament')
      .then((data) => {
        if (data.success) setTournament(data.tournament)
      })
      .catch(() => setError(text.tournament.loadError))
      .finally(() => setLoading(false))
  }, [text.tournament.loadError])

  const description = useMemo(
    () =>
      view === 'groups'
        ? text.tournament.groupsDescription
        : text.tournament.bracketDescription,
    [text.tournament.bracketDescription, text.tournament.groupsDescription, view],
  )

  return (
    <div className="relative min-h-screen overflow-hidden bg-[color:var(--bg-0)] text-[color:var(--fg-0)]">
      <DotGridBackground />
      <div className="relative z-10">
        <SiteHeader />

        <main className="mx-auto flex w-full max-w-[1500px] flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
          <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(12,8,26,0.94),rgba(24,13,50,0.92))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="font-[Oxanium] text-xs tracking-[0.34em] text-[#c4b5fd]">{text.tournament.eyebrow}</div>
                <h1 className="mt-3 font-[Oxanium] text-4xl font-bold uppercase tracking-[0.06em] text-white">
                  {text.tournament.title}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">{description}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setView('groups')}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-[Oxanium] text-sm font-semibold uppercase tracking-[0.16em] transition',
                    view === 'groups'
                      ? 'border-[#a78bfa] bg-[#8b5cf6]/16 text-[#e9ddff] shadow-[0_0_26px_rgba(139,92,246,0.24)]'
                      : 'border-white/10 bg-white/5 text-white/72 hover:bg-white/8',
                  )}
                >
                  <LayoutGrid className="h-4 w-4" />
                  {text.tournament.groups}
                </button>
                <button
                  type="button"
                  onClick={() => setView('bracket')}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-[Oxanium] text-sm font-semibold uppercase tracking-[0.16em] transition',
                    view === 'bracket'
                      ? 'border-[#c4b5fd] bg-[#a78bfa]/16 text-[#f3e8ff] shadow-[0_0_26px_rgba(167,139,250,0.22)]'
                      : 'border-white/10 bg-white/5 text-white/72 hover:bg-white/8',
                  )}
                >
                  <GitBranch className="h-4 w-4" />
                  {text.tournament.bracket}
                </button>
              </div>
            </div>
          </section>

          {error ? (
            <div className="rounded-3xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-100">{error}</div>
          ) : null}

          {loading ? (
            <div className="rounded-3xl border border-white/10 bg-black/30 px-5 py-6 text-sm text-white/70">
              {text.tournament.loading}
            </div>
          ) : view === 'groups' ? (
            <GroupStageBoard groups={tournament.groups} />
          ) : (
            <BracketBoard bracket={tournament.bracket} />
          )}
        </main>
      </div>
    </div>
  )
}
