package com.idrp.backend.service.impl;

import com.idrp.backend.dto.jobapplication.JobApplicationRequestDto;
import com.idrp.backend.dto.jobapplication.JobApplicationResponseDto;
import com.idrp.backend.entity.Job;
import com.idrp.backend.entity.JobApplication;
import com.idrp.backend.exception.DuplicateResourceException;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.JobApplicationRepository;
import com.idrp.backend.repository.JobRepository;
import com.idrp.backend.service.JobApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class JobApplicationServiceImpl implements JobApplicationService {

    private final JobApplicationRepository jobApplicationRepository;
    private final JobRepository jobRepository;

    @Override
    @Transactional
    public JobApplicationResponseDto createJobApplication(JobApplicationRequestDto requestDto) {
        Job job = jobRepository.findById(requestDto.getJobId())
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + requestDto.getJobId()));

        if (jobApplicationRepository.existsByEmailAndJobId(requestDto.getEmail(), requestDto.getJobId())) {
            throw new DuplicateResourceException(
                    "An application already exists for this job with email: " + requestDto.getEmail()
            );
        }

        JobApplication jobApplication = mapToEntity(requestDto, job);
        JobApplication savedJobApplication = jobApplicationRepository.save(jobApplication);

        return mapToResponseDto(savedJobApplication);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<JobApplicationResponseDto> getAllJobApplications(int page, int size, Long jobId) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "submittedAt"));

        Page<JobApplication> jobApplications = jobId != null
                ? jobApplicationRepository.findByJobId(jobId, pageable)
                : jobApplicationRepository.findAll(pageable);

        return jobApplications.map(this::mapToResponseDto);
    }

    @Override
    @Transactional(readOnly = true)
    public JobApplicationResponseDto getJobApplicationById(Long id) {
        JobApplication jobApplication = jobApplicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job application not found with id: " + id));

        return mapToResponseDto(jobApplication);
    }

    @Override
    @Transactional
    public void deleteJobApplication(Long id) {
        JobApplication jobApplication = jobApplicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job application not found with id: " + id));

        jobApplicationRepository.delete(jobApplication);
    }

    private JobApplication mapToEntity(JobApplicationRequestDto dto, Job job) {
        return JobApplication.builder()
                .applicantName(dto.getApplicantName())
                .email(dto.getEmail())
                .phone(dto.getPhone())
                .resumeUrl(dto.getResumeUrl())
                .coverLetter(dto.getCoverLetter())
                .job(job)
                .build();
    }

    private JobApplicationResponseDto mapToResponseDto(JobApplication jobApplication) {
        return JobApplicationResponseDto.builder()
                .id(jobApplication.getId())
                .applicantName(jobApplication.getApplicantName())
                .email(jobApplication.getEmail())
                .phone(jobApplication.getPhone())
                .resumeUrl(jobApplication.getResumeUrl())
                .coverLetter(jobApplication.getCoverLetter())
                .jobId(jobApplication.getJob().getId())
                .jobTitle(jobApplication.getJob().getTitle())
                .submittedAt(jobApplication.getSubmittedAt())
                .updatedAt(jobApplication.getUpdatedAt())
                .build();
    }
}
