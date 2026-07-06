package com.idrp.backend.repository;

import com.idrp.backend.entity.Program;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProgramRepository extends JpaRepository<Program, Long> {

    boolean existsByProgramName(String programName);

    boolean existsByProgramNameAndIdNot(String programName, Long id);

    Optional<Program> findByProgramName(String programName);

    @Query("SELECT p FROM Program p WHERE " +
            "(:category IS NULL OR p.category = :category) AND " +
            "(:search IS NULL OR LOWER(p.programName) LIKE LOWER(CONCAT('%', CAST(:search AS string), '%')))")
    Page<Program> search(@Param("category") String category, @Param("search") String search, Pageable pageable);
}