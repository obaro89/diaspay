const formsPlugin = require('@tailwindcss/forms')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		colors: {
			black: '#000000',
			blue: '#425C81',
			'light-grey': '#F2F2F2',
			'dark-grey': '#e4e4e4',
			error: '#B10B01',
			white: '#FFFFFF',
			lemon: '#AEE5D0'
		},
		fontFamily: {
			sans: ['-apple-system', 'BlinkMacSystemFont', 'Roboto']
		},
		fontSize: {
			subhead: ['0.9375rem', '1.25rem'],
			small: ['1rem', '1.25rem'],
			body: ['1.0625rem', '1.375rem'],
			'title-3': ['1.25rem', '1.75rem'],
			'title-2': ['1.5rem', '1.75rem'],
			'title-1': ['1.75rem', '2.125rem'],
			'title-large': ['2.125rem', '2.25rem']
		},
		extend: {
			minWidth: {
				xs: '20rem',
				sm: '24rem',
				md: '28rem',
				lg: '32rem',
				xl: '36rem',
				'2xl': '42rem',
				'3xl': '48rem',
				'4xl': '56rem',
				'5xl': '64rem',
				'6xl': '72rem',
				'7xl': '80rem',
				'8xl': '1440px'
			},
			maxWidth: {
				'8xl': '1440px'
			},
			screens: {
				'2xs': '375px',
				xs: '414px'
			},
			animation: {
				spin: 'spin 1s linear infinite'
			},
			animation: {
				'spin-fast': 'spin 0.75s linear infinite'
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [
		formsPlugin,
		plugin(function ({ addVariant }) {
			addVariant('not-focused', '&:not(:focus)')
		})
	]
}
module.exports = config
