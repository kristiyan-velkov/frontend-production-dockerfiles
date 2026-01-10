# ============================================
# Base Stage: Use a Lightweight Node.js Image
# ============================================
ARG NODE_VERSION=24.12.0-alpine
FROM node:${NODE_VERSION} AS base

# Set the working directory inside the container
WORKDIR /app

# Copy only package-related files first to leverage Docker caching
COPY --link package.json package-lock.json* ./

# Set build-time environment variables
ENV NODE_ENV=production

# Install dependencies using npm ci (ensures a clean, reproducible install)
RUN npm ci --omit=dev && npm cache clean --force

# ============================================
# Stage 2: Build the Next.js Application
# ============================================
FROM base AS builder

# Copy the entire application source code into the container
COPY --link . .

# Build the application in standalone mode (outputs to `.next/standalone`)
RUN npm run build

# ============================================
# Stage 3: Create Production Image
# ============================================
FROM node:${NODE_VERSION} AS runner

# Set the port for the Next.js standalone server
ENV PORT=3000

# Disable Next.js telemetry during runtime
ENV NEXT_TELEMETRY_DISABLED=1

# Set the working directory inside the container
WORKDIR /app

# Copy only necessary files from the builder stage to keep the image minimal
COPY --link --from=builder /app/.next/standalone ./      
COPY --link --from=builder /app/.next/static ./.next/static
COPY --link --from=builder /app/public ./public     

# Use a built-in non-root user for security best practices
USER node

# Expose port 3000 to allow HTTP traffic
EXPOSE 3000

# Start the application using the standalone server
ENTRYPOINT ["node", "server.js"]
