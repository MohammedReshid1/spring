// app/layout.js

import '../styles/globals.css';  // Import global styles
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>  {/* The content of each page will be injected here */}
        <Footer />
      </body>
    </html>
  );
}