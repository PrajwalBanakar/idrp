import { getAdminAccessToken } from './authService'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export interface BoardMemberAdminItem {
  id: number
  name: string
  designation?: string
  boardType?: string
  organization?: string
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

export interface BoardMemberAdminPayload {
  name: string
  designation?: string
  boardType?: string
  organization?: string
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

export const fetchAdminBoardMembers = async (): Promise<BoardMemberAdminItem[]> => {
  const response = await fetch(`${API_BASE_URL}/api/board-members`, {
    headers: authHeaders(),
  })

  const data = await handleResponse<PageResponse<BoardMemberAdminItem>>(response)
  return data.content
}

export const createAdminBoardMember = async (
  payload: BoardMemberAdminPayload,
): Promise<BoardMemberAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/board-members`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<BoardMemberAdminItem>(response)
}

export const updateAdminBoardMember = async (
  id: number,
  payload: BoardMemberAdminPayload,
): Promise<BoardMemberAdminItem> => {
  const response = await fetch(`${API_BASE_URL}/api/board-members/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  })

  return handleResponse<BoardMemberAdminItem>(response)
}

export const deleteAdminBoardMember = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/api/board-members/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })

  await handleResponse<null>(response)
}