/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      current: "currentColor",
      transparent: "transparent",
      "primary-100": "#021335",
      "primary-200": "#022467",
      "primary-300": "#033699",
      "primary-400": "#0447CB",
      "primary-500": "#0559FD",
      "primary-600": "#1E69FD",
      "primary-700": "#74A3FD",
      "primary-800": "#ABC8FD",
      "primary-900": "#E2EDFE",
      "surface-100": "#020B1F",
      "surface-200": "#0C132C",
      "surface-300": "#182040",
      "surface-400": "#2F3756",
      "surface-500": "#7E848E",
      "surface-600": "#C4D4EC",
      "surface-700": "#DCE9FC",
      "surface-800": "#F3F8FC",
      "surface-900": "#FBFDFE",
      "ui-gray-0": "#000000",
      "ui-gray-100": "#000000",
      "ui-gray-200": "#1A1A1A",
      "ui-gray-300": "#333333",
      "ui-gray-400": "#676767",
      "ui-gray-500": "#808080",
      "ui-gray-600": "#9A9A9A",
      "ui-gray-700": "#B3B3B3",
      "ui-gray-800": "#CDCDCD",
      "ui-gray-900": "#E6E6E6",
      "ui-gray-1000": "#FFFFFF",
      "ui-red-100": "#1B0F21",
      "ui-red-200": "#541825",
      "ui-red-300": "#8D2129",
      "ui-red-400": "#E62E2F",
      "ui-red-500": "#FF3231",
      "ui-red-600": "#FF4645",
      "ui-red-700": "#FD8E8D",
      "ui-red-800": "#FCBBBB",
      "ui-red-900": "#FBE9E9",
    },
    extend: {
      backgroundImage:{
        'noise': "url('assets/images/noise.svg')"
      }
    },
    container: {
      center: true,
    },

  },
  darkMode: "class",
  plugins: [],
}

