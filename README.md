# IDRP

Monorepo for the IDRP frontend and backend.

```
idrp/
  idrp-frontend/   Vue 3 + Vite frontend (currently using static data)
  idrp-backend/    Spring Boot backend
```

## Running the frontend

```
cd idrp-frontend
npm install
npm run dev
```

The frontend currently uses static data (see `src/data/`) and is intentionally not wired
up to the backend APIs.

## Running the backend

### Prerequisites

- Java 17+ and Maven
- A running PostgreSQL instance

### Database setup

Use a dedicated, scoped role for the app rather than the postgres superuser:

```sql
CREATE ROLE idrp_app WITH LOGIN PASSWORD '<choose-a-strong-password>';
CREATE DATABASE idrp_db OWNER idrp_app;
-- if the database already existed under a different owner:
GRANT ALL ON SCHEMA public TO idrp_app;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO idrp_app;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO idrp_app;
```

### Configure

```
cd idrp-backend
cp src/main/resources/application.properties.example src/main/resources/application.properties
```

Fill in `application.properties` with your local DB credentials and a generated JWT secret.
This file is gitignored and must never be committed.

### Run

```
cd idrp-backend
mvn spring-boot:run
```

## Notes

- This is a single git repository combining the previously separate idrp-frontend and
  idrp-backend projects and their commit histories.
- Secrets (DB passwords, JWT secret) are never committed — `application.properties` is
  gitignored; use `application.properties.example` as a template.

```
idrp
├─ idrp-backend
│  ├─ .mvn
│  │  └─ wrapper
│  │     └─ maven-wrapper.properties
│  ├─ mvnw
│  ├─ mvnw.cmd
│  ├─ pom.xml
│  ├─ README.md
│  └─ src
│     ├─ main
│     │  ├─ java
│     │  │  └─ com
│     │  │     └─ idrp
│     │  │        └─ backend
│     │  │           ├─ config
│     │  │           │  ├─ DataInitializer.java
│     │  │           │  ├─ JwtAuthenticationFilter.java
│     │  │           │  ├─ SecurityConfig.java
│     │  │           │  └─ WebConfig.java
│     │  │           ├─ controller
│     │  │           │  ├─ AdminController.java
│     │  │           │  ├─ AuthController.java
│     │  │           │  ├─ BoardMemberController.java
│     │  │           │  ├─ CoeUpdateController.java
│     │  │           │  ├─ ContactController.java
│     │  │           │  ├─ CourseRegistrationController.java
│     │  │           │  ├─ EventController.java
│     │  │           │  ├─ EventRegistrationController.java
│     │  │           │  ├─ FileController.java
│     │  │           │  ├─ GalleryImageController.java
│     │  │           │  ├─ ImpactNumberController.java
│     │  │           │  ├─ JobApplicationController.java
│     │  │           │  ├─ JobController.java
│     │  │           │  ├─ MentorController.java
│     │  │           │  ├─ NainProjectController.java
│     │  │           │  ├─ PartnerController.java
│     │  │           │  ├─ ProgramApplicationController.java
│     │  │           │  ├─ ProgramController.java
│     │  │           │  ├─ ResourceController.java
│     │  │           │  ├─ StartupApplicationController.java
│     │  │           │  ├─ StartupController.java
│     │  │           │  └─ TeamMemberController.java
│     │  │           ├─ dto
│     │  │           │  ├─ admin
│     │  │           │  │  ├─ AdminRequestDto.java
│     │  │           │  │  └─ AdminResponseDto.java
│     │  │           │  ├─ auth
│     │  │           │  │  ├─ AdminLoginRequestDto.java
│     │  │           │  │  ├─ AuthResponseDto.java
│     │  │           │  │  ├─ CreateAdminRequestDto.java
│     │  │           │  │  └─ RefreshTokenRequestDto.java
│     │  │           │  ├─ boardmember
│     │  │           │  │  ├─ BoardMemberRequestDto.java
│     │  │           │  │  └─ BoardMemberResponseDto.java
│     │  │           │  ├─ coeupdate
│     │  │           │  │  ├─ CoeUpdateRequestDto.java
│     │  │           │  │  └─ CoeUpdateResponseDto.java
│     │  │           │  ├─ common
│     │  │           │  │  └─ ApiResponse.java
│     │  │           │  ├─ contact
│     │  │           │  │  ├─ ContactRequestDto.java
│     │  │           │  │  └─ ContactResponseDto.java
│     │  │           │  ├─ courseregistration
│     │  │           │  │  ├─ CourseRegistrationRequestDto.java
│     │  │           │  │  └─ CourseRegistrationResponseDto.java
│     │  │           │  ├─ event
│     │  │           │  │  ├─ EventRequestDto.java
│     │  │           │  │  └─ EventResponseDto.java
│     │  │           │  ├─ eventregistration
│     │  │           │  │  ├─ EventRegistrationRequestDto.java
│     │  │           │  │  └─ EventRegistrationResponseDto.java
│     │  │           │  ├─ file
│     │  │           │  │  └─ FileUploadResponseDto.java
│     │  │           │  ├─ galleryimage
│     │  │           │  │  ├─ GalleryImageRequestDto.java
│     │  │           │  │  └─ GalleryImageResponseDto.java
│     │  │           │  ├─ impactnumber
│     │  │           │  │  ├─ ImpactNumberRequestDto.java
│     │  │           │  │  └─ ImpactNumberResponseDto.java
│     │  │           │  ├─ job
│     │  │           │  │  ├─ JobRequestDto.java
│     │  │           │  │  └─ JobResponseDto.java
│     │  │           │  ├─ jobapplication
│     │  │           │  │  ├─ JobApplicationRequestDto.java
│     │  │           │  │  └─ JobApplicationResponseDto.java
│     │  │           │  ├─ mentor
│     │  │           │  │  ├─ MentorRequestDto.java
│     │  │           │  │  └─ MentorResponseDto.java
│     │  │           │  ├─ nainproject
│     │  │           │  │  ├─ NainProjectRequestDto.java
│     │  │           │  │  └─ NainProjectResponseDto.java
│     │  │           │  ├─ partner
│     │  │           │  │  ├─ PartnerRequestDto.java
│     │  │           │  │  └─ PartnerResponseDto.java
│     │  │           │  ├─ program
│     │  │           │  │  ├─ ProgramRequestDto.java
│     │  │           │  │  └─ ProgramResponseDto.java
│     │  │           │  ├─ programapplication
│     │  │           │  │  ├─ ProgramApplicationRequestDto.java
│     │  │           │  │  └─ ProgramApplicationResponseDto.java
│     │  │           │  ├─ resource
│     │  │           │  │  ├─ ResourceRequestDto.java
│     │  │           │  │  └─ ResourceResponseDto.java
│     │  │           │  ├─ startup
│     │  │           │  │  ├─ StartupRequestDto.java
│     │  │           │  │  └─ StartupResponseDto.java
│     │  │           │  ├─ startupapplication
│     │  │           │  │  ├─ StartupApplicationRequestDto.java
│     │  │           │  │  └─ StartupApplicationResponseDto.java
│     │  │           │  └─ teammember
│     │  │           │     ├─ TeamMemberRequestDto.java
│     │  │           │     └─ TeamMemberResponseDto.java
│     │  │           ├─ entity
│     │  │           │  ├─ Admin.java
│     │  │           │  ├─ AdminRole.java
│     │  │           │  ├─ BoardMember.java
│     │  │           │  ├─ CoeUpdate.java
│     │  │           │  ├─ Contact.java
│     │  │           │  ├─ CourseRegistration.java
│     │  │           │  ├─ CourseRegistrationStatus.java
│     │  │           │  ├─ CourseType.java
│     │  │           │  ├─ Event.java
│     │  │           │  ├─ EventRegistration.java
│     │  │           │  ├─ GalleryImage.java
│     │  │           │  ├─ ImpactNumber.java
│     │  │           │  ├─ Job.java
│     │  │           │  ├─ JobApplication.java
│     │  │           │  ├─ JobStatus.java
│     │  │           │  ├─ Mentor.java
│     │  │           │  ├─ NainProject.java
│     │  │           │  ├─ Partner.java
│     │  │           │  ├─ Program.java
│     │  │           │  ├─ ProgramApplication.java
│     │  │           │  ├─ RefreshToken.java
│     │  │           │  ├─ Resource.java
│     │  │           │  ├─ ResourceType.java
│     │  │           │  ├─ Startup.java
│     │  │           │  ├─ StartupApplication.java
│     │  │           │  ├─ StartupApplicationStatus.java
│     │  │           │  ├─ StartupCategory.java
│     │  │           │  ├─ StartupPerson.java
│     │  │           │  └─ TeamMember.java
│     │  │           ├─ exception
│     │  │           │  ├─ DuplicateResourceException.java
│     │  │           │  ├─ GlobalExceptionHandler.java
│     │  │           │  ├─ ResourceNotFoundException.java
│     │  │           │  ├─ TokenExpiredException.java
│     │  │           │  └─ TokenRevokedException.java
│     │  │           ├─ IdrpBackendApplication.java
│     │  │           ├─ repository
│     │  │           │  ├─ AdminRepository.java
│     │  │           │  ├─ BoardMemberRepository.java
│     │  │           │  ├─ CoeUpdateRepository.java
│     │  │           │  ├─ ContactRepository.java
│     │  │           │  ├─ CourseRegistrationRepository.java
│     │  │           │  ├─ EventRegistrationRepository.java
│     │  │           │  ├─ EventRepository.java
│     │  │           │  ├─ GalleryImageRepository.java
│     │  │           │  ├─ ImpactNumberRepository.java
│     │  │           │  ├─ JobApplicationRepository.java
│     │  │           │  ├─ JobRepository.java
│     │  │           │  ├─ MentorRepository.java
│     │  │           │  ├─ NainProjectRepository.java
│     │  │           │  ├─ PartnerRepository.java
│     │  │           │  ├─ ProgramApplicationRepository.java
│     │  │           │  ├─ ProgramRepository.java
│     │  │           │  ├─ RefreshTokenRepository.java
│     │  │           │  ├─ ResourceRepository.java
│     │  │           │  ├─ StartupApplicationRepository.java
│     │  │           │  ├─ StartupRepository.java
│     │  │           │  └─ TeamMemberRepository.java
│     │  │           └─ service
│     │  │              ├─ AdminService.java
│     │  │              ├─ AuthService.java
│     │  │              ├─ BoardMemberService.java
│     │  │              ├─ CoeUpdateService.java
│     │  │              ├─ ContactService.java
│     │  │              ├─ CourseRegistrationService.java
│     │  │              ├─ CustomAdminDetailsService.java
│     │  │              ├─ EventRegistrationService.java
│     │  │              ├─ EventService.java
│     │  │              ├─ FileStorageService.java
│     │  │              ├─ GalleryImageService.java
│     │  │              ├─ ImpactNumberService.java
│     │  │              ├─ impl
│     │  │              │  ├─ AdminServiceImpl.java
│     │  │              │  ├─ AuthServiceImpl.java
│     │  │              │  ├─ BoardMemberServiceImpl.java
│     │  │              │  ├─ CoeUpdateServiceImpl.java
│     │  │              │  ├─ ContactServiceImpl.java
│     │  │              │  ├─ CourseRegistrationServiceImpl.java
│     │  │              │  ├─ EventRegistrationServiceImpl.java
│     │  │              │  ├─ EventServiceImpl.java
│     │  │              │  ├─ FileStorageServiceImpl.java
│     │  │              │  ├─ GalleryImageServiceImpl.java
│     │  │              │  ├─ ImpactNumberServiceImpl.java
│     │  │              │  ├─ JobApplicationServiceImpl.java
│     │  │              │  ├─ JobServiceImpl.java
│     │  │              │  ├─ JwtServiceImpl.java
│     │  │              │  ├─ MentorServiceImpl.java
│     │  │              │  ├─ NainProjectServiceImpl.java
│     │  │              │  ├─ PartnerServiceImpl.java
│     │  │              │  ├─ ProgramApplicationServiceImpl.java
│     │  │              │  ├─ ProgramServiceImpl.java
│     │  │              │  ├─ RefreshTokenServiceImpl.java
│     │  │              │  ├─ ResourceServiceImpl.java
│     │  │              │  ├─ StartupApplicationServiceImpl.java
│     │  │              │  ├─ StartupServiceImpl.java
│     │  │              │  └─ TeamMemberServiceImpl.java
│     │  │              ├─ JobApplicationService.java
│     │  │              ├─ JobService.java
│     │  │              ├─ JwtService.java
│     │  │              ├─ MentorService.java
│     │  │              ├─ NainProjectService.java
│     │  │              ├─ PartnerService.java
│     │  │              ├─ ProgramApplicationService.java
│     │  │              ├─ ProgramService.java
│     │  │              ├─ RefreshTokenService.java
│     │  │              ├─ ResourceService.java
│     │  │              ├─ StartupApplicationService.java
│     │  │              ├─ StartupService.java
│     │  │              └─ TeamMemberService.java
│     │  └─ resources
│     │     ├─ application-prod.properties
│     │     ├─ application.properties
│     │     └─ application.properties.example
│     └─ test
│        └─ java
│           └─ com
│              └─ idrp
│                 └─ backend
│                    └─ IdrpBackendApplicationTests.java
├─ idrp-frontend
│  ├─ .prettierrc.json
│  ├─ env.d.ts
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ about-hero.jfif
│  │  ├─ about-intro.jfif
│  │  ├─ advisory-board-hero.jfif
│  │  ├─ advisory-karthik.jfif
│  │  ├─ advisory-poyni.jfif
│  │  ├─ apply-hero.jfif
│  │  ├─ awards
│  │  │  ├─ cipherion_doordarshan.png
│  │  │  ├─ cipherion_hdb_blue.jpg
│  │  │  ├─ cipherion_onecr.jpg
│  │  │  ├─ coe.jpeg
│  │  │  └─ NeXR.jpeg
│  │  ├─ board-deepak.jfif
│  │  ├─ board-hero.jfif
│  │  ├─ board-prasanna.jfif
│  │  ├─ brochures
│  │  │  ├─ FDP-Brochure.pdf
│  │  │  └─ SDW-Brochure.pdf
│  │  ├─ business-anand.jfif
│  │  ├─ business-mallikarjun.jfif
│  │  ├─ campus
│  │  │  ├─ idrp_5g_lab.jpeg
│  │  │  ├─ idrp_aerial.jpg
│  │  │  ├─ idrp_auditorium.JPG
│  │  │  ├─ idrp_award.jpeg
│  │  │  ├─ idrp_award_2.jpeg
│  │  │  ├─ idrp_award_3.jpeg
│  │  │  ├─ idrp_building.jpg
│  │  │  ├─ idrp_common.jpeg
│  │  │  ├─ idrp_drone.jpeg
│  │  │  ├─ idrp_drone_lab.jpeg
│  │  │  ├─ idrp_entrance.jpeg
│  │  │  ├─ idrp_hero.jpeg
│  │  │  ├─ idrp_meeting.jpeg
│  │  │  ├─ idrp_nlp.jpeg
│  │  │  ├─ idrp_presentation.jpeg
│  │  │  ├─ idrp_Sidarud_Team.JPG
│  │  │  ├─ idrp_speech_lab.jpeg
│  │  │  ├─ idrp_vlsi_lab.jpg
│  │  │  ├─ idrp_workspace.jpeg
│  │  │  └─ idrp_workspace_2.jpeg
│  │  ├─ cbde
│  │  │  ├─ cbde-intro.jpeg
│  │  │  └─ cbde-value.jpeg
│  │  ├─ cbde-hero.jfif
│  │  ├─ cbde-intro.jfif
│  │  ├─ cbde-value.jfif
│  │  ├─ cif
│  │  │  ├─ cif-intro.jpeg
│  │  │  ├─ cif-value.jpeg
│  │  │  ├─ img1.jpeg
│  │  │  ├─ img2.jpeg
│  │  │  ├─ img3.jpeg
│  │  │  ├─ img4.jpeg
│  │  │  ├─ img5.jpeg
│  │  │  ├─ img6.jpeg
│  │  │  ├─ img7.jpeg
│  │  │  ├─ img8.jpeg
│  │  │  └─ img9.jpeg
│  │  ├─ cif-hero.jfif
│  │  ├─ cif-intro.jfif
│  │  ├─ cif-value.jfif
│  │  ├─ consulting-hero.jfif
│  │  ├─ events
│  │  │  ├─ brochures
│  │  │  │  └─ startup_school_8.jpeg
│  │  │  └─ gallery
│  │  │     ├─ hack2future
│  │  │     │  ├─ 1.JPG
│  │  │     │  ├─ 2.JPG
│  │  │     │  ├─ 3.JPG
│  │  │     │  ├─ 4.JPG
│  │  │     │  └─ cover.JPG
│  │  │     └─ yuva_udyami_cohort_2026
│  │  │        ├─ 1.JPG
│  │  │        ├─ 2.JPG
│  │  │        ├─ 3.JPG
│  │  │        ├─ 4.JPG
│  │  │        └─ cover.JPG
│  │  ├─ Faculty Booklet.pdf
│  │  ├─ faculty-abdul.jfif
│  │  ├─ faculty-anushree.jfif
│  │  ├─ faculty-girish.jfif
│  │  ├─ faculty-jagadish.jfif
│  │  ├─ faculty-krishnendu.jfif
│  │  ├─ faculty-malay.jfif
│  │  ├─ faculty-manjunath.jfif
│  │  ├─ faculty-nataraj.jfif
│  │  ├─ faculty-pankaj.jfif
│  │  ├─ faculty-prabhu.jfif
│  │  ├─ faculty-prakash.jfif
│  │  ├─ faculty-rajesh.jfif
│  │  ├─ faculty-sandesh.jfif
│  │  ├─ faculty-shirshendu.jfif
│  │  ├─ faculty-sibasankar.jfif
│  │  ├─ faculty-siddharth.jfif
│  │  ├─ faculty-sunil.jfif
│  │  ├─ faculty-sunilck.jfif
│  │  ├─ faculty-sunilkumar.jfif
│  │  ├─ faculty-suvadip.jfif
│  │  ├─ faculty-vivekraj.jfif
│  │  ├─ hero1.jfif
│  │  ├─ hero2.jfif
│  │  ├─ hero3.jfif
│  │  ├─ idrp.jfif
│  │  ├─ iiitd.webp
│  │  ├─ incubation-hero.jfif
│  │  ├─ incubation-intro.jfif
│  │  ├─ incubation-value.jfif
│  │  ├─ industry-research-hero.jfif
│  │  ├─ investment-committee-hero.jfif
│  │  ├─ investor-matchmaking-hero.jfif
│  │  ├─ matchmaking-hero.jfif
│  │  ├─ mentors
│  │  │  ├─ business-ambarish.jpg
│  │  │  ├─ business-ram.jpg
│  │  │  ├─ business-ravi.jpg
│  │  │  ├─ business-ravishankar.jpg
│  │  │  ├─ business-rk.jpeg
│  │  │  ├─ business-santosh.jpeg
│  │  │  ├─ business-sasikumar.jpeg
│  │  │  ├─ business-shashi.jpeg
│  │  │  ├─ business-subhas.jpeg
│  │  │  └─ chetan_khosla.jfif
│  │  ├─ mentors-hero.jfif
│  │  ├─ nain
│  │  │  ├─ img1.jpeg
│  │  │  ├─ img2.jpeg
│  │  │  ├─ img3.jpeg
│  │  │  └─ img4.jpeg
│  │  ├─ nain-hero.jfif
│  │  ├─ nain-intro.jfif
│  │  ├─ nain-value.jfif
│  │  ├─ newsletters
│  │  │  ├─ 01-jan-mar-2025-edition.pdf
│  │  │  ├─ 02-apr-jun-2025-edition.pdf
│  │  │  ├─ 03-jul-sep-2025-edition.pdf
│  │  │  ├─ 04-oct-dec-2025-edition.pdf
│  │  │  └─ 05-jan-mar-2026-edition.pdf
│  │  ├─ partners
│  │  │  ├─ 100x.png
│  │  │  ├─ bec.png
│  │  │  ├─ biet.png
│  │  │  ├─ bldeacet.png
│  │  │  ├─ boltstart.jpeg
│  │  │  ├─ campusfund.png
│  │  │  ├─ cii.png
│  │  │  ├─ cocreate.png
│  │  │  ├─ culkey.png
│  │  │  ├─ cxfirst.png
│  │  │  ├─ cyseck.png
│  │  │  ├─ deshpande.png
│  │  │  ├─ dimhans.png
│  │  │  ├─ dkte.png
│  │  │  ├─ docketrun.jpeg
│  │  │  ├─ ekstep.png
│  │  │  ├─ faso.png
│  │  │  ├─ fuel.png
│  │  │  ├─ futurewiz.png
│  │  │  ├─ gmu.png
│  │  │  ├─ hal.jpeg
│  │  │  ├─ hhh.png
│  │  │  ├─ ideck.png
│  │  │  ├─ imerit.png
│  │  │  ├─ infosys.png
│  │  │  ├─ jcer.png
│  │  │  ├─ jit.png
│  │  │  ├─ jsw.png
│  │  │  ├─ keonics.png
│  │  │  ├─ kleit.png
│  │  │  ├─ klepharm.png
│  │  │  ├─ maven.png
│  │  │  ├─ mbrdi.png
│  │  │  ├─ mgrdpru.jpeg
│  │  │  ├─ mitk.png
│  │  │  ├─ nanopix.png
│  │  │  ├─ pda.png
│  │  │  ├─ qpiai.png
│  │  │  ├─ rcu.png
│  │  │  ├─ rnsit.png
│  │  │  ├─ rvvlsi.png
│  │  │  ├─ sandeepani.png
│  │  │  ├─ sankalp.png
│  │  │  ├─ sbi.png
│  │  │  ├─ seafund.png
│  │  │  ├─ ses.jpeg
│  │  │  ├─ sgbit.png
│  │  │  ├─ shridevi.png
│  │  │  ├─ sksvmacet.png
│  │  │  ├─ smvitm.png
│  │  │  ├─ stpi.png
│  │  │  ├─ talkinglands.png
│  │  │  ├─ teamlease-edtech.png
│  │  │  ├─ tessolve.png
│  │  │  ├─ tie.png
│  │  │  ├─ ubdtce.png
│  │  │  ├─ vakil.png
│  │  │  ├─ vidya.png
│  │  │  ├─ vsm.png
│  │  │  ├─ vtu.png
│  │  │  ├─ xcel.png
│  │  │  └─ zoho.png
│  │  ├─ partners-hero.jfif
│  │  ├─ prototype-development-hero.jfif
│  │  ├─ quantum-ai
│  │  │  └─ quantum-ai-intro.jpeg
│  │  ├─ quantum-ai-hero.jfif
│  │  ├─ quantum-ai-intro.jfif
│  │  ├─ quantum-ai-value.jfif
│  │  ├─ resources-hero.jfif
│  │  ├─ rgep
│  │  │  └─ rgep-intro.jpeg
│  │  ├─ services.jpg
│  │  ├─ startup-matchmaking-hero.jfif
│  │  ├─ startups
│  │  │  ├─ logo
│  │  │  │  ├─ bookmyturf.png
│  │  │  │  ├─ cipherion.png
│  │  │  │  ├─ cre8hub.png
│  │  │  │  ├─ c_3.jpg
│  │  │  │  ├─ deep_traits.PNG
│  │  │  │  ├─ evento.png
│  │  │  │  ├─ Friend In Fog.png
│  │  │  │  ├─ heyattrangi.jpeg
│  │  │  │  ├─ Jnanasetu.png
│  │  │  │  ├─ Kisan_Voice.png
│  │  │  │  ├─ MediRaksha.png
│  │  │  │  ├─ MLera.png
│  │  │  │  ├─ Natanasvara.jpg
│  │  │  │  ├─ Neuraforesight.jpeg
│  │  │  │  ├─ NeXR.jpeg
│  │  │  │  ├─ removation.jpeg
│  │  │  │  ├─ Smart Nest.png
│  │  │  │  ├─ Sparkle Studio.jpeg
│  │  │  │  ├─ sphuranex.jpeg
│  │  │  │  ├─ Step-In.jpg
│  │  │  │  ├─ trividhi.jpeg
│  │  │  │  ├─ Vayucharge.jpeg
│  │  │  │  ├─ VGyan.png
│  │  │  │  └─ Vocal Drone.jpeg
│  │  │  └─ people
│  │  │     ├─ chetechs
│  │  │     │  ├─ khusal.pdf
│  │  │     │  └─ pulkit.pdf
│  │  │     └─ freshdot
│  │  │        └─ moksh.pdf
│  │  ├─ team-darshana.jpeg
│  │  ├─ team-hero.jfif
│  │  ├─ team-lokesh.jpeg
│  │  ├─ team-neha.jpeg
│  │  ├─ team-prajwal.jpeg
│  │  ├─ team-rakshata.jpeg
│  │  ├─ team-ravi.jpeg
│  │  ├─ team-reshma.jpeg
│  │  ├─ team-sunita.jpeg
│  │  ├─ technical-education-academy-hero.jfif
│  │  ├─ technology-preetham.jfif
│  │  ├─ udyami
│  │  │  ├─ udyami-intro.jpeg
│  │  │  ├─ udyami-value.jpeg
│  │  │  └─ udyami_brochure.pdf
│  │  ├─ vision-community.jfif
│  │  ├─ vision-innovation.jpeg
│  │  ├─ vision-resources.jfif
│  │  └─ yuva-udyami
│  │     ├─ yuva-udyami-intro.JPG
│  │     ├─ yuva-udyami-value.jpeg
│  │     └─ yuva_udyami_brochure.pdf
│  ├─ README.md
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ components
│  │  │  ├─ about
│  │  │  │  ├─ AboutCampusGallerySection.vue
│  │  │  │  ├─ AboutCTASection.vue
│  │  │  │  ├─ AboutHeroSection.vue
│  │  │  │  ├─ AboutIntroSection.vue
│  │  │  │  ├─ AboutMissionVisionSection.vue
│  │  │  │  ├─ AboutOfferingsSection.vue
│  │  │  │  ├─ AboutReasonsSection.vue
│  │  │  │  ├─ AboutTimelineSection.vue
│  │  │  │  └─ AboutVisionSection.vue
│  │  │  ├─ academy
│  │  │  │  ├─ AcademyCategoriesSection.vue
│  │  │  │  ├─ AcademyFormSection.vue
│  │  │  │  ├─ CourseApplyFormSection.vue
│  │  │  │  ├─ CourseApplyHeroSection.vue
│  │  │  │  ├─ CourseApplyNotFound.vue
│  │  │  │  ├─ CourseAudienceSection.vue
│  │  │  │  ├─ CourseCard.vue
│  │  │  │  ├─ CourseDetailCTASection.vue
│  │  │  │  ├─ CourseDetailHeroSection.vue
│  │  │  │  ├─ CourseDetailNotFound.vue
│  │  │  │  ├─ CourseDetailOverviewSection.vue
│  │  │  │  ├─ CourseHighlightsSection.vue
│  │  │  │  └─ WorkshopApplyFormSection.vue
│  │  │  ├─ admin
│  │  │  │  └─ AdminLayout.vue
│  │  │  ├─ AppLayout.vue
│  │  │  ├─ application
│  │  │  │  ├─ ApplicationFormSection.vue
│  │  │  │  ├─ ApplicationHeroSection.vue
│  │  │  │  └─ ApplicationSidebarSection.vue
│  │  │  ├─ careers
│  │  │  │  └─ JobCard.vue
│  │  │  ├─ common
│  │  │  │  ├─ BaseHeroSection.vue
│  │  │  │  ├─ BeneficiariesSection.vue
│  │  │  │  ├─ FocusSection.vue
│  │  │  │  └─ ImageGallerySection.vue
│  │  │  ├─ contact
│  │  │  │  ├─ ContactFormSection.vue
│  │  │  │  ├─ ContactHeroSection.vue
│  │  │  │  ├─ ContactInfoSection.vue
│  │  │  │  └─ ContactSocialLinks.vue
│  │  │  ├─ events
│  │  │  │  ├─ EventCard.vue
│  │  │  │  ├─ EventGalleryModal.vue
│  │  │  │  ├─ EventGallerySection.vue
│  │  │  │  ├─ EventRegistrationFormSection.vue
│  │  │  │  ├─ EventRegistrationHeader.vue
│  │  │  │  ├─ EventRegistrationNotFound.vue
│  │  │  │  ├─ EventRegistrationSuccess.vue
│  │  │  │  ├─ EventsCTASection.vue
│  │  │  │  ├─ EventsHeroSection.vue
│  │  │  │  └─ EventsSection.vue
│  │  │  ├─ forms
│  │  │  │  ├─ BaseForm.vue
│  │  │  │  └─ GenericFormSection.vue
│  │  │  ├─ home
│  │  │  │  ├─ ApproachSection.vue
│  │  │  │  ├─ AwardsSection.vue
│  │  │  │  ├─ CourseSection.vue
│  │  │  │  ├─ CTASection.vue
│  │  │  │  ├─ HeroSection.vue
│  │  │  │  ├─ ImpactSection.vue
│  │  │  │  ├─ PartnersSection.vue
│  │  │  │  ├─ ProgramsSection.vue
│  │  │  │  ├─ ServicesSection.vue
│  │  │  │  └─ SuccessStoriesSection.vue
│  │  │  ├─ mentors
│  │  │  │  ├─ MentorCard.vue
│  │  │  │  ├─ MentorsCTASection.vue
│  │  │  │  ├─ MentorsGridSection.vue
│  │  │  │  ├─ MentorsHeroSection.vue
│  │  │  │  ├─ MentorsIntroSection.vue
│  │  │  │  └─ MentorsSearchSection.vue
│  │  │  ├─ nain
│  │  │  │  ├─ NainCTASection.vue
│  │  │  │  ├─ NainFilters.vue
│  │  │  │  ├─ NainGallerySection.vue
│  │  │  │  ├─ NainHeroSection.vue
│  │  │  │  ├─ NainInstituteCard.vue
│  │  │  │  ├─ NainInstitutesSection.vue
│  │  │  │  └─ NainOverviewSection.vue
│  │  │  ├─ partners
│  │  │  │  ├─ PartnerCard.vue
│  │  │  │  ├─ PartnerFormSection.vue
│  │  │  │  ├─ PartnersGridSection.vue
│  │  │  │  ├─ PartnersHeroSection.vue
│  │  │  │  └─ PartnersIntroSection.vue
│  │  │  ├─ program
│  │  │  │  ├─ ProgramCard.vue
│  │  │  │  ├─ ProgramCTASection.vue
│  │  │  │  ├─ ProgramHeroSection.vue
│  │  │  │  ├─ ProgramIntroSection.vue
│  │  │  │  ├─ ProgramTracksSection.vue
│  │  │  │  └─ ProgramValueSection.vue
│  │  │  ├─ resources
│  │  │  │  ├─ MatchmakingSection.vue
│  │  │  │  ├─ NewsletterBookshelfSection.vue
│  │  │  │  ├─ NewsletterDetailNotFound.vue
│  │  │  │  ├─ NewsletterReaderBook.vue
│  │  │  │  ├─ NewsletterReaderHeader.vue
│  │  │  │  ├─ PdfPageCanvas.vue
│  │  │  │  ├─ ResourceCategoriesSection.vue
│  │  │  │  ├─ ResourcesCTASection.vue
│  │  │  │  ├─ ResourcesHeroSection.vue
│  │  │  │  └─ ResourcesIntroSection.vue
│  │  │  ├─ services
│  │  │  │  ├─ ServiceCTASection.vue
│  │  │  │  ├─ ServiceFormSection.vue
│  │  │  │  ├─ ServiceHeroSection.vue
│  │  │  │  ├─ ServiceHighlightsSection.vue
│  │  │  │  ├─ ServiceIntroSection.vue
│  │  │  │  └─ ServiceStatsSection.vue
│  │  │  ├─ startups
│  │  │  │  ├─ StartupCard.vue
│  │  │  │  ├─ StartupGallerySection.vue
│  │  │  │  ├─ StartupsCTASection.vue
│  │  │  │  ├─ StartupsHeroSection.vue
│  │  │  │  ├─ StartupsIntroSection.vue
│  │  │  │  └─ StartupsPortfolioSection.vue
│  │  │  └─ team
│  │  │     ├─ TeamCTASection.vue
│  │  │     ├─ TeamGridSection.vue
│  │  │     ├─ TeamHeroSection.vue
│  │  │     ├─ TeamIntroSection.vue
│  │  │     └─ TeamMemberCard.vue
│  │  ├─ composables
│  │  │  ├─ useForm.ts
│  │  │  └─ useNain.ts
│  │  ├─ data
│  │  │  ├─ about.ts
│  │  │  ├─ academyCatalog.ts
│  │  │  ├─ application.ts
│  │  │  ├─ careers.ts
│  │  │  ├─ cbde.ts
│  │  │  ├─ cbdeExtra.ts
│  │  │  ├─ cif.ts
│  │  │  ├─ cifExtra.ts
│  │  │  ├─ contact.ts
│  │  │  ├─ events.ts
│  │  │  ├─ forms
│  │  │  │  ├─ applicationForm.ts
│  │  │  │  ├─ contactForm.ts
│  │  │  │  ├─ courseApplyForm.ts
│  │  │  │  ├─ eventRegistrationForm.ts
│  │  │  │  ├─ investorMatchmakingForm.ts
│  │  │  │  ├─ partnerForm.ts
│  │  │  │  ├─ serviceForm.ts
│  │  │  │  ├─ startupMatchmakingForm.ts
│  │  │  │  └─ workshopApplyForm.ts
│  │  │  ├─ home.ts
│  │  │  ├─ incubation.ts
│  │  │  ├─ industryResearch.ts
│  │  │  ├─ investmentCommittee.ts
│  │  │  ├─ matchmaking.ts
│  │  │  ├─ mentors.ts
│  │  │  ├─ nain.ts
│  │  │  ├─ newsletters.ts
│  │  │  ├─ partners.ts
│  │  │  ├─ preIncubation.ts
│  │  │  ├─ programCatalog.ts
│  │  │  ├─ quantumAI.ts
│  │  │  ├─ quantumAIExtra.ts
│  │  │  ├─ resources.ts
│  │  │  ├─ rgep.ts
│  │  │  ├─ startups.ts
│  │  │  ├─ team.ts
│  │  │  └─ technicalEducationAcademy.ts
│  │  ├─ main.ts
│  │  ├─ router
│  │  │  └─ index.ts
│  │  ├─ services
│  │  │  ├─ authService.ts
│  │  │  ├─ boardMemberAdminService.ts
│  │  │  ├─ eventAdminService.ts
│  │  │  ├─ eventService.ts
│  │  │  ├─ fileUploadService.ts
│  │  │  ├─ formService.ts
│  │  │  ├─ mentorAdminService.ts
│  │  │  ├─ partnerAdminService.ts
│  │  │  ├─ programAdminService.ts
│  │  │  ├─ resourceAdminService.ts
│  │  │  ├─ startupAdminService.ts
│  │  │  ├─ startupService.ts
│  │  │  └─ teamMemberAdminService.ts
│  │  ├─ style.css
│  │  ├─ types
│  │  │  ├─ about.ts
│  │  │  ├─ academy.ts
│  │  │  ├─ application.ts
│  │  │  ├─ careers.ts
│  │  │  ├─ contact.ts
│  │  │  ├─ events.ts
│  │  │  ├─ form.ts
│  │  │  ├─ investmentCommittee.ts
│  │  │  ├─ matchmaking.ts
│  │  │  ├─ mentors.ts
│  │  │  ├─ nain.ts
│  │  │  ├─ newsletter.ts
│  │  │  ├─ partners.ts
│  │  │  ├─ program.ts
│  │  │  ├─ resources.ts
│  │  │  ├─ service.ts
│  │  │  ├─ startups.ts
│  │  │  ├─ swiper.d.ts
│  │  │  └─ team.ts
│  │  └─ views
│  │     ├─ AboutView.vue
│  │     ├─ AdminBoardMembersView.vue
│  │     ├─ AdminDashboardView.vue
│  │     ├─ AdminEventsView.vue
│  │     ├─ AdminLoginView.vue
│  │     ├─ AdminMentorsView.vue
│  │     ├─ AdminPartnersView.vue
│  │     ├─ AdminProgramsView.vue
│  │     ├─ AdminResourcesView.vue
│  │     ├─ AdminStartupsView.vue
│  │     ├─ AdminTeamMembersView.vue
│  │     ├─ ApplyView.vue
│  │     ├─ CareerDetailView.vue
│  │     ├─ CareersView.vue
│  │     ├─ CbdeView.vue
│  │     ├─ CertificationCoursesView.vue
│  │     ├─ CifView.vue
│  │     ├─ ContactView.vue
│  │     ├─ CourseApplyView.vue
│  │     ├─ CourseDetailView.vue
│  │     ├─ EventRegistrationView.vue
│  │     ├─ EventsView.vue
│  │     ├─ HomeView.vue
│  │     ├─ IncubationView.vue
│  │     ├─ IndustryResearchView.vue
│  │     ├─ InvestmentCommitteeView.vue
│  │     ├─ InvestorMatchmakingFormView.vue
│  │     ├─ MatchmakingView.vue
│  │     ├─ MentorsView.vue
│  │     ├─ NainView.vue
│  │     ├─ NewsletterDetailView.vue
│  │     ├─ OurPartnersView.vue
│  │     ├─ OurTeamView.vue
│  │     ├─ PreIncubationView.vue
│  │     ├─ QuantumAIView.vue
│  │     ├─ ResourcesView.vue
│  │     ├─ RgepView.vue
│  │     ├─ StartupMatchmakingFormView.vue
│  │     ├─ StartupsView.vue
│  │     ├─ TechnicalEducationAcademyView.vue
│  │     ├─ WorkshopApplyView.vue
│  │     └─ WorkshopsView.vue
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  ├─ vercel.json
│  └─ vite.config.ts
└─ README.md

```