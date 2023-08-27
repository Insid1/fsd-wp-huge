import Counter from "./components/counter";
import {Route, Routes} from "react-router-dom"
import {MainPageAsync} from "./pages/main-page";
import {AboutPageAsync} from "./pages/about-page";
import {Suspense, useState} from "react";
import {ThemeType} from "./theme/intefaces";
import ThemeProvider from "./theme/theme-provider";
import {useTheme} from "./theme/use-theme";
import {classNames} from "./helpers/class-names";


function App() {

  const {theme, toggleTheme, setTheme} = useTheme()

  classNames
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
      <Counter/>
    </div>
  );
}

export default App;
