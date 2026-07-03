export type EventItem = {
  id: number
  slug: string

  title: string
  category: string
  description: string

  startDate: string
  endDate: string
  displayDate: string
  time?: string
  location: string
  mode?: string

  image: string
  imageFit?: 'contain' | 'cover'

  registerUrl?: string
  visible?: boolean
  brochureUrl?: string

  gallery?: string[]
}
