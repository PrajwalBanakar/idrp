export type NewsletterPage = {
  title: string
  subtitle?: string
  body: string[]
  highlight?: string
}

export type Newsletter = {
  id: number
  slug: string
  title: string
  issue: string
  date: string
  description: string
  preview: string
  highlights: string[]
  coverGradient: string
  pages?: NewsletterPage[]
  pdfUrl?: string
  totalPages?: number
  visible?: boolean
  previewImage?: string
}
