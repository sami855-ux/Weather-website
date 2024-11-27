/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#1d1f21",
        fontColor: "#f3f3f3",
      },
    },
  },
  plugins: [],
}
