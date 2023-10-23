import { type Meta, type StoryObj } from '@storybook/react'
import Loader from './loader'

const meta = {
  title: 'shared/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const LoaderStory: Story = {
  name: 'Default',
  args: {},
}
