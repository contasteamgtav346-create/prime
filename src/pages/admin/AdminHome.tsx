import { useEffect, useMemo, useState } from 'react'
import { useLocale } from '@/contexts/LocaleContext'
import type { HomeMetrics } from '@/types'
import { apiFetch } from '@/utils/api'

function formatNumber(value: number) {
  return new Intl.NumberFormat('pt-BR').format(value)
}

export default function AdminHome({
  metrics,
  setMetrics,
  csrfToken,
  loading,
  setError,
}: {
  metrics: HomeMetrics
  setMetrics: (updater: HomeMetrics | ((current: HomeMetrics) => HomeMetrics)) => void
  csrfToken: string | null
  loading: boolean
  setError: (message: string | null) => void
}) {
  const { text } = useLocale()
  const [championshipsCount, setChampionshipsCount] = useState(String(metrics.championshipsCount))
  const [clansCount, setClansCount] = useState(String(metrics.clansCount))
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setChampionshipsCount(String(metrics.championshipsCount))
    setClansCount(String(metrics.clansCount))
  }, [metrics.championshipsCount, metrics.clansCount])

  const preview = useMemo(
    () => ({
      accountsCount: metrics.accountsCount,
      championshipsCount: Number(championshipsCount) || 0,
      clansCount: Number(clansCount) || 0,
    }),
    [clansCount, championshipsCount, metrics.accountsCount],
  )

  async function saveMetrics() {
    setSaving(true)
    setError(null)

    try {
      const response = await apiFetch<{ success: boolean; metrics?: HomeMetrics; error?: string }>('/api/admin/home-metrics', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          championshipsCount: Number(championshipsCount) || 0,
          clansCount: Number(clansCount) || 0,
        }),
        csrfToken: csrfToken ?? undefined,
      })

      if (!response.success || !response.metrics) {
        setError(response.error || text.admin.loadError)
        return
      }

      setMetrics(response.metrics)
      setChampionshipsCount(String(response.metrics.championshipsCount))
      setClansCount(String(response.metrics.clansCount))
    } catch {
      setError(text.admin.loadError)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="font-[Oxanium] text-xl font-semibold text-white">{text.admin.homeTab}</div>
        <div className="mt-2 text-sm text-white/60">Contas criadas vem do total real de usuarios cadastrados. Campeonatos e clans podem ser ajustados por aqui.</div>

        <div className="mt-5 grid gap-4">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Contas criadas</span>
            <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white/80">
              {loading ? text.common.loading : formatNumber(metrics.accountsCount)}
            </div>
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Campeonatos realizados</span>
            <input
              type="number"
              min={0}
              value={championshipsCount}
              onChange={(event) => setChampionshipsCount(event.target.value)}
              className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[color:var(--accent)]/40"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Membros de clans</span>
            <input
              type="number"
              min={0}
              value={clansCount}
              onChange={(event) => setClansCount(event.target.value)}
              className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-[color:var(--accent)]/40"
            />
          </label>
        </div>

        <button
          type="button"
          onClick={() => void saveMetrics()}
          disabled={saving}
          className="mt-5 inline-flex h-11 items-center justify-center rounded-2xl bg-[color:var(--accent)] px-5 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
        >
          {saving ? text.common.loading : 'Salvar numeros'}
        </button>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="font-[Oxanium] text-xl font-semibold text-white">Preview da secao</div>
        <div className="mt-2 text-sm text-white/60">Esse bloco mostra como a linha de cards vai aparecer na home depois de salvar.</div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { value: preview.accountsCount, label: 'Contas criadas' },
            { value: preview.championshipsCount, label: 'Campeonatos realizados' },
            { value: preview.clansCount, label: 'Membros de clans' },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.8rem] border border-white/10 bg-[#06111f]/82 px-5 py-6 text-center">
              <div className="font-[Oxanium] text-3xl font-semibold text-[color:var(--accent)]">{formatNumber(item.value)}</div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/42">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
