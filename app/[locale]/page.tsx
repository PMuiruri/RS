import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/localeConfig/navigation'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'Home' })

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 border-b border-gray-200 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-6">
              {t('heroLabel')}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              {t('heroTitle')}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md">{t('heroDesc')}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="bg-green-700 text-white font-bold px-7 py-3.5 rounded-lg hover:bg-green-800 transition-colors text-sm"
              >
                {t('viewCourses')}
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 text-gray-700 font-semibold px-7 py-3.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                {t('signUp')}
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <div className="w-full max-w-xs md:w-80">
              <div className="w-full h-80 md:h-112 rounded-2xl overflow-hidden shadow-lg">
                <img src="/hero-home.jpg" alt="Healthcare professional" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 px-6 bg-green-900">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 md:gap-0 md:justify-between items-center text-sm text-white">
          {(['trust1', 'trust2', 'trust3', 'trust4'] as const).map((key) => (
            <div key={key} className="flex items-center gap-3">
              <span className="text-green-400 font-bold text-base">✓</span>
              <span>{t(key)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 01: Who is this for */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-sm font-bold tracking-widest text-green-600">01</span>
            <h2 className="text-3xl font-bold tracking-tight">{t('whoTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏥', title: t('who1Title'), body: t('who1Body') },
              { icon: '🎓', title: t('who2Title'), body: t('who2Body') },
              { icon: '🌍', title: t('who3Title'), body: t('who3Body') },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02: Why Rachael */}
      <section className="py-24 px-6 border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-sm font-bold tracking-widest text-green-600">02</span>
            <h2 className="text-3xl font-bold tracking-tight">{t('whyTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                { n: 1, title: t('why1Title'), body: t('why1Body') },
                { n: 2, title: t('why2Title'), body: t('why2Body') },
                { n: 3, title: t('why3Title'), body: t('why3Body') },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-green-700 shrink-0 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                    {n}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-10 border border-gray-200 border-l-4 border-l-green-700 shadow-sm">
              <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                &ldquo;{t('quote')}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">
                  R
                </div>
                <div>
                  <p className="font-semibold text-sm">Rachael</p>
                  <p className="text-gray-500 text-xs">{t('quoteRole')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03: Courses */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-sm font-bold tracking-widest text-green-600">03</span>
            <h2 className="text-3xl font-bold tracking-tight">{t('coursesTitle')}</h2>
          </div>
          <p className="text-gray-600 mb-12 ml-10">{t('coursesSub')}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Group */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-green-600 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg mb-1">{t('groupTitle')}</h3>
              <p className="text-gray-500 text-sm mb-6">{t('groupSub')}</p>
              <div className="space-y-2 mb-8 text-sm text-gray-600">
                <p><span className="font-semibold text-gray-900">€150</span> — 5h</p>
                <p><span className="font-semibold text-gray-900">€300</span> — 10h</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                {(['groupFeature1', 'groupFeature2', 'groupFeature3'] as const).map((k) => (
                  <li key={k} className="flex gap-2"><span className="text-green-700 font-semibold">✓</span>{t(k)}</li>
                ))}
              </ul>
              <Link href="/courses" className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors">
                {t('signUpBtn')}
              </Link>
            </div>
            {/* 1-on-1 */}
            <div className="rounded-2xl border-2 border-green-700 p-8 shadow-lg relative bg-green-50/40">
              <span className="absolute -top-3 left-6 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                {t('individualBadge')}
              </span>
              <h3 className="font-bold text-lg mb-1">{t('individualTitle')}</h3>
              <p className="text-gray-500 text-sm mb-6">{t('individualSub')}</p>
              <div className="mb-8 text-sm text-gray-600">
                <p><span className="font-semibold text-gray-900">€40</span> / h</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                {(['indFeature1', 'indFeature2', 'indFeature3'] as const).map((k) => (
                  <li key={k} className="flex gap-2"><span className="text-green-700 font-semibold">✓</span>{t(k)}</li>
                ))}
              </ul>
              <Link href="/courses" className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors">
                {t('signUpBtn')}
              </Link>
            </div>
            {/* Materials */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-green-600 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg mb-1">{t('materialsTitle')}</h3>
              <p className="text-gray-500 text-sm mb-6">{t('materialsSub')}</p>
              <div className="mb-8 text-sm text-gray-600"><p>{t('materialsPrice')}</p></div>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                {(['matFeature1', 'matFeature2', 'matFeature3'] as const).map((k) => (
                  <li key={k} className="flex gap-2"><span className="text-green-700 font-semibold">✓</span>{t(k)}</li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center border border-gray-300 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                {t('getInTouch')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 04: How it works */}
      <section className="py-24 px-6 border-b border-gray-200 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-sm font-bold tracking-widest text-green-600">04</span>
            <h2 className="text-3xl font-bold tracking-tight">{t('howTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: 1, title: t('how1Title'), body: t('how1Body') },
              { n: 2, title: t('how2Title'), body: t('how2Body') },
              { n: 3, title: t('how3Title'), body: t('how3Body') },
              { n: 4, title: t('how4Title'), body: t('how4Body') },
            ].map(({ n, title, body }) => (
              <div key={n} className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold mx-auto mb-4 shadow-sm">
                  {n}
                </div>
                <h3 className="font-semibold text-sm mb-2">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
