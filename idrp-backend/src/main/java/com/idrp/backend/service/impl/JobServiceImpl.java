package com.idrp.backend.service.impl;

import com.idrp.backend.dto.job.JobRequestDto;
import com.idrp.backend.dto.job.JobResponseDto;
import com.idrp.backend.entity.Job;
import com.idrp.backend.entity.JobStatus;
import com.idrp.backend.exception.DuplicateResourceException;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.JobRepository;
import com.idrp.backend.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;

    @Override
    @Transactional
    public JobResponseDto createJob(JobRequestDto requestDto) {
        if (jobRepository.existsBySlug(requestDto.getSlug())) {
            throw new DuplicateResourceException("Job already exists with slug: " + requestDto.getSlug());
        }

        Job job = mapToEntity(requestDto);
        Job savedJob = jobRepository.save(job);

        return mapToResponseDto(savedJob);
    }

    @Override
    public Page<JobResponseDto> getAllJobs(int page, int size, JobStatus status, String search) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));

        String normalizedSearch = search != null && !search.isBlank() ? search : null;

        return jobRepository.search(status, normalizedSearch, pageable)
                .map(this::mapToResponseDto);
    }

    @Override
    public JobResponseDto getJobById(Long id) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

        return mapToResponseDto(job);
    }

    @Override
    public JobResponseDto getJobBySlug(String slug) {
        Job job = jobRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with slug: " + slug));

        return mapToResponseDto(job);
    }

    @Override
    @Transactional
    public JobResponseDto updateJob(Long id, JobRequestDto requestDto) {
        Job existingJob = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

        if (jobRepository.existsBySlugAndIdNot(requestDto.getSlug(), id)) {
            throw new DuplicateResourceException("Another job already exists with slug: " + requestDto.getSlug());
        }

        existingJob.setSlug(requestDto.getSlug());
        existingJob.setTitle(requestDto.getTitle());
        existingJob.setDepartment(requestDto.getDepartment());
        existingJob.setLocation(requestDto.getLocation());
        existingJob.setEmploymentType(requestDto.getEmploymentType());
        existingJob.setDescription(requestDto.getDescription());
        existingJob.setEligibility(requestDto.getEligibility());
        existingJob.setDeadline(requestDto.getDeadline());
        existingJob.setStatus(requestDto.getStatus() != null ? requestDto.getStatus() : existingJob.getStatus());

        Job updatedJob = jobRepository.save(existingJob);

        return mapToResponseDto(updatedJob);
    }

    @Override
    @Transactional
    public JobResponseDto closeJob(Long id) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

        job.setStatus(JobStatus.CLOSED);

        return mapToResponseDto(jobRepository.save(job));
    }

    @Override
    @Transactional
    public JobResponseDto reopenJob(Long id) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

        job.setStatus(JobStatus.OPEN);

        return mapToResponseDto(jobRepository.save(job));
    }

    @Override
    @Transactional
    public void deleteJob(Long id) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

        jobRepository.delete(job);
    }

    private Job mapToEntity(JobRequestDto dto) {
        return Job.builder()
                .slug(dto.getSlug())
                .title(dto.getTitle())
                .department(dto.getDepartment())
                .location(dto.getLocation())
                .employmentType(dto.getEmploymentType())
                .description(dto.getDescription())
                .eligibility(dto.getEligibility())
                .deadline(dto.getDeadline())
                .status(dto.getStatus() != null ? dto.getStatus() : JobStatus.OPEN)
                .build();
    }

    private JobResponseDto mapToResponseDto(Job job) {
        return JobResponseDto.builder()
                .id(job.getId())
                .slug(job.getSlug())
                .title(job.getTitle())
                .department(job.getDepartment())
                .location(job.getLocation())
                .employmentType(job.getEmploymentType())
                .description(job.getDescription())
                .eligibility(job.getEligibility())
                .deadline(job.getDeadline())
                .status(job.getStatus())
                .createdAt(job.getCreatedAt())
                .updatedAt(job.getUpdatedAt())
                .build();
    }
}
