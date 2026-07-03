package com.idrp.backend.dto.impactnumber;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ImpactNumberRequestDto {

    @NotBlank(message = "Value is required")
    @Size(max = 30, message = "Value must not exceed 30 characters")
    private String value;

    @NotBlank(message = "Label is required")
    @Size(max = 150, message = "Label must not exceed 150 characters")
    private String label;

    private Integer displayOrder;

    private Boolean visible;
}
