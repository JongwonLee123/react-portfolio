/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': "360px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};