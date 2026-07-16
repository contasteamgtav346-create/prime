import type { CSSProperties } from 'react'

export function buildNeonBorderStyle(borderColor?: string | null): CSSProperties | undefined {
  if (!borderColor) return undefined

  return {
    borderColor,
    boxShadow: `0 0 0 1px ${borderColor}55 inset, 0 0 16px ${borderColor}30, 0 0 28px ${borderColor}18`,
  }
}
