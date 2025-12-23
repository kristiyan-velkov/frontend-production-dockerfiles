import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main
      style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome to TanStack Start! 🚀</h1>
      <p>
        This is a production-ready TanStack Start application running in Docker.
      </p>
      <ul style={{ lineHeight: '2' }}>
        <li>✅ Server-Side Rendering (SSR)</li>
        <li>✅ File-based Routing</li>
        <li>✅ Type-safe Navigation</li>
        <li>✅ Docker Optimized</li>
      </ul>
    </main>
  )
}
