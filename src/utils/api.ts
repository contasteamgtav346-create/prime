export type ApiResult<T> =
  | { success: true } & T
  | { success: false; error: string }

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').trim().replace(/\/+$/, '')

function buildApiUrl(input: string): string {
  if (/^https?:\/\//i.test(input)) return input
  if (!API_BASE_URL) return input
  return `${API_BASE_URL}${input.startsWith('/') ? input : `/${input}`}`
}

export async function apiFetch<T>(
  input: string,
  init?: RequestInit & { csrfToken?: string },
): Promise<T> {
  const headers = new Headers(init?.headers ?? {})
  if (init?.csrfToken && init.method && init.method !== 'GET') {
    headers.set('x-xsrf-token', init.csrfToken)
  }

  const res = await fetch(buildApiUrl(input), {
    ...init,
    headers,
    credentials: 'include',
  })

  const contentType = res.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    throw new Error('Resposta inválida')
  }

  const data = (await res.json()) as T
  return data
}
