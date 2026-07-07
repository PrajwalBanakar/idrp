const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export type AdminLoginPayload = {
  email: string
  password: string
}

export type AdminUser = {
  adminId: number
  name: string
  email: string
  role: string
  accessToken: string
  refreshToken: string
  tokenType: string
}

type ApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

const ACCESS_TOKEN_KEY = 'idrp_admin_access_token'
const REFRESH_TOKEN_KEY = 'idrp_admin_refresh_token'
const ADMIN_USER_KEY = 'idrp_admin_user'

export async function loginAdmin(payload: AdminLoginPayload): Promise<AdminUser> {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const result: ApiResponse<AdminUser> = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Login failed')
  }

  localStorage.setItem(ACCESS_TOKEN_KEY, result.data.accessToken)
  localStorage.setItem(REFRESH_TOKEN_KEY, result.data.refreshToken)
  localStorage.setItem(ADMIN_USER_KEY, JSON.stringify(result.data))

  return result.data
}

export function clearAdminSession() {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
  localStorage.removeItem(ADMIN_USER_KEY)
}

export async function logoutAdmin() {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)

  if (refreshToken) {
    try {
      await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      })
    } catch {
      // ignore logout API failure and clear local session
    }
  }

  clearAdminSession()
}

export function getAdminAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function isAdminLoggedIn() {
  return !!getAdminAccessToken()
}

export function getAdminUser(): AdminUser | null {
  const user = localStorage.getItem(ADMIN_USER_KEY)
  return user ? JSON.parse(user) : null
}

/**
 * Called whenever an admin API call comes back 401 (expired/invalid token).
 * Clears the session and bounces to the login screen so admins never get
 * stuck looking at a broken authenticated page.
 */
export function handleUnauthorizedSession() {
  clearAdminSession()

  if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/admin/login')) {
    window.location.href = '/admin/login'
  }
}

/**
 * Shared fetch wrapper for admin (JWT-protected) API calls. Centralizes
 * auth headers, ApiResponse<T> unwrapping, and 401 handling so individual
 * admin services don't have to reimplement it.
 */
export async function adminFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getAdminAccessToken()
  const isFormData = options.body instanceof FormData

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  })

  if (response.status === 401) {
    handleUnauthorizedSession()
    throw new Error('Session expired. Please log in again.')
  }

  let result: ApiResponse<T> | null = null

  try {
    result = await response.json()
  } catch {
    result = null
  }

  if (!response.ok || (result && result.success === false)) {
    throw new Error(result?.message || 'Something went wrong')
  }

  return result ? result.data : (undefined as T)
}