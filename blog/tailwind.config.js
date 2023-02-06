/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: { 
        //want to dark
        'primary': '#222831',
        'secondary': '#393E46',
        'accent': '#00ADB5',
        'light': '#EEEEEE',
      }
    },
  },
  plugins: [],
}
