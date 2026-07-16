import type { TournamentConfig } from '@/types'

export default function GroupStageBoard({ groups }: Pick<TournamentConfig, 'groups'>) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(10,8,20,0.96),rgba(22,11,46,0.95)_52%,rgba(39,20,78,0.92))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => (
          <section
            key={group.letter}
            className="relative overflow-hidden rounded-[1.7rem] border border-[#c4b5fd]/18 bg-[linear-gradient(180deg,rgba(13,9,27,0.96),rgba(28,16,56,0.94))] p-4 shadow-[0_18px_32px_rgba(0,0,0,0.24)]"
          >
            <div className="pointer-events-none absolute inset-x-6 top-0 h-20 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_68%)] blur-2xl" />
            <div className="pointer-events-none absolute -right-10 top-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.2),transparent_68%)] blur-2xl" />

            <div className="text-center font-[Oxanium] text-2xl font-bold uppercase tracking-wide text-[#ede9fe]">
              Grupo {group.letter}
            </div>
            <div className="mt-1 text-center font-[Oxanium] text-[11px] uppercase tracking-[0.26em] text-[#c4b5fd]/80">
              Classificacao inicial
            </div>

            <div className="mt-4 space-y-3">
              {group.slots.map((name, index) => (
                <div
                  key={`${group.letter}-${index}`}
                  className="rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,12,34,0.96),rgba(30,18,58,0.9))] px-3 py-3 text-white/92 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_0_20px_rgba(139,92,246,0.08)]"
                >
                  <div className="font-[Oxanium] text-[11px] uppercase tracking-[0.24em] text-[#c4b5fd]">
                    Slot {index + 1}
                  </div>
                  <div className="mt-1 min-h-6 font-[Oxanium] text-sm font-semibold uppercase tracking-wide text-white">
                    {name || 'A definir'}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
