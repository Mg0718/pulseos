/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d9',
          300: '#f4a8ba',
          400: '#ec7096',
          500: '#e04576',
          600: '#cc2659',
          700: '#ad1a4a',
          800: '#8f1843',
          900: '#722f37',
        },
        darkBackground: '#0F0F1A',
        sidebarBackground: '#181825',
        sidebarHighlight: '#6F2DBD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 12px rgba(111, 45, 189, 0.4)',
        'glow-lg': '0 0 20px rgba(111, 45, 189, 0.6)',
      },
    },
  },
  plugins: [],
};