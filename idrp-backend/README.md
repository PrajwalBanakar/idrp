# IDRP Backend

Spring Boot (Java 21, Maven) REST API backing the IDRP website and admin dashboard, backed by PostgreSQL with JWT-based authentication.

## Package structure

```
com.idrp.backend
├─ config          SecurityConfig, JwtAuthenticationFilter, WebConfig (CORS + static /uploads), DataInitializer (admin bootstrap)
├─ controller       One REST controller per module (see API summary below)
├─ dto              request/response DTOs, grouped by module, plus dto.common.ApiResponse
├─ entity           JPA entities and enums
├─ exception        Custom exceptions + GlobalExceptionHandler (@RestControllerAdvice)
├─ repository       Spring Data JPA repositories
├─ seed             StaticDataSeeder (imports src/main/resources/seed/*.json, see "Seeding static data" below)
├─ service          Service interfaces + service.impl implementations
└─ util             SecurityUtils (shared "is this caller an authenticated admin" check)
```

## Prerequisites

- Java 21+ and Maven (or use the bundled `./mvnw`)
- A running PostgreSQL instance

## Database setup

Use a dedicated, scoped role for the app rather than the postgres superuser:

```sql
CREATE ROLE idrp_app WITH LOGIN PASSWORD '<choose-a-strong-password>';
CREATE DATABASE idrp_db OWNER idrp_app;
-- if the database already existed under a different owner:
GRANT ALL ON SCHEMA public TO idrp_app;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO idrp_app;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO idrp_app;
```

Schema is managed by Hibernate `ddl-auto=update` (see `application.properties`) — tables and constraints are created/updated automatically on startup. For a production deployment with real data, review generated DDL before relying on `update` long-term; a proper migration tool (Flyway/Liquibase) is recommended as the project matures.

**Gotcha:** `ddl-auto=update` only ever *adds* columns/tables — it never drops or renames them. If you rename or remove an entity field (as happened when `Startup.category` became `Startup.categories` and `NainProject` was reworked), the old column stays behind with its original constraints (often `NOT NULL`), which will silently block inserts until you manually `ALTER TABLE ... DROP COLUMN ...` it. Check `\d <table>` in `psql` after any field rename/removal.

## Configure (local dev)

```
cd idrp-backend
cp src/main/resources/application.properties.example src/main/resources/application.properties
```

Fill in `application.properties` with your local DB credentials and a generated JWT secret:

```
openssl rand -base64 64
```

Use the **full output as-is**. Avoid Base64-URL variants (containing `-`/`_`) — the app validates the secret is standard Base64 at startup and fails fast with a clear error if it isn't.

`application.properties` is gitignored and must never be committed.

### Environment variables / properties

| Property | Env var (prod) | Required | Purpose |
|---|---|---|---|
| `spring.datasource.url` | `DATABASE_URL` | yes | Postgres JDBC URL |
| `spring.datasource.username` | `DATABASE_USERNAME` | yes | DB user |
| `spring.datasource.password` | `DATABASE_PASSWORD` | yes | DB password |
| `spring.jpa.hibernate.ddl-auto` | `JPA_DDL_AUTO` | no (default `update`) | Schema management strategy |
| `app.jwt.secret` | `JWT_SECRET` | yes | Standard-Base64 HMAC secret, ≥32 decoded bytes, used to sign/verify access tokens |
| `app.jwt.expiration` | `JWT_EXPIRATION` | no (default `86400000` = 24h) | Access token TTL in ms |
| `app.admin.bootstrap-email` | `INITIAL_ADMIN_EMAIL` | no | If set (and the `admins` table is empty), auto-creates one SUPER_ADMIN with this email on startup |
| `app.admin.bootstrap-password` | `INITIAL_ADMIN_PASSWORD` | no | Password for the bootstrap SUPER_ADMIN above |
| `spring.servlet.multipart.max-file-size` / `max-request-size` | `MAX_FILE_SIZE` / `MAX_REQUEST_SIZE` | no (default `10MB`) | Upload size caps |
| `app.upload.dir` | `UPLOAD_DIR` | no (default `uploads`) | Local disk folder for uploaded files — **must be a persistent, mounted volume in production**, otherwise uploads are lost on every redeploy/restart |
| `app.upload.base-url` | `UPLOAD_BASE_URL` | yes (prod) | Public base URL prefixed to uploaded file URLs |
| `app.cors.allowed-origins` | `CORS_ALLOWED_ORIGINS` | no (default `https://idrp.in,https://www.idrp.in` in prod, `http://localhost:5173` in dev) | Comma-separated list of allowed frontend origins |
| `app.seed-static-data` | `SEED_STATIC_DATA` | no (default `false`) | Set `true` to import the static frontend content (`src/main/resources/seed/*.json`) into the database on startup — see "Seeding static data" below |

The bootstrap admin vars only take effect once, on first startup with an empty `admins` table — set them for the very first deploy, then they're safe to leave in place (a no-op once any admin exists). Rotate the bootstrap password immediately after first login.

## Run

```
cd idrp-backend
./mvnw spring-boot:run
```

Runs on `http://localhost:8080` by default. To run against the `application-prod.properties` profile, set `SPRING_PROFILES_ACTIVE=prod` plus all the env vars above.

## Test

```
./mvnw test        # unit/context test
./mvnw clean verify  # full build incl. packaging
```

### Manual smoke test (curl)

```bash
# Login (after bootstrap, or with an admin you created)
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@idrp.in","password":"<your-password>"}'

# Refresh
curl -X POST http://localhost:8080/api/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refreshToken":"<refresh-token-from-login>"}'

# Logout (revokes the refresh token server-side)
curl -X POST http://localhost:8080/api/auth/logout \
  -H "Content-Type: application/json" \
  -d '{"refreshToken":"<refresh-token>"}'

# Authenticated request
curl http://localhost:8080/api/admins \
  -H "Authorization: Bearer <access-token>"
```

See `docs/` for a Postman collection covering the full API surface.

## Authentication model

- Two roles: `ADMIN`, `SUPER_ADMIN` (`AdminRole`). `@PreAuthorize` on controller methods enforces per-endpoint role requirements; `@EnableMethodSecurity` is on.
- `POST /api/auth/register` is public but **always creates a plain `ADMIN`** — the client-supplied `role` field is ignored. The only way to create a `SUPER_ADMIN` is (a) the one-time env-var bootstrap on first startup, or (b) an existing `SUPER_ADMIN` calling the protected `POST /api/admins`.
- Access tokens are short-lived JWTs (24h default); refresh tokens are opaque UUIDs stored server-side (`refresh_tokens` table, one active token per admin) with a 7-day validity, checked for both expiry and revocation on every refresh.
- `POST /api/auth/logout` revokes the refresh token server-side immediately. The access token itself remains valid until its own expiry (standard stateless-JWT limitation).
- Convention across every module: `GET` (list/detail) is public; `POST`/`PUT` require `ADMIN` or `SUPER_ADMIN`; `DELETE` requires `SUPER_ADMIN` specifically.
- Modules with an `active`/`visible` flag (Mentor, Partner, TeamMember, BoardMember, Resource, Event, NainProject, GalleryImage, CoeUpdate, ImpactNumber) filter out inactive/invisible records for **unauthenticated** callers automatically; an authenticated admin request to the same endpoint returns everything, so the admin dashboard can still manage hidden records.

## API summary

All responses are wrapped in `ApiResponse<T>` (`{success, message, data}`). List endpoints return a Spring `Page<T>` (supports `page`/`size` query params; some support additional filters noted below).

| Module | Base path | Public | Admin (ADMIN/SUPER_ADMIN) | Admin (SUPER_ADMIN only) |
|---|---|---|---|---|
| Auth | `/api/auth` | login, register, refresh, logout | – | – |
| Admins | `/api/admins` | – | – | full CRUD |
| Startups | `/api/startups` | GET (`category` filters by membership in `categories[]`, `search`) — response has `categories: StartupCategory[]` (a startup can hold more than one, e.g. `INCUBATED` + `FUNDED`), and each founder/mentor/team-member person now has `imageUrl` | create/update | delete |
| Startup applications | `/api/startup-applications` | POST (submit) | list/get/update | delete |
| Events | `/api/events` | GET (`upcoming` filter) | create/update | delete |
| Event registrations | `/api/event-registrations` | POST (submit) | list/get/update | delete |
| Contacts | `/api/contacts` | POST (submit) | list/get/update | delete |
| Programs | `/api/programs` | GET (`category`, `search` filters); now includes `brochureUrl`, `applyUrl`, `features[]` | create/update | delete |
| Program applications | `/api/program-applications` | POST (submit) | list/get/update | delete |
| Mentors | `/api/mentors` | GET (`search` filter); now includes `profileImageUrl` | create/update | delete |
| Partners | `/api/partners` | GET | create/update | delete |
| Team members | `/api/team-members` | GET | create/update | delete |
| Board members | `/api/board-members` | GET | create/update | delete |
| Resources (newsletters/blog/research) | `/api/resources` | GET (`type`, `search` filters) | create/update | delete |
| Jobs | `/api/jobs` | GET (`status`, `search` filters), close/reopen (admin) | create/update/close/reopen | delete |
| Job applications | `/api/job-applications` | POST (submit) | list/get | delete |
| Course registrations | `/api/course-registrations` | POST (submit) | list/get/update | delete |
| Gallery images | `/api/gallery-images` | GET (`section` filter) | create/update | delete |
| Impact numbers | `/api/impact-numbers` | GET | create/update | delete |
| NAIN projects | `/api/nain-projects` | GET | create/update | delete |
| CoE updates | `/api/coe-updates` | GET (`coeName` filter) | create/update | delete |
| File uploads | `/api/files/upload` | – | upload (images/PDF only, sanitized folder) | – |
| Static uploads | `/uploads/**` | GET (serves uploaded files) | – | – |

`NainProject` note: each project row now carries its host institute (`instituteKey`/`instituteName`/`instituteCity`/`instituteState`/`instituteDescription`/`instituteLogo`), the institute-year support team (`pmuTechMentor`, `dia`, `misExecutives[]`, `nainCoordinator`), and project team (`facultyGuideName`, `teamLeaderName`, `teamMembers[]`) — denormalized onto each project rather than split into separate Institute/Year tables, since the current data has exactly one academic year per institute (see the entity's doc comment). The old `description`/`image` fields were removed — no such per-project data exists in the source content.

## Seeding static data

`idrp-backend/src/main/resources/seed/*.json` holds the IDRP frontend's static content (startups, events, programs, mentors, partners, team/board members, newsletters, jobs, gallery images, impact numbers, NAIN projects), reshaped to match the entity/DTO field names. `StaticDataSeeder` (a `CommandLineRunner` gated by `app.seed-static-data`) imports it on startup:

```
# in application.properties (or SEED_STATIC_DATA=true in prod)
app.seed-static-data=true
```

- **Idempotent**: each record is looked up by its natural key (slug/email/name/title, matching the same fields the module's admin UI would use to identify a duplicate) and updated in place if found, created if not. Safe to leave `true` across restarts or run repeatedly — it will not duplicate rows.
- **Never auto-runs in production** — defaults to `false`/absent in both `application.properties.example` and `application-prod.properties`; you must explicitly opt in.
- A failure on one record (e.g. a duplicate unique key) is logged and skipped — it does not abort the rest of the batch. Check the startup log for `Seeded <Module>: N created, M updated` summaries and any `Failed to seed ...` warnings.
- `CoeUpdate` has no seed file — no matching content exists anywhere in the frontend's static data (checked every CoE-related page file); nothing to import there.
- Two startup pairs share a `contactEmail` in the source data (`Kisan Voice`/`Vocal Drone` via a shared student founder; `SmartNest`/`ManoSetu AI` via a shared faculty mentor) — genuinely the same real person listed as contact for two ventures, not a typo, so there's no distinct email to substitute. `Startup.contactEmail` stays unique (still enforced for admin-created startups); the seeder instead seeds the second startup in each pair with a `null` top-level `contactEmail` (the real email is still visible on that startup's `founders`/`techFacultyMentors`) rather than skipping the record. All 46 startups seed successfully.
- **After changing the seed JSON or re-running against a fresh schema**: if you rename/remove an entity field (see the `ddl-auto=update` gotcha above), drop the orphaned old column manually first, or the seeder will fail on every insert into that table.

## Known limitations / recommendations for later

- Refresh tokens are stored as plaintext UUIDs (not hashed) and aren't rotated on use — acceptable for now given server-side revocation works, but hashing + rotation would be a meaningful hardening step.
- `spring.jpa.hibernate.ddl-auto=update` is convenient for now but not a long-term production migration strategy — consider Flyway/Liquibase before the schema stabilizes.
- File storage is local disk — fine for a single persistent server, but needs a mounted volume (or a move to S3-compatible object storage) on any platform that doesn't guarantee disk persistence across deploys.
- No full-text search — the `search` query params added to Startup/Program/Mentor/Resource/Job do a simple case-insensitive `LIKE` match on name/title only.
