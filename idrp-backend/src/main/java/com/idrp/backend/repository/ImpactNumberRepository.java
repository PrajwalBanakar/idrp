package com.idrp.backend.repository;

import com.idrp.backend.entity.ImpactNumber;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImpactNumberRepository extends JpaRepository<ImpactNumber, Long> {

    Page<ImpactNumber> findAllByVisibleTrue(Pageable pageable);

    Optional<ImpactNumber> findByLabel(String label);
}
