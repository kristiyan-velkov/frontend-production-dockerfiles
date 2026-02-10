# Production Dockerfile standards

Follow these patterns when creating or editing Dockerfiles in this project. They reflect the standards used across React, Angular, Vue, Next.js, Nuxt, Remix, Analog, and TanStack Start.

## Structure

- Use **multi-stage builds**: at least `builder` and `runner`. Use an optional `base` stage (e.g. Next.js) when dependencies and build steps are separate.
- Name stages explicitly: `AS builder`, `AS runner`, and `AS base` if used.
- Add clear section comments: `# =========================================` and `# Stage N: Short description`.

## Build stage (builder)

- Declare build-time versions as **ARG at the top**: `NODE_VERSION=24.12.0-alpine`; for static/SPA add `NGINX_VERSION=alpine3.22`. Use these in `FROM` so they can be overridden at build time.
- Set `WORKDIR /app`.
- Copy dependency files first for better cache: `COPY --link package.json package-lock.json* ./` (use `--link` for BuildKit).
- Install with `RUN npm ci` (or `npm ci --omit=dev` in a base stage when applicable). Optionally use `RUN --mount=type=cache,target=/root/.npm npm ci` for npm cache; optionally `npm cache clean --force` after install where you use `--omit=dev`.
- Then `COPY --link . .` and `RUN npm run build`. Rely on `.dockerignore` to exclude unneeded files.

## Runner stage — static/SPA (React, Vue, Angular)

- `FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner`.
- Copy app nginx config: `COPY --link nginx.conf /etc/nginx/nginx.conf`.
- Copy only build output from builder (e.g. `--from=builder /app/dist` or Angular's `dist/${APP_NAME}/browser`) to `/usr/share/nginx/html`.
- `USER nginx`. `EXPOSE 8080`. Start with `ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]` and `CMD ["-g", "daemon off;"]`.

## Runner stage — Node/SSR (Next, Nuxt, Remix, Analog, TanStack Start)

- `FROM node:${NODE_VERSION} AS runner`. `WORKDIR /app`.
- Set `ENV NODE_ENV=production`, `ENV PORT=3000`; add `ENV HOST=0.0.0.0` when the server must bind to all interfaces (Nuxt, Analog, TanStack).
- Copy only what is needed from builder (standalone output, `.next/standalone`, `.output`, `dist/analog`, `build`, etc.). Do not include devDependencies in runner unless required to run the app.
- `USER node`. `EXPOSE 3000`. `ENTRYPOINT` with `node` (e.g. `node server.js`, `node server/index.mjs`) or `npm run start` as used in this repo.

## .dockerignore

Use a `.dockerignore` so `COPY . .` does not pull in unnecessary or sensitive files. At minimum exclude:

- `node_modules/`, `dist/`, `out/`, `.tmp/`, `.cache/`
- `.git/`, `.gitignore`, `.vscode/`, `.idea/`, `.DS_Store`
- `Dockerfile`, `.dockerignore`, `docker-compose.yml`, `docker-compose.override.yml`
- `*.env*` (or allow only `!.env.production` if the app needs it), `*.log`
- `.eslintcache`, `coverage/`, `*.tsbuildinfo`, debug logs (`npm-debug.log*`, etc.)

This keeps the build context small and avoids copying secrets or dev-only files.

## nginx.conf (static/SPA only)

When using `nginxinc/nginx-unprivileged`, provide an app-level `nginx.conf` that:

- Uses `pid /tmp/nginx.pid` (writable by non-root).
- Sets `listen 8080` (not 80) and `root /usr/share/nginx/html`.
- Uses `access_log off` or to a path nginx can write; `error_log /dev/stderr warn`.
- Enables gzip and sensible caching (e.g. long cache for static assets, `try_files $uri /index.html` for SPA routing).

Copy from an existing framework (e.g. `react.js/nginx.conf`) and adjust `server_name` or paths if needed.

## Avoid

- Do **not** run the runner stage as root: always `USER nginx` or `USER node`.
- Do **not** use unpinned tags (e.g. `node:latest`, `nginx:latest`); use explicit versions like `24.12.0-alpine`, `alpine3.22`.
- Do **not** copy `node_modules` or build tools into the runner stage; copy only runtime artifacts.
- Do **not** leave devDependencies in the runner image unless the process needs them to run.
- Do **not** skip `.dockerignore`; it keeps builds fast and secure.

## General

- Prefer `COPY --link` (and `--from=builder` with `--link` where supported) for better layer caching.
- Always run as non-root in runner: `USER nginx` or `USER node`.
- Use Alpine/slim base images and pinned tags (e.g. `24.12.0-alpine`, `alpine3.22`) for smaller, reproducible images.
- Keep runner minimal: no build tools or dev deps unless necessary to run the app.
