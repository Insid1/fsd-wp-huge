import { createContext } from 'react'
import { type IThemeContext, LOCAL_STORAGE_THEME_KEY, type ThemeType } from 'shared/config'

const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
export const ThemeContext = createContext<IThemeContext>({
  theme: localStorageTheme ? localStorageTheme as ThemeType : 'light',
  setTheme: () => {
  }
})
