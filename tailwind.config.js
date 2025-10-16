/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7fbff',
          100: '#eaf3ff',
          200: '#cfe5ff',
          300: '#a6cdff',
          400: '#6eabff',
          500: '#3c86ff',
          600: '#1e63f2',
          700: '#174ec4',
          800: '#163fa0',
          900: '#153a83',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Helvetica Neue', 'Arial', 'Noto Sans Hebrew', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.25)', // ✅ this creates "shadow-soft"
      },
    },
  },
  plugins: [],
}
