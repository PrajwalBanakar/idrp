import type { EventItem } from '@/types/events'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

type ApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

export async function fetchPublicEvents(): Promise<EventItem[] | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events?size=100`)
    const result: ApiResponse<{ content: EventItem[] } | EventItem[]> = await response.json()

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Failed to fetch events')
    }

    if (Array.isArray(result.data)) {
      return result.data
    }

    return result.data.content
  } catch (error) {
    console.warn('Using static events fallback:', error)
    return null
  }
}