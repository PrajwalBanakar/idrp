package com.idrp.backend.dto.program;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProgramResponseDto {

    private Long id;
    private String programName;
    private String category;
    private String duration;
    private String mode;
    private String eligibility;
    private String description;
    private String brochureUrl;
    private String applyUrl;
    private List<String> features;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}