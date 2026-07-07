import { adminFetch } from './authService'
import type { PageResponse } from './httpClient'

export interface ProgramAdminItem {
  id: number
  programName: string
  category?: string
  duration?: string
  mode?: string
  eligibility?: string
  description?: string
  brochureUrl?: string
  applyUrl?: string
  features?: string[]
  createdAt?: string
  updatedAt?: string
}

export interface ProgramAdminPayload {
  programName: string
  category?: string
  duration?: string
  mode?: string
  eligibility?: string
  description?: string
  brochureUrl?: string
  applyUrl?: string
  features?: string[]
}

export const fetchAdminPrograms = async (): Promise<ProgramAdminItem[]> => {
  const data = await adminFetch<PageResponse<ProgramAdminItem>>('/api/programs')

  return data.content
}

export const createAdminProgram = async (
  payload: ProgramAdminPayload,
): Promise<ProgramAdminItem> => {
  return adminFetch<ProgramAdminItem>('/api/programs', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export const updateAdminProgram = async (
  id: number,
  payload: ProgramAdminPayload,
): Promise<ProgramAdminItem> => {
  return adminFetch<ProgramAdminItem>(`/api/programs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
}

export const deleteAdminProgram = async (id: number): Promise<void> => {
  await adminFetch<null>(`/api/programs/${id}`, {
    method: 'DELETE',
  })
}
