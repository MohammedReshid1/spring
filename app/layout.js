import '../styles/globals.css';  // Import global styles
import { montserrat } from './fonts'
import Header from './components/Header';
import Footer from './components/Footer';
import { ModalProvider } from './contexts/ModalContext'

export const metadata = {
  title: {
    default: 'Spring of Knowledge Academy - Excellence in Education Since 2006',
    template: '%s | Spring of Knowledge Academy'
  },
  description: 'Premier educational institution in Addis Ababa, Ethiopia. Offering world-class Kindergarten, Primary, and High School programs. Where Excellence is a Habit, Not a Goal. Enroll today!',
  keywords: [
    'Spring of Knowledge Academy',
    'international school Ethiopia',
    'best school Addis Ababa',
    'private school Ethiopia',
    'kindergarten Addis Ababa',
    'primary school Ethiopia',
    'high school Addis Ababa',
    'quality education Ethiopia',
    'academic excellence',
    'student success',
    'educational institution',
    'world-class education'
  ],
  authors: [{ name: 'Spring of Knowledge Academy' }],
  creator: 'Spring of Knowledge Academy',
  publisher: 'Spring of Knowledge Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://springofknowledge.org'),
  alternates: {
    canonical: 'https://springofknowledge.org',
  },
  openGraph: {
    title: 'Spring of Knowledge Academy - Excellence in Education Since 2006',
    description: 'Premier educational institution offering Kindergarten, Primary, and High School programs. 18+ years of academic excellence, 2000+ students, 98% success rate. Join our community today!',
    url: 'https://springofknowledge.org',
    siteName: 'Spring of Knowledge Academy',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/0112b273-e231-4d4d-b90d-7f3ddf302f82.png?token=b9x6WIE0-Ssqg4WD64pcaFjB_0-rmVB16c1yDKhIbkk&height=1200&width=1200&expires=33272498923',
        width: 1200,
        height: 1200,
        alt: 'Spring of Knowledge Academy - World-Class Education',
      },
      {
        url: 'https://opengraph.b-cdn.net/production/images/0112b273-e231-4d4d-b90d-7f3ddf302f82.png?token=b9x6WIE0-Ssqg4WD64pcaFjB_0-rmVB16c1yDKhIbkk&height=630&width=1200&expires=33272498923',
        width: 1200,
        height: 630,
        alt: 'Spring of Knowledge Academy Campus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spring of Knowledge Academy - Excellence in Education',
    description: 'Premier educational institution in Ethiopia. 18+ years of excellence, 2000+ students, 100+ expert educators. Enroll today!',
    images: ['https://opengraph.b-cdn.net/production/images/0112b273-e231-4d4d-b90d-7f3ddf302f82.png?token=b9x6WIE0-Ssqg4WD64pcaFjB_0-rmVB16c1yDKhIbkk&height=1200&width=1200&expires=33272498923'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  verification: {
    // Add your verification tokens here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
      <head>
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Spring of Knowledge Academy",
              "alternateName": "SKA",
              "url": "https://springofknowledge.org",
              "logo": "https://springofknowledge.org/images/SPRING_LOGO.png",
              "description": "Premier educational institution offering Kindergarten, Primary, and High School programs in Addis Ababa, Ethiopia. Excellence in education since 2006.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Addis Ababa",
                "addressCountry": "Ethiopia"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+251-11-618-0066",
                "contactType": "Admissions",
                "email": "info@springofknowledge.org",
                "availableLanguage": ["English", "Amharic"]
              },
              "sameAs": [
                "https://facebook.com/springofknowledge",
                "https://linkedin.com/company/springofknowledge",
                "https://telegram.org/springofknowledge"
              ],
              "foundingDate": "2006",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "100+"
              }
            })
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://springofknowledge.org"
                }
              ]
            })
          }}
        />
      </head>
      <body className={montserrat.className}>
        <Header />
        <main>
          <ModalProvider>
            {children}
          </ModalProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
