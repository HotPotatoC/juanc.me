module.exports = {
  mode: "jit",
  purge: ["public/**/*.html", "src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5E2BFF",
        secondary: "#73D2DE",
        alt: "#FFD400",
        dark: "#0a0a0a",
        gray: "#202020",
        light: "#ebebeb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
