import type { Stat } from '@/data/home'

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

export const qaicMetrics: Stat[] = [
  {
    label: 'Patent Filed',
    target: 1,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
  },
  {
    label: 'Online M Tech in QAIC',
    textValue: 'Launched',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443" /></svg>`,
  },
]
