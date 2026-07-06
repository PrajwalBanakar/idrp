package com.idrp.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "programs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Program {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "program_name", nullable = false, unique = true, length = 150)
    private String programName;

    @Column(length = 100)
    private String category;

    @Column(length = 100)
    private String duration;

    @Column(length = 50)
    private String mode;

    @Column(length = 255)
    private String eligibility;

    @Column(length = 1000)
    private String description;

    @Column(name = "brochure_url", length = 500)
    private String brochureUrl;

    @Column(name = "apply_url", length = 500)
    private String applyUrl;

    @ElementCollection
    @CollectionTable(name = "program_features", joinColumns = @JoinColumn(name = "program_id"))
    @Column(name = "feature", length = 255)
    @Builder.Default
    private List<String> features = new ArrayList<>();

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