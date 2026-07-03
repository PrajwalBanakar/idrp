import type { Job } from '@/types/careers'

// TODO(admin-integration): Temporary static placeholder data for the Careers section.
// Replace with data fetched from GET /api/jobs once the Careers page is wired to the backend.
export const jobs: Job[] = [
  {
    id: 1,
    slug: 'program-coordinator-incubation',
    title: 'Program Coordinator - Incubation',
    department: 'Incubation',
    location: 'IIIT Dharwad, Karnataka',
    employmentType: 'Full-time',
    description:
      'Support the day-to-day operations of the incubation programs, coordinate with mentors and founders, and help manage cohort activities, events, and reporting.',
    eligibility:
      "Bachelor's degree in any discipline with 1-3 years of experience in program or operations coordination. Prior startup ecosystem exposure is a plus.",
    deadline: '2026-08-31',
    status: 'OPEN',
  },
  {
    id: 2,
    slug: 'startup-mentor-deeptech',
    title: 'Startup Mentor - Deep Tech',
    department: 'Mentorship',
    location: 'Remote / IIIT Dharwad',
    employmentType: 'Part-time',
    description:
      'Guide early-stage deep tech startups on product strategy, technical architecture, and fundraising readiness through structured mentoring sessions.',
    eligibility:
      '5+ years of industry or founder experience in a deep tech domain (AI, IoT, robotics, or similar).',
    deadline: '2026-09-15',
    status: 'OPEN',
  },
  {
    id: 3,
    slug: 'communications-associate',
    title: 'Communications Associate',
    department: 'Marketing & Communications',
    location: 'IIIT Dharwad, Karnataka',
    employmentType: 'Full-time',
    description:
      'Own IDRP’s content calendar across newsletters, social media, and event communications, and support storytelling for the startup and mentor community.',
    eligibility:
      "Bachelor's degree in Communications, Journalism, or related field with strong written English skills.",
    deadline: '2026-07-20',
    status: 'CLOSED',
  },
]

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug)
}
