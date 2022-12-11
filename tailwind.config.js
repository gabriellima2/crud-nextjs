/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				main: "#fafafa",
				font: "#111111",
				util: "#dfdfdf",
				accent: "#0BCD84"
			},
			fontFamily: {
				main: ["Roboto", "sans-serif"],
			},
		},
  },
  plugins: [],
}
