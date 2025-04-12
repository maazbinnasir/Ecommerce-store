/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: {
          "100": "#c8ecfa",
          "200": "#accbda",
        },
        white: "#fff",
        skyblue: {
          "100": "#7fbcd1",
          "200": "rgba(134, 196, 217, 0.36)",
          "300": "rgba(125, 185, 206, 0.15)",
        },
        mediumturquoise: {
          "100": "#6dc7bd",
          "200": "#68c4ba",
          "300": "rgba(128, 209, 198, 0.55)",
        },
        darkcyan: {
          "100": "#369187",
          "200": "rgba(54, 145, 135, 0.09)",
        },
        dimgray: "#596774",
        darkslategray: {
          "100": "#42454a",
          "200": "#3b4651",
          "300": "#3b3b3b",
        },
        whitesmoke: "#f0f0f0",
        lightskyblue: "rgba(152, 212, 255, 0.7)",
        gray: {
          "100": "rgba(0, 0, 0, 0.6)",
          "200": "rgba(0, 0, 0, 0.8)",
        },
        black: "#000",
        cadetblue: "#73adc1",
        slategray: "#407a8f",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "11xl": "30px",
        "14xl": "33px",
        "6xs": "7px",
        "mid-1": "17.1px",
        "21xl": "40px",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    fontSize: {
      "6xl": "25px",
      xs: "12px",
      sm: "14px",
      "smi-2": "12.2px",
      "base-2": "16.2px",
      "146xl": "165px",
      "47xl": "66px",
      "22xl": "41px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      "95xl-8": "114.8px",
      "38xl": "57px",
      "15xl": "34px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq756: {
        raw: "screen and (max-width: 756px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
