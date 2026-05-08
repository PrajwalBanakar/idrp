import { getAdminAccessToken } from '@/services/authService'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export type AdminEventPayload = {
  slug: string
  title: string
  category: string
  description: string
  startDate: string
  endDate: string
  displayDate: string
  time?: string
  location: string
  mode: string
  image: string
  imageFit?: string
  registerUrl?: string
  visible?: boolean
  gallery?: string[]
}

export type AdminEvent = AdminEventPayload & {
  id: number
  slug?: string
  createdAt?: string
  updatedAt?: string
}

type ApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

function authHeaders() {
  const token = getAdminAccessToken()

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

export async function getAdminEvents(): Promise<AdminEvent[]> {
  const response = await fetch(`${API_BASE_URL}/api/events`)
  const result: ApiResponse<AdminEvent[] | { content: AdminEvent[] }> = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to fetch events')
  }

  if (Array.isArray(result.data)) {
    return result.data
  }

  return result.data.content
}

export async function createAdminEvent(payload: AdminEventPayload): Promise<AdminEvent> {
  const response = await fetch(`${API_BASE_URL}/api/events`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  const result: ApiResponse<AdminEvent> = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to create event')
  }

  return result.data
}

export async function updateAdminEvent(id: number, payload: AdminEventPayload): Promise<AdminEvent> {
  const response = await fetch(`${API_BASE_URL}/api/events/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  const result: ApiResponse<AdminEvent> = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to update event')
  }

  return result.data
}

export async function deleteAdminEvent(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/events/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

  const result: ApiResponse<null> = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to delete event')
  }
}