import type {
  Startup,
  StartupCategory,
  StartupStat,
  Tab,
  StartupsHero,
  StartupsIntro,
} from '@/types/startups'

export const startupsHero: StartupsHero = {
  imageSrc: '/vision-community.jfif',
  imageAlt: 'Startups',
  eyebrow: 'Portfolio',
  title: 'Startups',
  description:
    'Explore startups from the IDRP ecosystem across pre-incubation, incubation, and funded categories.',
}

export const startupsIntro: StartupsIntro = {
  eyebrow: 'Our Portfolio',
  title: 'Innovators Building the Future',
  paragraphs: [
    'The IDRP startup portfolio brings together student founders, researchers, and innovators working across health tech, deep tech, cybersecurity, agri tech, design, education, and digital platforms.',
    'Each startup profile highlights the venture, its founders, mentors, and ecosystem links while showcasing the breadth of innovation emerging from the IIIT Dharwad Research Park community.',
  ],
  imageSrc: '/campus/idrp_drone.jpeg',
  imageAlt: 'IDRP startup portfolio',
}

export const startupStats: StartupStat[] = [
  { value: '20+', label: 'Startups in portfolio' },
  { value: '3', label: 'Startup categories' },
  { value: '10+', label: 'Sectors represented' },
]

export const startupTabs: Tab[] = [
  { key: 'all', label: 'All Startups' },
  { key: 'PRE_INCUBATED', label: 'Pre Incubated' },
  { key: 'INCUBATED', label: 'Incubated' },
  { key: 'FUNDED', label: 'Funded' },
]

export const categoryLabels: Record<StartupCategory, string> = {
  PRE_INCUBATED: 'Pre Incubated',
  INCUBATED: 'Incubated',
  FUNDED: 'Funded',
}

export const startups: Startup[] = [
  {
    id: 1,
    name: 'Agri Indus',
    sector: 'AGRI TECH',
    category: 'PRE_INCUBATED',
    logo: '',
    website: '',
    onePager: '',
    brief:
      'Agri-Indus is a digital platform designed to bridge the gap between farmers and industries by enabling direct, transparent, and fair trade. It eliminates middlemen, ensures real-time pricing, and connects farmers with bulk buyers and companies. With streamlined logistics and improved market access, Agri-Indus empowers farmers to earn better and reduces inefficiencies in the agri-supply chain.',
    contactEmail: '24bcs125@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Prakash Pawar',
        linkedin: 'https://www.linkedin.com/in/dr-prakash-pawar-78224356',
        email: 'prakashpawar@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Sachin Kumar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/sachin-kumar-a96735380',
        email: '24bcs125@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Sachin Kumar',
        linkedin: 'https://www.linkedin.com/in/sachin-kumar-a96735380',
        email: '24bcs125@iiitdwd.ac.in',
      },
      {
        name: 'Udit Dadhich',
        linkedin: 'https://www.linkedin.com/in/udit-dadhich-324b353a2',
        email: '24bcs158@iiitdwd.ac.in',
      },
      {
        name: 'Sudhanshu Baberwal',
        linkedin: 'https://www.linkedin.com/in/sudhanshu-baberwal',
        email: '24bcs147@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 2,
    name: 'C^3',
    sector: 'SOCIAL TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/c_3.jpg',
    website: '',
    onePager: '',
    brief:
      'C^3 is an all-in-one platform revolutionizing academic and entrepreneurial collaboration by seamlessly integrating networking, project collaboration, and event management. It empowers students to find peers and research opportunities, enables professors to connect and recruit talent, and helps colleges streamline event promotion and registrations.',
    contactEmail: '22bcs041@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Sandesh Phalke',
        linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137',
        email: 's.phalke@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Siddharth R',
        email: 'siddharth_r@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'G Rohith Yadav',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/grohithyadav',
        email: '22bcs041@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'G Rohith Yadav',
        linkedin: 'https://www.linkedin.com/in/grohithyadav',
        email: '22bcs041@iiitdwd.ac.in',
      },
      {
        name: 'V Shanmukha Sai',
        linkedin: 'https://www.linkedin.com/in/v-shanmukha-sai-0a3080270',
        email: '22BCS135@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 3,
    name: 'Cre8Hub',
    sector: 'SOCIAL TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/cre8hub.png',
    website: '',
    onePager: '',
    brief:
      'Cre8Hub is an AI-powered platform that empowers small startups and content creators to build a strong digital presence through personalized branding, end-to-end content creation, and performance analytics. By integrating branding tools, smart content generation, and data-driven insights into a single solution, it simplifies the process of standing out online.',
    contactEmail: '23bec028@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Sunil Saumya',
        linkedin: 'https://www.linkedin.com/in/sunil-saumya-158856b1',
        email: 'sunil.saumya@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Md. Adnan Khan',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/adnan-khan-b94289334',
        email: '23bec028@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Md. Adnan Khan',
        linkedin: 'https://www.linkedin.com/in/adnan-khan-b94289334',
        email: '23bec028@iiitdwd.ac.in',
      },
      {
        name: 'Pratyush Anand',
        linkedin: 'https://www.linkedin.com/in/pratyush-anand-',
        email: '23bec039@iiitdwd.ac.in',
      },
      {
        name: 'Prathamesh Patil',
        linkedin: 'https://www.linkedin.com/in/prathamesh-patil-iiitdwd',
        email: '23bds043@iiitdwd.ac.in',
      },
      {
        name: 'Nikhil Kumar',
        email: '23bds038@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 4,
    name: 'Evento',
    sector: 'SOCIAL TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/evento.png',
    website: '',
    onePager: '',
    brief:
      'Evento offers an all-in-one event planning platform that connects individuals and corporates with verified vendors like venues, caterers, and DJs. With transparent pricing, AI-powered vendor matching, and built-in coordination tools, it simplifies planning, reduces stress, and prevents budget overruns.',
    contactEmail: '24bcs148@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Prabhu Prasad B. M.',
        linkedin: 'https://www.linkedin.com/in/prabhu-prasad-b-m-428b3837',
        email: 'prabhuprasad@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Sugyan Singh',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/sugyan-singh',
        email: '24bcs148@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Arhan Ghosarwade',
        linkedin: 'https://www.linkedin.com/in/arhan-ghosarwade-78bb16324',
        email: '24bcs020@iiitdwd.ac.in',
      },
      {
        name: 'Sugyan Singh',
        linkedin: 'https://www.linkedin.com/in/sugyan-singh',
        email: '24bcs148@iiitdwd.ac.in',
      },
      {
        name: 'Sachin Kumar',
        linkedin: 'https://www.linkedin.com/in/sachin-kumar-software',
        email: '24bcs124@iiitdwd.ac.in',
      },
      {
        name: 'Siddhant Kumar',
        linkedin: 'https://www.linkedin.com/in/siddhant-kumar-dev',
        email: '24bcs144@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 5,
    name: 'Friend In Fog',
    sector: 'AUTO TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/Friend In Fog.png',
    website: '',
    onePager: '',
    brief:
      'Friend In Fog introduces an innovative road safety system that reduces secondary accidents caused by low-visibility conditions like fog or heavy rain. Using radio wave communication, it alerts vehicles within a 5-kilometer radius of an accident or hazard in real time, even without internet access.',
    contactEmail: '24bec062@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Sandesh Phalke',
        linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137',
        email: 's.phalke@iiitdwd.ac.in',
      },
      {
        name: 'Mr. Mallikarjun Kande',
        linkedin: 'https://www.linkedin.com/in/mallikarjun-kande-18709342',
        email: 'mallikarjun.kande@space-e.org',
      },
    ],
    founders: [
      {
        name: 'Sushant Sharma',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/sushant-sharma-3157a0314',
        email: '24bec062@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Sushant Sharma',
        linkedin: 'https://www.linkedin.com/in/sushant-sharma-3157a0314',
        email: '24bec062@iiitdwd.ac.in',
      },
      {
        name: 'Hemant Kumar',
        email: '24bds025@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 6,
    name: 'Attrangi',
    sector: 'HEALTH TECH',
    category: 'FUNDED',
    logo: '/startups/logo/heyattrangi.jpeg',
    website: '',
    onePager: '',
    brief:
      'Attrangi is a community-driven mental health and support platform designed for neurodivergent individuals and those facing mental health challenges. Through curated resources, peer support groups, and accessible professional guidance, Attrangi creates a safe, stigma-free space for students and working professionals.',
    contactEmail: '22bcs068@iiitdwd.ac.in',
    techFacultyMentors: [],
    founders: [
      {
        name: 'Dr. Sandesh Phalke',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137',
        email: 's.phalke@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Dusary Charan',
        linkedin: 'https://www.linkedin.com/in/charan-dusary-6023172a1',
        email: '23bcs047@iiitdwd.ac.in',
      },
      {
        name: 'Bharath Reddy Medasani',
        linkedin: 'https://www.linkedin.com/in/bharath-reddy-medasani-839b8b327',
        email: '22bcs068@iiitdwd.ac.in',
      },
      {
        name: 'Kalyan Jakkoju',
        linkedin: 'https://www.linkedin.com/in/kalyan-jakkoju-5b6694312',
        email: '23bec022@iiitdwd.ac.in',
      },
      {
        name: 'Lakshmi Prasad Doddi',
        linkedin: 'https://www.linkedin.com/in/lakshmi-prasad-doddi-26a30029a',
        email: '23bec018@iiitdwd.ac.in',
      },
      {
        name: 'Harshith Daraboina',
        linkedin: 'https://www.linkedin.com/in/harshith-daraboina-14105a2b2',
        email: '23bcs037@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 7,
    name: 'MLera',
    sector: 'ED TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/MLera.png',
    website: '',
    onePager: '',
    brief:
      'MLera is a smart, no-code platform that transforms how Machine Learning is taught by bridging the gap between theory-heavy courses and oversimplified tools. Designed for students and EdTech platforms, it offers interactive visualizations and real-time model building, making ML concepts easy to grasp and explainable.',
    contactEmail: '22bds036@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Siddharth R',
        linkedin: 'https://www.linkedin.com/in/siddharth-r-85168678',
        email: 'siddharth_r@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Madhan S',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/madhan-s17',
        email: '22bds036@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Madhan S',
        linkedin: 'https://www.linkedin.com/in/madhan-s17',
        email: '22bds036@iiitdwd.ac.in',
      },
      {
        name: 'H Shri Harsha',
        email: '22bcs044@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 8,
    name: 'Natanaswara.AI',
    sector: 'COMMERCE TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/Natanasvara.jpg',
    website: '',
    onePager: '',
    brief:
      'Natanaswara.AI is a first-of-its-kind dance analysis and correction platform that revolutionizes classical dance training through an AI-powered mobile platform providing real-time feedback on postures, expressions, and movements. It combines pose and gesture analytics, motion tracking, and emotion recognition to act like a virtual guru.',
    contactEmail: 'chinmay@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Chinmayananda A.',
        linkedin: 'https://www.linkedin.com/in/chinmayananda-a-941b06307',
        email: 'chinmay@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Dr. Chinmayananda A.',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/chinmayananda-a-941b06307',
        email: 'chinmay@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Raksha Karthik',
        email: 'raksha.jayaram@gmail.com',
      },
      {
        name: 'Devaraju B V',
        email: 'dev.nkm@gmail.com',
      },
      {
        name: 'Tanmay Gupta',
        linkedin: 'https://www.linkedin.com/in/tanmay-gupta-29b7b8256',
        email: '23bds061@iiitdwd.ac.in',
      },
      {
        name: 'Dhrupad Das',
        linkedin: 'https://www.linkedin.com/in/dhrupad-das-7b71b5290',
        email: '23bds018@iiitdwd.ac.in',
      },
      {
        name: 'Yashpreet Singh Reejak',
        linkedin: 'https://www.linkedin.com/in/yashpreet-singh-345456280',
        email: '23bds072@iiitdwd.ac.in',
      },
      {
        name: 'Thirumala Teena Chowdary',
        linkedin: 'https://www.linkedin.com/in/teena-chowdary-12a389286',
        email: '22bds059@iiitdwd.ac.in',
      },
      {
        name: 'Aditya Guntur',
        linkedin: 'https://www.linkedin.com/in/aditya-guntur-38448b28a',
        email: '23bds003@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 9,
    name: 'BookMyTurf',
    sector: 'COMMERCE TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/bookmyturf.png',
    website: '',
    onePager: '',
    brief:
      'BookMyTurf is a one-stop platform that simplifies sports venue bookings and game management for players and hosts. It enables instant booking, secure payments, and player matching for football, cricket, basketball, and volleyball. Venue owners can manage listings and boost revenue through a user-friendly dashboard.',
    contactEmail: '22bds056@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Sandesh Phalke',
        linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137',
        email: 's.phalke@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Sunilkumar P. V.',
        linkedin: 'https://www.linkedin.com/in/pvskumar',
        email: 'sunilkumar.pv@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Suhaas S',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/suhaas-s-ai',
        email: '22bds056@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Suhaas S',
        linkedin: 'https://www.linkedin.com/in/suhaas-s-ai',
        email: '22bds056@iiitdwd.ac.in',
      },
      {
        name: 'Vansh Lal Tolani',
        linkedin: 'https://www.linkedin.com/in/vansh-lal-tolani-557368269',
        email: '22bds061@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Sandesh Phalke',
        linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137',
        email: 's.phalke@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 10,
    name: 'V-Gyan',
    sector: 'ED TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/VGyan.png',
    website: '',
    onePager: '',
    brief:
      'V-Gyan is an AI-powered, multi-modal intelligent tutoring system designed to enhance science learning for Kannada-medium high school students. Using stylus-enabled touch screens, it offers an interactive classroom-like experience with real-time feedback, adaptive assessments, and targeted support.',
    contactEmail: 'jyoti.24phdcs08@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Prof. S. R. Mahadeva Prasanna',
        linkedin: 'https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4',
        email: 'prasanna@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Jyoti Gadad',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/jyoti-gadad-613940101',
        email: 'jyoti.24phdcs08@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Jyoti Gadad',
        linkedin: 'https://www.linkedin.com/in/jyoti-gadad-613940101',
        email: 'jyoti.24phdcs08@iiitdwd.ac.in',
      },
      {
        name: 'Shruti B. S.',
        email: 'shruthi.24mtrec01@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 11,
    name: 'Deep Traits',
    sector: 'PEOPLE TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/deep_traits.PNG',
    website: '',
    onePager: '',
    brief:
      'Deep Traits is an AI-powered personality analysis platform that helps recruiters make unbiased, data-driven hiring decisions by assessing candidates through voice, facial expressions, gestures, and posture. Aligned with models like MBTI and Big 5, it improves talent fit and retention.',
    contactEmail: 'shraddha.22phdec02@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Chinmayananda A.',
        linkedin: 'https://www.linkedin.com/in/chinmayananda-a-941b06307',
        email: 'chinmay@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Nataraj K. S.',
        linkedin: 'https://www.linkedin.com/in/nataraj-k-s-2a501323',
        email: 'nataraj@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Manjunath Vanahalli',
        linkedin: 'https://www.linkedin.com/in/manjunath-vanahalli-4b24ab69',
        email: 'manjunathkv@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Shraddha G. Revankar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/shraddha-revankar-a83398a7',
        email: 'shraddha.22phdec02@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Shraddha G. Revankar',
        linkedin: 'https://www.linkedin.com/in/shraddha-revankar-a83398a7',
        email: 'shraddha.22phdec02@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Chinmayananda A.',
        linkedin: 'https://www.linkedin.com/in/chinmayananda-a-941b06307',
        email: 'chinmay@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Nataraj K. S.',
        linkedin: 'https://www.linkedin.com/in/nataraj-k-s-2a501323',
        email: 'nataraj@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Manjunath Vanahalli',
        linkedin: 'https://www.linkedin.com/in/manjunath-vanahalli-4b24ab69',
        email: 'manjunathkv@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 12,
    name: 'Kisan Voice',
    sector: 'AGRI TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/Kisan_Voice.png',
    website: '',
    onePager: '',
    brief:
      'Kisan Voice is a generative AI-powered agricultural services platform for farmers. It uses a voice chatbot to deliver personalized, reliable advice in local languages and supports multimodal data processing, helping farmers access localized, timely agricultural information for better productivity and sustainable practices.',
    contactEmail: 'prashantb@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Prakash Pawar',
        linkedin: 'https://www.linkedin.com/in/dr-prakash-pawar-78224356',
        email: 'Prakashpawar@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Prashant Bannulmath',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/prashant-q-2b8283137',
        email: 'prashantb@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Prashant Bannulmath',
        linkedin: 'https://www.linkedin.com/in/prashant-q-2b8283137',
        email: 'prashantb@iiitdwd.ac.in',
      },
      {
        name: 'Swapnil Sontakke',
        linkedin: 'https://www.linkedin.com/in/sontakke-swapnil26',
        email: 'swapnil.sontakke@iiitdwd.ac.in',
      },
      {
        name: 'Shaik Zuhair Hasan',
        linkedin: 'https://www.linkedin.com/in/zuhashaik',
        email: '21bds060@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 13,
    name: 'Removation',
    sector: 'DESIGN TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/removation.jpeg',
    website: '',
    onePager: '',
    brief:
      'Removation is a centralized online platform that connects homeowners and businesses with verified interior and exterior designers, architects, and decorators. Users can upload home maps, receive expert design suggestions, visualize ideas with 3D and AR tools, and access transparent pricing and curated services.',
    contactEmail: '24bcs086@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Suvadip Hazra',
        linkedin: 'https://www.linkedin.com/in/dr-suvadip-hazra-60491b67',
        email: 'suvadip@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Nikhil Kumar Sinha',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/nikhil-sinha-920600320',
        email: '24bcs086@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Nikhil Kumar Sinha',
        linkedin: 'https://www.linkedin.com/in/nikhil-sinha-920600320',
        email: '24bcs086@iiitdwd.ac.in',
      },
      {
        name: 'Nirbhay Kumar',
        email: '24bcs089@iiitdwd.ac.in',
      },
      {
        name: 'Nitish Kumar',
        email: '24bcs093@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 14,
    name: 'SmartNest',
    sector: 'DEEP TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/Smart Nest.png',
    website: '',
    onePager: '',
    brief:
      'SmartNest is an AI-powered, on-device file management system designed for digital professionals who handle large volumes of files. It learns user behavior to intelligently organize, index, and prioritize documents, offering personalized categorization, smart search, and cleanup suggestions while preserving privacy and offline functionality.',
    contactEmail: 'sunil.saumya@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Sunil Saumya',
        linkedin: 'https://www.linkedin.com/in/sunil-saumya-158856b1',
        email: 'sunil.saumya@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Dr. Sunil Saumya',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/sunil-saumya-158856b1',
        email: 'sunil.saumya@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Dr. Sunil Saumya',
        linkedin: 'https://www.linkedin.com/in/sunil-saumya-158856b1',
        email: 'sunil.saumya@iiitdwd.ac.in',
      },
      {
        name: 'Shlok Jha',
        email: 'shlokjha.3@gmail.com',
      },
    ],
  },
  {
    id: 15,
    name: 'Sparkle Studio',
    sector: 'DESIGN TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/Sparkle Studio.jpeg',
    website: '',
    onePager: '',
    brief:
      'Sparkle Studio is an AR-powered platform that transforms online jewelry shopping with realistic virtual try-ons and easy customization. It empowers customers to see how pieces look in real time, personalize designs to match their style, and shop confidently while helping brands reduce returns and boost sales.',
    contactEmail: '24bcs104@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Girish G. N.',
        linkedin: 'https://www.linkedin.com/in/girishgn28',
        email: 'girish@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Mithil Poddaturi',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/mithil-poddaturi-1491a232a',
        email: '24bcs104@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Mithil Poddaturi',
        linkedin: 'https://www.linkedin.com/in/mithil-poddaturi-1491a232a',
        email: '24bcs104@iiitdwd.ac.in',
      },
      {
        name: 'Kothapalli Tharun',
        linkedin: 'https://www.linkedin.com/in/kothapalli-tharun-490967366',
        email: '24bds032@iiitdwd.ac.in',
      },
      {
        name: 'Neeruganti Jeevan Sai',
        linkedin: 'https://www.linkedin.com/in/neeruganti-jeevan-sai-85907a336',
        email: '24bds046@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 16,
    name: 'Cipherion',
    sector: 'CYBERSECURITY',
    category: 'FUNDED',
    logo: '/startups/logo/cipherion.png',
    website: '',
    onePager: '',
    brief:
      'Cipherion is a next-generation Encryption-as-a-Service platform delivering complete data security from application-layer encryption to compliance automation. It includes zero-knowledge encryption, tokenization, dynamic data masking, AI-driven threat detection, and post-quantum security for regulated industries such as fintech, healthcare, government, and SaaS.',
    contactEmail: '',
    techFacultyMentors: [
      {
        name: 'Dr. Girish Revadigar',
        linkedin: 'https://www.linkedin.com/in/girish-revadigar-phd-55a33b28',
      },
    ],
    founders: [
      {
        name: 'Kunaal Shindagi',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/kunaal-shindagi-759bb625b',
      },
      {
        name: 'Pooja Ekbote',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/poojaekbote11',
      },
      {
        name: 'Nagaraj Bhandare',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/nagaraj-bhandare-b4145b25a',
      },
    ],
    teamMembers: [],
  },
  {
    id: 17,
    name: 'NEXR Technology Private Limited',
    sector: 'HEALTH TECH',
    category: 'INCUBATED',
    logo: '/startups/logo/NeXR.jpeg',
    website: '',
    onePager: '',
    brief:
      'NEXR is a technology-driven health startup building a VR care platform for mental health professionals. It blends immersive VR experiences with biosensors and a phygital engagement model to deliver mental health services and improve digital therapeutic care.',
    contactEmail: 'vinay.oswald@gmail.com',
    techFacultyMentors: [
      {
        name: 'Dr. Sunil Saumya',
        linkedin: 'https://www.linkedin.com/in/sunil-saumya-158856b1',
      },
    ],
    founders: [
      {
        name: 'Vinay Kumar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/vinay-kumar-a-25534839',
        email: 'vinay.oswald@gmail.com',
      },
      {
        name: 'Shyam Sundar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/shyam-sundar-9881671b',
        email: 'yadavshyam686@gmail.com',
      },
    ],
    teamMembers: [],
  },
  {
    id: 18,
    name: 'Neuraforesight Private Limited',
    sector: 'HEALTH TECH',
    category: 'FUNDED',
    logo: '/startups/logo/neuraforesight.jpeg',
    website: '',
    onePager: '',
    brief:
      'Neuraforesight Private Limited is a TechBio startup transforming how pharmaceutical and biopharmaceutical companies make critical decisions. It develops intelligent, modular AI tools for literature analysis, patent evaluation, portfolio strategy, and global product planning, enabling pharma teams to turn complex data into actionable foresight.',
    contactEmail: 'sachin.marihal@saspinjara.com',
    techFacultyMentors: [
      {
        name: 'Dr. Manjunath Vanahalli',
        linkedin: 'https://www.linkedin.com/in/manjunath-vanahalli-4b24ab69',
      },
    ],
    founders: [
      {
        name: 'Sachin Marihal',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/sachin-marihal-bab63917',
        email: 'sachin.marihal@saspinjara.com',
      },
      {
        name: 'Aravind Puttakkalavar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/aravind-puttakkalavar-60899514',
        email: 'aravind.p@saspinjara.com',
      },
      {
        name: 'Anil Kumar Ranadev',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/anilkumar-ranadev-156b2115',
        email: 'anil_ranadev@saspinjara.com',
      },
    ],
    teamMembers: [],
  },
  {
    id: 19,
    name: 'SphuraNex',
    sector: 'HEALTH TECH',
    category: 'INCUBATED',
    logo: '/startups/logo/sphuranex.jpeg',
    website: '',
    onePager: '',
    brief:
      'SphuraNex is transforming emergency care with a compact, affordable automatic CPR device that delivers consistent, life-saving chest compressions anytime, anywhere. Designed for trained and untrained users alike, it uses smart sensors, adaptive compression, and voice instructions in local languages.',
    contactEmail: '23bec035@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Nataraj K. S.',
        linkedin: 'https://www.linkedin.com/in/nataraj-k-s-2a501323',
        email: 'nataraj@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Om Mishra',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/om-mishra-1b1704294',
        email: '23bec035@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Om Mishra',
        linkedin: 'https://www.linkedin.com/in/om-mishra-1b1704294',
        email: '23bec035@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Nataraj K. S.',
        linkedin: 'https://www.linkedin.com/in/nataraj-k-s-2a501323',
        email: 'nataraj@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 20,
    name: 'Step-In',
    sector: 'DEEP TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/Step-In.jpg',
    website: '',
    onePager: '',
    brief:
      'Step-In is a smart indoor navigation system designed to simplify movement within large spaces like campuses, hospitals, and malls. It helps users locate classrooms, offices, restrooms, and exits through real-time updates, augmented reality features, and 3D building models.',
    contactEmail: '24bcs150@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Shirshendu Layek',
        linkedin: 'https://www.linkedin.com/in/dr-shirshendu-layek-68151076',
        email: 'shirshendu@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Swetha S.',
        role: 'Founder',
        email: '24bcs150@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Swetha S.',
        email: '24bcs150@iiitdwd.ac.in',
      },
      {
        name: 'M. Praneeth',
        linkedin: 'https://www.linkedin.com/in/m-praneeth-9201002b0',
        email: '24bcs064@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 21,
    name: 'MediRaksha',
    sector: 'HEALTHCARE',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/MediRaksha.png',
    website: '',
    onePager: '',
    brief:
      'MediRaksha is an AI-driven healthcare solution that integrates digitized medical records, real-time hospital tracking, and AI-assisted diagnostics to ensure seamless healthcare support anytime, anywhere. It is designed to improve healthcare accessibility and provide instant access to health records during emergencies.',
    contactEmail: '24bcs025@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Deepak K. T.',
        linkedin: 'https://www.linkedin.com/in/deepak-k-t-92270a9',
        email: 'deepak@iiitdwd.ac.in',
      },
      {
        name: 'Preetham Umarani',
        email: '',
      },
    ],
    founders: [
      {
        name: 'Ayush Kumar Pal',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/ayush-kumar-pal-067172326',
        email: '24bcs025@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Ayush Kumar Pal',
        linkedin: 'https://www.linkedin.com/in/ayush-kumar-pal-067172326',
        email: '24bcs025@iiitdwd.ac.in',
      },
      {
        name: 'Abhijeet Nagar',
        linkedin: 'https://www.linkedin.com/in/abhijeet-nagar-a44007308',
        email: '24bcs002@iiitdwd.ac.in',
      },
      {
        name: 'Avi Arora',
        email: '24bcs023@iiitdwd.ac.in',
      },
      {
        name: 'Saswath Chowta',
        linkedin: 'https://www.linkedin.com/in/saswath-chowta-19bb55320',
        email: '24bcs031@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 22,
    name: 'VayuCharge',
    sector: 'DEEP TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/Vayucharge.jpeg',
    website: '',
    onePager: '',
    brief:
      'VayuCharge is revolutionizing energy delivery with advanced microwave power transmission technology, enabling efficient wireless charging across long distances. Designed to eliminate dependency on wires and bulky batteries, it supports safer, scalable, and sustainable energy delivery for IoT devices, EVs, and remote systems.',
    contactEmail: 'rajeshk@iiitdwd.ac.in',
    techFacultyMentors: [],
    founders: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/dr-rajesh-kumar-2417ab11b',
        email: 'rajeshk@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 23,
    name: 'Vocal Drone',
    sector: 'DEEP TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/Vocal Drone.jpeg',
    website: '',
    onePager: '',
    brief: '',
    contactEmail: 'prashantb@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Deepak K. T.',
        email: 'deepak@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Prashant G. B.',
        role: 'Founder',
        email: 'prashantb@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Prashant Bannulmath',
        email: 'prashantb@iiitdwd.ac.in',
      },
      {
        name: 'Swapnil Sontakke',
        email: 'swapnil.sontakke@iiitdwd.ac.in',
      },
    ],
  },
  {
    id: 24,
    name: 'Jnana Setu',
    sector: 'ED TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/Jnanasetu.png',
    website: '',
    onePager: '',
    brief:
      'Jnana Setu is an intelligent career readiness platform that bridges the gap between academic learning and industry needs. It offers students personalized career roadmaps, curated resources, and skill assessments, while institutions and corporates gain access to a more skilled and better-prepared talent pool.',
    contactEmail: '22bcs126@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Prof. S. R. Mahadeva Prasanna',
        linkedin: 'https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4',
        email: 'prasanna@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Suchit Artal',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/suchit-artal',
        email: '22bcs126@iiitdwd.ac.in',
      },
      {
        name: 'Samuel Naik',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/samuel-naik-0b099924a',
        email: '22bcs108@iiitdwd.ac.in',
      },
      {
        name: 'Bhakti S. N.',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/bhaktisn11',
        email: '22bcs104@iiitdwd.ac.in',
      },
    ],
    teamMembers: [
      {
        name: 'Suchit Artal',
        linkedin: 'https://www.linkedin.com/in/suchit-artal',
      },
      {
        name: 'Samuel Naik',
        linkedin: 'https://www.linkedin.com/in/samuel-naik-0b099924a',
      },
      {
        name: 'Bhakti S. N.',
        linkedin: 'https://www.linkedin.com/in/bhaktisn11',
      },
      {
        name: 'Rahul Trimukhe',
      },
    ],
  },
    {
    id: 25,
    name: 'FreshDot',
    sector: 'FOOD TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/freshdot.png',
    website: '',
    onePager: '',
    brief:
      'FreshDot is a packaging-integrated freshness indicator for dairy brands that visually signals spoilage, reducing consumer complaints and building trust with zero change to existing packaging lines.',
    contactEmail: '25bcs095@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Prakash Pawar',
        linkedin: 'https://www.linkedin.com/in/dr-prakash-pawar-78224356',
        email: 'prakashpawar@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Moksh A. Gundecha',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/moksh-jain-54b036311',
        email: '25bcs095@iiitdwd.ac.in',
      },
      {
        name: 'Sandesh Sanjeev Phalke',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137',
        email: 's.phalke@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 26,
    name: 'CheTechs',
    sector: 'AUTO TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/chetechs.png',
    website: '',
    onePager: '',
    brief:
      'CheTechs builds driver safety systems using alcohol monitoring sensors and driver behaviour monitoring. The system helps ensure driver and vehicle safety by bringing the vehicle to a gradual halt when alcohol is detected.',
    contactEmail: '25bec032@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Muthusankar Eswaran',
        linkedin: 'https://www.linkedin.com/in/muthusankar-eswaran-bb794b23',
        email: 'muthusankar.eswaran@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Khushal Joshi',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/khushal-joshi-81488538a',
        email: '25bec032@iiitdwd.ac.in',
      },
      {
        name: 'Pulkit Pokhriyal',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/pulkit-pokhriyal-b62868401',
        email: '25bec053@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 27,
    name: 'Tryggva',
    sector: 'AUTO TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/tryggva.png',
    website: '',
    onePager: '',
    brief:
      'Tryggva is an India-first, behaviour-aware ADAS platform that connects vehicles with traffic infrastructure to predict and prevent accidents in chaotic traffic environments.',
    contactEmail: '25bcs214@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Jagadeesh Kanade',
        email: 'jbkanade@gmail.com',
      },
    ],
    founders: [
      {
        name: 'Tusharika Jagwani',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/tusharika-jagwani-3a74603a9',
        email: '25bcs214@iiitdwd.ac.in',
      },
      {
        name: 'Yash Mathur',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/yash-mathur-6ba200373',
        email: '25bcs201@iiitdwd.ac.in',
      },
      {
        name: 'Pantham Anish Satya Srikar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/anish-pantham-aa5644375',
        email: '25bcs114@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 28,
    name: 'Acumen Intelligence',
    sector: 'AI / SAAS',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/acumen-intelligence.png',
    website: '',
    onePager: '',
    brief:
      'Acumen Intelligence is developing a SaaS platform that empowers MSMEs to analyse customer feedback and generate data-driven recommendations to enhance service quality.',
    contactEmail: '25bcs158@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Deepak K. T.',
        linkedin: 'https://www.linkedin.com/in/deepak-k-t-92270a9',
        email: 'deepak@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Satvik M. Patil',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/satvik-patil-830a0a372',
        email: '25bcs158@iiitdwd.ac.in',
      },
      {
        name: 'Shaurya Mittal',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/shaurya-mittal-b61283312',
        email: '25bcs161@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 29,
    name: 'Sleepy1',
    sector: 'TRAVEL TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/sleepy1.png',
    website: '',
    onePager: '',
    brief:
      'Sleepy1 delivers smart, private sleep and nap pods in high-traffic public spaces like airports, offering comfortable resting solutions through a scalable session-based pricing model.',
    contactEmail: '25bda118@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Prakash Pawar',
        linkedin: 'https://www.linkedin.com/in/dr-prakash-pawar-78224356',
        email: 'prakashpawar@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Sukruth H. S.',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/sukruth-h-s-175370380',
        email: '25bda118@iiitdwd.ac.in',
      },
      {
        name: 'V. V. Rupesh Sai Sundhar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/rupesh-sai-sundhar-v-v-924b57363',
        email: '25bda124@iiitdwd.ac.in',
      },
      {
        name: 'Bandi Thanish Kumar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/thanish-kumar-ba7464380',
        email: '25bec012@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 30,
    name: 'Yntra Sparks',
    sector: 'ED TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/yntra-sparks.png',
    website: '',
    onePager: '',
    brief:
      'Yntra Sparks designs hands-on STEM kits for middle and secondary school students, replacing rote learning with physical understanding through app-supported kits built for Tier 2 and Tier 3 Indian homes.',
    contactEmail: '25bda126@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Sandesh Phalke',
        linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137',
        email: 's.phalke@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Suvadip Hazra',
        linkedin: 'https://www.linkedin.com/in/dr-suvadip-hazra-60491b67',
        email: 'suvadip@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Vikas Lal Singh',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/vikas-singh-0b9b34381',
        email: '25bda126@iiitdwd.ac.in',
      },
      {
        name: 'Kush Kumar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/kush-kumar-1095ab379',
        email: '25bda059@iiitdwd.ac.in',
      },
      {
        name: 'Dhanashri Udhavrao Bende',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/dhanashri-bende-6a30b8382',
        email: '25bda036@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 31,
    name: 'Gigzy',
    sector: 'PLATFORM TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/gigzy.png',
    website: '',
    onePager: '',
    brief:
      'Gigzy is a hyperlocal platform connecting people who need quick, short-term help with individuals offering flexible services, creating a trusted ecosystem for micro-tasks with verified users and structured support.',
    contactEmail: '23bcs116@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Sandesh Phalke',
        linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137',
        email: 's.phalke@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Saisha Suresh Bore',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/saisha-suresh-bore-47544328a',
        email: '23bcs116@iiitdwd.ac.in',
      },
      {
        name: 'Palak Gupta',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/palak-gupta-68043b284',
        email: '23bds042@iiitdwd.ac.in',
      },
      {
        name: 'Hammad Malik',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/hammad-malik',
        email: '23bcs052@iiitdwd.ac.in',
      },
      {
        name: 'Simone Rodrigues',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/simonerodriguess',
        email: '23bcs111@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 32,
    name: 'PetalPath',
    sector: 'ED TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/petalpath.png',
    website: '',
    onePager: '',
    brief:
      'PetalPath is an AI-powered early learning platform that delivers structured 10–20 minute sessions combining interactive videos and activities for children aged 2–6, transforming passive screen time into adaptive learning experiences.',
    contactEmail: '25bda086@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Sandesh Phalke',
        linkedin: 'https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137',
        email: 's.phalke@iiitdwd.ac.in',
      },
      {
        name: 'Dr. Siddharth R',
        linkedin: 'https://www.linkedin.com/in/siddharth-r-85168678',
        email: 'siddharth_r@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Pratham Mohadikar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/pratham-mohadikar-75061a276',
        email: '25bda086@iiitdwd.ac.in',
      },
      {
        name: 'Apoorva Jadhav',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/apoorva-jadhav-57ba12370',
        email: '25bcs018@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 33,
    name: 'Fuelwise',
    sector: 'LOGISTICS TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/fuelwise.png',
    website: '',
    onePager: '',
    brief:
      'Fuelwise is route-based fuel cost optimisation software for B2B logistics companies, helping them identify where along a route they should refuel to spend the least on fuel.',
    contactEmail: '25bda021@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Pramod Hanmantrao Yelmewad',
        email: 'pramodyelmewad@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Ayush Singh',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/ayush-singh-3b50b1382',
        email: '25bda021@iiitdwd.ac.in',
      },
      {
        name: 'Ganesh Shamrao Gore',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/ganesh-gore-226564379',
        email: '25bcs047@iiitdwd.ac.in',
      },
      {
        name: 'Aditya Rathaur',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/aditya-rathaur-91a12537b',
        email: '25bda006@iiitdwd.ac.in',
      },
      {
        name: 'Nilesh Dharmendra Mahajan',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/nilesh-mahajan-62b7ab369',
        email: '25bcs105@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
  {
    id: 34,
    name: 'Rescrapx',
    sector: 'AUTO TECH',
    category: 'PRE_INCUBATED',
    logo: '/startups/logo/rescrapx.png',
    website: '',
    onePager: '',
    brief:
      'Rescrapx is building a safe and transparent platform for car scrapping, helping users scrap their vehicles through a more reliable and structured process.',
    contactEmail: '25bda112@iiitdwd.ac.in',
    techFacultyMentors: [
      {
        name: 'Dr. Manjunath Vanahalli',
        linkedin: 'https://www.linkedin.com/in/manjunath-vanahalli-4b24ab69',
        email: 'manjunathkv@iiitdwd.ac.in',
      },
    ],
    founders: [
      {
        name: 'Shubham Mavi',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/shubham-mavi-051901381',
        email: '25bda112@iiitdwd.ac.in',
      },
      {
        name: 'Anil Gurjar',
        role: 'Founder',
        linkedin: 'https://www.linkedin.com/in/anil-gurjar-4b0857326',
        email: '24bds004@iiitdwd.ac.in',
      },
    ],
    teamMembers: [],
  },
]