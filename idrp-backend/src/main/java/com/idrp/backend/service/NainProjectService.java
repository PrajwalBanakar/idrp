package com.idrp.backend.service;

import com.idrp.backend.dto.nainproject.NainProjectRequestDto;
import com.idrp.backend.dto.nainproject.NainProjectResponseDto;
import org.springframework.data.domain.Page;

public interface NainProjectService {

    NainProjectResponseDto createNainProject(NainProjectRequestDto requestDto);

    Page<NainProjectResponseDto> getAllNainProjects(int page, int size);

    NainProjectResponseDto getNainProjectById(Long id);

    NainProjectResponseDto updateNainProject(Long id, NainProjectRequestDto requestDto);

    void deleteNainProject(Long id);
}
