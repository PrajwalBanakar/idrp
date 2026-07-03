package com.idrp.backend.dto.coeupdate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CoeUpdateRequestDto {

    @NotBlank(message = "CoE name is required")
    @Size(max = 150, message = "CoE name must not exceed 150 characters")
    private String coeName;

    @NotBlank(message = "Title is required")
    @Size(max = 180, message = "Title must not exceed 180 characters")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "Update date is required")
    private LocalDate updateDate;

    private Boolean visible;
}
