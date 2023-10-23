import { type Meta, type StoryObj } from '@storybook/react'
import ThemeSwitcher from './theme-switcher'

const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const ThemeSwitcherStory: Story = {
  name: 'Default',
  args: {},
}
