/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0F172A',
          600: '#2563EB',
          'gray-600': '#475569',
        },
        orange: {
          600: '#EA580C',
        },
      },

      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
