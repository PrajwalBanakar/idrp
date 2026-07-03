export type QuantumFocusArea = {
  title: string
  description: string
  points: string[]
}

export type QuantumBeneficiaryGroup = {
  title: string
  description: string
}

export const focusAreas: QuantumFocusArea[] = [
  {
    title: 'Quantum & Advanced Computing Awareness',
    description: 'Promotes structured engagement with emerging computing paradigms.',
    points: [
      'Exposure to emerging computing concepts',
      'Future-oriented capability building',
      'Strategic technology awareness',
    ],
  },
  {
    title: 'Quantum AI & Computational Innovation',
    description: 'Supports AI-driven innovation and advanced algorithmic thinking.',
    points: ['AI innovation pathways', 'Computational exploration', 'Research-led problem solving'],
  },
  {
    title: 'Research & Talent Development',
    description: 'Creates opportunities for interdisciplinary collaboration and talent growth.',
    points: ['Collaborative research culture', 'Talent development', 'Interdisciplinary projects'],
  },
  {
    title: 'Innovation Ecosystem',
    description: 'Strengthens institutional positioning in advanced computing domains.',
    points: ['Ecosystem readiness', 'Technology-driven innovation', 'Strategic positioning'],
  },
]

export const beneficiaryGroups: QuantumBeneficiaryGroup[] = [
  {
    title: 'Students',
    description: 'Students interested in advanced computing and research pathways.',
  },
  {
    title: 'Faculty',
    description: 'Faculty exploring interdisciplinary research and advanced computing.',
  },
  {
    title: 'Researchers',
    description: 'Teams working on emerging technology domains.',
  },
  {
    title: 'Startups & Innovators',
    description: 'Teams exploring deep-tech and future computing opportunities.',
  },
]
