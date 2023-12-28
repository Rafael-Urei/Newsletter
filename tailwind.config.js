/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				tomato: 'hsl(var(--tomato))',
				tomato_opacity: 'hsl(var(--tomato-opacity))',
				dark_slate_grey: 'hsl(var(--dark-slate-grey))',
				charcoal_grey: 'hsl(var(--charcoal-grey))',
				grey: 'hsl(var(--grey))'
			},
			fontFamily: {
				roboto: ['Roboto', 'cursive']
			},
			fontSize: {
				clamp: 'clamp(2.5rem, 5vw, 3rem)'
			}
		}
	},
	plugins: []
};
