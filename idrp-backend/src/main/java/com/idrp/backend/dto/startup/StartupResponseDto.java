package com.idrp.backend.dto.startup;

import com.idrp.backend.entity.StartupCategory;
import com.idrp.backend.entity.StartupPerson;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StartupResponseDto {

    private Long id;
    private String name;
    private String sector;
    private StartupCategory category;
    private String logo;
    private String website;
    private String onePager;
    private String brief;
    private String contactEmail;
    private List<StartupPerson> techFacultyMentors;
    private List<StartupPerson> founders;
    private List<StartupPerson> teamMembers;
    private List<String> gallery;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}