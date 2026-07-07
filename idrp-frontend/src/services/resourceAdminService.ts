import { adminFetch } from './authService'
import type { PageResponse } from './httpClient'

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

export const fetchAdminResources = async (): Promise<ResourceAdminItem[]> => {
  const data = await adminFetch<PageResponse<ResourceAdminItem>>('/api/resources')

  return data.content
}

export const createAdminResource = async (
  payload: ResourceAdminPayload,
): Promise<ResourceAdminItem> => {
  return adminFetch<ResourceAdminItem>('/api/resources', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export const updateAdminResource = async (
  id: number,
  payload: ResourceAdminPayload,
): Promise<ResourceAdminItem> => {
  return adminFetch<ResourceAdminItem>(`/api/resources/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
}

export const deleteAdminResource = async (id: number): Promise<void> => {
  await adminFetch<null>(`/api/resources/${id}`, {
    method: 'DELETE',
  })
}
