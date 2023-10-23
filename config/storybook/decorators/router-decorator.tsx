import { type Decorator } from '@storybook/react'
import '../../../src/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const withRouterDecorator: Decorator = (Story) => (
  <BrowserRouter>
    <Story/>
  </BrowserRouter>
)
