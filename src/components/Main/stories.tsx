import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Heading: Story = (args) => <Main {...args} />

Heading.args = {
  title: 'Heading'
}
