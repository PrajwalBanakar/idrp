import { getAdminAccessToken } from './authService'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export type ResourceType = 'NEWSLETTER' | 'BLOG' | 'RESEARCH'

export interface ResourceAdminItem {
  id: number
  title: string
  slug: string
  type: ResourceType
  summary?: string
  content?: string
  fileUrl?: string
  coverImageUrl?: string
  publishDate?: string
  author?: string
  active: boolean
  displayOrder: number
  createdBy?: string
  updatedBy?: string
  createdAt?: string
  updatedAt?: string
}

export interface ResourceAdminPayload {
  title: string
  slug: string
  type: ResourceType
  summary?: string
  content?: string
  fileUrl?: string
  coverImageUrl?: string
  publishDate?: string
  author?: string
  active: boolean
  displayOrder: number
}

interface PageResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  number: number
  size: number
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

export const fetchAdminResources = async (): Promise<ResourceAdminItem[]> => {
  const response = await fetch(`${API_BASE_URL}/api/resources`, {
    headers: authHeaders(),
  })

  const data = await handleResponse<PageResponse<ResourceAdminItem>>(response)

  return data.content
}

export const createAdminResource = async (
  payload: ResourceAdminPayload,
): Promise<ResourceAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/resources`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<ResourceAdminItem>(response)
}

export const updateAdminResource = async (
  id: number,
  payload: ResourceAdminPayload,
): Promise<ResourceAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/resources/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<ResourceAdminItem>(response)
}

export const deleteAdminResource = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/api/resources/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

  await handleResponse<null>(response)
}