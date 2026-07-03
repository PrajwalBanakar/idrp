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
  deadline: string
  status: JobStatus
}
