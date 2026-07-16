import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Locale = 'pt' | 'en' | 'es'

const LOCALE_STORAGE_KEY = 'prime_locale'

export const localeLabels: Record<Locale, { flag: string; label: string }> = {
  pt: { flag: '🇧🇷', label: 'Português' },
  en: { flag: '🇺🇸', label: 'English' },
  es: { flag: '🇪🇸', label: 'Español' },
}

type Copy = {
  common: {
    notFound: string
    home: string
    agenda: string
    updates: string
    tournament: string
    faq: string
    admin: string
    logout: string
    loading: string
    ready: string
  }
  home: {
    heroTitleLead: string
    heroTitleAccent: string
    heroSubtitle: string
    openAgenda: string
    viewTournament: string
    registerDiscord: string
    openingDiscord: string
    pathEyebrow: string
    pathTitle: string
    pathSubtitle: string
    pathBody: string
    statsAccounts: string
    statsChampionships: string
    statsClans: string
    footerLegal: string
    footerTerms: string
    footerCopyright: string
  }
  header: {
    home: string
    agenda: string
    updates: string
    tournament: string
    faq: string
    admin: string
    logout: string
  }
  updates: {
    title: string
    subtitle: string
    latest: string
    previous: string
    empty: string
    newBadge: string
    details: string
    updateNotes: string
    changesLabel: (count: number) => string
    publishedLabel: string
    kindLabels: Record<'MELHORIA' | 'CORRECAO' | 'REMOCAO', string>
  }
  faq: {
    title: string
    subtitle: string
    searchPlaceholder: string
    empty: string
    items: Array<{
      q: string
      a: string
      linkLabel?: string
      linkHref?: string
      aSuffix?: string
    }>
  }
  agenda: {
    title: string
    subtitle: string
    currentWeek: string
    week: string
    filterPlaceholder: string
    loading: string
    publishedEvents: string
    noEvents: string
    today: string
    dayLabels: string[]
  }
  tournament: {
    eyebrow: string
    title: string
    groups: string
    bracket: string
    groupsDescription: string
    bracketDescription: string
    loadError: string
    loading: string
  }
  admin: {
    title: string
    subtitle: string
    redirecting: string
    loadError: string
    homeTab: string
    agendaTab: string
      updatesTab: string
    tournamentTab: string
    usersTab: string
    removeUserConfirm: (username: string) => string
    removeUserError: string
  }
  discordCallback: {
    connecting: string
    invalidReturn: string
    authError: string
    wait: string
  }
}

const copy: Record<Locale, Copy> = {
  pt: {
    common: {
      notFound: 'Página não encontrada.',
      home: 'Home',
      agenda: 'Agenda',
      updates: 'Atualizações',
      tournament: 'Torneio',
      faq: 'FAQ',
      admin: 'Admin',
      logout: 'Sair',
      loading: 'Carregando...',
      ready: 'Pronto',
    },
    home: {
      heroTitleLead: 'O seu pvp',
      heroTitleAccent: 'prime',
      heroSubtitle: 'Mais visual. Mais competitivo. Mais organizado.',
      openAgenda: 'Abrir agenda',
      viewTournament: 'Ver torneio',
      registerDiscord: 'Registrar com Discord',
      openingDiscord: 'Abrindo Discord...',
      pathEyebrow: 'Nossa trajetoria',
      pathTitle: 'O que e a PRIME?',
      pathSubtitle: 'Uma plataforma pensada para centralizar agenda, torneios e identidade competitiva em um unico lugar.',
      pathBody:
        'A PRIME nasceu com um proposito claro: criar o ambiente competitivo mais acessivel, justo e envolvente de GOALS, colocando a comunidade no centro de tudo. Mais do que um servidor, a PRIME e um ecossistema competitivo onde todos os tipos de jogadores tem espaco para competir, evoluir e fazer historia.',
      statsAccounts: 'Contas criadas',
      statsChampionships: 'Campeonatos realizados',
      statsClans: 'Membros de clans',
      footerLegal:
        'GOALS e outras marcas citadas pertencem aos seus respectivos proprietarios. A PRIME nao e afiliada nem endossada por terceiros e nao se responsabiliza por conteudos externos.',
      footerTerms: 'Termos de uso',
      footerCopyright: '© 2026 PRIME. Todos os direitos reservados.',
    },
    header: {
      home: 'Home',
      agenda: 'Agenda',
      updates: 'Atualizações',
      tournament: 'Torneio',
      faq: 'FAQ',
      admin: 'Admin',
      logout: 'Sair',
    },
    updates: {
      title: 'Atualizações',
      subtitle: 'Notas de atualização da PRIME com o que entrou, mudou, saiu ou foi corrigido.',
      latest: 'Atualização recente',
      previous: 'Atualizações anteriores',
      empty: 'Nenhuma atualização publicada ainda.',
      newBadge: 'Novo',
      details: 'Ver mais',
      updateNotes: 'Notas da atualização',
      changesLabel: (count) => `${count} alteraç${count === 1 ? 'ão' : 'ões'}`,
      publishedLabel: 'Publicado em',
      kindLabels: {
        MELHORIA: 'Melhoria',
        CORRECAO: 'Correção',
        REMOCAO: 'Remoção',
      },
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Respostas diretas para o que mais aparece.',
      searchPlaceholder: 'Buscar no FAQ...',
      empty: 'Nada encontrado.',
      items: [
        {
          q: 'Como faco para criar conta?',
          a: 'Ao entrar no site, clique para registrar com Discord e autorize o acesso. O nome e o avatar vem do seu perfil do Discord.',
        },
        {
          q: 'Como funciona o login?',
          a: 'O acesso acontece via Discord OAuth. Depois da autorizacao, o site cria uma sessao segura por cookie HttpOnly.',
        },
        {
          q: 'Quando aparecem eventos novos?',
          a: 'O proprietario publica os eventos diretamente na aba Agenda. Sempre que um evento da semana for postado, ele vai aparecer por la.',
        },
        {
          q: 'Como fico sabendo quando vai ter torneio?',
          a: 'Quando rolar torneio ou algum aviso importante, entre no',
          linkLabel: 'Discord da PRIME',
          linkHref: 'https://discord.gg/gPyFGmfcjp',
          aSuffix: 'e fique atento na aba de avisos para nao perder as atualizacoes.',
        },
        {
          q: 'Onde acompanho avisos e informacoes importantes?',
          a: 'Fique sempre atento na aba de avisos e no FAQ. E por ali que voce vai encontrar orientacoes novas, eventos da semana e informacoes relacionadas a competicoes.',
        },
      ],
    },
    agenda: {
      title: 'Agenda',
      subtitle: 'Eventos e anuncios publicados.',
      currentWeek: 'SEMANA ATUAL',
      week: 'SEMANA',
      filterPlaceholder: 'Filtrar por texto...',
      loading: 'Carregando...',
      publishedEvents: 'evento(s)',
      noEvents: 'Nenhum evento publicado ainda.',
      today: 'HOJE',
      dayLabels: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
    },
    tournament: {
      eyebrow: 'TORNEIO',
      title: 'Fase de grupos e chaveamento',
      groups: 'Fase de grupos',
      bracket: 'Chaveamento',
      groupsDescription: 'Fase de grupos do A ao H com 4 vagas por grupo, pronta para receber os nomes definidos no painel admin.',
      bracketDescription: 'Chaveamento responsivo com as linhas conectando oitavas, quartas, semifinais e final.',
      loadError: 'Nao foi possivel carregar o torneio agora.',
      loading: 'Carregando torneio...',
    },
    admin: {
      title: 'Admin',
      subtitle: 'Painel de gerenciamento (temporariamente aberto para usuarios logados)',
      redirecting: 'Redirecionando...',
      loadError: 'Falha ao carregar dados do admin',
      homeTab: 'Home',
      agendaTab: 'Agenda',
      updatesTab: 'Atualizações',
      tournamentTab: 'Torneio',
      usersTab: 'Usuarios',
      removeUserConfirm: (username) => `Remover o usuario @${username}? Ele vai precisar fazer login novamente.`,
      removeUserError: 'Falha ao remover usuario',
    },
    discordCallback: {
      connecting: 'Conectando com Discord...',
      invalidReturn: 'Retorno do Discord invalido',
      authError: 'Falha ao autenticar com Discord',
      wait: 'So mais um instante, estamos finalizando seu acesso.',
    },
  },
  en: {
    common: {
      notFound: 'Page not found.',
      home: 'Home',
      agenda: 'Schedule',
      updates: 'Updates',
      tournament: 'Tournament',
      faq: 'FAQ',
      admin: 'Admin',
      logout: 'Logout',
      loading: 'Loading...',
      ready: 'Ready',
    },
    home: {
      heroTitleLead: 'Your',
      heroTitleAccent: 'prime pvp',
      heroSubtitle: 'More visual. More competitive. More organized.',
      openAgenda: 'Open schedule',
      viewTournament: 'View tournament',
      registerDiscord: 'Register with Discord',
      openingDiscord: 'Opening Discord...',
      pathEyebrow: 'Our journey',
      pathTitle: 'What is PRIME?',
      pathSubtitle: 'A platform built to centralize schedule, tournaments and competitive identity in one place.',
      pathBody:
        'PRIME was created with one clear purpose: to build the most accessible, fair and engaging competitive environment for GOALS, putting the community at the center of everything. More than a server, PRIME is a competitive ecosystem where every kind of player has space to compete, improve and make history.',
      statsAccounts: 'Accounts created',
      statsChampionships: 'Championships hosted',
      statsClans: 'Clan members',
      footerLegal:
        'GOALS and other trademarks mentioned belong to their respective owners. PRIME is not affiliated with or endorsed by third parties and is not responsible for external content.',
      footerTerms: 'Terms of use',
      footerCopyright: '© 2026 PRIME. All rights reserved.',
    },
    header: {
      home: 'Home',
      agenda: 'Schedule',
      updates: 'Updates',
      tournament: 'Tournament',
      faq: 'FAQ',
      admin: 'Admin',
      logout: 'Logout',
    },
    updates: {
      title: 'Updates',
      subtitle: 'PRIME patch notes with what was added, improved, removed or fixed.',
      latest: 'Latest update',
      previous: 'Previous updates',
      empty: 'No updates published yet.',
      newBadge: 'New',
      details: 'Read more',
      updateNotes: 'Update notes',
      changesLabel: (count) => `${count} change${count === 1 ? '' : 's'}`,
      publishedLabel: 'Published on',
      kindLabels: {
        MELHORIA: 'Improvement',
        CORRECAO: 'Fix',
        REMOCAO: 'Removal',
      },
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Straight answers to the most common questions.',
      searchPlaceholder: 'Search FAQ...',
      empty: 'Nothing found.',
      items: [
        {
          q: 'How do I create an account?',
          a: 'When you enter the site, click to register with Discord and authorize access. Your name and avatar come from your Discord profile.',
        },
        {
          q: 'How does login work?',
          a: 'Access happens through Discord OAuth. After authorization, the site creates a secure HttpOnly cookie session.',
        },
        {
          q: 'When do new events appear?',
          a: 'The owner publishes events directly in the Schedule tab. Whenever a weekly event is posted, it will appear there.',
        },
        {
          q: 'How do I know when a tournament is happening?',
          a: 'When there is a tournament or an important announcement, join the',
          linkLabel: 'PRIME Discord',
          linkHref: 'https://discord.gg/gPyFGmfcjp',
          aSuffix: 'and keep an eye on the notices tab so you do not miss updates.',
        },
        {
          q: 'Where should I check important announcements?',
          a: 'Always keep an eye on the notices tab and the FAQ. That is where you will find new guidance, weekly events and competition-related information.',
        },
      ],
    },
    agenda: {
      title: 'Schedule',
      subtitle: 'Published events and announcements.',
      currentWeek: 'CURRENT WEEK',
      week: 'WEEK',
      filterPlaceholder: 'Filter by text...',
      loading: 'Loading...',
      publishedEvents: 'event(s)',
      noEvents: 'No published events yet.',
      today: 'TODAY',
      dayLabels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    },
    tournament: {
      eyebrow: 'TOURNAMENT',
      title: 'Group stage and bracket',
      groups: 'Group stage',
      bracket: 'Bracket',
      groupsDescription: 'Group stage from A to H with 4 slots per group, ready to receive the names defined in the admin panel.',
      bracketDescription: 'Responsive bracket with lines connecting round of 16, quarterfinals, semifinals and final.',
      loadError: 'Could not load the tournament right now.',
      loading: 'Loading tournament...',
    },
    admin: {
      title: 'Admin',
      subtitle: 'Management panel (temporarily open for logged-in users)',
      redirecting: 'Redirecting...',
      loadError: 'Failed to load admin data',
      homeTab: 'Home',
      agendaTab: 'Schedule',
      updatesTab: 'Updates',
      tournamentTab: 'Tournament',
      usersTab: 'Users',
      removeUserConfirm: (username) => `Remove user @${username}? They will need to log in again.`,
      removeUserError: 'Failed to remove user',
    },
    discordCallback: {
      connecting: 'Connecting with Discord...',
      invalidReturn: 'Invalid Discord return',
      authError: 'Failed to authenticate with Discord',
      wait: 'Just a moment, we are finishing your access.',
    },
  },
  es: {
    common: {
      notFound: 'Pagina no encontrada.',
      home: 'Inicio',
      agenda: 'Agenda',
      updates: 'Actualizaciones',
      tournament: 'Torneo',
      faq: 'FAQ',
      admin: 'Admin',
      logout: 'Salir',
      loading: 'Cargando...',
      ready: 'Listo',
    },
    home: {
      heroTitleLead: 'Tu',
      heroTitleAccent: 'pvp prime',
      heroSubtitle: 'Mas visual. Mas competitivo. Mas organizado.',
      openAgenda: 'Abrir agenda',
      viewTournament: 'Ver torneo',
      registerDiscord: 'Registrarse con Discord',
      openingDiscord: 'Abriendo Discord...',
      pathEyebrow: 'Nuestra trayectoria',
      pathTitle: 'Que es PRIME?',
      pathSubtitle: 'Una plataforma pensada para centralizar agenda, torneos e identidad competitiva en un solo lugar.',
      pathBody:
        'PRIME nacio con un proposito claro: crear el entorno competitivo mas accesible, justo y envolvente de GOALS, poniendo a la comunidad en el centro de todo. Mas que un servidor, PRIME es un ecosistema competitivo donde todo tipo de jugador tiene espacio para competir, mejorar y hacer historia.',
      statsAccounts: 'Cuentas creadas',
      statsChampionships: 'Campeonatos realizados',
      statsClans: 'Miembros de clanes',
      footerLegal:
        'GOALS y otras marcas citadas pertenecen a sus respectivos propietarios. PRIME no esta afiliada ni respaldada por terceros y no se responsabiliza por contenidos externos.',
      footerTerms: 'Terminos de uso',
      footerCopyright: '© 2026 PRIME. Todos los derechos reservados.',
    },
    header: {
      home: 'Inicio',
      agenda: 'Agenda',
      updates: 'Actualizaciones',
      tournament: 'Torneo',
      faq: 'FAQ',
      admin: 'Admin',
      logout: 'Salir',
    },
    updates: {
      title: 'Actualizaciones',
      subtitle: 'Notas de actualización de PRIME con lo que entró, mejoró, se eliminó o se corrigió.',
      latest: 'Actualización reciente',
      previous: 'Actualizaciones anteriores',
      empty: 'Aun no hay actualizaciones publicadas.',
      newBadge: 'Nuevo',
      details: 'Ver más',
      updateNotes: 'Notas de actualización',
      changesLabel: (count) => `${count} cambio${count === 1 ? '' : 's'}`,
      publishedLabel: 'Publicado el',
      kindLabels: {
        MELHORIA: 'Mejora',
        CORRECAO: 'Corrección',
        REMOCAO: 'Eliminación',
      },
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Respuestas directas para lo que mas aparece.',
      searchPlaceholder: 'Buscar en el FAQ...',
      empty: 'Nada encontrado.',
      items: [
        {
          q: 'Como creo una cuenta?',
          a: 'Al entrar al sitio, haz clic para registrarte con Discord y autoriza el acceso. Tu nombre y avatar vienen de tu perfil de Discord.',
        },
        {
          q: 'Como funciona el inicio de sesion?',
          a: 'El acceso ocurre mediante Discord OAuth. Despues de la autorizacion, el sitio crea una sesion segura con cookie HttpOnly.',
        },
        {
          q: 'Cuando aparecen eventos nuevos?',
          a: 'El propietario publica los eventos directamente en la pestaña Agenda. Siempre que se publique un evento de la semana, aparecera alli.',
        },
        {
          q: 'Como me entero cuando habra torneo?',
          a: 'Cuando haya torneo o un aviso importante, entra al',
          linkLabel: 'Discord de PRIME',
          linkHref: 'https://discord.gg/gPyFGmfcjp',
          aSuffix: 'y mantente atento a la pestaña de avisos para no perder actualizaciones.',
        },
        {
          q: 'Donde veo avisos e informacion importante?',
          a: 'Mantente siempre atento a la pestaña de avisos y al FAQ. Alli encontraras nuevas orientaciones, eventos de la semana e informacion relacionada con competiciones.',
        },
      ],
    },
    agenda: {
      title: 'Agenda',
      subtitle: 'Eventos y anuncios publicados.',
      currentWeek: 'SEMANA ACTUAL',
      week: 'SEMANA',
      filterPlaceholder: 'Filtrar por texto...',
      loading: 'Cargando...',
      publishedEvents: 'evento(s)',
      noEvents: 'Aun no hay eventos publicados.',
      today: 'HOY',
      dayLabels: ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom'],
    },
    tournament: {
      eyebrow: 'TORNEO',
      title: 'Fase de grupos y llave',
      groups: 'Fase de grupos',
      bracket: 'Llave',
      groupsDescription: 'Fase de grupos de la A a la H con 4 plazas por grupo, lista para recibir los nombres definidos en el panel admin.',
      bracketDescription: 'Llave responsiva con lineas conectando octavos, cuartos, semifinales y final.',
      loadError: 'No fue posible cargar el torneo ahora.',
      loading: 'Cargando torneo...',
    },
    admin: {
      title: 'Admin',
      subtitle: 'Panel de gestion (temporalmente abierto para usuarios conectados)',
      redirecting: 'Redirigiendo...',
      loadError: 'Error al cargar datos del admin',
      homeTab: 'Inicio',
      agendaTab: 'Agenda',
      updatesTab: 'Actualizaciones',
      tournamentTab: 'Torneo',
      usersTab: 'Usuarios',
      removeUserConfirm: (username) => `Eliminar al usuario @${username}? Tendrá que iniciar sesion nuevamente.`,
      removeUserError: 'Error al eliminar usuario',
    },
    discordCallback: {
      connecting: 'Conectando con Discord...',
      invalidReturn: 'Retorno de Discord invalido',
      authError: 'Error al autenticar con Discord',
      wait: 'Solo un momento, estamos finalizando tu acceso.',
    },
  },
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  text: Copy
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'pt'
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return stored === 'en' || stored === 'es' || stored === 'pt' ? stored : 'pt'
  })

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      text: copy[locale],
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used within LocaleProvider')
  return context
}
