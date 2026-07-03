import type { ProgramPageData } from '@/types/program'

export const preIncubationPage: ProgramPageData = {
  hero: {
    eyebrow: 'Pre-Incubation',
    title: 'Yuva Udyami Pre Incubation Program',
    subtitle: '',
    image: '/incubation-hero.jfif',
    imageAlt: 'Pre-Incubation Program',
    brochureTo: '/yuva-udyami/yuva_udyami_brochure.pdf',
    brochureLabel: 'View Brochure',
  },
  intro: {
    eyebrow: 'Our Approach',
    title: 'Helping Ideas Take Shape Before They Become Startups',
    paragraphs: [
      'The Yuva Udyami Pre Incubation Program is designed for students, innovators, and aspiring founders who are at the earliest stage of their entrepreneurial journey.',
      'The program focuses on helping participants discover meaningful problems, shape ideas into structured opportunities, and gain the exposure needed to think like founders.',
      'Rather than pushing teams too early into venture building, the pre-incubation phase creates a guided environment for exploration, validation, mentorship, and capability building.',
    ],
    image: '/yuva-udyami/yuva-udyami-intro.JPG',
    imageAlt: 'Yuva Udyami Program',
  },

  value: {
    eyebrow: 'Why Yuva Udyami Pre Incubation Program',
    title: 'A Strong Foundation for First-Time Founders',
    items: [
      {
        title: 'Idea Exploration',
        description:
          'Participants get the space and guidance to explore real-world problems and identify ideas worth pursuing.',
      },
      {
        title: 'Mentor Access',
        description:
          'Early-stage innovators interact with mentors who help refine thinking, direction, and opportunity areas.',
      },
      {
        title: 'Structured Exposure',
        description:
          'The program introduces participants to startup thinking, market awareness, and problem-solution framing.',
      },
      {
        title: 'Founder Readiness',
        description:
          'Participants begin building the mindset, confidence, and communication skills needed for future venture creation.',
      },
    ],
    image: '/yuva-udyami/yuva-udyami-value.jpeg',
    imageAlt: 'Pre-Incubation Value',
  },

  tracks: {
    eyebrow: 'Program',
    title: 'Yuva Udyami Pre Incubation Program',
    description:
      'A single structured pre-incubation program designed to support idea discovery, early validation, and entrepreneurial readiness.',
  },

  programs: [
    {
      id: 'yuva-udyami',
      title: 'Yuva Udyami Pre Incubation Program',
      subtitle: 'For idea discovery, early validation, and founder readiness',
      description:
        'The Yuva Udyami Pre Incubation Program is a guided pre-incubation program for students, innovators, and aspiring founders who want to explore opportunities, validate early ideas, and build the confidence needed to move toward entrepreneurship.',
      duration: '18 Months',
      mode: 'Hybrid',
      applyTo: '/apply/pre-incubation',
      sections: [
        {
          title: 'Who It Is For',
          items: [
            'Students curious about startups, innovation, and entrepreneurship',
            'Aspiring founders exploring real-world problems and opportunity areas',
            'Participants with or without an early-stage idea who want structured support',
          ],
        },
        {
          title: 'What Participants Gain',
          items: [
            'Guidance on problem discovery and idea exploration',
            'Mentorship for refining early concepts and directions',
            'Exposure to startup thinking, validation, and innovation frameworks',
            'Confidence and readiness to take the next step toward venture building',
          ],
        },
        {
          title: 'Program Outcomes',
          items: [
            'Clearer understanding of the problem and opportunity being addressed',
            'Better articulation of problem-solution fit and founder direction',
            'Early-stage validation and structured entrepreneurial exposure',
            'Preparedness for incubation or further innovation support programs',
          ],
        },
      ],
    },
  ],

  cta: {
    eyebrow: 'Begin Your Journey',
    title: 'Take the First Step Into Entrepreneurship',
    description:
      'If you are exploring ideas, testing your interests, or preparing to build something meaningful, Yuva Udyami gives you the environment and support to begin with clarity.',
    primaryActionLabel: 'Apply Now',
    primaryActionTo: '/apply/pre-incubation',
    secondaryActionLabel: 'Contact Us',
    secondaryActionTo: '/contact',
  },
}
