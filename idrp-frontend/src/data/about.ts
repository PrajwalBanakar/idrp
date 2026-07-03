import type {
  AboutCTAContent,
  AboutHeroContent,
  AboutIntroContent,
  AboutSectionIntro,
  MissionVisionItem,
  Offering,
  OfferingsHighlight,
  Pillar,
  Reason,
  TimelineItem,
  VisionCard,
  AboutCampusGalleryImage,
} from '@/types/about'

export const campusGallerySection: AboutSectionIntro = {
  eyebrow: 'Inside IDRP',
  title: 'Campus & Ecosystem',
  description:
    'A glimpse into the environment, infrastructure, and spaces that support innovation, collaboration, and entrepreneurship at IDRP.',
}

export const campusImages: AboutCampusGalleryImage[] = [
  {
    id: 'campus-1',
    src: '/campus/idrp_aerial.jpg',
    alt: 'Aerial view of the IDRP campus building',
    title: 'IDRP Campus',
  },
  {
    id: 'campus-2',
    src: '/campus/idrp_common.jpeg',
    alt: 'Common area inside IDRP',
    title: 'Common Spaces',
  },
  {
    id: 'campus-3',
    src: '/campus/idrp_workspace.jpeg',
    alt: 'Workspace area inside IDRP',
    title: 'Workspaces',
  },
  {
    id: 'campus-4',
    src: '/campus/idrp_workspace_2.jpeg',
    alt: 'Collaborative workspace inside IDRP',
    title: 'Collaboration Zones',
  },
  {
    id: 'campus-5',
    src: '/campus/idrp_meeting.jpeg',
    alt: 'Meeting room at IDRP',
    title: 'Meeting Rooms',
  },
  {
    id: 'campus-6',
    src: '/campus/idrp_presentation.jpeg',
    alt: 'Presentation and session space at IDRP',
    title: 'Presentation Spaces',
  },
  {
    id: 'campus-7',
    src: '/campus/idrp_5g_lab.jpeg',
    alt: '5G laboratory at IDRP',
    title: '5G Lab',
  },
  {
    id: 'campus-8',
    src: '/campus/idrp_drone_lab.jpeg',
    alt: 'Drone laboratory at IDRP',
    title: 'Drone Lab',
  },
  {
    id: 'campus-9',
    src: '/campus/idrp_nlp.jpeg',
    alt: 'Natural language processing lab at IDRP',
    title: 'NLP Lab',
  },
  {
    id: 'campus-10',
    src: '/campus/idrp_speech_lab.jpeg',
    alt: 'Speech laboratory at IDRP',
    title: 'Speech Lab',
  },
  {
    id: 'campus-11',
    src: '/campus/idrp_vlsi_lab.jpg',
    alt: 'VLSI laboratory at IDRP',
    title: 'VLSI Lab',
  },
]
/* ---------------------------------- */
/* HERO */
/* ---------------------------------- */

export const aboutHero: AboutHeroContent = {
  eyebrow: 'Who We Are',
  title: 'About IDRP',
  subtitle: '',
  image: '/about-hero.jfif',
  imageAlt: 'About IDRP',
  minHeightClass: 'min-h-[380px]',
}

/* ---------------------------------- */
/* INTRO */
/* ---------------------------------- */

export const aboutIntro: AboutIntroContent = {
  eyebrow: 'Our Story',
  title: 'Where Research Meets Real-World Change',
  paragraphs: [
    'IIIT Dharwad Research Park (IDRP) was built on a powerful idea — that breakthrough research should not remain confined to labs, but evolve into solutions that shape the real world.',
    'Anchored within the IIIT Dharwad ecosystem, IDRP is not just an incubator. It is a launchpad where curiosity turns into creation, and ideas are transformed into ventures with purpose.',
    'Our ecosystem brings together founders, researchers, mentors, and industry to co-create across deep-tech domains such as Artificial Intelligence, Computer Vision, Extended Reality, Blockchain, and Space Tech.',
    'From first-time innovators exploring a problem to startups preparing for scale, we support every stage of the journey — enabling builders to move faster, think deeper, and create lasting impact.',
  ],
  stats: [
    { value: '150+', label: 'Innovations nurtured' },
    { value: '10+', label: 'Deep-tech domains' },
    { value: '1', label: 'Unified innovation ecosystem' },
  ],
  image: '/about-intro.jfif',
  imageAlt: 'IDRP Campus',
  badgeText: 'Now onboarding the next generation of founders',
}

/* ---------------------------------- */
/* MISSION / VISION */
/* ---------------------------------- */

export const missionVisionSection: AboutSectionIntro = {
  eyebrow: 'Our Purpose',
  title: 'Vision, Mission & Core Pillars',
  description:
    'At IDRP, our purpose is simple yet powerful — to turn innovation into measurable impact through deep-tech entrepreneurship.',
}

export const missionVision: MissionVisionItem[] = [
  {
    title: 'Our Vision',
    description:
      'To become a globally recognized deep-tech innovation hub that drives research translation, startup growth, and meaningful societal impact.',
    icon: '🚀',
  },
  {
    title: 'Our Mission',
    description:
      'To enable innovators, researchers, and founders with the right ecosystem, mentorship, and infrastructure to transform high-potential ideas into impactful ventures.',
    icon: '🎯',
  },
]

export const pillars: Pillar[] = [
  {
    title: 'Research to Venture',
    description:
      'We enable the transition of academic research into market-ready, venture-scale solutions.',
  },
  {
    title: 'Founder-Centric Support',
    description:
      'Every initiative is designed around real founder journeys, not theoretical frameworks.',
  },
  {
    title: 'Deep-Tech Focus',
    description:
      'We focus on advanced technology domains where innovation creates long-term, defensible value.',
  },
  {
    title: 'Collaborative Ecosystem',
    description:
      'We actively connect academia, startups, investors, industry, and government into one cohesive ecosystem.',
  },
]

/* ---------------------------------- */
/* TIMELINE */
/* ---------------------------------- */

export const timelineSection: AboutSectionIntro = {
  eyebrow: 'Our Journey',
  title: 'Growth Through Milestones',
  description:
    'From foundation to ecosystem building, IDRP has evolved into a platform that supports innovation, entrepreneurship, and deep-tech venture creation.',
}

export const timeline: TimelineItem[] = [
  {
    year: '2020',
    title: 'Foundation of IDRP',
    description:
      'IDRP was established as a strategic initiative to foster innovation and entrepreneurship within the IIIT Dharwad ecosystem.',
  },
  {
    year: '2021',
    title: 'Early Ecosystem Building',
    description:
      'Focused on founder outreach, startup mentoring, and enabling research-driven innovation.',
  },
  {
    year: '2022',
    title: 'Program Expansion',
    description:
      'Expanded incubation support and strengthened collaborations with academic and industry stakeholders.',
  },
  {
    year: '2023',
    title: 'Deep-Tech Acceleration',
    description:
      'Strengthened focus on deep-tech ventures across AI, XR, robotics, and emerging technologies.',
  },
  {
    year: '2024',
    title: 'Integrated Innovation Platform',
    description:
      'Evolved into a comprehensive platform supporting incubation, research, and ecosystem-driven growth.',
  },
]

/* ---------------------------------- */
/* OFFERINGS */
/* ---------------------------------- */

export const offeringsSection: AboutSectionIntro = {
  eyebrow: 'What We Offer',
  title: 'Support Designed for the Startup Journey',
  description:
    'IDRP provides a connected set of services that help founders move from idea to validation, growth, and long-term scale.',
}

export const offerings: Offering[] = [
  {
    title: 'Incubation & Acceleration',
    description:
      'End-to-end startup support covering validation, strategy, mentoring, and growth acceleration.',
  },
  {
    title: 'Mentorship Network',
    description: 'A strong network of mentors including founders, investors, and domain experts.',
  },
  {
    title: 'Research & Innovation Support',
    description:
      'Support to transform research and technical ideas into viable products and ventures.',
  },
  {
    title: 'Investor & Market Connect',
    description: 'Access to investors, industry leaders, and market opportunities.',
  },
  {
    title: 'Infrastructure & Workspace',
    description: 'Collaborative workspaces and institutional infrastructure.',
  },
  {
    title: 'Programs & Capacity Building',
    description: 'Workshops and curated programs for growth.',
  },
]

export const offeringsHighlight: OfferingsHighlight = {
  eyebrow: 'Founder Journey at IDRP',
  title: 'From Idea to Impact — Built as a Continuous Journey',
  description:
    'We have designed a stage-wise ecosystem that evolves with founders — ensuring they always have the right support at the right time.',
  stages: [
    {
      label: 'Stage 1 · Explore',
      description: 'Identify problems, validate ideas, and explore research-backed solutions.',
    },
    {
      label: 'Stage 2 · Build',
      description: 'Develop products, gain traction, and refine value propositions.',
    },
    {
      label: 'Stage 3 · Scale',
      description: 'Prepare for investment, expand to markets, and grow sustainably.',
    },
  ],
}

/* ---------------------------------- */
/* WHY IDRP */
/* ---------------------------------- */

export const reasonsSection: AboutSectionIntro = {
  eyebrow: 'Why IDRP',
  title: 'Why Builders Choose IDRP',
  description:
    'We combine research depth, ecosystem access, and startup-focused support to help ideas grow into impactful ventures.',
}

export const reasons: Reason[] = [
  {
    title: 'Rooted in Academic Excellence',
    description: 'Access to IIIT Dharwad’s research, expertise, and innovation culture.',
  },
  {
    title: 'Designed for Deep-Tech',
    description: 'Built for technically ambitious ideas requiring long-term development.',
  },
  {
    title: 'End-to-End Support',
    description: 'From idea validation to scaling, we support the entire journey.',
  },
  {
    title: 'Strong Ecosystem Access',
    description: 'Connections to mentors, investors, institutions, and industry leaders.',
  },
]

/* ---------------------------------- */
/* PHILOSOPHY */
/* ---------------------------------- */

export const visionSection: AboutSectionIntro = {
  eyebrow: 'Our Philosophy',
  title: 'The Principles That Shape Our Ecosystem',
  description:
    'We are guided by a set of beliefs that influence how we build, support, and grow innovation.',
}

export const visionCards: VisionCard[] = [
  {
    title: 'Think Bold, Build Meaningfully',
    description: 'We encourage ambitious thinking and real-world impact through innovation.',
    image: '/vision-innovation.jpeg',
    imageAlt: 'Innovation at IDRP',
  },
  {
    title: 'Grow Together',
    description: 'We believe in collaborative ecosystems that accelerate progress.',
    image: '/vision-community.jfif',
    imageAlt: 'Community at IDRP',
  },
  {
    title: 'Enable, Don’t Limit',
    description: 'We remove barriers and provide support so founders can focus on building.',
    image: '/vision-resources.jfif',
    imageAlt: 'Resources at IDRP',
  },
]

/* ---------------------------------- */
/* CTA */
/* ---------------------------------- */

export const aboutCTA: AboutCTAContent = {
  eyebrow: 'Be Part of the Journey',
  title: 'Start Building with IDRP',
  description:
    'If you are driven to solve real problems and build something meaningful, IDRP provides the ecosystem to help you move forward.',
  primaryActionLabel: 'Apply Now',
  primaryActionTo: '/apply/incubation',
  secondaryActionLabel: 'Connect With Us',
  secondaryActionTo: '/contact',
}
