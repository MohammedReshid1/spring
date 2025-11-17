import { Archivo_Black, IBM_Plex_Mono, Unbounded, DM_Sans } from 'next/font/google'

// Ultra-bold display for headlines - radical and geometric
export const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: '400',
  display: 'swap',
})

// Monospace for editorial/code aesthetic - unexpected for education
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// Modern geometric variable font - distinctive and bold
export const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '600', '800'],
  display: 'swap',
})

// Clean sans for body - modern but not overused
export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['400', '500', '700'],
  display: 'swap',
})