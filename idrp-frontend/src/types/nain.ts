export type NAINProject = {
  id: string
  title: string
  facultyGuideName: string
  teamLeaderName: string
  teamMembers: string[]
  projectLink?: string
}

export type NAINInstituteYearSupport = {
  pmuTechMentor: string
  dia: string
  misExecutives: string[]
  nainCoordinator: string
}

export type NAINYearGroup = {
  year: string
  support: NAINInstituteYearSupport
  projects: NAINProject[]
}

export type NAINInstitute = {
  id: string
  name: string
  city: string
  state: string
  description: string
  logo?: string
  years: NAINYearGroup[]
}

export type NAINHeroContent = {
  eyebrow?: string
  title: string
  subtitle: string
  primaryActionLabel?: string
  primaryActionHref?: string
  secondaryActionLabel?: string
  secondaryActionTo?: string
}

export type NAINOverviewStatTone = 'teal' | 'cyan' | 'slate'

export type NAINOverviewStat = {
  id: string
  label: string
  tone?: NAINOverviewStatTone
}

export type NAINOverviewContent = {
  eyebrow: string
  title: string
  paragraphs: string[]
  stats: NAINOverviewStat[]
}

export type NAINSectionIntro = {
  eyebrow?: string
  title: string
  description?: string
}

export type NAINPMUDetails = {
  name: string
  principalInvestigator: string
  coPrincipalInvestigator: string
  programAssociate: string
}

export type NAINImage = {
  src: string
  alt: string
}

export type NAINPageData = {
  hero: NAINHeroContent
  overview: NAINOverviewContent
  pmu: NAINPMUDetails
  institutesSection: NAINSectionIntro
  institutes: NAINInstitute[]
}
