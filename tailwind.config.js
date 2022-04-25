module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff7338',
      },
      screens: {
        mdd: '850px',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tw-elements/dist/plugin')],
};
