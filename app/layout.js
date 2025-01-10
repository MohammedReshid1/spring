import '../styles/globals.css';  // Import global styles
import { montserrat } from './fonts'
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Spring of Knowledge Academy',
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