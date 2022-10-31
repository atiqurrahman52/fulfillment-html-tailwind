// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./pages/*html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "40px",
        "2xl": "60px",
      },
    },
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#393E50",
        secondary: "#E78DD2",
        tertiary: "",
        success: "#2A9D8F",
        accent: "#ECF1F4",
        light: "#FAFCFE",
      },
      backgroundImage: {
        "contact-bg": "url('/assets/images/contact/contact.png')",
        "about-bg": "url('/assets/images/about/about-bg.png')",
      },
    },
  },
  plugins: [],
};
