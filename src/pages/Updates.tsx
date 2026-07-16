import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, CalendarDays, Newspaper, Wrench, X } from 'lucide-react'
import SiteShell from '@/components/layout/SiteShell'
import { useLocale } from '@/contexts/LocaleContext'
import type { UpdateChangeItem, UpdateChangeKind, UpdatePost } from '@/types'
import { apiFetch } from '@/utils/api'
import { cn } from '@/lib/utils'

const kindOrder: UpdateChangeKind[] = ['MELHORIA', 'CORRECAO', 'REMOCAO']

function formatShortDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

function formatLongDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function buildHeadline(iso: string, locale: string) {
  return `CHANGELOG PRIME - ATUALIZAÇÃO DE ${formatShortDate(iso, locale)}`
}

function buildBannerStamp(iso: string, locale: string) {
  return `PRIME - ATUALIZAÇÃO - ${formatShortDate(iso, locale)}`
}

function buildCountLabel(count: number, text: ReturnType<typeof useLocale>['text']) {
  return text.updates.changesLabel(count)
}

function kindChipClass(kind: UpdateChangeKind) {
  if (kind === 'MELHORIA') return 'border-[#1aa8ff33] bg-[#0a2b46] text-[#58c3ff]'
  if (kind === 'CORRECAO') return 'border-[#30d18a33] bg-[#0b2d22] text-[#64e8a2]'
  return 'border-[#ff8b4233] bg-[#342012] text-[#ffac6f]'
}

function groupChanges(items: UpdateChangeItem[]) {
  return kindOrder
    .map((kind) => ({
      kind,
      items: items.filter((item) => item.kind === kind),
    }))
    .filter((group) => group.items.length > 0)
}

function UpdateBanner({
  update,
  locale,
  stampClassName,
  showStamp = true,
}: {
  update: UpdatePost
  locale: string
  stampClassName?: string
  showStamp?: boolean
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(3,14,31,0.98),rgba(2,10,22,0.98))]">
      {update.bannerImage ? (
        <img src={update.bannerImage} alt={buildHeadline(update.publishedAt, locale)} className="h-full w-full object-cover opacity-70" />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(41,138,255,0.42),transparent_34%),linear-gradient(135deg,#071627_0%,#081d35_44%,#03111f_100%)]" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,18,0.08),rgba(2,8,18,0.9))]" />
      {showStamp ? (
        <div className={cn('absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[#1595ff33] bg-[#031426]/86 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58c3ff]', stampClassName)}>
          {buildBannerStamp(update.publishedAt, locale)}
        </div>
      ) : null}
    </div>
  )
}

export default function Updates() {
  const { locale, text } = useLocale()
  const [updates, setUpdates] = useState<UpdatePost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedUpdate, setSelectedUpdate] = useState<UpdatePost | null>(null)

  const dateLocale = locale === 'en' ? 'en-US' : locale === 'es' ? 'es-ES' : 'pt-BR'

  useEffect(() => {
    let mounted = true
    setLoading(true)

    apiFetch<{ success: boolean; updates: UpdatePost[] }>('/api/site/updates')
      .then((response) => {
        if (!mounted) return
        if (response.success) setUpdates(response.updates)
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const latest = updates[0] ?? null
  const previous = updates.slice(1)
  const selectedGroups = useMemo(() => (selectedUpdate ? groupChanges(selectedUpdate.changes) : []), [selectedUpdate])

  return (
    <SiteShell contentClassName="max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <section className="rounded-[2rem] border border-[#17304c] bg-[linear-gradient(180deg,rgba(4,15,30,0.94),rgba(3,10,22,0.98))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.36)]">
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#154f81] bg-[#051629] text-[#1ea4ff]">
              <Newspaper className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-[Oxanium] text-3xl font-semibold text-white">{text.updates.title}</h1>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-white/65">{text.updates.subtitle}</p>
            </div>
          </div>
        </section>

        {loading ? (
          <div className="rounded-[2rem] border border-white/10 bg-black/30 px-6 py-10 text-sm text-white/65">{text.common.loading}</div>
        ) : latest ? (
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/38">{text.updates.latest}</div>

            <article className="overflow-hidden rounded-[2rem] border border-[#17304c] bg-[linear-gradient(180deg,rgba(3,12,26,0.98),rgba(2,8,18,0.98))] shadow-[0_24px_90px_rgba(0,0,0,0.32)]">
              <div className="relative h-[16rem] md:h-[20rem]">
                <UpdateBanner update={latest} locale={dateLocale} showStamp={false} />
                <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                  <div className="rounded-full border border-[#1595ff55] bg-[#07213d]/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7fc8ff]">
                    {latest.versionLabel}
                  </div>
                  <div className="rounded-full border border-[#32c98b44] bg-[#0c2f24]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6be7a8]">
                    {text.updates.newBadge}
                  </div>
                </div>
                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/78">
                  {formatLongDate(latest.publishedAt, dateLocale)}
                </div>
                <div className="absolute -bottom-20 left-4 z-10 inline-flex max-w-max items-center rounded-full border border-[#1595ff33] bg-[#031426]/94 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58c3ff] shadow-[0_8px_24px_rgba(0,0,0,0.24)]">
                  {buildBannerStamp(latest.publishedAt, dateLocale)}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h2 className="font-[Oxanium] text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
                  {buildHeadline(latest.publishedAt, dateLocale)}
                </h2>

                <div className="mt-5">
                  <div className="inline-flex items-center rounded-[1.15rem] border border-white/10 bg-[#061220] px-4 py-3 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-white/36">Resumo</div>
                      <div className="mt-1 font-[Oxanium] text-lg font-semibold text-white">
                        {buildCountLabel(latest.changesCount, text)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {kindOrder
                    .filter((kind) => latest.changes.some((item) => item.kind === kind))
                    .map((kind) => (
                      <div key={kind} className={cn('rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]', kindChipClass(kind))}>
                        {text.updates.kindLabels[kind]} ({latest.changes.filter((item) => item.kind === kind).length})
                      </div>
                    ))}
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedUpdate(latest)}
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/8"
                  >
                    {text.updates.details}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>

            <section className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/38">{text.updates.previous}</div>

              <div className="grid gap-4 lg:grid-cols-3">
                {previous.map((update) => (
                  <article
                    key={update.id}
                    className="overflow-hidden rounded-[1.7rem] border border-[#17304c] bg-[linear-gradient(180deg,rgba(3,12,26,0.98),rgba(2,8,18,0.98))] shadow-[0_18px_70px_rgba(0,0,0,0.28)]"
                  >
                    <div className="relative h-44">
                      <UpdateBanner update={update} locale={dateLocale} showStamp={false} />
                      <div className="absolute left-4 top-4 rounded-full border border-[#1595ff55] bg-[#07213d]/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7fc8ff]">
                        {update.versionLabel}
                      </div>
                      <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/78">
                        {formatLongDate(update.publishedAt, dateLocale)}
                      </div>
                      <div className="absolute bottom-0 left-4 z-10 inline-flex max-w-max items-center rounded-full border border-[#1595ff33] bg-[#031426]/94 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#58c3ff] shadow-[0_8px_24px_rgba(0,0,0,0.24)]">
                        {buildBannerStamp(update.publishedAt, dateLocale)}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-[Oxanium] text-xl font-semibold leading-tight text-white">
                        {buildHeadline(update.publishedAt, dateLocale)}
                      </h3>
                      <div className="mt-3 inline-flex rounded-xl border border-white/10 bg-[#061220] px-3 py-2 text-sm font-semibold text-white/74">
                        {buildCountLabel(update.changesCount, text)}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {kindOrder
                          .filter((kind) => update.changes.some((item) => item.kind === kind))
                          .map((kind) => (
                            <div key={kind} className={cn('rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]', kindChipClass(kind))}>
                              {text.updates.kindLabels[kind]} {update.changes.filter((item) => item.kind === kind).length}
                            </div>
                          ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedUpdate(update)}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition hover:text-white"
                      >
                        {text.updates.details}
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="rounded-[2rem] border border-white/10 bg-black/30 px-6 py-10 text-sm text-white/65">{text.updates.empty}</div>
        )}
      </div>

      {selectedUpdate ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-[#01050cb8] px-4 py-8 backdrop-blur-md">
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2rem] border border-[#17304c] bg-[linear-gradient(180deg,rgba(4,15,30,0.98),rgba(2,8,18,0.99))] shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <button
              type="button"
              onClick={() => setSelectedUpdate(null)}
              className="absolute right-5 top-5 z-10 rounded-2xl border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="border-b border-[#17304c] p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <div className="rounded-full border border-[#1595ff55] bg-[#07213d]/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7fc8ff]">
                  {selectedUpdate.versionLabel}
                </div>
                <div className="rounded-full border border-[#32c98b44] bg-[#0c2f24]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6be7a8]">
                  {text.updates.updateNotes}
                </div>
              </div>

              <h2 className="mt-5 font-[Oxanium] text-4xl font-semibold leading-tight text-white">
                {buildHeadline(selectedUpdate.publishedAt, dateLocale)}
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em] text-white/40">
                <div className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {formatLongDate(selectedUpdate.publishedAt, dateLocale)}
                </div>
                <span>•</span>
                <span>{buildCountLabel(selectedUpdate.changesCount, text)}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {kindOrder
                  .filter((kind) => selectedUpdate.changes.some((item) => item.kind === kind))
                  .map((kind) => (
                    <div key={kind} className={cn('rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]', kindChipClass(kind))}>
                      {text.updates.kindLabels[kind]} ({selectedUpdate.changes.filter((item) => item.kind === kind).length})
                    </div>
                  ))}
              </div>
            </div>

            <div className="space-y-6 p-6 md:p-8">
              {selectedGroups.map((group) => (
                <section key={group.kind} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#154f81] bg-[#07192d] text-[#36b0ff]">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div className="font-[Oxanium] text-2xl font-semibold uppercase text-white">
                      {text.updates.kindLabels[group.kind]}
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                    <div className="text-sm uppercase tracking-[0.18em] text-white/38">{group.items.length} itens</div>
                  </div>

                  <div className="space-y-4">
                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-[1.5rem] border border-[#154f81] bg-[linear-gradient(180deg,rgba(6,19,36,0.92),rgba(4,13,25,0.96))] p-5"
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <div className={cn('rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]', kindChipClass(item.kind))}>
                            {text.updates.kindLabels[item.kind]}
                          </div>
                        </div>
                        <p className="mt-4 text-base leading-8 text-white/76">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </SiteShell>
  )
}
