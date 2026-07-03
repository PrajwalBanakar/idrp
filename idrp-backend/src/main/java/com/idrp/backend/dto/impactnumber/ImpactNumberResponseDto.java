package com.idrp.backend.dto.impactnumber;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ImpactNumberResponseDto {

    private Long id;
    private String value;
    private String label;
    private Integer displayOrder;
    private Boolean visible;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
