import type { Newsletter } from '@/types/newsletter'

export const newslettersHero = {
  eyebrow: 'Resources',
  title: 'Newsletters',
  subtitle:
    'Stay updated with startup activity, ecosystem developments, research highlights, and program milestones across IDRP.',
}

export const newslettersIntro = {
  eyebrow: 'Publications',
  title: 'Explore Our Newsletters',
  description:
    'Browse curated newsletters covering innovation, founder activity, research developments, and ecosystem signals from IDRP.',
}

export const newsletters: Newsletter[] = [
  {
    id: 1,
    slug: 'jan-mar-2025-edition',
    title: 'IIIT Dharwad Research Park Newsletter',
    issue: '01',
    date: 'Jan–Mar 2025',
    description:
      'Quarterly highlights covering startup programs, workshops, innovation initiatives, and ecosystem activity at IIIT Dharwad Research Park.',
    preview:
      'This issue includes event highlights, Yuva Udhyami startup challenge activity, NAIN 2.0 kickoff, faculty development program, startup spotlight, industry insights, SageMaker workshop, and academic engagement.',
    highlights: [
      'Yuva Udhyami startup challenge and cohort announcement',
      'NAIN 2.0 kickoff highlights',
      'Faculty development program on design and entrepreneurship',
      'Startup spotlight, workshops, and ecosystem activity',
    ],
    coverGradient: 'linear-gradient(180deg, #0f3d6e 0%, #0b2f57 45%, #08213c 100%)',
    pdfUrl: '/newsletters/01-jan-mar-2025-edition.pdf',
    totalPages: 9,
    previewImage: '/newsletters/jan-mar-2025-cover.jpg',
  },
  {
    id: 2,
    slug: 'apr-jun-2025-edition',
    title: 'IIIT Dharwad Research Park Newsletter',
    issue: '02',
    date: 'Apr–Jun 2025',
    description:
      'Quarterly highlights from programs, activities, collaborations, and startup ecosystem engagement.',
    preview: 'Browse the Apr–Jun 2025 edition of the IIIT Dharwad Research Park newsletter.',
    highlights: [
      'Quarterly updates from the ecosystem',
      'Program and event highlights',
      'Founder and community activities',
      'Institutional and innovation milestones',
    ],
    coverGradient: 'linear-gradient(180deg, #0f766e 0%, #115e59 45%, #0b3b39 100%)',
    pdfUrl: '/newsletters/02-apr-jun-2025-edition.pdf',
    previewImage: '/newsletters/apr-jun-2025-cover.jpg',
  },
  {
    id: 3,
    slug: 'jul-sep-2025-edition',
    title: 'IIIT Dharwad Research Park Newsletter',
    issue: '03',
    date: 'Jul–Sep 2025',
    description:
      'Quarterly highlights from programs, partnerships, startup support, and innovation-led initiatives.',
    preview: 'Browse the Jul–Sep 2025 edition of the IIIT Dharwad Research Park newsletter.',
    highlights: [
      'Quarterly updates from the ecosystem',
      'Program and event highlights',
      'Founder and community activities',
      'Institutional and innovation milestones',
    ],
    coverGradient: 'linear-gradient(180deg, #1d4ed8 0%, #1e40af 45%, #172554 100%)',
    pdfUrl: '/newsletters/03-jul-sep-2025-edition.pdf',
    previewImage: '/newsletters/jul-sep-2025-cover.jpg',
  },
  {
    id: 4,
    slug: 'oct-dec-2025-edition',
    title: 'IIIT Dharwad Research Park Newsletter',
    issue: '04',
    date: 'Oct–Dec 2025',
    description:
      'Quarterly highlights from programs, ecosystem developments, events, and startup engagement.',
    preview: 'Browse the Oct–Dec 2025 edition of the IIIT Dharwad Research Park newsletter.',
    highlights: [
      'Quarterly updates from the ecosystem',
      'Program and event highlights',
      'Founder and community activities',
      'Institutional and innovation milestones',
    ],
    coverGradient: 'linear-gradient(180deg, #4338ca 0%, #3730a3 45%, #1e1b4b 100%)',
    pdfUrl: '/newsletters/04-oct-dec-2025-edition.pdf',
    previewImage: '/newsletters/oct-dec-2025-cover.jpg',
  },
    {
    id: 5,
    slug: 'jan-mar-2026-edition',
    title: 'IIIT Dharwad Research Park Newsletter',
    issue: '05',
    date: 'Jan–Mar 2026',
    description:
      'Quarterly highlights from programs, ecosystem developments, events, and startup engagement.',
    preview: 'Browse the Jan–Mar 2026 edition of the IIIT Dharwad Research Park newsletter.',
    highlights: [
      'Quarterly updates from the ecosystem',
      'Program and event highlights',
      'Founder and community activities',
      'Institutional and innovation milestones',
    ],
    coverGradient: 'linear-gradient(180deg, #4338ca 0%, #3730a3 45%, #1e1b4b 100%)',
    pdfUrl: '/newsletters/05-jan-mar-2026-edition.pdf',
    previewImage: '/newsletters/jan-mar-2026-cover.jpg',
  },
]

export const getVisibleNewsletters = () =>
  newsletters.filter((newsletter) => newsletter.visible !== false)

export const getNewsletterBySlug = (slug: string) =>
  newsletters.find((newsletter) => newsletter.slug === slug && newsletter.visible !== false)
