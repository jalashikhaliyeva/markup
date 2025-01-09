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
        contactPurpleDark: "#2E1D47",
        green50: "#E0F2FE",
        green900: "#004F5D",
        gray50: "#F9FAFB",
        gray800: "#1F2937",
        yellow50: "#FFFBEB",
        yellow900: "#665C00",
        pink50: "#FDF2F8",
        pink900: "#5D003A",
        primary50: "#EFF6FF",
        primary900: "#1A3D5E",
        purple1: "#A25FF8",
        textGray400: "#878C91",
        linkedinBlue: "#0177b7",
        bgDark: "#1B1B1B",
        darkHeader: "#333435",
        bgDarkGray: "#1E1E1E",
        cardBgDark: "#2E2E2E",
        darkHoverColor: "#616BEC",
        darkPurple: "#515ACD",
        bgHoverCategory: "#333435",
        primary: "#616BEC",
        darkGray: "#1C1F22",
        blackButtonHover: "#6242FC",
        customPurple: "#6a5acd",
        customBlue: "#197df7",
        textSecondaryDefault: "#1F2937",
        darkHover:"#494949",
        blueCard:"#F0F5FF",
        categoryBtn:"#dfe2ff"

      },
      transitionDelay: {
        150: "150ms",
        300: "300ms",
        450: "450ms",
        600: "600ms",
      },

      screens: {
        xs: "480px", // Custom smaller size
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
        draw: {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
      },
      animation: {
        "gradient-animation": "gradientShift 3s linear infinite",
        draw: "draw 1s forwards",
      },
      fontSize: {
        huge: "80px", // 80px
        title: "64px",
        sliderTitle: "40px",
        titleResponsive: "40px",
        textXl: "68px",
        32: "32px",
        36: "36px",
      },
      gap: {
        "custom-space": "40px",
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
      margin: {
        "custom-space": "40px",
      },
      // **Add the following extensions for flip effect**
      perspective: {
        1000: "1000px",
      },
      rotate: {
        "y-180": "180deg",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
      // **Enable variants for custom utilities**
      backfaceVisibility: ["group-hover"],
      transformStyle: ["group-hover"],
      perspective: ["group-hover"],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addUtilities }) {
      const newUtilities = {
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".transform-style-preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover", "group-hover"]);
    },
    function ({ addUtilities }) {
      const gradientBorder = {
        ".border-b-gradient": {
          borderImage:
            "linear-gradient(to right, #FF0FFD, #006FFC, #D73DE5, #EDB547, #6E5EEE, #85AE87, #197DF7) 1",
          borderBottomWidth: "1px",
          borderBottomColor: "transparent",
        },
      };
      const gradientBorderl = {
        ".border-l-gradient": {
          borderImage:
            "linear-gradient(to bottom, #FF0FFD, #006FFC, #D73DE5, #EDB547, #6E5EEE, #85AE87, #197DF7) 1",
          borderLeftWidth: "1px",
          borderLeftColor: "transparent",
        },
      };
      const gradientBorderT = {
        ".border-t-gradient": {
          borderImage:
            "linear-gradient(to right, #FF0FFD, #006FFC, #D73DE5, #EDB547, #6E5EEE, #85AE87, #197DF7) 1",
          borderTopWidth: "1px",
          borderTopColor: "transparent",
          borderTopStyle: "solid",
          borderRightWidth: "0px",
          borderBottomWidth: "0px",
          borderLeftWidth: "0px",
        },
      };
      addUtilities(gradientBorder, ["responsive"]);
      addUtilities(gradientBorderl, ["responsive"]);
      addUtilities(gradientBorderT, ["responsive"]);
    },
  ],
};
