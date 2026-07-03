package com.idrp.backend.service;

import com.idrp.backend.dto.jobapplication.JobApplicationRequestDto;
import com.idrp.backend.dto.jobapplication.JobApplicationResponseDto;
import org.springframework.data.domain.Page;

public interface JobApplicationService {

    JobApplicationResponseDto createJobApplication(JobApplicationRequestDto requestDto);

    Page<JobApplicationResponseDto> getAllJobApplications(int page, int size, Long jobId);

    JobApplicationResponseDto getJobApplicationById(Long id);

    void deleteJobApplication(Long id);
}
