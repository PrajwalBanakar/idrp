import { adminFetch } from './authService'
import type { PageResponse } from './httpClient'

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

export const fetchAdminBoardMembers = async (): Promise<BoardMemberAdminItem[]> => {
  const data = await adminFetch<PageResponse<BoardMemberAdminItem>>('/api/board-members')
  return data.content
}

export const createAdminBoardMember = async (
  payload: BoardMemberAdminPayload,
): Promise<BoardMemberAdminItem> => {
  return adminFetch<BoardMemberAdminItem>('/api/board-members', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export const updateAdminBoardMember = async (
  id: number,
  payload: BoardMemberAdminPayload,
): Promise<BoardMemberAdminItem> => {
  return adminFetch<BoardMemberAdminItem>(`/api/board-members/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
}

export const deleteAdminBoardMember = async (id: number): Promise<void> => {
  await adminFetch<null>(`/api/board-members/${id}`, {
    method: 'DELETE',
  })
}
