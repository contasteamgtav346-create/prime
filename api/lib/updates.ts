import { prisma } from './prisma.js'

export type UpdateChangeKind = 'MELHORIA' | 'CORRECAO' | 'REMOCAO'

export type UpdateChangeItem = {
  id: string
  kind: UpdateChangeKind
  description: string
}

export type UpdatePostSnapshot = {
  id: string
  versionLabel: string
  bannerImage: string | null
  publishedAt: string
  changesCount: number
  changes: UpdateChangeItem[]
  createdAt: string
  updatedAt: string
}

function normalizeChanges(input: Array<{ id?: string; kind: UpdateChangeKind; description: string }>): UpdateChangeItem[] {
  return input.map((item, index) => ({
    id: item.id ?? `change-${Date.now()}-${index}`,
    kind: item.kind,
    description: item.description,
  }))
}

function mapUpdate(record: {
  id: string
  versionLabel: string
  bannerImage: string | null
  publishedAt: Date
  changesCount: number
  changesJson: string
  createdAt: Date
  updatedAt: Date
}): UpdatePostSnapshot {
  return {
    id: record.id,
    versionLabel: record.versionLabel,
    bannerImage: record.bannerImage,
    publishedAt: record.publishedAt.toISOString(),
    changesCount: record.changesCount,
    changes: JSON.parse(record.changesJson),
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
  }
}

export async function readUpdates(): Promise<UpdatePostSnapshot[]> {
  const posts = await prisma.updatePost.findMany({
    orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
  })

  return posts.map(mapUpdate)
}

export async function createUpdate(input: {
  versionLabel: string
  bannerImage?: string | null
  publishedAt: string
  changesCount: number
  changes: Array<{ id?: string; kind: UpdateChangeKind; description: string }>
}): Promise<UpdatePostSnapshot> {
  const created = await prisma.updatePost.create({
    data: {
      versionLabel: input.versionLabel,
      bannerImage: input.bannerImage ?? null,
      publishedAt: new Date(input.publishedAt),
      changesCount: input.changesCount,
      changesJson: JSON.stringify(normalizeChanges(input.changes)),
    },
  })

  return mapUpdate(created)
}

export async function deleteUpdate(id: string): Promise<void> {
  await prisma.updatePost.delete({
    where: { id },
  })
}
