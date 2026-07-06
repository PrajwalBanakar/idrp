package com.idrp.backend.service.impl;

import com.idrp.backend.entity.Admin;
import com.idrp.backend.entity.RefreshToken;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.exception.TokenExpiredException;
import com.idrp.backend.exception.TokenRevokedException;
import com.idrp.backend.repository.RefreshTokenRepository;
import com.idrp.backend.service.RefreshTokenService;
import com.idrp.backend.util.TokenHasher;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RefreshTokenServiceImpl implements RefreshTokenService {

    private final RefreshTokenRepository refreshTokenRepository;

    private static final long REFRESH_TOKEN_VALIDITY_DAYS = 7;

    @Override
    @Transactional
    public RefreshToken createRefreshToken(Admin admin) {

        String rawToken = UUID.randomUUID().toString();
        String tokenHash = TokenHasher.sha256(rawToken);

        RefreshToken refreshToken = refreshTokenRepository.findByAdmin(admin).orElse(null);

        if (refreshToken != null) {
            // rotate existing row onto the new token - the old raw value is immediately
            // unusable since its hash no longer matches anything in the table
            refreshToken.setTokenHash(tokenHash);
            refreshToken.setExpiryDate(LocalDateTime.now().plusDays(REFRESH_TOKEN_VALIDITY_DAYS));
            refreshToken.setRevoked(false);
        } else {
            refreshToken = RefreshToken.builder()
                    .admin(admin)
                    .tokenHash(tokenHash)
                    .expiryDate(LocalDateTime.now().plusDays(REFRESH_TOKEN_VALIDITY_DAYS))
                    .revoked(false)
                    .build();
        }

        RefreshToken saved = refreshTokenRepository.save(refreshToken);
        saved.setRawToken(rawToken);
        return saved;
    }

    @Override
    public RefreshToken validateRefreshToken(String rawToken) {

        RefreshToken refreshToken = refreshTokenRepository.findByTokenHash(TokenHasher.sha256(rawToken))
                .orElseThrow(() -> new ResourceNotFoundException("Refresh token not found"));

        if (refreshToken.isRevoked()) {
            throw new TokenRevokedException("Refresh token has been revoked. Please login again.");
        }

        if (refreshToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            throw new TokenExpiredException("Refresh token has expired. Please login again.");
        }

        return refreshToken;
    }

    @Override
    @Transactional
    public void revokeRefreshToken(String rawToken) {

        RefreshToken refreshToken = refreshTokenRepository.findByTokenHash(TokenHasher.sha256(rawToken))
                .orElseThrow(() -> new ResourceNotFoundException("Refresh token not found"));

        refreshToken.setRevoked(true);
        refreshTokenRepository.save(refreshToken);
    }

    @Override
    @Transactional
    public void deleteByAdmin(Admin admin) {
        refreshTokenRepository.deleteByAdmin(admin);
    }
}
