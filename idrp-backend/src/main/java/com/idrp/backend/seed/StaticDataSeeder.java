package com.idrp.backend.seed;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.idrp.backend.dto.boardmember.BoardMemberRequestDto;
import com.idrp.backend.dto.coeupdate.CoeUpdateRequestDto;
import com.idrp.backend.dto.event.EventRequestDto;
import com.idrp.backend.dto.galleryimage.GalleryImageRequestDto;
import com.idrp.backend.dto.impactnumber.ImpactNumberRequestDto;
import com.idrp.backend.dto.job.JobRequestDto;
import com.idrp.backend.dto.mentor.MentorRequestDto;
import com.idrp.backend.dto.nainproject.NainProjectRequestDto;
import com.idrp.backend.dto.partner.PartnerRequestDto;
import com.idrp.backend.dto.program.ProgramRequestDto;
import com.idrp.backend.dto.resource.ResourceRequestDto;
import com.idrp.backend.dto.startup.StartupRequestDto;
import com.idrp.backend.dto.teammember.TeamMemberRequestDto;
import com.idrp.backend.entity.*;
import com.idrp.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

/**
 * One-time (per record) idempotent import of the frontend's static content into the
 * database, so the already-verified public APIs return real data instead of nothing.
 * Gated behind app.seed-static-data - never runs unless explicitly enabled, and is
 * never auto-enabled in application-prod.properties.
 *
 * Each module reads its JSON resource under src/main/resources/seed/, looks up each
 * record by its natural key (slug/email/name/title), and updates in place if found or
 * creates if not - safe to run on every startup without duplicating data.
 */
@Component
@RequiredArgsConstructor
@ConditionalOnProperty(name = "app.seed-static-data", havingValue = "true")
public class StaticDataSeeder implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(StaticDataSeeder.class);

    private final StartupRepository startupRepository;
    private final EventRepository eventRepository;
    private final ProgramRepository programRepository;
    private final MentorRepository mentorRepository;
    private final PartnerRepository partnerRepository;
    private final TeamMemberRepository teamMemberRepository;
    private final BoardMemberRepository boardMemberRepository;
    private final ResourceRepository resourceRepository;
    private final JobRepository jobRepository;
    private final GalleryImageRepository galleryImageRepository;
    private final ImpactNumberRepository impactNumberRepository;
    private final NainProjectRepository nainProjectRepository;

    private final ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new JavaTimeModule())
            .disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

    @Override
    public void run(String... args) {
        log.info("app.seed-static-data=true - seeding static frontend content into the database");

        seedStartups();
        seedEvents();
        seedPrograms();
        seedMentors();
        seedPartners();
        seedTeamMembers();
        seedBoardMembers();
        seedResources();
        seedJobs();
        seedGalleryImages();
        seedImpactNumbers();
        seedNainProjects();

        log.info("Static data seeding complete");
    }

    private <T> List<T> readSeedFile(String fileName, TypeReference<List<T>> type) {
        try (InputStream in = new ClassPathResource("seed/" + fileName).getInputStream()) {
            return objectMapper.readValue(in, type);
        } catch (Exception e) {
            log.warn("Could not read seed file {}: {}", fileName, e.getMessage());
            return List.of();
        }
    }

    /** Runs one upsert, logging and skipping on failure instead of aborting the whole batch. */
    private <T> boolean safely(T item, Function<T, Boolean> action, String label) {
        try {
            return action.apply(item);
        } catch (Exception e) {
            log.warn("Failed to seed {} record ({}): {}", label, item, e.getMessage());
            return false;
        }
    }

    private void logSummary(String module, int created, int updated, int total) {
        log.info("Seeded {}: {} created, {} updated, {} total", module, created, updated, total);
    }

    // ---------- Startups ----------
    private void seedStartups() {
        List<StartupRequestDto> items = readSeedFile("startups.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (StartupRequestDto dto : items) {
            Optional<Startup> existing = startupRepository.findByName(dto.getName());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                Startup startup = existing.orElseGet(Startup::new);
                startup.setName(d.getName());
                startup.setSector(d.getSector());
                startup.setCategories(d.getCategories());
                startup.setLogo(d.getLogo());
                startup.setWebsite(d.getWebsite());
                startup.setOnePager(d.getOnePager());
                startup.setBrief(d.getBrief());
                startup.setContactEmail(resolveContactEmail(d, startup));
                startup.setTechFacultyMentors(d.getTechFacultyMentors() != null ? d.getTechFacultyMentors() : new ArrayList<>());
                startup.setFounders(d.getFounders() != null ? d.getFounders() : new ArrayList<>());
                startup.setTeamMembers(d.getTeamMembers() != null ? d.getTeamMembers() : new ArrayList<>());
                startupRepository.save(startup);
                return true;
            }, "Startup");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Startups", created, updated, items.size());
    }

    /**
     * Startup.contactEmail is unique per record, but the source content legitimately
     * lists the same real person (a serial founder or a faculty mentor) as the contact
     * for more than one startup - not a data-entry error, so there's no "correct" distinct
     * email to substitute. Rather than relaxing the unique constraint (which is still a
     * useful guard for the admin-facing create/update APIs), the seeder drops the
     * duplicate down to null for whichever startup didn't claim the email first - every
     * other field (including the real email inside founders/techFacultyMentors) is
     * preserved untouched.
     */
    private String resolveContactEmail(StartupRequestDto dto, Startup startup) {
        String contactEmail = dto.getContactEmail();
        if (contactEmail == null || contactEmail.isBlank()) {
            return contactEmail;
        }
        Optional<Startup> owner = startupRepository.findByContactEmail(contactEmail);
        boolean belongsToAnotherStartup = owner.isPresent()
                && !owner.get().getName().equals(startup.getName());
        if (belongsToAnotherStartup) {
            log.info("Startup '{}' shares contactEmail {} with '{}' - seeding without a top-level contact email for this one (still present on its founders/mentors)",
                    startup.getName(), contactEmail, owner.get().getName());
            return null;
        }
        return contactEmail;
    }

    // ---------- Events ----------
    private void seedEvents() {
        List<EventRequestDto> items = readSeedFile("events.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (EventRequestDto dto : items) {
            Optional<Event> existing = eventRepository.findBySlug(dto.getSlug());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                Event event = existing.orElseGet(Event::new);
                event.setSlug(d.getSlug());
                event.setTitle(d.getTitle());
                event.setCategory(d.getCategory());
                event.setDescription(d.getDescription());
                event.setStartDate(d.getStartDate());
                event.setEndDate(d.getEndDate());
                event.setDisplayDate(d.getDisplayDate());
                event.setTime(d.getTime());
                event.setLocation(d.getLocation());
                event.setMode(d.getMode());
                event.setImage(d.getImage());
                event.setImageFit(d.getImageFit());
                event.setRegisterUrl(d.getRegisterUrl());
                event.setVisible(true);
                event.setGallery(d.getGallery() != null ? d.getGallery() : new ArrayList<>());
                eventRepository.save(event);
                return true;
            }, "Event");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Events", created, updated, items.size());
    }

    // ---------- Programs ----------
    private void seedPrograms() {
        List<ProgramRequestDto> items = readSeedFile("programs.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (ProgramRequestDto dto : items) {
            Optional<Program> existing = programRepository.findByProgramName(dto.getProgramName());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                Program program = existing.orElseGet(Program::new);
                program.setProgramName(d.getProgramName());
                program.setCategory(d.getCategory());
                program.setDuration(d.getDuration());
                program.setMode(d.getMode());
                program.setEligibility(d.getEligibility());
                program.setDescription(d.getDescription());
                program.setBrochureUrl(d.getBrochureUrl());
                program.setApplyUrl(d.getApplyUrl());
                program.setFeatures(d.getFeatures() != null ? d.getFeatures() : new ArrayList<>());
                programRepository.save(program);
                return true;
            }, "Program");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Programs", created, updated, items.size());
    }

    // ---------- Mentors ----------
    private void seedMentors() {
        List<MentorRequestDto> items = readSeedFile("mentors.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (MentorRequestDto dto : items) {
            Optional<Mentor> existing = mentorRepository.findByEmail(dto.getEmail());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                Mentor mentor = existing.orElseGet(Mentor::new);
                mentor.setName(d.getName());
                mentor.setEmail(d.getEmail());
                mentor.setPhone(d.getPhone());
                mentor.setDesignation(d.getDesignation());
                mentor.setOrganization(d.getOrganization());
                mentor.setExpertise(d.getExpertise());
                mentor.setBio(d.getBio());
                mentor.setLinkedinUrl(d.getLinkedinUrl());
                mentor.setProfileImageUrl(d.getProfileImageUrl());
                mentor.setActive(d.getActive() != null ? d.getActive() : true);
                mentorRepository.save(mentor);
                return true;
            }, "Mentor");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Mentors", created, updated, items.size());
    }

    // ---------- Partners ----------
    private void seedPartners() {
        List<PartnerRequestDto> items = readSeedFile("partners.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (PartnerRequestDto dto : items) {
            Optional<Partner> existing = partnerRepository.findByName(dto.getName());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                Partner partner = existing.orElseGet(Partner::new);
                partner.setName(d.getName());
                partner.setCategory(d.getCategory());
                partner.setWebsiteUrl(d.getWebsiteUrl());
                partner.setLogoUrl(d.getLogoUrl());
                partner.setDescription(d.getDescription());
                partner.setContactPerson(d.getContactPerson());
                partner.setContactEmail(d.getContactEmail());
                partner.setContactPhone(d.getContactPhone());
                partner.setActive(d.getActive() != null ? d.getActive() : true);
                partnerRepository.save(partner);
                return true;
            }, "Partner");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Partners", created, updated, items.size());
    }

    // ---------- Team members ----------
    private void seedTeamMembers() {
        List<TeamMemberRequestDto> items = readSeedFile("team-members.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (TeamMemberRequestDto dto : items) {
            Optional<TeamMember> existing = teamMemberRepository.findByEmail(dto.getEmail());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                TeamMember member = existing.orElseGet(TeamMember::new);
                member.setName(d.getName());
                member.setDesignation(d.getDesignation());
                member.setDepartment(d.getDepartment());
                member.setBio(d.getBio());
                member.setEmail(d.getEmail());
                member.setPhone(d.getPhone());
                member.setProfileImageUrl(d.getProfileImageUrl());
                member.setLinkedinUrl(d.getLinkedinUrl());
                member.setDisplayOrder(d.getDisplayOrder() != null ? d.getDisplayOrder() : 0);
                member.setActive(d.getActive() != null ? d.getActive() : true);
                teamMemberRepository.save(member);
                return true;
            }, "TeamMember");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Team members", created, updated, items.size());
    }

    // ---------- Board members ----------
    private void seedBoardMembers() {
        List<BoardMemberRequestDto> items = readSeedFile("board-members.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (BoardMemberRequestDto dto : items) {
            Optional<BoardMember> existing = boardMemberRepository.findByEmail(dto.getEmail());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                BoardMember member = existing.orElseGet(BoardMember::new);
                member.setName(d.getName());
                member.setDesignation(d.getDesignation());
                member.setBoardType(d.getBoardType());
                member.setOrganization(d.getOrganization());
                member.setBio(d.getBio());
                member.setEmail(d.getEmail());
                member.setPhone(d.getPhone());
                member.setProfileImageUrl(d.getProfileImageUrl());
                member.setLinkedinUrl(d.getLinkedinUrl());
                member.setDisplayOrder(d.getDisplayOrder() != null ? d.getDisplayOrder() : 0);
                member.setActive(d.getActive() != null ? d.getActive() : true);
                boardMemberRepository.save(member);
                return true;
            }, "BoardMember");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Board members", created, updated, items.size());
    }

    // ---------- Resources (newsletters) ----------
    private void seedResources() {
        List<ResourceRequestDto> items = readSeedFile("resources.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (ResourceRequestDto dto : items) {
            Optional<Resource> existing = resourceRepository.findBySlug(dto.getSlug());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                Resource resource = existing.orElseGet(Resource::new);
                resource.setTitle(d.getTitle());
                resource.setSlug(d.getSlug());
                resource.setType(d.getType());
                resource.setSummary(d.getSummary());
                resource.setContent(d.getContent());
                resource.setFileUrl(d.getFileUrl());
                resource.setCoverImageUrl(d.getCoverImageUrl());
                resource.setPublishDate(d.getPublishDate());
                resource.setAuthor(d.getAuthor());
                resource.setActive(d.getActive() != null ? d.getActive() : true);
                resource.setDisplayOrder(d.getDisplayOrder() != null ? d.getDisplayOrder() : 0);
                if (resource.getCreatedBy() == null) {
                    resource.setCreatedBy("seed");
                }
                resource.setUpdatedBy("seed");
                resourceRepository.save(resource);
                return true;
            }, "Resource");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Resources", created, updated, items.size());
    }

    // ---------- Jobs ----------
    private void seedJobs() {
        List<JobRequestDto> items = readSeedFile("jobs.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (JobRequestDto dto : items) {
            Optional<Job> existing = jobRepository.findBySlug(dto.getSlug());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                Job job = existing.orElseGet(Job::new);
                job.setSlug(d.getSlug());
                job.setTitle(d.getTitle());
                job.setDepartment(d.getDepartment());
                job.setLocation(d.getLocation());
                job.setEmploymentType(d.getEmploymentType());
                job.setDescription(d.getDescription());
                job.setEligibility(d.getEligibility());
                job.setDeadline(d.getDeadline());
                job.setStatus(d.getStatus() != null ? d.getStatus() : JobStatus.OPEN);
                jobRepository.save(job);
                return true;
            }, "Job");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Jobs", created, updated, items.size());
    }

    // ---------- Gallery images ----------
    private void seedGalleryImages() {
        List<GalleryImageRequestDto> items = readSeedFile("gallery-images.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (GalleryImageRequestDto dto : items) {
            Optional<GalleryImage> existing = galleryImageRepository.findBySectionAndImageUrl(dto.getSection(), dto.getImageUrl());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                GalleryImage image = existing.orElseGet(GalleryImage::new);
                image.setSection(d.getSection());
                image.setImageUrl(d.getImageUrl());
                image.setCaption(d.getCaption());
                image.setDisplayOrder(d.getDisplayOrder() != null ? d.getDisplayOrder() : 0);
                image.setVisible(d.getVisible() != null ? d.getVisible() : true);
                galleryImageRepository.save(image);
                return true;
            }, "GalleryImage");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Gallery images", created, updated, items.size());
    }

    // ---------- Impact numbers ----------
    private void seedImpactNumbers() {
        List<ImpactNumberRequestDto> items = readSeedFile("impact-numbers.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (ImpactNumberRequestDto dto : items) {
            Optional<ImpactNumber> existing = impactNumberRepository.findByLabel(dto.getLabel());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                ImpactNumber number = existing.orElseGet(ImpactNumber::new);
                number.setValue(d.getValue());
                number.setLabel(d.getLabel());
                number.setDisplayOrder(d.getDisplayOrder() != null ? d.getDisplayOrder() : 0);
                number.setVisible(d.getVisible() != null ? d.getVisible() : true);
                impactNumberRepository.save(number);
                return true;
            }, "ImpactNumber");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("Impact numbers", created, updated, items.size());
    }

    // ---------- NAIN projects ----------
    private void seedNainProjects() {
        List<NainProjectRequestDto> items = readSeedFile("nain-projects.json", new TypeReference<>() {});
        int created = 0, updated = 0;
        for (NainProjectRequestDto dto : items) {
            Optional<NainProject> existing = nainProjectRepository.findByInstituteKeyAndAcademicYearAndTitle(
                    dto.getInstituteKey(), dto.getAcademicYear(), dto.getTitle());
            boolean isNew = existing.isEmpty();
            boolean ok = safely(dto, d -> {
                NainProject project = existing.orElseGet(NainProject::new);
                project.setInstituteKey(d.getInstituteKey());
                project.setInstituteName(d.getInstituteName());
                project.setInstituteCity(d.getInstituteCity());
                project.setInstituteState(d.getInstituteState());
                project.setInstituteDescription(d.getInstituteDescription());
                project.setInstituteLogo(d.getInstituteLogo());
                project.setAcademicYear(d.getAcademicYear());
                project.setPmuTechMentor(d.getPmuTechMentor());
                project.setDia(d.getDia());
                project.setMisExecutives(d.getMisExecutives() != null ? d.getMisExecutives() : new ArrayList<>());
                project.setNainCoordinator(d.getNainCoordinator());
                project.setTitle(d.getTitle());
                project.setFacultyGuideName(d.getFacultyGuideName());
                project.setTeamLeaderName(d.getTeamLeaderName());
                project.setTeamMembers(d.getTeamMembers() != null ? d.getTeamMembers() : new ArrayList<>());
                project.setDisplayOrder(d.getDisplayOrder() != null ? d.getDisplayOrder() : 0);
                project.setVisible(d.getVisible() != null ? d.getVisible() : true);
                nainProjectRepository.save(project);
                return true;
            }, "NainProject");
            if (ok) { if (isNew) created++; else updated++; }
        }
        logSummary("NAIN projects", created, updated, items.size());
    }
}
