import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Faq from '@/pages/Faq'
import Agenda from '@/pages/Agenda'
import Updates from '@/pages/Updates'
import Tournament from '@/pages/Tournament'
import Terms from '@/pages/Terms'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Admin from '@/pages/Admin'
import DiscordCallback from '@/pages/DiscordCallback'
import { useLocale } from '@/contexts/LocaleContext'
import { useAuthStore } from '@/stores/authStore'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

export default function App() {
  const bootstrap = useAuthStore((s) => s.bootstrap)
  const { text } = useLocale()

  useEffect(() => {
    void bootstrap()
  }, [bootstrap])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faq"
          element={
            <ProtectedRoute>
              <Faq />
            </ProtectedRoute>
          }
        />
        <Route
          path="/agenda"
          element={
            <ProtectedRoute>
              <Agenda />
            </ProtectedRoute>
          }
        />
        <Route
          path="/atualizacoes"
          element={
            <ProtectedRoute>
              <Updates />
            </ProtectedRoute>
          }
        />
        <Route
          path="/torneio"
          element={
            <ProtectedRoute>
              <Tournament />
            </ProtectedRoute>
          }
        />
        <Route path="/termos" element={<Terms />} />
        <Route path="/auth/discord/callback" element={<DiscordCallback />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<div className="mx-auto max-w-4xl px-4 py-16 text-center text-white/70">{text.common.notFound}</div>}
        />
      </Routes>
    </Router>
  )
}
