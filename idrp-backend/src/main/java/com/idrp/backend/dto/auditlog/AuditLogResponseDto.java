package com.idrp.backend.dto.auditlog;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuditLogResponseDto {

    private Long id;
    private Long adminId;
    private String adminEmail;
    private String action;
    private String entityType;
    private String entityId;
    private LocalDateTime timestamp;
    private String ipAddress;
    private String userAgent;
}
