package com.idrp.backend.controller;

import com.idrp.backend.dto.common.ApiResponse;
import com.idrp.backend.dto.job.JobRequestDto;
import com.idrp.backend.dto.job.JobResponseDto;
import com.idrp.backend.entity.JobStatus;
import com.idrp.backend.service.JobService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
public class JobController {

    private final JobService jobService;

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PostMapping
    public ResponseEntity<ApiResponse<JobResponseDto>> createJob(
            @Valid @RequestBody JobRequestDto requestDto
    ) {
        JobResponseDto createdJob = jobService.createJob(requestDto);

        return new ResponseEntity<>(
                ApiResponse.<JobResponseDto>builder()
                        .success(true)
                        .message("Job created successfully")
                        .data(createdJob)
                        .build(),
                HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<JobResponseDto>>> getAllJobs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) JobStatus status,
            @RequestParam(required = false) String search
    ) {
        Page<JobResponseDto> jobs = jobService.getAllJobs(page, size, status, search);

        return ResponseEntity.ok(
                ApiResponse.<Page<JobResponseDto>>builder()
                        .success(true)
                        .message("Jobs fetched successfully")
                        .data(jobs)
                        .build()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<JobResponseDto>> getJobById(@PathVariable Long id) {
        JobResponseDto job = jobService.getJobById(id);

        return ResponseEntity.ok(
                ApiResponse.<JobResponseDto>builder()
                        .success(true)
                        .message("Job fetched successfully")
                        .data(job)
                        .build()
        );
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<ApiResponse<JobResponseDto>> getJobBySlug(@PathVariable String slug) {
        JobResponseDto job = jobService.getJobBySlug(slug);

        return ResponseEntity.ok(
                ApiResponse.<JobResponseDto>builder()
                        .success(true)
                        .message("Job fetched successfully")
                        .data(job)
                        .build()
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<JobResponseDto>> updateJob(
            @PathVariable Long id,
            @Valid @RequestBody JobRequestDto requestDto
    ) {
        JobResponseDto updatedJob = jobService.updateJob(id, requestDto);

        return ResponseEntity.ok(
                ApiResponse.<JobResponseDto>builder()
                        .success(true)
                        .message("Job updated successfully")
                        .data(updatedJob)
                        .build()
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PatchMapping("/{id}/close")
    public ResponseEntity<ApiResponse<JobResponseDto>> closeJob(@PathVariable Long id) {
        JobResponseDto closedJob = jobService.closeJob(id);

        return ResponseEntity.ok(
                ApiResponse.<JobResponseDto>builder()
                        .success(true)
                        .message("Job closed successfully")
                        .data(closedJob)
                        .build()
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PatchMapping("/{id}/reopen")
    public ResponseEntity<ApiResponse<JobResponseDto>> reopenJob(@PathVariable Long id) {
        JobResponseDto reopenedJob = jobService.reopenJob(id);

        return ResponseEntity.ok(
                ApiResponse.<JobResponseDto>builder()
                        .success(true)
                        .message("Job reopened successfully")
                        .data(reopenedJob)
                        .build()
        );
    }

    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteJob(@PathVariable Long id) {
        jobService.deleteJob(id);

        return ResponseEntity.ok(
                ApiResponse.<Void>builder()
                        .success(true)
                        .message("Job deleted successfully")
                        .data(null)
                        .build()
        );
    }
}
