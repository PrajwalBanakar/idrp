package com.idrp.backend.dto.event;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventResponseDto {

    private Long id;
    private String slug;
    private String title;
    private String category;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private String displayDate;
    private String time;
    private String location;
    private String mode;
    private String image;
    private String imageFit;
    private String registerUrl;
    private Boolean visible;
    private List<String> gallery;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}