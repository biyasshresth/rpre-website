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

        bounceRepeat: {
          "0%, 100%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(-6px)" },
          "20%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-6px)" },
          "40%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "60%": { transform: "translateY(0)" },
        },
      },

      animation: {
        spin3: "spin3 1s ease-in-out",
        "bounce-repeat": "bounceRepeat 3s ease-in-out infinite",
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