const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

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
  category: StartupCategory
  logo: string
  website: string
  onePager: string
  brief: string
  contactEmail: string
  techFacultyMentors: StartupPerson[]
  founders: StartupPerson[]
  teamMembers: StartupPerson[]
}

export type StartupResponse = StartupRequest & {
  id: number | string
  createdAt?: string
  updatedAt?: string
}

type ApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

const getAuthHeaders = () => {
  const token = localStorage.getItem('accessToken')

  return {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  }
}

export const startupAdminService = {
  async getAll(): Promise<StartupResponse[]> {
    const response = await fetch(`${API_BASE_URL}/api/startups`, {
      headers: getAuthHeaders(),
    })

    const result: ApiResponse<any> = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch startups')
    }

    return result.data.content || result.data
  },

  async create(payload: StartupRequest): Promise<StartupResponse> {
    const response = await fetch(`${API_BASE_URL}/api/startups`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    })

    const result: ApiResponse<StartupResponse> = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to create startup')
    }

    return result.data
  },

  async update(id: number | string, payload: StartupRequest): Promise<StartupResponse> {
    const response = await fetch(`${API_BASE_URL}/api/startups/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    })

    const result: ApiResponse<StartupResponse> = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to update startup')
    }

    return result.data
  },

  async delete(id: number | string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/api/startups/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    })

    if (!response.ok) {
      const result = await response.json()
      throw new Error(result.message || 'Failed to delete startup')
    }
  },
}