import type { RouteLocationRaw } from 'vue-router'

export type AboutSectionIntro = {
  eyebrow: string
  title: string
  description: string
}

export type AboutStat = {
  label: string
  value: string
}

export type AboutCampusGalleryImage = {
  id: string
  src: string
  alt: string
  title: string
  description?: string
}

export type MissionVisionItem = {
  title: string
  description: string
  icon: string
}

export type Pillar = {
  title: string
  description: string
}

export type TimelineItem = {
  year: string
  title: string
  description: string
}

export type Offering = {
  title: string
  description: string
}

export type OfferingStage = {
  label: string
  description: string
}

export type OfferingsHighlight = {
  eyebrow: string
  title: string
  description: string
  stages: OfferingStage[]
}

export type Reason = {
  title: string
  description: string
}

export type VisionCard = {
  title: string
  description: string
  image: string
  imageAlt: string
}

export type AboutHeroContent = {
  eyebrow: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
  minHeightClass?: string
}

export type AboutIntroContent = {
  eyebrow: string
  title: string
  paragraphs: string[]
  stats: AboutStat[]
  image: string
  imageAlt: string
  badgeText: string
}

export type AboutCTAContent = {
  eyebrow: string
  title: string
  description: string
  primaryActionLabel: string
  primaryActionTo: RouteLocationRaw
  secondaryActionLabel?: string
  secondaryActionTo?: RouteLocationRaw
}
