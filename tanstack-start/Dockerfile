# =========================================
# Stage 1: Build the TanStack Start Application
# =========================================
ARG NODE_VERSION=24.11.1-alpine

# Use a lightweight Node.js image for building (customizable via ARG)
FROM node:${NODE_VERSION} AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package-related files first to leverage Docker's caching mechanism
COPY package.json package-lock.json ./

# Install project dependencies using npm ci (ensures a clean, reproducible install)
RUN npm ci

# Copy the rest of the application source code into the container
COPY . .

# Build the TanStack Start application (outputs to /app/.output)
RUN npm run build

# =========================================
# Stage 2: Run the TanStack Start Server
# =========================================
FROM node:${NODE_VERSION} AS runner

# Set the working directory
WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy the built server and client assets from the builder stage
COPY --from=builder /app/.output ./

# Switch to the non-root user
USER node 

# Expose the application port
EXPOSE 3000

ENTRYPOINT ["node", "server/index.mjs"]
