/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./<custom directory>/**/*.{js,jsx,ts,tsx}",
		"./src/screens/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./App.{js,jsx,ts,tsx}",
		"./<custom directory>/**/*.{js,jsx,ts,tsx}",
		"./src/screens/Home.tsx",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
