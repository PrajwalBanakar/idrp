package com.idrp.backend.service;

import com.idrp.backend.dto.impactnumber.ImpactNumberRequestDto;
import com.idrp.backend.dto.impactnumber.ImpactNumberResponseDto;
import org.springframework.data.domain.Page;

public interface ImpactNumberService {

    ImpactNumberResponseDto createImpactNumber(ImpactNumberRequestDto requestDto);

    Page<ImpactNumberResponseDto> getAllImpactNumbers(int page, int size);

    ImpactNumberResponseDto getImpactNumberById(Long id);

    ImpactNumberResponseDto updateImpactNumber(Long id, ImpactNumberRequestDto requestDto);

    void deleteImpactNumber(Long id);
}
