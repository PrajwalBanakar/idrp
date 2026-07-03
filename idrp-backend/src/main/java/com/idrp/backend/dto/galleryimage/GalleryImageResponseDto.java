package com.idrp.backend.dto.galleryimage;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GalleryImageResponseDto {

    private Long id;
    private String section;
    private String imageUrl;
    private String caption;
    private Integer displayOrder;
    private Boolean visible;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
