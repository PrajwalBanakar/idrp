import { getAdminAccessToken } from '@/services/authService'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

type ApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

export type UploadedFile = {
  fileName: string
  fileUrl: string
  fileType: string
  fileSize: number
}

export async function uploadAdminFile(file: File, folder = 'general'): Promise<UploadedFile> {
  const token = getAdminAccessToken()

  const formData = new FormData()
  formData.append('file', file)
  formData.append('folder', folder)

  const response = await fetch(`${API_BASE_URL}/api/files/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })

  const result: ApiResponse<UploadedFile> = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'File upload failed')
  }

  return result.data
}