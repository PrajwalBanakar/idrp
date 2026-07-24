import type { Job } from '@/types/careers'

// Add entries here (or wire this page to a GET /api/jobs endpoint) once
// Careers listings move to the backend.
export const jobs: Job[] = [
  {
    id: 1,
    slug: 'manager-training-placement-industry-relations',
    title: 'Manager – Training, Placement & Industry Relations',
    department: 'Placement & Industry Relations',
    location: 'IIIT Dharwad Campus, Dharwad',
    employmentType: 'Full-time',
    description:
      'Lead campus placements and internship initiatives, build strategic partnerships with industries and corporates, drive collaborations in research, innovation, and Centres of Excellence, support startup incubation through industry, mentor, and investor connects, and facilitate hackathons, executive engagement programs, and industry visits.',
    eligibility:
      'MBA/PGDM (Engineering background preferred) with 3–7 years of experience in Campus Recruitment, Corporate Relations, Industry Engagement, Business Development, or B2B Sales. Excellent networking, communication, and stakeholder management skills required.',
    status: 'OPEN',
    applyUrl: 'https://forms.gle/SprW7biYGfwugwHM7',
  },
]

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug)
}
