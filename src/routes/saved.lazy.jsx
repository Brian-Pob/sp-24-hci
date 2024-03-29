import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/saved')({
  component: () => <div>Hello /saved!</div>
})