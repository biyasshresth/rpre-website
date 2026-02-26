/** @type {import('tailwindcss').Config} */
const edgeFade = require("./tailwind-edge-fade.plugin");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all your React components
  ],
  theme: {
    extend: {
      fontFamily: {
        bezmiar: ["Bezmiar", "sans-serif"],
      },
      keyframes: {
        spin3: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(1080deg)" }, 
        },
      },
      animation: {
        spin3: "spin3 1s ease-in-out",  
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],  
    },
  },
  plugins: [edgeFade],
};
