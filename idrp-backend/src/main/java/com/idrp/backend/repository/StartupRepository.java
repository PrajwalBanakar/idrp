package com.idrp.backend.repository;

import com.idrp.backend.entity.Startup;
import com.idrp.backend.entity.StartupCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StartupRepository extends JpaRepository<Startup, Long> {

    boolean existsByContactEmail(String contactEmail);

    boolean existsByContactEmailAndIdNot(String contactEmail, Long id);

    Optional<Startup> findByName(String name);

    Optional<Startup> findByContactEmail(String contactEmail);

    @Query("SELECT s FROM Startup s WHERE " +
            "(:category IS NULL OR :category MEMBER OF s.categories) AND " +
            "(:search IS NULL OR LOWER(s.name) LIKE LOWER(CONCAT('%', CAST(:search AS string), '%')))")
    Page<Startup> search(@Param("category") StartupCategory category, @Param("search") String search, Pageable pageable);
}