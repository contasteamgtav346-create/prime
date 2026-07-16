import { FileText, Scale, ShieldCheck } from 'lucide-react'
import SiteShell from '@/components/layout/SiteShell'

type TermsSection = {
  id: string
  navLabel: string
  title: string
  paragraphs: Array<{ heading?: string; body: string }>
}

const sections: TermsSection[] = [
  {
    id: 'bem-vindo',
    navLabel: '1. Bem-vindo a PRIME',
    title: '1. Bem-vindo a PRIME',
    paragraphs: [
      {
        body: 'A PRIME e uma plataforma competitiva criada para reunir jogadores, agenda, torneios e administracao em um ambiente mais organizado, justo e confiavel. Ao navegar, registrar conta ou participar das atividades da plataforma, voce concorda com estas regras.',
      },
      {
        heading: 'Quem somos',
        body: 'A PRIME existe para entregar uma experiencia competitiva forte, limpa e bem estruturada, valorizando comunidade, transparencia e evolucao constante.',
      },
      {
        heading: 'Nosso compromisso',
        body: 'Trabalhamos continuamente para manter um ambiente seguro, justo e respeitoso para todos os usuarios. Em troca, esperamos que cada jogador siga as regras e contribua positivamente com a comunidade.',
      },
    ],
  },
  {
    id: 'para-jogar',
    navLabel: '2. Para Jogar',
    title: '2. Para Jogar',
    paragraphs: [
      {
        heading: 'Requisitos',
        body: 'Voce precisa utilizar dados validos, manter uma conta segura e respeitar as exigencias do servidor, da comunidade e das competicoes promovidas pela PRIME.',
      },
      {
        heading: 'Sua conta',
        body: 'Cada jogador deve usar apenas a propria conta. Compartilhar, vender, emprestar, trocar ou ceder acesso da conta para terceiros nao e permitido.',
      },
      {
        heading: 'Conduta minima',
        body: 'Ao utilizar a PRIME, voce concorda em agir com respeito, evitar abuso de falhas, nao prejudicar outros usuarios e nao comprometer a integridade das competicoes.',
      },
    ],
  },
  {
    id: 'codigo-conduta',
    navLabel: '3. Codigo de Conduta',
    title: '3. Codigo de Conduta',
    paragraphs: [
      {
        body: 'Todos os usuarios devem manter comportamento respeitoso com jogadores, administradores, equipe de suporte e comunidade em geral.',
      },
      {
        heading: 'Comportamentos proibidos',
        body: 'Nao toleramos assedio, ameacas, preconceito, provocacao extrema, spam, divulgacao maliciosa, tentativa de golpe ou qualquer atitude que degrade a experiencia coletiva.',
      },
      {
        heading: 'Uso de canais oficiais',
        body: 'Os canais vinculados a PRIME, incluindo Discord e paginas oficiais, devem ser usados com responsabilidade e dentro das orientacoes da equipe.',
      },
    ],
  },
  {
    id: 'o-que-e-proibido',
    navLabel: '4. O que e Proibido',
    title: '4. O que e Proibido',
    paragraphs: [
      {
        body: 'E proibido manipular resultados, explorar falhas de sistema, usar automacoes indevidas, burlar regras de torneio, falsificar informacoes ou causar dano intencional a outros usuarios.',
      },
      {
        heading: 'Integridade competitiva',
        body: 'Qualquer tentativa de obter vantagem injusta, combinacao de resultados, uso de contas secundarias para beneficio indevido ou interferencia externa nas competicoes pode gerar sancoes imediatas.',
      },
    ],
  },
  {
    id: 'penalidades',
    navLabel: '5. Penalidades',
    title: '5. Penalidades',
    paragraphs: [
      {
        body: 'As penalidades podem incluir advertencia, perda de acesso, bloqueio de competicoes, suspensao temporaria ou banimento permanente, conforme a gravidade da conduta.',
      },
      {
        heading: 'Reincidencia',
        body: 'Usuarios reincidentes ou que pratiquem violacoes graves podem ser removidos de forma definitiva, sem necessidade de etapas intermediarias.',
      },
    ],
  },
  {
    id: 'recursos',
    navLabel: '6. Recursos e Apelacoes',
    title: '6. Recursos e Apelacoes',
    paragraphs: [
      {
        body: 'Em alguns casos, a PRIME pode permitir revisao de decisoes administrativas. O envio de recurso nao garante reversao e sera analisado conforme evidencias disponiveis.',
      },
      {
        heading: 'Boa-fe',
        body: 'Pedidos falsos, ofensivos ou abusivos podem ser desconsiderados imediatamente.',
      },
    ],
  },
  {
    id: 'compras',
    navLabel: '7. Compras e Beneficios',
    title: '7. Compras e Beneficios',
    paragraphs: [
      {
        body: 'Qualquer beneficio, pacote, acesso especial ou vantagem disponibilizada pela PRIME deve ser usado dentro das regras. Abuso, chargeback indevido ou tentativa de fraude pode gerar bloqueio da conta.',
      },
    ],
  },
  {
    id: 'competicoes',
    navLabel: '8. Competicoes e Torneios',
    title: '8. Competicoes e Torneios',
    paragraphs: [
      {
        body: 'Ao participar de torneios, o usuario concorda em respeitar criterios de classificacao, horarios, formatacao, administracao de partidas e decisoes de arbitragem da PRIME.',
      },
      {
        heading: 'Ausencias e descumprimento',
        body: 'Atrasos, abandono, tentativa de manipular chaveamentos ou descumprimento das regras especificas do torneio podem resultar em desclassificacao.',
      },
    ],
  },
  {
    id: 'privacidade',
    navLabel: '9. Privacidade',
    title: '9. Privacidade',
    paragraphs: [
      {
        body: 'A PRIME utiliza informacoes necessarias para autenticacao, funcionamento da plataforma e seguranca operacional. O uso da plataforma implica concordancia com esse tratamento dentro do necessario para prestacao do servico.',
      },
    ],
  },
  {
    id: 'limitacoes',
    navLabel: '10. Limitacoes',
    title: '10. Limitacoes',
    paragraphs: [
      {
        body: 'A PRIME pode atualizar funcionalidades, regras, criterios de acesso e elementos da plataforma a qualquer momento, sempre que isso for necessario para seguranca, manutencao ou evolucao do servico.',
      },
    ],
  },
  {
    id: 'encerrar-conta',
    navLabel: '11. Encerrar Conta',
    title: '11. Encerrar Conta',
    paragraphs: [
      {
        body: 'A conta pode ser encerrada por iniciativa do usuario ou da administracao quando houver violacao das regras, risco para a comunidade ou necessidade operacional.',
      },
    ],
  },
  {
    id: 'contato',
    navLabel: '12. Contato e Suporte',
    title: '12. Contato e Suporte',
    paragraphs: [
      {
        body: 'Para suporte, revisoes ou contato institucional, utilize nossos canais oficiais. A equipe responde conforme disponibilidade e prioridade operacional.',
      },
    ],
  },
  {
    id: 'informacoes-legais',
    navLabel: '13. Informacoes Legais',
    title: '13. Informacoes Legais',
    paragraphs: [
      {
        body: 'GOALS e outras marcas citadas pertencem aos seus respectivos proprietarios. A PRIME nao e afiliada, patrocinada ou endossada por terceiros, salvo declaracao oficial expressa.',
      },
    ],
  },
  {
    id: 'aceitacao',
    navLabel: '14. Aceitacao',
    title: '14. Aceitacao',
    paragraphs: [
      {
        body: 'Ao continuar utilizando a PRIME, voce declara que leu, compreendeu e aceitou estes Termos e Codigo de Conduta.',
      },
    ],
  },
]

export default function Terms() {
  return (
    <SiteShell contentClassName="max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-[#17304c] bg-[linear-gradient(180deg,rgba(4,15,30,0.94),rgba(3,10,22,0.96))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.36)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#1d4e7a] bg-[#07192d] text-[#8f83ff]">
                <Scale className="h-7 w-7" />
              </div>

              <div>
                <h1 className="font-[Oxanium] text-3xl font-semibold text-white">Termos e Codigo de Conduta</h1>
                <div className="mt-1 text-sm text-white/45">Versao 2.1 · Atualizado em 15/07/2026</div>
                <p className="mt-5 max-w-4xl text-lg leading-8 text-white/72">
                  Leia com atencao. Ao jogar na PRIME, voce concorda com estas regras.
                </p>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-white/54">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#8f83ff]" />
                <span>PRIME Platform LTDA</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[280px,minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.8rem] border border-[#17304c] bg-[linear-gradient(180deg,rgba(4,15,30,0.94),rgba(3,10,22,0.96))] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
              <div className="px-2 pb-4 font-[Oxanium] text-xl font-semibold text-white">Navegacao</div>

              <div className="space-y-2">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${
                      index === 0
                        ? 'border-[#1d4e7a] bg-[#0a2038] text-[#7fc0ff]'
                        : 'border-transparent bg-transparent text-white/56 hover:border-[#17304c] hover:bg-[#08192d]'
                    }`}
                  >
                    <span>{section.navLabel}</span>
                    <span className="text-white/36">›</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-[1.8rem] border border-[#17304c] bg-[linear-gradient(180deg,rgba(4,15,30,0.94),rgba(3,10,22,0.96))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] scroll-mt-28"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#1d4e7a] bg-[#07192d] text-[#7fc0ff]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h2 className="font-[Oxanium] text-3xl font-semibold text-white">{section.title}</h2>
                </div>

                <div className="mt-5 space-y-5 text-lg leading-9 text-white/72">
                  {section.paragraphs.map((paragraph) => (
                    <div key={`${section.id}-${paragraph.heading ?? paragraph.body.slice(0, 20)}`}>
                      {paragraph.heading ? (
                        <div className="mb-1 font-[Oxanium] text-xl font-semibold text-white">{paragraph.heading}</div>
                      ) : null}
                      <p>{paragraph.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
