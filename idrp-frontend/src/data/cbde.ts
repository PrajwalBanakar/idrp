import type { ProgramPageData } from '@/types/program'

export const cbdePage = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'Capacity Building for Design and Entrepreneurship (CBDE)',
    subtitle: '',
    image: '/cbde-hero.jfif',
    imageAlt: 'CBDE Program',
  },

  intro: {
    eyebrow: 'Overview',
    title: 'Building Design Capability and Entrepreneurial Confidence',
    paragraphs: [
      'Capacity Building for Design and Entrepreneurship (CBDE) is an initiative of the Ministry of Education, Government of India.',
      'The nodal centre for this program is the Indian Institute of Information Technology Design & Manufacturing (IIITDM) Kancheepuram, through its Malaviya Mission Teacher Training Centre (MMTTC), Tamil Nadu, India.',
      'Through this initiative, IDRP contributes to strengthening design capability, innovation mindset, and entrepreneurial readiness among participants.',
    ],
    image: '/cbde/cbde-intro.jpeg',
    imageAlt: 'CBDE Overview',
    details: [ 
      {
        label: 'Higher Education Institution (HEI)',
        value: 'Indian Institute of Information Technology, Dharwad',
      },
      {
        label: 'Principal Investigator',
        value: 'Dr. Deepak K T',
      },
      {
        label: 'Co-Principal Investigator',
        value: 'Prof. S R Mahadeva Prasanna',
      },
    ],
  },

  value: {
    eyebrow: 'Why This Initiative?',
    title: 'The Value of Design and Entrepreneurship Capacity Building',
    items: [
      {
        title: 'Strong Design Thinking Foundation',
        description: 'Builds structured approaches to problem solving and innovation.',
      },
      {
        title: 'Opportunity Identification',
        description: 'Encourages identifying real-world problems and user needs.',
      },
      {
        title: 'Execution Readiness',
        description: 'Supports movement from idea to implementation.',
      },
      {
        title: 'Startup Orientation',
        description: 'Develops entrepreneurial thinking and venture awareness.',
      },
    ],
    image: '/cbde/cbde-value.jpeg',
    imageAlt: 'CBDE Value',
  },

  cta: {
    eyebrow: 'Get Involved',
    title: 'Build Stronger Innovation Capability',
    description:
      'Connect with IDRP to explore how this initiative can support your innovation journey.',
    primaryActionLabel: 'Contact Us',
    primaryActionTo: '/contact',
  },
}
