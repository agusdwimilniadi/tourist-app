/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#3258E8',
          2: '#152C5B',
        },
        secondary: '#F5F6F8',
        danger: '#E83232',
        info: '#B9B9B9',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
