import Counter from "./components/counter";
import {Route, Routes} from "react-router-dom"
import {MainPageAsync} from "./pages/main-page";
import {AboutPageAsync} from "./pages/about-page";
import {Suspense} from "react";


function App() {
  return (
    <>
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<MainPageAsync/>}/>
          <Route path="/about" element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
      <Counter/>
    </>
  );
}

export default App;
