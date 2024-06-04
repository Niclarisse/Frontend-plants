/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xlg: "1150px",
        xl: "1440px",
      },
      colors: {
        primary: "#01A653",
        secondary: "#FDB935",
        black: "#000000",
        white: "#FFF",
        lightWhite: "#F9F9F9",
        light: "#777777",
        lightGrey: "#F3F1FF",
        darkGrey: "#F0EDFF",
        grey: "#EEEDED",
        success: "#14A44D",
        info: "#54B4D3",
        warning: "#E4A11B",
        error: "#FF3333",
        fontBlack: "#000000",
        fontGrey: "#797C7F",
      },
      fontFamily: {
        nunito: ["Nunito"],
        rubik: ["Rubik"],
        quicksand: ["Quicksand"],
        outfit: ["Outfit"],
        public: ["Public Sans"],
      },
      minHeight: {
        calcVh: "calc(100vh - 120px)",
        calcVhMob: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|secondary|white|light|lightGrey|darkGrey|grey|success|warning|error|info)/,
    },
  ],
};
