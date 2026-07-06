package com.idrp.backend.repository;

import com.idrp.backend.entity.GalleryImage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GalleryImageRepository extends JpaRepository<GalleryImage, Long> {

    Page<GalleryImage> findBySection(String section, Pageable pageable);

    Page<GalleryImage> findAllByVisibleTrue(Pageable pageable);

    Page<GalleryImage> findBySectionAndVisibleTrue(String section, Pageable pageable);

    Optional<GalleryImage> findBySectionAndImageUrl(String section, String imageUrl);
}
