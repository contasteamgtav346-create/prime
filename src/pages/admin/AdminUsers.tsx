import { Trash2 } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import type { PublicUser } from '@/types'

export default function AdminUsers({
  users,
  loading,
  currentUserId,
  removingUserId,
  onRemoveUser,
}: {
  users: PublicUser[]
  loading: boolean
  currentUserId: string
  removingUserId: string | null
  onRemoveUser: (user: PublicUser) => void
}) {
  const { text } = useLocale()
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 border-b border-white/10 bg-black/30 px-4 py-3 text-xs tracking-[0.18em] uppercase text-white/55">
        <div>Usuário</div>
        <div className="hidden sm:block">Role</div>
        <div>Criado</div>
        <div className="text-right">AÃ§Ã£o</div>
      </div>
      <div className="divide-y divide-white/10">
        {users.map((u) => (
          <div
            key={u.id}
            className="grid grid-cols-[1fr_auto_auto_auto] gap-2 bg-white/5 px-4 py-3 text-sm text-white/80"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                {u.avatarUrl ? (
                  <img src={u.avatarUrl} alt={u.username} className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xs text-white/70">
                    {u.username.slice(0, 1).toUpperCase()}
                  </div>
                )}
                <div className="font-[Oxanium] font-semibold text-white">{u.username}</div>
              </div>
              <div className="truncate text-xs text-white/55">{u.emailMasked}</div>
            </div>
            <div className="hidden sm:block text-xs text-white/65">{u.role}</div>
            <div className="text-xs text-white/65">
              {(u.createdAt ? new Date(u.createdAt) : new Date()).toLocaleDateString('pt-BR')}
            </div>
            <div className="flex justify-end">
              {u.role === 'ADMIN' ? (
                <span className="inline-flex h-9 items-center rounded-2xl border border-white/10 px-3 text-xs text-white/45">
                  Protegido
                </span>
              ) : u.id === currentUserId ? (
                <span className="inline-flex h-9 items-center rounded-2xl border border-white/10 px-3 text-xs text-white/45">
                  Conta atual
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => onRemoveUser(u)}
                  disabled={removingUserId === u.id}
                  className="inline-flex h-9 items-center gap-2 rounded-2xl border border-red-500/25 bg-red-500/10 px-3 text-xs font-semibold text-red-200 transition hover:bg-red-500/15 disabled:opacity-60"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  {removingUserId === u.id ? text.common.loading : 'Remover'}
                </button>
              )}
            </div>
          </div>
        ))}

        {!loading && users.length === 0 ? (
          <div className="bg-white/5 px-4 py-6 text-sm text-white/65">Nenhum usuário.</div>
        ) : null}
      </div>
    </div>
  )
}
