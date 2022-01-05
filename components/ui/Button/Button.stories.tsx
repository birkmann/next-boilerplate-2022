import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = (args: any) => <Button {...args}>Button Text</Button>

export const DefaultButton = Template.bind({})
