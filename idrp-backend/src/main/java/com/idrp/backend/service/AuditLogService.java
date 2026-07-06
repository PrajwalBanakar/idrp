package com.idrp.backend.service;

import com.idrp.backend.dto.auditlog.AuditLogResponseDto;
import org.springframework.data.domain.Page;

public interface AuditLogService {

    Page<AuditLogResponseDto> getAllAuditLogs(int page, int size);
}
