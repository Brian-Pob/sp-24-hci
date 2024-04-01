import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/search-results')({
  component: () => <div>Hello /search-results!</div>
})