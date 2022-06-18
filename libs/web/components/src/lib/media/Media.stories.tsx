import { ComponentStory, ComponentMeta } from '@storybook/react';

import Media from './Media';

export default {
  component: Media,
  title: 'Media',
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = (args) => <Media {...args} />;

export const MediaComponent = Template.bind({});

MediaComponent.args = {
  image: 'https://picsum.photos/800',
  alt: 'person',
  title: 'John Doe',
  description:
    'l sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure',
};
