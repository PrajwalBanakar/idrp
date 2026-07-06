package com.idrp.backend.util;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HexFormat;

/**
 * SHA-256 hashing for storing refresh tokens at rest. No salt needed - refresh
 * tokens are already high-entropy random values (unlike passwords), so a plain
 * fast digest is sufficient to keep a DB dump from yielding a directly usable token.
 */
public final class TokenHasher {

    private TokenHasher() {
    }

    public static String sha256(String rawValue) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(rawValue.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(hash);
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException("SHA-256 not available", e);
        }
    }
}
