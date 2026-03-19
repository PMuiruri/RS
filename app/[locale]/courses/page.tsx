import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/localeConfig/navigation'

export default async function CoursesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'Courses' })

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-gray-200 bg-linear-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-4">
              {t('heroLabel')}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t('heroTitle')}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{t('heroDesc')}</p>
          </div>
          <div className="mt-8 md:mt-0">
            <img src="/hero-courses.jpg" alt="Healthcare professional" className="w-full h-56 md:h-72 object-cover rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Group sessions */}
      <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-sm font-bold tracking-widest text-green-600">01</span>
            <h2 className="text-2xl font-bold">{t('groupTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">{t('groupDesc')}</p>
              <ul className="space-y-3 text-sm text-gray-700">
                {(['gFeature1', 'gFeature2', 'gFeature3', 'gFeature4', 'gFeature5'] as const).map((k) => (
                  <li key={k} className="flex gap-3 items-start">
                    <span className="mt-0.5 text-green-700 font-bold">✓</span>{t(k)}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold text-green-700 uppercase tracking-wide">{t('prereq')}</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 p-8 hover:border-green-700 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{t('starterTitle')}</h3>
                    <p className="text-gray-500 text-sm">{t('starterHours')}</p>
                  </div>
                  <span className="text-2xl font-extrabold text-gray-900">€150</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">{t('starterDesc')}</p>
                <Link
                  href="/contact?course=group-5h"
                  className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-green-800 transition-colors"
                >
                  {t('starterBtn')}
                </Link>
              </div>
              <div className="rounded-2xl border-2 border-green-700 p-8 shadow-md relative bg-green-50/40">
                <span className="absolute -top-3 left-6 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {t('bestValue')}
                </span>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{t('fullTitle')}</h3>
                    <p className="text-gray-500 text-sm">{t('fullHours')}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-gray-900">€300</span>
                    <p className="text-xs text-gray-500">€30/h</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">{t('fullDesc')}</p>
                <Link
                  href="/contact?course=group-10h"
                  className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-green-800 transition-colors"
                >
                  {t('fullBtn')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1-on-1 sessions */}
      <section className="py-20 px-6 border-b border-gray-200 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-sm font-bold tracking-widest text-green-600">02</span>
            <h2 className="text-2xl font-bold">{t('individualTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">{t('individualDesc')}</p>
              <ul className="space-y-3 text-sm text-gray-700">
                {(['iFeature1', 'iFeature2', 'iFeature3', 'iFeature4', 'iFeature5'] as const).map((k) => (
                  <li key={k} className="flex gap-3 items-start">
                    <span className="mt-0.5 text-green-700 font-bold">✓</span>{t(k)}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold text-green-700 uppercase tracking-wide">{t('prereq')}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">{t('indCardTitle')}</h3>
                  <p className="text-gray-500 text-sm">{t('indCardSub')}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-gray-900">€40</span>
                  <p className="text-sm text-gray-500">/h</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-8">{t('indCardDesc')}</p>
              <Link
                href="/contact?course=individual"
                className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-green-800 transition-colors"
              >
                {t('indBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-sm font-bold tracking-widest text-green-600">03</span>
            <h2 className="text-2xl font-bold">{t('materialsTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-green-700 transition-colors">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-bold text-lg mb-2">{t('pdfTitle')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{t('pdfDesc')}</p>
              <p className="text-sm text-gray-500 mb-6">{t('pdfPrice')}</p>
              <Link
                href="/contact?course=pdf"
                className="inline-block bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors"
              >
                {t('pdfBtn')}
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8 bg-gray-50 relative overflow-hidden">
              <span className="absolute top-4 right-4 bg-slate-200 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                {t('videoComingSoon')}
              </span>
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="font-bold text-lg mb-2">{t('videoTitle')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{t('videoDesc')}</p>
              <p className="text-sm text-gray-500">{t('videoSub')}</p>
              <Link
                href="/contact?course=video"
                className="mt-6 inline-block border border-gray-200 text-gray-400 text-sm font-semibold px-5 py-2.5 rounded-lg cursor-default opacity-60"
              >
                {t('videoBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-sm font-bold tracking-widest text-green-600">04</span>
            <h2 className="text-2xl font-bold">{t('faqTitle')}</h2>
          </div>
          <div className="space-y-4">
            {([1, 2, 3, 4] as const).map((n) => (
              <div key={n} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold mb-2">{t(`faq${n}Q`)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(`faq${n}A`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
