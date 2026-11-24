'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/localeConfig/navigation'

export default function LoginPage() {
  const [role, setRole] = useState<'client' | 'admin'>('client')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const locale = useLocale()

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold text-green-800">Rachael</span>
            <span className="text-gray-400 text-sm ml-2">Healthcare Finnish</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

          {/* Role toggle */}
          <div className="flex rounded-xl border border-gray-200 p-1 mb-8 bg-gray-50">
            <button
              onClick={() => setRole('client')}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                role === 'client'
                  ? 'bg-white text-green-800 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                role === 'admin'
                  ? 'bg-white text-green-800 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Admin
            </button>
          </div>

          <h1 className="text-xl font-bold text-gray-900 mb-1">
            {role === 'client' ? 'Student login' : 'Admin login'}
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            {role === 'client'
              ? 'Access your sessions and materials.'
              : 'Manage clients, sessions, and enquiries.'}
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <Link
              href={role === 'client' ? `/${locale}/client` : `/${locale}/admin`}
              className="block w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold py-3 rounded-xl text-center transition-colors mt-2"
            >
              Sign in
            </Link>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            {role === 'client' ? (
              <>Don&apos;t have an account?{' '}
                <Link href="/en/contact" className="text-green-700 hover:underline">Get in touch</Link>
              </>
            ) : (
              'Admin access only.'
            )}
          </p>
        </div>
      </div>
    </main>
  )
}
