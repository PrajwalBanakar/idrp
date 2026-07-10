package com.idrp.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.idrp.backend.config.JwtAuthenticationFilter;
import com.idrp.backend.config.RateLimitFilter;
import com.idrp.backend.config.SecurityConfig;
import com.idrp.backend.dto.startup.StartupRequestDto;
import com.idrp.backend.dto.startup.StartupResponseDto;
import com.idrp.backend.entity.Admin;
import com.idrp.backend.entity.AdminRole;
import com.idrp.backend.entity.StartupCategory;
import com.idrp.backend.repository.AdminRepository;
import com.idrp.backend.service.CustomAdminDetailsService;
import com.idrp.backend.service.JwtService;
import com.idrp.backend.service.StartupService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.security.autoconfigure.web.servlet.SecurityFilterAutoConfiguration;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Runs requests through the real SecurityConfig / JwtAuthenticationFilter / @PreAuthorize
 * chain (no @WithMockUser shortcuts), so these fail if the actual production wiring
 * regresses, not just a mocked security context. StartupController is representative of
 * every other CRUD controller in the app - they all share the same annotation pattern.
 */
@WebMvcTest(StartupController.class)
@EnableWebSecurity
@Import({
        SecurityFilterAutoConfiguration.class,
        SecurityConfig.class,
        JwtAuthenticationFilter.class,
        RateLimitFilter.class,
        CustomAdminDetailsService.class
})
class StartupControllerAuthorizationTest {

    private static final String TOKEN = "test-token";

    @Autowired
    private MockMvc mockMvc;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @MockitoBean
    private StartupService startupService;

    @MockitoBean
    private JwtService jwtService;

    @MockitoBean
    private AdminRepository adminRepository;

    private StartupRequestDto validPayload() {
        StartupRequestDto dto = new StartupRequestDto();
        dto.setName("Test Startup");
        dto.setCategories(List.of(StartupCategory.INCUBATED));
        return dto;
    }

    private void stubPrincipal(String email, AdminRole role, boolean active) {
        Admin admin = Admin.builder()
                .id(1L)
                .name("Test Admin")
                .email(email)
                .password("hashed")
                .role(role)
                .active(active)
                .build();

        when(jwtService.extractUsername(TOKEN)).thenReturn(email);
        when(jwtService.isTokenValid(TOKEN, admin)).thenReturn(true);
        when(adminRepository.findByEmail(email)).thenReturn(Optional.of(admin));
    }

    @Test
    void createWithoutToken_returns401() throws Exception {
        mockMvc.perform(post("/api/startups")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(validPayload())))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void deleteAsPlainAdmin_returns403() throws Exception {
        // Delete is SUPER_ADMIN-only; a plain ADMIN is authenticated but not authorized.
        stubPrincipal("admin@idrp.in", AdminRole.ADMIN, true);

        mockMvc.perform(delete("/api/startups/1")
                        .header("Authorization", "Bearer " + TOKEN))
                .andExpect(status().isForbidden());
    }

    @Test
    void createAsSuperAdmin_returns201() throws Exception {
        stubPrincipal("super@idrp.in", AdminRole.SUPER_ADMIN, true);
        when(startupService.createStartup(any()))
                .thenReturn(StartupResponseDto.builder().id(1L).name("Test Startup").build());

        mockMvc.perform(post("/api/startups")
                        .header("Authorization", "Bearer " + TOKEN)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(validPayload())))
                .andExpect(status().isCreated());
    }

    @Test
    void deactivatedAdminToken_returns401() throws Exception {
        // Regression check for the JwtAuthenticationFilter fix: a still-unexpired token
        // for an Admin.active=false account must not authenticate.
        stubPrincipal("deactivated@idrp.in", AdminRole.SUPER_ADMIN, false);

        mockMvc.perform(post("/api/startups")
                        .header("Authorization", "Bearer " + TOKEN)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(validPayload())))
                .andExpect(status().isUnauthorized());
    }
}
