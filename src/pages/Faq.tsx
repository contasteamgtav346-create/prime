import { useMemo, useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import SiteShell from '@/components/layout/SiteShell'
import { useLocale } from '@/contexts/LocaleContext'
import { cn } from '@/lib/utils'

type FaqItem = {
  q: string
  a: string
  linkLabel?: string
  linkHref?: string
  aSuffix?: string
}

export default function Faq() {
  const { text } = useLocale()
  const items = useMemo<FaqItem[]>(
    () => text.faq.items,
    [text],
  )

  const [query, setQuery] = useState('')
  const [open, setOpen] = useState<number | null>(0)

  const filtered = items.filter((i) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (i.q + ' ' + i.a).toLowerCase().includes(q)
  })

  return (
    <SiteShell>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr),minmax(0,1fr)]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,19,33,0.88),rgba(4,10,20,0.94))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a698ff]">Central de ajuda</div>
          <div className="mt-4 font-[Oxanium] text-3xl font-semibold tracking-tight text-white">{text.faq.title}</div>
          <div className="mt-3 max-w-xl text-sm leading-7 text-white/65">{text.faq.subtitle}</div>
          <div className="mt-8 rounded-[1.6rem] border border-[#6d5bff2e] bg-[#091626]/72 p-5 text-sm leading-7 text-white/62">
            Acompanhe a agenda, os avisos e os torneios por aqui. Quando o proprietario publicar algo novo, essa area e a aba de agenda vao refletir as informacoes mais recentes.
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl lg:justify-self-end lg:w-full lg:max-w-[760px]">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <Search className="h-4 w-4 text-white/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={text.faq.searchPlaceholder}
              className="w-full bg-transparent text-sm text-white/90 placeholder:text-white/40 outline-none"
            />
          </div>

          <div className="mt-4 divide-y divide-white/10">
            {filtered.map((i, idx) => {
              const isOpen = open === idx
              return (
                <button
                  key={i.q}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full px-2 py-4 text-left"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-[Oxanium] text-base font-semibold text-white">{i.q}</div>
                    <ChevronDown className={cn('h-4 w-4 text-white/70 transition', isOpen && 'rotate-180')} />
                  </div>
                  <div className={cn('grid transition-all', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                    <div className="overflow-hidden">
                      <div className="mt-2 text-sm leading-7 text-white/65">
                        <span>{i.a} </span>
                        {i.linkLabel && i.linkHref ? (
                          <>
                            <a
                              href={i.linkHref}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold text-[#4aa3ff] transition hover:text-[#7fc0ff]"
                            >
                              {i.linkLabel}
                            </a>{' '}
                          </>
                        ) : null}
                        {i.aSuffix ? <span>{i.aSuffix}</span> : null}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}

            {filtered.length === 0 ? (
              <div className="px-2 py-6 text-sm text-white/60">{text.faq.empty}</div>
            ) : null}
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
