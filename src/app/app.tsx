import {AppRouter} from "./providers/router-provider";
import "app/styles/index.scss";
import {Navbar} from "widgets/navbar";
import {useTheme} from "shared/config";


function App() {
  const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App;
