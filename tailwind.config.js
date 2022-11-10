/** @type {import('tailwindcss').Config} */

const colors = {
  "primary": "#1e5bee",
  "c-blue-1": "#F4F7FE",
  "c-black-1": "#121212",
  "c-black-2": "#130F26",
  "c-white-1": "#f4f4f4",
  "c-gray-1": "rgba(255, 255, 255, 0.5)",
  "c-gray-2": "rgba(255, 255, 255, 0.1)",
  "c-gray-3": "#545454",
  "c-gray-4": "#999999",
  "c-red-1": "#FF3B30",
};

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: colors 
  },
  plugins: [
    //..
    require("@tailwindcss/forms"),
  ],
};
