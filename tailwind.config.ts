import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				light: 'hsla(var(--light))',
				border: 'hsla(var(--border))',
				input: 'hsla(var(--input))',
				ring: 'hsla(var(--ring))',
				'pr-button': 'hsla(var(--pr-button))',
				background: 'hsla(var(--background))',
				foreground: 'hsla(var(--foreground))',
				primary: {
					DEFAULT: 'hsla(var(--primary))',
					foreground: 'hsla(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsla(var(--secondary))',
					foreground: 'hsla(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsla(var(--destructive))',
					foreground: 'hsla(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsla(var(--muted))',
					foreground: 'hsla(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsla(var(--accent))',
					foreground: 'hsla(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsla(var(--popover))',
					foreground: 'hsla(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsla(var(--card))',
					foreground: 'hsla(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
} satisfies Config;

export default config;
