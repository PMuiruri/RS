import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Healthcare Finnish with Rachael',
  description:
    'Specialized healthcare Finnish language training for health professionals, taught by a registered nurse working in Finnish A&E.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
