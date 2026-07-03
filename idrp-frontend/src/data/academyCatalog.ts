import type {
  AcademyCategory,
  CertificationCourse,
  CertificationCourseApplyPage,
  CertificationCourseDetailPage,
  Workshop,
  WorkshopApplyPage,
} from '@/types/academy'

export const academyCategories: AcademyCategory[] = [
  {
    id: 'certification-courses',
    title: 'Certification Courses',
    description:
      'Structured short-term certification programs designed to build practical skills, industry exposure, and applied technical capability.',
    route: '/courses/certification',
    ctaLabel: 'Explore certification courses',
    badge: '3 Programs',
    items: ['Innovation Entrepreneurship & Technology (IET)', 'VLSI Design', 'Agentic AI'],
  },
  {
    id: 'workshops',
    title: 'Workshops',
    description:
      'Focused workshops and faculty or student development programs delivered in short, intensive formats for practical learning and institutional capacity building.',
    route: '/courses/workshops',
    ctaLabel: 'Explore workshops',
    badge: '3 Programs',
    items: [
      'Faculty Development Program (FDP)',
      'Student Development Workshop (SDW)',
      'Glimpses of AI Tools – Introductory',
    ],
  },
]

export const certificationCourses: CertificationCourse[] = [
  {
    slug: 'iet',
    title: 'Innovation Entrepreneurship & Technology (IET)',
    duration: '3 Months',
    type: 'Certification Course',
    description:
      'A structured certification program that builds innovation, entrepreneurship, and industry-oriented thinking through practical frameworks and guided learning.',
    route: '/courses/certification/iet',
    brochureUrl: '',
    features: [
      '3-month structured learning format',
      'Innovation and entrepreneurship orientation',
      'Industry-relevant modules and frameworks',
      'Suitable for students and faculty',
    ],
  },
  {
    slug: 'vlsi-design',
    title: 'VLSI Design',
    duration: '3 Months',
    type: 'Certification Course',
    description:
      'A focused certification course designed to build foundational and applied capability in VLSI design, semiconductor workflows, and hardware-oriented problem solving.',
    route: '/courses/certification/vlsi-design',
    features: [
      '3-month certification format',
      'Foundational and applied VLSI concepts',
      'Industry-oriented technical exposure',
      'Useful for students and aspiring professionals',
    ],
  },
  {
    slug: 'agentic-ai',
    title: 'Agentic AI',
    duration: '3 Months',
    type: 'Certification Course',
    description:
      'A short-term certification course introducing agentic AI concepts, intelligent workflows, practical use cases, and applied AI thinking for emerging technology learners.',
    route: '/courses/certification/agentic-ai',
    features: [
      '3-month guided program',
      'Exposure to agentic AI systems and workflows',
      'Applied learning approach',
      'Designed for future-ready AI capability building',
    ],
  },
]

export const workshops: Workshop[] = [
  {
    slug: 'fdp',
    title: 'Faculty Development Program (FDP)',
    duration: '2 Days',
    type: 'Workshop',
    description:
      'A 2-day workshop designed to strengthen pedagogy, research alignment, innovation orientation, and industry relevance for faculty members.',
    route: '/courses/workshops',
    brochureUrl: '/brochures/FDP-Brochure.pdf',
    features: [
      '2-day faculty-focused format',
      'Innovation and design thinking orientation',
      'Pedagogy and research alignment',
      'Certificate of completion',
    ],
  },
  {
    slug: 'student-development-workshop',
    title: 'Student Development Workshop (SDW)',
    duration: '2 Days',
    type: 'Workshop',
    description:
      'A 2-day student workshop focused on taking ideas to commerce through innovation, entrepreneurship frameworks, teamwork, and pitching practice.',
    route: '/courses/workshops',
    brochureUrl: '/brochures/SDW-Brochure.pdf',
    features: [
      '2-day student-focused format',
      'Idea-to-commerce learning journey',
      'Hands-on entrepreneurship tools',
      'Certificate of participation',
    ],
  },
  {
    slug: 'glimpses-of-ai-tools',
    title: 'Glimpses of AI Tools – Introductory',
    duration: '2 Days',
    type: 'Workshop',
    description:
      'An introductory workshop that familiarizes participants with practical AI tools, workflows, and emerging possibilities through guided demonstrations and hands-on exploration.',
    route: '/courses/workshops',
    features: [
      '2-day introductory format',
      'Practical AI tools exposure',
      'Hands-on guided exploration',
      'Suitable for broad learner groups',
    ],
  },
]

export const certificationCourseDetailPages: CertificationCourseDetailPage[] = [
  {
    slug: 'iet',
    eyebrow: 'Certification Course',
    heroTitle: 'Innovation Entrepreneurship & Technology (IET)',
    heroDescription:
      'A 3-month certification course designed to nurture innovation, entrepreneurial thinking, and practical industry-aligned capability through structured learning.',
    overviewTitle: 'Structured Learning for Future Innovators and Entrepreneurs',
    overviewParagraphs: [
      'The IET course is designed as a structured learning journey that helps participants strengthen creativity, problem-solving ability, and entrepreneurial thinking in a practical context.',
      'The program is intended to bridge academic learning with industry-facing frameworks, enabling participants to engage with innovation, value creation, business thinking, and real-world problem contexts.',
      'With a 3-month format, the course provides enough depth for meaningful engagement while remaining accessible to students and faculty looking for a focused certification pathway.',
    ],
    snapshotTitle: 'Course Snapshot',
    snapshotItems: [
      { label: 'Duration', value: '3 Months' },
      { label: 'Type', value: 'Certification Course' },
      { label: 'Mode', value: 'Structured learning program' },
      {
        label: 'Suitable For',
        value: 'UG/PG students and faculty from any discipline',
      },
      {
        label: 'Focus',
        value: 'Innovation, entrepreneurship, industry orientation',
      },
    ],
    highlights: [
      {
        title: 'Innovation-Focused Learning',
        description:
          'Builds a strong mindset for creativity, ideation, and problem solving in real-world settings.',
        icon: '💡',
      },
      {
        title: 'Entrepreneurial Thinking',
        description:
          'Introduces participants to business models, value creation, and startup-oriented frameworks.',
        icon: '🚀',
      },
      {
        title: 'Industry Relevance',
        description:
          'Connects academic learning with practical frameworks and real-world expectations.',
        icon: '🏭',
      },
      {
        title: 'Guided Structured Journey',
        description:
          'Provides a clear and supported 3-month pathway rather than a one-off workshop experience.',
        icon: '🧭',
      },
      {
        title: 'Practical Exposure',
        description:
          'Encourages application-oriented understanding through modules, examples, and guided engagement.',
        icon: '🛠️',
      },
      {
        title: 'Certification Pathway',
        description:
          'Recognizes participation and completion through structured certification outcomes.',
        icon: '📘',
      },
    ],
    audience: [
      'UG students from any discipline',
      'PG students from any discipline',
      'Faculty members interested in innovation and entrepreneurship',
      'Learners looking for industry-oriented certification exposure',
    ],
    outcomes: [
      'Better understanding of innovation and entrepreneurial frameworks',
      'Improved industry-facing thinking and practical readiness',
      'Exposure to business models, product thinking, and startup concepts',
      'A structured certification experience aligned with future opportunities',
    ],
    applyRoute: '/courses/certification/iet/apply',
    enquireRoute: '/contact',
    ctaTitle: 'Ready to join the IET certification course?',
    ctaDescription:
      'Apply now to express your interest and learn more about upcoming cohorts and participation details.',
  },
  {
    slug: 'vlsi-design',
    eyebrow: 'Certification Course',
    heroTitle: 'VLSI Design',
    heroDescription:
      'A 3-month certification course designed to build foundational and applied capability in VLSI design and semiconductor-oriented learning.',
    overviewTitle: 'Applied Learning in VLSI and Semiconductor Design',
    overviewParagraphs: [
      'The VLSI Design Course is intended for learners who want structured exposure to chip design, hardware systems thinking, and semiconductor-oriented workflows.',
      'The program combines foundational understanding with applied learning so that participants can build stronger readiness for advanced study, projects, or technical industry pathways.',
      'With a focused 3-month duration, the course supports meaningful skill development without becoming a long-duration academic commitment.',
    ],
    snapshotTitle: 'Course Snapshot',
    snapshotItems: [
      { label: 'Duration', value: '3 Months' },
      { label: 'Type', value: 'Certification Course' },
      { label: 'Mode', value: 'Structured technical learning' },
      {
        label: 'Suitable For',
        value: 'Students, aspiring VLSI learners, and early professionals',
      },
      {
        label: 'Focus',
        value: 'VLSI fundamentals, applied design exposure, semiconductor readiness',
      },
    ],
    highlights: [
      {
        title: 'Semiconductor Orientation',
        description:
          'Introduces participants to the core thinking and workflows associated with VLSI and hardware design.',
        icon: '🧠',
      },
      {
        title: 'Applied Technical Learning',
        description: 'Focuses on practical understanding rather than purely theoretical exposure.',
        icon: '🛠️',
      },
      {
        title: 'Structured Certification Format',
        description: 'Offers a focused 3-month pathway for systematic capability building.',
        icon: '📘',
      },
      {
        title: 'Industry-Relevant Exposure',
        description:
          'Helps participants connect learning to real technical roles and future semiconductor opportunities.',
        icon: '🏭',
      },
      {
        title: 'Foundation for Advanced Work',
        description:
          'Can serve as a stepping stone for advanced projects, specializations, or higher-level learning.',
        icon: '🚀',
      },
      {
        title: 'Short-Term Depth',
        description: 'Balances compact duration with meaningful technical depth and direction.',
        icon: '⏱️',
      },
    ],
    audience: [
      'Students interested in VLSI and semiconductor systems',
      'Learners exploring hardware-oriented technical pathways',
      'Aspirants preparing for projects or future specialization',
      'Early professionals seeking focused upskilling',
    ],
    outcomes: [
      'Improved understanding of VLSI and semiconductor-oriented concepts',
      'Stronger technical confidence in a hardware-focused domain',
      'Better readiness for advanced learning or project engagement',
      'A structured short-term certification in an important emerging area',
    ],
    applyRoute: '/courses/certification/vlsi-design/apply',
    enquireRoute: '/contact',
    ctaTitle: 'Interested in the VLSI Design?',
    ctaDescription:
      'Apply now to register your interest and receive updates on course schedules and participation details.',
  },
  {
    slug: 'agentic-ai',
    eyebrow: 'Certification Course',
    heroTitle: 'Agentic AI',
    heroDescription:
      'A 3-month certification course introducing agentic AI systems, practical workflows, and emerging AI-driven problem solving.',
    overviewTitle: 'Learning Emerging AI Workflows and Agentic Systems',
    overviewParagraphs: [
      'The Agentic AI Course is designed for learners who want a structured entry into new AI paradigms centered on agents, autonomous workflows, orchestration, and practical AI applications.',
      'The course emphasizes applied understanding so that participants can move from broad curiosity to a clearer grasp of how agentic systems can be designed, used, and evaluated.',
      'Over a 3-month period, the program provides a guided certification pathway for future-ready capability building in a rapidly evolving domain.',
    ],
    snapshotTitle: 'Course Snapshot',
    snapshotItems: [
      { label: 'Duration', value: '3 Months' },
      { label: 'Type', value: 'Certification Course' },
      { label: 'Mode', value: 'Structured AI learning pathway' },
      {
        label: 'Suitable For',
        value: 'Students, professionals, and AI-interested learners',
      },
      {
        label: 'Focus',
        value: 'Agentic AI, workflows, applications, practical understanding',
      },
    ],
    highlights: [
      {
        title: 'Emerging AI Focus',
        description: 'Introduces learners to an important fast-growing area in modern AI practice.',
        icon: '🤖',
      },
      {
        title: 'Agentic Workflow Understanding',
        description:
          'Helps participants understand how AI agents can plan, act, and coordinate tasks.',
        icon: '🔄',
      },
      {
        title: 'Applied Orientation',
        description:
          'Supports practical understanding of use cases and workflow design rather than abstract discussion alone.',
        icon: '🛠️',
      },
      {
        title: 'Future-Ready Learning',
        description:
          'Builds awareness and readiness in a domain that is increasingly relevant across industries.',
        icon: '🚀',
      },
      {
        title: 'Structured 3-Month Format',
        description: 'Provides continuity and guided learning over a focused short-term duration.',
        icon: '📘',
      },
      {
        title: 'Accessible Entry Path',
        description:
          'Designed to help learners enter an advanced topic through a manageable certification pathway.',
        icon: '🧭',
      },
    ],
    audience: [
      'Students exploring advanced AI directions',
      'Professionals seeking emerging AI upskilling',
      'Learners curious about agentic systems and workflows',
      'Participants interested in practical future-facing AI education',
    ],
    outcomes: [
      'Clearer understanding of agentic AI systems and workflows',
      'Improved ability to think about practical AI orchestration and usage',
      'Exposure to applied AI problem solving in an emerging domain',
      'A structured certification pathway in a future-facing technical area',
    ],
    applyRoute: '/courses/certification/agentic-ai/apply',
    enquireRoute: '/contact',
    ctaTitle: 'Ready to explore the Agentic AI?',
    ctaDescription:
      'Apply now to express interest and stay informed about upcoming course availability.',
  },
]

export const certificationCourseApplyPages: CertificationCourseApplyPage[] =
  certificationCourses.map((course) => ({
    slug: course.slug,
    eyebrow: 'Apply',
    title: `Apply for ${course.title}`,
    description: `Fill in your details to apply for the ${course.title}. Our team will connect with you with the next steps.`,
    submitLabel: 'Submit Application',
    successMessage: `Thank you for applying to ${course.title}. Our team will get in touch with you shortly.`,
    course,
  }))

export const workshopApplyPages: WorkshopApplyPage[] = workshops.map((workshop) => ({
  slug: workshop.slug,
  eyebrow: 'Apply',
  title: `Apply for ${workshop.title}`,
  description: `Fill in your details to apply for the ${workshop.title}. Our team will connect with you with the next steps.`,
  submitLabel: 'Submit Application',
  successMessage: `Thank you for applying to ${workshop.title}. Our team will get in touch with you shortly.`,
  workshop,
}))

export function getCertificationCourseBySlug(slug: string) {
  return certificationCourses.find((course) => course.slug === slug)
}

export function getWorkshopBySlug(slug: string) {
  return workshops.find((workshop) => workshop.slug === slug)
}

export function getCertificationCourseDetailPageBySlug(slug: string) {
  return certificationCourseDetailPages.find((page) => page.slug === slug)
}

export function getCertificationCourseApplyPageBySlug(slug: string) {
  return certificationCourseApplyPages.find((page) => page.slug === slug) ?? null
}

export function getWorkshopApplyPageBySlug(slug: string) {
  return workshopApplyPages.find((page) => page.slug === slug) ?? null
}
