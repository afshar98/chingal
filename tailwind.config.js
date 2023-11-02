/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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

