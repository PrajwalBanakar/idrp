import { adminFetch } from './authService'
import type { PageResponse } from './httpClient'

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
