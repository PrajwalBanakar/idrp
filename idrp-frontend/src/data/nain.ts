import type { NAINPageData } from '@/types/nain'
import type { Stat } from '@/data/home'

export const nainImages = [
  { src: '/nain/img1.jpeg', alt: 'Startup demo' },
  { src: '/nain/img2.jpeg', alt: 'Student innovation' },
  { src: '/nain/img3.jpeg', alt: 'Mentorship session' },
  { src: '/nain/img4.jpeg', alt: 'Project showcase' },
]

export const nainMetrics: Stat[] = [
  {
    label: 'Projects',
    target: 49,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25M21 7.5v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>`,
  },
  {
    label: 'Students',
    target: 202,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  },
  {
    label: 'Faculty Guides',
    target: 49,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443" /></svg>`,
  },
  {
    label: 'Student Budget',
    target: 113.5,
    prefix: '₹',
    suffix: 'L',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
  },
  {
    label: 'Patent Applications',
    target: 30,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
  },
  {
    label: 'Startup Potential',
    target: 19,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
  },
  {
    label: 'Research Areas',
    target: 26,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" /></svg>`,
  },
  {
    label: 'Events',
    target: 12,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>`,
  },
  {
    label: 'Knowledge Sessions',
    target: 15,
    suffix: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>`,
  },
]

export const nainPage: NAINPageData = {
  hero: {
    eyebrow: 'Government Initiatives',
    title: 'New Age Innovation Network (NAIN 2.0)',
    subtitle:
      'NAIN 2.0 at IDRP supports innovation, mentoring, prototyping, and entrepreneurship by connecting institutes, coordinators, faculty guides, and student teams through structured project guidance and ecosystem support.',
    primaryActionLabel: 'Explore Institutes',
    primaryActionHref: '#institutes',
    secondaryActionLabel: 'Contact IDRP',
    secondaryActionTo: '/contact',
  },

  overview: {
    eyebrow: 'Overview',
    title: 'Building an Institute-Level Innovation Network',
    paragraphs: [
      'New Age Innovation Network (NAIN 2.0) is an initiative of the Department of Electronics, IT, BT, Government of Karnataka, aimed at building a strong institute-level innovation ecosystem.',
      'NAIN 2.0 focuses on creating a sustainable innovation pipeline by mentoring institutions, supporting student-led idea development, enabling project execution, and fostering early-stage entrepreneurial thinking.',
      'As the network continues to expand with a growing number of institutes and projects each year, this platform is designed to present the support in a structured and scalable manner — year-wise, institute-wise, and project-wise.',
    ],
    stats: [
      {
        id: 'institutes',
        label: 'Institutes Supported',
        tone: 'teal',
      },
      {
        id: 'projects',
        label: 'Total Projects',
        tone: 'cyan',
      },
    ],
  },

  pmu: {
    name: 'Indian Institute of Information Technology, Dharwad',
    principalInvestigator: 'Dr. Deepak K T',
    coPrincipalInvestigator: 'Dr. Sunil Saumya',
    programAssociate: 'Ms. Darshana Kasar',
  },

  institutesSection: {
    title: 'Institutes Supported Under NAIN 2.0',
  },

  institutes: [
    {
      id: 'kleit',
      name: 'KLE Institute of Technology',
      city: 'Hubballi',
      state: 'Karnataka',
      description: 'NAIN 2.0 host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/kleit.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Krishnendu Ghosh',
            dia: 'Mr. Manjunath Prasad',
            misExecutives: ['Mrs. Deepa Sajjan'],
            nainCoordinator: 'Mr. Manjunath Prasad',
          },
          projects: [
            {
              id: 'kleit-p1',
              title: 'Oursoulss: Empowering Lives Through Professional and Peer Counseling',
              facultyGuideName: 'Dr. Rajesh Yakkundimath',
              teamLeaderName: 'Mr. Manish S. Shetty',
              teamMembers: [
                'Mr. Yashas Patil',
                'Miss. Shravani Sindagi',
                'Miss. Tejaswini Badiger',
              ],
            },
            {
              id: 'kleit-p2',
              title: 'Pedal Powered Electricity Generation for Government Schools',
              facultyGuideName: 'Dr. Rajesh Yakkundimath',
              teamLeaderName: 'Mr. Amir Hamza Betgeri',
              teamMembers: [
                'Mr. Vijay Joshi',
                'Mr. Talluri Shivaram',
                'Mr. T. Sampat',
                'Mr. Vishvanatha M.',
              ],
            },
            {
              id: 'kleit-p3',
              title: 'Development of AIuminum Air Battery',
              facultyGuideName: 'Mr. Manjunath G. Prasad',
              teamLeaderName: 'Mr. Omkar Deshpande',
              teamMembers: [
                'Mr. Kiran Madiwalar',
                'Mr. Gagan R. Kori',
                'Mr. Khushal R. Damamgar',
              ],
            },
            {
              id: 'kleit-p4',
              title:
                'Smart Medicine Dispenser with App Integration for Automated Medication Management',
              facultyGuideName: 'Dr. Manu T. M.',
              teamLeaderName: 'Miss. Vinaya Alandkar',
              teamMembers: [
                'Mr. Namit Jalihal',
                'Mr. Praveen Ketannavar',
                'Mr. Pruthvi Navalur',
                'Mr. Rajesh Sambaragi',
              ],
            },
            {
              id: 'kleit-p5',
              title:
                'Evaluating the Feasibility and Benefits of Grey Water for the Urban Community Using IoT',
              facultyGuideName: 'Dr. Rajashekhar S. Laddimath',
              teamLeaderName: 'Mr. Umar Faruk Budde Saheb Hallikeri',
              teamMembers: [
                'Mr. Irabhadrayya C. Hiremath',
                'Mr. Rahul Y. Bevinahalli',
                'Mr. Hanumant S. Vajjaramatti',
                'Mr. Netravati G. Ambigeri',
              ],
            },
            {
              id: 'kleit-p6',
              title: 'UAV – GPR for Emergency Rescue Mission',
              facultyGuideName: 'Dr. Manu T. M.',
              teamLeaderName: 'Mr. Manoj N.',
              teamMembers: ['Mr. Dhanraj S.'],
            },
            {
              id: 'kleit-p7',
              title:
                'Assistive Technology for Empowering Visually Impaired Students in Mainstream Classrooms',
              facultyGuideName: 'Dr. Rajesh Yakkundimath',
              teamLeaderName: 'Miss. Ananya Kalasaraddi',
              teamMembers: [
                'Mr. Krishna G. Pawar',
                'Mr. Ronit R. Bongale',
                'Miss. Shakuntala Saunshi',
              ],
            },
            {
              id: 'kleit-p8',
              title:
                'Influences of Marble Powder on Properties of Alkali Activated Slag Concrete Cured at Ambient Temperature',
              facultyGuideName: 'Dr. Veeresh B. Karikatti',
              teamLeaderName: 'Mr. Sagar Munavalli',
              teamMembers: [
                'Mr. Atul P. Pujar',
                'Miss. Laxmi Khodanpur',
                'Mr. Abhishek R. Bagalkote',
                'Mr. Sagar Kolur',
              ],
            },
            {
              id: 'kleit-p9',
              title: 'Prevention of Open Car Door Accident (Sonic Collision Detection)',
              facultyGuideName: 'Mr. Prakash M. N.',
              teamLeaderName: 'Mr. Akash A. Hotagi',
              teamMembers: [
                'Mr. Abhishek B. Karadipatil',
                'Mr. Chetan S. Kumbar',
                'Mr. Manjunath D. Ballery',
                'Mr. Vijay Hiregouder',
              ],
            },
            {
              id: 'kleit-p10',
              title:
                'NiravaDx: Revolutionizing Non-Invasive Blood Group Detection for Rapid Diagnostics',
              facultyGuideName: 'Dr. Sushrut S. H.',
              teamLeaderName: 'Miss. Sharadeeshri H. Kenchagoudati',
              teamMembers: ['Miss. Rajeshwari D.'],
            },
          ],
        },
      ],
    },

    {
      id: 'dimhans',
      name: 'Dharwad Institute of Mental Health and Neurosciences',
      city: 'Dharwad',
      state: 'Karnataka',
      description: 'NAIN 2.0 host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/dimhans.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Chinmayananda A.',
            dia: 'Dr. Shivarudrappa Bhairappanavar',
            misExecutives: ['NA'],
            nainCoordinator: 'Dr. Srinivas Kosgi',
          },
          projects: [
            {
              id: 'dimhans-p1',
              title:
                'Digital Voice Recording of Psychiatric Evaluation (History, MSE, Higher Mental Status Examination and Psychopathology) on Patients Visiting Outpatient Services',
              facultyGuideName: 'Dr. Srinivas Kosgi',
              teamLeaderName: 'Dr. Madhu Koli - Department of Psychiatry',
              teamMembers: [
                'Dr. Arunkumar C.',
                'Dr. Shivarudrappa Bhairappanavar',
                'Dr. Deepak K T',
                'Dr. Ramchandra Horatti',
                'Smt. Ashwini R. Patil',
              ],
            },
            {
              id: 'dimhans-p2',
              title:
                'AI-Based Application to Empower Parents of Children with IDD with Regard to Self-Help Skills',
              facultyGuideName: 'Smt. Sushma C.',
              teamLeaderName: 'Ms. Arpitha I. M. - Department of Clinical Psychology',
              teamMembers: [
                'Smt. Ashwini R. Patil',
                'Dr. Sunanda G. T.',
                'Dr. Megahamala',
                'Smt. Mallika B. N.',
              ],
            },
            {
              id: 'dimhans-p3',
              title:
                'Effectiveness of Awareness of Suicide Assessment Model on the Role of Healthcare Workers in Managing Suicide Risk in Patients Admitted at DIMHANS Dharwad',
              facultyGuideName: 'Dr. Susheelkumar V. Ronad',
              teamLeaderName: 'Ms. Deepa V. Channappagouda - Department of Psychiatry Nursing',
              teamMembers: [
                'Dr. Shivarudrappa Bhairappanavar',
                'Dr. Asif Savanoor',
                'Dr. Chetan S. Patali',
                'Mr. Oba Naik P.',
              ],
            },
            {
              id: 'dimhans-p4',
              title:
                'A Study to Evaluate the Effectiveness of a Structured Program on Depression Awareness Among Teachers at Residential Schools of Dharwad Under the Social Welfare Department',
              facultyGuideName: 'Dr. Susheelkumar V. Ronad',
              teamLeaderName: 'Ms. Ashwini Basvaraj Nekar - Department of Psychiatry Nursing',
              teamMembers: [
                'Dr. Arunkumar C.',
                'Dr. Shivarudrappa Bhairappanavar',
                'Dr. Veeresh Nadagaon',
                'Dr. Febby Mary',
              ],
            },
            {
              id: 'dimhans-p5',
              title:
                'Development of SNP Panel for Screening of Alzheimer’s Disease Associated SNPs in Indian Cohort',
              facultyGuideName: 'Dr. Manjunath Bajantri and Dr. Srinivas Kosgi',
              teamLeaderName: 'Dr. Ramchandra Horatti - Department of Psychiatry',
              teamMembers: [
                'Dr. Deepak K T',
                'Dr. Shivarudrappa Bhairappanavar',
                'Mr. Ashok Kumar',
                'Dr. Pavansingh Tiwari',
              ],
            },
            {
              id: 'dimhans-p6',
              title:
                'Relapse Prevention Among Patients with Alcohol Use Disorder in Indian Scenario: Role of Psycho-Social Interventions',
              facultyGuideName: 'Dr. Ashok Kori',
              teamLeaderName: 'Mr. Ramesh - Department of Psychiatry Social Work',
              teamMembers: ['Mr. Arunkumar C.', 'Dr. Srinivas Kosgi', 'Dr. Susheelkumar V. Ronad'],
            },
            {
              id: 'dimhans-p7',
              title: 'Biological Markers in Problematic Internet Use',
              facultyGuideName: 'Dr. Megahamala T.',
              teamLeaderName: 'Dr. Itishree Das - Department of Psychiatry',
              teamMembers: [
                'Smt. Ashwini R. Patil',
                'Dr. Raghavendra Patil',
                'Smt. Sushma C.',
                'Smt. Mallika B. N.',
                'Dr. Sindhu',
                'Dr. Shivarudrappa Bhairappanavar',
              ],
            },
            {
              id: 'dimhans-p8',
              title:
                'The Effects of Waiting Time and Satisfaction Among Patients Visiting the Psychiatry Outpatient Department of a Tertiary Care Center',
              facultyGuideName: 'Dr. Megahamala T.',
              teamLeaderName: 'Dr. Triveni Malaghan - Department of Psychiatry',
              teamMembers: [
                'Smt. Ashwini R. Patil',
                'Dr. Raghavendra Patil',
                'Smt. Sushma C.',
                'Smt. Mallika B. N.',
                'Dr. Jayashree',
              ],
            },
            {
              id: 'dimhans-p9',
              title:
                'Effectiveness of Technology-Based Nursing Intervention (Video Support and SMS) on Symptom Severity, Number of Admissions and Medication Adherence Among Mentally Ill Individuals',
              facultyGuideName: 'Dr. Sreevani R.',
              teamLeaderName: 'Mr. Ganesh Tevarannavar - Department of Psychiatry Nursing',
              teamMembers: ['Smt. Ashwini R. Patil'],
            },
          ],
        },
      ],
    },

    {
      id: 'klecop',
      name: 'KLE College of Pharmacy',
      city: 'Belagavi',
      state: 'Karnataka',
      description: 'NAIN 2.0 host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/klepharm.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Sunilkumar P. V.',
            dia: 'Dr. Bhaskar K. Kurangi',
            misExecutives: ['Mr. Rohan Singadi'],
            nainCoordinator: 'Dr. Nithyananda Sastry Darbha',
          },
          projects: [
            {
              id: 'klecop-p1',
              title:
                "Formulation, Evaluation, and Optimization of Paeoniflorin-Loaded Niosomal In-Situ Gel for the Effective Management of Parkinson's Disease",
              facultyGuideName: 'Ms. Kishori P. Sutar & Mr. Prakash Biradar',
              teamLeaderName: 'Ms. Yashaswini Joshi',
              teamMembers: ['Ms. Priyanka Saini', 'Mr. Shivaraj Hooli'],
            },
            {
              id: 'klecop-p2',
              title: 'Development of Bacoside Loaded Cubosome Nanoformulation for Targeting Brain',
              facultyGuideName: 'Dr. Bhaskar Kurangi',
              teamLeaderName: 'Ms. Krutika Krishna Shet',
              teamMembers: ['Mr. Akash Borganave', 'Mr. Soham Naik Gaonkar'],
            },
            {
              id: 'klecop-p3',
              title:
                'Permeability-Enhanced Liposomal Emulgel Formulation of Mupirocin and Bromelain for the Treatment of Bacterial Folliculitis',
              facultyGuideName: 'Dr. Bhuvaneshwari Sharannavar',
              teamLeaderName: 'Ms. Chanchal Tapdiya',
              teamMembers: ['Ms. Shrigouri Patil', 'Mr. Sushant Madar'],
            },
            {
              id: 'klecop-p4',
              title:
                'Cosmeceutical Dual-Action Nano Formulation for Hair Restoration and Hair Growth',
              facultyGuideName: 'Dr. V. S. Mannur',
              teamLeaderName: 'Mr. Naman Kothari',
              teamMembers: ['Mr. Rahul Koli', 'Mr. Gangadhar Meled', 'Mr. Pratik Basagoudar'],
            },
            {
              id: 'klecop-p5',
              title:
                'Novel Heterocyclic Compound as an Anti-Cancer Agent Against Triple-Negative Breast Cancer: In Vitro Anticancer Activity',
              facultyGuideName: 'Dr. Shankar G. Alegaon',
              teamLeaderName: 'Mr. Vishwajit Gundu Patil',
              teamMembers: ['Mr. Niteen R. Sutar', 'Mr. Vinayak Dundage'],
            },
            {
              id: 'klecop-p6',
              title:
                'Assessment of Safety and Efficacy of Total Parenteral Nutrition (TPN) in NICU and Neonates – A Clinical Pharmacist’s Approach',
              facultyGuideName: 'Dr. Shashikala Wali',
              teamLeaderName: 'Mr. Mohanmad Junaid Patel',
              teamMembers: [
                'Mr. Mohammed Uzair I. Inamdar',
                'Mr. Mohd Hayat Mujawar',
                'Mr. Farhan Bagsiraj',
                'Dr. Shweta Radekar',
              ],
            },
            {
              id: 'klecop-p7',
              title:
                'Exploring Natural Dyes for Commercially Viable Environment-Friendly Applications',
              facultyGuideName: 'Dr. Nithyananda Sastry Darbha',
              teamLeaderName: 'Mr. Kumar B. Koneri',
              teamMembers: ['Ms. Aakanksha Shinde', 'Mr. Shreyash Gaikwad'],
            },
            {
              id: 'klecop-p8',
              title:
                'Development and Evaluation of Herbal Bioactives Loaded Nanoformulation for Anti-Inflammatory Potential',
              facultyGuideName: 'Mr. Akshay K. Patil',
              teamLeaderName: 'Ms. Pratibha Koli',
              teamMembers: [
                'Mr. Praneeth Mandi',
                'Mr. Omkar Jagnure',
                'Mr. Sagar Wasedar',
                'Mr. Sachin Gudasi',
              ],
            },
            {
              id: 'klecop-p9',
              title: 'Indigenous Smart Herbal Mosquito Repellent Machine with Advanced Features',
              facultyGuideName: 'Dr. Basavaraj Dinnimath',
              teamLeaderName: 'Ms. Priya V. Shettennavar',
              teamMembers: [
                'Ms. Priya V. Shettennavar',
                'Ms. Pooja Chandrakant Chougala',
                'Ms. Priyanka Mrityunjay Marihal',
              ],
            },
            {
              id: 'klecop-p10',
              title:
                'Nanosuspension-Based Combination Therapy of Dacarbazine and Statin for Enhanced Melanoma Therapy',
              facultyGuideName: 'Ms. Nisha Shirkoli',
              teamLeaderName: 'Ms. Sanisha Santosh Shetye',
              teamMembers: [
                'Mr. Atharv Daddi',
                'Mr. Adarsh Umrani',
                'Ms. Shraddha Puranik',
                'Ms. Shifa Sayed',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'sgbit',
      name: 'S. G. Balekundri Institute of Technology',
      city: 'Belagavi',
      state: 'Karnataka',
      description: 'NAIN 2.0 host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/sgbit.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Sunil C. K.',
            dia: 'Dr. Suresh Akkole',
            misExecutives: ['Dr. Manjunath Sharanappanavar'],
            nainCoordinator: 'Dr. Sanjeev Kulkarni',
          },
          projects: [
            {
              id: 'sgbit-p1',
              title: 'E-Cattle Management',
              facultyGuideName: 'Dr. Anita Patil',
              teamLeaderName: 'Ms. Bibiraheema Nadaf',
              teamMembers: [
                'Mr. Mohammed Azeem H. Nadaf',
                'Mr. Chetan S. Karadiguddi',
                'Ms. Supriya Anand Hanagadakar',
                'Ms. Sanjeevini Ravasab Chougala',
              ],
            },
            {
              id: 'sgbit-p2',
              title:
                'Production of Eco-Friendly Cementless Interlocking Paver Blocks Using Plastic Sand for Light Traffic',
              facultyGuideName: 'Prof. Vivekanand Korishetti, Prof. Sandeep Kulkarni',
              teamLeaderName: 'Mr. Rahul Gadaveer',
              teamMembers: [
                'Mr. Pradeep M. Amboji',
                'Mr. B. Jhanu',
                'Ms. Sanjana Mutakekar',
                'Mr. Masud Ahmed',
              ],
            },
            {
              id: 'sgbit-p3',
              title: 'Renewable Energy - Urja Wave',
              facultyGuideName: 'Prof. Suvarna Karki',
              teamLeaderName: 'Mr. Suraj Umesh Pachapur',
              teamMembers: [
                'Mr. Ankit M. Dasankoppa',
                'Ms. Vaishnavi R. Patil',
                'Mr. Harshit R. Hiremath',
                'Mr. Prakul Sunil Hiremath',
              ],
            },
            {
              id: 'sgbit-p4',
              title: 'Tribrid Vehicle',
              facultyGuideName: 'Prof. Mallikarjun Bhagawati',
              teamLeaderName: 'Mr. Kartik Payannavar',
              teamMembers: ['Mr. Basavaraj M. Bhusani', 'Mr. Darshan Badiger', 'Ms. Priyanka Badiger'],
            },
            {
              id: 'sgbit-p5',
              title: 'MediAssist: AI-Powered Healthcare Companion App',
              facultyGuideName: 'Prof. Santosh Naduvinamani',
              teamLeaderName: 'Mr. Rakesh Sabnis',
              teamMembers: [
                'Mr. Nilesh S. Patil',
                'Mr. Naveedahmed I. Hakim',
                'Mr. Piyush Kulkarni',
                'Mr. Atul Patil',
              ],
            },
            {
              id: 'sgbit-p6',
              title:
                'CareTroid: Robotic Assistance for Elderly Well-Being and Remote Family Support',
              facultyGuideName: 'Prof. Rajeshwari Kisan, Prof. Kshitij Sheth',
              teamLeaderName: 'Ms. Shrusti Padmannavar',
              teamMembers: [
                'Ms. Sampada Chaugule',
                'Mr. Hemant Mandi',
                'Mr. Chirag Kamble',
                'Mr. Rushikesh Patil',
              ],
            },
            {
              id: 'sgbit-p7',
              title:
                'Novel Era of Justice-AI: Advanced Criminal Case Analysis and Automated Judgment System',
              facultyGuideName: 'Dr. Shankargoud Patil',
              teamLeaderName: 'Mr. Aryan Akshay Hubballi',
              teamMembers: [
                'Mr. Adarsh Mulangi',
                'Mr. Mahesh Goudappanavar',
                'Mr. Karthik Murti',
                'Mr. Tukaram Kilari',
              ],
            },
            {
              id: 'sgbit-p8',
              title: 'Automated Effluent Treatment System',
              facultyGuideName: 'Dr. Supanna Shirguppe, Dr. Prashant B. Bhagawati',
              teamLeaderName: 'Mr. Adnan Belwadi',
              teamMembers: ['Ms. Misbha Killedar', 'Mr. Rohan Bajantri', 'Ms. Prachi Jakkanawar'],
            },
            {
              id: 'sgbit-p9',
              title: 'Bioloop: Transforming CO2 into Biofuel',
              facultyGuideName: 'Dr. Shivanand Hiremath',
              teamLeaderName: 'Ms. Shreya Yargattimath',
              teamMembers: [
                'Mr. Harshit R. Hiremath',
                'Mr. Prakul Sunil Hiremath',
                'Mr. Suraj Umesh Pachapur',
                'Mr. Ankit M. Dasankoppa',
              ],
            },
            {
              id: 'sgbit-p10',
              title: 'Variable Angle on Chair-Cum-Stretcher Prototype',
              facultyGuideName: 'Prof. Vishwanath Khadakbhavi',
              teamLeaderName: 'Mr. Basavaraj Singadi',
              teamMembers: [
                'Ms. Nikhita B.',
                'Ms. Aralikatti',
                'Mr. Shivashankar R. Talakeri',
                'Mr. Siddarth Jingre',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'bldea',
      name: "BLDEA's V. P. Dr. P. G. Halakatti College of Engineering and Technology",
      city: 'Vijayapura',
      state: 'Karnataka',
      description: 'NAIN 2.0 host institute supported by the PMU under the 2025-26 cycle.',
      logo: '/partners/bldeacet.png',
      years: [
        {
          year: '2025-26',
          support: {
            pmuTechMentor: 'Dr. Prakash Pawar',
            dia: 'Mr. Bheemesh K. Gudur',
            misExecutives: ['Mrs. Deepti D. Patil'],
            nainCoordinator: 'Mr. Rajashekhar D. Salagar',
          },
          projects: [
            {
              id: 'bldea-p1',
              title: 'Manufacturing of Eco-Friendly Paint Using Cow Dung',
              facultyGuideName: 'Dr. B. M. Angadi and Dr. Anuradha Tankasali',
              teamLeaderName: 'Ms. Khushi Katti',
              teamMembers: [
                'Mr. Suraj Paramashety',
                'Ms. Kumkum Hajeri',
                'Mr. Sachin Savalgi',
                'Mr. Jagadish Babaleshwar',
              ],
            },
            {
              id: 'bldea-p2',
              title:
                'AI-Powered Interactive Robot with Real-Time Video Tracking and Voice Query Response System',
              facultyGuideName: 'Dr. Pradeep Malaji and Prof. Hemavathi Biradar',
              teamLeaderName: 'Mr. Harsh Kalaburgi',
              teamMembers: [
                'Mr. Aditya R. Hiremath',
                'Ms. Keerti C. Deshpande',
                'Mr. Manjunath Wali',
                'Mr. Aditya Talawar',
              ],
            },
            {
              id: 'bldea-p3',
              title:
                'SmartWeed: Automated Weed Detection and Removal System for Sustainable Farming',
              facultyGuideName: 'Prof. V. C. Sajjanar',
              teamLeaderName: 'Mr. Mruthunjay Hiremath',
              teamMembers: [
                'Mr. Piyush Jadhav',
                'Ms. Sarvada Shahapure',
                'Ms. Sanjana Ghorpade',
                'Alumni: Dr. R. M. Math',
              ],
            },
            {
              id: 'bldea-p4',
              title: '3D Printed Functionally Graded Thermoelectric Devices',
              facultyGuideName: 'Dr. R. S. Kondaguli',
              teamLeaderName: 'Ms. Srushthi Shankar Budni',
              teamMembers: ['Mr. Sarvesh Maidaragi', 'Mr. Vinay Katnalli'],
            },
            {
              id: 'bldea-p5',
              title:
                'Biochar-Based Negative Carbon Concrete: Optimizing Environmental Performance with Sensor Technology',
              facultyGuideName: 'Prof. M. B. Ishwaragol',
              teamLeaderName: 'Ms. Seema Basavraj Savalgi',
              teamMembers: [
                'Ms. Sudha Gouli',
                'Ms. Swati Ramrath',
                'Mr. Narendra Rodagi',
                'Mr. Navedahmed Choudari',
              ],
            },
            {
              id: 'bldea-p6',
              title: 'Smart Irrigation Systems: Automated Controls to Optimize Water Usage',
              facultyGuideName: 'Prof. M. U. Nagaral',
              teamLeaderName: 'Ms. Aishwarya Chakote',
              teamMembers: [
                'Ms. Swati Shirashyad',
                'Ms. Varsha Korabu',
                'Ms. Spoorti Kolkar',
                'Ms. Mufliya Kaunen',
              ],
            },
            {
              id: 'bldea-p7',
              title: 'Krishi Care: Collecting and Analyzing Drone Imagery for Crop Pest Control',
              facultyGuideName: 'Dr. Leena Ragha',
              teamLeaderName: 'Ms. Nikita S. Nirvanashetti',
              teamMembers: [
                'Ms. Megha Pawadabasappa Dengi',
                'Mr. Mohammad Uwais Thanedar',
                'Ms. Shraddha Santosh Patil',
                'Ms. Sneha Chinchali',
              ],
            },
            {
              id: 'bldea-p8',
              title: 'Cattle Feed (Pellets) Manufacturing Machine Using Agricultural Waste',
              facultyGuideName: 'Dr. B. M. Angadi',
              teamLeaderName: 'Ms. Bhavya Melinamath',
              teamMembers: [
                'Mr. Iranna Karakal',
                'Mr. Nandeesh Awati',
                'Mr. Omkar Mane',
                'Mr. Basangouda P. Patil',
              ],
            },
            {
              id: 'bldea-p9',
              title: 'Krishi Sprayer: Drone-Based Intelligent Sprayer',
              facultyGuideName: 'Dr. Leena Ragha',
              teamLeaderName: 'Ms. Sayeda Rifat Ayeesha Quadri',
              teamMembers: ['Mr. Srinidhi Sutraway', 'Mr. Adarsh Bannur', 'Mr. Numan Patil'],
            },
            {
              id: 'bldea-p10',
              title:
                'Design and Development of a 3.5 kW Off-Board Solar Charging Station for Farm Machinery/Loads Using Multioutput DC-DC Converter',
              facultyGuideName: 'Prof. Shirang Kulkarni',
              teamLeaderName: 'Mr. Shivaraj Basavaprabhu',
              teamMembers: [
                'Ms. Vidya Mallikarajuna Math',
                'Ms. Aishwaraya R. Sagar',
                'Mr. Sagar U. Poojari',
                'Alumni: Prof. Prashant Kadi',
              ],
            },
          ],
        },
      ],
    },
  ],
}