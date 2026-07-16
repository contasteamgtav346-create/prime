import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import DotGridBackground from '@/components/background/DotGridBackground'
import { useAuthStore } from '@/stores/authStore'

export default function Register() {
  const user = useAuthStore((s) => s.user)
  const bootstrapped = useAuthStore((s) => s.bootstrapped)
  const loadingAuth = useAuthStore((s) => s.loading)
  const startDiscordAuth = useAuthStore((s) => s.startDiscordAuth)

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!bootstrapped || loadingAuth) {
    return <div className="grid min-h-screen place-items-center text-sm text-white/60">Carregando...</div>
  }

  if (user) {
    return <Navigate to="/home" replace />
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <DotGridBackground />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(3,7,15,0.28),rgba(3,7,15,0.84)),radial-gradient(circle_at_18%_18%,rgba(109,91,255,0.08),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(86,69,214,0.06),transparent_34%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-10">
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.05fr),minmax(420px,520px)]">
          <section className="flex flex-col justify-center">
            <img src="/prmgb.png" alt="Prime" className="h-24 w-auto object-contain md:h-28" />
            <div className="mt-8 inline-flex w-max items-center gap-2 rounded-full border border-[#8b5cf633] bg-[#8b5cf614] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b9a8ff]">
              <Sparkles className="h-4 w-4" />
              Entrada com Discord
            </div>
            <h1 className="mt-6 max-w-3xl font-[Oxanium] text-5xl font-semibold uppercase leading-[0.94] text-white md:text-7xl">
              Entre na <span className="text-[#8b5cf6]">prime</span> com seu discord
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              A entrada do site agora fica focada em um acesso unico e direto. Basta autorizar com Discord para liberar a plataforma.
            </p>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,18,32,0.92),rgba(5,10,20,0.96))] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-[Oxanium] text-3xl font-semibold text-white">Registro</div>
                <div className="mt-2 text-sm leading-7 text-white/56">
                  O acesso e feito apenas com Discord.
                </div>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#8b5cf633] bg-[#8b5cf614] text-[#b9a8ff]">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>

            <button
              type="button"
              onClick={async () => {
                setError(null)
                setSubmitting(true)
                const result = await startDiscordAuth()
                if (!result.ok) {
                  setError(result.error || 'Falha ao iniciar login com Discord')
                  setSubmitting(false)
                }
              }}
              disabled={submitting}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-2xl bg-[#5865f2] text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
            >
              <Sparkles className="h-4 w-4" />
              Registrar com Discord
              <ArrowRight className="h-4 w-4" />
            </button>

            {error ? (
              <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            <div className="mt-6 rounded-[1.6rem] border border-white/8 bg-white/5 px-5 py-4 text-sm leading-7 text-white/58">
              Ao continuar, o Discord autoriza sua entrada e a conta e criada automaticamente quando necessario.
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
