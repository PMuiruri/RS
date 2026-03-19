'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
          Healthcare Finnish
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? 'text-gray-900 border-b-2 border-green-700 pb-0.5'
                  : 'hover:text-gray-900 transition-colors'
              }
            >
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </nav>
  )
}
