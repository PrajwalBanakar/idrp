import { getAdminAccessToken } from './authService'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export interface ProgramAdminItem {
  id: number
  programName: string
  category?: string
  duration?: string
  mode?: string
  eligibility?: string
  description?: string
  createdAt?: string
  updatedAt?: string
}

export interface ProgramAdminPayload {
  programName: string
  category?: string
  duration?: string
  mode?: string
  eligibility?: string
  description?: string
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

interface PageResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  number: number
  size: number
}

export const fetchAdminPrograms = async (): Promise<ProgramAdminItem[]> => {
  const response = await fetch(`${API_BASE_URL}/api/programs`, {
    headers: authHeaders(),
  })

  const data = await handleResponse<PageResponse<ProgramAdminItem>>(response)

  return data.content
}

export const createAdminProgram = async (
  payload: ProgramAdminPayload,
): Promise<ProgramAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/programs`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<ProgramAdminItem>(response)
}

export const updateAdminProgram = async (
  id: number,
  payload: ProgramAdminPayload,
): Promise<ProgramAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/programs/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<ProgramAdminItem>(response)
}

export const deleteAdminProgram = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/api/programs/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

  await handleResponse<null>(response)
}