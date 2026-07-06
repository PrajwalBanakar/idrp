package com.idrp.backend.service.impl;

import com.idrp.backend.dto.program.ProgramRequestDto;
import com.idrp.backend.dto.program.ProgramResponseDto;
import com.idrp.backend.entity.Program;
import com.idrp.backend.exception.DuplicateResourceException;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.ProgramRepository;
import com.idrp.backend.service.ProgramService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProgramServiceImpl implements ProgramService {

    private final ProgramRepository programRepository;

    @Override
    public ProgramResponseDto createProgram(ProgramRequestDto requestDto) {
        if (programRepository.existsByProgramName(requestDto.getProgramName())) {
            throw new DuplicateResourceException("Program already exists with name: " + requestDto.getProgramName());
        }

        Program program = mapToEntity(requestDto);
        Program savedProgram = programRepository.save(program);
        return mapToResponseDto(savedProgram);
    }

    @Override
    public Page<ProgramResponseDto> getAllPrograms(int page, int size, String category, String search) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));

        return programRepository.search(
                        category != null && !category.isBlank() ? category : null,
                        search != null && !search.isBlank() ? search : null,
                        pageable)
                .map(this::mapToResponseDto);
    }

    @Override
    public ProgramResponseDto getProgramById(Long id) {
        Program program = programRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Program not found with id: " + id));

        return mapToResponseDto(program);
    }

    @Override
    public ProgramResponseDto updateProgram(Long id, ProgramRequestDto requestDto) {
        Program existingProgram = programRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Program not found with id: " + id));

        if (programRepository.existsByProgramNameAndIdNot(requestDto.getProgramName(), id)) {
            throw new DuplicateResourceException("Another program already exists with name: " + requestDto.getProgramName());
        }

        existingProgram.setProgramName(requestDto.getProgramName());
        existingProgram.setCategory(requestDto.getCategory());
        existingProgram.setDuration(requestDto.getDuration());
        existingProgram.setMode(requestDto.getMode());
        existingProgram.setEligibility(requestDto.getEligibility());
        existingProgram.setDescription(requestDto.getDescription());
        existingProgram.setBrochureUrl(requestDto.getBrochureUrl());
        existingProgram.setApplyUrl(requestDto.getApplyUrl());
        existingProgram.setFeatures(
                requestDto.getFeatures() != null ? requestDto.getFeatures() : new java.util.ArrayList<>()
        );

        Program updatedProgram = programRepository.save(existingProgram);
        return mapToResponseDto(updatedProgram);
    }

    @Override
    public void deleteProgram(Long id) {
        Program program = programRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Program not found with id: " + id));

        programRepository.delete(program);
    }

    private Program mapToEntity(ProgramRequestDto dto) {
        return Program.builder()
                .programName(dto.getProgramName())
                .category(dto.getCategory())
                .duration(dto.getDuration())
                .mode(dto.getMode())
                .eligibility(dto.getEligibility())
                .description(dto.getDescription())
                .brochureUrl(dto.getBrochureUrl())
                .applyUrl(dto.getApplyUrl())
                .features(dto.getFeatures() != null ? dto.getFeatures() : new java.util.ArrayList<>())
                .build();
    }

    private ProgramResponseDto mapToResponseDto(Program program) {
        return ProgramResponseDto.builder()
                .id(program.getId())
                .programName(program.getProgramName())
                .category(program.getCategory())
                .duration(program.getDuration())
                .mode(program.getMode())
                .eligibility(program.getEligibility())
                .description(program.getDescription())
                .brochureUrl(program.getBrochureUrl())
                .applyUrl(program.getApplyUrl())
                .features(program.getFeatures())
                .createdAt(program.getCreatedAt())
                .updatedAt(program.getUpdatedAt())
                .build();
    }
}