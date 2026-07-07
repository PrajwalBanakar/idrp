import { adminFetch } from './authService'
import type { PageResponse } from './httpClient'

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
  profileImageUrl?: string
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
  profileImageUrl?: string
  active: boolean
}

export const fetchAdminMentors = async (): Promise<MentorAdminItem[]> => {
  const data = await adminFetch<PageResponse<MentorAdminItem>>('/api/mentors')

  return data.content
}

export const createAdminMentor = async (
  payload: MentorAdminPayload,
): Promise<MentorAdminItem> => {
  return adminFetch<MentorAdminItem>('/api/mentors', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export const updateAdminMentor = async (
  id: number,
  payload: MentorAdminPayload,
): Promise<MentorAdminItem> => {
  return adminFetch<MentorAdminItem>(`/api/mentors/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
}

export const deleteAdminMentor = async (id: number): Promise<void> => {
  await adminFetch<null>(`/api/mentors/${id}`, {
    method: 'DELETE',
  })
}
