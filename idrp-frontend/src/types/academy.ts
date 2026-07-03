export type AcademyCategory = {
  id: string
  title: string
  description: string
  route: string
  ctaLabel: string
  badge: string
  items: string[]
}

export type CertificationCourse = {
  slug: string
  title: string
  duration: string
  type: 'Certification Course'
  description: string
  route: string
  features: string[]
  brochureUrl?: string
}

export type AcademyArea = {
  title: string
  emoji: string
  image: string
  bg: string
}

export type Workshop = {
  slug: string
  title: string
  duration: string
  type: 'Workshop'
  description: string
  route: string
  features: string[]
  brochureUrl?: string
}

export type AcademyCatalogItem = CertificationCourse | Workshop

export type CourseHighlight = {
  title: string
  description: string
  icon: string
}

export type CourseSnapshotItem = {
  label: string
  value: string
}

export type CertificationCourseDetailPage = {
  slug: string
  eyebrow: string
  heroTitle: string
  heroDescription: string
  overviewTitle: string
  overviewParagraphs: string[]
  snapshotTitle: string
  snapshotItems: CourseSnapshotItem[]
  highlights: CourseHighlight[]
  audience: string[]
  outcomes: string[]
  applyRoute: string
  enquireRoute: string
  ctaTitle: string
  ctaDescription: string
}

export type CertificationCourseApplyPage = {
  slug: string
  eyebrow: string
  title: string
  description: string
  submitLabel: string
  successMessage: string
  course: CertificationCourse
}

export type WorkshopApplyPage = {
  slug: string
  eyebrow: string
  title: string
  description: string
  submitLabel: string
  successMessage: string
  workshop: Workshop
}
