import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = useAuthStore((s) => s.user)
  const bootstrapped = useAuthStore((s) => s.bootstrapped)
  const loading = useAuthStore((s) => s.loading)

  if (!bootstrapped || loading) {
    return <div className="grid min-h-screen place-items-center text-sm text-white/60">Carregando...</div>
  }

  if (!user) {
    return <Navigate to="/registro" replace />
  }

  return <>{children}</>
}
