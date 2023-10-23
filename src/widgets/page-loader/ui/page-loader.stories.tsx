import { type Meta, type StoryObj } from '@storybook/react'
import PageLoader from './page-loader'

const meta = {
  title: 'widgets/PageLoader',
  component: PageLoader,
} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>

export const PageLoaderStory: Story = {
  name: 'Default',
  args: {},
}
