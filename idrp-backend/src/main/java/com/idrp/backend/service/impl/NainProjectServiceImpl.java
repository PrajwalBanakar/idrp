package com.idrp.backend.service.impl;

import com.idrp.backend.dto.nainproject.NainProjectRequestDto;
import com.idrp.backend.dto.nainproject.NainProjectResponseDto;
import com.idrp.backend.entity.NainProject;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.NainProjectRepository;
import com.idrp.backend.service.NainProjectService;
import com.idrp.backend.util.SecurityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

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

        Page<NainProject> nainProjects = SecurityUtils.isAuthenticatedAdmin()
                ? nainProjectRepository.findAll(pageable)
                : nainProjectRepository.findAllByVisibleTrue(pageable);

        return nainProjects.map(this::mapToResponseDto);
    }

    @Override
    public NainProjectResponseDto getNainProjectById(Long id) {
        NainProject nainProject = nainProjectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("NAIN project not found with id: " + id));

        if (!SecurityUtils.isAuthenticatedAdmin() && !Boolean.TRUE.equals(nainProject.getVisible())) {
            throw new ResourceNotFoundException("NAIN project not found with id: " + id);
        }

        return mapToResponseDto(nainProject);
    }

    @Override
    @Transactional
    public NainProjectResponseDto updateNainProject(Long id, NainProjectRequestDto requestDto) {
        NainProject existingNainProject = nainProjectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("NAIN project not found with id: " + id));

        existingNainProject.setInstituteKey(requestDto.getInstituteKey());
        existingNainProject.setInstituteName(requestDto.getInstituteName());
        existingNainProject.setInstituteCity(requestDto.getInstituteCity());
        existingNainProject.setInstituteState(requestDto.getInstituteState());
        existingNainProject.setInstituteDescription(requestDto.getInstituteDescription());
        existingNainProject.setInstituteLogo(requestDto.getInstituteLogo());
        existingNainProject.setAcademicYear(requestDto.getAcademicYear());
        existingNainProject.setPmuTechMentor(requestDto.getPmuTechMentor());
        existingNainProject.setDia(requestDto.getDia());
        existingNainProject.setMisExecutives(
                requestDto.getMisExecutives() != null ? requestDto.getMisExecutives() : new ArrayList<>()
        );
        existingNainProject.setNainCoordinator(requestDto.getNainCoordinator());
        existingNainProject.setTitle(requestDto.getTitle());
        existingNainProject.setFacultyGuideName(requestDto.getFacultyGuideName());
        existingNainProject.setTeamLeaderName(requestDto.getTeamLeaderName());
        existingNainProject.setTeamMembers(
                requestDto.getTeamMembers() != null ? requestDto.getTeamMembers() : new ArrayList<>()
        );
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
                .instituteKey(dto.getInstituteKey())
                .instituteName(dto.getInstituteName())
                .instituteCity(dto.getInstituteCity())
                .instituteState(dto.getInstituteState())
                .instituteDescription(dto.getInstituteDescription())
                .instituteLogo(dto.getInstituteLogo())
                .academicYear(dto.getAcademicYear())
                .pmuTechMentor(dto.getPmuTechMentor())
                .dia(dto.getDia())
                .misExecutives(dto.getMisExecutives() != null ? dto.getMisExecutives() : new ArrayList<>())
                .nainCoordinator(dto.getNainCoordinator())
                .title(dto.getTitle())
                .facultyGuideName(dto.getFacultyGuideName())
                .teamLeaderName(dto.getTeamLeaderName())
                .teamMembers(dto.getTeamMembers() != null ? dto.getTeamMembers() : new ArrayList<>())
                .displayOrder(dto.getDisplayOrder() != null ? dto.getDisplayOrder() : 0)
                .visible(dto.getVisible() != null ? dto.getVisible() : true)
                .build();
    }

    private NainProjectResponseDto mapToResponseDto(NainProject nainProject) {
        return NainProjectResponseDto.builder()
                .id(nainProject.getId())
                .instituteKey(nainProject.getInstituteKey())
                .instituteName(nainProject.getInstituteName())
                .instituteCity(nainProject.getInstituteCity())
                .instituteState(nainProject.getInstituteState())
                .instituteDescription(nainProject.getInstituteDescription())
                .instituteLogo(nainProject.getInstituteLogo())
                .academicYear(nainProject.getAcademicYear())
                .pmuTechMentor(nainProject.getPmuTechMentor())
                .dia(nainProject.getDia())
                .misExecutives(nainProject.getMisExecutives())
                .nainCoordinator(nainProject.getNainCoordinator())
                .title(nainProject.getTitle())
                .facultyGuideName(nainProject.getFacultyGuideName())
                .teamLeaderName(nainProject.getTeamLeaderName())
                .teamMembers(nainProject.getTeamMembers())
                .displayOrder(nainProject.getDisplayOrder())
                .visible(nainProject.getVisible())
                .createdAt(nainProject.getCreatedAt())
                .updatedAt(nainProject.getUpdatedAt())
                .build();
    }
}
