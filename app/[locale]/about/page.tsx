import { getTranslations, setRequestLocale } from 'next-intl/server'
import ProfileImage from '@/components/ProfileImage'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'About' })

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-gray-200 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-4">
              {t('heroLabel')}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{t('heroTitle')}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{t('heroDesc')}</p>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <div className="w-full max-w-xs md:w-80 h-72 md:h-96 rounded-2xl bg-green-50 overflow-hidden shadow-lg flex items-center justify-center">
              <ProfileImage fallbackSize="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-sm font-bold tracking-widest text-green-600">01</span>
            <h2 className="text-2xl font-bold">{t('bgTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
            <div className="space-y-5">
              <p>{t('bgP1')}</p>
              <p>{t('bgP2')}</p>
            </div>
            <div className="space-y-5">
              <p>{t('bgP3')}</p>
              <p>{t('bgP4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical experience */}
      <section className="py-20 px-6 border-b border-gray-200 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-sm font-bold tracking-widest text-green-600">02</span>
            <h2 className="text-2xl font-bold">{t('clinicalTitle')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: '🚨', title: t('clinical1Title'), body: t('clinical1Body') },
              { icon: '❤️', title: t('clinical2Title'), body: t('clinical2Body') },
              { icon: '🏥', title: t('clinical3Title'), body: t('clinical3Body') },
              { icon: '👴', title: t('clinical4Title'), body: t('clinical4Body') },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-sm font-bold tracking-widest text-green-600">03</span>
            <h2 className="text-2xl font-bold">{t('qualTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
            {[
              { icon: '🎓', title: t('qual1Title'), sub: t('qual1Sub') },
              { icon: '🇫🇮', title: t('qual2Title'), sub: t('qual2Sub') },
              { icon: '📜', title: t('qual3Title'), sub: t('qual3Sub') },
              { icon: '🏥', title: t('qual4Title'), sub: t('qual4Sub') },
            ].map(({ icon, title, sub }) => (
              <div key={sub} className="flex gap-4 items-start bg-green-50 rounded-2xl p-6 border border-green-100">
                <span className="text-2xl">{icon}</span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-gray-600 text-sm">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-300 mb-6">
            {t('philLabel')}
          </span>
          <blockquote className="text-2xl md:text-3xl font-bold leading-snug tracking-tight mb-8">
            &ldquo;{t('philQuote')}&rdquo;
          </blockquote>
          <p className="text-green-100 leading-relaxed max-w-xl mx-auto">{t('philBody')}</p>
        </div>
      </section>
    </>
  )
}
