package com.idrp.backend.dto.nainproject;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NainProjectRequestDto {

    @NotBlank(message = "Institute key is required")
    @Size(max = 60, message = "Institute key must not exceed 60 characters")
    private String instituteKey;

    @NotBlank(message = "Institute name is required")
    @Size(max = 180, message = "Institute name must not exceed 180 characters")
    private String instituteName;

    @Size(max = 100, message = "Institute city must not exceed 100 characters")
    private String instituteCity;

    @Size(max = 100, message = "Institute state must not exceed 100 characters")
    private String instituteState;

    private String instituteDescription;

    @Size(max = 500, message = "Institute logo must not exceed 500 characters")
    private String instituteLogo;

    @NotBlank(message = "Academic year is required")
    @Size(max = 20, message = "Academic year must not exceed 20 characters")
    private String academicYear;

    @Size(max = 180, message = "PMU tech mentor must not exceed 180 characters")
    private String pmuTechMentor;

    @Size(max = 180, message = "DIA must not exceed 180 characters")
    private String dia;

    @Size(max = 20, message = "MIS executives list cannot exceed 20 entries")
    private List<String> misExecutives;

    @Size(max = 180, message = "NAIN coordinator must not exceed 180 characters")
    private String nainCoordinator;

    @NotBlank(message = "Title is required")
    @Size(max = 250, message = "Title must not exceed 250 characters")
    private String title;

    @Size(max = 180, message = "Faculty guide name must not exceed 180 characters")
    private String facultyGuideName;

    @Size(max = 180, message = "Team leader name must not exceed 180 characters")
    private String teamLeaderName;

    @Size(max = 20, message = "Team members list cannot exceed 20 entries")
    private List<String> teamMembers;

    private Integer displayOrder;

    private Boolean visible;
}
