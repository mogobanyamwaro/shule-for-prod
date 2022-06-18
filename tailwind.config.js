const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      'libs/web/components/src/**/!(*.stories|*.spec).{ts,tsx,html,js}'
    ),
    join(
      __dirname,
      'apps/frontend/src/**/!(*.stories|*.spec).{ts,tsx,html,js}'
    ),

    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
    fontFamily: {
      glory: ['Glory', 'sans-serif'],
    },
    colors: {
      primary: '#FFEA9E',
      primaryDark: '#EDBB07',
      secondary: '#7E4BEB',
      green: '#159600',
      main: '#7E4BEB',
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [],
};
