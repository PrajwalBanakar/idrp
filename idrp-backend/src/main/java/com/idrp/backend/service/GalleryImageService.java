package com.idrp.backend.service;

import com.idrp.backend.dto.galleryimage.GalleryImageRequestDto;
import com.idrp.backend.dto.galleryimage.GalleryImageResponseDto;
import org.springframework.data.domain.Page;

public interface GalleryImageService {

    GalleryImageResponseDto createGalleryImage(GalleryImageRequestDto requestDto);

    Page<GalleryImageResponseDto> getAllGalleryImages(int page, int size, String section);

    GalleryImageResponseDto getGalleryImageById(Long id);

    GalleryImageResponseDto updateGalleryImage(Long id, GalleryImageRequestDto requestDto);

    void deleteGalleryImage(Long id);
}
