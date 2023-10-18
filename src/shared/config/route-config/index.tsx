import { type RouteProps } from 'react-router-dom'
import { MainPageAsync } from 'pages/main-page'
import { AboutPageAsync } from 'pages/about-page'
import { NotFoundPage } from 'pages/not-found-page'

export enum ERoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const RoutePathMap: Record<ERoutes, string> = {
  [ERoutes.MAIN]: '/',
  [ERoutes.ABOUT]: '/about',
  [ERoutes.NOT_FOUND]: '*',
}

export const routeConfig: RouteProps[] = [
  {
    element: <MainPageAsync/>,
    path: RoutePathMap.main,
  },
  {
    element: <AboutPageAsync/>,
    path: RoutePathMap.about,
  },
  {
    element: <NotFoundPage/>,
    path: RoutePathMap.notFound,
  },
]
