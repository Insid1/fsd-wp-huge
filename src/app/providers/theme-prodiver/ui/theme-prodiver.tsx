import { type FC, useMemo, useState } from 'react'
import { ThemeContext } from '../lib/theme-context'
import { type IThemeContext, type ThemeType } from 'shared/config'

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light')

  const defaultValue = useMemo<IThemeContext>(() => {
    return { theme, setTheme }
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
