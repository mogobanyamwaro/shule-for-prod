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
      'libs/web/containers/src/**/!(*.stories|*.spec).{ts,tsx,html,js}'
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
      Elsie: ['Elsie', 'cursive'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    colors: {
      primary: '#FFEA9E',
      primaryDark: '#EDBB07',
      secondary: '#7E4BEB',
      green: '#159600',
      main: '#7E4BEB',
      mainDark: '#BB9F38',
      mainLight: '#A687E9',
      grayDark: '#666666',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#D9D9D9',
      table: '#F9FAFC',
    },
    backgroundImage: {
      Logo: 'url("apps/frontend/src/assets/Logo.svg")',
      Home: 'url("apps/frontend/src/assets/home.png")',
      HomeMd: 'url("apps/frontend/src/assets/md-home.png")',
      AdminHome: 'url("apps/frontend/src/assets/admin-home.png")',
    },
  },
  plugins: [],
};
