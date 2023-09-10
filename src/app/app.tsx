import {AppRouter} from "./providers/router-provider";
import "app/styles/index.scss";
import {Navbar} from "widgets/navbar";
import {useTheme} from "shared/config";
import {Sidebar} from "widgets/sidebar";


function App() {
  const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Navbar/>
      <div className="contentPage">
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  )
}

export default App;
