module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-out-up': {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-in',
        'fade-out-up': 'fade-out-up 0.3s ease-out'
      }
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
      fontSmoothing: ['hover', 'focus'],

    },
  },

  plugins: [],
}
