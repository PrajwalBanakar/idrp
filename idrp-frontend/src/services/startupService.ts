import type { Startup } from '@/types/startups'
import { publicFetch, type PageResponse } from '@/services/httpClient'

export const startupService = {
  async getAll(): Promise<Startup[]> {
    const data = await publicFetch<PageResponse<Startup>>('/api/startups?page=0&size=100')
    return data.content
  },
}
