package com.idrp.backend.repository;

import com.idrp.backend.entity.Mentor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MentorRepository extends JpaRepository<Mentor, Long> {

    boolean existsByEmail(String email);

    boolean existsByEmailAndIdNot(String email, Long id);

    Optional<Mentor> findByEmail(String email);

    Page<Mentor> findAllByActiveTrue(Pageable pageable);

    @Query("SELECT m FROM Mentor m WHERE " +
            "(:activeOnly = false OR m.active = true) AND " +
            "(:search IS NULL OR LOWER(m.name) LIKE LOWER(CONCAT('%', CAST(:search AS string), '%')))")
    Page<Mentor> search(@Param("activeOnly") boolean activeOnly, @Param("search") String search, Pageable pageable);
}