package com.idrp.backend.config;

import com.idrp.backend.entity.Admin;
import com.idrp.backend.entity.AdminRole;
import com.idrp.backend.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Bootstraps the very first SUPER_ADMIN account from environment-provided
 * credentials, only when the admins table is empty. This is the sole
 * supported way to create a SUPER_ADMIN outside of an existing SUPER_ADMIN
 * calling the protected POST /api/admins endpoint - the public
 * /api/auth/register endpoint always creates plain ADMIN accounts.
 */
@Configuration
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.admin.bootstrap-email:}")
    private String bootstrapEmail;

    @Value("${app.admin.bootstrap-password:}")
    private String bootstrapPassword;

    @Override
    public void run(String... args) {
        if (adminRepository.count() > 0) {
            return;
        }

        if (bootstrapEmail.isBlank() || bootstrapPassword.isBlank()) {
            log.warn("No admin accounts exist yet and app.admin.bootstrap-email / " +
                    "app.admin.bootstrap-password are not set - skipping bootstrap. " +
                    "Set both environment variables and restart to create the first SUPER_ADMIN.");
            return;
        }

        Admin admin = Admin.builder()
                .name("Super Admin")
                .email(bootstrapEmail)
                .password(passwordEncoder.encode(bootstrapPassword))
                .role(AdminRole.SUPER_ADMIN)
                .active(true)
                .build();

        adminRepository.save(admin);

        log.warn("Bootstrapped initial SUPER_ADMIN account for {}. Log in and rotate this password immediately.",
                bootstrapEmail);
    }
}
