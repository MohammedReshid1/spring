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
		  sans: ['var(--font-spectral)', 'Georgia', 'serif'],
		  serif: ['var(--font-fraunces)', 'serif'],
		  display: ['var(--font-newsreader)', 'serif'],
		  ui: ['var(--font-lexend)', 'sans-serif'],
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  // ETHIOPIAN HIGHLAND ACADEMIC COLORS
		  'indigo': '#1A3A52',
		  'amber': '#D4850C',
		  'terracotta': '#B8624F',
		  'eucalyptus': '#7A9B76',
		  'coffee': '#2C1810',
		  'parchment': '#FAF7F2',
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
		  'gradient-highland': 'var(--gradient-highland)',
		  'gradient-coffee': 'var(--gradient-coffee)',
		  'gradient-sunrise': 'var(--gradient-sunrise)',
		},
		boxShadow: {
		  'elevated': 'var(--shadow-elevated)',
		  'depth': 'var(--shadow-depth)',
		  'warm': '0 8px 16px rgba(212, 133, 12, 0.15), 0 4px 8px rgba(212, 133, 12, 0.1)',
		},
		animation: {
		  'gentle-fade': 'gentleFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
		  'slide-in': 'slideIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
		  'scale-in': 'scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
		  'float': 'gentleFloat 4s ease-in-out infinite',
		  'warm-glow': 'warmGlow 3s ease-in-out infinite',
		  'scholarly-reveal': 'scholarlyReveal 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards',
		}
	  }
	},
	plugins: [require("tailwindcss-animate")],
  };