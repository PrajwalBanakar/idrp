# IDRP Frontend

Vue 3 + TypeScript + Vite frontend for the IIIT Dharwad Research Park (IDRP) website — public site and admin panel.

## Tech stack

- Vue 3 (`<script setup>`) + Vue Router + Pinia
- TypeScript, Vite 7, Tailwind CSS 4
- vue-tsc for type-checking, Prettier for formatting

## Setup

```bash
npm install
cp .env.example .env   # then fill in values, see below
npm run dev
```

Requires Node `^20.19.0 || >=22.12.0` (see `engines` in `package.json`).

## Environment variables

Copy `.env.example` to `.env` and set:

| Variable | Purpose | Default if unset |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Base URL of `idrp-backend` (no trailing slash). Used for public GET endpoints, public form submissions, and all admin/JWT-protected requests. | `http://localhost:8080` |
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key for [Web3Forms](https://web3forms.com), used as a fallback submit endpoint for some public forms. | — (Web3Forms submission disabled) |

All env vars must be prefixed with `VITE_` to be exposed to the client (Vite convention).

## Build commands

```bash
npm run dev          # start dev server
npm run type-check   # vue-tsc --build (no-emit type checking)
npm run build        # type-check + production build (dist/)
npm run preview      # preview the production build locally
npm run format       # prettier --write src/
```

`npm run build` runs `type-check` and `build-only` in parallel; both must pass for the build to succeed.

## Project structure

- `src/views` — route-level pages (public + `Admin*View.vue`)
- `src/components` — page sections, grouped by feature area (e.g. `startups/`, `mentors/`, `admin/`)
- `src/data` — static content used by public pages (bios, program copy, startup portfolio, etc.)
- `src/services` — API clients. `*AdminService.ts` files call JWT-protected admin endpoints; `*Service.ts` files call public endpoints
- `src/types` — shared TypeScript types, mirrored where possible against backend request/response DTOs
- `src/router` — route table, including the admin auth guard

## Admin workflow

- Admin login: `/admin/login` → `POST /api/auth/login`. On success the access token, refresh token, and admin user are stored in `localStorage` (see `src/services/authService.ts`).
- Route guard (`src/router/index.ts`): any `/admin/*` route other than `/admin/login` redirects to the login page if there's no stored access token; visiting `/admin/login` while already authenticated redirects to `/admin/dashboard`.
- `src/services/authService.ts` exports `adminFetch<T>()`, a shared fetch wrapper used by every admin service. It attaches the `Authorization: Bearer <token>` header, unwraps the backend's `ApiResponse<T>` envelope, and on a `401` response clears the stored session and redirects to `/admin/login` — so an expired/invalid token always bounces the admin back to login instead of leaving them on a broken page.
- Logout (`logoutAdmin()`) calls `POST /api/auth/logout` with the refresh token (best-effort) and always clears local session state.
- Admin CRUD pages live at `/admin/{events,startups,programs,resources,partners,mentors,team-members,board-members}`, all wrapped in `AdminLayout.vue` (sidebar nav + logout). Each page follows the same pattern: load list on mount, inline create/edit form, delete with a confirm dialog, and loading/error/empty states.
- File/image uploads (mentor & team/board member photos, partner & startup logos, resource covers/PDFs, program brochures, event cover/gallery images) go through `src/services/fileUploadService.ts` (`POST /api/files/upload`) via the reusable `src/components/admin/AdminFileUploadField.vue` component, which also accepts a manual URL/path as a fallback to actually uploading a file.

## Backend integration notes

- The backend (`idrp-backend`) is seeded and its public GET endpoints, public form POST endpoints, and JWT-protected admin endpoints are live. This frontend is **partially** wired to it:
  - Wired to the backend: admin auth, and all admin CRUD services (`src/services/*AdminService.ts`) for Events, Startups, Programs, Resources, Partners, Mentors, Team Members, and Board Members.
  - Still on static data (`src/data/*.ts`): most public pages (About, Team, Partners, Mentors, Investment Committee, Startups, Events, Resources, NAIN, programs, Careers). These were previously wired to the backend in an earlier pass and reverted back to static data; the working (but currently unused) integration code was removed as dead code rather than left commented out. Swapping a page back to live data means re-adding an `onMounted` fetch through the matching service (or a new one) with a static-data fallback on error, following the pattern already used in `src/services/eventService.ts` / `startupService.ts`.
- Types in `src/types/` are kept in sync with backend DTOs where known:
  - `Startup.categories: StartupCategory[]` (array, matches `StartupRequestDto`/`StartupResponseDto`).
  - `ProgramAdminItem`/`ProgramAdminPayload` include `brochureUrl`, `applyUrl`, `features: string[]`.
  - `MentorAdminItem`/`MentorAdminPayload` include `profileImageUrl`.
  - NAIN project fields (institute + year support + team) — see `src/types/nain.ts`; the public NAIN page groups the backend's flat per-project rows into institutes/years client-side.
- Careers is intentionally not wired to a backend endpoint — the jobs list (`src/data/careers.ts`) is empty on purpose (no finalized job data yet), and the page/route/detail view are all kept in place so an admin `AdminJobsView` + `GET /api/jobs` can be added later without touching page structure.
- Before wiring a new page to the backend: confirm the response shape matches `ApiResponse<T>` (`{ success, message, data }`, with `data` sometimes a `{ content: T[] }` page) and add a static-data fallback on fetch failure, matching the existing public services.
