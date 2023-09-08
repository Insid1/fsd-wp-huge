import {Route, Routes} from "react-router-dom"
import {MainPageAsync} from "pages/main-page";
import {AboutPageAsync} from "pages/about-page";
import {Suspense} from "react";
import {useTheme} from "shared/config";
import {classNames} from "shared/lib";


function App() {

  const {theme, toggleTheme, setTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>сменить тему</button>
      <button onClick={() => setTheme("light")}>light</button>
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<MainPageAsync/>}/>
          <Route path="/about" element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
