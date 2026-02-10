# Docker Compose standards

Follow these patterns when creating or editing Compose files in this project. They match the setup used for React, Angular, Vue, Next.js, Nuxt, Remix, Analog, and TanStack Start.

## Service naming

- Use one main service per app; name in **kebab-case** (e.g. `react-app`, `vue-app`, `nuxt-app`, `remix-app`, `analog-app`, `tanstack-start-app`, `angular-static`). Use multiple services only when offering distinct variants (e.g. Next.js static export vs standalone).

## Build

- `build.context: .`
- `build.dockerfile: Dockerfile` (or explicit `Dockerfile.standalone`, `Dockerfile.export`, etc. when multiple Dockerfiles exist).
- `build.args`: pass the same ARGs the Dockerfile expects. Always include `NODE_VERSION` (e.g. `24.12.0-alpine`). For static/SPA include `NGINX_VERSION: alpine3.22`. For Angular include `APP_NAME` when the Dockerfile uses it (e.g. `APP_NAME: angular`).

## Image and container

- `image: <service-name>-image` (e.g. `react-app-image`, `nuxt-app-image`).
- `container_name: <service-name>-container` (e.g. `react-app-container`).

## Ports

- Map host to container explicitly: static/SPA `"8080:8080"`; Node/SSR `"3000:3000"`. Use string form (`"8080:8080"` or `'8080:8080'`) for consistency.

## Restart and environment

- `restart: unless-stopped` for all services.
- Set `environment` when the app expects it: `NODE_ENV: production`, and for Node SSR `PORT: 3000`; add `HOST: 0.0.0.0` for frameworks that need it (Nuxt, Analog, TanStack).

## File format

- Use `compose.yml` (or `docker-compose.yml`) and consistent indentation (2 spaces). Do not add unnecessary services or volumes unless required.

## Avoid

- Do **not** use unpinned image tags in `build.args` (e.g. avoid `NODE_VERSION: latest`); use explicit versions like `24.12.0-alpine`.
- Do **not** omit `restart: unless-stopped` for production-oriented services.
- Do **not** add volumes or extra services (e.g. DB) unless the app actually needs them; keep the file minimal and focused.
