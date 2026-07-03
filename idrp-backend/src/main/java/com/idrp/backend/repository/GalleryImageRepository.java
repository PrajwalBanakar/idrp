package com.idrp.backend.repository;

import com.idrp.backend.entity.GalleryImage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleryImageRepository extends JpaRepository<GalleryImage, Long> {

    Page<GalleryImage> findBySection(String section, Pageable pageable);
}
