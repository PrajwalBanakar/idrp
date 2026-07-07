// Shared low-level HTTP plumbing used by both public and admin services.
// Public (unauthenticated) and admin (JWT-protected) fetch wrappers stay in
// separate functions/files (see authService.ts's adminFetch) - this module
// only centralizes the bits that are identical either way: the base URL,
// the backend's ApiResponse<T> envelope shape, and the rate-limit message.

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export type ApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

export type PageResponse<T> = {
  content: T[]
}

export function buildRateLimitMessage(response: Response): string {
  const retryAfter = response.headers.get('Retry-After')

  return retryAfter
    ? `Too many requests. Please try again in ${retryAfter} seconds.`
    : 'Too many requests. Please slow down and try again shortly.'
}

/** Fetch wrapper for public (unauthenticated) API calls. */
export async function publicFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const isFormData = options.body instanceof FormData

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(options.headers ?? {}),
    },
  })

  if (response.status === 429) {
    throw new Error(buildRateLimitMessage(response))
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
