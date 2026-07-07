import { adminFetch } from './authService'
import type { PageResponse } from './httpClient'

export interface TeamMemberAdminItem {
  id: number
  name: string
  designation?: string
  department?: string
  bio?: string
  email: string
  phone?: string
  profileImageUrl?: string
  linkedinUrl?: string
  displayOrder: number
  active: boolean
  createdAt?: string
  updatedAt?: string
}

export interface TeamMemberAdminPayload {
  name: string
  designation?: string
  department?: string
  bio?: string
  email: string
  phone?: string
  profileImageUrl?: string
  linkedinUrl?: string
  displayOrder: number
  active: boolean
}

export const fetchAdminTeamMembers = async (): Promise<TeamMemberAdminItem[]> => {
  const data = await adminFetch<PageResponse<TeamMemberAdminItem>>('/api/team-members')
  return data.content
}

export const createAdminTeamMember = async (
  payload: TeamMemberAdminPayload,
): Promise<TeamMemberAdminItem> => {
  return adminFetch<TeamMemberAdminItem>('/api/team-members', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export const updateAdminTeamMember = async (
  id: number,
  payload: TeamMemberAdminPayload,
): Promise<TeamMemberAdminItem> => {
  return adminFetch<TeamMemberAdminItem>(`/api/team-members/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
}

export const deleteAdminTeamMember = async (id: number): Promise<void> => {
  await adminFetch<null>(`/api/team-members/${id}`, {
    method: 'DELETE',
  })
}
