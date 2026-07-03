import type { MatchCriterion, ProcessStep } from '@/types/matchmaking'

export const matchCriteria: MatchCriterion[] = [
  {
    title: 'Sector Fit',
    description: 'Align startups and investors based on domain relevance and thesis overlap.',
    icon: '🏭',
  },
  {
    title: 'Stage Fit',
    description: 'Match by idea, MVP, early traction, growth, or scale stage.',
    icon: '📈',
  },
  {
    title: 'Funding Fit',
    description: 'Compare startup ask with investor cheque size and investment range.',
    icon: '💳',
  },
  {
    title: 'Geography Fit',
    description: 'Support local, regional, national, or global preference alignment.',
    icon: '🌍',
  },
  {
    title: 'Strategic Fit',
    description: 'Consider long-term interest, value-add potential, and ecosystem compatibility.',
    icon: '🤝',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Create Profile',
    description:
      'Startups and investors submit structured profiles with the right discovery information.',
  },
  {
    step: '02',
    title: 'Evaluate Fit',
    description:
      'The platform checks alignment across sector, stage, funding, geography, and strategy.',
  },
  {
    step: '03',
    title: 'Curate Matches',
    description:
      'Relevant potential matches are shortlisted instead of showing broad unrelated listings.',
  },
  {
    step: '04',
    title: 'Enable Introductions',
    description:
      'Qualified introductions, meetings, and ecosystem engagement can then be facilitated.',
  },
]

export const startupFields: string[] = [
  'Startup Name',
  'Sector / Domain',
  'Stage',
  'Funding Ask',
  'Business Model',
  'Geography',
  'Traction Metrics',
  'Founder Details',
  'Website / Deck Link',
  'Investor Preference',
]

export const investorFields: string[] = [
  'Investor / Fund Name',
  'Preferred Sectors',
  'Preferred Stages',
  'Cheque Size',
  'Geography Preference',
  'Investment Thesis',
  'Portfolio Interests',
  'Introduction Preference',
  'Website / Fund Link',
  'Contact Details',
]
