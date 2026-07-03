package com.idrp.backend.service.impl;

import com.idrp.backend.dto.galleryimage.GalleryImageRequestDto;
import com.idrp.backend.dto.galleryimage.GalleryImageResponseDto;
import com.idrp.backend.entity.GalleryImage;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.GalleryImageRepository;
import com.idrp.backend.service.GalleryImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class GalleryImageServiceImpl implements GalleryImageService {

    private final GalleryImageRepository galleryImageRepository;

    @Override
    @Transactional
    public GalleryImageResponseDto createGalleryImage(GalleryImageRequestDto requestDto) {
        GalleryImage galleryImage = mapToEntity(requestDto);
        GalleryImage savedGalleryImage = galleryImageRepository.save(galleryImage);

        return mapToResponseDto(savedGalleryImage);
    }

    @Override
    public Page<GalleryImageResponseDto> getAllGalleryImages(int page, int size, String section) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, "displayOrder"));

        Page<GalleryImage> galleryImages = section != null && !section.isBlank()
                ? galleryImageRepository.findBySection(section, pageable)
                : galleryImageRepository.findAll(pageable);

        return galleryImages.map(this::mapToResponseDto);
    }

    @Override
    public GalleryImageResponseDto getGalleryImageById(Long id) {
        GalleryImage galleryImage = galleryImageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Gallery image not found with id: " + id));

        return mapToResponseDto(galleryImage);
    }

    @Override
    @Transactional
    public GalleryImageResponseDto updateGalleryImage(Long id, GalleryImageRequestDto requestDto) {
        GalleryImage existingGalleryImage = galleryImageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Gallery image not found with id: " + id));

        existingGalleryImage.setSection(requestDto.getSection());
        existingGalleryImage.setImageUrl(requestDto.getImageUrl());
        existingGalleryImage.setCaption(requestDto.getCaption());
        existingGalleryImage.setDisplayOrder(requestDto.getDisplayOrder());
        existingGalleryImage.setVisible(
                requestDto.getVisible() != null ? requestDto.getVisible() : existingGalleryImage.getVisible()
        );

        GalleryImage updatedGalleryImage = galleryImageRepository.save(existingGalleryImage);

        return mapToResponseDto(updatedGalleryImage);
    }

    @Override
    @Transactional
    public void deleteGalleryImage(Long id) {
        GalleryImage galleryImage = galleryImageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Gallery image not found with id: " + id));

        galleryImageRepository.delete(galleryImage);
    }

    private GalleryImage mapToEntity(GalleryImageRequestDto dto) {
        return GalleryImage.builder()
                .section(dto.getSection())
                .imageUrl(dto.getImageUrl())
                .caption(dto.getCaption())
                .displayOrder(dto.getDisplayOrder() != null ? dto.getDisplayOrder() : 0)
                .visible(dto.getVisible() != null ? dto.getVisible() : true)
                .build();
    }

    private GalleryImageResponseDto mapToResponseDto(GalleryImage galleryImage) {
        return GalleryImageResponseDto.builder()
                .id(galleryImage.getId())
                .section(galleryImage.getSection())
                .imageUrl(galleryImage.getImageUrl())
                .caption(galleryImage.getCaption())
                .displayOrder(galleryImage.getDisplayOrder())
                .visible(galleryImage.getVisible())
                .createdAt(galleryImage.getCreatedAt())
                .updatedAt(galleryImage.getUpdatedAt())
                .build();
    }
}
