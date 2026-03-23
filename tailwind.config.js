/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          50:  'rgba(var(--primary-rgb, 99, 102, 241), 0.05)',
          100: 'rgba(var(--primary-rgb, 99, 102, 241), 0.1)',
          200: 'rgba(var(--primary-rgb, 99, 102, 241), 0.2)',
          300: 'rgba(var(--primary-rgb, 99, 102, 241), 0.3)',
          400: 'rgba(var(--primary-rgb, 99, 102, 241), 0.4)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'rgba(var(--primary-rgb, 99, 102, 241), 0.8)',
          900: 'rgba(var(--primary-rgb, 99, 102, 241), 0.9)',
        },
        accent: 'var(--accent)',
        dark: {
          bg:      'var(--bg)',
          surface: 'var(--surface)',
          card:    'var(--card)',
          border:  'var(--border)',
        },
        light: {
          bg:      'var(--bg)',
          surface: 'var(--surface)',
          card:    'var(--card)',
          border:  'var(--border)',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 4s ease infinite',
        'float':      'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
