package com.idrp.backend.entity;

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
}