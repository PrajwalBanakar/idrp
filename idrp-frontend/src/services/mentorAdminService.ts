import { getAdminAccessToken } from './authService'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export interface MentorAdminItem {
  id: number
  name: string
  email: string
  phone?: string
  designation?: string
  organization?: string
  expertise?: string
  bio?: string
  linkedinUrl?: string
  active: boolean
  createdAt?: string
  updatedAt?: string
}

export interface MentorAdminPayload {
  name: string
  email: string
  phone?: string
  designation?: string
  organization?: string
  expertise?: string
  bio?: string
  linkedinUrl?: string
  active: boolean
}

interface PageResponse<T> {
  content: T[]
  totalElements?: number
  totalPages?: number
  number?: number
  size?: number
}

const authHeaders = () => {
  const token = getAdminAccessToken()

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  const result = await response.json()

  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'Something went wrong')
  }

  return result.data
}

export const fetchAdminMentors = async (): Promise<MentorAdminItem[]> => {
  const response = await fetch(`${API_BASE_URL}/api/mentors`, {
    headers: authHeaders(),
  })

  const data = await handleResponse<PageResponse<MentorAdminItem>>(response)

  return data.content
}

export const createAdminMentor = async (
  payload: MentorAdminPayload,
): Promise<MentorAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/mentors`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<MentorAdminItem>(response)
}

export const updateAdminMentor = async (
  id: number,
  payload: MentorAdminPayload,
): Promise<MentorAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/mentors/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<MentorAdminItem>(response)
}

export const deleteAdminMentor = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/api/mentors/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

  await handleResponse<null>(response)
}