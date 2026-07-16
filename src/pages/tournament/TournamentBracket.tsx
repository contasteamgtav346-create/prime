import BracketBoard from '@/components/tournament/BracketBoard'
import { createDefaultTournamentConfig } from '@/lib/tournament'

export default function TournamentBracket() {
  return <BracketBoard bracket={createDefaultTournamentConfig().bracket} />
}
