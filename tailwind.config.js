/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        bitter: ["Bitter", "serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        sacramento: ["Sacramento", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  darkMode: "class",
};
