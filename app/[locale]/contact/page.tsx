'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ContactContent() {
  const t = useTranslations('Contact')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const preselected = searchParams.get('course') ?? ''

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-gray-200 bg-linear-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-4">
            {t('heroLabel')}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('heroTitle')}</h1>
          <p className="text-gray-600 text-lg max-w-lg leading-relaxed">{t('heroDesc')}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left: contact info */}
          <div>
            <h2 className="text-xl font-bold mb-8">{t('detailsTitle')}</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t('emailLabel')}</p>
                  <a href="mailto:kijosundell@outlook.com" className="text-green-700 hover:underline text-sm">kijosundell@outlook.com</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t('phoneLabel')}</p>
                  <a href="tel:+358440399390" className="text-green-700 hover:underline text-sm">044 039 9390</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t('responseLabel')}</p>
                  <p className="text-gray-600 text-sm">{t('responseValue')}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t('sessionsLabel')}</p>
                  <p className="text-gray-600 text-sm">{t('sessionsValue')}</p>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="mt-12 bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-bold text-sm mb-4">{t('nextTitle')}</h3>
              <ol className="space-y-3 text-sm text-gray-600">
                {([1, 2, 3, 4] as const).map((n) => (
                  <li key={n} className="flex gap-3">
                    <span className="text-green-700 font-bold">{n}.</span>
                    {t(`next${n}`)}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h2 className="text-xl font-bold mb-8">{t('formTitle')}</h2>
            <form action="https://formspree.io/f/yourformid" method="POST" className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('firstName')}</label>
                  <input type="text" name="first_name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('lastName')}</label>
                  <input type="text" name="last_name" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('email')}</label>
                <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('phone')} <span className="text-gray-500 font-normal">{t('phoneOptional')}</span>
                </label>
                <input type="tel" name="phone" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('interested')}</label>
                <select name="course_type" defaultValue={preselected} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition bg-white">
                  <option value="">{t('selectCourse')}</option>
                  <option value="group-5h">{t('optGroup5h')}</option>
                  <option value="group-10h">{t('optGroup10h')}</option>
                  <option value="individual">{t('optIndividual')}</option>
                  <option value="pdf">{t('optPdf')}</option>
                  <option value="video">{t('optVideo')}</option>
                  <option value="free-call">{t('optCall')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('finnishLevel')}</label>
                <select name="finnish_level" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition bg-white">
                  <option value="">{t('selectLevel')}</option>
                  <option value="B2">B2</option>
                  <option value="C1">C1</option>
                  <option value="C2">C2</option>
                  <option value="unsure">{locale === 'fi' ? 'En ole varma' : 'Not sure'}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('profession')}</label>
                <input type="text" name="profession" placeholder={t('profPlaceholder')} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('message')} <span className="text-gray-500 font-normal">{t('messageOptional')}</span>
                </label>
                <textarea name="message" rows={4} placeholder={t('messagePlaceholder')} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition resize-none" />
              </div>
              <button type="submit" className="w-full bg-green-700 text-white font-bold py-3.5 rounded-lg hover:bg-green-800 transition-colors text-sm">
                {t('submit')}
              </button>
              <p className="text-xs text-gray-500 text-center">{t('noSpam')}</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  )
}
