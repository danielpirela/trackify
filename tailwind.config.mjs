/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: "#1DB954",
				darkGray: "#22252B",
				lightGray: "#2B3037",
			},
		},
	},
	plugins: [],
}
