import type { ServicePage } from '@/types/service'

export const industryResearchPage: ServicePage = {
  slug: 'industry-research',
  hero: {
    eyebrow: 'Services',
    title: 'Industry Research & Consulting',
    description: '',
    image: '/industry-research-hero.jfif',
  },
  intro: {
    eyebrow: 'Research, Consulting & Collaboration',
    title: 'Solving Real Industry Problems Through Applied Research and Consulting',
    paragraphs: [
      'At IDRP, Industry Research & Consulting connects technical depth, academic capability, and practical problem-solving to address real-world challenges.',
      'We work with industries, startups, institutions, and innovation teams to define problem statements, validate approaches, improve systems, and create scalable outcomes.',
    ],
  },
  highlights: [
    {
      id: 'applied-research',
      title: 'Applied Research & Technology Validation',
      icon: '🔬',
      image: '/industry-tech.jfif',
      tone: 'teal',
    },
    {
      id: 'strategy',
      title: 'Strategy, Advisory & Planning',
      icon: '📘',
      image: '/consulting-strategy.jfif',
      tone: 'cyan',
    },
    {
      id: 'process',
      title: 'Process Improvement & Performance Studies',
      icon: '📊',
      image: '/industry-process.jfif',
      tone: 'slate',
    },
    {
      id: 'innovation',
      title: 'Innovation, Product & Feasibility Support',
      icon: '💡',
      image: '/industry-innovation.jfif',
      tone: 'amber',
    },
    {
      id: 'execution',
      title: 'Execution, Pilot & Solution Pathways',
      icon: '🚀',
      image: '/consulting-execution.jfif',
      tone: 'indigo',
    },
  ],
  stats: [
    { value: '40+', label: 'Industry Research & Consulting Engagements' },
    { value: '25+', label: 'Collaboration & Consulting Themes' },
    { value: '15+', label: 'Emerging Technology Focus Areas' },
    { value: '100+', label: 'Experts, Mentors & Innovation Enablers' },
  ],
  cta: {
    eyebrow: 'Collaborate With IDRP',
    title: 'Start a Research or Consulting Discussion',
    description:
      'Share your challenge, research need, or collaboration idea and our team will connect with you.',
  },
  formOptions: [
    { label: 'Applied Technology Research', value: 'Applied Technology Research' },
    {
      label: 'Industry Problem Solving & Validation',
      value: 'Industry Problem Solving & Validation',
    },
    { label: 'Strategy & Consulting Support', value: 'Strategy & Consulting Support' },
    {
      label: 'Process Improvement & Performance Study',
      value: 'Process Improvement & Performance Study',
    },
    {
      label: 'Innovation / Product / Feasibility Support',
      value: 'Innovation / Product / Feasibility Support',
    },
    { label: 'AI / Data / Digital Transformation', value: 'AI / Data / Digital Transformation' },
    {
      label: 'Pilot / Execution / Implementation Support',
      value: 'Pilot / Execution / Implementation Support',
    },
  ],
}
