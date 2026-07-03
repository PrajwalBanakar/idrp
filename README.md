# IDRP

Monorepo for the IDRP frontend and backend.

```
idrp/
  idrp-frontend/   Vue 3 + Vite frontend (currently using static data)
  idrp-backend/    Spring Boot backend
```

## Running the frontend

```
cd idrp-frontend
npm install
npm run dev
```

The frontend currently uses static data (see `src/data/`) and is intentionally not wired
up to the backend APIs.

## Running the backend

### Prerequisites

- Java 17+ and Maven
- A running PostgreSQL instance

### Database setup

Use a dedicated, scoped role for the app rather than the postgres superuser:

```sql
CREATE ROLE idrp_app WITH LOGIN PASSWORD '<choose-a-strong-password>';
CREATE DATABASE idrp_db OWNER idrp_app;
-- if the database already existed under a different owner:
GRANT ALL ON SCHEMA public TO idrp_app;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO idrp_app;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO idrp_app;
```

### Configure

```
cd idrp-backend
cp src/main/resources/application.properties.example src/main/resources/application.properties
```

Fill in `application.properties` with your local DB credentials and a generated JWT secret.
This file is gitignored and must never be committed.

### Run

```
cd idrp-backend
mvn spring-boot:run
```

## Notes

- This is a single git repository combining the previously separate idrp-frontend and
  idrp-backend projects and their commit histories.
- Secrets (DB passwords, JWT secret) are never committed — `application.properties` is
  gitignored; use `application.properties.example` as a template.
