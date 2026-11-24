'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/localeConfig/navigation'

// Login is hidden until client/admin accounts are ready. Set to true to show it again.
const SHOW_LOGIN = false

export default function Nav() {
  const t = useTranslations('Nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { hash: 'about', label: t('about') },
    { hash: 'courses', label: t('courses') },
    { hash: 'experience', label: t('cv') },
    { hash: 'contact', label: t('contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-semibold text-gray-900" onClick={() => setOpen(false)}>
          Healthcare Finnish
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map(({ hash, label }) => (
            <Link key={hash} href={{ pathname: '/', hash }} className="hover:text-gray-900 transition-colors">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={pathname}
            locale={locale === 'en' ? 'fi' : 'en'}
            className="text-xs font-bold text-gray-500 hover:text-green-700 transition-colors tracking-widest uppercase"
          >
            {locale === 'en' ? 'FI' : 'EN'}
          </Link>
          {SHOW_LOGIN && (
            <Link
              href="/login"
              className="hidden md:inline-block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
          )}
          <Link
            href={{ pathname: '/', hash: 'contact' }}
            className="hidden md:inline-block bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors"
          >
            {t('signUp')}
          </Link>
          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-1">
          {links.map(({ hash, label }) => (
            <Link
              key={hash}
              href={{ pathname: '/', hash }}
              className="block py-3 text-sm font-medium border-b border-gray-100 text-gray-700"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            {SHOW_LOGIN && (
              <Link
                href="/login"
                className="block text-center border border-gray-200 text-gray-700 text-sm font-medium px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            )}
            <Link
              href={{ pathname: '/', hash: 'contact' }}
              className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-green-800 transition-colors"
              onClick={() => setOpen(false)}
            >
              {t('signUp')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
