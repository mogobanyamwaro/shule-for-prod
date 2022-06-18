import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Search = Template.bind({});

Search.args = {
  bgColor: 'bg-primary',
  py: 'py-2',
};
