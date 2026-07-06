package com.idrp.backend.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * Shared helper for services that expose the same GET endpoint to both the
 * public site (unauthenticated) and the admin dashboard (authenticated with
 * a bearer token). Used to conditionally filter out inactive/invisible
 * records and hide internal fields from unauthenticated callers, without
 * needing separate public/admin endpoints.
 */
public final class SecurityUtils {

    private SecurityUtils() {
    }

    public static boolean isAuthenticatedAdmin() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication != null
                && authentication.isAuthenticated()
                && !(authentication instanceof org.springframework.security.authentication.AnonymousAuthenticationToken);
    }
}
