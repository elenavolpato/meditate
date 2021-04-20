module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
     },
    extend: {},  
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
      fontSmoothing: ['hover', 'focus'],

    },
  },
  plugins: [],
}
