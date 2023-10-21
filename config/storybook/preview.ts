import { type Preview } from '@storybook/react'
import { withStyleDecorator } from './decorators/style-decorator'
import { themeDecorator } from './decorators/theme-decorator'

const preview: Preview = {
  parameters: {},
  decorators: [withStyleDecorator, themeDecorator('light')],
}

export default preview
