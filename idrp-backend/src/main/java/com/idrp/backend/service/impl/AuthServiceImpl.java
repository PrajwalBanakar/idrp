package com.idrp.backend.service.impl;

import com.idrp.backend.dto.auth.AdminLoginRequestDto;
import com.idrp.backend.dto.auth.AuthResponseDto;
import com.idrp.backend.dto.auth.CreateAdminRequestDto;
import com.idrp.backend.entity.Admin;
import com.idrp.backend.entity.AdminRole;
import com.idrp.backend.entity.RefreshToken;
import com.idrp.backend.exception.DuplicateResourceException;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.AdminRepository;
import com.idrp.backend.service.AuthService;
import com.idrp.backend.service.JwtService;
import com.idrp.backend.service.RefreshTokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenService refreshTokenService;

    @Override
    public AuthResponseDto createAdmin(CreateAdminRequestDto requestDto) {

        if (adminRepository.existsByEmail(requestDto.getEmail())) {
            throw new DuplicateResourceException("Admin already exists with email: " + requestDto.getEmail());
        }

        // Public self-registration can only ever create a plain ADMIN account.
        // SUPER_ADMIN accounts are provisioned via the bootstrap seed (AdminBootstrapRunner)
        // or by an existing SUPER_ADMIN through the protected POST /api/admins endpoint.
        Admin admin = Admin.builder()
                .name(requestDto.getName())
                .email(requestDto.getEmail())
                .password(passwordEncoder.encode(requestDto.getPassword()))
                .role(AdminRole.ADMIN)
                .active(true)
                .build();

        Admin savedAdmin = adminRepository.save(admin);

        String accessToken = jwtService.generateToken(savedAdmin);
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(savedAdmin);

        return buildAuthResponse(savedAdmin, accessToken, refreshToken.getRawToken());
    }

    @Override
    public AuthResponseDto login(AdminLoginRequestDto requestDto) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        requestDto.getEmail(),
                        requestDto.getPassword()
                )
        );

        Admin admin = adminRepository.findByEmail(requestDto.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with email: " + requestDto.getEmail()));

        String accessToken = jwtService.generateToken(admin);
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(admin);

        return buildAuthResponse(admin, accessToken, refreshToken.getRawToken());
    }

    @Override
    public AuthResponseDto refreshAccessToken(String refreshTokenValue) {

        RefreshToken validatedToken = refreshTokenService.validateRefreshToken(refreshTokenValue);

        Admin admin = validatedToken.getAdmin();
        String newAccessToken = jwtService.generateToken(admin);

        // Rotate: mint a new refresh token on every use so a leaked/replayed old value
        // (this one included, once we return) can never be exchanged again.
        RefreshToken rotatedToken = refreshTokenService.createRefreshToken(admin);

        return buildAuthResponse(admin, newAccessToken, rotatedToken.getRawToken());
    }

    @Override
    public void logout(String refreshToken) {
        refreshTokenService.revokeRefreshToken(refreshToken);
    }

    private AuthResponseDto buildAuthResponse(Admin admin, String accessToken, String refreshToken) {
        return AuthResponseDto.builder()
                .adminId(admin.getId())
                .name(admin.getName())
                .email(admin.getEmail())
                .role(admin.getRole())
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .tokenType("Bearer")
                .build();
    }
}