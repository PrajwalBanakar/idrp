package com.idrp.backend.repository;

import com.idrp.backend.entity.Startup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StartupRepository extends JpaRepository<Startup, Long> {

    boolean existsByContactEmail(String contactEmail);

    boolean existsByContactEmailAndIdNot(String contactEmail, Long id);
}