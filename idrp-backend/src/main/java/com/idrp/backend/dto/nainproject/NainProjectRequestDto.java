package com.idrp.backend.dto.nainproject;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NainProjectRequestDto {

    @NotBlank(message = "Title is required")
    @Size(max = 180, message = "Title must not exceed 180 characters")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotBlank(message = "Institute name is required")
    @Size(max = 180, message = "Institute name must not exceed 180 characters")
    private String instituteName;

    @NotBlank(message = "Academic year is required")
    @Size(max = 20, message = "Academic year must not exceed 20 characters")
    private String academicYear;

    @Size(max = 500, message = "Image must not exceed 500 characters")
    private String image;

    private Integer displayOrder;

    private Boolean visible;
}
