module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },    
    fontFamily: {
      'nunito': ['Nunito', 'Arial', 'sans-serif'],
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
        },
        'fade-out': {
          'from': {
            opacity: '1',
          },
          'to': {
            opacity: '0',
          }
        },
        'fade-in': {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-in',
        'fade-out-up': 'fade-out-up 0.3s ease-out',
        'fade-out': 'fade-out 0.15s ease-out',
        'fade-in': 'fade-in 0.215s ease-in'
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
