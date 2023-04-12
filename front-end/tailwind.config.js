/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': {
            opacity: 0
          },
          '50%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        },
        floatin: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: 0.5,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          }
        }
      },
      animation: {
        shine: 'shine 2s infinite linear',
        floatin: 'floatin 0.5s forwards'
      },
      boxShadow: {
        'home': '0px 0 500px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
};