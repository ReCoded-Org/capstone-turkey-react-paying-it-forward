module.exports = {
  content: [
    './src/**/*.{js,jsx,}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens: {
      xs: '300px',
      sm: '640px',
      md: '768px',
      mdd: '850px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {},
    colors: {
      white: '#FFFFFF',
      primary: '#FF7338',
      blue: '#1FB6FF',
      pink: '#ff49DB',
      orange: '#FF7338',
      green: '#13CE66',
      'gray-dark': '#273444',
      gray: '#8492A6',
      'gray-light': '#D3DCE6',
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tw-elements/dist/plugin')],
  tailwindcss: {},
  autoprefixer: {},
};
