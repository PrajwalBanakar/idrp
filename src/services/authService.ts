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

  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
  localStorage.removeItem(ADMIN_USER_KEY)
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