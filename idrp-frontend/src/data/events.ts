import type { EventItem } from '@/types/events'

// ─────────────────────────────────────────────
// PAGE CONTENT
// ─────────────────────────────────────────────

export const eventsHero = {
  eyebrow: 'Community',
  title: 'Events',
  image: '/hero3.jfif',
  imageAlt: 'IDRP community events',
}

export const eventsSections = {
  upcoming: {
    eyebrow: "What's Next",
    title: 'Upcoming Events',
  },
  past: {
    eyebrow: 'Archive',
    title: 'Past Events',
  },
}

export const eventsCta = {
  title: 'Want to host an event with IDRP?',
  description:
    'Reach out to us for collaborations, hackathons, showcases, workshops, and community events.',
  buttonLabel: 'Contact Us',
  buttonTo: '/contact',
}

// ─────────────────────────────────────────────
// EVENTS DATA
// ─────────────────────────────────────────────

export const events: EventItem[] = [
  {
    id: 1,
    slug: 'startup-school-series-8-strategic-pricing',
    title: 'Startup School Series 8',
    category: 'Workshop',
    description:
      'Pricing is one of the most critical yet challenging aspects of building a successful startup. This session will help participants understand how to strategically price products and align value with customer expectations.',
    startDate: '2026-04-25',
    endDate: '2026-04-25',
    displayDate: 'April 25, 2026',
    time: '10:30 AM – 12:00 PM',
    location: 'Google Meet',
    mode: 'Online',
    image: '/events/brochures/startup_school_8.jpeg',
    imageFit: 'contain',
    registerUrl: 'https://meet.google.com/pkk-dmvo-qwk',
  },
  {
    id: 2,
    slug: 'hack2future-hackathon-2026',
    title: 'Hack2Future Hackathon 2026',
    category: 'Hackathon',
    description:
      'A two-day hackathon held on 4th and 5th April 2026, sponsored by IDRP, bringing together students and innovators for collaborative problem-solving and prototype development.',
    startDate: '2026-04-04',
    endDate: '2026-04-05',
    displayDate: 'April 4–5, 2026',
    time: '2 Days',
    location: 'IIIT Dharwad',
    mode: 'Offline',
    image: '/events/gallery/hack2future/cover.JPG',
    imageFit: 'cover',
    gallery: [
      '/events/gallery/hack2future/1.JPG',
      '/events/gallery/hack2future/2.JPG',
      '/events/gallery/hack2future/3.JPG',
      '/events/gallery/hack2future/4.JPG',
    ],
  },
  {
    id: 3,
    slug: 'yuva-udhyami-cohort-announcement-2026',
    title: 'Yuva Udhyami Cohort Announcement',
    category: 'Program',
    description:
      'The Yuva Udhyami cohort announcement event marked the selection of promising student-led startups for the pre-incubation program, bringing together innovators, mentors, and the IDRP ecosystem.',
    startDate: '2026-04-07',
    endDate: '2026-04-07',
    displayDate: 'April 7, 2026',
    location: 'IIIT Dharwad',
    mode: 'Offline',
    image: '/events/gallery/yuva_udyami_cohort_2026/cover.JPG',
    imageFit: 'cover',
    gallery: [
      '/events/gallery/yuva_udyami_cohort_2026/1.JPG',
      '/events/gallery/yuva_udyami_cohort_2026/2.JPG',
      '/events/gallery/yuva_udyami_cohort_2026/3.JPG',
      '/events/gallery/yuva_udyami_cohort_2026/4.JPG',
    ],
  },
]
// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function parseLocalDate(dateString: string, endOfDay = false) {
  const parts = dateString.split('-')

  if (parts.length !== 3) {
    throw new Error(`Invalid date format: ${dateString}`)
  }

  const year = Number(parts[0])
  const month = Number(parts[1])
  const day = Number(parts[2])

  if (endOfDay) {
    return new Date(year, month - 1, day, 23, 59, 59, 999)
  }

  return new Date(year, month - 1, day, 0, 0, 0, 0)
}
export const getVisibleEvents = () => events.filter((event) => event.visible !== false)

export const getEventById = (id: number) =>
  events.find((event) => event.id === id && event.visible !== false)

export const getEventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug && event.visible !== false)

export const getUpcomingEvents = () => {
  const now = new Date()

  return events
    .filter(
      (event) =>
        parseLocalDate(event.endDate, true).getTime() >= now.getTime() && event.visible !== false,
    )
    .sort((a, b) => parseLocalDate(a.startDate).getTime() - parseLocalDate(b.startDate).getTime())
}

export const getPastEvents = () => {
  const now = new Date()

  return events
    .filter(
      (event) =>
        parseLocalDate(event.endDate, true).getTime() < now.getTime() && event.visible !== false,
    )
    .sort((a, b) => parseLocalDate(b.startDate).getTime() - parseLocalDate(a.startDate).getTime())
}
