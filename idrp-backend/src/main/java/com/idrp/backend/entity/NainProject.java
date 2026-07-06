package com.idrp.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "nain_projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NainProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Short slug identifying the host institute, e.g. "kleit" - repeated per project
    // rather than normalized into a separate institute table, since the current data
    // has exactly one academic year per institute with no observed variation.
    @Column(name = "institute_key", nullable = false, length = 60)
    private String instituteKey;

    @Column(name = "institute_name", nullable = false, length = 180)
    private String instituteName;

    @Column(name = "institute_city", length = 100)
    private String instituteCity;

    @Column(name = "institute_state", length = 100)
    private String instituteState;

    @Column(name = "institute_description", columnDefinition = "TEXT")
    private String instituteDescription;

    @Column(name = "institute_logo", length = 500)
    private String instituteLogo;

    @Column(name = "academic_year", nullable = false, length = 20)
    private String academicYear;

    // Per-institute-year support team, repeated per project for the same reason as above.
    @Column(name = "pmu_tech_mentor", length = 180)
    private String pmuTechMentor;

    @Column(length = 180)
    private String dia;

    @ElementCollection
    @CollectionTable(name = "nain_project_mis_executives", joinColumns = @JoinColumn(name = "nain_project_id"))
    @Column(name = "mis_executive", length = 180)
    @Builder.Default
    private List<String> misExecutives = new ArrayList<>();

    @Column(name = "nain_coordinator", length = 180)
    private String nainCoordinator;

    @Column(nullable = false, length = 250)
    private String title;

    @Column(name = "faculty_guide_name", length = 180)
    private String facultyGuideName;

    @Column(name = "team_leader_name", length = 180)
    private String teamLeaderName;

    @ElementCollection
    @CollectionTable(name = "nain_project_team_members", joinColumns = @JoinColumn(name = "nain_project_id"))
    @Column(name = "team_member", length = 180)
    @Builder.Default
    private List<String> teamMembers = new ArrayList<>();

    @Column(name = "display_order")
    private Integer displayOrder;

    @Column(nullable = false)
    private Boolean visible;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    public void prePersist() {
        if (visible == null) {
            visible = true;
        }

        if (displayOrder == null) {
            displayOrder = 0;
        }

        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        if (visible == null) {
            visible = true;
        }

        this.updatedAt = LocalDateTime.now();
    }
}
