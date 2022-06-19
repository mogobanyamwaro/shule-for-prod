import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from './navbar';

export default {
  component: Navbar,
  title: 'Navbar',
};

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarContainer = Template.bind({});

NavbarContainer.args = {
  Logo: 'https://picsum.photos/800',
};
