import { ThemeContext } from 'app/providers/theme-prodiver/lib/theme-context'
import type React from 'react'
import { useCallback, useContext } from 'react'
import { type IThemeContext, type ThemeType } from './intefaces'

interface IUseTheme {
  theme: IThemeContext['theme']
  setTheme: IThemeContext['setTheme']
  toggleTheme: () => void
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext)

  if (!theme) {
    throw new Error('hook called outside of theme context')
  }

  const handleSetTheme: React.Dispatch<React.SetStateAction<ThemeType>> = useCallback((themeAction) => {
    if (typeof themeAction === 'function') {
      const currentTheme = themeAction(theme)
      setTheme(currentTheme)
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme)
    }

    if (typeof themeAction === 'string') {
      setTheme(themeAction)
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeAction)
    }
  }, [setTheme])

  const toggleTheme = useCallback(() => {
    setTheme((prevState) => prevState === 'light' ? 'dark' : 'light')
  }, [setTheme])

  return { theme, setTheme: handleSetTheme, toggleTheme }
}
