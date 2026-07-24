export type JobStatus = 'OPEN' | 'CLOSED'

export interface Job {
  id: number
  slug: string
  title: string
  department: string
  location: string
  employmentType: string
  description: string
  eligibility?: string
  deadline?: string
  status: JobStatus
  /** External application form URL (e.g. Google Form). When set, the Careers
   *  detail page links out to this instead of showing the in-app apply form. */
  applyUrl?: string
}
