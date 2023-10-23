import { type Decorator } from '@storybook/react'
import '../../../src/app/styles/index.scss'
import { useTheme } from 'shared/config'

export const withStyleDecorator: Decorator = (Story) => {
  const { theme } = useTheme()
  return (
    <div className={theme}>
      <Story/>
    </div>
  )
}
