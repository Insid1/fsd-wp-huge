import {FC, useMemo, useState} from "react";
import {ThemeContext} from "./theme-context";
import {IThemeContext, ThemeType} from "./intefaces";

const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<ThemeType>("light")

  const defaultValue = useMemo<IThemeContext>(() => {
    return {theme, setTheme}
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>
  )
};

export default ThemeProvider;
