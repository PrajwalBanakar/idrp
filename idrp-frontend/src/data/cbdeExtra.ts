export type CBDEFocusArea = {
  title: string
  description: string
  points: string[]
}

export type CBDEBeneficiaryGroup = {
  title: string
  description: string
}

export const focusAreas: CBDEFocusArea[] = [
  {
    title: 'Design Thinking & Problem Discovery',
    description:
      'The initiative helps participants understand users, identify meaningful challenges, and approach innovation with a structured design mindset.',
    points: [
      'User-centered thinking and empathy',
      'Problem identification and opportunity mapping',
      'Structured solution framing approaches',
    ],
  },
  {
    title: 'Innovation & Product Thinking',
    description:
      'Participants strengthen their ability to shape ideas into practical solutions through value creation, usability, and feasibility thinking.',
    points: [
      'Idea refinement and concept shaping',
      'Solution-oriented product thinking',
      'Practical innovation development pathways',
    ],
  },
  {
    title: 'Entrepreneurial Mindset Development',
    description:
      'The initiative promotes ownership, creativity, and venture-oriented thinking that supports startup readiness.',
    points: [
      'Entrepreneurial awareness and confidence',
      'Opportunity-oriented thinking',
      'Readiness for venture exploration',
    ],
  },
  {
    title: 'Execution Readiness & Ecosystem Linkages',
    description:
      'Participants are better prepared to move toward validation, incubation, and ecosystem engagement.',
    points: [
      'Better execution and validation readiness',
      'Linkages to incubation and startup pathways',
      'Stronger participation in innovation ecosystems',
    ],
  },
]

export const beneficiaryGroups: CBDEBeneficiaryGroup[] = [
  {
    title: 'Faculty',
    description:
      'Faculty members aiming to integrate innovation, design thinking, and entrepreneurship into teaching, research, and academic initiatives.',
  },
  {
    title: 'Students',
    description:
      'Students who want to build stronger innovation, design, and entrepreneurial capabilities beyond classroom learning.',
  },
  {
    title: 'Aspiring Founders',
    description:
      'Individuals exploring startup ideas and seeking stronger foundations in problem-solving and venture thinking.',
  },
  {
    title: 'Ecosystem Educational Institutions',
    description:
      'Academic institutions looking to strengthen their innovation ecosystem through structured programs, collaborations, and capacity-building initiatives.',
  },
]
