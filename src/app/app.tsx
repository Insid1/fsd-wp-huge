import {useTheme} from "shared/config";
import {classNames} from "shared/lib";
import {AppRouter} from "app/providers/router-provider";


function App() {

  const {theme, toggleTheme, setTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>сменить тему</button>
      <button onClick={() => setTheme("light")}>light</button>
      <AppRouter />
    </div>
  );
}

export default App;
