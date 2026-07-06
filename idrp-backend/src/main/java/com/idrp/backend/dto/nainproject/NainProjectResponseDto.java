package com.idrp.backend.dto.nainproject;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NainProjectResponseDto {

    private Long id;
    private String instituteKey;
    private String instituteName;
    private String instituteCity;
    private String instituteState;
    private String instituteDescription;
    private String instituteLogo;
    private String academicYear;
    private String pmuTechMentor;
    private String dia;
    private List<String> misExecutives;
    private String nainCoordinator;
    private String title;
    private String facultyGuideName;
    private String teamLeaderName;
    private List<String> teamMembers;
    private Integer displayOrder;
    private Boolean visible;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
