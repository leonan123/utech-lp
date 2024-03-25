/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1550px',
    },
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
          200: '#E2E8F0',
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
        yellow: {
          400: '#FACC15',
        },
      },

      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
      },

      boxShadow: {
        picture:
          '0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
      },

      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-in-out',
        'fade-in-up': 'fade-in-up 0.3s ease-in-out forwards',
      },

      keyframes: {
        'fade-in-down': {
          '0%': {
            height: '0',
          },
          '100%': {
            height: '21.25rem',
          },
        },

        'fade-in-up': {
          '0%': {
            display: 'block',
            height: '21.25rem',
            opacity: '1',
          },
          '100%': {
            display: 'none',
            height: '0',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
