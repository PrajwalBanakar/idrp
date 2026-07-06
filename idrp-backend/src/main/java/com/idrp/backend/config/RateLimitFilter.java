package com.idrp.backend.config;

import com.idrp.backend.util.JsonErrorResponseWriter;
import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Duration;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Simple in-memory, per-IP rate limiting for the endpoints most exposed to abuse:
 * login/refresh (brute force), public form submissions (spam), and file upload.
 * In-memory buckets are fine for this single-instance deployment; if the app is ever
 * scaled horizontally, move the bucket store to something shared (e.g. Redis).
 */
@Component
public class RateLimitFilter extends OncePerRequestFilter {

    private static final Set<String> FORM_SUBMISSION_PATHS = Set.of(
            "/api/contacts",
            "/api/event-registrations",
            "/api/program-applications",
            "/api/startup-applications",
            "/api/course-registrations",
            "/api/job-applications"
    );

    private final ConcurrentHashMap<String, Bucket> buckets = new ConcurrentHashMap<>();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        RateLimitRule rule = resolveRule(request);
        if (rule == null) {
            filterChain.doFilter(request, response);
            return;
        }

        String bucketKey = rule.name() + ":" + clientIp(request);
        Bucket bucket = buckets.computeIfAbsent(bucketKey, key -> newBucket(rule));

        if (bucket.tryConsume(1)) {
            filterChain.doFilter(request, response);
            return;
        }

        response.setHeader("Retry-After", "60");
        JsonErrorResponseWriter.write(response, HttpStatus.TOO_MANY_REQUESTS, "Too Many Requests",
                "Rate limit exceeded - please try again in a minute");
    }

    private RateLimitRule resolveRule(HttpServletRequest request) {
        if (!"POST".equalsIgnoreCase(request.getMethod())) {
            return null;
        }

        String uri = request.getRequestURI();

        if (uri.equals("/api/auth/login")) return RateLimitRule.LOGIN;
        if (uri.equals("/api/auth/refresh")) return RateLimitRule.REFRESH;
        if (uri.equals("/api/files/upload")) return RateLimitRule.UPLOAD;
        if (FORM_SUBMISSION_PATHS.contains(uri)) return RateLimitRule.FORM_SUBMISSION;

        return null;
    }

    private Bucket newBucket(RateLimitRule rule) {
        Bandwidth limit = Bandwidth.builder()
                .capacity(rule.capacity())
                .refillGreedy(rule.capacity(), Duration.ofMinutes(1))
                .build();
        return Bucket.builder()
                .addLimit(limit)
                .build();
    }

    private String clientIp(HttpServletRequest request) {
        String forwardedFor = request.getHeader("X-Forwarded-For");
        if (forwardedFor != null && !forwardedFor.isBlank()) {
            return forwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    private enum RateLimitRule {
        LOGIN(5),
        REFRESH(10),
        FORM_SUBMISSION(10),
        UPLOAD(20);

        private final int capacity;

        RateLimitRule(int capacity) {
            this.capacity = capacity;
        }

        int capacity() {
            return capacity;
        }
    }
}
