package com.idrp.backend.dto.startup;

import com.idrp.backend.entity.StartupCategory;
import com.idrp.backend.entity.StartupPerson;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
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

    @NotEmpty(message = "At least one category is required")
    private List<StartupCategory> categories;

    @Size(max = 255)
    private String logo;

    @Size(max = 255)
    @Pattern(regexp = "^(https?://.+)?$", message = "Website must start with http:// or https://")
    private String website;

    @Size(max = 255)
    @Pattern(regexp = "^(https?://.+)?$", message = "One-pager must start with http:// or https://")
    private String onePager;

    private String brief;

    @Email(message = "Enter a valid contact email")
    @Size(max = 150)
    private String contactEmail;

    @Size(max = 20, message = "Tech/faculty mentors list cannot exceed 20 entries")
    private List<StartupPerson> techFacultyMentors;

    @Size(max = 20, message = "Founders list cannot exceed 20 entries")
    private List<StartupPerson> founders;

    @Size(max = 20, message = "Team members list cannot exceed 20 entries")
    private List<StartupPerson> teamMembers;

    @Size(max = 30, message = "Gallery cannot exceed 30 images")
    private List<String> gallery;
}