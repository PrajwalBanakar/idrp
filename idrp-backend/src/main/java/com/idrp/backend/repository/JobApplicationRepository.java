package com.idrp.backend.repository;

import com.idrp.backend.entity.JobApplication;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {

    boolean existsByEmailAndJobId(String email, Long jobId);

    boolean existsByEmailAndJobIdAndIdNot(String email, Long jobId, Long id);

    Page<JobApplication> findByJobId(Long jobId, Pageable pageable);
}
