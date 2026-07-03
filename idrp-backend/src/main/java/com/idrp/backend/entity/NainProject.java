package com.idrp.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

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

    @Column(nullable = false, length = 180)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "institute_name", nullable = false, length = 180)
    private String instituteName;

    @Column(name = "academic_year", nullable = false, length = 20)
    private String academicYear;

    @Column(length = 500)
    private String image;

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
