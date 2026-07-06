package com.idrp.backend.service.impl;

import com.idrp.backend.dto.event.EventRequestDto;
import com.idrp.backend.dto.event.EventResponseDto;
import com.idrp.backend.entity.Event;
import com.idrp.backend.exception.DuplicateResourceException;
import com.idrp.backend.exception.ResourceNotFoundException;
import com.idrp.backend.repository.EventRepository;
import com.idrp.backend.service.EventService;
import com.idrp.backend.util.SecurityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    @Override
    @Transactional
    public EventResponseDto createEvent(EventRequestDto requestDto) {
        if (eventRepository.existsBySlug(requestDto.getSlug())) {
            throw new DuplicateResourceException("Event already exists with slug: " + requestDto.getSlug());
        }

        Event event = mapToEntity(requestDto);
        Event savedEvent = eventRepository.save(event);

        return mapToResponseDto(savedEvent);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<EventResponseDto> getAllEvents(int page, int size, Boolean upcoming) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "startDate"));

        boolean isAdmin = SecurityUtils.isAuthenticatedAdmin();

        Page<Event> events;
        if (Boolean.TRUE.equals(upcoming)) {
            events = isAdmin
                    ? eventRepository.findByEndDateGreaterThanEqual(LocalDate.now(), pageable)
                    : eventRepository.findByEndDateGreaterThanEqualAndVisibleTrue(LocalDate.now(), pageable);
        } else if (Boolean.FALSE.equals(upcoming)) {
            events = isAdmin
                    ? eventRepository.findByEndDateBefore(LocalDate.now(), pageable)
                    : eventRepository.findByEndDateBeforeAndVisibleTrue(LocalDate.now(), pageable);
        } else {
            events = isAdmin
                    ? eventRepository.findAll(pageable)
                    : eventRepository.findAllByVisibleTrue(pageable);
        }

        return events.map(this::mapToResponseDto);
    }

    @Override
    @Transactional(readOnly = true)
    public EventResponseDto getEventById(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));

        if (!SecurityUtils.isAuthenticatedAdmin() && !Boolean.TRUE.equals(event.getVisible())) {
            throw new ResourceNotFoundException("Event not found with id: " + id);
        }

        return mapToResponseDto(event);
    }

    @Override
    @Transactional
    public EventResponseDto updateEvent(Long id, EventRequestDto requestDto) {
        Event existingEvent = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));

        if (eventRepository.existsBySlugAndIdNot(requestDto.getSlug(), id)) {
            throw new DuplicateResourceException("Another event already exists with slug: " + requestDto.getSlug());
        }

        existingEvent.setSlug(requestDto.getSlug());
        existingEvent.setTitle(requestDto.getTitle());
        existingEvent.setCategory(requestDto.getCategory());
        existingEvent.setDescription(requestDto.getDescription());
        existingEvent.setStartDate(requestDto.getStartDate());
        existingEvent.setEndDate(requestDto.getEndDate());
        existingEvent.setDisplayDate(requestDto.getDisplayDate());
        existingEvent.setTime(requestDto.getTime());
        existingEvent.setLocation(requestDto.getLocation());
        existingEvent.setMode(requestDto.getMode());
        existingEvent.setImage(requestDto.getImage());
        existingEvent.setImageFit(requestDto.getImageFit());
        existingEvent.setRegisterUrl(requestDto.getRegisterUrl());
        existingEvent.setVisible(requestDto.getVisible() != null ? requestDto.getVisible() : true);
        existingEvent.setGallery(
                requestDto.getGallery() != null ? requestDto.getGallery() : new ArrayList<>()
        );

        Event updatedEvent = eventRepository.save(existingEvent);

        return mapToResponseDto(updatedEvent);
    }

    @Override
    @Transactional
    public void deleteEvent(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));

        eventRepository.delete(event);
    }

    private Event mapToEntity(EventRequestDto dto) {
        return Event.builder()
                .slug(dto.getSlug())
                .title(dto.getTitle())
                .category(dto.getCategory())
                .description(dto.getDescription())
                .startDate(dto.getStartDate())
                .endDate(dto.getEndDate())
                .displayDate(dto.getDisplayDate())
                .time(dto.getTime())
                .location(dto.getLocation())
                .mode(dto.getMode() != null ? dto.getMode() : "Offline")
                .image(dto.getImage())
                .imageFit(dto.getImageFit() != null ? dto.getImageFit() : "cover")
                .registerUrl(dto.getRegisterUrl())
                .visible(dto.getVisible() != null ? dto.getVisible() : true)
                .gallery(dto.getGallery() != null ? dto.getGallery() : new ArrayList<>())
                .build();
    }

    private EventResponseDto mapToResponseDto(Event event) {
        return EventResponseDto.builder()
                .id(event.getId())
                .slug(event.getSlug())
                .title(event.getTitle())
                .category(event.getCategory())
                .description(event.getDescription())
                .startDate(event.getStartDate())
                .endDate(event.getEndDate())
                .displayDate(event.getDisplayDate())
                .time(event.getTime())
                .location(event.getLocation())
                .mode(event.getMode())
                .image(event.getImage())
                .imageFit(event.getImageFit())
                .registerUrl(event.getRegisterUrl())
                .visible(event.getVisible())
                .gallery(event.getGallery())
                .createdAt(event.getCreatedAt())
                .updatedAt(event.getUpdatedAt())
                .build();
    }
}