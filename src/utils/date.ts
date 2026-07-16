export function startOfWeekMonday(input: Date): Date {
  const d = new Date(input)
  d.setHours(0, 0, 0, 0)
  const day = (d.getDay() + 6) % 7
  d.setDate(d.getDate() - day)
  return d
}

export function addDays(input: Date, days: number): Date {
  const d = new Date(input)
  d.setDate(d.getDate() + days)
  return d
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function endOfYear(input: Date): Date {
  const d = new Date(input.getFullYear(), 11, 31)
  d.setHours(0, 0, 0, 0)
  return d
}

export function formatDayMonthUpper(d: Date, locale = 'pt-BR'): string {
  const s = d.toLocaleDateString(locale, { day: '2-digit', month: 'short' })
  return s
    .replace(/\./g, '')
    .replace(/\s+de\s+/g, ' ')
    .toUpperCase()
}
