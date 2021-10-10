module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    // sm: @media (min-width: 640px) { ... }
    // md: @media (min-width: 768px) { ... }
    // lg: @media (min-width: 1024px) { ... }
    // xl: @media (min-width: 1280px) { ... }
    // 2xl:@media (min-width: 1536px) { ... }
    // },
    extend: {
      // height: {
      //   300: "300px",
      //   400: "400px",
      //   500: "500px",
      //   600: "600px",
      //   700: "700px",
      //   800: "800px",
      // },
      colors: {
        default: "#575757",
        action: "#FE9000",
        appGray: "#D0D0D0",
        secondary: "#9D0305",
        primary: {
          100: "#E6EBEF",
          200: "#a7c5ec",
          main: "#094074",
          accent: "#083c63",
        },
        button: {
          primary: "#083C63",
          disabled: "#E6EBEF",
          secondary: "#9D0305",
        },
        section: {
          1: "#E6E8EF4D",
          2: "#EFEFEF",
        },
        typography: {
          extralight: "#828282",
          light: "#585858",
          heavy: "#2B2B2B",
          extraheavy: "#000000",
          emphasis: "#9D0305",
          main: "#083C63",
        },
      },
      backgroundImage: {
        appointment: "url('./assets/images/appointment.jpg')",
        closeEye: "url('./assets/images/closeEye.svg')",
        eye: "url('./assets/images/eye.svg')",
        doctor0: "url('./assets/images/doctor0.png')",
        doctor1: "url('./assets/images/doctor1.png')",
        doctor2: "url('./assets/images/doctor2.jpg')",
        doctor3: "url('./assets/images/doctor3.jpg')",
        doctor4: "url('./assets/images/doctor4.png')",
        doctor5: "url('./assets/images/doctor5.png')",
        doctor6: "url('./assets/images/doctor6.png')",
        doctor7: "url('./assets/images/doctor7.jpg')",
        homecare: "url('./assets/images/homecare.jpg')",
        homecare2: "url('./assets/images/homecare2.png')",
        contact: "url('./assets/images/contact.jpg')",
        homecare2: "url('./assets/images/homecare2.png')",
        group1: "url('./assets/images/Group-1.png')",
        group2: "url('./assets/images/Group-2.png')",
        group3: "url('./assets/images/Group-3.png')",
        groupBar: "url('./assets/images/group-bar.png')",
        happyIcon: "url('./assets/images/group-bar.png')",
        logo1: "url('./assets/images/health-care-logo.png')",
        logo2: "url('./assets/images/iKarelyX.png')",
        logo3: "url('./assets/images/logo-sm.png')",
        logo4: "url('./assets/images/logo-md.png')",
        appointment: "url('./assets/images/appointment.jpg')",
        rectanglegradient: "url('./assets/images/Rectangle-gradient.png')",
      },
      // backgroundSize: {
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
