package com.idrp.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "refresh_tokens")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Stores SHA-256(rawToken), never the raw value - see util.TokenHasher. Column name
    // kept as "token" (not renamed to token_hash) so no schema migration is needed.
    @Column(name = "token", nullable = false, unique = true, length = 500)
    private String tokenHash;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_id", nullable = false)
    private Admin admin;

    @Column(nullable = false)
    private LocalDateTime expiryDate;

    @Column(nullable = false)
    private boolean revoked;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    // Carries the raw (pre-hash) token back to the caller right after issuance so it
    // can be returned to the client - never persisted, never populated on read.
    @Transient
    private String rawToken;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.revoked = false;
    }
}