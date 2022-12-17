/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        page: "600px 1fr",
      },
      colors: {
        primary: {
          50: "#ceeceb",
          100: "#9BDEDB",
          200: "#68CDC9",
          300: "#00B2A9",
          400: "#00A499",
          500: "#636363",
        },
        secondary : {
          50: "#b084e6",
          100: "#916FDD",
          200: "#8294f2",
          300: "#6D3FD1",
          400: "#480FC6",
          500: "#331F68"
        }
      },
    },
    fontFamily: {
      "primary": ["Acumin Pro ExtraCondensed", "sans serif"],
      "secondary": ["Proxima Nova", "sans serif"]
    }
  },
  plugins: [],
};
