package com.idrp.backend.service;

import com.idrp.backend.dto.startup.StartupRequestDto;
import com.idrp.backend.dto.startup.StartupResponseDto;
import com.idrp.backend.entity.StartupCategory;
import org.springframework.data.domain.Page;

public interface StartupService {

    StartupResponseDto createStartup(StartupRequestDto requestDto);

    Page<StartupResponseDto> getAllStartups(int page, int size, StartupCategory category, String search);

    StartupResponseDto getStartupById(Long id);

    StartupResponseDto updateStartup(Long id, StartupRequestDto requestDto);

    void deleteStartup(Long id);
}