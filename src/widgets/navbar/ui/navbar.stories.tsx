import { type Meta, type StoryObj } from '@storybook/react'
import Navbar from './navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const NavbarStory: Story = {
  name: 'Default',
  args: {},
}
