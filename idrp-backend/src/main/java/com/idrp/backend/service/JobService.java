package com.idrp.backend.service;

import com.idrp.backend.dto.job.JobRequestDto;
import com.idrp.backend.dto.job.JobResponseDto;
import com.idrp.backend.entity.JobStatus;
import org.springframework.data.domain.Page;

public interface JobService {

    JobResponseDto createJob(JobRequestDto requestDto);

    Page<JobResponseDto> getAllJobs(int page, int size, JobStatus status);

    JobResponseDto getJobById(Long id);

    JobResponseDto getJobBySlug(String slug);

    JobResponseDto updateJob(Long id, JobRequestDto requestDto);

    JobResponseDto closeJob(Long id);

    JobResponseDto reopenJob(Long id);

    void deleteJob(Long id);
}
