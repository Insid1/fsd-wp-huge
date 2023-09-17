import {AppRouter} from "./providers/router-provider";
import "app/styles/index.scss";
import {Navbar} from "widgets/navbar";
import {useTheme} from "shared/config";
import {Sidebar} from "widgets/sidebar";
import 'shared/config/i18n'
import {Suspense} from "react";


function App() {
  const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      {/* i18n translations might still be loaded by the http backend. */}
      <Suspense fallback="">
        <Navbar/>
        <div className="contentPage">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App;
