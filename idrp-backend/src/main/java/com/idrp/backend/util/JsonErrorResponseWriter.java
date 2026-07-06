package com.idrp.backend.util;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.time.LocalDateTime;

/**
 * Writes an ApiResponse-shaped error body directly to a servlet response, for the
 * few places (security entry points, rate limiting) that run outside normal
 * controller/DispatcherServlet dispatch and so can't rely on GlobalExceptionHandler.
 */
public final class JsonErrorResponseWriter {

    private JsonErrorResponseWriter() {
    }

    public static void write(HttpServletResponse response, HttpStatus status, String error, String message)
            throws IOException {
        response.setStatus(status.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().write(String.format(
                "{\"timestamp\":\"%s\",\"success\":false,\"status\":%d,\"error\":\"%s\",\"message\":\"%s\"}",
                LocalDateTime.now(), status.value(), error, escape(message)
        ));
    }

    private static String escape(String value) {
        return value == null ? "" : value.replace("\\", "\\\\").replace("\"", "\\\"");
    }
}
