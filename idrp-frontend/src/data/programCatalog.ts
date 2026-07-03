import type { Program } from '@/types/program'

export const programCatalog: Program[] = [
  {
    id: 'pre-incubation',
    title: 'Yuva Udyami Pre Incubation Program',
    duration: '18 months',
    description:
      'A structured early-stage program for founders at idea, problem-validation, or prototype stage. Designed to help aspiring startups validate the problem, refine the solution, build an MVP, evaluate product-market-fit, pilot with initial customers and prepare for incubation readiness.',
    detailsTo: '/pre-incubation',
    applyTo: '/apply/pre-incubation',
    brochureTo: '/yuva-udyami/yuva_udyami_brochure.pdf',
    brochureLabel: 'View Brochure',
    features: [
      'Idea validation and customer discovery',
      'State of the art labs',
      'MVP build guidance',
      'Industry Expert Mentors',
      'Business strategies and GTM',
      'Market and funding access',
    ],
  },
  {
    id: 'incubation',
    title: 'Udyami Incubation Program',
    duration: '18 months',
    description:
      'A comprehensive incubation program supporting startups from idea, PoC, or MVP stage with mentorship, infrastructure, ecosystem access, and funding opportunities.',
    detailsTo: '/incubation',
    applyTo: '/apply/incubation',
    brochureTo: '/udyami/udyami_brochure.pdf',
    brochureLabel: 'View Brochure',
    features: [
      'Highly skilled talent and technology patent pool',
      'Access to research labs and high end equipment ',
      'Technical mentorship from faculty and experts',
      'Business development and GTM support',
      'Investor connect and funding opportunities',
      'Strong startup ecosystem and networking',
    ],
  },
]
