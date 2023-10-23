import type { Meta, StoryObj } from '@storybook/react'

import Sidebar from './sidebar'

type TSidebar = typeof Sidebar

const meta: Meta<TSidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
}

type Story = StoryObj<TSidebar>

export const Default: Story = {
  args: {},
}

export default meta
