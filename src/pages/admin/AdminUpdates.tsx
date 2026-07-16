import { useEffect, useMemo, useRef, useState } from 'react'
import { ImagePlus, Plus, Sparkles, Trash2, Upload } from 'lucide-react'
import type { UpdateChangeKind, UpdatePost } from '@/types'
import { apiFetch } from '@/utils/api'
import { cn } from '@/lib/utils'

type DraftChange = {
  id: string
  kind: UpdateChangeKind
  description: string
}

function createDraftChange(): DraftChange {
  return {
    id: `draft-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    kind: 'MELHORIA',
    description: '',
  }
}

function todayInputValue() {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

function toMiddayIso(dateInput: string) {
  const [year, month, day] = dateInput.split('-').map(Number)
  const date = new Date()
  date.setFullYear(year, (month || 1) - 1, day || 1)
  date.setHours(12, 0, 0, 0)
  return date.toISOString()
}

function nextVersionLabel(updates: UpdatePost[]) {
  const highest = updates.reduce((current, update) => {
    const match = update.versionLabel.match(/v(\d+)/i)
    const major = match ? Number(match[1]) : 0
    return Math.max(current, major)
  }, 0)

  return `v${highest + 1}.0.${new Date().getFullYear()}`
}

function kindBadgeClass(kind: UpdateChangeKind) {
  if (kind === 'MELHORIA') return 'border-[#1aa8ff33] bg-[#0a2b46] text-[#58c3ff]'
  if (kind === 'CORRECAO') return 'border-[#30d18a33] bg-[#0b2d22] text-[#64e8a2]'
  return 'border-[#ff8b4233] bg-[#342012] text-[#ffac6f]'
}

export default function AdminUpdates({
  updates,
  setUpdates,
  csrfToken,
  loading,
  setError,
}: {
  updates: UpdatePost[]
  setUpdates: (updater: UpdatePost[] | ((current: UpdatePost[]) => UpdatePost[])) => void
  csrfToken: string | null
  loading: boolean
  setError: (msg: string | null) => void
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [versionLabel, setVersionLabel] = useState(() => nextVersionLabel(updates))
  const [publishedDate, setPublishedDate] = useState(todayInputValue())
  const [bannerImage, setBannerImage] = useState('')
  const [changesCount, setChangesCount] = useState(1)
  const [changes, setChanges] = useState<DraftChange[]>([createDraftChange()])
  const [saving, setSaving] = useState(false)
  const [removingId, setRemovingId] = useState<string | null>(null)

  useEffect(() => {
    setVersionLabel(nextVersionLabel(updates))
  }, [updates])

  const totalFilledChanges = useMemo(
    () => changes.filter((item) => item.description.trim().length >= 3).length,
    [changes],
  )

  async function handleBannerUpload(file: File | null) {
    if (!file) return

    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(String(reader.result ?? ''))
      reader.onerror = () => reject(new Error('Falha ao ler imagem'))
      reader.readAsDataURL(file)
    })

    setBannerImage(dataUrl)
  }

  async function publishUpdate() {
    const normalizedChanges = changes
      .map((item) => ({
        id: item.id,
        kind: item.kind,
        description: item.description.trim(),
      }))
      .filter((item) => item.description.length >= 3)

    if (versionLabel.trim().length < 2) {
      setError('Defina a versão da atualização')
      return
    }

    if (normalizedChanges.length === 0) {
      setError('Adicione pelo menos uma alteração para publicar')
      return
    }

    setSaving(true)
    setError(null)

    try {
      const response = await apiFetch<{ success: boolean; update?: UpdatePost; error?: string }>('/api/admin/updates', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          versionLabel: versionLabel.trim(),
          bannerImage: bannerImage.trim() || null,
          publishedAt: toMiddayIso(publishedDate),
          changesCount,
          changes: normalizedChanges,
        }),
        csrfToken: csrfToken ?? undefined,
      })

      if (!response.success || !response.update) {
        setError(response.error || 'Falha ao publicar atualização')
        return
      }

      setUpdates((current) => [response.update!, ...current].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)))
      setPublishedDate(todayInputValue())
      setBannerImage('')
      setChangesCount(1)
      setChanges([createDraftChange()])
    } catch {
      setError('Falha ao publicar atualização')
    } finally {
      setSaving(false)
    }
  }

  async function removeUpdate(update: UpdatePost) {
    const confirmed = window.confirm(`Apagar a atualização ${update.versionLabel}?`)
    if (!confirmed) return

    setRemovingId(update.id)
    setError(null)

    try {
      const response = await apiFetch<{ success: boolean; removedUpdateId?: string; error?: string }>(
        `/api/admin/updates/${update.id}`,
        {
          method: 'DELETE',
          csrfToken: csrfToken ?? undefined,
        },
      )

      if (!response.success || !response.removedUpdateId) {
        setError(response.error || 'Falha ao apagar atualização')
        return
      }

      setUpdates((current) => current.filter((item) => item.id !== response.removedUpdateId))
    } catch {
      setError('Falha ao apagar atualização')
    } finally {
      setRemovingId(null)
    }
  }

  return (
    <div className="grid gap-5">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
        <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(4,15,30,0.96),rgba(2,9,20,0.98))] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-[Oxanium] text-2xl font-semibold text-white">Publicar atualização</div>
              <div className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
                Publique a versão, a data, o banner e as mudanças. A atualização mais recente fica destacada automaticamente.
              </div>
            </div>

            <div className="rounded-2xl border border-[#1595ff33] bg-[#07192d] px-4 py-3 text-right">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Alterações válidas</div>
              <div className="mt-1 font-[Oxanium] text-2xl font-semibold text-[#58c3ff]">{totalFilledChanges}</div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Versão</div>
              <input
                value={versionLabel}
                onChange={(event) => setVersionLabel(event.target.value)}
                className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 outline-none transition focus:border-white/20"
                placeholder="v1.0.2026"
              />
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Data publicada</div>
              <input
                type="date"
                value={publishedDate}
                onChange={(event) => setPublishedDate(event.target.value)}
                className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 outline-none transition focus:border-white/20"
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Quantidade de alterações</div>
            <input
              type="number"
              min={1}
              max={999}
              value={changesCount}
              onChange={(event) => setChangesCount(Math.max(1, Math.min(999, Number(event.target.value) || 1)))}
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 outline-none transition focus:border-white/20"
              placeholder="1"
            />
          </div>

          <div className="mt-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Banner da atualização</div>
            <div className="mt-2 grid gap-3 md:grid-cols-[minmax(0,1fr),auto]">
              <input
                value={bannerImage}
                onChange={(event) => setBannerImage(event.target.value)}
                className="h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 outline-none transition focus:border-white/20"
                placeholder="Cole uma URL, caminho de /public ou envie uma imagem"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white/78 transition hover:bg-white/8"
              >
                <Upload className="h-4 w-4" />
                Enviar banner
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? null
                  void handleBannerUpload(file)
                }}
              />
            </div>
          </div>

          <div className="mt-5 rounded-[1.6rem] border border-[#17304c] bg-[#031120] p-4">
            <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-white/50">Prévia do banner</div>
            <div className="relative h-56 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(41,138,255,0.42),transparent_34%),linear-gradient(135deg,#071627_0%,#081d35_44%,#03111f_100%)]">
              {bannerImage ? <img src={bannerImage} alt="Banner da atualização" className="h-full w-full object-cover opacity-70" /> : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,18,0.18),rgba(2,8,18,0.92))]" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#1595ff33] bg-[#031426]/86 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58c3ff]">
                <Sparkles className="h-3.5 w-3.5" />
                PRIME - ATUALIZAÇÃO - {publishedDate.split('-').reverse().join('/')}
              </div>
              <div className="absolute left-4 bottom-4">
                <div className="rounded-full border border-[#1595ff55] bg-[#07213d]/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7fc8ff]">
                  {versionLabel || 'v1.0.2026'}
                </div>
              </div>
              <div className="absolute right-4 bottom-4 rounded-2xl border border-white/10 bg-[#041221]/88 px-4 py-2 text-right shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/36">Alterações</div>
                <div className="mt-1 font-[Oxanium] text-lg font-semibold text-white">{changesCount}</div>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Itens do changelog</div>
              <button
                type="button"
                onClick={() => setChanges((current) => [...current, createDraftChange()])}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/8"
              >
                <Plus className="h-4 w-4" />
                Nova alteração
              </button>
            </div>

            {changes.map((item, index) => (
              <div key={item.id} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="grid gap-3 md:grid-cols-[190px,minmax(0,1fr),auto]">
                  <select
                    value={item.kind}
                    onChange={(event) =>
                      setChanges((current) =>
                        current.map((entry) => (entry.id === item.id ? { ...entry, kind: event.target.value as UpdateChangeKind } : entry)),
                      )
                    }
                    className="h-11 rounded-2xl border border-white/10 bg-[#061220] px-4 text-sm text-white/90 outline-none"
                  >
                    <option value="MELHORIA">Melhoria</option>
                    <option value="CORRECAO">Correção</option>
                    <option value="REMOCAO">Remoção</option>
                  </select>

                  <input
                    value={item.description}
                    onChange={(event) =>
                      setChanges((current) =>
                        current.map((entry) => (entry.id === item.id ? { ...entry, description: event.target.value } : entry)),
                      )
                    }
                    className="h-11 rounded-2xl border border-white/10 bg-[#061220] px-4 text-sm text-white/90 outline-none"
                    placeholder={`Descreva a alteração ${index + 1}`}
                  />

                  <button
                    type="button"
                    onClick={() => setChanges((current) => (current.length === 1 ? current : current.filter((entry) => entry.id !== item.id)))}
                    className="inline-flex h-11 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 px-4 text-red-200 transition hover:bg-red-500/18"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={saving}
              onClick={() => void publishUpdate()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[color:var(--accent)] px-5 text-sm font-semibold text-white transition hover:brightness-95 disabled:opacity-60"
            >
              <Upload className="h-4 w-4" />
              {saving ? 'Publicando...' : 'Publicar atualização'}
            </button>
            <button
              type="button"
              onClick={() => {
                setVersionLabel(nextVersionLabel(updates))
                setPublishedDate(todayInputValue())
                setBannerImage('')
                setChangesCount(1)
                setChanges([createDraftChange()])
              }}
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white/74 transition hover:bg-white/8"
            >
              Limpar formulário
            </button>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(4,15,30,0.96),rgba(2,9,20,0.98))] p-5">
          <div className="font-[Oxanium] text-2xl font-semibold text-white">Atualizações publicadas</div>
          <div className="mt-2 text-sm leading-7 text-white/58">
            A última publicada aparece em destaque na aba pública. As anteriores vão para a seção de histórico automaticamente.
          </div>

          <div className="mt-5 space-y-4">
            {updates.map((update, index) => (
              <article key={update.id} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#061220]">
                <div className="relative h-40 bg-[radial-gradient(circle_at_top_left,rgba(41,138,255,0.42),transparent_34%),linear-gradient(135deg,#071627_0%,#081d35_44%,#03111f_100%)]">
                  {update.bannerImage ? <img src={update.bannerImage} alt={update.versionLabel} className="h-full w-full object-cover opacity-70" /> : null}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,18,0.12),rgba(2,8,18,0.92))]" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <div className="rounded-full border border-[#1595ff55] bg-[#07213d]/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7fc8ff]">
                      {update.versionLabel}
                    </div>
                    {index === 0 ? (
                      <div className="rounded-full border border-[#32c98b44] bg-[#0c2f24]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6be7a8]">
                        Mais recente
                      </div>
                    ) : null}
                  </div>
                  <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full border border-[#1595ff33] bg-[#031426]/86 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58c3ff]">
                    <ImagePlus className="h-3.5 w-3.5" />
                    PRIME - ATUALIZAÇÃO
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white/84">
                    {new Date(update.publishedAt).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(Array.from(new Set(update.changes.map((item) => item.kind))) as UpdateChangeKind[]).map((kind) => (
                      <div key={kind} className={cn('rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]', kindBadgeClass(kind))}>
                        {kind}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="text-sm text-white/52">{update.changesCount} alterações</div>
                    <button
                      type="button"
                      disabled={removingId === update.id}
                      onClick={() => void removeUpdate(update)}
                      className="inline-flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-200 transition hover:bg-red-500/18 disabled:opacity-60"
                    >
                      <Trash2 className="h-4 w-4" />
                      Apagar
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {!loading && updates.length === 0 ? (
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm text-white/60">
                Nenhuma atualização publicada ainda.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
