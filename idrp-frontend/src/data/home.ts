import type { AcademyCategory } from '@/types/academy'
import type { PartnerKey } from '@/types/partners'

import { academyCategories } from '@/data/academyCatalog'
import { allPartners } from '@/data/partners'

export { allPartners }

export const partnerCategories: Array<{
  key: 'all' | PartnerKey
  label: string
}> = [
  { key: 'all', label: 'All' },
  { key: 'academic', label: 'Academic' },
  { key: 'technology', label: 'Technology' },
  { key: 'ecosystem', label: 'Ecosystem' },
  { key: 'investor', label: 'Investor' },
]

export type HeroSlide = {
  heading: string
  subtext: string
  image: string
}

export type IconCard = {
  title: string
  description: string
  icon: string
}

export type Program = {
  title: string
  duration: string
  description: string
  detailsTo: string
  applyTo: string
  brochureTo?: string
  brochureLabel?: string
  features: string[]
}

export type GovernmentProgram = {
  title: string
  description: string
  route: string
  icon: 'atom' | 'lightbulb' | 'beaker' | 'pencil-ruler' | 'banknotes'
}

export type Service = {
  title: string
  description: string
  route: string
  icon: string
}

export type Story = {
  quote: string
  company: string
  tagline?: string
  initials: string
  color: string
}

export type Award = {
  entity?: string
  title: string
  issuer: string
  year: string
  image: string
  bg: string
}

export type Stat = {
  label: string
  target: number
  prefix?: string
  suffix: string
  icon: string
}

export const heroSlides: HeroSlide[] = [
  {
    heading: "Empowering Deep-Tech Innovation for Tomorrow's Solutions",
    subtext:
      'IIIT Dharwad Research Park is at the forefront of nurturing breakthrough innovations that address complex technological and societal challenges.',
    image: '/campus/idrp_drone.jpeg',
  },
  {
    heading: 'Where ideas transform into impactful ventures',
    subtext: 'Providing the ecosystem, guidance, market & funding access to help you scale.',
    image: '/campus/idrp_building.jpg',
  },
  {
    heading: 'Build, connect, and grow in a space designed for founders',
    subtext:
      'We are not just workspace, IDRP is a hub for innovation and meaningful collaboration.',
    image: '/campus/idrp_auditorium.JPG',
  },
]

export const programs: Program[] = [
  {
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
    title: 'Udyami Incubation Program',
    duration: '18 months',
    description:
      'Comprehensive support for startups at idea, PoC, or MVP stage. Get access to dedicated workspace, labs, mentorship, and seed funding opportunities.',
    detailsTo: '/incubation',
    applyTo: '/apply/incubation',
    brochureTo: '/udyami/udyami_brochure.pdf',
    brochureLabel: 'View Brochure',
    features: [
      'Highly skilled talent and technology patent pool',
      'Access to research labs and high end equipment',
      'Technical mentorship from faculty',
      'Business development support',
      'Seed funding opportunities',
      'Industry networking events',
    ],
  },
]

export const governmentPrograms: GovernmentProgram[] = [
  {
    title: 'Centre of Excellence in Quantum AI and Computing (CoE)',
    description:
      'A focused Government of Karnataka initiative to advance research, talent development, and innovation in quantum technologies, artificial intelligence, and next-generation computing systems.',
    route: '/programs/coe-quantum-ai',
    icon: 'atom',
  },
  {
    title: 'New Age Innovation Network (NAIN)',
    description:
      'A Government of Karnataka supported initiative focussed on innovation, entrepreneurship development, and startup ecosystem for student and early-stage founders.',
    route: '/programs/nain',
    icon: 'lightbulb',
  },
  {
    title: 'Common Instrumentation Facility (CIF)',
    description:
      'Shared access to advanced instrumentation, maker lab facilities, and prototyping infrastructure that Government of Karnataka supports to encourage research, product development, and deep-tech experimentation.',
    route: '/programs/cif',
    icon: 'beaker',
  },
  {
    title: 'Capacity Building for Design and Entrepreneurship (CBDE)',
    description:
      'A MoE program to foster pedagogy changes that helps build innovation capability, product thinking, design mindset, and entrepreneurial readiness among students and researchers.',
    route: '/programs/cbde',
    icon: 'pencil-ruler',
  },
  {
    title: 'Rajiv Gandhi Entrepreneurship Program (RGEP)',
    description:
      'An early-stage funding initiative from Government of Karnataka that supports early-stage innovators with monthly subsistence grant, structured monitoring, and guidance towards prototype, MVP, or proof-of concept outcomes with business potential.',
    route: '/programs/rgep',
    icon: 'banknotes',
  },
]
export const courses: AcademyCategory[] = academyCategories

export const services: Service[] = [
  {
    title: 'Industry Research and Consulting',
    description:
      'Collaborative research, consulting, and strategic advisory support aligned with real industry challenges and innovation goals.',
    route: '/industry-research',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12M3.75 3h16.5M3.75 3v16.5m4.5-9 2.25 2.25 3.75-4.5 2.25 2.25 3-3" /></svg>`,
  },
  {
    title: 'Technical Education Academy',
    description:
      'Specialized technical education programs, industry-ready courses, and capacity-building initiatives for students, faculty, and professionals.',
    route: '/technical-education-academy',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14.25 4.5 9.75 12 5.25l7.5 4.5-7.5 4.5Zm0 0v6.75m0-6.75 6.16-3.696a.75.75 0 0 1 1.09.665v4.431a.75.75 0 0 1-.384.654L12 21m0-6.75L5.134 10.554a.75.75 0 0 0-1.134.651v4.446a.75.75 0 0 0 .384.654L12 21" /></svg>`,
  },
]

export const approaches: IconCard[] = [
  {
    title: 'Curated networking events for founders',
    description: 'Engage, collaborate, and grow within a vibrant startup community',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    title: 'Hands-on workshops & masterclasses',
    description: 'Develop critical skills guided by experienced professionals',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
  },
  {
    title: 'Mentorship & expert clinics',
    description: 'Navigate legal, financial, and product challenges with experienced guidance',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
  },
]

export const successStories: Story[] = [
  {
    quote:
      'The mentorship at IDRP helped us turn a critical safety problem into a working prototype with confidence and clarity.',
    company: 'Friend In Fog',
    tagline: 'Safety innovation',
    initials: 'FI',
    color: 'linear-gradient(135deg, #0d9488, #06b6d4)',
  },
  {
    quote:
      'With the right guidance and ecosystem support, we were able to make complex machine learning concepts more accessible and practical.',
    company: 'MLera',
    tagline: 'Making ML accessible',
    initials: 'ML',
    color: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    quote:
      'IDRP helped us refine our product direction, understand our market better, and move forward with a stronger business foundation.',
    company: 'Cre8Hub',
    tagline: 'Product and market clarity',
    initials: 'CH',
    color: 'linear-gradient(135deg, #ea580c, #fbbf24)',
  },
    {
    quote:
      'IDRP turned ideas into direction, and direction into a business we can stand on.',
    company: 'Aatrangi',
    tagline: 'From idea to business',
    initials: 'AA',
    color: 'linear-gradient(135deg, #0284c7, #22d3ee)',
  },
  {
    quote:
      'We built with confidence knowing we had strong technical backing, practical mentorship, and access to a supportive innovation ecosystem.',
    company: 'SmartNest',
    tagline: 'Built on strong technical backing',
    initials: 'SN',
    color: 'linear-gradient(135deg, #0891b2, #22d3ee)',
  },
  {
    quote:
      'IDRP enabled us to shape a healthcare solution that addresses urgent and meaningful needs with purpose-driven innovation.',
    company: 'MediRaksha',
    tagline: 'Healthcare with impact',
    initials: 'MR',
    color: 'linear-gradient(135deg, #15803d, #4ade80)',
  },
  {
    quote:
      'Through the support and encouragement at IDRP, we are redefining how mental health support can be delivered through technology.',
    company: 'NeXR',
    tagline: 'Mental health through technology',
    initials: 'NX',
    color: 'linear-gradient(135deg, #be185d, #f472b6)',
  },
  {
    quote:
      'We transform complex data into actionable insights, and IDRP helped us strengthen that vision into a meaningful solution.',
    company: 'Neuraforesight',
    tagline: 'Smarter decisions from data',
    initials: 'NF',
    color: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
  },
  {
    quote:
      'Our work on next-generation encryption solutions grew stronger with IDRP’s ecosystem, helping us focus on secure and compliant data systems.',
    company: 'Cipherion',
    tagline: 'Next-generation encryption',
    initials: 'CP',
    color: 'linear-gradient(135deg, #b45309, #fcd34d)',
  },
  {
    quote:
      'We developed an affordable automated CPR device for emergency response, and IDRP gave us the environment to push that mission forward.',
    company: 'SphuraNex',
    tagline: 'Affordable life-saving innovation',
    initials: 'SP',
    color: 'linear-gradient(135deg, #0f766e, #2dd4bf)',
  },
]

export const awards: Award[] = [
  {
    title: 'Centre of Excellence in Quantum AI and Quantum Computing',
    issuer: 'Government of Karnataka',
    year: '2025',
    image: '/awards/coe.jpeg',
    bg: 'from-teal-600 to-cyan-500',
  },
  {
    entity: 'Cipherion',
    title: 'Recognized among the Top 3 fund-ready startups at HDB Blue 2025',
    issuer: 'HDB Techceleration',
    year: '2025',
    image: '/awards/cipherion_hdb_blue.jpg',
    bg: 'from-teal-600 to-cyan-500',
  },
  {
    entity: 'NeXR Technology Private Limited',
    title: 'Recognized for Innovation Excellence at HDB Blue 2025',
    issuer: 'HDB Techceleration',
    year: '2025',
    image: '/awards/NeXR.jpeg',
    bg: 'from-teal-600 to-cyan-500',
  },
  {
    entity: 'Cipherion',
    title: 'Featured on Doordarshan’s “Karnataka Startup Champion – Navabharatada Shilpigalu”',
    issuer: 'Doordarshan Karnataka',
    year: '2025',
    image: '/awards/cipherion_doordarshan.png',
    bg: 'from-teal-600 to-cyan-500',
  },
  {
    entity: 'Cipherion',
    title: 'Selected for ₹1 Crore funding under AVINYA Cohort 1',
    issuer: 'ACSEL Technology Forum',
    year: '2025',
    image: '/awards/cipherion_onecr.jpg',
    bg: 'from-teal-600 to-cyan-500',
  },
]

export const stats: Stat[] = [
  // {
  //   label: 'Programs offered',
  //   target: 8,
  //   suffix: '+',
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.5h16.5M3.75 9h16.5M3.75 13.5h16.5M3.75 18h16.5" /></svg>`,
  // },
  // {
  //   label: 'Learners engaged',
  //   target: 500,
  //   suffix: '+',
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14.25 4.5 9.75 12 5.25l7.5 4.5-7.5 4.5Zm0 0v6.75m0-6.75 6.16-3.696a.75.75 0 0 1 1.09.665v4.431a.75.75 0 0 1-.384.654L12 21m0-6.75L5.134 10.554a.75.75 0 0 0-1.134.651v4.446a.75.75 0 0 0 .384.654L12 21" /></svg>`,
  // },
  // {
  //   label: 'Hands-on sessions',
  //   target: 20,
  //   suffix: '+',
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5M3.75 7.5h16.5m-16.5 9h16.5" /></svg>`,
  // },
  {
    label: 'Number of Startups',
    target: 60,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    label: 'Founders supported',
    target: 120,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    label: 'Funding enabled',
    target: 1.3,
    suffix: ' Cr+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  },
  {
    label: 'Startup networking events per year',
    target: 30,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>`,
  },
  {
    label: 'Patents filed by TTO',
    target: 30,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
  },
  {
    label: 'Investors and strategic industry partners',
    target: 50,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
  },
  // {
  //   label: 'Mentors',
  //   target: 15,
  //   suffix: '',
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
  // },
  {
    label: 'Mentoring sessions',
    target: 100,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a3.375 3.375 0 1 1 6.75 0c0 1.875-1.5 3-3.375 4.125-1.875-1.125-3.375-2.25-3.375-4.125Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a8.25 8.25 0 1 0 0-16.5A8.25 8.25 0 0 0 12 21Z" /></svg>`,
  },
  {
    label: 'Knowledge sessions',
    target: 60,
    suffix: '+',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75v6m0 0 3-3m-3 3-3-3M6.75 19.5h10.5A2.25 2.25 0 0 0 19.5 17.25V6.75A2.25 2.25 0 0 0 17.25 4.5H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5A2.25 2.25 0 0 0 6.75 19.5Z" /></svg>`,
  },
]
