/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
        'body': ['Source Sans 3', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sans': ['Source Sans 3', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInScale: {
          'from': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'float-delayed': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)'
          },
          '33%': {
            transform: 'translateY(-8px) rotate(1deg)'
          },
          '66%': {
            transform: 'translateY(-12px) rotate(-1deg)'
          }
        },
        shimmer: {
          '0%': {
            'background-position': '-200% 0'
          },
          '100%': {
            'background-position': '200% 0'
          }
        },
        glow: {
          '0%, 100%': {
            'box-shadow': '0 0 5px rgba(224, 107, 116, 0.5)'
          },
          '50%': {
            'box-shadow': '0 0 20px rgba(224, 107, 116, 0.8), 0 0 30px rgba(224, 107, 116, 0.6)'
          }
        },
        'pulse-soft': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.8'
          }
        }
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeInScale': 'fadeInScale 0.6s ease-out',
        'slideInRight': 'slideInRight 0.7s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float-delayed 6s ease-in-out infinite 1.5s',
        'shimmer': 'shimmer 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
