import type { TournamentConfig, TournamentMatch } from '@/types'

type MatchNode = {
  id: string
  x: number
  y: number
  match: TournamentMatch
}

const VIEWBOX_WIDTH = 1660
const VIEWBOX_HEIGHT = 760
const MATCH_WIDTH = 170
const MATCH_HEIGHT = 72

function shorten(label: string) {
  if (!label) return 'A definir'
  return label.length > 20 ? `${label.slice(0, 20)}...` : label
}

function centerY(node: MatchNode) {
  return node.y + MATCH_HEIGHT / 2
}

function leftEdge(node: MatchNode) {
  return node.x
}

function rightEdge(node: MatchNode) {
  return node.x + MATCH_WIDTH
}

function createConnectorPath(from: MatchNode, to: MatchNode, direction: 'right' | 'left') {
  const startX = direction === 'right' ? rightEdge(from) : leftEdge(from)
  const endX = direction === 'right' ? leftEdge(to) : rightEdge(to)
  const midX = direction === 'right' ? startX + 42 : startX - 42
  const startY = centerY(from)
  const endY = centerY(to)
  return `M ${startX} ${startY} H ${midX} V ${endY} H ${endX}`
}

function MatchCard({ node }: { node: MatchNode }) {
  return (
    <g>
      <rect
        x={node.x}
        y={node.y}
        width={MATCH_WIDTH}
        height={MATCH_HEIGHT}
        rx="18"
        fill="url(#matchCardFill)"
        stroke="#94a3b8"
        strokeOpacity="0.35"
        strokeWidth="1.4"
        filter="url(#matchGlow)"
      />
      <line
        x1={node.x + 10}
        y1={node.y + MATCH_HEIGHT / 2}
        x2={node.x + MATCH_WIDTH - 10}
        y2={node.y + MATCH_HEIGHT / 2}
        stroke="#94a3b8"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <text
        x={node.x + 14}
        y={node.y + 27}
        fill="#f8fafc"
        fontSize="13"
        fontWeight="700"
        fontFamily="Oxanium, sans-serif"
      >
        {shorten(node.match.top)}
      </text>
      <text
        x={node.x + 14}
        y={node.y + 55}
        fill="#dbeafe"
        fontSize="13"
        fontWeight="700"
        fontFamily="Oxanium, sans-serif"
      >
        {shorten(node.match.bottom)}
      </text>
    </g>
  )
}

function roundLabel(x: number, label: string) {
  return (
    <text
      x={x}
      y={44}
      fill="#c4b5fd"
      fontSize="19"
      fontWeight="700"
      fontFamily="Oxanium, sans-serif"
      textAnchor="middle"
      letterSpacing="3"
    >
      {label}
    </text>
  )
}

export default function BracketBoard({ bracket }: Pick<TournamentConfig, 'bracket'>) {
  const leftRoundOf16: MatchNode[] = bracket.roundOf16.slice(0, 4).map((match, index) => ({
    id: match.id,
    x: 24,
    y: 96 + index * 154,
    match,
  }))

  const leftQuarterfinals: MatchNode[] = bracket.quarterfinals.slice(0, 2).map((match, index) => ({
    id: match.id,
    x: 278,
    y: 173 + index * 308,
    match,
  }))

  const leftSemifinal: MatchNode = {
    id: bracket.semifinals[0].id,
    x: 532,
    y: 327,
    match: bracket.semifinals[0],
  }

  const finalMatch: MatchNode = {
    id: bracket.final[0].id,
    x: 746,
    y: 327,
    match: bracket.final[0],
  }

  const rightSemifinal: MatchNode = {
    id: bracket.semifinals[1].id,
    x: 960,
    y: 327,
    match: bracket.semifinals[1],
  }

  const rightQuarterfinals: MatchNode[] = bracket.quarterfinals.slice(2, 4).map((match, index) => ({
    id: match.id,
    x: 1214,
    y: 173 + index * 308,
    match,
  }))

  const rightRoundOf16: MatchNode[] = bracket.roundOf16.slice(4, 8).map((match, index) => ({
    id: match.id,
    x: 1468,
    y: 96 + index * 154,
    match,
  }))

  const connectors = [
    createConnectorPath(leftRoundOf16[0], leftQuarterfinals[0], 'right'),
    createConnectorPath(leftRoundOf16[1], leftQuarterfinals[0], 'right'),
    createConnectorPath(leftRoundOf16[2], leftQuarterfinals[1], 'right'),
    createConnectorPath(leftRoundOf16[3], leftQuarterfinals[1], 'right'),
    createConnectorPath(leftQuarterfinals[0], leftSemifinal, 'right'),
    createConnectorPath(leftQuarterfinals[1], leftSemifinal, 'right'),
    createConnectorPath(leftSemifinal, finalMatch, 'right'),
    createConnectorPath(rightRoundOf16[0], rightQuarterfinals[0], 'left'),
    createConnectorPath(rightRoundOf16[1], rightQuarterfinals[0], 'left'),
    createConnectorPath(rightRoundOf16[2], rightQuarterfinals[1], 'left'),
    createConnectorPath(rightRoundOf16[3], rightQuarterfinals[1], 'left'),
    createConnectorPath(rightQuarterfinals[0], rightSemifinal, 'left'),
    createConnectorPath(rightQuarterfinals[1], rightSemifinal, 'left'),
    createConnectorPath(rightSemifinal, finalMatch, 'left'),
  ]

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(9,8,18,0.96),rgba(22,12,44,0.94)_55%,rgba(40,19,78,0.9))] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
      <div className="rounded-[1.65rem] border border-[#c4b5fd]/15 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_34%),linear-gradient(180deg,rgba(12,10,24,0.96),rgba(9,7,18,0.94))] p-4">
        <svg viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} className="h-auto w-full">
          <defs>
            <linearGradient id="matchCardFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#150f2c" />
              <stop offset="100%" stopColor="#2a1751" />
            </linearGradient>
            <filter id="matchGlow" x="-30%" y="-40%" width="160%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor="#8b5cf6" floodOpacity="0.14" />
              <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#c084fc" floodOpacity="0.1" />
            </filter>
          </defs>

          {roundLabel(109, 'OITAVAS')}
          {roundLabel(363, 'QUARTAS')}
          {roundLabel(617, 'SEMIFINAL')}
          {roundLabel(831, 'FINAL')}
          {roundLabel(1045, 'SEMIFINAL')}
          {roundLabel(1299, 'QUARTAS')}
          {roundLabel(1553, 'OITAVAS')}

          {connectors.map((pathData) => (
            <path
              key={pathData}
              d={pathData}
              fill="none"
              stroke="#a78bfa"
              strokeOpacity="0.72"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}

          {leftRoundOf16.map((node) => (
            <MatchCard key={node.id} node={node} />
          ))}
          {leftQuarterfinals.map((node) => (
            <MatchCard key={node.id} node={node} />
          ))}
          <MatchCard node={leftSemifinal} />
          <MatchCard node={finalMatch} />
          <MatchCard node={rightSemifinal} />
          {rightQuarterfinals.map((node) => (
            <MatchCard key={node.id} node={node} />
          ))}
          {rightRoundOf16.map((node) => (
            <MatchCard key={node.id} node={node} />
          ))}
        </svg>
      </div>
    </div>
  )
}
