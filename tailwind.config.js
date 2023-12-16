/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "4.375rem",
        "2xl": "12.375rem",
      },
    },
    extend: {
      fontSize: {
        xs: "14px",
        base: "16px",
        md: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "48px",
        "3xl": "60px",
      },

      colors: {
        primary: "#00A015",
        secondary: "#48534A",
        black: "#000F02",
        grey: "#85888C",
        white:"#F1F1F1",
      },
      backgroundImage: {
        HeroBg: "url('./src/assets/png/bg_img.png')",
       
      },
     
    },
  },
};
