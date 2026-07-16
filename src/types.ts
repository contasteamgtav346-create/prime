export type Role = 'USER' | 'ADMIN'

export type PublicUser = {
  id: string
  username: string
  emailMasked: string
  role: Role
  createdAt?: string
  avatarUrl?: string | null
}

export type DiscordUserPreview = {
  id: string
  username: string
  avatarUrl?: string | null
}

export type HomeMetrics = {
  accountsCount: number
  championshipsCount: number
  clansCount: number
}

export type UpdateChangeKind = 'MELHORIA' | 'CORRECAO' | 'REMOCAO'

export type UpdateChangeItem = {
  id: string
  kind: UpdateChangeKind
  description: string
}

export type UpdatePost = {
  id: string
  versionLabel: string
  bannerImage: string | null
  publishedAt: string
  changesCount: number
  changes: UpdateChangeItem[]
  createdAt: string
  updatedAt: string
}

export type AgendaEvent = {
  id: string
  title: string
  description: string
  startAt: string
  endAt: string | null
  borderColor?: string | null
  published: boolean
  createdAt: string
  updatedAt: string
}

export type TournamentGroup = {
  letter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
  slots: string[]
}

export type TournamentMatch = {
  id: string
  top: string
  bottom: string
}

export type TournamentConfig = {
  groups: TournamentGroup[]
  bracket: {
    roundOf16: TournamentMatch[]
    quarterfinals: TournamentMatch[]
    semifinals: TournamentMatch[]
    final: TournamentMatch[]
  }
}
