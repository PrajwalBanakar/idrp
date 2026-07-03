export type ProgramKey =
  | 'pre-incubation'
  | 'incubation'
  | 'resident-incubation'
  | 'virtual-incubation'
  | 'deep-tech-accelerator'
  | 'rgep'

export type ProgramMeta = {
  slug: ProgramKey
  title: string
  badge: string
  emoji: string
  meta: string
  description: string
  backLabel: string
}

export type ApplicationForm = {
  founderName: string
  coFounderName: string
  email: string
  phone: string
  website: string
  location: string
  startupName: string
  domain: string
  stage: string
  teamSize: string | number
  registrationStatus: string
  description: string
  traction: string
  whyApply: string
  supportSummary: string
  supportNeeded: string[]
  pitchDeck: string
  demoLink: string
  declaration: boolean
}
