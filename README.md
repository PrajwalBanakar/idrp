# IDRP

This repository groups the IDRP frontend and backend as two independent projects under a
single parent folder. They are **not** merged — each keeps its own git history, remote,
dependencies, and README.

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

```
cd idrp-backend
mvn spring-boot:run
```

## Notes

- Each project is its own git repository with its own remote (`idrp-frontend` and
  `idrp-backend` on GitHub). This parent folder is a local organizational grouping only —
  there is no shared/root git repo, no shared packages, and no cross-project code.
- Environment variables, business logic, routes, components, and backend configuration are
  unchanged from before the move.
