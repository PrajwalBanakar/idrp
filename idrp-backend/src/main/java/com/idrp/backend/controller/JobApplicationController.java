package com.idrp.backend.controller;

import com.idrp.backend.dto.common.ApiResponse;
import com.idrp.backend.dto.jobapplication.JobApplicationRequestDto;
import com.idrp.backend.dto.jobapplication.JobApplicationResponseDto;
import com.idrp.backend.service.JobApplicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/job-applications")
@RequiredArgsConstructor
public class JobApplicationController {

    private final JobApplicationService jobApplicationService;

    @PostMapping
    public ResponseEntity<ApiResponse<JobApplicationResponseDto>> createJobApplication(
            @Valid @RequestBody JobApplicationRequestDto requestDto
    ) {
        JobApplicationResponseDto createdJobApplication =
                jobApplicationService.createJobApplication(requestDto);

        return new ResponseEntity<>(
                ApiResponse.<JobApplicationResponseDto>builder()
                        .success(true)
                        .message("Job application submitted successfully")
                        .data(createdJobApplication)
                        .build(),
                HttpStatus.CREATED
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @GetMapping
    public ResponseEntity<ApiResponse<Page<JobApplicationResponseDto>>> getAllJobApplications(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) Long jobId
    ) {
        Page<JobApplicationResponseDto> jobApplications =
                jobApplicationService.getAllJobApplications(page, size, jobId);

        return ResponseEntity.ok(
                ApiResponse.<Page<JobApplicationResponseDto>>builder()
                        .success(true)
                        .message("Job applications fetched successfully")
                        .data(jobApplications)
                        .build()
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<JobApplicationResponseDto>> getJobApplicationById(
            @PathVariable Long id
    ) {
        JobApplicationResponseDto jobApplication = jobApplicationService.getJobApplicationById(id);

        return ResponseEntity.ok(
                ApiResponse.<JobApplicationResponseDto>builder()
                        .success(true)
                        .message("Job application fetched successfully")
                        .data(jobApplication)
                        .build()
        );
    }

    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteJobApplication(@PathVariable Long id) {
        jobApplicationService.deleteJobApplication(id);

        return ResponseEntity.ok(
                ApiResponse.<Void>builder()
                        .success(true)
                        .message("Job application deleted successfully")
                        .data(null)
                        .build()
        );
    }
}
