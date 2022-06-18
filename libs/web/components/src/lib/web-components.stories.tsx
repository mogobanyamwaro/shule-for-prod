import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WebComponents } from './web-components';

export default {
  component: WebComponents,
  title: 'WebComponents',
} as ComponentMeta<typeof WebComponents>;

const Template: ComponentStory<typeof WebComponents> = (args) => (
  <WebComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
