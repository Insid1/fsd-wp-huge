import {ThemeContext} from "./theme-context";
import React, {useCallback, useContext} from "react";
import {IThemeContext, ThemeType} from "./intefaces";

interface IUseTheme {
  theme: IThemeContext['theme'];
  setTheme: IThemeContext['setTheme'];
  toggleTheme: () => void;
}

const LOCAL_STORAGE_THEME_KEY = 'theme';

export const useTheme = (): IUseTheme => {
  const {theme, setTheme} = useContext(ThemeContext)

  if (!theme) {
    throw new Error("hook called outside of theme context")
  }

  const handleSetTheme: React.Dispatch<React.SetStateAction<ThemeType>> = useCallback((themeAction) => {
    if (typeof themeAction === 'function') {
      const currentTheme = themeAction(theme)
      setTheme(currentTheme)
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme)
    }

    if (typeof themeAction === "string") {
      setTheme(themeAction)
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeAction)
    }
  }, [setTheme])

  const toggleTheme = useCallback(() => {
    setTheme((prevState) => prevState === "light" ? "dark" : "light")
  }, [setTheme])


  return {theme, setTheme: handleSetTheme, toggleTheme}
}
