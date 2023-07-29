const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#215AA8",
          secondary: "#FDDE5E",
        },
      },
    ],
  },
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem" },
    },
    extend: {
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
      },
      boxShadow: {
        dropdown: "0px 6px 30px rgba(0, 0, 0, 0.12)",
        navbar: "0px -2px 15px rgba(0, 0, 0, 0.25)",
        mission: "-52px 42px 25px 0px rgba(0, 0, 0, 0.25) inset",
      },
      zIndex: {
        "-10": "-10",
      },
      colors: {
        accent: {
          1: "#FBFF9D",
          2: "#FAF868",
          3: "#8AD6ED",
          4: "#00BEF3",
        },
        blue: {
          ceo: "#215AA8",
        },
        yellow: {
          ceo: "#FDDE5E",
        },
        white: {
          ceo: "#F8F6F2",
        },
        salem: {
          ceo: "#DA4E7A",
        },
        gray: {
          dark: "#636363",
          DEFAULT: "#D6D6D6",
          light: "#E5E5E5",
          medium: "#909090",
          neutral: "#F8FBFA",
        },
        red: {
          DEFAULT: "#FF0000",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        Inter: ["Inter", "sans-serif"],
        Epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("tailwindcss-animated"),
  ],
}
