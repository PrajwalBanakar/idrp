package com.idrp.backend.repository;

import com.idrp.backend.entity.ImpactNumber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImpactNumberRepository extends JpaRepository<ImpactNumber, Long> {
}
