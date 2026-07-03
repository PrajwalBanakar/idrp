package com.idrp.backend.service;

import com.idrp.backend.dto.coeupdate.CoeUpdateRequestDto;
import com.idrp.backend.dto.coeupdate.CoeUpdateResponseDto;
import org.springframework.data.domain.Page;

public interface CoeUpdateService {

    CoeUpdateResponseDto createCoeUpdate(CoeUpdateRequestDto requestDto);

    Page<CoeUpdateResponseDto> getAllCoeUpdates(int page, int size, String coeName);

    CoeUpdateResponseDto getCoeUpdateById(Long id);

    CoeUpdateResponseDto updateCoeUpdate(Long id, CoeUpdateRequestDto requestDto);

    void deleteCoeUpdate(Long id);
}
