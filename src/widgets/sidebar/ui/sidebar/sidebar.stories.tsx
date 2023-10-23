import type { Meta, StoryObj } from '@storybook/react'

import Sidebar from './sidebar'

type TSidebar = typeof Sidebar

const meta: Meta<TSidebar> = {
  title: 'Sidebar',
  component: Sidebar,
}

type Story = StoryObj<TSidebar>

export const Primary: Story = {
  args: {
  },
}

export default meta
