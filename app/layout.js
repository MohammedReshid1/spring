import '../styles/globals.css';  // Import global styles
import { montserrat } from './fonts'
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Spring of Knowledge Academy',
  description: 'Where Excellence is a Habit ! Not a Goal',
  openGraph: {
    title: 'Spring of Knowledge Academy',
    description: 'Where Excellence is a Habit ! Not a Goal',
    url: 'https://Springofknowledge.org',
    siteName: 'Spring of Knowledge Academy',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/0112b273-e231-4d4d-b90d-7f3ddf302f82.png?token=b9x6WIE0-Ssqg4WD64pcaFjB_0-rmVB16c1yDKhIbkk&height=500&width=500&expires=33272498923',
        width: 500,
        height: 500,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    domain: 'Springofknowledge.org',
    url: 'https://Springofknowledge.org',
    title: 'Spring of Knowledge Academy',
    description: 'Where Excellence is a Habit ! Not a Goal',
    images: [
      'https://opengraph.b-cdn.net/production/images/0112b273-e231-4d4d-b90d-7f3ddf302f82.png?token=b9x6WIE0-Ssqg4WD64pcaFjB_0-rmVB16c1yDKhIbkk&height=500&width=500&expires=33272498923'
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}