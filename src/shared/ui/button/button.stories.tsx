import type { Meta, StoryObj } from '@storybook/react'

import Button from './button'

type TButton = typeof Button

const meta: Meta<TButton> = {
  title: 'Button',
  component: Button,
  // ...
}

type Story = StoryObj<TButton>

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Click me',
    themeType: 'primary',
  },
  // ...
}
export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Click me',
    themeType: 'secondary',
  },
  // ...
}

export default meta
