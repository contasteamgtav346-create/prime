import type { TournamentConfig } from '@/types'

export const TOURNAMENT_GROUP_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const

export function createDefaultTournamentConfig(): TournamentConfig {
  return {
    groups: TOURNAMENT_GROUP_LETTERS.map((letter) => ({
      letter,
      slots: ['', '', '', ''],
    })),
    bracket: {
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
    },
  }
}
