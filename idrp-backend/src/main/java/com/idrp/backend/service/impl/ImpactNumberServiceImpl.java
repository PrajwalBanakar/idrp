package com.idrp.backend.service.impl;

import com.idrp.backend.dto.impactnumber.ImpactNumberRequestDto;
import com.idrp.backend.dto.impactnumber.ImpactNumberResponseDto;
import com.idrp.backend.entity.ImpactNumber;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.ImpactNumberRepository;
import com.idrp.backend.service.ImpactNumberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ImpactNumberServiceImpl implements ImpactNumberService {

    private final ImpactNumberRepository impactNumberRepository;

    @Override
    @Transactional
    public ImpactNumberResponseDto createImpactNumber(ImpactNumberRequestDto requestDto) {
        ImpactNumber impactNumber = mapToEntity(requestDto);
        ImpactNumber savedImpactNumber = impactNumberRepository.save(impactNumber);

        return mapToResponseDto(savedImpactNumber);
    }

    @Override
    public Page<ImpactNumberResponseDto> getAllImpactNumbers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, "displayOrder"));

        return impactNumberRepository.findAll(pageable)
                .map(this::mapToResponseDto);
    }

    @Override
    public ImpactNumberResponseDto getImpactNumberById(Long id) {
        ImpactNumber impactNumber = impactNumberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Impact number not found with id: " + id));

        return mapToResponseDto(impactNumber);
    }

    @Override
    @Transactional
    public ImpactNumberResponseDto updateImpactNumber(Long id, ImpactNumberRequestDto requestDto) {
        ImpactNumber existingImpactNumber = impactNumberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Impact number not found with id: " + id));

        existingImpactNumber.setValue(requestDto.getValue());
        existingImpactNumber.setLabel(requestDto.getLabel());
        existingImpactNumber.setDisplayOrder(requestDto.getDisplayOrder());
        existingImpactNumber.setVisible(
                requestDto.getVisible() != null ? requestDto.getVisible() : existingImpactNumber.getVisible()
        );

        ImpactNumber updatedImpactNumber = impactNumberRepository.save(existingImpactNumber);

        return mapToResponseDto(updatedImpactNumber);
    }

    @Override
    @Transactional
    public void deleteImpactNumber(Long id) {
        ImpactNumber impactNumber = impactNumberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Impact number not found with id: " + id));

        impactNumberRepository.delete(impactNumber);
    }

    private ImpactNumber mapToEntity(ImpactNumberRequestDto dto) {
        return ImpactNumber.builder()
                .value(dto.getValue())
                .label(dto.getLabel())
                .displayOrder(dto.getDisplayOrder() != null ? dto.getDisplayOrder() : 0)
                .visible(dto.getVisible() != null ? dto.getVisible() : true)
                .build();
    }

    private ImpactNumberResponseDto mapToResponseDto(ImpactNumber impactNumber) {
        return ImpactNumberResponseDto.builder()
                .id(impactNumber.getId())
                .value(impactNumber.getValue())
                .label(impactNumber.getLabel())
                .displayOrder(impactNumber.getDisplayOrder())
                .visible(impactNumber.getVisible())
                .createdAt(impactNumber.getCreatedAt())
                .updatedAt(impactNumber.getUpdatedAt())
                .build();
    }
}
