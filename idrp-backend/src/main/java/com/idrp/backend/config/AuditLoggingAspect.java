package com.idrp.backend.config;

import com.idrp.backend.entity.AuditLog;
import com.idrp.backend.repository.AdminRepository;
import com.idrp.backend.repository.AuditLogRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.lang.reflect.Method;
import java.time.LocalDateTime;

/**
 * Records a row in audit_logs for every successful admin create/update/delete call,
 * without touching any controller/service - purely a cross-cutting concern. A failure
 * here is logged and swallowed; it must never break the real request.
 */
@Aspect
@Component
@RequiredArgsConstructor
public class AuditLoggingAspect {

    private static final Logger log = LoggerFactory.getLogger(AuditLoggingAspect.class);

    private final AuditLogRepository auditLogRepository;
    private final AdminRepository adminRepository;

    @AfterReturning(
            pointcut = "execution(* com.idrp.backend.controller..*Controller.*(..)) && "
                    + "(@annotation(org.springframework.web.bind.annotation.PostMapping) || "
                    + "@annotation(org.springframework.web.bind.annotation.PutMapping) || "
                    + "@annotation(org.springframework.web.bind.annotation.PatchMapping) || "
                    + "@annotation(org.springframework.web.bind.annotation.DeleteMapping))",
            returning = "result"
    )
    public void logAdminAction(JoinPoint joinPoint, Object result) {
        try {
            String className = joinPoint.getTarget().getClass().getSimpleName();
            if (className.equals("AuthController") || className.equals("FileController")) {
                return;
            }

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated()
                    || authentication instanceof AnonymousAuthenticationToken) {
                // Public create endpoints (contact forms, applications, etc.) are not admin actions.
                return;
            }

            AuditLog auditLog = AuditLog.builder()
                    .adminEmail(authentication.getName())
                    .adminId(resolveAdminId(authentication.getName()))
                    .action(resolveAction(joinPoint))
                    .entityType(className.replaceFirst("Controller$", ""))
                    .entityId(resolveEntityId(joinPoint, result))
                    .timestamp(LocalDateTime.now())
                    .ipAddress(resolveIp())
                    .userAgent(resolveUserAgent())
                    .build();

            auditLogRepository.save(auditLog);
        } catch (Exception e) {
            log.warn("Audit logging failed (non-fatal): {}", e.getMessage());
        }
    }

    private Long resolveAdminId(String email) {
        return adminRepository.findByEmail(email).map(admin -> admin.getId()).orElse(null);
    }

    private String resolveAction(JoinPoint joinPoint) {
        Method method = ((MethodSignature) joinPoint.getSignature()).getMethod();
        if (method.isAnnotationPresent(PostMapping.class)) return "CREATE";
        if (method.isAnnotationPresent(PutMapping.class)) return "UPDATE";
        if (method.isAnnotationPresent(PatchMapping.class)) return "UPDATE";
        if (method.isAnnotationPresent(DeleteMapping.class)) return "DELETE";
        return "UNKNOWN";
    }

    private String resolveEntityId(JoinPoint joinPoint, Object result) {
        for (Object arg : joinPoint.getArgs()) {
            if (arg instanceof Long id) {
                return String.valueOf(id);
            }
        }
        try {
            if (result instanceof ResponseEntity<?> responseEntity && responseEntity.getBody() != null) {
                Object data = responseEntity.getBody().getClass().getMethod("getData").invoke(responseEntity.getBody());
                if (data != null) {
                    Object id = data.getClass().getMethod("getId").invoke(data);
                    if (id != null) {
                        return String.valueOf(id);
                    }
                }
            }
        } catch (Exception ignored) {
            // No id-bearing field on the response (e.g. void deletes already matched above) - fine to leave null.
        }
        return null;
    }

    private String resolveIp() {
        HttpServletRequest request = currentRequest();
        if (request == null) {
            return null;
        }
        String forwardedFor = request.getHeader("X-Forwarded-For");
        if (forwardedFor != null && !forwardedFor.isBlank()) {
            return forwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    private String resolveUserAgent() {
        HttpServletRequest request = currentRequest();
        return request != null ? request.getHeader("User-Agent") : null;
    }

    private HttpServletRequest currentRequest() {
        var attributes = RequestContextHolder.getRequestAttributes();
        if (attributes instanceof ServletRequestAttributes servletRequestAttributes) {
            return servletRequestAttributes.getRequest();
        }
        return null;
    }
}
