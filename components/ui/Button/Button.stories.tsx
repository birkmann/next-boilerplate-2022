import Button from './Button'

const Props = {
  title: 'Button',
  component: Button,
}

const Template = (args: any) => <Button {...args}>Button Text</Button>

export const DefaultButton = Template.bind({})

export default Props
