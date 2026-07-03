package com.idrp.backend.dto.jobapplication;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobApplicationResponseDto {

    private Long id;
    private String applicantName;
    private String email;
    private String phone;
    private String resumeUrl;
    private String coverLetter;
    private Long jobId;
    private String jobTitle;
    private LocalDateTime submittedAt;
    private LocalDateTime updatedAt;
}
