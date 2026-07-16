import { prisma } from './prisma.js'

export const SITE_METRICS_ID = 'main'

const DEFAULT_SITE_METRICS = {
  championshipsCount: 100,
  clansCount: 2720,
}

export type SiteMetricsSnapshot = {
  accountsCount: number
  championshipsCount: number
  clansCount: number
}

export async function readSiteMetrics(): Promise<SiteMetricsSnapshot> {
  const [accountsCount, stored] = await Promise.all([
    prisma.user.count(),
    prisma.siteMetric.findUnique({
      where: { id: SITE_METRICS_ID },
    }),
  ])

  return {
    accountsCount,
    championshipsCount: stored?.championshipsCount ?? DEFAULT_SITE_METRICS.championshipsCount,
    clansCount: stored?.clansCount ?? DEFAULT_SITE_METRICS.clansCount,
  }
}

export async function writeSiteMetrics(input: {
  championshipsCount: number
  clansCount: number
}): Promise<SiteMetricsSnapshot> {
  await prisma.siteMetric.upsert({
    where: { id: SITE_METRICS_ID },
    update: {
      championshipsCount: input.championshipsCount,
      clansCount: input.clansCount,
    },
    create: {
      id: SITE_METRICS_ID,
      championshipsCount: input.championshipsCount,
      clansCount: input.clansCount,
    },
  })

  return readSiteMetrics()
}
