import { Link, NavLink } from 'react-router-dom'
import { LogOut, Shield, CalendarDays, HelpCircle, Home, Newspaper, Trophy } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import { useAuthStore } from '@/stores/authStore'
import { cn } from '@/lib/utils'

const ADMIN_USERNAME = 'larinhaofcvv_'

function NavItem({
  to,
  icon,
  label,
}: {
  to: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-[color:var(--muted)] transition hover:bg-white/5 hover:text-[color:var(--fg-0)]',
          isActive && 'bg-white/8 text-[color:var(--fg-0)]',
        )
      }
    >
      <span className="opacity-90">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </NavLink>
  )
}

export default function SiteHeader() {
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)
  const { text } = useLocale()
  const hasAdminAccess = (user?.username ?? '').trim().toLowerCase() === ADMIN_USERNAME

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="relative flex w-full items-center gap-3 px-3 py-3 sm:px-4">
        <Link to={user ? '/home' : '/registro'} className="relative shrink-0">
          <img src="/prmgb.png" alt="Prime" className="h-20 w-auto object-contain md:h-24" />
        </Link>

        <div className="flex flex-1 items-center justify-between gap-3 pl-2 md:pl-4">
          {user ? (
            <nav className="flex items-center gap-1">
              <NavItem to="/home" icon={<Home className="h-4 w-4" />} label={text.header.home} />
              <NavItem to="/agenda" icon={<CalendarDays className="h-4 w-4" />} label={text.header.agenda} />
              <NavItem to="/atualizacoes" icon={<Newspaper className="h-4 w-4" />} label={text.header.updates} />
              <NavItem to="/torneio" icon={<Trophy className="h-4 w-4" />} label={text.header.tournament} />
              <NavItem to="/faq" icon={<HelpCircle className="h-4 w-4" />} label={text.header.faq} />
              {hasAdminAccess ? (
                <NavItem to="/admin" icon={<Shield className="h-4 w-4" />} label={text.header.admin} />
              ) : null}
            </nav>
          ) : null}

          <div className="flex items-center gap-2">
            {user ? (
              <>
                <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 md:flex">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.username} className="h-8 w-8 rounded-full object-cover" />
                  ) : (
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white/75">
                      {user.username.slice(0, 1).toUpperCase()}
                    </div>
                  )}
                  <div className="text-sm text-white/80">{user.username}</div>
                </div>
                <button
                  type="button"
                  onClick={() => void logout()}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">{text.header.logout}</span>
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}
