package com.idrp.backend.dto.coeupdate;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CoeUpdateResponseDto {

    private Long id;
    private String coeName;
    private String title;
    private String description;
    private LocalDate updateDate;
    private Boolean visible;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
