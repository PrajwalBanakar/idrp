package com.idrp.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "startups")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Startup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(length = 100)
    private String sector;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private StartupCategory category;

    @Column(length = 255)
    private String logo;

    @Column(length = 255)
    private String website;

    @Column(name = "one_pager", length = 255)
    private String onePager;

    @Column(columnDefinition = "TEXT")
    private String brief;

    @Column(name = "contact_email", unique = true, length = 150)
    private String contactEmail;

    @ElementCollection
    @CollectionTable(name = "startup_tech_faculty_mentors", joinColumns = @JoinColumn(name = "startup_id"))
    @Builder.Default
    private List<StartupPerson> techFacultyMentors = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "startup_founders", joinColumns = @JoinColumn(name = "startup_id"))
    @Builder.Default
    private List<StartupPerson> founders = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "startup_team_members", joinColumns = @JoinColumn(name = "startup_id"))
    @Builder.Default
    private List<StartupPerson> teamMembers = new ArrayList<>();

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}