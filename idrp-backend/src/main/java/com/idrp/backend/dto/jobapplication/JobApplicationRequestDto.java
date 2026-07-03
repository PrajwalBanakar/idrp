package com.idrp.backend.dto.jobapplication;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobApplicationRequestDto {

    @NotBlank(message = "Applicant name is required")
    @Size(max = 120, message = "Applicant name must not exceed 120 characters")
    private String applicantName;

    @NotBlank(message = "Email is required")
    @Email(message = "Enter a valid email address")
    @Size(max = 150, message = "Email must not exceed 150 characters")
    private String email;

    @Size(max = 20, message = "Phone must not exceed 20 characters")
    private String phone;

    @NotBlank(message = "Resume is required")
    @Size(max = 500, message = "Resume URL must not exceed 500 characters")
    private String resumeUrl;

    private String coverLetter;

    @NotNull(message = "Job id is required")
    private Long jobId;
}
