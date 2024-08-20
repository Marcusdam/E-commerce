/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        krona: ['Krona One', 'sans-serif'],
        krona: ['Krub', 'sans-serif'],
      },
    },
  },
  plugins: [],
}