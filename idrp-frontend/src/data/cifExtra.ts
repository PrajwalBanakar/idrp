export type CIFFocusArea = {
  title: string
  description: string
  points: string[]
}

export type CIFBeneficiaryGroup = {
  title: string
  description: string
}

export const focusAreas: CIFFocusArea[] = [
  {
    title: 'Shared Instrumentation Access',
    description: 'Access to technical equipment and tools supporting research and innovation.',
    points: [
      'Specialized instruments and lab tools',
      'Shared infrastructure model',
      'Multi-user support',
    ],
  },
  {
    title: 'Prototype Development Support',
    description: 'Helps innovators build and refine early-stage prototypes.',
    points: ['Prototype experimentation', 'Development support', 'Validation readiness'],
  },
  {
    title: 'Research & Testing Enablement',
    description: 'Supports applied research and experimentation requiring instrumentation.',
    points: ['Testing and analysis', 'Applied research support', 'Technical validation'],
  },
  {
    title: 'Innovation Ecosystem Strengthening',
    description: 'Improves ecosystem capability through shared infrastructure.',
    points: ['Innovation program support', 'Institutional capability growth', 'Startup readiness'],
  },
]

export const beneficiaryGroups: CIFBeneficiaryGroup[] = [
  {
    title: 'Startups',
    description: 'Startups needing infrastructure for product development and testing.',
  },
  {
    title: 'Students',
    description: 'Students working on prototypes and innovation projects.',
  },
  {
    title: 'Faculty',
    description: 'Faculty engaged in research and applied innovation.',
  },
  {
    title: 'Researchers',
    description: 'Teams requiring instrumentation for experimentation and validation.',
  },
]

export const cifGalleryImages = [
  { src: '/cif/img1.jpeg', alt: 'CIF Tool 1' },
  { src: '/cif/img2.jpeg', alt: 'CIF Tool 2' },
  { src: '/cif/img3.jpeg', alt: 'CIF Tool 3' },
  { src: '/cif/img4.jpeg', alt: 'CIF Tool 4' },
  { src: '/cif/img5.jpeg', alt: 'CIF Tool 5' },
  { src: '/cif/img6.jpeg', alt: 'CIF Tool 6' },
  { src: '/cif/img7.jpeg', alt: 'CIF Tool 7' },
  { src: '/cif/img8.jpeg', alt: 'CIF Tool 8' },
]
