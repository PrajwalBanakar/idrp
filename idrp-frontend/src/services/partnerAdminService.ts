import { getAdminAccessToken } from './authService'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export interface PartnerAdminItem {
  id: number
  name: string
  category?: string
  websiteUrl?: string
  logoUrl?: string
  description?: string
  contactPerson?: string
  contactEmail?: string
  contactPhone?: string
  active: boolean
  createdAt?: string
  updatedAt?: string
}

export interface PartnerAdminPayload {
  name: string
  category?: string
  websiteUrl?: string
  logoUrl?: string
  description?: string
  contactPerson?: string
  contactEmail?: string
  contactPhone?: string
  active: boolean
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

export const fetchAdminPartners = async (): Promise<PartnerAdminItem[]> => {
  const response = await fetch(`${API_BASE_URL}/api/partners`, {
    headers: authHeaders(),
  })

  const data = await handleResponse<PageResponse<PartnerAdminItem>>(response)

  return data.content
}

export const createAdminPartner = async (
  payload: PartnerAdminPayload,
): Promise<PartnerAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/partners`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<PartnerAdminItem>(response)
}

export const updateAdminPartner = async (
  id: number,
  payload: PartnerAdminPayload,
): Promise<PartnerAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/partners/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<PartnerAdminItem>(response)
}

export const deleteAdminPartner = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/api/partners/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

  await handleResponse<null>(response)
}