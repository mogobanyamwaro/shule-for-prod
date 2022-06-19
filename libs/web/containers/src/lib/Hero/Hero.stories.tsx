import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hero from './Hero';

export default {
  component: Hero,
  title: 'Hero',
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const HeroSection = Template.bind({});

HeroSection.args = {
  backgroundImage: 'bg-Home',
  searchImage: 'https://picsum.photos/800',
};
