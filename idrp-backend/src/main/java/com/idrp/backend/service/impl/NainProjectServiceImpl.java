package com.idrp.backend.service.impl;

import com.idrp.backend.dto.nainproject.NainProjectRequestDto;
import com.idrp.backend.dto.nainproject.NainProjectResponseDto;
import com.idrp.backend.entity.NainProject;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.NainProjectRepository;
import com.idrp.backend.service.NainProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class NainProjectServiceImpl implements NainProjectService {

    private final NainProjectRepository nainProjectRepository;

    @Override
    @Transactional
    public NainProjectResponseDto createNainProject(NainProjectRequestDto requestDto) {
        NainProject nainProject = mapToEntity(requestDto);
        NainProject savedNainProject = nainProjectRepository.save(nainProject);

        return mapToResponseDto(savedNainProject);
    }

    @Override
    public Page<NainProjectResponseDto> getAllNainProjects(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, "displayOrder"));

        return nainProjectRepository.findAll(pageable)
                .map(this::mapToResponseDto);
    }

    @Override
    public NainProjectResponseDto getNainProjectById(Long id) {
        NainProject nainProject = nainProjectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("NAIN project not found with id: " + id));

        return mapToResponseDto(nainProject);
    }

    @Override
    @Transactional
    public NainProjectResponseDto updateNainProject(Long id, NainProjectRequestDto requestDto) {
        NainProject existingNainProject = nainProjectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("NAIN project not found with id: " + id));

        existingNainProject.setTitle(requestDto.getTitle());
        existingNainProject.setDescription(requestDto.getDescription());
        existingNainProject.setInstituteName(requestDto.getInstituteName());
        existingNainProject.setAcademicYear(requestDto.getAcademicYear());
        existingNainProject.setImage(requestDto.getImage());
        existingNainProject.setDisplayOrder(requestDto.getDisplayOrder());
        existingNainProject.setVisible(
                requestDto.getVisible() != null ? requestDto.getVisible() : existingNainProject.getVisible()
        );

        NainProject updatedNainProject = nainProjectRepository.save(existingNainProject);

        return mapToResponseDto(updatedNainProject);
    }

    @Override
    @Transactional
    public void deleteNainProject(Long id) {
        NainProject nainProject = nainProjectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("NAIN project not found with id: " + id));

        nainProjectRepository.delete(nainProject);
    }

    private NainProject mapToEntity(NainProjectRequestDto dto) {
        return NainProject.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .instituteName(dto.getInstituteName())
                .academicYear(dto.getAcademicYear())
                .image(dto.getImage())
                .displayOrder(dto.getDisplayOrder() != null ? dto.getDisplayOrder() : 0)
                .visible(dto.getVisible() != null ? dto.getVisible() : true)
                .build();
    }

    private NainProjectResponseDto mapToResponseDto(NainProject nainProject) {
        return NainProjectResponseDto.builder()
                .id(nainProject.getId())
                .title(nainProject.getTitle())
                .description(nainProject.getDescription())
                .instituteName(nainProject.getInstituteName())
                .academicYear(nainProject.getAcademicYear())
                .image(nainProject.getImage())
                .displayOrder(nainProject.getDisplayOrder())
                .visible(nainProject.getVisible())
                .createdAt(nainProject.getCreatedAt())
                .updatedAt(nainProject.getUpdatedAt())
                .build();
    }
}
