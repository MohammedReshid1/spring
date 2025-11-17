/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
		  serif: ['var(--font-crimson)', 'Georgia', 'serif'],
		  display: ['var(--font-syne)', 'sans-serif'],
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  forest: '#15543b',
		  terracotta: '#c77447',
		  honey: '#f0a04b',
		  sage: '#9ca986',
		  parchment: '#faf6f0',
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  }
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		backgroundImage: {
		  'gradient-organic': 'var(--gradient-organic)',
		  'gradient-forest': 'var(--gradient-forest)',
		  'gradient-warmth': 'var(--gradient-warmth)',
		},
		animation: {
		  'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
		  'fade-in-scale': 'fadeInScale 0.5s ease-out forwards',
		  'float': 'float 3s ease-in-out infinite',
		  'shimmer': 'shimmer 2s linear infinite',
		}
	  }
	},
	plugins: [require("tailwindcss-animate")],
  };