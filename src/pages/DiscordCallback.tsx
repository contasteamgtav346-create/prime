import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SiteShell from '@/components/layout/SiteShell'
import { useLocale } from '@/contexts/LocaleContext'
import { useAuthStore } from '@/stores/authStore'

export default function DiscordCallback() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const { text } = useLocale()
  const bootstrap = useAuthStore((s) => s.bootstrap)
  const finishDiscordAuth = useAuthStore((s) => s.finishDiscordAuth)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const run = async () => {
      const code = params.get('code')
      const state = params.get('state')
      if (!code || !state) {
        setError(text.discordCallback.invalidReturn)
        return
      }

      await bootstrap()
      const result = await finishDiscordAuth(code, state)
      if (!result.ok) {
        setError(result.error || text.discordCallback.authError)
        return
      }

      navigate('/home', { replace: true })
    }

    void run()
  }, [bootstrap, finishDiscordAuth, navigate, params, text.discordCallback.authError, text.discordCallback.invalidReturn])

  return (
    <SiteShell>
      <div className="grid min-h-[70vh] place-items-center">
        <div className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-black/40 p-8 text-center backdrop-blur-xl">
          <div className="font-[Oxanium] text-2xl font-semibold text-white">{text.discordCallback.connecting}</div>
          <div className="mt-3 text-sm text-white/60">
            {error ? error : text.discordCallback.wait}
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
