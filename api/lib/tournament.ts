import { z } from 'zod'
import { prisma } from './prisma.js'

export const GROUP_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const

const groupSlotSchema = z.string().trim().max(40)

const groupSchema = z.object({
  letter: z.enum(GROUP_LETTERS),
  slots: z.array(groupSlotSchema).length(4),
})

const matchSchema = z.object({
  id: z.string().trim().min(1).max(24),
  top: z.string().trim().max(40),
  bottom: z.string().trim().max(40),
})

const bracketSchema = z.object({
  roundOf16: z.array(matchSchema).length(8),
  quarterfinals: z.array(matchSchema).length(4),
  semifinals: z.array(matchSchema).length(2),
  final: z.array(matchSchema).length(1),
})

export const tournamentConfigSchema = z.object({
  groups: z.array(groupSchema).length(8),
  bracket: bracketSchema,
})

export type TournamentConfig = z.infer<typeof tournamentConfigSchema>

function createDefaultGroups(): TournamentConfig['groups'] {
  return GROUP_LETTERS.map((letter) => ({
    letter,
    slots: ['', '', '', ''],
  }))
}

function createDefaultBracket(): TournamentConfig['bracket'] {
  return {
    roundOf16: Array.from({ length: 8 }, (_, index) => ({
      id: `R16-${index + 1}`,
      top: '',
      bottom: '',
    })),
    quarterfinals: Array.from({ length: 4 }, (_, index) => ({
      id: `QF-${index + 1}`,
      top: '',
      bottom: '',
    })),
    semifinals: Array.from({ length: 2 }, (_, index) => ({
      id: `SF-${index + 1}`,
      top: '',
      bottom: '',
    })),
    final: [{ id: 'F-1', top: '', bottom: '' }],
  }
}

export function getDefaultTournamentConfig(): TournamentConfig {
  return {
    groups: createDefaultGroups(),
    bracket: createDefaultBracket(),
  }
}

function parseSection<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export function normalizeTournamentConfig(input: unknown): TournamentConfig {
  const parsed = tournamentConfigSchema.safeParse(input)
  if (parsed.success) return parsed.data
  return getDefaultTournamentConfig()
}

export async function getOrCreateTournamentState() {
  const defaults = getDefaultTournamentConfig()

  return prisma.tournamentState.upsert({
    where: { id: 'main' },
    update: {},
    create: {
      id: 'main',
      groupsJson: JSON.stringify(defaults.groups),
      bracketJson: JSON.stringify(defaults.bracket),
    },
  })
}

export async function readTournamentConfig(): Promise<TournamentConfig> {
  const state = await getOrCreateTournamentState()
  const groups = parseSection(state.groupsJson, getDefaultTournamentConfig().groups)
  const bracket = parseSection(state.bracketJson, getDefaultTournamentConfig().bracket)

  return normalizeTournamentConfig({ groups, bracket })
}
