package com.idrp.backend.service.impl;

import com.idrp.backend.dto.startup.StartupRequestDto;
import com.idrp.backend.dto.startup.StartupResponseDto;
import com.idrp.backend.entity.Startup;
import com.idrp.backend.exception.DuplicateResourceException;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.StartupRepository;
import com.idrp.backend.service.StartupService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StartupServiceImpl implements StartupService {

    private final StartupRepository startupRepository;

    @Override
    public StartupResponseDto createStartup(StartupRequestDto requestDto) {
        if (
                requestDto.getContactEmail() != null &&
                !requestDto.getContactEmail().isBlank() &&
                startupRepository.existsByContactEmail(requestDto.getContactEmail())
        ) {
            throw new DuplicateResourceException(
                    "Startup already exists with contact email: " + requestDto.getContactEmail()
            );
        }

        Startup startup = mapToEntity(requestDto);
        Startup savedStartup = startupRepository.save(startup);

        return mapToResponseDto(savedStartup);
    }

    @Override
    public Page<StartupResponseDto> getAllStartups(int page, int size) {
        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by(Sort.Direction.DESC, "createdAt")
        );

        return startupRepository.findAll(pageable)
                .map(this::mapToResponseDto);
    }

    @Override
    public StartupResponseDto getStartupById(Long id) {
        Startup startup = startupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Startup not found with id: " + id));

        return mapToResponseDto(startup);
    }

    @Override
    public StartupResponseDto updateStartup(Long id, StartupRequestDto requestDto) {
        Startup existingStartup = startupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Startup not found with id: " + id));

        if (
                requestDto.getContactEmail() != null &&
                !requestDto.getContactEmail().isBlank() &&
                startupRepository.existsByContactEmailAndIdNot(requestDto.getContactEmail(), id)
        ) {
            throw new DuplicateResourceException(
                    "Another startup already exists with contact email: " + requestDto.getContactEmail()
            );
        }

        existingStartup.setName(requestDto.getName());
        existingStartup.setSector(requestDto.getSector());
        existingStartup.setCategory(requestDto.getCategory());
        existingStartup.setLogo(requestDto.getLogo());
        existingStartup.setWebsite(requestDto.getWebsite());
        existingStartup.setOnePager(requestDto.getOnePager());
        existingStartup.setBrief(requestDto.getBrief());
        existingStartup.setContactEmail(requestDto.getContactEmail());
        existingStartup.setTechFacultyMentors(requestDto.getTechFacultyMentors());
        existingStartup.setFounders(requestDto.getFounders());
        existingStartup.setTeamMembers(requestDto.getTeamMembers());

        Startup updatedStartup = startupRepository.save(existingStartup);

        return mapToResponseDto(updatedStartup);
    }

    @Override
    public void deleteStartup(Long id) {
        Startup startup = startupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Startup not found with id: " + id));

        startupRepository.delete(startup);
    }

    private Startup mapToEntity(StartupRequestDto dto) {
        return Startup.builder()
                .name(dto.getName())
                .sector(dto.getSector())
                .category(dto.getCategory())
                .logo(dto.getLogo())
                .website(dto.getWebsite())
                .onePager(dto.getOnePager())
                .brief(dto.getBrief())
                .contactEmail(dto.getContactEmail())
                .techFacultyMentors(dto.getTechFacultyMentors())
                .founders(dto.getFounders())
                .teamMembers(dto.getTeamMembers())
                .build();
    }

    private StartupResponseDto mapToResponseDto(Startup startup) {
        return StartupResponseDto.builder()
                .id(startup.getId())
                .name(startup.getName())
                .sector(startup.getSector())
                .category(startup.getCategory())
                .logo(startup.getLogo())
                .website(startup.getWebsite())
                .onePager(startup.getOnePager())
                .brief(startup.getBrief())
                .contactEmail(startup.getContactEmail())
                .techFacultyMentors(startup.getTechFacultyMentors())
                .founders(startup.getFounders())
                .teamMembers(startup.getTeamMembers())
                .createdAt(startup.getCreatedAt())
                .updatedAt(startup.getUpdatedAt())
                .build();
    }
}