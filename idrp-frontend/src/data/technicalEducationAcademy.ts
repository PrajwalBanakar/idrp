import type { ServicePage } from '@/types/service'
import { academyCategories } from '@/data/academyCatalog'

export const technicalEducationAcademyPage: ServicePage & {
  academyCategories: typeof academyCategories
} = {
  slug: 'technical-education-academy',
  hero: {
    eyebrow: 'Services',
    title: 'Technical Education Academy',
    description: '',
    image: '/academy-hero.jfif',
  },
  intro: {
    eyebrow: 'Learning & Capacity Building',
    title: 'Building Technical Depth Through Certification Courses and Workshops',
    paragraphs: [
      'The Technical Education Academy delivers practical, future-ready learning opportunities across emerging technologies, innovation, and applied engineering domains.',
      'Our offerings are now structured across certification courses and workshops designed for students, faculty, professionals, and institutions seeking industry-relevant learning experiences.',
    ],
  },
  highlights: [
    {
      id: 'certification-courses',
      title: 'Certification Courses',
      icon: '📘',
      tone: 'teal',
    },
    {
      id: 'workshops',
      title: 'Workshops',
      icon: '🛠️',
      tone: 'cyan',
    },
    {
      id: 'faculty',
      title: 'Faculty Development',
      icon: '🎓',
      tone: 'amber',
    },
    {
      id: 'capacity-building',
      title: 'Capacity Building',
      icon: '⚙️',
      tone: 'indigo',
    },
  ],
  stats: [
    { value: '6+', label: 'Programs Offered' },
    { value: '1000+', label: 'Learners Engaged' },
    { value: '50+', label: 'Hands-on Sessions' },
    { value: '2', label: 'Learning Tracks' },
  ],
  academyCategories,
  cta: {
    eyebrow: 'Learn With IDRP',
    title: 'Explore Certification Courses and Workshops',
    description:
      'Join structured technical learning experiences designed for real-world readiness, innovation, and applied capability building.',
  },
}
