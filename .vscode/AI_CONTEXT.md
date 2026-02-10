# AI context for VS Code (and other editors)

This file helps AI assistants give consistent suggestions in this project. When editing the following file types, use the standards below.

## When editing Dockerfiles (`Dockerfile`, `Dockerfile.*`)

Follow the full standards in **[docs/DOCKERFILE_STANDARDS.md](../docs/DOCKERFILE_STANDARDS.md)**. In short:

- Multi-stage build: `builder` + `runner` (optional `base`).
- ARG at top: `NODE_VERSION=24.12.0-alpine`, and for static apps `NGINX_VERSION=alpine3.22`.
- `WORKDIR /app`; copy `package.json` / `package-lock.json*` first; `RUN npm ci` then `COPY . .` and `RUN npm run build`.
- Static/SPA runner: `nginxinc/nginx-unprivileged`, copy build to `/usr/share/nginx/html`, `USER nginx`, `EXPOSE 8080`; use an app `nginx.conf` with `pid /tmp/nginx.pid`, `listen 8080`, gzip, and SPA `try_files`.
- Node/SSR runner: copy only needed artifacts, `ENV NODE_ENV=production PORT=3000`, `USER node`, `EXPOSE 3000`.
- Use `COPY --link`; non-root user in runner; pinned Alpine/slim tags (no `:latest`).
- Use `.dockerignore` (exclude `node_modules/`, `.git/`, `Dockerfile`, `*.env*`, etc.). Avoid: running as root, unpinned tags, copying `node_modules` into runner.

## When editing Docker Compose (`compose.yml`, `docker-compose.yml`)

Follow the full standards in **[docs/DOCKER_COMPOSE_STANDARDS.md](../docs/DOCKER_COMPOSE_STANDARDS.md)**. In short:

- Service name: kebab-case (e.g. `react-app`, `nuxt-app`).
- `build.context: .`, `build.dockerfile: Dockerfile`, `build.args` with pinned `NODE_VERSION` (and `NGINX_VERSION`, `APP_NAME` when needed)—no `latest`.
- `image: <service-name>-image`, `container_name: <service-name>-container`.
- Ports: `"8080:8080"` (static) or `"3000:3000"` (Node); `restart: unless-stopped`; set `environment` (NODE_ENV, PORT, HOST) when required.
- Avoid: unpinned build args, omitting `restart`, adding unnecessary volumes or services.

Reference the docs in `docs/` for full details.
