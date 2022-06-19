import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WebContainers } from './web-containers';

export default {
  component: WebContainers,
  title: 'WebContainers',
} as ComponentMeta<typeof WebContainers>;

const Template: ComponentStory<typeof WebContainers> = (args) => (
  <WebContainers {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
