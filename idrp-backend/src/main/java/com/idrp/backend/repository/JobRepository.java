package com.idrp.backend.repository;

import com.idrp.backend.entity.Job;
import com.idrp.backend.entity.JobStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

    boolean existsBySlug(String slug);

    boolean existsBySlugAndIdNot(String slug, Long id);

    Optional<Job> findBySlug(String slug);

    Page<Job> findByStatus(JobStatus status, Pageable pageable);
}
