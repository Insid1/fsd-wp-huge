import { lazy } from 'react'

const MainPageAsync = lazy(async () => await import('./main-page'))

export default MainPageAsync
