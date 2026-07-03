import type { TeamCTAContent, TeamHeroContent, TeamMember } from '@/types/team'

export const teamHero: TeamHeroContent = {
  eyebrow: 'Our Team',
  title: 'Meet the People Behind IDRP',
  image: '/team-hero.jfif',
  imageAlt: 'Our Team',
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Deepak K T',
    role: 'CEO, IDRP',
    image: '/board-deepak.jfif',
    imageAlt: 'Deepak',
    linkedinUrl: 'https://www.linkedin.com/in/deepak-k-t-92270a9/',
    profileUrl: 'https://deepakthotappa.wixsite.com/mysite',
  },
  {
    name: 'Ms. Darshana Kasar',
    role: 'Program Associate',
    image: '/team-darshana.jpeg',
    imageAlt: 'Darshana',
    linkedinUrl: 'https://www.linkedin.com/in/ms-darshana-kasar-1a774b3ab/',
  },
  {
    name: 'Mr. Lokesh B N',
    role: 'Program Associate',
    image: '/team-lokesh.jpeg',
    imageAlt: 'Lokesh',
    linkedinUrl: 'https://www.linkedin.com/in/lokesh-b-n-4920b93ab/',
  },
  {
    name: 'Ms. Neha Revankar',
    role: 'Program Associate',
    image: '/team-neha.jpeg',
    imageAlt: 'Neha',
    linkedinUrl: 'http://linkedin.com/in/neha-revankar-6540062a1/',
  },
  {
    name: 'Mr. Prajwal Banakar',
    role: 'Software Engineer',
    image: '/team-prajwal.jpeg',
    imageAlt: 'Prajwal',
    linkedinUrl: 'https://www.linkedin.com/in/prajwal-banakar-167130193/',
  },
  {
    name: 'Ms. Rakshata Athani',
    role: 'Incubation Manager',
    image: '/team-rakshata.jpeg',
    imageAlt: 'Rakshata',
    linkedinUrl: 'https://www.linkedin.com/in/rakshata-athani-3595a1203/',
  },
  {
    name: 'Mr. Ravi Dalavayi',
    role: 'Technician',
    image: '/team-ravi.jpeg',
    imageAlt: 'Ravi',
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    name: 'Ms. Reshma P',
    role: 'Program Associate',
    image: '/team-reshma.jpeg',
    imageAlt: 'Reshma',
    linkedinUrl: 'https://www.linkedin.com/',
  },
  {
    name: 'Ms. Sunita Hebli',
    role: 'Program Associate',
    image: '/team-sunita.jpeg',
    imageAlt: 'Sunita',
    linkedinUrl: 'https://www.linkedin.com/',
  },
]

export const teamCTA: TeamCTAContent = {
  eyebrow: 'Work With Us',
  title: 'Connect With the IDRP Team',
  description:
    'Whether you are a founder, mentor, partner, researcher, or ecosystem enabler, our team is here to help you engage with the right program, people, and opportunities.',
  primaryActionLabel: 'Contact Us',
  primaryActionTo: '/contact',
  secondaryActionLabel: 'Apply Now',
  secondaryActionTo: '/apply/incubation',
}
