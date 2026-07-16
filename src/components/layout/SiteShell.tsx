import type { ReactNode } from 'react'
import DotGridBackground from '@/components/background/DotGridBackground'
import SiteHeader from '@/components/layout/SiteHeader'
import { cn } from '@/lib/utils'

export default function SiteShell({
  children,
  contentClassName,
}: {
  children: ReactNode
  contentClassName?: string
}) {
  return (
    <div className="min-h-full">
      <DotGridBackground />
      <SiteHeader />
      <main className={cn('mx-auto w-full max-w-6xl px-4 py-10', contentClassName)}>{children}</main>
    </div>
  )
}
