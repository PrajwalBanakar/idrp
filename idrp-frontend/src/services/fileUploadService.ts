import { adminFetch } from '@/services/authService'

export type UploadedFile = {
  fileName: string
  fileUrl: string
  fileType: string
  fileSize: number
}

export type UploadKind = 'image' | 'pdf'

// Mirrors FileStorageServiceImpl.ALLOWED_EXTENSIONS and
// spring.servlet.multipart.max-file-size in idrp-backend.
export const ALLOWED_UPLOAD_EXTENSIONS: Record<UploadKind, string[]> = {
  image: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
  pdf: ['pdf'],
}

export const ALLOWED_UPLOAD_ACCEPT: Record<UploadKind, string> = {
  image: 'image/jpeg,image/png,image/webp,image/gif',
  pdf: 'application/pdf',
}

export const MAX_UPLOAD_SIZE_BYTES = 10 * 1024 * 1024

function fileExtension(fileName: string): string {
  return fileName.includes('.') ? fileName.split('.').pop()!.toLowerCase() : ''
}

/** Client-side mirror of the backend's upload validation, so bad files are rejected before hitting the network. */
export function validateUploadFile(file: File, kind: UploadKind): string | null {
  const extension = fileExtension(file.name)
  const allowedExtensions = ALLOWED_UPLOAD_EXTENSIONS[kind]

  if (!allowedExtensions.includes(extension)) {
    return `Unsupported file type "${extension || 'unknown'}". Allowed types: ${allowedExtensions.join(', ')}.`
  }

  if (file.size > MAX_UPLOAD_SIZE_BYTES) {
    return `File is too large (max ${MAX_UPLOAD_SIZE_BYTES / (1024 * 1024)}MB).`
  }

  return null
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
