import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Healthcare Finnish with Rachael',
  description:
    'Specialized healthcare Finnish language training for health professionals, taught by a registered nurse working in Finnish A&E.',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'fi')) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.variable}>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
