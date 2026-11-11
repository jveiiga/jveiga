// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        white: "#FFFFFF",
        secondary: {
          red: "#CB342B",
          blue: "#027BFF",
          green: "#24D366",
        },
      },
    },
  },
  plugins: [],
};