package com.idrp.backend.repository;

import com.idrp.backend.entity.NainProject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NainProjectRepository extends JpaRepository<NainProject, Long> {

    Page<NainProject> findAllByVisibleTrue(Pageable pageable);

    Optional<NainProject> findByInstituteKeyAndAcademicYearAndTitle(
            String instituteKey, String academicYear, String title);
}
