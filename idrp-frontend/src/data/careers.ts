import type { Job } from '@/types/careers'

// No roles are open right now. Add entries here (or wire this page to a
// GET /api/jobs endpoint) once Careers listings are finalized.
export const jobs: Job[] = []

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug)
}
