export type TeamHeroContent = {
  eyebrow: string
  title: string
  image?: string
  imageAlt?: string
}

export type TeamMember = {
  name: string
  role: string
  image?: string
  imageAlt?: string
  linkedinUrl?: string
  profileUrl?: string
}

export type TeamCTAContent = {
  eyebrow: string
  title: string
  description: string
  primaryActionLabel: string
  primaryActionTo: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}
