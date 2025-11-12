import { Inter } from 'next/font/google'

// World-class typography: Inter with multiple weights for hierarchy
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'], // Regular, Medium, Semi-Bold, Bold
})
