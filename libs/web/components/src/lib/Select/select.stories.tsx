import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './select';

export default {
  component: Select,
  title: 'Select',
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Select1 = Template.bind({});

Select1.args = {
  name: 'sell',
  options: ['selling', 'buying'],
};
