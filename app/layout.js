import '../styles/globals.css';  // Import global styles
import { montserrat } from './fonts'
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Spring of Knowledge Academy',
  description: 'Empowering minds through education',
  openGraph: {
    title: 'Spring of Knowledge Academy',
    description: 'Empowering minds through education',
    url: 'https://www.springofknowledge.org', // Replace with your actual URL
    siteName: 'Spring of Knowledge Academy',
    images: [
      {
        url: 'https://www.springofknowledge.org/images/Spring_Icon.png', // Replace with your actual image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
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