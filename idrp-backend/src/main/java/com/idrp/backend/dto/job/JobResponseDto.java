package com.idrp.backend.dto.job;

import com.idrp.backend.entity.JobStatus;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobResponseDto {

    private Long id;
    private String slug;
    private String title;
    private String department;
    private String location;
    private String employmentType;
    private String description;
    private String eligibility;
    private LocalDate deadline;
    private JobStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
