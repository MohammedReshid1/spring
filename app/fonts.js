import { Fraunces, Spectral, Lexend, Newsreader } from 'next/font/google'

// Elegant display serif - academic and distinctive
export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '700', '900'],
  axes: ['SOFT', 'WONK'],
  display: 'swap',
})

// Classic serif for body - scholarly and readable
export const spectral = Spectral({
  subsets: ['latin'],
  variable: '--font-spectral',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

// Modern sans for UI elements - clean but not generic
export const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

// Editorial serif for special headings
export const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  weight: ['400', '600', '800'],
  display: 'swap',
})