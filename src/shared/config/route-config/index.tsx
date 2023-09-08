import {RouteProps} from "react-router-dom";
import {MainPageAsync} from "pages/main-page";
import {AboutPageAsync} from "pages/about-page";

export enum ERoutes {
  MAIN= 'main',
  ABOUT= 'about',
}

export const RoutePathMap: Record<ERoutes, string> = {
  [ERoutes.MAIN]: '/',
  [ERoutes.ABOUT]: '/about'
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
]
