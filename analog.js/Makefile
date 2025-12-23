# Variables
IMAGE_NAME = analog-js-app
IMAGE_TAG = latest
CONTAINER_NAME = analog-js-container
HOST_PORT = 3000
CONTAINER_PORT = 3000
DOCKERFILE = Dockerfile
NODE_VERSION = 24.11.1-alpine

# Default target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make build          - Build the Docker image"
	@echo "  make run            - Run the Docker container"
	@echo "  make build-run      - Build and run the Docker container"
	@echo "  make stop           - Stop the Docker container"
	@echo "  make restart        - Restart the Docker container"
	@echo "  make logs           - Show container logs"
	@echo "  make clean          - Remove Docker image and container"
	@echo "  make clean-container - Remove only the Docker container"
	@echo "  make clean-image    - Remove only the Docker image"

# Build the Docker image
build:
	docker build --no-cache \
		--build-arg NODE_VERSION=$(NODE_VERSION) \
		-f $(DOCKERFILE) -t $(IMAGE_NAME):$(IMAGE_TAG) .

# Run the Docker container
run:
	@docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	docker run -d --name $(CONTAINER_NAME) -p $(HOST_PORT):$(CONTAINER_PORT) $(IMAGE_NAME):$(IMAGE_TAG)

# Build and run the Docker container in one step
build-run: build run

# Stop the Docker container
stop:
	docker stop $(CONTAINER_NAME)

# Restart the Docker container
restart: stop run

# Show logs from the Docker container
logs:
	docker logs -f $(CONTAINER_NAME)

# Clean up by removing Docker image and container
clean: clean-container clean-image

# Clean up by removing Docker container
clean-container:
	@docker rm -f $(CONTAINER_NAME) 2>/dev/null || true

# Clean up by removing Docker image
clean-image:
	@docker rmi $(IMAGE_NAME):$(IMAGE_TAG) 2>/dev/null || true

