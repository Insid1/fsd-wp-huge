import {render} from "react-dom";
import App from "./app";
import "./styles/index.scss";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/theme-provider";

render((
    <ThemeProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>

  ),
  document.getElementById("root")
)
