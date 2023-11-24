/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors:{
  primary:"#FC5400",
  secondary:"#FC8200",
},

    },
  },
  plugins: [],
}