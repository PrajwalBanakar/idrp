// package com.idrp.backend.config;

// import com.idrp.backend.entity.BoardMember;
// import com.idrp.backend.entity.Event;
// import com.idrp.backend.entity.Mentor;
// import com.idrp.backend.entity.Partner;
// import com.idrp.backend.entity.Resource;
// import com.idrp.backend.entity.ResourceType;
// import com.idrp.backend.entity.TeamMember;
// import com.idrp.backend.repository.BoardMemberRepository;
// import com.idrp.backend.repository.EventRepository;
// import com.idrp.backend.repository.MentorRepository;
// import com.idrp.backend.repository.PartnerRepository;
// import com.idrp.backend.repository.ResourceRepository;
// import com.idrp.backend.repository.TeamMemberRepository;
// import lombok.RequiredArgsConstructor;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Configuration;
// import com.idrp.backend.entity.Startup;
// import com.idrp.backend.entity.StartupCategory;
// import com.idrp.backend.entity.StartupPerson;
// import com.idrp.backend.repository.StartupRepository;

// import java.util.ArrayList;
// import java.util.List;

// import java.time.LocalDate;

// @Configuration
// @RequiredArgsConstructor
// public class DataInitializer implements CommandLineRunner {

//     private final BoardMemberRepository boardMemberRepository;
//     private final TeamMemberRepository teamMemberRepository;
//     private final MentorRepository mentorRepository;
//     private final ResourceRepository resourceRepository;
//     private final PartnerRepository partnerRepository;
//     private final StartupRepository startupRepository;
//     private final EventRepository eventRepository;

//     @Override
//     public void run(String... args) {
//         seedBoardMembers();
//         seedTeamMembers();
//         seedMentors();
//         seedNewsletters();
//         seedPartners();
//         seedStartups();
//         seedEvents();
//     }

//     private void seedBoardMembers() {
//         if (boardMemberRepository.count() > 0) return;

//         boardMemberRepository.save(BoardMember.builder()
//                 .name("Dr. Deepak K T")
//                 .designation("CEO, IDRP")
//                 .boardType("Investment Committee")
//                 .organization("IDRP")
//                 .email("deepak.board@idrp.in")
//                 .profileImageUrl("/board-deepak.jfif")
//                 .linkedinUrl("https://www.linkedin.com/in/deepak-k-t-92270a9/")
//                 .displayOrder(1)
//                 .active(true)
//                 .build());

//         boardMemberRepository.save(BoardMember.builder()
//                 .name("Prof. S R Mahadeva Prasanna")
//                 .designation("Director, IIIT Dharwad")
//                 .boardType("Investment Committee")
//                 .organization("IIIT Dharwad")
//                 .email("prasanna.board@idrp.in")
//                 .profileImageUrl("/board-prasanna.jfif")
//                 .linkedinUrl("https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4/")
//                 .displayOrder(2)
//                 .active(true)
//                 .build());
//     }

//     private void seedTeamMembers() {
//         if (teamMemberRepository.count() > 0) return;

//         teamMemberRepository.save(TeamMember.builder()
//                 .name("Dr. Deepak K T")
//                 .designation("CEO, IDRP")
//                 .department("Leadership")
//                 .email("deepak.team@idrp.in")
//                 .profileImageUrl("/board-deepak.jfif")
//                 .linkedinUrl("https://www.linkedin.com/in/deepak-k-t-92270a9/")
//                 .displayOrder(1)
//                 .active(true)
//                 .build());

//         teamMemberRepository.save(TeamMember.builder()
//                 .name("Ms. Darshana Kasar")
//                 .designation("Program Associate")
//                 .department("Programs")
//                 .email("darshana@idrp.in")
//                 .profileImageUrl("/team-darshana.jpeg")
//                 .linkedinUrl("https://www.linkedin.com/in/ms-darshana-kasar-1a774b3ab/")
//                 .displayOrder(2)
//                 .active(true)
//                 .build());

//         teamMemberRepository.save(TeamMember.builder()
//                 .name("Mr. Lokesh B N")
//                 .designation("Program Associate")
//                 .department("Programs")
//                 .email("lokesh@idrp.in")
//                 .profileImageUrl("/team-lokesh.jpeg")
//                 .linkedinUrl("https://www.linkedin.com/in/lokesh-b-n-4920b93ab/")
//                 .displayOrder(3)
//                 .active(true)
//                 .build());

//         teamMemberRepository.save(TeamMember.builder()
//                 .name("Ms. Neha Revankar")
//                 .designation("Program Associate")
//                 .department("Programs")
//                 .email("neha@idrp.in")
//                 .profileImageUrl("/team-neha.jpeg")
//                 .linkedinUrl("http://linkedin.com/in/neha-revankar-6540062a1/")
//                 .displayOrder(4)
//                 .active(true)
//                 .build());

//         teamMemberRepository.save(TeamMember.builder()
//                 .name("Mr. Prajwal Banakar")
//                 .designation("Software Engineer")
//                 .department("Technology")
//                 .email("prajwal@idrp.in")
//                 .profileImageUrl("/team-prajwal.jpeg")
//                 .linkedinUrl("https://www.linkedin.com/in/prajwal-banakar-167130193/")
//                 .displayOrder(5)
//                 .active(true)
//                 .build());

//         teamMemberRepository.save(TeamMember.builder()
//                 .name("Ms. Rakshata Athani")
//                 .designation("Incubation Manager")
//                 .department("Incubation")
//                 .email("rakshata@idrp.in")
//                 .profileImageUrl("/team-rakshata.jpeg")
//                 .linkedinUrl("https://www.linkedin.com/in/rakshata-athani-3595a1203/")
//                 .displayOrder(6)
//                 .active(true)
//                 .build());

//         teamMemberRepository.save(TeamMember.builder()
//                 .name("Mr. Ravi Dalavayi")
//                 .designation("Technician")
//                 .department("Operations")
//                 .email("ravi@idrp.in")
//                 .profileImageUrl("/team-ravi.jpeg")
//                 .linkedinUrl("https://www.linkedin.com/")
//                 .displayOrder(7)
//                 .active(true)
//                 .build());

//         teamMemberRepository.save(TeamMember.builder()
//                 .name("Ms. Reshma P")
//                 .designation("Program Associate")
//                 .department("Programs")
//                 .email("reshma@idrp.in")
//                 .profileImageUrl("/team-reshma.jpeg")
//                 .linkedinUrl("https://www.linkedin.com/")
//                 .displayOrder(8)
//                 .active(true)
//                 .build());

//         teamMemberRepository.save(TeamMember.builder()
//                 .name("Ms. Sunita Hebli")
//                 .designation("Program Associate")
//                 .department("Programs")
//                 .email("sunita@idrp.in")
//                 .profileImageUrl("/team-sunita.jpeg")
//                 .linkedinUrl("https://www.linkedin.com/")
//                 .displayOrder(9)
//                 .active(true)
//                 .build());
//     }

//     private void seedMentors() {
//         if (mentorRepository.count() > 0) return;

//         mentorRepository.save(Mentor.builder()
//                 .name("Ram Subramanian")
//                 .email("ram.subramanian@idrp.in")
//                 .designation("Serial Entrepreneur")
//                 .expertise("Entrepreneurship")
//                 .linkedinUrl("https://assets.iiitdwd.ac.in/docs/RamSubramanianProfile.pdf")
//                 .active(true)
//                 .build());

//         mentorRepository.save(Mentor.builder()
//                 .name("Mallikarjun Kande")
//                 .email("mallikarjun.kande@idrp.in")
//                 .designation("Director, Space Energy Systems")
//                 .organization("Space Energy Systems")
//                 .expertise("Business and Industry Mentorship")
//                 .linkedinUrl("https://www.linkedin.com/in/mallikarjun-kande-18709342/")
//                 .active(true)
//                 .build());

//         mentorRepository.save(Mentor.builder()
//                 .name("Shashidhar Shettar")
//                 .email("shashidhar.shettar@idrp.in")
//                 .designation("Entrepreneur")
//                 .expertise("Entrepreneurship")
//                 .linkedinUrl("https://www.linkedin.com/in/shashishettar")
//                 .active(true)
//                 .build());

//         mentorRepository.save(Mentor.builder()
//                 .name("Santosh Devanallikar")
//                 .email("santosh.devanallikar@idrp.in")
//                 .designation("Chip Architect, Nokia")
//                 .organization("Nokia")
//                 .expertise("Chip Architecture")
//                 .linkedinUrl("https://www.linkedin.com/in/adsantosh/")
//                 .active(true)
//                 .build());

//         mentorRepository.save(Mentor.builder()
//                 .name("Sasikumar Sundarajan")
//                 .email("sasikumar.sundarajan@idrp.in")
//                 .designation("Senior Advisor, BDO")
//                 .organization("BDO")
//                 .expertise("Business Advisory")
//                 .linkedinUrl("https://www.linkedin.com/in/sasikumars")
//                 .active(true)
//                 .build());

//         mentorRepository.save(Mentor.builder()
//                 .name("Chetan Khosla")
//                 .email("chetan.khosla@idrp.in")
//                 .designation("Investor & Entrepreneur")
//                 .expertise("Investment and Entrepreneurship")
//                 .linkedinUrl("https://www.linkedin.com/in/chetankhosla/")
//                 .active(true)
//                 .build());

//         mentorRepository.save(Mentor.builder()
//                 .name("Ambarish Kulkarni")
//                 .email("ambarish.kulkarni@idrp.in")
//                 .designation("Associate Professor, Swinburne University of Technology")
//                 .organization("Swinburne University of Technology")
//                 .expertise("Academic and Technical Mentorship")
//                 .linkedinUrl("")
//                 .active(true)
//                 .build());

//         mentorRepository.save(Mentor.builder()
//                 .name("Anand Bariya")
//                 .email("anand.bariya@idrp.in")
//                 .designation("Board Member, Deshpande Foundation")
//                 .organization("Deshpande Foundation")
//                 .expertise("Ecosystem and Startup Mentorship")
//                 .linkedinUrl("https://www.linkedin.com/in/anand-bariya-9ba9906a/")
//                 .active(true)
//                 .build());

//         mentorRepository.save(Mentor.builder()
//                 .name("Prof. Dr. Subhash Marihal")
//                 .email("subhash.marihal@idrp.in")
//                 .designation("Founder, SaSPinjara Life Science")
//                 .organization("SaSPinjara Life Science")
//                 .expertise("Life Sciences and Entrepreneurship")
//                 .linkedinUrl("https://www.linkedin.com/in/prof-dr-subhas-marihal-81359315")
//                 .active(true)
//                 .build());
//     }

//     private void seedNewsletters() {
//         if (resourceRepository.count() > 0) return;

//         resourceRepository.save(Resource.builder()
//                 .title("IIIT Dharwad Research Park Newsletter")
//                 .slug("jan-mar-2025-edition")
//                 .type(ResourceType.NEWSLETTER)
//                 .summary("Quarterly highlights covering startup programs, workshops, innovation initiatives, and ecosystem activity at IIIT Dharwad Research Park.")
//                 .content("Issue 01 | Jan-Mar 2025\n\nThis issue includes event highlights, Yuva Udhyami startup challenge activity, NAIN 2.0 kickoff, faculty development program, startup spotlight, industry insights, SageMaker workshop, and academic engagement.\n\nHighlights:\n- Yuva Udhyami startup challenge and cohort announcement\n- NAIN 2.0 kickoff highlights\n- Faculty development program on design and entrepreneurship\n- Startup spotlight, workshops, and ecosystem activity")
//                 .fileUrl("/newsletters/01-jan-mar-2025-edition.pdf")
//                 .coverImageUrl("/newsletters/jan-mar-2025-cover.jpg")
//                 .publishDate(LocalDate.of(2025, 3, 31))
//                 .author("IDRP")
//                 .displayOrder(1)
//                 .active(true)
//                 .build());

//         resourceRepository.save(Resource.builder()
//                 .title("IIIT Dharwad Research Park Newsletter")
//                 .slug("apr-jun-2025-edition")
//                 .type(ResourceType.NEWSLETTER)
//                 .summary("Quarterly highlights from programs, activities, collaborations, and startup ecosystem engagement.")
//                 .content("Issue 02 | Apr-Jun 2025\n\nBrowse the Apr-Jun 2025 edition of the IIIT Dharwad Research Park newsletter.\n\nHighlights:\n- Quarterly updates from the ecosystem\n- Program and event highlights\n- Founder and community activities\n- Institutional and innovation milestones")
//                 .fileUrl("/newsletters/02-apr-jun-2025-edition.pdf")
//                 .coverImageUrl("/newsletters/apr-jun-2025-cover.jpg")
//                 .publishDate(LocalDate.of(2025, 6, 30))
//                 .author("IDRP")
//                 .displayOrder(2)
//                 .active(true)
//                 .build());

//         resourceRepository.save(Resource.builder()
//                 .title("IIIT Dharwad Research Park Newsletter")
//                 .slug("jul-sep-2025-edition")
//                 .type(ResourceType.NEWSLETTER)
//                 .summary("Quarterly highlights from programs, partnerships, startup support, and innovation-led initiatives.")
//                 .content("Issue 03 | Jul-Sep 2025\n\nBrowse the Jul-Sep 2025 edition of the IIIT Dharwad Research Park newsletter.\n\nHighlights:\n- Quarterly updates from the ecosystem\n- Program and event highlights\n- Founder and community activities\n- Institutional and innovation milestones")
//                 .fileUrl("/newsletters/03-jul-sep-2025-edition.pdf")
//                 .coverImageUrl("/newsletters/jul-sep-2025-cover.jpg")
//                 .publishDate(LocalDate.of(2025, 9, 30))
//                 .author("IDRP")
//                 .displayOrder(3)
//                 .active(true)
//                 .build());

//         resourceRepository.save(Resource.builder()
//                 .title("IIIT Dharwad Research Park Newsletter")
//                 .slug("oct-dec-2025-edition")
//                 .type(ResourceType.NEWSLETTER)
//                 .summary("Quarterly highlights from programs, ecosystem developments, events, and startup engagement.")
//                 .content("Issue 04 | Oct-Dec 2025\n\nBrowse the Oct-Dec 2025 edition of the IIIT Dharwad Research Park newsletter.\n\nHighlights:\n- Quarterly updates from the ecosystem\n- Program and event highlights\n- Founder and community activities\n- Institutional and innovation milestones")
//                 .fileUrl("/newsletters/04-oct-dec-2025-edition.pdf")
//                 .coverImageUrl("/newsletters/oct-dec-2025-cover.jpg")
//                 .publishDate(LocalDate.of(2025, 12, 31))
//                 .author("IDRP")
//                 .displayOrder(4)
//                 .active(true)
//                 .build());

//         resourceRepository.save(Resource.builder()
//                 .title("IIIT Dharwad Research Park Newsletter")
//                 .slug("jan-mar-2026-edition")
//                 .type(ResourceType.NEWSLETTER)
//                 .summary("Quarterly highlights from programs, ecosystem developments, events, and startup engagement.")
//                 .content("Issue 05 | Jan-Mar 2026\n\nBrowse the Jan-Mar 2026 edition of the IIIT Dharwad Research Park newsletter.\n\nHighlights:\n- Quarterly updates from the ecosystem\n- Program and event highlights\n- Founder and community activities\n- Institutional and innovation milestones")
//                 .fileUrl("/newsletters/05-jan-mar-2026-edition.pdf")
//                 .coverImageUrl("/newsletters/jan-mar-2026-cover.jpg")
//                 .publishDate(LocalDate.of(2026, 3, 31))
//                 .author("IDRP")
//                 .displayOrder(5)
//                 .active(true)
//                 .build());
//     }

//     private void seedPartners() {
//     if (partnerRepository.count() > 0) return;

//     // Academic Partners
//     savePartner("Boltstart Academy", "academic", "https://www.linkedin.com/in/boltstart-academy-842a913b8/", "/partners/boltstart.jpeg");
//     savePartner("KLE Institute of Technology, Hubli", "academic", "https://kleit.ac.in/", "/partners/kleit.png");
//     savePartner("Dharwad Institute of Mental Health & Neurosciences (DIMHANS)", "academic", "https://dimhans.karnataka.gov.in/en", "/partners/dimhans.png");
//     savePartner("Mahatma Gandhi Rural Development & Panchayat Raj University, Gadag", "academic", "https://ksrdpru.ac.in/en/", "/partners/mgrdpru.jpeg");
//     savePartner("KLE College of Pharmacy, Belagavi", "academic", "https://klepharm.edu/", "/partners/klepharm.png");
//     savePartner("S. G. Balekundri Institute of Technology, Belagavi", "academic", "https://sgbit.edu.in/", "/partners/sgbit.png");
//     savePartner("BLDEA's V.P. Dr. P. G. Halakatti College of Engineering and Technology, Vijayapura", "academic", "https://www.bldeacet.ac.in/", "/partners/bldeacet.png");
//     savePartner("Jain College of Engineering and Research", "academic", "https://jcer.in/", "/partners/jcer.png");
//     savePartner("Poojya Doddappa Appa College of Engineering, Gulbarga", "academic", "https://www.pdacek.ac.in/", "/partners/pda.png");
//     savePartner("D.K.T.E. Society's Textile & Engineering Institute, Ichalkaranji", "academic", "https://www.dkte.ac.in/index.php", "/partners/dkte.png");
//     savePartner("FUEL", "academic", "https://fuelfornation.com/", "/partners/fuel.png");
//     savePartner("GM University, Davangere", "academic", "https://gmu.ac.in/", "/partners/gmu.png");
//     savePartner("Head Held High Foundation", "academic", "https://in.linkedin.com/company/head-held-high-foundation", "/partners/hhh.png");
//     savePartner("Rani Channamma University, Belagavi", "academic", "https://rcub.ac.in/en/index.php", "/partners/rcu.png");
//     savePartner("Shridevi Institute of Engineering & Technology, Tumakuru", "academic", "https://shrideviengineering.org/", "/partners/shridevi.png");
//     savePartner("VSM's Somashekhar R. Kothiwale Institute of Technology", "academic", "https://www.vsmsrkit.edu.in/", "/partners/vsm.png");
//     savePartner("RNS Institute of Technology, Bengaluru", "academic", "https://www.rnsit.ac.in/", "/partners/rnsit.png");
//     savePartner("VTU, Belagavi", "academic", "https://vtu.ac.in/en/", "/partners/vtu.png");
//     savePartner("Vidya Shakti", "academic", "https://www.vishwa-vidya-shakti.org/", "/partners/vidya.png");

//     // Technology & Industry Partners
//     savePartner("Infosys", "technology", "https://www.infosys.com/", "/partners/infosys.png");
//     savePartner("DocketRun", "technology", "https://docketrun.com/", "/partners/docketrun.jpeg");
//     savePartner("Nanopix", "technology", "https://www.nanopix-iss.com/", "/partners/nanopix.png");
//     savePartner("HAL", "technology", "https://hal-india.co.in/", "/partners/hal.jpeg");
//     savePartner("JSW", "technology", "https://www.jswsteel.in/vijayanagar-works", "/partners/jsw.png");
//     savePartner("QpiAi Technologies", "technology", "https://qpiai.tech/", "/partners/qpiai.png");
//     savePartner("TalkingLands Technologies Pvt. Ltd.", "technology", "https://www.talkinglands.com/", "/partners/talkinglands.png");
//     savePartner("Teamlease EdTech", "technology", "https://www.teamleaseedtech.com/", "/partners/teamlease-edtech.png");
//     savePartner("Centre of Excellence for Cybersecurity (CysecK)", "technology", "https://cyseck.in/", "/partners/cyseck.png");
//     savePartner("KEONICS", "technology", "https://www.keonics.in/english/", "/partners/keonics.png");
//     savePartner("STPI", "technology", "https://stpi.in/en/about-stpi", "/partners/stpi.png");
//     savePartner("Space Energy Systems", "technology", "https://spaceenergysystems.com/", "/partners/ses.jpeg");

//     // Ecosystem Partners
//     savePartner("TiE", "ecosystem", "https://tie.org/", "/partners/tie.png");
//     savePartner("CII", "ecosystem", "https://www.cii.in/", "/partners/cii.png");
//     savePartner("Deshpande Foundation", "ecosystem", "https://deshpandefoundationindia.org/", "/partners/deshpande.png");
//     savePartner("EkStep Foundation", "ecosystem", "https://ekstep.org/", "/partners/ekstep.png");
//     savePartner("Culkey Foundation", "ecosystem", "https://culkey.org/", "/partners/culkey.png");
//     savePartner("CoCreate Ventures", "ecosystem", "https://cocreate.ventures/", "/partners/cocreate.png");
//     savePartner("CX First", "ecosystem", "https://cxfirst.com/en/", "/partners/cxfirst.png");
//     savePartner("iDeCK", "ecosystem", "https://ideck.in/", "/partners/ideck.png");
//     savePartner("Zoho", "ecosystem", "https://www.zoho.com/", "/partners/zoho.png");
//     savePartner("State Bank of India", "ecosystem", "https://bank.sbi/", "/partners/sbi.png");
//     savePartner("Vakil Search", "ecosystem", "https://vakilsearch.com/", "/partners/vakil.png");

//     // Investor Networks
//     savePartner("100X.VC", "investor", "https://www.100x.vc/", "/partners/100x.png");
//     savePartner("Campus Fund", "investor", "https://yourcampusfund.com/", "/partners/campusfund.png");
// }

// private void savePartner(String name, String category, String websiteUrl, String logoUrl) {
//     partnerRepository.save(Partner.builder()
//             .name(name)
//             .category(category)
//             .websiteUrl(websiteUrl)
//             .logoUrl(logoUrl)
//             .active(true)
//             .build());
// }

// private void seedStartups() {
//     if (startupRepository.count() > 0) return;

//     saveStartup(
//             "Agri Indus",
//             "AGRI TECH",
//             StartupCategory.PRE_INCUBATED,
//             "",
//             "",
//             "",
//             "Agri-Indus is a digital platform designed to bridge the gap between farmers and industries by enabling direct, transparent, and fair trade. It eliminates middlemen, ensures real-time pricing, and connects farmers with bulk buyers and companies. With streamlined logistics and improved market access, Agri-Indus empowers farmers to earn better and reduces inefficiencies in the agri-supply chain.",
//             "24bcs125@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Prakash Pawar", "", "https://www.linkedin.com/in/dr-prakash-pawar-78224356", "prakashpawar@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Sachin Kumar", "Founder", "https://www.linkedin.com/in/sachin-kumar-a96735380", "24bcs125@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Sachin Kumar", "", "https://www.linkedin.com/in/sachin-kumar-a96735380", "24bcs125@iiitdwd.ac.in"),
//                     person("Udit Dadhich", "", "https://www.linkedin.com/in/udit-dadhich-324b353a2", "24bcs158@iiitdwd.ac.in"),
//                     person("Sudhanshu Baberwal", "", "https://www.linkedin.com/in/sudhanshu-baberwal", "24bcs147@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "C^3",
//             "SOCIAL TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/c_3.jpg",
//             "",
//             "",
//             "C^3 is an all-in-one platform revolutionizing academic and entrepreneurial collaboration by seamlessly integrating networking, project collaboration, and event management. It empowers students to find peers and research opportunities, enables professors to connect and recruit talent, and helps colleges streamline event promotion and registrations.",
//             "22bcs041@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Sandesh Phalke", "", "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137", "s.phalke@iiitdwd.ac.in"),
//                     person("Dr. Siddharth R", "", "", "siddharth_r@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("G Rohith Yadav", "Founder", "https://www.linkedin.com/in/grohithyadav", "22bcs041@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("G Rohith Yadav", "", "https://www.linkedin.com/in/grohithyadav", "22bcs041@iiitdwd.ac.in"),
//                     person("V Shanmukha Sai", "", "https://www.linkedin.com/in/v-shanmukha-sai-0a3080270", "22BCS135@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Cre8Hub",
//             "SOCIAL TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/cre8hub.png",
//             "",
//             "",
//             "Cre8Hub is an AI-powered platform that empowers small startups and content creators to build a strong digital presence through personalized branding, end-to-end content creation, and performance analytics. By integrating branding tools, smart content generation, and data-driven insights into a single solution, it simplifies the process of standing out online.",
//             "23bec028@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Sunil Saumya", "", "https://www.linkedin.com/in/sunil-saumya-158856b1", "sunil.saumya@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Md. Adnan Khan", "Founder", "https://www.linkedin.com/in/adnan-khan-b94289334", "23bec028@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Md. Adnan Khan", "", "https://www.linkedin.com/in/adnan-khan-b94289334", "23bec028@iiitdwd.ac.in"),
//                     person("Pratyush Anand", "", "https://www.linkedin.com/in/pratyush-anand-", "23bec039@iiitdwd.ac.in"),
//                     person("Prathamesh Patil", "", "https://www.linkedin.com/in/prathamesh-patil-iiitdwd", "23bds043@iiitdwd.ac.in"),
//                     person("Nikhil Kumar", "", "", "23bds038@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Evento",
//             "SOCIAL TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/evento.png",
//             "",
//             "",
//             "Evento offers an all-in-one event planning platform that connects individuals and corporates with verified vendors like venues, caterers, and DJs. With transparent pricing, AI-powered vendor matching, and built-in coordination tools, it simplifies planning, reduces stress, and prevents budget overruns.",
//             "24bcs148@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Prabhu Prasad B. M.", "", "https://www.linkedin.com/in/prabhu-prasad-b-m-428b3837", "prabhuprasad@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Sugyan Singh", "Founder", "https://www.linkedin.com/in/sugyan-singh", "24bcs148@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Arhan Ghosarwade", "", "https://www.linkedin.com/in/arhan-ghosarwade-78bb16324", "24bcs020@iiitdwd.ac.in"),
//                     person("Sugyan Singh", "", "https://www.linkedin.com/in/sugyan-singh", "24bcs148@iiitdwd.ac.in"),
//                     person("Sachin Kumar", "", "https://www.linkedin.com/in/sachin-kumar-software", "24bcs124@iiitdwd.ac.in"),
//                     person("Siddhant Kumar", "", "https://www.linkedin.com/in/siddhant-kumar-dev", "24bcs144@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Friend In Fog",
//             "AUTO TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/Friend In Fog.png",
//             "",
//             "",
//             "Friend In Fog introduces an innovative road safety system that reduces secondary accidents caused by low-visibility conditions like fog or heavy rain. Using radio wave communication, it alerts vehicles within a 5-kilometer radius of an accident or hazard in real time, even without internet access.",
//             "24bec062@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Sandesh Phalke", "", "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137", "s.phalke@iiitdwd.ac.in"),
//                     person("Mr. Mallikarjun Kande", "", "https://www.linkedin.com/in/mallikarjun-kande-18709342", "mallikarjun.kande@space-e.org")
//             ),
//             List.of(
//                     person("Sushant Sharma", "Founder", "https://www.linkedin.com/in/sushant-sharma-3157a0314", "24bec062@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Sushant Sharma", "", "https://www.linkedin.com/in/sushant-sharma-3157a0314", "24bec062@iiitdwd.ac.in"),
//                     person("Hemant Kumar", "", "", "24bds025@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Attrangi",
//             "HEALTH TECH",
//             StartupCategory.FUNDED,
//             "/startups/logo/heyattrangi.jpeg",
//             "",
//             "",
//             "Attrangi is a community-driven mental health and support platform designed for neurodivergent individuals and those facing mental health challenges. Through curated resources, peer support groups, and accessible professional guidance, Attrangi creates a safe, stigma-free space for students and working professionals.",
//             "22bcs068@iiitdwd.ac.in",
//             List.of(),
//             List.of(
//                     person("Dr. Sandesh Phalke", "Founder", "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137", "s.phalke@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Dusary Charan", "", "https://www.linkedin.com/in/charan-dusary-6023172a1", "23bcs047@iiitdwd.ac.in"),
//                     person("Bharath Reddy Medasani", "", "https://www.linkedin.com/in/bharath-reddy-medasani-839b8b327", "22bcs068@iiitdwd.ac.in"),
//                     person("Kalyan Jakkoju", "", "https://www.linkedin.com/in/kalyan-jakkoju-5b6694312", "23bec022@iiitdwd.ac.in"),
//                     person("Lakshmi Prasad Doddi", "", "https://www.linkedin.com/in/lakshmi-prasad-doddi-26a30029a", "23bec018@iiitdwd.ac.in"),
//                     person("Harshith Daraboina", "", "https://www.linkedin.com/in/harshith-daraboina-14105a2b2", "23bcs037@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "MLera",
//             "ED TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/MLera.png",
//             "",
//             "",
//             "MLera is a smart, no-code platform that transforms how Machine Learning is taught by bridging the gap between theory-heavy courses and oversimplified tools. Designed for students and EdTech platforms, it offers interactive visualizations and real-time model building, making ML concepts easy to grasp and explainable.",
//             "22bds036@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Siddharth R", "", "https://www.linkedin.com/in/siddharth-r-85168678", "siddharth_r@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Madhan S", "Founder", "https://www.linkedin.com/in/madhan-s17", "22bds036@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Madhan S", "", "https://www.linkedin.com/in/madhan-s17", "22bds036@iiitdwd.ac.in"),
//                     person("H Shri Harsha", "", "", "22bcs044@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Natanaswara.AI",
//             "COMMERCE TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/Natanasvara.jpg",
//             "",
//             "",
//             "Natanaswara.AI is a first-of-its-kind dance analysis and correction platform that revolutionizes classical dance training through an AI-powered mobile platform providing real-time feedback on postures, expressions, and movements. It combines pose and gesture analytics, motion tracking, and emotion recognition to act like a virtual guru.",
//             "chinmay@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Chinmayananda A.", "", "https://www.linkedin.com/in/chinmayananda-a-941b06307", "chinmay@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Dr. Chinmayananda A.", "Founder", "https://www.linkedin.com/in/chinmayananda-a-941b06307", "chinmay@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Raksha Karthik", "", "", "raksha.jayaram@gmail.com"),
//                     person("Devaraju B V", "", "", "dev.nkm@gmail.com"),
//                     person("Tanmay Gupta", "", "https://www.linkedin.com/in/tanmay-gupta-29b7b8256", "23bds061@iiitdwd.ac.in"),
//                     person("Dhrupad Das", "", "https://www.linkedin.com/in/dhrupad-das-7b71b5290", "23bds018@iiitdwd.ac.in"),
//                     person("Yashpreet Singh Reejak", "", "https://www.linkedin.com/in/yashpreet-singh-345456280", "23bds072@iiitdwd.ac.in"),
//                     person("Thirumala Teena Chowdary", "", "https://www.linkedin.com/in/teena-chowdary-12a389286", "22bds059@iiitdwd.ac.in"),
//                     person("Aditya Guntur", "", "https://www.linkedin.com/in/aditya-guntur-38448b28a", "23bds003@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "BookMyTurf",
//             "COMMERCE TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/bookmyturf.png",
//             "",
//             "",
//             "BookMyTurf is a one-stop platform that simplifies sports venue bookings and game management for players and hosts. It enables instant booking, secure payments, and player matching for football, cricket, basketball, and volleyball. Venue owners can manage listings and boost revenue through a user-friendly dashboard.",
//             "22bds056@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Sandesh Phalke", "", "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137", "s.phalke@iiitdwd.ac.in"),
//                     person("Dr. Sunilkumar P. V.", "", "https://www.linkedin.com/in/pvskumar", "sunilkumar.pv@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Suhaas S", "Founder", "https://www.linkedin.com/in/suhaas-s-ai", "22bds056@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Suhaas S", "", "https://www.linkedin.com/in/suhaas-s-ai", "22bds056@iiitdwd.ac.in"),
//                     person("Vansh Lal Tolani", "", "https://www.linkedin.com/in/vansh-lal-tolani-557368269", "22bds061@iiitdwd.ac.in"),
//                     person("Dr. Sandesh Phalke", "", "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137", "s.phalke@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "V-Gyan",
//             "ED TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/VGyan.png",
//             "",
//             "",
//             "V-Gyan is an AI-powered, multi-modal intelligent tutoring system designed to enhance science learning for Kannada-medium high school students. Using stylus-enabled touch screens, it offers an interactive classroom-like experience with real-time feedback, adaptive assessments, and targeted support.",
//             "jyoti.24phdcs08@iiitdwd.ac.in",
//             List.of(
//                     person("Prof. S. R. Mahadeva Prasanna", "", "https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4", "prasanna@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Jyoti Gadad", "Founder", "https://www.linkedin.com/in/jyoti-gadad-613940101", "jyoti.24phdcs08@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Jyoti Gadad", "", "https://www.linkedin.com/in/jyoti-gadad-613940101", "jyoti.24phdcs08@iiitdwd.ac.in"),
//                     person("Shruti B. S.", "", "", "shruthi.24mtrec01@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Deep Traits",
//             "PEOPLE TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/deep_traits.PNG",
//             "",
//             "",
//             "Deep Traits is an AI-powered personality analysis platform that helps recruiters make unbiased, data-driven hiring decisions by assessing candidates through voice, facial expressions, gestures, and posture. Aligned with models like MBTI and Big 5, it improves talent fit and retention.",
//             "shraddha.22phdec02@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Chinmayananda A.", "", "https://www.linkedin.com/in/chinmayananda-a-941b06307", "chinmay@iiitdwd.ac.in"),
//                     person("Dr. Nataraj K. S.", "", "https://www.linkedin.com/in/nataraj-k-s-2a501323", "nataraj@iiitdwd.ac.in"),
//                     person("Dr. Manjunath Vanahalli", "", "https://www.linkedin.com/in/manjunath-vanahalli-4b24ab69", "manjunathkv@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Shraddha G. Revankar", "Founder", "https://www.linkedin.com/in/shraddha-revankar-a83398a7", "shraddha.22phdec02@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Shraddha G. Revankar", "", "https://www.linkedin.com/in/shraddha-revankar-a83398a7", "shraddha.22phdec02@iiitdwd.ac.in"),
//                     person("Dr. Chinmayananda A.", "", "https://www.linkedin.com/in/chinmayananda-a-941b06307", "chinmay@iiitdwd.ac.in"),
//                     person("Dr. Nataraj K. S.", "", "https://www.linkedin.com/in/nataraj-k-s-2a501323", "nataraj@iiitdwd.ac.in"),
//                     person("Dr. Manjunath Vanahalli", "", "https://www.linkedin.com/in/manjunath-vanahalli-4b24ab69", "manjunathkv@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Kisan Voice",
//             "AGRI TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/Kisan_Voice.png",
//             "",
//             "",
//             "Kisan Voice is a generative AI-powered agricultural services platform for farmers. It uses a voice chatbot to deliver personalized, reliable advice in local languages and supports multimodal data processing, helping farmers access localized, timely agricultural information for better productivity and sustainable practices.",
//             "prashantb@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Prakash Pawar", "", "https://www.linkedin.com/in/dr-prakash-pawar-78224356", "Prakashpawar@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Prashant Bannulmath", "Founder", "https://www.linkedin.com/in/prashant-q-2b8283137", "prashantb@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Prashant Bannulmath", "", "https://www.linkedin.com/in/prashant-q-2b8283137", "prashantb@iiitdwd.ac.in"),
//                     person("Swapnil Sontakke", "", "https://www.linkedin.com/in/sontakke-swapnil26", "swapnil.sontakke@iiitdwd.ac.in"),
//                     person("Shaik Zuhair Hasan", "", "https://www.linkedin.com/in/zuhashaik", "21bds060@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Removation",
//             "DESIGN TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/removation.jpeg",
//             "",
//             "",
//             "Removation is a centralized online platform that connects homeowners and businesses with verified interior and exterior designers, architects, and decorators. Users can upload home maps, receive expert design suggestions, visualize ideas with 3D and AR tools, and access transparent pricing and curated services.",
//             "24bcs086@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Suvadip Hazra", "", "https://www.linkedin.com/in/dr-suvadip-hazra-60491b67", "suvadip@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Nikhil Kumar Sinha", "Founder", "https://www.linkedin.com/in/nikhil-sinha-920600320", "24bcs086@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Nikhil Kumar Sinha", "", "https://www.linkedin.com/in/nikhil-sinha-920600320", "24bcs086@iiitdwd.ac.in"),
//                     person("Nirbhay Kumar", "", "", "24bcs089@iiitdwd.ac.in"),
//                     person("Nitish Kumar", "", "", "24bcs093@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "SmartNest",
//             "DEEP TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/Smart Nest.png",
//             "",
//             "",
//             "SmartNest is an AI-powered, on-device file management system designed for digital professionals who handle large volumes of files. It learns user behavior to intelligently organize, index, and prioritize documents, offering personalized categorization, smart search, and cleanup suggestions while preserving privacy and offline functionality.",
//             "sunil.saumya@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Sunil Saumya", "", "https://www.linkedin.com/in/sunil-saumya-158856b1", "sunil.saumya@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Dr. Sunil Saumya", "Founder", "https://www.linkedin.com/in/sunil-saumya-158856b1", "sunil.saumya@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Dr. Sunil Saumya", "", "https://www.linkedin.com/in/sunil-saumya-158856b1", "sunil.saumya@iiitdwd.ac.in"),
//                     person("Shlok Jha", "", "", "shlokjha.3@gmail.com")
//             )
//     );

//     saveStartup(
//             "Sparkle Studio",
//             "DESIGN TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/Sparkle Studio.jpeg",
//             "",
//             "",
//             "Sparkle Studio is an AR-powered platform that transforms online jewelry shopping with realistic virtual try-ons and easy customization. It empowers customers to see how pieces look in real time, personalize designs to match their style, and shop confidently while helping brands reduce returns and boost sales.",
//             "24bcs104@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Girish G. N.", "", "https://www.linkedin.com/in/girishgn28", "girish@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Mithil Poddaturi", "Founder", "https://www.linkedin.com/in/mithil-poddaturi-1491a232a", "24bcs104@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Mithil Poddaturi", "", "https://www.linkedin.com/in/mithil-poddaturi-1491a232a", "24bcs104@iiitdwd.ac.in"),
//                     person("Kothapalli Tharun", "", "https://www.linkedin.com/in/kothapalli-tharun-490967366", "24bds032@iiitdwd.ac.in"),
//                     person("Neeruganti Jeevan Sai", "", "https://www.linkedin.com/in/neeruganti-jeevan-sai-85907a336", "24bds046@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Cipherion",
//             "CYBERSECURITY",
//             StartupCategory.FUNDED,
//             "/startups/logo/cipherion.png",
//             "",
//             "",
//             "Cipherion is a next-generation Encryption-as-a-Service platform delivering complete data security from application-layer encryption to compliance automation. It includes zero-knowledge encryption, tokenization, dynamic data masking, AI-driven threat detection, and post-quantum security for regulated industries such as fintech, healthcare, government, and SaaS.",
//             "",
//             List.of(
//                     person("Dr. Girish Revadigar", "", "https://www.linkedin.com/in/girish-revadigar-phd-55a33b28", "")
//             ),
//             List.of(
//                     person("Kunaal Shindagi", "Founder", "https://www.linkedin.com/in/kunaal-shindagi-759bb625b", ""),
//                     person("Pooja Ekbote", "Founder", "https://www.linkedin.com/in/poojaekbote11", ""),
//                     person("Nagaraj Bhandare", "Founder", "https://www.linkedin.com/in/nagaraj-bhandare-b4145b25a", "")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "NEXR Technology Private Limited",
//             "HEALTH TECH",
//             StartupCategory.INCUBATED,
//             "/startups/logo/NeXR.jpeg",
//             "",
//             "",
//             "NEXR is a technology-driven health startup building a VR care platform for mental health professionals. It blends immersive VR experiences with biosensors and a phygital engagement model to deliver mental health services and improve digital therapeutic care.",
//             "vinay.oswald@gmail.com",
//             List.of(
//                     person("Dr. Sunil Saumya", "", "https://www.linkedin.com/in/sunil-saumya-158856b1", "")
//             ),
//             List.of(
//                     person("Vinay Kumar", "Founder", "https://www.linkedin.com/in/vinay-kumar-a-25534839", "vinay.oswald@gmail.com"),
//                     person("Shyam Sundar", "Founder", "https://www.linkedin.com/in/shyam-sundar-9881671b", "yadavshyam686@gmail.com")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "Neuraforesight Private Limited",
//             "HEALTH TECH",
//             StartupCategory.FUNDED,
//             "/startups/logo/neuraforesight.jpeg",
//             "",
//             "",
//             "Neuraforesight Private Limited is a TechBio startup transforming how pharmaceutical and biopharmaceutical companies make critical decisions. It develops intelligent, modular AI tools for literature analysis, patent evaluation, portfolio strategy, and global product planning, enabling pharma teams to turn complex data into actionable foresight.",
//             "sachin.marihal@saspinjara.com",
//             List.of(
//                     person("Dr. Manjunath Vanahalli", "", "https://www.linkedin.com/in/manjunath-vanahalli-4b24ab69", "")
//             ),
//             List.of(
//                     person("Sachin Marihal", "Founder", "https://www.linkedin.com/in/sachin-marihal-bab63917", "sachin.marihal@saspinjara.com"),
//                     person("Aravind Puttakkalavar", "Founder", "https://www.linkedin.com/in/aravind-puttakkalavar-60899514", "aravind.p@saspinjara.com"),
//                     person("Anil Kumar Ranadev", "Founder", "https://www.linkedin.com/in/anilkumar-ranadev-156b2115", "anil_ranadev@saspinjara.com")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "SphuraNex",
//             "HEALTH TECH",
//             StartupCategory.INCUBATED,
//             "/startups/logo/sphuranex.jpeg",
//             "",
//             "",
//             "SphuraNex is transforming emergency care with a compact, affordable automatic CPR device that delivers consistent, life-saving chest compressions anytime, anywhere. Designed for trained and untrained users alike, it uses smart sensors, adaptive compression, and voice instructions in local languages.",
//             "23bec035@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Nataraj K. S.", "", "https://www.linkedin.com/in/nataraj-k-s-2a501323", "nataraj@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Om Mishra", "Founder", "https://www.linkedin.com/in/om-mishra-1b1704294", "23bec035@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Om Mishra", "", "https://www.linkedin.com/in/om-mishra-1b1704294", "23bec035@iiitdwd.ac.in"),
//                     person("Dr. Nataraj K. S.", "", "https://www.linkedin.com/in/nataraj-k-s-2a501323", "nataraj@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Step-In",
//             "DEEP TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/Step-In.jpg",
//             "",
//             "",
//             "Step-In is a smart indoor navigation system designed to simplify movement within large spaces like campuses, hospitals, and malls. It helps users locate classrooms, offices, restrooms, and exits through real-time updates, augmented reality features, and 3D building models.",
//             "24bcs150@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Shirshendu Layek", "", "https://www.linkedin.com/in/dr-shirshendu-layek-68151076", "shirshendu@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Swetha S.", "Founder", "", "24bcs150@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Swetha S.", "", "", "24bcs150@iiitdwd.ac.in"),
//                     person("M. Praneeth", "", "https://www.linkedin.com/in/m-praneeth-9201002b0", "24bcs064@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "MediRaksha",
//             "HEALTHCARE",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/MediRaksha.png",
//             "",
//             "",
//             "MediRaksha is an AI-driven healthcare solution that integrates digitized medical records, real-time hospital tracking, and AI-assisted diagnostics to ensure seamless healthcare support anytime, anywhere. It is designed to improve healthcare accessibility and provide instant access to health records during emergencies.",
//             "24bcs025@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Deepak K. T.", "", "https://www.linkedin.com/in/deepak-k-t-92270a9", "deepak@iiitdwd.ac.in"),
//                     person("Preetham Umarani", "", "", "")
//             ),
//             List.of(
//                     person("Ayush Kumar Pal", "Founder", "https://www.linkedin.com/in/ayush-kumar-pal-067172326", "24bcs025@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Ayush Kumar Pal", "", "https://www.linkedin.com/in/ayush-kumar-pal-067172326", "24bcs025@iiitdwd.ac.in"),
//                     person("Abhijeet Nagar", "", "https://www.linkedin.com/in/abhijeet-nagar-a44007308", "24bcs002@iiitdwd.ac.in"),
//                     person("Avi Arora", "", "", "24bcs023@iiitdwd.ac.in"),
//                     person("Saswath Chowta", "", "https://www.linkedin.com/in/saswath-chowta-19bb55320", "24bcs031@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "VayuCharge",
//             "DEEP TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/Vayucharge.jpeg",
//             "",
//             "",
//             "VayuCharge is revolutionizing energy delivery with advanced microwave power transmission technology, enabling efficient wireless charging across long distances. Designed to eliminate dependency on wires and bulky batteries, it supports safer, scalable, and sustainable energy delivery for IoT devices, EVs, and remote systems.",
//             "rajeshk@iiitdwd.ac.in",
//             List.of(),
//             List.of(
//                     person("Dr. Rajesh Kumar", "Founder", "https://www.linkedin.com/in/dr-rajesh-kumar-2417ab11b", "rajeshk@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "Vocal Drone",
//             "DEEP TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/Vocal Drone.jpeg",
//             "",
//             "",
//             "",
//             "vocaldrone@idrp.in",
//             List.of(
//                     person("Dr. Deepak K. T.", "", "", "deepak@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Prashant G. B.", "Founder", "", "prashantb@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Prashant Bannulmath", "", "", "prashantb@iiitdwd.ac.in"),
//                     person("Swapnil Sontakke", "", "", "swapnil.sontakke@iiitdwd.ac.in")
//             )
//     );

//     saveStartup(
//             "Jnana Setu",
//             "ED TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/Jnanasetu.png",
//             "",
//             "",
//             "Jnana Setu is an intelligent career readiness platform that bridges the gap between academic learning and industry needs. It offers students personalized career roadmaps, curated resources, and skill assessments, while institutions and corporates gain access to a more skilled and better-prepared talent pool.",
//             "22bcs126@iiitdwd.ac.in",
//             List.of(
//                     person("Prof. S. R. Mahadeva Prasanna", "", "https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4", "prasanna@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Suchit Artal", "Founder", "https://www.linkedin.com/in/suchit-artal", "22bcs126@iiitdwd.ac.in"),
//                     person("Samuel Naik", "Founder", "https://www.linkedin.com/in/samuel-naik-0b099924a", "22bcs108@iiitdwd.ac.in"),
//                     person("Bhakti S. N.", "Founder", "https://www.linkedin.com/in/bhaktisn11", "22bcs104@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Suchit Artal", "", "https://www.linkedin.com/in/suchit-artal", ""),
//                     person("Samuel Naik", "", "https://www.linkedin.com/in/samuel-naik-0b099924a", ""),
//                     person("Bhakti S. N.", "", "https://www.linkedin.com/in/bhaktisn11", ""),
//                     person("Rahul Trimukhe", "", "", "")
//             )
//     );

//     saveStartup(
//             "FreshDot",
//             "FOOD TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/freshdot.png",
//             "",
//             "",
//             "FreshDot is a packaging-integrated freshness indicator for dairy brands that visually signals spoilage, reducing consumer complaints and building trust with zero change to existing packaging lines.",
//             "25bcs095@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Prakash Pawar", "", "https://www.linkedin.com/in/dr-prakash-pawar-78224356", "prakashpawar@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Moksh A. Gundecha", "Founder", "https://www.linkedin.com/in/moksh-jain-54b036311", "25bcs095@iiitdwd.ac.in"),
//                     person("Sandesh Sanjeev Phalke", "Founder", "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137", "s.phalke@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "CheTechs",
//             "AUTO TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/chetechs.png",
//             "",
//             "",
//             "CheTechs builds driver safety systems using alcohol monitoring sensors and driver behaviour monitoring. The system helps ensure driver and vehicle safety by bringing the vehicle to a gradual halt when alcohol is detected.",
//             "25bec032@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Muthusankar Eswaran", "", "https://www.linkedin.com/in/muthusankar-eswaran-bb794b23", "muthusankar.eswaran@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Khushal Joshi", "Founder", "https://www.linkedin.com/in/khushal-joshi-81488538a", "25bec032@iiitdwd.ac.in"),
//                     person("Pulkit Pokhriyal", "Founder", "https://www.linkedin.com/in/pulkit-pokhriyal-b62868401", "25bec053@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "Tryggva",
//             "AUTO TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/tryggva.png",
//             "",
//             "",
//             "Tryggva is an India-first, behaviour-aware ADAS platform that connects vehicles with traffic infrastructure to predict and prevent accidents in chaotic traffic environments.",
//             "25bcs214@iiitdwd.ac.in",
//             List.of(
//                     person("Jagadeesh Kanade", "", "", "jbkanade@gmail.com")
//             ),
//             List.of(
//                     person("Tusharika Jagwani", "Founder", "https://www.linkedin.com/in/tusharika-jagwani-3a74603a9", "25bcs214@iiitdwd.ac.in"),
//                     person("Yash Mathur", "Founder", "https://www.linkedin.com/in/yash-mathur-6ba200373", "25bcs201@iiitdwd.ac.in"),
//                     person("Pantham Anish Satya Srikar", "Founder", "https://www.linkedin.com/in/anish-pantham-aa5644375", "25bcs114@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "Acumen Intelligence",
//             "AI / SAAS",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/acumen-intelligence.png",
//             "",
//             "",
//             "Acumen Intelligence is developing a SaaS platform that empowers MSMEs to analyse customer feedback and generate data-driven recommendations to enhance service quality.",
//             "25bcs158@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Deepak K. T.", "", "https://www.linkedin.com/in/deepak-k-t-92270a9", "deepak@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Satvik M. Patil", "Founder", "https://www.linkedin.com/in/satvik-patil-830a0a372", "25bcs158@iiitdwd.ac.in"),
//                     person("Shaurya Mittal", "Founder", "https://www.linkedin.com/in/shaurya-mittal-b61283312", "25bcs161@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "Sleepy1",
//             "TRAVEL TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/sleepy1.png",
//             "",
//             "",
//             "Sleepy1 delivers smart, private sleep and nap pods in high-traffic public spaces like airports, offering comfortable resting solutions through a scalable session-based pricing model.",
//             "25bda118@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Prakash Pawar", "", "https://www.linkedin.com/in/dr-prakash-pawar-78224356", "prakashpawar@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Sukruth H. S.", "Founder", "https://www.linkedin.com/in/sukruth-h-s-175370380", "25bda118@iiitdwd.ac.in"),
//                     person("V. V. Rupesh Sai Sundhar", "Founder", "https://www.linkedin.com/in/rupesh-sai-sundhar-v-v-924b57363", "25bda124@iiitdwd.ac.in"),
//                     person("Bandi Thanish Kumar", "Founder", "https://www.linkedin.com/in/thanish-kumar-ba7464380", "25bec012@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "Yntra Sparks",
//             "ED TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/yntra-sparks.png",
//             "",
//             "",
//             "Yntra Sparks designs hands-on STEM kits for middle and secondary school students, replacing rote learning with physical understanding through app-supported kits built for Tier 2 and Tier 3 Indian homes.",
//             "25bda126@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Sandesh Phalke", "", "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137", "s.phalke@iiitdwd.ac.in"),
//                     person("Dr. Suvadip Hazra", "", "https://www.linkedin.com/in/dr-suvadip-hazra-60491b67", "suvadip@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Vikas Lal Singh", "Founder", "https://www.linkedin.com/in/vikas-singh-0b9b34381", "25bda126@iiitdwd.ac.in"),
//                     person("Kush Kumar", "Founder", "https://www.linkedin.com/in/kush-kumar-1095ab379", "25bda059@iiitdwd.ac.in"),
//                     person("Dhanashri Udhavrao Bende", "Founder", "https://www.linkedin.com/in/dhanashri-bende-6a30b8382", "25bda036@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "Gigzy",
//             "PLATFORM TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/gigzy.png",
//             "",
//             "",
//             "Gigzy is a hyperlocal platform connecting people who need quick, short-term help with individuals offering flexible services, creating a trusted ecosystem for micro-tasks with verified users and structured support.",
//             "23bcs116@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Sandesh Phalke", "", "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137", "s.phalke@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Saisha Suresh Bore", "Founder", "https://www.linkedin.com/in/saisha-suresh-bore-47544328a", "23bcs116@iiitdwd.ac.in"),
//                     person("Palak Gupta", "Founder", "https://www.linkedin.com/in/palak-gupta-68043b284", "23bds042@iiitdwd.ac.in"),
//                     person("Hammad Malik", "Founder", "https://www.linkedin.com/in/hammad-malik", "23bcs052@iiitdwd.ac.in"),
//                     person("Simone Rodrigues", "Founder", "https://www.linkedin.com/in/simonerodriguess", "23bcs111@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "PetalPath",
//             "ED TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/petalpath.png",
//             "",
//             "",
//             "PetalPath is an AI-powered early learning platform that delivers structured 10–20 minute sessions combining interactive videos and activities for children aged 2–6, transforming passive screen time into adaptive learning experiences.",
//             "25bda086@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Sandesh Phalke", "", "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137", "s.phalke@iiitdwd.ac.in"),
//                     person("Dr. Siddharth R", "", "https://www.linkedin.com/in/siddharth-r-85168678", "siddharth_r@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Pratham Mohadikar", "Founder", "https://www.linkedin.com/in/pratham-mohadikar-75061a276", "25bda086@iiitdwd.ac.in"),
//                     person("Apoorva Jadhav", "Founder", "https://www.linkedin.com/in/apoorva-jadhav-57ba12370", "25bcs018@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "Fuelwise",
//             "LOGISTICS TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/fuelwise.png",
//             "",
//             "",
//             "Fuelwise is route-based fuel cost optimisation software for B2B logistics companies, helping them identify where along a route they should refuel to spend the least on fuel.",
//             "25bda021@iiitdwd.ac.in",
//             List.of(
//                     person("Pramod Hanmantrao Yelmewad", "", "", "pramodyelmewad@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Ayush Singh", "Founder", "https://www.linkedin.com/in/ayush-singh-3b50b1382", "25bda021@iiitdwd.ac.in"),
//                     person("Ganesh Shamrao Gore", "Founder", "https://www.linkedin.com/in/ganesh-gore-226564379", "25bcs047@iiitdwd.ac.in"),
//                     person("Aditya Rathaur", "Founder", "https://www.linkedin.com/in/aditya-rathaur-91a12537b", "25bda006@iiitdwd.ac.in"),
//                     person("Nilesh Dharmendra Mahajan", "Founder", "https://www.linkedin.com/in/nilesh-mahajan-62b7ab369", "25bcs105@iiitdwd.ac.in")
//             ),
//             List.of()
//     );

//     saveStartup(
//             "Rescrapx",
//             "AUTO TECH",
//             StartupCategory.PRE_INCUBATED,
//             "/startups/logo/rescrapx.png",
//             "",
//             "",
//             "Rescrapx is building a safe and transparent platform for car scrapping, helping users scrap their vehicles through a more reliable and structured process.",
//             "25bda112@iiitdwd.ac.in",
//             List.of(
//                     person("Dr. Manjunath Vanahalli", "", "https://www.linkedin.com/in/manjunath-vanahalli-4b24ab69", "manjunathkv@iiitdwd.ac.in")
//             ),
//             List.of(
//                     person("Shubham Mavi", "Founder", "https://www.linkedin.com/in/shubham-mavi-051901381", "25bda112@iiitdwd.ac.in"),
//                     person("Anil Gurjar", "Founder", "https://www.linkedin.com/in/anil-gurjar-4b0857326", "24bds004@iiitdwd.ac.in")
//             ),
//             List.of()
//     );
// }

// private void saveStartup(String name, String sector, StartupCategory category, String logo, String website, String onePager, String brief, String contactEmail, List<StartupPerson> techFacultyMentors, List<StartupPerson> founders, List<StartupPerson> teamMembers) {
//     startupRepository.save(Startup.builder()
//             .name(name)
//             .sector(sector)
//             .category(category)
//             .logo(logo)
//             .website(website)
//             .onePager(onePager)
//             .brief(brief)
//             .contactEmail(contactEmail)
//             .techFacultyMentors(techFacultyMentors)
//             .founders(founders)
//             .teamMembers(teamMembers)
//             .build());
// }

// private StartupPerson person(String name, String role, String linkedin, String email) {
//     return StartupPerson.builder()
//             .name(name)
//             .role(role)
//             .linkedin(linkedin)
//             .email(email)
//             .build();
// }

// private void seedEvents() {
//     if (eventRepository.count() > 0) return;

//     // Event 1: Startup School Series 8
//     eventRepository.save(Event.builder()
//             .slug("startup-school-series-8-strategic-pricing")
//             .title("Startup School Series 8")
//             .category("Workshop")
//             .description("Pricing is one of the most critical yet challenging aspects of building a successful startup. This session will help participants understand how to strategically price products and align value with customer expectations.")
//             .startDate(LocalDate.parse("2026-04-25"))
//             .endDate(LocalDate.parse("2026-04-25"))
//             .displayDate("April 25, 2026")
//             .time("10:30 AM – 12:00 PM")
//             .location("Google Meet")
//             .mode("Online")
//             .image("/events/brochures/startup_school_8.jpeg")
//             .imageFit("contain")
//             .registerUrl("https://meet.google.com/pkk-dmvo-qwk")
//             .visible(true)
//             .gallery(new ArrayList<>())
//             .build());

//     // Event 2: Hack2Future Hackathon
//     eventRepository.save(Event.builder()
//             .slug("hack2future-hackathon-2026")
//             .title("Hack2Future Hackathon 2026")
//             .category("Hackathon")
//             .description("A two-day hackathon held on 4th and 5th April 2026, sponsored by IDRP, bringing together students and innovators for collaborative problem-solving and prototype development.")
//             .startDate(LocalDate.parse("2026-04-04"))
//             .endDate(LocalDate.parse("2026-04-05"))
//             .displayDate("April 4–5, 2026")
//             .time("2 Days")
//             .location("IIIT Dharwad")
//             .mode("Offline")
//             .image("/events/gallery/hack2future/cover.JPG")
//             .imageFit("cover")
//             .visible(true)
//             .gallery(List.of(
//                     "/events/gallery/hack2future/1.JPG",
//                     "/events/gallery/hack2future/2.JPG",
//                     "/events/gallery/hack2future/3.JPG",
//                     "/events/gallery/hack2future/4.JPG"
//             ))
//             .build());

//     // Event 3: Yuva Udhyami Cohort Announcement
//     eventRepository.save(Event.builder()
//             .slug("yuva-udhyami-cohort-announcement-2026")
//             .title("Yuva Udhyami Cohort Announcement")
//             .category("Program")
//             .description("The Yuva Udhyami cohort announcement event marked the selection of promising student-led startups for the pre-incubation program, bringing together innovators, mentors, and the IDRP ecosystem.")
//             .startDate(LocalDate.parse("2026-04-07"))
//             .endDate(LocalDate.parse("2026-04-07"))
//             .displayDate("April 7, 2026")
//             .location("IIIT Dharwad")
//             .mode("Offline")
//             .image("/events/gallery/yuva_udyami_cohort_2026/cover.JPG")
//             .imageFit("cover")
//             .visible(true)
//             .gallery(List.of(
//                     "/events/gallery/yuva_udyami_cohort_2026/1.JPG",
//                     "/events/gallery/yuva_udyami_cohort_2026/2.JPG",
//                     "/events/gallery/yuva_udyami_cohort_2026/3.JPG",
//                     "/events/gallery/yuva_udyami_cohort_2026/4.JPG"
//             ))
//             .build());
// }
// }