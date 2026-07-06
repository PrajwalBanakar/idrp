package com.idrp.backend.service.impl;

import com.idrp.backend.dto.auditlog.AuditLogResponseDto;
import com.idrp.backend.entity.AuditLog;
import com.idrp.backend.repository.AuditLogRepository;
import com.idrp.backend.service.AuditLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuditLogServiceImpl implements AuditLogService {

    private final AuditLogRepository auditLogRepository;

    @Override
    @Transactional(readOnly = true)
    public Page<AuditLogResponseDto> getAllAuditLogs(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        return auditLogRepository.findAllByOrderByTimestampDesc(pageable)
                .map(this::mapToResponseDto);
    }

    private AuditLogResponseDto mapToResponseDto(AuditLog auditLog) {
        return AuditLogResponseDto.builder()
                .id(auditLog.getId())
                .adminId(auditLog.getAdminId())
                .adminEmail(auditLog.getAdminEmail())
                .action(auditLog.getAction())
                .entityType(auditLog.getEntityType())
                .entityId(auditLog.getEntityId())
                .timestamp(auditLog.getTimestamp())
                .ipAddress(auditLog.getIpAddress())
                .userAgent(auditLog.getUserAgent())
                .build();
    }
}
