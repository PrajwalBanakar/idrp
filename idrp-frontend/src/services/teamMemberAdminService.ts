import { getAdminAccessToken } from './authService'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

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

interface PageResponse<T> {
  content: T[]
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

export const fetchAdminTeamMembers = async (): Promise<TeamMemberAdminItem[]> => {
  const response = await fetch(`${API_BASE_URL}/api/team-members`, {
    headers: authHeaders(),
  })

  const data = await handleResponse<PageResponse<TeamMemberAdminItem>>(response)
  return data.content
}

export const createAdminTeamMember = async (
  payload: TeamMemberAdminPayload,
): Promise<TeamMemberAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/team-members`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<TeamMemberAdminItem>(response)
}

export const updateAdminTeamMember = async (
  id: number,
  payload: TeamMemberAdminPayload,
): Promise<TeamMemberAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/team-members/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<TeamMemberAdminItem>(response)
}

export const deleteAdminTeamMember = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/api/team-members/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

  await handleResponse<null>(response)
}