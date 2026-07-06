package com.idrp.backend.repository;

import com.idrp.backend.entity.CoeUpdate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoeUpdateRepository extends JpaRepository<CoeUpdate, Long> {

    Page<CoeUpdate> findByCoeName(String coeName, Pageable pageable);

    Page<CoeUpdate> findAllByVisibleTrue(Pageable pageable);

    Page<CoeUpdate> findByCoeNameAndVisibleTrue(String coeName, Pageable pageable);
}
