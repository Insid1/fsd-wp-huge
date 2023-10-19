import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config'
import { PageLoader } from 'widgets/page-loader'

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {routeConfig.map(({ element, ...routeProps }) => (
          <Route key={routeProps.path} element={(
            <div className="page">
              {element}
            </div>
          )} {...routeProps}/>
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
