package com.idrp.backend.service.impl;

import com.idrp.backend.dto.file.FileUploadResponseDto;
import com.idrp.backend.service.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.Locale;
import java.util.Set;
import java.util.UUID;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class FileStorageServiceImpl implements FileStorageService {

    private static final Pattern SAFE_FOLDER_PATTERN = Pattern.compile("^[a-zA-Z0-9_-]+$");

    private static final Set<String> ALLOWED_EXTENSIONS = Set.of(
            "jpg", "jpeg", "png", "webp", "gif", "pdf"
    );

    @Value("${app.upload.dir}")
    private String uploadDir;

    @Value("${app.upload.base-url}")
    private String uploadBaseUrl;

    @Override
    public FileUploadResponseDto uploadFile(MultipartFile file, String folder) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("File is empty");
        }

        if (folder == null || !SAFE_FOLDER_PATTERN.matcher(folder).matches()) {
            throw new IllegalArgumentException(
                    "Invalid folder name - only letters, digits, '-' and '_' are allowed");
        }

        String originalFileName = file.getOriginalFilename();
        String extension = "";

        if (originalFileName != null && originalFileName.contains(".")) {
            extension = originalFileName.substring(originalFileName.lastIndexOf(".") + 1)
                    .toLowerCase(Locale.ROOT);
        }

        if (!ALLOWED_EXTENSIONS.contains(extension)) {
            throw new IllegalArgumentException(
                    "Unsupported file type '" + extension + "' - allowed types: " + ALLOWED_EXTENSIONS);
        }

        String storedFileName = UUID.randomUUID() + "." + extension;

        try {
            Path folderPath = Paths.get(uploadDir, folder);
            Files.createDirectories(folderPath);

            Path filePath = folderPath.resolve(storedFileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            String fileUrl = uploadBaseUrl + "/" + folder + "/" + storedFileName;

            return FileUploadResponseDto.builder()
                    .fileName(storedFileName)
                    .fileUrl(fileUrl)
                    .fileType(file.getContentType())
                    .fileSize(file.getSize())
                    .build();

        } catch (IOException e) {
            throw new RuntimeException("Failed to upload file: " + e.getMessage());
        }
    }
}