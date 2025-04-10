const { keyframes } = require('framer-motion');
const { Corben } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        animation: {
          shine: "shine 1.5s infinite" // Made it infinite and slightly slower
        },
        keyframes: {
          shine: {
            "0%": { left: "-100%" },
            "100%": { left: "125%" }
          }
        }
      }
    },
    plugins: [],
    corePlugins: {
        backdropFilter: true,
    },
  }