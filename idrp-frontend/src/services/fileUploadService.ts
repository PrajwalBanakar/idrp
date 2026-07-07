import { adminFetch } from '@/services/authService'

export type UploadedFile = {
  fileName: string
  fileUrl: string
  fileType: string
  fileSize: number
}

export async function uploadAdminFile(file: File, folder = 'general'): Promise<UploadedFile> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('folder', folder)

  return adminFetch<UploadedFile>('/api/files/upload', {
    method: 'POST',
    body: formData,
  })
}
