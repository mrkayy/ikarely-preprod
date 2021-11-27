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
        closeEye: "url('./utils/assets/images/closeEye.svg')",
        eye: "url('./utils/assets/images/eye.svg')",
        injection: "url('./utils/assets/images/injection.svg')",
        wound: "url('./utils/assets/images/wound.svg')",
        catherization: "url('./utils/assets/images/catherization.svg')",
        healthcare: "url('./utils/assets/images/healthcare.svg')",
        creativity: "url('./utils/assets/images/creativity.svg')",
        empathy: "url('./utils/assets/images/empathy.svg')",
        integrity: "url('./utils/assets/images/integrity.svg')",
        doctor0: "url('./utils/assets/images/doctor0.png')",
        doctor1: "url('./utils/assets/images/doctor1.png')",
        doctor2: "url('./utils/assets/images/doctor2.jpg')",
        doctor3: "url('./utils/assets/images/doctor3.jpg')",
        doctor4: "url('./utils/assets/images/doctor4.png')",
        doctor5: "url('./utils/assets/images/doctor5.png')",
        doctor6: "url('./utils/assets/images/doctor6.png')",
        doctor7: "url('./utils/assets/images/doctor7.jpg')",
        homecare: "url('./utils/assets/images/homecare.jpg')",
        homecare2: "url('./utils/assets/images/homecare2.png')",
        contact: "url('./utils/assets/images/contact.jpg')",
        group1: "url('./utils/assets/images/Group-1.png')",
        group2: "url('./utils/assets/images/Group-2.png')",
        group3: "url('./utils/assets/images/Group-3.png')",
        groupBar: "url('./utils/assets/images/group-bar.png')",
        happyIcon: "url('./utils/assets/images/group-bar.png')",
        logo1: "url('./utils/assets/images/health-care-logo.png')",
        logo2: "url('./utils/assets/images/iKarelyX.png')",
        logo3: "url('./utils/assets/images/logo-sm.png')",
        logo4: "url('./utils/assets/images/logo-md.png')",
        appointment: "url('./utils/assets/images/appointment.jpg')",
        rectanglegradient:
          "url('./utils/assets/images/Rectangle-gradient.png')",
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
