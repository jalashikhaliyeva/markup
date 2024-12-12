/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainGray: "#F5F5F7",
        neutralBlack: "#000",
        mainBgColor: "#F8F8F8",
        whiteBgColor: "#FFFEFD",
        lightPurpleCard: "#E0E2FF",
        hoverPurple: "#514DFB",
        textGray: "#8B8DA4",
        contactPurple: "#ECEDFE",
        purple1: "#A25FF8",
        textGray400:"#878C91"
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #FF0FFD 0%, #006FFC 38%, #D73DE5 57%, #EDB547 64%, #6E5EEE 68%, #85AE87 79%, #197DF7 93%)",
      },

      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        elevation1: "0px 4px 8px 0px rgba(94, 99, 120, 0.08)",
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-animation": "gradientShift 3s linear infinite",
      },
      fontSize: {
        huge: "80px", // 80px
        title: "64px",
        sliderTitle: "40px",
      },
      lineHeight: {
        78: "78px", // Custom line height
        83: "83px",
        52: "52px",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      padding: {
        "custom-space": "40px",
      },
    },
  },
  plugins: [],
};
