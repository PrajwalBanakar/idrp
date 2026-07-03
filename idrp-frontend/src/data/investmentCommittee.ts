import type {
  InvestmentCommitteeCTAContent,
  InvestmentCommitteeHeroContent,
  InvestmentCommitteeMember,
} from '@/types/investmentCommittee'

export const investmentCommitteeHero: InvestmentCommitteeHeroContent = {
  eyebrow: '',
  title: 'Board Members',
  description:
    'Meet the people guiding venture evaluation, investment readiness, and strategic growth at IDRP.',
  image: '/investment-committee-hero.jfif',
  imageAlt: 'Investment Committee',
}

export const investmentCommitteeMembers: InvestmentCommitteeMember[] = [
  {
    name: 'Dr. Deepak K T',
    role: 'CEO, IDRP',
    image: '/board-deepak.jfif',
    imageAlt: 'Deepak',
    linkedinUrl: 'https://www.linkedin.com/in/deepak-k-t-92270a9/',
    profileUrl: 'https://deepakthotappa.wixsite.com/mysite',
  },
  {
    name: 'Prof. S R Mahadeva Prasanna',
    role: 'Director, IIIT Dharwad',
    image: '/board-prasanna.jfif',
    imageAlt: 'Prasanna',
    linkedinUrl: 'https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4/',
    profileUrl: 'http://sites.google.com/iitdh.ac.in/prasanna/home',
  },
]

export const investmentCommitteeCTA: InvestmentCommitteeCTAContent = {
  eyebrow: 'Connect With Us',
  title: 'Engage With the Investment Ecosystem',
  description:
    'Whether you are a startup seeking strategic support or a stakeholder looking to collaborate, the IDRP ecosystem is built to create meaningful opportunities for innovation and growth.',
  primaryActionLabel: 'Contact Us',
  primaryActionTo: '/contact',
  secondaryActionLabel: 'Apply Now',
  secondaryActionTo: '/apply/incubation',
}
