import { adminFetch } from '@/services/authService'
import type { PageResponse } from '@/services/httpClient'

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

export async function fetchAdminEvents(): Promise<AdminEvent[]> {
  const data = await adminFetch<PageResponse<AdminEvent> | AdminEvent[]>('/api/events?size=200')

  return Array.isArray(data) ? data : data.content
}

export async function createAdminEvent(payload: AdminEventPayload): Promise<AdminEvent> {
  return adminFetch<AdminEvent>('/api/events', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function updateAdminEvent(id: number, payload: AdminEventPayload): Promise<AdminEvent> {
  return adminFetch<AdminEvent>(`/api/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
}

export async function deleteAdminEvent(id: number): Promise<void> {
  await adminFetch<null>(`/api/events/${id}`, {
    method: 'DELETE',
  })
}
