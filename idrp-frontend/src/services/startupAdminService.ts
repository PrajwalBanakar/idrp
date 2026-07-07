import { adminFetch } from '@/services/authService'
import type { PageResponse } from '@/services/httpClient'

export type StartupCategory = 'PRE_INCUBATED' | 'INCUBATED' | 'FUNDED'

export type StartupPerson = {
  name: string
  role?: string
  linkedin?: string
  email?: string
}

export type StartupRequest = {
  name: string
  sector: string
  categories: StartupCategory[]
  logo: string
  website: string
  onePager: string
  brief: string
  contactEmail: string
  techFacultyMentors: StartupPerson[]
  founders: StartupPerson[]
  teamMembers: StartupPerson[]
  gallery: string[]
}

export type StartupResponse = StartupRequest & {
  id: number | string
  createdAt?: string
  updatedAt?: string
}

export const startupAdminService = {
  async getAll(): Promise<StartupResponse[]> {
    const data = await adminFetch<PageResponse<StartupResponse> | StartupResponse[]>(
      '/api/startups?page=0&size=200',
    )

    return Array.isArray(data) ? data : data.content
  },

  async create(payload: StartupRequest): Promise<StartupResponse> {
    return adminFetch<StartupResponse>('/api/startups', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },

  async update(id: number | string, payload: StartupRequest): Promise<StartupResponse> {
    return adminFetch<StartupResponse>(`/api/startups/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
  },

  async delete(id: number | string): Promise<void> {
    await adminFetch<null>(`/api/startups/${id}`, {
      method: 'DELETE',
    })
  },
}
