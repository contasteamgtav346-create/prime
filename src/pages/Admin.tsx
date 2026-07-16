import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Users, CalendarDays, Trophy, LayoutPanelTop, Newspaper } from 'lucide-react'
import SiteShell from '@/components/layout/SiteShell'
import { useLocale } from '@/contexts/LocaleContext'
import { useAuthStore } from '@/stores/authStore'
import { apiFetch } from '@/utils/api'
import type { AgendaEvent, HomeMetrics, PublicUser, TournamentConfig, UpdatePost } from '@/types'
import { cn } from '@/lib/utils'
import AdminAgenda from '@/pages/admin/AdminAgenda'
import AdminUsers from '@/pages/admin/AdminUsers'
import AdminTournament from '@/pages/admin/AdminTournament'
import { createDefaultTournamentConfig } from '@/lib/tournament'
import AdminHome from '@/pages/admin/AdminHome'
import AdminUpdates from '@/pages/admin/AdminUpdates'

type Tab = 'home' | 'agenda' | 'updates' | 'tournament' | 'users'
const ADMIN_USERNAME = 'larinhaofcvv_'

export default function Admin() {
  const navigate = useNavigate()
  const { text } = useLocale()
  const user = useAuthStore((s) => s.user)
  const csrfToken = useAuthStore((s) => s.csrfToken)

  const [tab, setTab] = useState<Tab>('home')
  const [events, setEvents] = useState<AgendaEvent[]>([])
  const [updates, setUpdates] = useState<UpdatePost[]>([])
  const [users, setUsers] = useState<PublicUser[]>([])
  const [metrics, setMetrics] = useState<HomeMetrics>({
    accountsCount: 0,
    championshipsCount: 100,
    clansCount: 2720,
  })
  const [tournament, setTournament] = useState<TournamentConfig>(createDefaultTournamentConfig())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [removingUserId, setRemovingUserId] = useState<string | null>(null)
  const hasAdminAccess = (user?.username ?? '').trim().toLowerCase() === ADMIN_USERNAME

  useEffect(() => {
    if (!user) {
      navigate('/registro', { replace: true })
      return
    }

    if (!hasAdminAccess) {
      navigate('/home', { replace: true })
    }
  }, [hasAdminAccess, navigate, user])

  useEffect(() => {
    if (!user || !hasAdminAccess) return
    setLoading(true)
    setError(null)
    Promise.all([
      apiFetch<{ success: boolean; metrics: HomeMetrics }>('/api/admin/home-metrics'),
      apiFetch<{ success: boolean; events: AgendaEvent[] }>('/api/admin/agenda'),
      apiFetch<{ success: boolean; updates: UpdatePost[] }>('/api/admin/updates'),
      apiFetch<{ success: boolean; users: PublicUser[] }>('/api/admin/users'),
      apiFetch<{ success: boolean; tournament: TournamentConfig }>('/api/admin/tournament'),
    ])
      .then(([m, a, up, u, t]) => {
        if (m.success) setMetrics(m.metrics)
        if (a.success) setEvents(a.events)
        if (up.success) setUpdates(up.updates)
        if (u.success) setUsers(u.users)
        if (t.success) setTournament(t.tournament)
      })
      .catch(() => setError(text.admin.loadError))
      .finally(() => setLoading(false))
  }, [hasAdminAccess, text.admin.loadError, user])

  async function removeUser(target: PublicUser) {
    const confirmed = window.confirm(text.admin.removeUserConfirm(target.username))
    if (!confirmed) return

    setRemovingUserId(target.id)
    setError(null)

    try {
      const response = await apiFetch<{ success: boolean; removedUserId?: string; error?: string }>(
        `/api/admin/users/${target.id}`,
        {
          method: 'DELETE',
          csrfToken: csrfToken ?? undefined,
        },
      )

      if (!response.success || !response.removedUserId) {
        setError(response.error || text.admin.removeUserError)
        return
      }

      setUsers((current) => current.filter((item) => item.id !== response.removedUserId))
    } catch {
      setError(text.admin.removeUserError)
    } finally {
      setRemovingUserId(null)
    }
  }

  return (
    <SiteShell>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <Shield className="h-5 w-5 text-[color:var(--accent)]" />
          </div>
          <div>
            <div className="font-[Oxanium] text-3xl font-semibold tracking-tight text-white">{text.admin.title}</div>
            <div className="text-sm text-white/65">{text.admin.subtitle}</div>
          </div>
        </div>
      </div>

      {!user || !hasAdminAccess ? (
        <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-6 text-sm text-white/70">
          {text.admin.redirecting}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTab('home')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm transition',
                  tab === 'home'
                    ? 'border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 text-[color:var(--accent)]'
                    : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/8',
                )}
              >
                <LayoutPanelTop className="h-4 w-4" />
                {text.admin.homeTab}
              </button>
              <button
                type="button"
                onClick={() => setTab('agenda')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm transition',
                  tab === 'agenda'
                    ? 'border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 text-[color:var(--accent)]'
                    : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/8',
                )}
              >
                <CalendarDays className="h-4 w-4" />
                {text.admin.agendaTab}
              </button>
              <button
                type="button"
                onClick={() => setTab('updates')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm transition',
                  tab === 'updates'
                    ? 'border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 text-[color:var(--accent)]'
                    : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/8',
                )}
              >
                <Newspaper className="h-4 w-4" />
                {text.admin.updatesTab}
              </button>
              <button
                type="button"
                onClick={() => setTab('tournament')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm transition',
                  tab === 'tournament'
                    ? 'border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 text-[color:var(--accent)]'
                    : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/8',
                )}
              >
                <Trophy className="h-4 w-4" />
                {text.admin.tournamentTab}
              </button>
              <button
                type="button"
                onClick={() => setTab('users')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm transition',
                  tab === 'users'
                    ? 'border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 text-[color:var(--accent)]'
                    : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/8',
                )}
              >
                <Users className="h-4 w-4" />
                {text.admin.usersTab}
              </button>
            </div>
            <div className="text-xs text-white/55">{loading ? text.common.loading : text.common.ready}</div>
          </div>

          {error ? (
            <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          ) : null}

          <div className="mt-4">
            {tab === 'home' ? (
              <AdminHome
                metrics={metrics}
                setMetrics={setMetrics}
                csrfToken={csrfToken}
                loading={loading}
                setError={setError}
              />
            ) : tab === 'agenda' ? (
              <AdminAgenda
                events={events}
                setEvents={setEvents}
                csrfToken={csrfToken}
                loading={loading}
                setError={setError}
              />
            ) : tab === 'updates' ? (
              <AdminUpdates
                updates={updates}
                setUpdates={setUpdates}
                csrfToken={csrfToken}
                loading={loading}
                setError={setError}
              />
            ) : tab === 'tournament' ? (
              <AdminTournament
                tournament={tournament}
                setTournament={setTournament}
                csrfToken={csrfToken}
                loading={loading}
                setError={setError}
              />
            ) : (
              <AdminUsers
                users={users}
                loading={loading}
                currentUserId={user.id}
                removingUserId={removingUserId}
                onRemoveUser={removeUser}
              />
            )}
          </div>
        </div>
      )}
    </SiteShell>
  )
}
