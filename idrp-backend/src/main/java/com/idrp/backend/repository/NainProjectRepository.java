package com.idrp.backend.repository;

import com.idrp.backend.entity.NainProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NainProjectRepository extends JpaRepository<NainProject, Long> {
}
