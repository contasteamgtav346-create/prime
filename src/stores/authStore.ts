import { create } from 'zustand'
import { apiFetch } from '@/utils/api'
import type { PublicUser } from '@/types'

type AuthState = {
  user: PublicUser | null
  csrfToken: string | null
  loading: boolean
  bootstrapped: boolean
  bootstrap: () => Promise<void>
  startDiscordAuth: () => Promise<{ ok: boolean; error?: string }>
  finishDiscordAuth: (code: string, state: string) => Promise<{ ok: boolean; error?: string }>
  login: (identifier: string, password: string) => Promise<{ ok: boolean; error?: string }>
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<{ ok: boolean; error?: string }>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  csrfToken: null,
  loading: false,
  bootstrapped: false,

  bootstrap: async () => {
    set({ loading: true })
    try {
      const csrf = await apiFetch<{ success: boolean; csrfToken: string | null }>('/api/auth/csrf')
      if (csrf.success) set({ csrfToken: csrf.csrfToken })

      const me = await apiFetch<{ success: boolean; user?: PublicUser; error?: string }>('/api/auth/me')
      if (me.success && me.user) set({ user: me.user })
    } catch {
    } finally {
      set({ loading: false, bootstrapped: true })
    }
  },

  startDiscordAuth: async () => {
    try {
      const res = await apiFetch<{ success: boolean; url?: string; error?: string; configured?: boolean }>(
        '/api/auth/discord/url',
      )
      if (!res.success || !res.url) {
        return { ok: false, error: res.error || 'Discord não configurado' }
      }

      window.location.href = res.url
      return { ok: true }
    } catch {
      return { ok: false, error: 'Falha ao iniciar login com Discord' }
    }
  },

  finishDiscordAuth: async (code, state) => {
    try {
      const csrfToken = get().csrfToken ?? undefined
      const res = await apiFetch<{ success: boolean; user?: PublicUser; error?: string }>(
        '/api/auth/discord/exchange',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ code, state }),
          csrfToken,
        },
      )

      if (!res.success || !res.user) {
        return { ok: false, error: res.error || 'Falha ao finalizar login com Discord' }
      }

      set({ user: res.user })
      return { ok: true }
    } catch {
      return { ok: false, error: 'Falha ao finalizar login com Discord' }
    }
  },

  login: async (identifier, password) => {
    try {
      const csrfToken = get().csrfToken ?? undefined
      const res = await apiFetch<{ success: boolean; user?: PublicUser; error?: string }>('/api/auth/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
        csrfToken,
      })

      if (!res.success || !res.user) return { ok: false, error: res.error || 'Falha no login' }
      set({ user: res.user })
      return { ok: true }
    } catch {
      return { ok: false, error: 'Falha no login' }
    }
  },

  register: async (username, email, password) => {
    try {
      const csrfToken = get().csrfToken ?? undefined
      const res = await apiFetch<{ success: boolean; user?: PublicUser; error?: string }>(
        '/api/auth/register',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
          csrfToken,
        },
      )

      if (!res.success) return { ok: false, error: res.error || 'Falha no registro' }
      return { ok: true }
    } catch {
      return { ok: false, error: 'Falha no registro' }
    }
  },

  logout: async () => {
    const csrfToken = get().csrfToken ?? undefined
    await apiFetch<{ success: boolean }>('/api/auth/logout', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({}),
      csrfToken,
    }).catch(() => {})
    set({ user: null })
  },
}))
