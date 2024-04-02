/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchResultsImport } from './routes/search-results'
import { Route as SearchImport } from './routes/search'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as EventsEventIdImport } from './routes/events.$eventId'

// Create Virtual Routes

const SavedLazyImport = createFileRoute('/saved')()
const CreateLazyImport = createFileRoute('/create')()
const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const SavedLazyRoute = SavedLazyImport.update({
  path: '/saved',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/saved.lazy').then((d) => d.Route))

const CreateLazyRoute = CreateLazyImport.update({
  path: '/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/create.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const SearchResultsRoute = SearchResultsImport.update({
  path: '/search-results',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const EventsEventIdRoute = EventsEventIdImport.update({
  path: '/events/$eventId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/search-results': {
      preLoaderRoute: typeof SearchResultsImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/create': {
      preLoaderRoute: typeof CreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/saved': {
      preLoaderRoute: typeof SavedLazyImport
      parentRoute: typeof rootRoute
    }
    '/events/$eventId': {
      preLoaderRoute: typeof EventsEventIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LoginRoute,
  SearchRoute,
  SearchResultsRoute,
  AboutLazyRoute,
  CreateLazyRoute,
  SavedLazyRoute,
  EventsEventIdRoute,
])

/* prettier-ignore-end */
