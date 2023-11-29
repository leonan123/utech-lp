/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0F172A',
          800: '#1E40AF',
          600: '#2563EB',
          100: '#DBEAFE',
        },
        gray: {
          600: '#475569',
          400: '#94A3B8',
          300: '#CBD5E1',
          100: '#f1f5f9',
        },
        orange: {
          600: '#EA580C',
          500: '#F97316',
        },
        purple: {
          800: '#6B21A8',
          100: '#F3E8FF',
        },
        green: {
          800: '#166534',
          100: '#DCFCE7',
        },
      },

      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
      },

      boxShadow: {
        picture:
          '0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
