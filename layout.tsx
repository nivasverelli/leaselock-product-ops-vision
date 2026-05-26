import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nivas Verelli | Product Operations at LeaseLock',
  description: 'A vision for AI-powered property insurance operations. Data analytics professional with expertise in automation and intelligent systems.',
  generator: 'v0.app',
  keywords: ['data analytics', 'AI', 'automation', 'LeaseLock', 'property insurance', 'operations'],
  authors: [{ name: 'Nivas Verelli' }],
  openGraph: {
    title: 'Nivas Verelli | Product Operations at LeaseLock',
    description: 'A vision for AI-powered property insurance operations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nivas Verelli | Product Operations at LeaseLock',
    description: 'A vision for AI-powered property insurance operations.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1B4FD8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
