/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        husky: {
          50: "#fffbeb",
          100: "#d8defc",
          200: "#8ac5fd",
          300: "#fbd24e",
          400: "#5e91ff",
          500: "#0c71f4",
          600: "#0d5fbd",
          700: "#0a57bc",
          800: "#0e3892",
          900: "#1f3e61",
          950: "#2e3045",
        },
        old: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde58a",
          300: "#fbd24e",
          400: "#fabe25",
          500: "#f49d0c",
          600: "#d87607",
          700: "#bc560a",
          800: "#923f0e",
          900: "#78340f",
          950: "#451a03",
        },
      },
    },
  },
  plugins: [],
};
