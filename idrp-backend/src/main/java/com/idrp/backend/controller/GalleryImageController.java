package com.idrp.backend.controller;

import com.idrp.backend.dto.common.ApiResponse;
import com.idrp.backend.dto.galleryimage.GalleryImageRequestDto;
import com.idrp.backend.dto.galleryimage.GalleryImageResponseDto;
import com.idrp.backend.service.GalleryImageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/gallery-images")
@RequiredArgsConstructor
public class GalleryImageController {

    private final GalleryImageService galleryImageService;

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PostMapping
    public ResponseEntity<ApiResponse<GalleryImageResponseDto>> createGalleryImage(
            @Valid @RequestBody GalleryImageRequestDto requestDto
    ) {
        GalleryImageResponseDto createdGalleryImage = galleryImageService.createGalleryImage(requestDto);

        return new ResponseEntity<>(
                ApiResponse.<GalleryImageResponseDto>builder()
                        .success(true)
                        .message("Gallery image created successfully")
                        .data(createdGalleryImage)
                        .build(),
                HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<GalleryImageResponseDto>>> getAllGalleryImages(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String section
    ) {
        Page<GalleryImageResponseDto> galleryImages =
                galleryImageService.getAllGalleryImages(page, size, section);

        return ResponseEntity.ok(
                ApiResponse.<Page<GalleryImageResponseDto>>builder()
                        .success(true)
                        .message("Gallery images fetched successfully")
                        .data(galleryImages)
                        .build()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<GalleryImageResponseDto>> getGalleryImageById(@PathVariable Long id) {
        GalleryImageResponseDto galleryImage = galleryImageService.getGalleryImageById(id);

        return ResponseEntity.ok(
                ApiResponse.<GalleryImageResponseDto>builder()
                        .success(true)
                        .message("Gallery image fetched successfully")
                        .data(galleryImage)
                        .build()
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<GalleryImageResponseDto>> updateGalleryImage(
            @PathVariable Long id,
            @Valid @RequestBody GalleryImageRequestDto requestDto
    ) {
        GalleryImageResponseDto updatedGalleryImage = galleryImageService.updateGalleryImage(id, requestDto);

        return ResponseEntity.ok(
                ApiResponse.<GalleryImageResponseDto>builder()
                        .success(true)
                        .message("Gallery image updated successfully")
                        .data(updatedGalleryImage)
                        .build()
        );
    }

    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteGalleryImage(@PathVariable Long id) {
        galleryImageService.deleteGalleryImage(id);

        return ResponseEntity.ok(
                ApiResponse.<Void>builder()
                        .success(true)
                        .message("Gallery image deleted successfully")
                        .data(null)
                        .build()
        );
    }
}
