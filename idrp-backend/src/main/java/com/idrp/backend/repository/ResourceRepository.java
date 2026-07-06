package com.idrp.backend.repository;

import com.idrp.backend.entity.Resource;
import com.idrp.backend.entity.ResourceType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ResourceRepository extends JpaRepository<Resource, Long> {

    boolean existsBySlug(String slug);

    boolean existsBySlugAndIdNot(String slug, Long id);

    Optional<Resource> findBySlug(String slug);

    Page<Resource> findByType(ResourceType type, Pageable pageable);

    Page<Resource> findAllByActiveTrue(Pageable pageable);

    Page<Resource> findByTypeAndActiveTrue(ResourceType type, Pageable pageable);

    @Query("SELECT r FROM Resource r WHERE " +
            "(:activeOnly = false OR r.active = true) AND " +
            "(:type IS NULL OR r.type = :type) AND " +
            "(:search IS NULL OR LOWER(r.title) LIKE LOWER(CONCAT('%', CAST(:search AS string), '%')))")
    Page<Resource> search(
            @Param("activeOnly") boolean activeOnly,
            @Param("type") ResourceType type,
            @Param("search") String search,
            Pageable pageable);

}