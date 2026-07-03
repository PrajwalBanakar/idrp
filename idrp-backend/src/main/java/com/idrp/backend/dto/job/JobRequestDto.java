package com.idrp.backend.dto.job;

import com.idrp.backend.entity.JobStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobRequestDto {

    @NotBlank(message = "Slug is required")
    @Size(max = 180, message = "Slug must not exceed 180 characters")
    private String slug;

    @NotBlank(message = "Title is required")
    @Size(max = 180, message = "Title must not exceed 180 characters")
    private String title;

    @NotBlank(message = "Department is required")
    @Size(max = 120, message = "Department must not exceed 120 characters")
    private String department;

    @NotBlank(message = "Location is required")
    @Size(max = 150, message = "Location must not exceed 150 characters")
    private String location;

    @NotBlank(message = "Employment type is required")
    @Size(max = 50, message = "Employment type must not exceed 50 characters")
    private String employmentType;

    @NotBlank(message = "Description is required")
    private String description;

    private String eligibility;

    @NotNull(message = "Deadline is required")
    private LocalDate deadline;

    private JobStatus status;
}
