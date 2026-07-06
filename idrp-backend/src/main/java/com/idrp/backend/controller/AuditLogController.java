package com.idrp.backend.controller;

import com.idrp.backend.dto.auditlog.AuditLogResponseDto;
import com.idrp.backend.dto.common.ApiResponse;
import com.idrp.backend.service.AuditLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/audit-logs")
@RequiredArgsConstructor
public class AuditLogController {

    private final AuditLogService auditLogService;

    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @GetMapping
    public ResponseEntity<ApiResponse<Page<AuditLogResponseDto>>> getAllAuditLogs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Page<AuditLogResponseDto> auditLogs = auditLogService.getAllAuditLogs(page, size);

        return ResponseEntity.ok(
                ApiResponse.<Page<AuditLogResponseDto>>builder()
                        .success(true)
                        .message("Audit logs fetched successfully")
                        .data(auditLogs)
                        .build()
        );
    }
}
