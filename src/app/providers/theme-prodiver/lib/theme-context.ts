import { createContext } from 'react'
import { type IThemeContext } from 'shared/config'

export const ThemeContext = createContext<IThemeContext>({})
