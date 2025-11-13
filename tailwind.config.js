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
		  sans: ['var(--font-inter)', 'sans-serif'],
		  display: ['var(--font-inter)', 'sans-serif'],
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  // Brand colors - Spring of Knowledge Academy
		  brand: {
			primary: '#1C74BB',
			'primary-dark': '#155A96',
			'primary-light': '#3D8FD1',
			'primary-lighter': '#E8F2F9',
			secondary: '#F7931E',
			'secondary-dark': '#D97B0F',
			'secondary-light': '#FFB55F',
		  },
		  // Refined Professional Palette
		  refined: {
			'off-white': '#FAFAFA',
			'off-white-light': '#F5F5F5',
			'charcoal': '#1A1A1A',
			'charcoal-light': '#3A3A3A',
			'gray-medium': '#6B6B6B',
			'gray-light': '#777777',
			'border-light': '#E5E5E5',
			'border-medium': '#D0D0D0',
		  },
		  // Academic excellence colors
		  academic: {
			navy: '#0A2540',
			gold: '#D4AF37',
			sage: '#87A96B',
			slate: '#475569',
		  },
		  main: '#1C74BB',
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
		  sm: 'calc(var(--radius) - 4px)',
		  xl: '1rem',
		  '2xl': '1.5rem',
		  '3xl': '2rem',
		  // Refined subtle radius (6-8px max)
		  'refined': '6px',
		  'refined-lg': '8px',
		},
		spacing: {
		  '18': '4.5rem',
		  '88': '22rem',
		  '100': '25rem',
		  '112': '28rem',
		  '128': '32rem',
		},
		fontSize: {
		  'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
		  'display-2': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
		  'display-3': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
		  'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
		  'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
		  'h3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
		},
		boxShadow: {
		  'premium': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
		  'premium-lg': '0 30px 80px -20px rgba(0, 0, 0, 0.2)',
		  'glow': '0 0 20px rgba(28, 116, 187, 0.3)',
		  'glow-lg': '0 0 40px rgba(28, 116, 187, 0.4)',
		  // Refined subtle shadows
		  'refined-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
		  'refined-md': '0 6px 20px rgba(0, 0, 0, 0.10)',
		  'refined-lg': '0 12px 28px rgba(0, 0, 0, 0.12)',
		},
		animation: {
		  'fade-in-up': 'fadeInUp 0.8s ease-out',
		  'fade-in': 'fadeIn 0.6s ease-out',
		  'slide-in-left': 'slideInLeft 0.8s ease-out',
		  'slide-in-right': 'slideInRight 0.8s ease-out',
		  'scale-in': 'scaleIn 0.5s ease-out',
		  'float': 'float 6s ease-in-out infinite',
		},
		keyframes: {
		  fadeInUp: {
			'0%': { opacity: '0', transform: 'translateY(30px)' },
			'100%': { opacity: '1', transform: 'translateY(0)' },
		  },
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  slideInLeft: {
			'0%': { opacity: '0', transform: 'translateX(-50px)' },
			'100%': { opacity: '1', transform: 'translateX(0)' },
		  },
		  slideInRight: {
			'0%': { opacity: '0', transform: 'translateX(50px)' },
			'100%': { opacity: '1', transform: 'translateX(0)' },
		  },
		  scaleIn: {
			'0%': { opacity: '0', transform: 'scale(0.9)' },
			'100%': { opacity: '1', transform: 'scale(1)' },
		  },
		  float: {
			'0%, 100%': { transform: 'translateY(0px)' },
			'50%': { transform: 'translateY(-20px)' },
		  },
		},
	  }
	},
	plugins: [require("tailwindcss-animate")],
  };