import '../styles/globals.css';  // Import global styles
import { montserrat } from './fonts'
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
      <title>Spring of Knowledge Academy</title>
      <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}