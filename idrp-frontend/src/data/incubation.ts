import type { ProgramPageData } from '@/types/program'

export const incubationPage: ProgramPageData = {
  hero: {
    eyebrow: 'Incubation',
    title: 'Udyami Incubation Program',
    subtitle: '',
    image: '/incubation-hero.jfif',
    imageAlt: 'Incubation Program',
    brochureTo: '/udyami/udyami_brochure.pdf',
    brochureLabel: 'View Brochure',
  },

  intro: {
    eyebrow: 'Our Approach',
    title: 'From Idea to Scalable Venture',
    paragraphs: [
      'The incubation program at IDRP is designed to support startups that are ready to move beyond ideation and begin structured venture building.',
      'We work closely with founders to refine their product, validate their market, and build a sustainable business model.',
      'The program combines mentorship, ecosystem access, and institutional support to help startups navigate early-stage challenges and prepare for growth.',
    ],
    image: '/udyami/udyami-intro.jpeg',
    imageAlt: 'Incubation Program',
  },

  value: {
    eyebrow: 'Why Udyami',
    title: 'Designed for Venture Growth',
    items: [
      {
        title: 'Structured Mentorship',
        description:
          'Startups receive continuous guidance from mentors across technology, business, and product domains.',
      },
      {
        title: 'Ecosystem Access',
        description:
          'Founders gain access to investors, industry partners, and innovation networks.',
      },
      {
        title: 'Market Readiness',
        description:
          'Support for refining product-market fit and preparing for real-world deployment.',
      },
      {
        title: 'Growth Pathways',
        description: 'Guidance for scaling, fundraising, and long-term venture strategy.',
      },
    ],
    image: '/udyami/udyami-value.jpeg',
    imageAlt: 'Incubation Value',
  },

  tracks: {
    eyebrow: 'Program',
    title: 'Udyami Incubation Program',
    description:
      'A unified incubation program supporting startups across different stages with flexible modes of engagement and comprehensive ecosystem support.',
  },

  programs: [
    {
      id: 'incubation',
      title: 'Udyami Incubation Program',
      subtitle: 'Flexible incubation support for startups across stages',
      description:
        'A comprehensive incubation program supporting startups at idea, PoC, or MVP stage with access to mentorship, infrastructure, ecosystem connections, and funding opportunities.',
      duration: '18 months',
      mode: 'Hybrid / Flexible',
      applyTo: '/apply/incubation',
      sections: [
        {
          title: 'Who It Is For',
          items: [
            'Startups at idea, PoC, or MVP stage',
            'Founders looking for structured incubation support',
            'Teams seeking access to ecosystem, mentorship, and growth pathways',
          ],
        },
        {
          title: 'What Startups Gain',
          items: [
            'Access to workspace and infrastructure (optional)',
            'Technical mentorship from faculty and experts',
            'Business development and GTM support',
            'Investor connect and funding opportunities',
            'Access to labs, ecosystem, and partner network',
          ],
        },
        {
          title: 'Modes of Engagement',
          items: [
            'On-campus incubation support (resident model)',
            'Remote incubation support (virtual model)',
            'Hybrid engagement based on startup needs',
          ],
        },
        {
          title: 'Outcomes',
          items: [
            'Validated product and business model',
            'Improved investor readiness and funding access',
            'Stronger ecosystem integration',
            'Clear pathway to scale and growth',
          ],
        },
      ],
    },
  ],

  cta: {
    eyebrow: 'Grow Your Startup',
    title: 'Take the Next Step in Your Venture Journey',
    description:
      'If you are ready to build, validate, and scale your startup, the Udyami incubation program provides the support, mentorship, and ecosystem you need.',
    primaryActionLabel: 'Apply Now',
    primaryActionTo: '/apply/incubation',
    secondaryActionLabel: 'Contact Us',
    secondaryActionTo: '/contact',
  },
}
