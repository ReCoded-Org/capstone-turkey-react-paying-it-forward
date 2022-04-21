module.exports = {
  content: ['./src/**/*.{js,jsx,}'],
  theme: {
    screens: {
      xs: '300px',
      sm: '640px',
      md: '768px',
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
      blue: '#1fb6ff',
      pink: '#ff49db',
      orange: '#FF7338',
      green: '#13ce66',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [],
};