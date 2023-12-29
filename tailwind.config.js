module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#b5b5b5", 900: "#5c1e03" },
        blue_gray: { 100: "#cecece" },
        black: { 900: "#000000", "900_00": "#00000000" },
        red: { "900_89": "#75050589", A700: "#ff0000" },
        blue:{'skyblue':'87CEEB'},
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(229deg ,#5c1e03,#75050589)",
        gradient1: "linear-gradient(180deg ,#00000000,#000000)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
