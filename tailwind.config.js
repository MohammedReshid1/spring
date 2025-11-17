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
		  sans: ['var(--font-dm)', 'system-ui', 'sans-serif'],
		  display: ['var(--font-archivo)', 'sans-serif'],
		  unbounded: ['var(--font-unbounded)', 'sans-serif'],
		  mono: ['var(--font-mono)', 'monospace'],
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  // RADICAL BRUTALIST COLORS
		  'electric-pink': '#FF006E',
		  'cyber-yellow': '#FFD60A',
		  'cyber-cyan': '#00F5FF',
		  'pure-black': '#000000',
		  'pure-white': '#FFFFFF',
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
		  'gradient-electric': 'var(--gradient-electric)',
		  'gradient-cyber': 'var(--gradient-cyber)',
		},
		boxShadow: {
		  'brutal': 'var(--shadow-brutal)',
		  'brutal-lg': 'var(--shadow-brutal-lg)',
		  'brutal-pink': '8px 8px 0px #FF006E',
		  'brutal-yellow': '8px 8px 0px #FFD60A',
		},
		animation: {
		  'slide-in-left': 'slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
		  'slide-in-right': 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
		  'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
		  'glitch': 'glitch 0.3s ease-in-out',
		  'neon-pulse': 'neonPulse 2s ease-in-out infinite',
		  'rotate': 'rotate 20s linear infinite',
		}
	  }
	},
	plugins: [require("tailwindcss-animate")],
  };