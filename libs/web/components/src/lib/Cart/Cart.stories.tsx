import { ComponentStory, ComponentMeta } from '@storybook/react';
import Cart from './Cart';

export default {
  component: Cart,
  title: 'Cart',
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const Cart1 = Template.bind({});

Cart1.args = {
  image: 'https://picsum.photos/800',
  item: 'T-shirt',
  price: 200.34,
  quantity: 2,
};
