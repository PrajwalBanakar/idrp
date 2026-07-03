package com.idrp.backend.repository;

import com.idrp.backend.entity.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    boolean existsBySlug(String slug);

    boolean existsBySlugAndIdNot(String slug, Long id);

    Page<Event> findByEndDateGreaterThanEqual(LocalDate date, Pageable pageable);

    Page<Event> findByEndDateBefore(LocalDate date, Pageable pageable);
}