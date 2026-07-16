import GroupStageBoard from '@/components/tournament/GroupStageBoard'
import { createDefaultTournamentConfig } from '@/lib/tournament'

export default function TournamentGroups() {
  return <GroupStageBoard groups={createDefaultTournamentConfig().groups} />
}
