import type { EventItem } from '@/types/events'
import { publicFetch, type PageResponse } from '@/services/httpClient'

export async function fetchPublicEvents(): Promise<EventItem[] | null> {
  try {
    const data = await publicFetch<PageResponse<EventItem> | EventItem[]>('/api/events?size=100')
    return Array.isArray(data) ? data : data.content
  } catch (error) {
    console.warn('Using static events fallback:', error)
    return null
  }
}

export async function fetchPublicEventById(id: number): Promise<EventItem | null> {
  try {
    return await publicFetch<EventItem>(`/api/events/${id}`)
  } catch (error) {
    console.warn('Using static event fallback:', error)
    return null
  }
}
