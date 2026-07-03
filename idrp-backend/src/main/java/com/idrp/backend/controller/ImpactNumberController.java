package com.idrp.backend.controller;

import com.idrp.backend.dto.common.ApiResponse;
import com.idrp.backend.dto.impactnumber.ImpactNumberRequestDto;
import com.idrp.backend.dto.impactnumber.ImpactNumberResponseDto;
import com.idrp.backend.service.ImpactNumberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/impact-numbers")
@RequiredArgsConstructor
public class ImpactNumberController {

    private final ImpactNumberService impactNumberService;

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PostMapping
    public ResponseEntity<ApiResponse<ImpactNumberResponseDto>> createImpactNumber(
            @Valid @RequestBody ImpactNumberRequestDto requestDto
    ) {
        ImpactNumberResponseDto createdImpactNumber = impactNumberService.createImpactNumber(requestDto);

        return new ResponseEntity<>(
                ApiResponse.<ImpactNumberResponseDto>builder()
                        .success(true)
                        .message("Impact number created successfully")
                        .data(createdImpactNumber)
                        .build(),
                HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<ImpactNumberResponseDto>>> getAllImpactNumbers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Page<ImpactNumberResponseDto> impactNumbers = impactNumberService.getAllImpactNumbers(page, size);

        return ResponseEntity.ok(
                ApiResponse.<Page<ImpactNumberResponseDto>>builder()
                        .success(true)
                        .message("Impact numbers fetched successfully")
                        .data(impactNumbers)
                        .build()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ImpactNumberResponseDto>> getImpactNumberById(@PathVariable Long id) {
        ImpactNumberResponseDto impactNumber = impactNumberService.getImpactNumberById(id);

        return ResponseEntity.ok(
                ApiResponse.<ImpactNumberResponseDto>builder()
                        .success(true)
                        .message("Impact number fetched successfully")
                        .data(impactNumber)
                        .build()
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ImpactNumberResponseDto>> updateImpactNumber(
            @PathVariable Long id,
            @Valid @RequestBody ImpactNumberRequestDto requestDto
    ) {
        ImpactNumberResponseDto updatedImpactNumber = impactNumberService.updateImpactNumber(id, requestDto);

        return ResponseEntity.ok(
                ApiResponse.<ImpactNumberResponseDto>builder()
                        .success(true)
                        .message("Impact number updated successfully")
                        .data(updatedImpactNumber)
                        .build()
        );
    }

    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteImpactNumber(@PathVariable Long id) {
        impactNumberService.deleteImpactNumber(id);

        return ResponseEntity.ok(
                ApiResponse.<Void>builder()
                        .success(true)
                        .message("Impact number deleted successfully")
                        .data(null)
                        .build()
        );
    }
}
