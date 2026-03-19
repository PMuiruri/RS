'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/localeConfig/navigation'

export default function Nav() {
  const t = useTranslations('Nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/about' as const, label: t('about') },
    { href: '/courses' as const, label: t('courses') },
    { href: '/contact' as const, label: t('contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-gray-900" onClick={() => setOpen(false)}>
          Healthcare Finnish
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'text-gray-900 border-b-2 border-green-700 pb-0.5' : 'hover:text-gray-900 transition-colors'}
            >
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
          <Link
            href="/contact"
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
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-3 text-sm font-medium border-b border-gray-100 ${pathname === href ? 'text-green-700 font-bold' : 'text-gray-700'}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
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
