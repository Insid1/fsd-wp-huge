import { type Meta, type StoryObj } from '@storybook/react'
import Link from './link'
import { ERoutes } from 'shared/config/route-config'

const meta = {
  title: 'shared/Link',
  component: Link,
} satisfies Meta<typeof Link>

type Story = StoryObj<typeof meta>

export const LinkStory: Story = {
  name: 'Secondary',
  args: {
    to: ERoutes.NOT_FOUND,
    children: 'not found page',
    color: 'secondary',
  },
}

export default meta
