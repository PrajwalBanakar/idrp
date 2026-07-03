import type { InitiativePageData } from '@/types/program'

export const cifPage: InitiativePageData = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'Common Instrumentation Facility (CIF)',
    subtitle: '',
    image: '/cif-hero.jfif',
    imageAlt: 'Common Instrumentation Facility',
  },

  intro: {
    eyebrow: 'Overview',
    title: 'Enabling Innovation through Shared Infrastructure',
    paragraphs: [
      'Common Instrumentation Facility (CIF) is an initiative of the Department of Electronics, IT, BT, Government of Karnataka, aimed at enabling innovation through shared infrastructure.',
      'The Common Instrumentation Facility (CIF) provides startups, researchers, and academic teams with access to specialized equipment and advanced lab infrastructure, eliminating the need for individual ownership.',
      'By addressing critical infrastructure gaps, CIF plays a key role in strengthening deep-tech innovation, fostering interdisciplinary research, and supporting early-stage prototyping.',
    ],
    image: '/cif/cif-intro.jpeg',
    imageAlt: 'CIF Overview',
    details: [
      {
        label: 'Implementing Partner',
        value: 'Indian Institute of Information Technology, Dharwad',
      },
      {
        label: 'Principal Investigator',
        value: 'Dr. Rajesh Kumar',
      },
      {
        label: 'Co Principal Investigator',
        value: 'Dr. Prabhu Prasad B M',
      },
    ],
  },

  value: {
    eyebrow: 'Why CIF?',
    title: 'What CIF enables',
    items: [
      {
        title: 'Advanced equipment access',
        description:
          'Utilize high-end tools and facilities without setting up independent infrastructure.',
      },
      {
        title: 'Cost efficiency',
        description: 'Minimize capital investment while gaining access to essential resources.',
      },
      {
        title: 'Faster prototyping',
        description: 'Accelerate testing, iteration, and validation cycles.',
      },
      {
        title: 'Collaborative ecosystem',
        description:
          'Work alongside startups, faculty, and research teams in a shared innovation environment.',
      },
    ],
    image: '/cif/cif-value.jpeg',
    imageAlt: 'CIF Value',
  },

  cta: {
    eyebrow: 'Get Started',
    title: 'Access CIF through IDRP',
    description:
      'Reach out to explore how CIF can support your research, testing, and product development needs.',
    primaryActionLabel: 'Contact Us',
    primaryActionTo: '/contact',
  },
}
