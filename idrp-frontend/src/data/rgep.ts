import type { InitiativePageData } from '@/types/program'

export const rgepPage: InitiativePageData = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'Rajiv Gandhi Entrepreneurship Program (RGEP)',
    subtitle: '',
    image: '/rgep/rgep-intro.jfif',
    imageAlt: 'Rajiv Gandhi Entrepreneurship Program',
  },

  intro: {
    eyebrow: 'Overview',
    title: 'Supporting innovators through the uncertainty of early-stage entrepreneurship',
    paragraphs: [
      'The Rajiv Gandhi Entrepreneurship Program (RGEP), an initiative by the Department of Electronics, IT & Biotechnology, Government of Karnataka, is designed to nurture early-stage ideas and transform them into impactful ventures.',
      'The program supports student innovators and aspiring entrepreneurs by enabling them to focus on building solutions with real-world relevance, while encouraging a shift from traditional job-seeking mindsets toward entrepreneurship as a viable career path.',
      'Selected innovators receive a monthly stipend of ₹25,000 for a duration of 12 months, helping them navigate the critical ideation and development phase and progress toward a Prototype, Minimum Viable Product (MVP), or Proof of Concept (PoC) with business potential.',
      'Through a rigorous selection process, 30 innovators are chosen and supported annually to contribute to innovation-driven economic growth, startup creation, and technological advancement in Karnataka.',
    ],
    image: '/rgep/rgep-intro.jpeg',
    imageAlt: 'RGEP Overview',
    details: [
      {
        label: 'Project Monitoring Partner (PMP)',
        value: 'Indian Institute of Information Technology, Dharwad',
      },
      {
        label: 'Principal Investigator',
        value: 'Dr. Deepak K T',
      },
    ],
  },

  value: {
    eyebrow: 'Why This Initiative?',
    title: 'How RGEP strengthens early-stage innovation journeys',
    items: [
      {
        title: 'Structured Entrepreneurship Pathway',
        description:
          'RGEP provides a clear pathway for innovators to explore, validate, and develop early-stage ideas into meaningful entrepreneurial ventures.',
      },
      {
        title: 'Early-Stage Financial Support',
        description:
          'Selected innovators receive a monthly stipend of ₹25,000 for 12 months, offering stability during the ideation and product development phase.',
      },
      {
        title: 'Prototype to MVP Progression',
        description:
          'The program helps innovators move toward a prototype, MVP, or proof of concept that demonstrates practical value and business potential.',
      },
      {
        title: 'Innovation-Driven Growth',
        description:
          'By supporting promising innovators each year, RGEP contributes to startup formation, job creation, and technological advancement across Karnataka.',
      },
    ],
    image: '/rgep/rgep-value.jfif',
    imageAlt: 'RGEP Value',
  },

  cta: {
    eyebrow: 'Apply to RGEP',
    title: 'Take the next step in your innovation journey',
    description:
      'Connect with IIIT Dharwad Research Park to explore RGEP support, application pathways, and how your idea can progress toward a prototype or MVP.',
    primaryActionLabel: 'Apply Now',
    primaryActionTo: '/apply/rgep',
    secondaryActionLabel: 'Contact Us',
    secondaryActionTo: '/contact',
  },
}

export const rgepProjectMonitoringUnit = {
  title: 'Project Monitoring Unit – IIIT Dharwad Research Park',
  description:
    'IIIT Dharwad Research Park (IDRP) serves as a Project Monitoring Unit under RGEP, providing continuous guidance, evaluation, and support to selected innovators. The focus is on ensuring steady progress, refining solutions, and enabling innovators to move from concept to tangible outcomes.',
}

export const rgepInnovators = [
  {
    name: 'Akshay K B',
    projectTitle: 'Wellverse',
    email: 'komarlaakshay@gmail.com',
    description:
      'Developing an innovative solution focused on creating impactful applications in the wellness and technology space.',
  },
  {
    name: 'Shrikrishna',
    projectTitle: 'India-Centric Blockchain Forensics Platform',
    email: 'krishnakailasa2000@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shrikrishna-s',
    description:
      'Building a specialized blockchain forensics platform tailored to the Indian ecosystem, addressing challenges in digital security, investigation, and compliance.',
  },
]

export const rgepHighlights = [
  {
    label: 'Innovators supported',
    value: '30 annually',
  },
  {
    label: 'Monthly stipend',
    value: '₹25,000',
  },
  {
    label: 'Support duration',
    value: '12 months',
  },
  {
    label: 'Expected outcome',
    value: 'Prototype / MVP / PoC',
  },
]

export const rgepSupportPoints = [
  'Encourages a shift from traditional job-seeking mindsets toward entrepreneurship as a viable and rewarding career path.',
  'Provides sustained monthly financial support to help innovators stay focused during the ideation and early development phase.',
  'Supports students and aspiring entrepreneurs in building ideas with strong real-world relevance and business potential.',
  'Connects innovators with structured guidance, evaluation, and monitoring through designated innovation hubs and support partners.',
]
