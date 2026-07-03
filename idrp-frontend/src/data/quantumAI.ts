import type { ProgramPageData } from '@/types/program'

export const quantumAIPage = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'Centre of Excellence in Quantum AI and Computing (CoE)',
    subtitle: '',
    image: '/quantum-ai-hero.jfif',
    imageAlt: 'Quantum AI Centre',
  },

  intro: {
    eyebrow: 'Overview',
    title: 'Building Capability in Emerging and High-Impact Computing Domains',
    paragraphs: [
      'Centre of Excellence in Quantum AI and Computing is an initiative of the Department of Electronics, IT, BT, Government of Karnataka, focused on building capability in emerging and high-impact computing domains.',
      'The Centre of Excellence in Quantum AI and Computing is envisioned as a platform for research, innovation, and collaboration in advanced computing.',
      'It brings together artificial intelligence, quantum thinking, and interdisciplinary problem-solving to address complex technological challenges.',
      'The initiative supports talent development, drives research-led innovation, and enables strategic advancements in next-generation technologies.',
    ],
    image: '/quantum-ai/quantum-ai-intro.jpeg',
    imageAlt: 'Quantum AI Overview',
    details: [
      {
        label: 'Project Monitoring Unit (PMU)',
        value: 'Indian Institute of Information Technology, Dharwad',
      },
      {
        label: 'Principal Investigator',
        value: 'Dr. Aswath Babu',
      },
      {
        label: 'Co-Principal Investigator',
        value: 'Prof. V Ravishankar',
      },
      {
        label: 'Co-Principal Investigator',
        value: 'Dr. Priodyuti Pradhan',
      }
    ],
  },

  value: {
    eyebrow: 'Why This Centre?',
    title: 'The Value of a Quantum AI and Computing Centre of Excellence',
    items: [
      {
        title: 'Frontier Capability Building',
        description:
          'Builds institutional strength in quantum technologies and advanced computing.',
      },
      {
        title: 'Future-Ready Research',
        description: 'Supports interdisciplinary exploration and knowledge creation.',
      },
      {
        title: 'Talent Development',
        description: 'Prepares students and researchers for emerging domains.',
      },
      {
        title: 'Innovation Ecosystem',
        description: 'Enables collaboration and ecosystem engagement in advanced computing.',
      },
    ],
    image: '/quantum-ai/quantum-ai-value.jpeg',
    imageAlt: 'Quantum AI Value',
  },

  cta: {
    eyebrow: 'Explore the Future',
    title: 'Engage with Advanced Computing and Research',
    description:
      'Connect with IDRP to explore research, collaboration, and innovation opportunities in Quantum AI.',
    primaryActionLabel: 'Contact Us',
    primaryActionTo: '/contact',
  },
}
