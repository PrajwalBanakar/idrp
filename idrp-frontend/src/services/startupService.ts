import type { Startup } from '@/types/startups'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

type ApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

type PaginatedResponse<T> = {
  content: T[]
}

export const startupService = {
  async getAll(): Promise<Startup[]> {
    const response = await fetch(`${API_BASE_URL}/api/startups?page=0&size=100`)

    const result: ApiResponse<PaginatedResponse<Startup>> = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch startups')
    }

    return result.data.content
  },
}