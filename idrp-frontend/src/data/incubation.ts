import type { ProgramPageData } from '@/types/program'
import type { Stat } from '@/data/home'

export const incubationMetrics: Stat[] = [
  {
    label: 'Knowledge Series Sessions',
    target: 10,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`,
  },
  {
    label: 'Startup School Sessions',
    target: 9,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443" /></svg>`,
  },
  {
    label: 'Technology Series Sessions',
    target: 3,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" /></svg>`,
  },
  {
    label: 'Meet Your Next Door Founder Sessions',
    target: 5,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    label: 'Design Exploration Workshops',
    target: 10,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>`,
  },
  {
    label: 'Hackathons',
    target: 11,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5M3.75 7.5h16.5m-16.5 9h16.5" /></svg>`,
  },
  {
    label: 'Faculty Development Programs',
    target: 2,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14.25c-4.97 0-9 1.343-9 3v2.25h18V17.25c0-1.657-4.03-3-9-3Zm3-8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
  },
  {
    label: 'Investor Readiness Workshop',
    target: 2,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  },
  {
    label: 'Technology Bootcamp',
    target: 1,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>`,
  },
]

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
