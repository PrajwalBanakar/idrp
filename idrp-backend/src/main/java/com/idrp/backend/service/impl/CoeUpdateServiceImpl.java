package com.idrp.backend.service.impl;

import com.idrp.backend.dto.coeupdate.CoeUpdateRequestDto;
import com.idrp.backend.dto.coeupdate.CoeUpdateResponseDto;
import com.idrp.backend.entity.CoeUpdate;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.CoeUpdateRepository;
import com.idrp.backend.service.CoeUpdateService;
import com.idrp.backend.util.SecurityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CoeUpdateServiceImpl implements CoeUpdateService {

    private final CoeUpdateRepository coeUpdateRepository;

    @Override
    @Transactional
    public CoeUpdateResponseDto createCoeUpdate(CoeUpdateRequestDto requestDto) {
        CoeUpdate coeUpdate = mapToEntity(requestDto);
        CoeUpdate savedCoeUpdate = coeUpdateRepository.save(coeUpdate);

        return mapToResponseDto(savedCoeUpdate);
    }

    @Override
    public Page<CoeUpdateResponseDto> getAllCoeUpdates(int page, int size, String coeName) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "updateDate"));

        boolean isAdmin = SecurityUtils.isAuthenticatedAdmin();
        boolean hasCoeName = coeName != null && !coeName.isBlank();

        Page<CoeUpdate> coeUpdates;
        if (hasCoeName) {
            coeUpdates = isAdmin
                    ? coeUpdateRepository.findByCoeName(coeName, pageable)
                    : coeUpdateRepository.findByCoeNameAndVisibleTrue(coeName, pageable);
        } else {
            coeUpdates = isAdmin
                    ? coeUpdateRepository.findAll(pageable)
                    : coeUpdateRepository.findAllByVisibleTrue(pageable);
        }

        return coeUpdates.map(this::mapToResponseDto);
    }

    @Override
    public CoeUpdateResponseDto getCoeUpdateById(Long id) {
        CoeUpdate coeUpdate = coeUpdateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("CoE update not found with id: " + id));

        if (!SecurityUtils.isAuthenticatedAdmin() && !Boolean.TRUE.equals(coeUpdate.getVisible())) {
            throw new ResourceNotFoundException("CoE update not found with id: " + id);
        }

        return mapToResponseDto(coeUpdate);
    }

    @Override
    @Transactional
    public CoeUpdateResponseDto updateCoeUpdate(Long id, CoeUpdateRequestDto requestDto) {
        CoeUpdate existingCoeUpdate = coeUpdateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("CoE update not found with id: " + id));

        existingCoeUpdate.setCoeName(requestDto.getCoeName());
        existingCoeUpdate.setTitle(requestDto.getTitle());
        existingCoeUpdate.setDescription(requestDto.getDescription());
        existingCoeUpdate.setUpdateDate(requestDto.getUpdateDate());
        existingCoeUpdate.setVisible(
                requestDto.getVisible() != null ? requestDto.getVisible() : existingCoeUpdate.getVisible()
        );

        CoeUpdate updatedCoeUpdate = coeUpdateRepository.save(existingCoeUpdate);

        return mapToResponseDto(updatedCoeUpdate);
    }

    @Override
    @Transactional
    public void deleteCoeUpdate(Long id) {
        CoeUpdate coeUpdate = coeUpdateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("CoE update not found with id: " + id));

        coeUpdateRepository.delete(coeUpdate);
    }

    private CoeUpdate mapToEntity(CoeUpdateRequestDto dto) {
        return CoeUpdate.builder()
                .coeName(dto.getCoeName())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .updateDate(dto.getUpdateDate())
                .visible(dto.getVisible() != null ? dto.getVisible() : true)
                .build();
    }

    private CoeUpdateResponseDto mapToResponseDto(CoeUpdate coeUpdate) {
        return CoeUpdateResponseDto.builder()
                .id(coeUpdate.getId())
                .coeName(coeUpdate.getCoeName())
                .title(coeUpdate.getTitle())
                .description(coeUpdate.getDescription())
                .updateDate(coeUpdate.getUpdateDate())
                .visible(coeUpdate.getVisible())
                .createdAt(coeUpdate.getCreatedAt())
                .updatedAt(coeUpdate.getUpdatedAt())
                .build();
    }
}
