import { type Decorator } from '@storybook/react'
import '../../../src/app/styles/index.scss'

export const withStyleDecorator: Decorator = (Story) => (
  <div style={{ margin: '3em' }}>
    <Story/>
  </div>
)
