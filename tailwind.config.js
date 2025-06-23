/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          500: '#A305E8',
          600: '#8B04C7',
          700: '#7303A6',
        },
        accent: {
          400: '#F7FD04',
          500: '#E8ED03',
          600: '#D9DE02',
        },
        gray: {
          900: '#0F0F0F',
          800: '#1A1A1A',
          700: '#2D2D2D',
          600: '#404040',
          500: '#737373',
          400: '#A3A3A3',
          300: '#D4D4D4',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #A305E8 0%, #F7FD04 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #F7FD04 0%, #A305E8 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};