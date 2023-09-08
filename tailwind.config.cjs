/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					500: "#161925",
				},
				secondary: {
					50: "#ddfffa",
					100: "#c3fff7",
					300: "#90fff0",
					400: "#43ffe6",
					500: "#00F5D4",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	darkMode: "class",
};
