import { lazy } from 'react'

const NotFoundPage = lazy(async () => await import('./not-found-page'))

export default NotFoundPage
