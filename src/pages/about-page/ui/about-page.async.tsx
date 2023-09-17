import { lazy } from 'react'

const AboutPageAsync = lazy(async () => await import('./about-page'))

export default AboutPageAsync
