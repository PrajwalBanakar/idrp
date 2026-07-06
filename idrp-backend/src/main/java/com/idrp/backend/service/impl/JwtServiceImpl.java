package com.idrp.backend.service.impl;

import com.idrp.backend.entity.Admin;
import com.idrp.backend.service.JwtService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtServiceImpl implements JwtService {

    @Value("${app.jwt.secret}")
    private String jwtSecret;

    @Value("${app.jwt.expiration}")
    private long jwtExpiration;

    private Key signInKey;

    @PostConstruct
    void validateSecret() {
        byte[] keyBytes;
        try {
            keyBytes = Decoders.BASE64.decode(jwtSecret);
        } catch (IllegalArgumentException e) {
            throw new IllegalStateException(
                    "app.jwt.secret is not valid standard Base64 (found: '" + e.getMessage() + "'). " +
                    "Generate one with `openssl rand -base64 64` - avoid Base64-URL variants that contain '-' or '_'.", e);
        }
        if (keyBytes.length < 32) {
            throw new IllegalStateException(
                    "app.jwt.secret decodes to only " + keyBytes.length +
                    " bytes; HS256 requires at least 32 bytes. Generate a longer secret with `openssl rand -base64 64`.");
        }
        this.signInKey = Keys.hmacShaKeyFor(keyBytes);
    }

    @Override
    public String generateToken(Admin admin) {
        return generateToken(new HashMap<>(), admin);
    }

    @Override
    public String generateToken(Map<String, Object> extraClaims, Admin admin) {
        extraClaims.put("role", admin.getRole().name());
        extraClaims.put("adminId", admin.getId());

        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(admin.getEmail())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    @Override
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    @Override
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    @Override
    public boolean isTokenValid(String token, Admin admin) {
        final String username = extractUsername(token);
        return username.equals(admin.getEmail()) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        return signInKey;
    }
}