import { type Decorator } from '@storybook/react'
import '../../../src/app/styles/index.scss'
import { type ThemeType } from '../../../src/shared/config'

// eslint-disable-next-line react/display-name
export const themeDecorator = (theme: ThemeType): Decorator => (Story) => (
  <div className={theme} style={{ margin: '3em' }}>
    <Story/>
  </div>
)
