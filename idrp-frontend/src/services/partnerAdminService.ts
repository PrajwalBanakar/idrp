import { adminFetch } from './authService'

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

export const fetchAdminPartners = async (): Promise<PartnerAdminItem[]> => {
  const data = await adminFetch<PageResponse<PartnerAdminItem>>('/api/partners')

  return data.content
}

export const createAdminPartner = async (
  payload: PartnerAdminPayload,
): Promise<PartnerAdminItem> => {
  return adminFetch<PartnerAdminItem>('/api/partners', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export const updateAdminPartner = async (
  id: number,
  payload: PartnerAdminPayload,
): Promise<PartnerAdminItem> => {
  return adminFetch<PartnerAdminItem>(`/api/partners/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
}

export const deleteAdminPartner = async (id: number): Promise<void> => {
  await adminFetch<null>(`/api/partners/${id}`, {
    method: 'DELETE',
  })
}
