module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      tablet: { min: "768px", max: "799px" },
      md: { min: "800px", max: "1023px" },
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        default: "#575757",
        primary: {
          100: "#a7c5ec",
          main: "#094074",
          accent: "#083c63",
        },
        action: "#FE9000",
        secondary: "#9D0305",
        appGray: "#D0D0D0",
        disabled: "#AFAFAF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
