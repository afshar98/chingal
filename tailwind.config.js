/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        current: "currentColor",
        transparent: "transparent",
        primary: "#020B1F",
        secondary: "#182040",
        "primary-content": "#FBFDFE",
        accent: "#0551E7",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

