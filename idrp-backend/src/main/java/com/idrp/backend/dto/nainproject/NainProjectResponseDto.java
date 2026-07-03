package com.idrp.backend.dto.nainproject;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NainProjectResponseDto {

    private Long id;
    private String title;
    private String description;
    private String instituteName;
    private String academicYear;
    private String image;
    private Integer displayOrder;
    private Boolean visible;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
