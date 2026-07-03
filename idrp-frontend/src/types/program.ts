// ─────────────────────────────────────────────────────
// SHARED SECTION TYPES
// ─────────────────────────────────────────────────────

export type PageHeroContent = {
  eyebrow: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
  brochureTo?: string
  brochureLabel?: string
}

export type PageDetailItem = {
  label: string
  value: string
}

export type PageIntroContent = {
  eyebrow: string
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
  details?: PageDetailItem[]
}

export type PageValueItem = {
  title: string
  description: string
}

export type PageValueContent = {
  eyebrow: string
  title: string
  items: PageValueItem[]
  image: string
  imageAlt: string
}

export type PageCTAContent = {
  eyebrow?: string
  title: string
  description: string
  primaryActionLabel: string
  primaryActionTo: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}

// ─────────────────────────────────────────────────────
// PROGRAM-SPECIFIC TYPES
// ─────────────────────────────────────────────────────

export type ProgramId =
  | 'pre-incubation'
  | 'resident-incubation'
  | 'virtual-incubation'
  | 'incubation'

export type Program = {
  id: ProgramId
  title: string
  duration: string
  description: string
  detailsTo: string
  applyTo: string
  brochureTo?: string
  brochureLabel?: string
  features: string[]
}

export type ProgramAccordionSection = {
  title: string
  items: string[]
}

export type ProgramCardData = {
  id: string
  title: string
  subtitle?: string
  description: string
  duration?: string
  mode?: string
  applyTo?: string
  sections: ProgramAccordionSection[]
}

export type ProgramTracksContent = {
  eyebrow: string
  title: string
  description: string
}

// ─────────────────────────────────────────────────────
// PAGE MODELS
// ─────────────────────────────────────────────────────

export type BaseProgramLikePageData = {
  hero: PageHeroContent
  intro: PageIntroContent
  value: PageValueContent
  cta: PageCTAContent
}

export type ProgramPageData = BaseProgramLikePageData & {
  tracks?: ProgramTracksContent
  programs?: ProgramCardData[]
}

export type InitiativePageData = BaseProgramLikePageData

// ─────────────────────────────────────────────────────
// BACKWARD-COMPATIBLE ALIASES
// Optional: keep these only if other files still use old names
// ─────────────────────────────────────────────────────

export type ProgramHeroContent = PageHeroContent
export type ProgramDetailItem = PageDetailItem
export type ProgramIntroContent = PageIntroContent
export type ProgramValueItem = PageValueItem
export type ProgramValueContent = PageValueContent
export type ProgramCTAContent = PageCTAContent
