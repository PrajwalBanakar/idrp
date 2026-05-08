package com.idrp.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(
        name = "events",
        uniqueConstraints = {
                @UniqueConstraint(name = "uk_events_slug", columnNames = "slug")
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 180)
    private String slug;

    @Column(nullable = false, length = 180)
    private String title;

    @Column(nullable = false, length = 100)
    private String category;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Column(name = "display_date", nullable = false, length = 100)
    private String displayDate;

    @Column(length = 100)
    private String time;

    @Column(nullable = false, length = 150)
    private String location;

    @Column(length = 50)
    private String mode;

    @Column(nullable = false, length = 500)
    private String image;

    @Column(name = "image_fit", length = 20)
    private String imageFit;

    @Column(name = "register_url", length = 500)
    private String registerUrl;

    @Column(nullable = false)
    private Boolean visible;

    @ElementCollection
    @CollectionTable(name = "event_gallery", joinColumns = @JoinColumn(name = "event_id"))
    @Column(name = "image_url", length = 500)
    @Builder.Default
    private List<String> gallery = new ArrayList<>();

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    public void prePersist() {
        if (visible == null) {
            visible = true;
        }

        if (imageFit == null || imageFit.isBlank()) {
            imageFit = "cover";
        }

        if (mode == null || mode.isBlank()) {
            mode = "Offline";
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