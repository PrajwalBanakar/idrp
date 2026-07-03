export type MentorCategory = 'all' | 'business' | 'technology'

export type Mentor = {
  name: string
  role: string
  image: string
  imageAlt?: string
  organization?: string
  bio?: string
  linkedin?: string
  profileUrl?: string
}
