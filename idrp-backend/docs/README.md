# API docs

`idrp-backend.postman_collection.json` — import into Postman. It's organized into:

- **Auth** — register/login/refresh/logout. Login and Refresh have a test script that auto-saves `accessToken`/`refreshToken` into collection variables, so the rest of the collection picks them up automatically.
- **Admins (SUPER_ADMIN only)** — admin account CRUD.
- **Public Content (no auth)** — one GET example per public-facing module (startups, events, programs, mentors, partners, team/board members, resources, jobs, gallery images, impact numbers, NAIN projects, CoE updates).
- **Admin Write (ADMIN/SUPER_ADMIN)** — a representative create/update/delete per module; every other module's write endpoints follow the identical shape (`POST`/`PUT /api/{module}`, `DELETE /api/{module}/{id}`).
- **Public Submissions (no auth)** — the six public form-submission endpoints (contacts, event registrations, program/startup applications, course registrations, job applications).
- **Admin Review of Submissions** — the admin-only list endpoints for those same six modules.
- **File Upload** — multipart upload example (images and PDF only; folder name is sanitized server-side).

Set the `baseUrl` collection variable if not running on `http://localhost:8080`. Run **Auth → Login** first (with real admin credentials) before any authenticated request — it populates the bearer token used everywhere else in the collection.

See the main [README.md](../README.md) for the full endpoint table, environment variables, and setup instructions.
