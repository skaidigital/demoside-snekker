module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  mode: "jit",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  theme: {
    fontSize: {
      display: ["60px"],
      h1: ["48px", { letterSpacing: "-1.5px", lineHeight: "73px" }],
      h2: ["34px", { letterSpacing: "-0.5px", lineHeight: "48px" }],
      h3: ["24px", { letterSpacing: "0px", lineHeight: "32px" }],
      h4: ["20px", { letterSpacing: "0px", lineHeight: "40px" }],
      h5: ["16px", { letterSpacing: "0px", lineHeight: "24px" }],
      p: ["16px", { letterSpacing: "px", lineHeight: "32px" }],
      label: ["14px", { letterSpacing: "0px" }],
      footer: ["10px"],
    },
    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
    },

    colors: {
      cta: "#7600FF",
      ctaVar: "#6B00E6",
      ctaDus: "#D8BBFE",
      aksent: "#FF7744",
      mork: "#242F3D",
      lys: "#F9FAFE",
      hvit: "#ffffff",
      svart: "#000000",
    },
    boxShadow: {
      light: "0px 4px 4px rgba(112, 144, 176, 0.1)",
    },
    spacing: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      30: "30px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      120: "120px",
      160: "160px",
      210: "210px",
      240: "240px",
      600: "600px",
      700: "700px",
      800: "800px",
      960: "960px",
    },
    width: {
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      30: "30px",
      32: "32px",
      96: "96px",
      120: "120px",
      160: "160px",
      "025": "25%",
      "033": "33%",
      "050": "50%",
      520: "520px",
      "095": "95%",
      "0100": "100%",
      auto: "auto",
    },
    minHeight: {
      100: "100vh",
    },
    height: {
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      30: "30px",
      32: "32px",
      56: "56px",
      100: "100vh",
      144: "144px",
      340: "340px",
      "050": "50%",
      400: "400px",
      650: "650px",
      1000: "1000px",
      320: "320px",
    },
    maxWidth: {
      60: "60%",
      80: "80%",
      90: "90%",
      95: "95%",
      100: "100%",
      740: "740px",
      900: "900px",
      1200: "1200px",
    },
    maxHeight: {
      50: "50%",
      1000: "1000px",
    },
    flex: {
      1: "1 1 0%",
      2: "2 2 0%",
      3: "3.8 3.8 0%",
    },
    screens: {
      mobile: "415px",
      md: "618px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
    extend: {
      borderRadius: {
        circle: "9999px",
      },
    },
    opacity: {
      50: ".5",
    },
    backgroundOpacity: {
      96: "0.96",
      97: "0.97",
      98: "0.98",
      99: "0.99",
    },
    zIndex: {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      200: "200",
      300: "300",
    },
    variants: {
      extend: {},
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
};
