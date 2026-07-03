package com.idrp.backend.dto.startup;

import com.idrp.backend.entity.StartupCategory;
import com.idrp.backend.entity.StartupPerson;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StartupRequestDto {

    @NotBlank(message = "Startup name is required")
    @Size(max = 150)
    private String name;

    @Size(max = 100)
    private String sector;

    @NotNull(message = "Category is required")
    private StartupCategory category;

    @Size(max = 255)
    private String logo;

    @Size(max = 255)
    private String website;

    @Size(max = 255)
    private String onePager;

    private String brief;

    @Email(message = "Enter a valid contact email")
    @Size(max = 150)
    private String contactEmail;

    private List<StartupPerson> techFacultyMentors;

    private List<StartupPerson> founders;

    private List<StartupPerson> teamMembers;
}