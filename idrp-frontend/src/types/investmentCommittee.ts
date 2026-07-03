export type InvestmentCommitteeMember = {
  name: string
  role: string
  image: string
  imageAlt: string
  linkedinUrl?: string
  profileUrl?: string
}

export type InvestmentCommitteeHeroContent = {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export type InvestmentCommitteeCTAContent = {
  eyebrow: string
  title: string
  description: string
  primaryActionLabel: string
  primaryActionTo: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}
