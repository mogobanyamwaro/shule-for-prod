import Button from './button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Login = Template.bind({});

export const ViewSchoolsButton = Template.bind({});

export const ShopNowButton = Template.bind({});

export const ReadMoreButton = Template.bind({});

export const SignInButton = Template.bind({});

export const InstitutionButton = Template.bind({});

export const IndividualButton = Template.bind({});

export const SignIn = Template.bind({});

export const SignUp = Template.bind({});

export const Upload = Template.bind({});

export const Submit = Template.bind({});

Login.args = {
  bgColor: 'bg-primaryDark',
  textColor: 'text-main',
  children: 'Log In',
  px: 'px-10',
  py: 'py-2',
  bgColorHover: 'bg-primaryDark ',
};
ViewSchoolsButton.args = {
  bgColor: 'bg-primaryDark',
  textColor: 'text-main',
  children: 'View Schools',
  px: 'px-10',
  py: 'py-4',
  bgColorHover: 'bg-primaryDark ',
};

ShopNowButton.args = {
  bgColor: 'bg-primaryDark',
  textColor: 'text-main',
  children: 'Shop Now',
  px: 'px-10',
  py: 'py-4',
  bgColorHover: 'bg-primaryDark ',
};

ReadMoreButton.args = {
  bgColor: 'bg-primaryDark',
  textColor: 'text-main',
  children: 'Read More',
  px: 'px-10',
  py: 'py-4',
  bgColorHover: 'bg-primaryDark ',
};

SignInButton.args = {
  bgColor: 'bg-main',
  textColor: 'text-white',
  children: 'Sign In',
  px: 'px-10',
  py: 'py-2',
  bgColorHover: 'bg-main ',
};

InstitutionButton.args = {
  bgColor: 'bg-main',
  textColor: 'text-white',
  children: 'Institution',
  px: 'px-10',
  py: 'py-4',
  bgColorHover: 'bg-main ',
};

IndividualButton.args = {
  bgColor: 'bg-main',
  textColor: 'text-white',
  children: 'Individual',
  px: 'px-10',
  py: 'py-4',
  bgColorHover: 'bg-main ',
};

SignIn.args = {
  textColor: 'text-main',
  children: 'Sign In',
  px: 'px-10',
  py: 'py-2',
};

SignUp.args = {
  textColor: 'text-main',
  children: 'Sign Up',
  px: 'px-10',
  py: 'py-2',
};

Upload.args = {
  bgColor: 'bg-primaryDark',
  textColor: 'text-main',
  children: 'Upload',
  px: 'px-7',
  py: 'py-2',
  bgColorHover: 'bg-primaryDark ',
};

Submit.args = {
  bgColor: 'bg-primaryDark',
  textColor: 'text-main',
  children: 'Submit',
  px: 'px-10',
  py: 'py-3',
  bgColorHover: 'bg-primaryDark ',
};
