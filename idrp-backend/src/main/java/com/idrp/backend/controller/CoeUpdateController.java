package com.idrp.backend.controller;

import com.idrp.backend.dto.coeupdate.CoeUpdateRequestDto;
import com.idrp.backend.dto.coeupdate.CoeUpdateResponseDto;
import com.idrp.backend.dto.common.ApiResponse;
import com.idrp.backend.service.CoeUpdateService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/coe-updates")
@RequiredArgsConstructor
public class CoeUpdateController {

    private final CoeUpdateService coeUpdateService;

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PostMapping
    public ResponseEntity<ApiResponse<CoeUpdateResponseDto>> createCoeUpdate(
            @Valid @RequestBody CoeUpdateRequestDto requestDto
    ) {
        CoeUpdateResponseDto createdCoeUpdate = coeUpdateService.createCoeUpdate(requestDto);

        return new ResponseEntity<>(
                ApiResponse.<CoeUpdateResponseDto>builder()
                        .success(true)
                        .message("CoE update created successfully")
                        .data(createdCoeUpdate)
                        .build(),
                HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<CoeUpdateResponseDto>>> getAllCoeUpdates(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String coeName
    ) {
        Page<CoeUpdateResponseDto> coeUpdates = coeUpdateService.getAllCoeUpdates(page, size, coeName);

        return ResponseEntity.ok(
                ApiResponse.<Page<CoeUpdateResponseDto>>builder()
                        .success(true)
                        .message("CoE updates fetched successfully")
                        .data(coeUpdates)
                        .build()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<CoeUpdateResponseDto>> getCoeUpdateById(@PathVariable Long id) {
        CoeUpdateResponseDto coeUpdate = coeUpdateService.getCoeUpdateById(id);

        return ResponseEntity.ok(
                ApiResponse.<CoeUpdateResponseDto>builder()
                        .success(true)
                        .message("CoE update fetched successfully")
                        .data(coeUpdate)
                        .build()
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<CoeUpdateResponseDto>> updateCoeUpdate(
            @PathVariable Long id,
            @Valid @RequestBody CoeUpdateRequestDto requestDto
    ) {
        CoeUpdateResponseDto updatedCoeUpdate = coeUpdateService.updateCoeUpdate(id, requestDto);

        return ResponseEntity.ok(
                ApiResponse.<CoeUpdateResponseDto>builder()
                        .success(true)
                        .message("CoE update updated successfully")
                        .data(updatedCoeUpdate)
                        .build()
        );
    }

    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteCoeUpdate(@PathVariable Long id) {
        coeUpdateService.deleteCoeUpdate(id);

        return ResponseEntity.ok(
                ApiResponse.<Void>builder()
                        .success(true)
                        .message("CoE update deleted successfully")
                        .data(null)
                        .build()
        );
    }
}
