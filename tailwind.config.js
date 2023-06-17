/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**.html',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("daisyui"),
  ],
};
