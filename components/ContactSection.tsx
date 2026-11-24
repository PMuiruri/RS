'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'

const inputClass =
  'w-full border border-gray-300 rounded-xl px-4 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition'

const icons = {
  email:
    'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  phone:
    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  screen:
    'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
}

function Icon({ d }: { d: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </div>
  )
}

export default function ContactSection() {
  const t = useTranslations('Contact')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const preselected = searchParams.get('course') ?? ''

  return (
    <section id="contact" className="py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-green-700 mb-3">{t('heroLabel')}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">{t('heroTitle')}</h2>
          <p className="mt-3 text-gray-700">{t('heroDesc')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Contact info (shown after the form on mobile) */}
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-xl font-semibold mb-5">{t('detailsTitle')}</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Icon d={icons.email} />
                <div>
                  <p className="font-semibold text-sm">{t('emailLabel')}</p>
                  <a href="mailto:kijosundell@outlook.com" className="text-green-700 hover:underline text-sm">kijosundell@outlook.com</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon d={icons.phone} />
                <div>
                  <p className="font-semibold text-sm">{t('phoneLabel')}</p>
                  <a href="tel:+358440399390" className="text-green-700 hover:underline text-sm">044 039 9390</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon d={icons.clock} />
                <div>
                  <p className="font-semibold text-sm">{t('responseLabel')}</p>
                  <p className="text-gray-600 text-sm">{t('responseValue')}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Icon d={icons.screen} />
                <div>
                  <p className="font-semibold text-sm">{t('sessionsLabel')}</p>
                  <p className="text-gray-600 text-sm">{t('sessionsValue')}</p>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="mt-8 bg-green-50 rounded-3xl p-6">
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

          {/* Form */}
          <div className="order-1 md:order-2 bg-cream rounded-3xl p-6 md:p-8">
            <h3 className="font-serif text-xl font-semibold mb-5">{t('formTitle')}</h3>
            <form action="https://formspree.io/f/yourformid" method="POST" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('firstName')}</label>
                  <input type="text" name="first_name" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('lastName')}</label>
                  <input type="text" name="last_name" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('email')}</label>
                <input type="email" name="email" required className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('phone')} <span className="text-gray-500 font-normal">{t('phoneOptional')}</span>
                </label>
                <input type="tel" name="phone" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('interested')}</label>
                {/* key remounts the select so it picks up a new ?course= on same-page navigation */}
                <select key={preselected} name="course_type" defaultValue={preselected} required className={`${inputClass}`}>
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
                <select name="finnish_level" className={`${inputClass}`}>
                  <option value="">{t('selectLevel')}</option>
                  <option value="B2">B2</option>
                  <option value="C1">C1</option>
                  <option value="C2">C2</option>
                  <option value="unsure">{locale === 'fi' ? 'En ole varma' : 'Not sure'}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('profession')}</label>
                <input type="text" name="profession" placeholder={t('profPlaceholder')} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('message')} <span className="text-gray-500 font-normal">{t('messageOptional')}</span>
                </label>
                <textarea name="message" rows={4} placeholder={t('messagePlaceholder')} className={`${inputClass} resize-none`} />
              </div>
              <button type="submit" className="w-full bg-green-700 text-white font-bold py-3 rounded-full hover:bg-green-800 transition-colors text-sm">
                {t('submit')}
              </button>
              <p className="text-xs text-gray-500 text-center">{t('noSpam')}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
