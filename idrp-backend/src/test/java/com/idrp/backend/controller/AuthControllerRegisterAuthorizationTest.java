package com.idrp.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.idrp.backend.config.JwtAuthenticationFilter;
import com.idrp.backend.config.RateLimitFilter;
import com.idrp.backend.config.SecurityConfig;
import com.idrp.backend.dto.auth.AuthResponseDto;
import com.idrp.backend.dto.auth.CreateAdminRequestDto;
import com.idrp.backend.entity.Admin;
import com.idrp.backend.entity.AdminRole;
import com.idrp.backend.repository.AdminRepository;
import com.idrp.backend.service.AuthService;
import com.idrp.backend.service.CustomAdminDetailsService;
import com.idrp.backend.service.JwtService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.security.autoconfigure.web.servlet.SecurityFilterAutoConfiguration;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Regression coverage for this audit's headline fix: POST /api/auth/register used to be
 * permitAll() and could hand anyone a working ADMIN account (which then passed every
 * hasAnyRole('ADMIN','SUPER_ADMIN') check in the app). It must now behave exactly like
 * POST /api/admins - SUPER_ADMIN only.
 */
@WebMvcTest(AuthController.class)
@EnableWebSecurity
@Import({
        SecurityFilterAutoConfiguration.class,
        SecurityConfig.class,
        JwtAuthenticationFilter.class,
        RateLimitFilter.class,
        CustomAdminDetailsService.class
})
class AuthControllerRegisterAuthorizationTest {

    private static final String TOKEN = "test-token";

    @Autowired
    private MockMvc mockMvc;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @MockitoBean
    private AuthService authService;

    @MockitoBean
    private JwtService jwtService;

    @MockitoBean
    private AdminRepository adminRepository;

    private CreateAdminRequestDto validPayload() {
        return CreateAdminRequestDto.builder()
                .name("New Admin")
                .email("new-admin@idrp.in")
                .password("password123")
                .build();
    }

    private void stubPrincipal(String email, AdminRole role) {
        Admin admin = Admin.builder()
                .id(1L)
                .name("Existing Admin")
                .email(email)
                .password("hashed")
                .role(role)
                .active(true)
                .build();

        when(jwtService.extractUsername(TOKEN)).thenReturn(email);
        when(jwtService.isTokenValid(TOKEN, admin)).thenReturn(true);
        when(adminRepository.findByEmail(email)).thenReturn(Optional.of(admin));
    }

    @Test
    void registerWithoutToken_returns401() throws Exception {
        mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(validPayload())))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void registerAsPlainAdmin_returns403() throws Exception {
        stubPrincipal("admin@idrp.in", AdminRole.ADMIN);

        mockMvc.perform(post("/api/auth/register")
                        .header("Authorization", "Bearer " + TOKEN)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(validPayload())))
                .andExpect(status().isForbidden());
    }

    @Test
    void registerAsSuperAdmin_returns201() throws Exception {
        stubPrincipal("super@idrp.in", AdminRole.SUPER_ADMIN);
        when(authService.createAdmin(any())).thenReturn(
                AuthResponseDto.builder()
                        .adminId(2L)
                        .name("New Admin")
                        .email("new-admin@idrp.in")
                        .role(AdminRole.ADMIN)
                        .accessToken("token")
                        .refreshToken("refresh")
                        .tokenType("Bearer")
                        .build());

        mockMvc.perform(post("/api/auth/register")
                        .header("Authorization", "Bearer " + TOKEN)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(validPayload())))
                .andExpect(status().isCreated());
    }
}
