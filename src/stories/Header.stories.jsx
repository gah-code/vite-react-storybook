// import { fn } from '@storybook/test';

// import { Header } from './Header';

// export default {
//   title: 'Example/Header',
//   component: Header,
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   parameters: {
//     // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
//     layout: 'fullscreen',
//   },
//   args: {
//     onLogin: fn(),
//     onLogout: fn(),
//     onCreateAccount: fn(),
//   },
// };

// export const LoggedIn = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };

// export const LoggedOut = {};

// import React from 'react';
// import { Header } from '../elements/Header.jsx';

// export default {
//   title: 'Elements/Header',
//   component: Header,
//   parameters: {
//     layout: 'centered',
//   },
//   tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// const Template = (args) => <Header {...args} />;

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   title: 'Large Header',
// };

// export const Medium = Template.bind({});
// Medium.args = {
//   size: 'medium',
//   title: 'Medium Header',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   title: 'Small Header',
// };

import { Header } from '../elements/Header.jsx';

export default {
  title: 'Elements/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Header {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  title: 'Large Header',
  bold: true,
  centered: true,
  uppercase: false,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  title: 'Medium Header',
  bold: false,
  centered: false,
  uppercase: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  title: 'Small Header',
  bold: false,
  centered: true,
  uppercase: false,
};
