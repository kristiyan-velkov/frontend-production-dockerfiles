# Frontend Prod Dockerfiles

Production-ready **Dockerfiles** for **React.js, Angular, Vue.js, Next.js, Remix.js (React Router), TanStack Start, Analog.js, Nuxt.js** applications.

These Dockerfiles are optimized for **performance, security, and minimal image size** to ensure efficient and scalable deployments.

**Author**

- [Kristiyan Velkov](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)
- [Blog - Medium](https://medium.com/@kristiyanvelkov)

## Features

- 🛠 **Optimized for Production** – Ensures smaller, faster, and more secure images.
- 🔒 **Security Best Practices** – Uses non-root users and follows Docker security guidelines.
- ⚡ **Multi-Stage Builds** – Reduces final image size by separating build and runtime environments.
- 🚀 **Efficient Caching** – Utilizes layer caching to speed up builds.
- 📦 **Minimal Base Images** – Uses lightweight images like `alpine` to reduce attack surface.

## Supported Frameworks / Libraries

| Framework             | Version            | Directory         |
| --------------------- | ------------------ | ----------------- |
| ✅ **React.js**       | v19.2              | `react.js/`       |
| ✅ **Next.js**        | v16                | `next.js/`        |
| ✅ **Remix.js**       | React Router v7.10 | `remix.js/`       |
| ✅ **TanStack Start** | v1.132             | `tanstack-start/` |
| ✅ **Angular**        | v21                | `angular/`        |
| ✅ **Analog.js**      | v2.2 (Angular 21)  | `analog.js/`      |
| ✅ **Vue.js**         | v3.5               | `vue.js/`         |
| ✅ **Nuxt.js**        | v4.2               | `nuxt.js/`        |

## Getting Started

Clone the repository and navigate to the desired framework directory:

```sh
git clone https://github.com/kristiyan-velkov/frontend-dockerfiles.git
cd frontend-dockerfiles/<framework>
```

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed on your machine.
- [Task](https://taskfile.dev/installation/) installed to use the Task commands.

_or if you prefer Make_:

- [Make](<https://en.wikipedia.org/wiki/Make_(software)>) installed to use the Makefile commands.

---

## Usage

| Taskfile Command       | Makefile Command       | Description                          |
| ---------------------- | ---------------------- | ------------------------------------ |
| `task`                 | `make`                 | Show available commands.             |
| `task build`           | `make build`           | Build the Docker image.              |
| `task run`             | `make run`             | Run the Docker container.            |
| `task build-run`       | `make build-run`       | Build and run the Docker container.  |
| `task stop`            | `make stop`            | Stop the Docker container.           |
| `task restart`         | `make restart`         | Restart the Docker container.        |
| `task logs`            | `make logs`            | Show logs from the Docker container. |
| `task clean`           | `make clean`           | Remove Docker image and container.   |
| `task clean-container` | `make clean-container` | Remove only the Docker container.    |
| `task clean-image`     | `make clean-image`     | Remove only the Docker image.        |

---

### Environment Variables

The following variables are defined in the `Taskfile` and `Makefile` and can be customized if needed:

| Variable         | Description                                                                          |
| ---------------- | ------------------------------------------------------------------------------------ |
| `IMAGE_NAME`     | The name of the Docker image.                                                        |
| `CONTAINER_NAME` | The name of the Docker container.                                                    |
| `HOST_PORT`      | The port on the host machine that the container will map to.                         |
| `CONTAINER_PORT` | The port inside the Docker container where the application is served.                |
| `DOCKERFILE`     | The Dockerfile to use.                                                               |
| `NODE_VERSION`   | The version of Node.js used in the base image. Can be updated for easier migrations. |
| `NGINX_VERSION`  | The version of Nginx used for static file serving (SPA applications).                |

---

## Port Reference

| Framework          | Default Port | Server Type    |
| ------------------ | ------------ | -------------- |
| **React.js**       | 8080         | Nginx (static) |
| **Angular**        | 8080         | Nginx (static) |
| **Vue.js**         | 8080         | Nginx (static) |
| **Next.js**        | 3000         | Node.js (SSR)  |
| **Nuxt.js**        | 3000         | Node.js (SSR)  |
| **Analog.js**      | 3000         | Node.js (SSR)  |
| **Remix.js**       | 3000         | Node.js (SSR)  |
| **TanStack Start** | 3000         | Node.js (SSR)  |

---

### 📌 Contribution

Contributions are always welcome, whether it's reporting issues, improving documentation, fixing bugs, or adding new features. This project is for everyone! 💙
And yes, it's open-source! 🎉

---

### ☕ Support My Work

If you find my work helpful and would like to support me, consider donating via:

- [Revolut](https://revolut.me/kristiyanvelkov)
- [Buy Me a Coffee](https://www.buymeacoffee.com/kristiyanvelkov)
- [GitHub Sponsors](https://github.com/sponsors/kristiyan-velkov)

Your support helps me continue creating valuable content for the community. Thank you! 🚀

---

### 📬 Contact me

If you'd like to connect, feel free to reach out via:

- [LinkedIn](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)
- [X.com](https://x.com/krisvelkov)

Looking forward to chatting with you! 🚀

---

### License

This project is licensed under the MIT License.
