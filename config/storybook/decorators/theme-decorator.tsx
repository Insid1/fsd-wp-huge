import { type Decorator } from '@storybook/react'
import '../../../src/app/styles/index.scss'
import { type ThemeType } from '../../../src/shared/config'
import { ThemeProvider } from 'app/providers'

// eslint-disable-next-line react/display-name
export const withThemeDecorator = (theme: ThemeType): Decorator => (Story) => (
  <ThemeProvider>
    <div className={theme} style={{ margin: '3em' }}>
      <Story/>
    </div>
  </ThemeProvider>
)
