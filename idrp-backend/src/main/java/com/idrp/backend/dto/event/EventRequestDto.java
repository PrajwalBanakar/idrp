package com.idrp.backend.dto.event;

import jakarta.validation.constraints.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventRequestDto {

    @NotBlank(message = "Slug is required")
    @Size(max = 180, message = "Slug must not exceed 180 characters")
    private String slug;

    @NotBlank(message = "Title is required")
    @Size(max = 180, message = "Title must not exceed 180 characters")
    private String title;

    @NotBlank(message = "Category is required")
    @Size(max = 100, message = "Category must not exceed 100 characters")
    private String category;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "Start date is required")
    private LocalDate startDate;

    @NotNull(message = "End date is required")
    private LocalDate endDate;

    @NotBlank(message = "Display date is required")
    @Size(max = 100, message = "Display date must not exceed 100 characters")
    private String displayDate;

    @Size(max = 100, message = "Time must not exceed 100 characters")
    private String time;

    @NotBlank(message = "Location is required")
    @Size(max = 150, message = "Location must not exceed 150 characters")
    private String location;

    @Size(max = 50, message = "Mode must not exceed 50 characters")
    private String mode;

    @NotBlank(message = "Image is required")
    @Size(max = 500, message = "Image must not exceed 500 characters")
    private String image;

    @Pattern(regexp = "cover|contain", message = "Image fit must be cover or contain")
    private String imageFit;

    @Size(max = 500, message = "Register URL must not exceed 500 characters")
    @Pattern(regexp = "^(https?://.+)?$", message = "Register URL must start with http:// or https://")
    private String registerUrl;

    private Boolean visible;

    private List<String> gallery;
}