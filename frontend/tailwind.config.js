/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--primary-font)",
        secondary: "var(--secondary-font)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "light-green": "var(--light-green)",
        blue: "var(--blue)",
        "cream-white": "var(--white)",
        "theme-bg": "var(--theme-bg)",
        "theme-color": "var(--theme-color)",
      },

      borderWidth: {
        thin: "0.5px",
      },

      opacity: {
        hover: ".8",
      },
    },
  },
  plugins: [],
};
