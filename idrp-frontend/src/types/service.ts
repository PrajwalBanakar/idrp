export type ServiceStat = {
  value: string
  label: string
}

export type ServiceHighlight = {
  id: string
  title: string
  description?: string
  image?: string
  icon?: string
  tone?: 'teal' | 'cyan' | 'amber' | 'slate' | 'indigo'
}

export type ServiceCTA = {
  eyebrow?: string
  title: string
  description: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export type ServiceHero = {
  eyebrow: string
  title: string
  description: string
  image?: string
}

export type ServiceIntro = {
  eyebrow?: string
  title: string
  paragraphs: string[]
}

export type ServiceFormOption = {
  label: string
  value: string
}

export type ServicePage = {
  slug: string
  hero: ServiceHero
  intro: ServiceIntro
  highlights?: ServiceHighlight[]
  stats?: ServiceStat[]
  cta?: ServiceCTA
  formOptions?: ServiceFormOption[]
}
