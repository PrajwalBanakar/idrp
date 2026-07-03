package com.idrp.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "coe_updates")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CoeUpdate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Which Centre of Excellence this update belongs to, e.g. "Quantum AI & Computing"
    @Column(name = "coe_name", nullable = false, length = 150)
    private String coeName;

    @Column(nullable = false, length = 180)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "update_date", nullable = false)
    private LocalDate updateDate;

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
