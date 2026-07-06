package com.idrp.backend.config;

import com.idrp.backend.service.CustomAdminDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.time.LocalDateTime;

@Configuration
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final CustomAdminDetailsService customAdminDetailsService;

    private void writeJsonError(jakarta.servlet.http.HttpServletResponse response, HttpStatus status, String error, String message)
            throws java.io.IOException {
        response.setStatus(status.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().write(String.format(
                "{\"timestamp\":\"%s\",\"success\":false,\"status\":%d,\"error\":\"%s\",\"message\":\"%s\"}",
                LocalDateTime.now(), status.value(), error, message
        ));
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .cors(cors -> {})
                .authorizeHttpRequests(auth -> auth

                        // Auth APIs
                        .requestMatchers("/api/auth/**").permitAll()
                        .requestMatchers("/error").permitAll()

                        // Public POST form submission APIs
                        .requestMatchers(HttpMethod.POST, "/api/contacts").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/event-registrations").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/program-applications").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/startup-applications").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/course-registrations").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/job-applications").permitAll()
                        .requestMatchers(HttpMethod.GET, "/uploads/**").permitAll()

                        // Public GET content APIs
                        .requestMatchers(HttpMethod.GET, "/api/resources/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/events/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/programs/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/startups/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/mentors/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/partners/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/team-members/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/board-members/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/jobs/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/nain-projects/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/gallery-images/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/coe-updates/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/impact-numbers/**").permitAll()

                        // Everything else protected
                        .anyRequest().authenticated()
                )
                .exceptionHandling(exceptions -> exceptions
                        .authenticationEntryPoint((request, response, authException) ->
                                writeJsonError(response, HttpStatus.UNAUTHORIZED, "Unauthorized",
                                        "Authentication is required to access this resource"))
                        .accessDeniedHandler((request, response, accessDeniedException) ->
                                writeJsonError(response, HttpStatus.FORBIDDEN, "Forbidden",
                                        "You do not have permission to access this resource"))
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider =
                new DaoAuthenticationProvider(customAdminDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}