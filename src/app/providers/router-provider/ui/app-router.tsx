import {FC, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config";

const AppRouter: FC = () => {
  return (
    <Suspense fallback="Loading">
      <Routes>
        {routeConfig.map((routeProps) => (
          <Route key={routeProps.path} {...routeProps}/>
        ))}
      </Routes>
    </Suspense>
  )
};

export default AppRouter;
