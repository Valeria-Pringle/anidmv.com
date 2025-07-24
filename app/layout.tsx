import type { Metadata } from 'next'
import { Orbitron, Poppins, Bebas_Neue } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
})

export const metadata: Metadata = {
  themeColor: '#9C27B0',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  title: 'Anid MV | Official',
  description: 'Sitio oficial de Anid MV. Música, conciertos y lo último de su carrera musical.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>' },
      { url: '/favicon.ico' },
    ],
  },
  keywords: ['música urbana', 'anid mv', 'artista urbana', 'conciertos', 'trap', 'reggaeton', 'música latina'],
  authors: [{ name: 'Anid MV' }],
  creator: 'Anid MV',
  publisher: 'Anid MV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Anid MV | Official',
    description: 'Sitio oficial de Anid MV. Música, conciertos y lo último de su carrera musical.',
    url: 'https://anidmv.com',
    siteName: 'Anid MV',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Anid MV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anid MV',
    description: 'Sitio oficial de Anid MV. Música, conciertos y lo último de su carrera musical.',
    creator: '@anidmv',
    images: ['/images/og-image.jpg'],
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

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${poppins.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className={`font-poppins bg-fondo-negro text-texto-gris`}>
        {children}
      </body>
    </html>
  )
}
