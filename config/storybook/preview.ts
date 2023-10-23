import { type Preview } from '@storybook/react'
import { withStyleDecorator } from './decorators/style-decorator'
import { withThemeDecorator } from './decorators/theme-decorator'
import { withRouterDecorator } from './decorators/router-decorator'

const preview: Preview = {
  parameters: {},
  decorators: [withRouterDecorator, withStyleDecorator, withThemeDecorator('light')],
}

export default preview
