export type EventItem = {
  id: number
  slug: string

  title: string
  category: string
  // Which government/institutional initiative the event was conducted under
  // (e.g. 'CBDE', 'NAIN 2.0'). Only set when that link is known — most
  // events aren't tied to a specific initiative and should omit this.
  initiative?: string
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
  galleryUrl?: string
}
