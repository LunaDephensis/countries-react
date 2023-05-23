/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkBg: "hsl(207, 26%, 17%)",
      darkMain: "hsl(209, 23%, 22%)",
      darkText: "hsl(200, 15%, 8%)",
      lightPlaceholder: "hsl(0, 0%, 52%)",
      lightBg: "hsl(0, 0%, 98%)"
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}

