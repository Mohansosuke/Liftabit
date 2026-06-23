/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          'orange-dark': '#EA580C',
          'orange-light': '#FED7AA',
          purple: '#7C3AED',
          'purple-dark': '#6D28D9',
          'purple-light': '#EDE9FE',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Urbanist', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        // urbanist: ['Urbanist', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
