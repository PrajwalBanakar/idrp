import type { ResourceCategory, MatchmakingStep } from '@/types/resources'

export const resourceCategories: ResourceCategory[] = [
  {
    key: 'blogs',
    title: 'Blogs',
    subtitle: 'Perspectives, stories, and practical insights.',
    description:
      'Explore thought pieces, founder experiences, expert opinions, and ecosystem narratives that capture practical lessons and emerging trends.',
    icon: '✍️',
    iconBgClass: 'bg-blue-600',
    textClass: 'text-blue-600',
    hoverBorderClass: 'hover:border-blue-200',
    badgeClass: 'bg-blue-50 text-blue-700',
    items: [
      {
        title: 'What Makes Startup–Investor Fit Work?',
        description:
          'A practical perspective on alignment across stage, sector, funding ask, and long-term value creation.',
        type: 'Blog',
        meta: '6 min read',
        tag: 'Matchmaking',
      },
      {
        title: 'From Idea to Incubation: Early Founder Lessons',
        description:
          'Insights from startup journeys navigating the earliest phases of building and validation.',
        type: 'Blog',
        meta: '5 min read',
        tag: 'Founders',
      },
      {
        title: 'Industry Collaboration as a Driver for Innovation',
        description:
          'How research, advisory, and ecosystem partnerships help strengthen startup and institutional outcomes.',
        type: 'Blog',
        meta: '7 min read',
        tag: 'Industry',
      },
    ],
  },

  {
    key: 'papers',
    title: 'Research Papers',
    subtitle: 'Academic and applied research outputs.',
    description:
      'Access research papers emerging from academic collaborations, deep-tech exploration, and applied innovation across domains.',
    icon: '📄',
    iconBgClass: 'bg-purple-600',
    textClass: 'text-purple-600',
    hoverBorderClass: 'hover:border-purple-200',
    badgeClass: 'bg-purple-50 text-purple-700',
    items: [
      {
        title: 'AI for Real-World Problem Solving',
        description:
          'Exploring how artificial intelligence techniques can be applied to solve domain-specific industry challenges.',
        type: 'Paper',
        meta: 'Published 2024',
        tag: 'AI',
      },
      {
        title: 'Computer Vision in Industrial Automation',
        description:
          'Applications of vision systems in manufacturing, inspection, and quality control workflows.',
        type: 'Paper',
        meta: 'Published 2023',
        tag: 'Vision',
      },
      {
        title: 'XR for Training and Simulation',
        description:
          'Use of extended reality technologies for immersive training, skill development, and simulation environments.',
        type: 'Paper',
        meta: 'Published 2024',
        tag: 'XR',
      },
    ],
  },

  // {
  //   key: 'reports',
  //   title: 'Reports',
  //   subtitle: 'Ecosystem insights and analysis.',
  //   description:
  //     'Detailed reports covering startup ecosystems, innovation trends, program outcomes, and sector-level insights.',
  //   icon: '📊',
  //   iconBgClass: 'bg-emerald-600',
  //   textClass: 'text-emerald-600',
  //   hoverBorderClass: 'hover:border-emerald-200',
  //   badgeClass: 'bg-emerald-50 text-emerald-700',
  //   items: [
  //     {
  //       title: 'IDRP Ecosystem Report 2024',
  //       description:
  //         'An overview of startups, programs, and ecosystem growth driven by IDRP initiatives.',
  //       type: 'Report',
  //       meta: '2024 Edition',
  //       tag: 'Ecosystem',
  //     },
  //     {
  //       title: 'Startup Trends in Deep-Tech India',
  //       description:
  //         'Analysis of emerging sectors, funding patterns, and innovation trends in the Indian deep-tech landscape.',
  //       type: 'Report',
  //       meta: '2023 Edition',
  //       tag: 'Trends',
  //     },
  //     {
  //       title: 'Program Impact Assessment',
  //       description:
  //         'Evaluation of incubation, mentoring, and capacity-building initiatives and their outcomes.',
  //       type: 'Report',
  //       meta: 'Internal Study',
  //       tag: 'Impact',
  //     },
  //   ],
  // },

  // {
  //   key: 'whitepapers',
  //   title: 'Whitepapers',
  //   subtitle: 'Strategic perspectives and frameworks.',
  //   description:
  //     'In-depth documents presenting frameworks, methodologies, and strategic thinking across innovation and entrepreneurship.',
  //   icon: '📘',
  //   iconBgClass: 'bg-amber-600',
  //   textClass: 'text-amber-600',
  //   hoverBorderClass: 'hover:border-amber-200',
  //   badgeClass: 'bg-amber-50 text-amber-700',
  //   items: [
  //     {
  //       title: 'Building a Sustainable Innovation Ecosystem',
  //       description:
  //         'A framework for creating long-term, self-sustaining innovation and startup ecosystems.',
  //       type: 'Whitepaper',
  //       meta: 'Strategy',
  //       tag: 'Ecosystem',
  //     },
  //     {
  //       title: 'University-Driven Startup Models',
  //       description:
  //         'Exploring how academic institutions can effectively support entrepreneurship and venture creation.',
  //       type: 'Whitepaper',
  //       meta: 'Academic',
  //       tag: 'Institutions',
  //     },
  //     {
  //       title: 'Investor–Startup Matchmaking Framework',
  //       description:
  //         'A structured approach to improving alignment and success rates in startup funding relationships.',
  //       type: 'Whitepaper',
  //       meta: 'Framework',
  //       tag: 'Funding',
  //     },
  //   ],
  // },
]

export const matchmakingSteps: MatchmakingStep[] = [
  {
    step: '01',
    title: 'Profile Collection',
    description:
      'Capture startup and investor profiles including sector, stage, preferences, funding range, and strategic areas.',
  },
  {
    step: '02',
    title: 'Fit Assessment',
    description:
      'Identify relevant matches using structured criteria such as sector alignment, maturity, funding ask, and growth potential.',
  },
  {
    step: '03',
    title: 'Curated Introductions',
    description:
      'Facilitate meaningful introductions, meetings, and ecosystem touchpoints through a guided matchmaking process.',
  },
]
