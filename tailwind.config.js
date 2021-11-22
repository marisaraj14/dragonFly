const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: './src/**/*.{js,jsx,ts,tsx}',
  theme: {
    extend: {},
    colors: { 
      current: 'currentColor',
      green: colors.lime }
  },
  plugins: [],
};
