export type StartupCategory = 'PRE_INCUBATED' | 'INCUBATED' | 'FUNDED'
export type TabKey = 'all' | StartupCategory

export interface Tab {
  key: TabKey
  label: string
}

export interface StartupStat {
  value: string
  label: string
}

export interface StartupPerson {
  name: string
  role?: string
  linkedin?: string
  email?: string
  image?: string
}

export interface Startup {
  id: number
  name: string
  sector: string
  categories: StartupCategory[]
  logo?: string
  website?: string
  onePager?: string
  brief?: string
  contactEmail?: string
  techFacultyMentors: StartupPerson[]
  founders: StartupPerson[]
  teamMembers: StartupPerson[]
}

export interface StartupsHero {
  imageSrc: string
  imageAlt: string
  eyebrow: string
  title: string
  description: string
}

export interface StartupsIntro {
  eyebrow: string
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
}