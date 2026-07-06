package com.idrp.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StartupPerson {

    private String name;

    private String role;

    private String linkedin;

    private String email;

    @Column(name = "image_url", length = 500)
    private String imageUrl;
}