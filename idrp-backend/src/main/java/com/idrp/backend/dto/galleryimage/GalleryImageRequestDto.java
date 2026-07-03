package com.idrp.backend.dto.galleryimage;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GalleryImageRequestDto {

    @NotBlank(message = "Section is required")
    @Size(max = 60, message = "Section must not exceed 60 characters")
    private String section;

    @NotBlank(message = "Image URL is required")
    @Size(max = 500, message = "Image URL must not exceed 500 characters")
    private String imageUrl;

    @Size(max = 255, message = "Caption must not exceed 255 characters")
    private String caption;

    private Integer displayOrder;

    private Boolean visible;
}
