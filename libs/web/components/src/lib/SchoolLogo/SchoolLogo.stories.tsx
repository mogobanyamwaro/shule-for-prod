import { ComponentStory, ComponentMeta } from '@storybook/react';
import SchoolLogo from './SchoolLogo';

export default {
  component: SchoolLogo,
  title: 'SchoolLogo',
} as ComponentMeta<typeof SchoolLogo>;

const Template: ComponentStory<typeof SchoolLogo> = (args) => (
  <SchoolLogo {...args} />
);

export const SchoolLogo1 = Template.bind({});

SchoolLogo1.args = {
  Logo: 'https://picsum.photos/800',
};
