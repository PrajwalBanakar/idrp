package com.idrp.backend.controller;

import com.idrp.backend.dto.common.ApiResponse;
import com.idrp.backend.dto.nainproject.NainProjectRequestDto;
import com.idrp.backend.dto.nainproject.NainProjectResponseDto;
import com.idrp.backend.service.NainProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/nain-projects")
@RequiredArgsConstructor
public class NainProjectController {

    private final NainProjectService nainProjectService;

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PostMapping
    public ResponseEntity<ApiResponse<NainProjectResponseDto>> createNainProject(
            @Valid @RequestBody NainProjectRequestDto requestDto
    ) {
        NainProjectResponseDto createdNainProject = nainProjectService.createNainProject(requestDto);

        return new ResponseEntity<>(
                ApiResponse.<NainProjectResponseDto>builder()
                        .success(true)
                        .message("NAIN project created successfully")
                        .data(createdNainProject)
                        .build(),
                HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<NainProjectResponseDto>>> getAllNainProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Page<NainProjectResponseDto> nainProjects = nainProjectService.getAllNainProjects(page, size);

        return ResponseEntity.ok(
                ApiResponse.<Page<NainProjectResponseDto>>builder()
                        .success(true)
                        .message("NAIN projects fetched successfully")
                        .data(nainProjects)
                        .build()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<NainProjectResponseDto>> getNainProjectById(@PathVariable Long id) {
        NainProjectResponseDto nainProject = nainProjectService.getNainProjectById(id);

        return ResponseEntity.ok(
                ApiResponse.<NainProjectResponseDto>builder()
                        .success(true)
                        .message("NAIN project fetched successfully")
                        .data(nainProject)
                        .build()
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<NainProjectResponseDto>> updateNainProject(
            @PathVariable Long id,
            @Valid @RequestBody NainProjectRequestDto requestDto
    ) {
        NainProjectResponseDto updatedNainProject = nainProjectService.updateNainProject(id, requestDto);

        return ResponseEntity.ok(
                ApiResponse.<NainProjectResponseDto>builder()
                        .success(true)
                        .message("NAIN project updated successfully")
                        .data(updatedNainProject)
                        .build()
        );
    }

    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteNainProject(@PathVariable Long id) {
        nainProjectService.deleteNainProject(id);

        return ResponseEntity.ok(
                ApiResponse.<Void>builder()
                        .success(true)
                        .message("NAIN project deleted successfully")
                        .data(null)
                        .build()
        );
    }
}
