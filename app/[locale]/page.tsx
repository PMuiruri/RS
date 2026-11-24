import { Suspense } from 'react'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/localeConfig/navigation'
import ContactSection from '@/components/ContactSection'

const container = 'max-w-5xl mx-auto'
const primaryBtn =
  'inline-block text-center bg-green-700 text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-green-800 transition-colors'
const textLink = 'text-sm font-semibold text-green-800 underline underline-offset-4 hover:text-green-950'

// Renders <em>…</em> in translations as an italic green accent.
const em = (chunks: React.ReactNode) => <em className="italic text-green-700">{chunks}</em>

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold tracking-[0.2em] uppercase text-green-700 mb-3">{children}</p>
}

function Divider() {
  return (
    <div className="flex justify-center gap-2 py-2" aria-hidden>
      <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
      <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
      <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
    </div>
  )
}

function OfferBlock({
  image,
  imageAlt,
  flip,
  price,
  title,
  body,
  features,
  children,
}: {
  image: string
  imageAlt: string
  flip?: boolean
  price: string
  title: string
  body: string
  features: string[]
  children: React.ReactNode
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${flip ? 'md:order-2' : ''}`}>
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" />
      </div>
      <div>
        <p className="text-sm font-semibold text-green-700">{price}</p>
        <h3 className="font-serif text-2xl md:text-3xl font-semibold mt-1">{title}</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">{body}</p>
        <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-gray-700">
          {features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-green-700">✓</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">{children}</div>
      </div>
    </div>
  )
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'Home' })
  const ta = await getTranslations({ locale, namespace: 'About' })
  const tc = await getTranslations({ locale, namespace: 'Courses' })

  const signUp = (course: string) => ({ pathname: '/' as const, query: { course }, hash: 'contact' })

  return (
    <main>
      {/* 1. About Rachael: warm welcome */}
      <section id="about" className="bg-cream pt-24 pb-14 md:pb-20 px-4 md:px-6">
        <div className={`${container} grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 md:gap-14 items-center`}>
          <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-[2rem] overflow-hidden shadow-sm">
            <Image
              src="/Untitled.jpg"
              alt="Rachael, healthcare Finnish coach"
              fill
              priority
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>{t('heroLabel')}</Eyebrow>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight">{ta.rich('heroTitle', { em })}</h1>
            <p className="font-serif mt-4 text-xl md:text-2xl text-gray-800 leading-snug">{t.rich('heroTitle', { em })}</p>
            <p className="mt-5 text-gray-700 text-lg leading-relaxed">{ta('heroDesc')}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href={{ pathname: '/', hash: 'courses' }} className={primaryBtn}>
                {t('viewCourses')}
              </Link>
              <Link href={{ pathname: '/', hash: 'contact' }} className={textLink}>
                {t('heroOr')}
              </Link>
            </div>
          </div>
        </div>

        {/* Why learn with me + how I teach */}
        <div className={`${container} mt-14 grid md:grid-cols-[3fr_2fr] gap-6`}>
          <div className="bg-white rounded-3xl p-6 md:p-8">
            <h2 className="font-serif text-2xl font-semibold mb-5">{t('whyTitle')}</h2>
            <ul className="space-y-4">
              {([1, 2, 3] as const).map((n) => (
                <li key={n} className="flex gap-3">
                  <span className="mt-1 w-6 h-6 shrink-0 rounded-full bg-green-100 text-green-800 text-xs font-bold flex items-center justify-center">
                    {n}
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">{t(`why${n}Title`)}.</span> {t(`why${n}Body`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <figure className="bg-green-800 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-center">
            <figcaption className="text-xs font-semibold tracking-[0.2em] uppercase text-green-300 mb-3">
              {ta('philLabel')}
            </figcaption>
            <blockquote className="font-serif italic text-xl leading-snug">&ldquo;{ta('philQuote')}&rdquo;</blockquote>
            <p className="mt-4 text-green-100 text-sm leading-relaxed">{ta('philBody')}</p>
          </figure>
        </div>
      </section>

      {/* 2. Courses */}
      <section id="courses" className="py-14 md:py-20 px-4 md:px-6">
        <div className={container}>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>{t('whereLabel')}</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">{t.rich('whereTitle', { em })}</h2>
            <p className="mt-3 text-gray-700">{tc('heroDesc')}</p>
          </div>

          {/* Who it's for */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {([
              ['🏥', 1],
              ['🎓', 2],
              ['🌍', 3],
            ] as const).map(([icon, n]) => (
              <div key={n} className="bg-cream rounded-2xl p-5">
                <p className="font-semibold">
                  <span className="mr-2">{icon}</span>
                  {t(`who${n}Title`)}
                </p>
                <p className="mt-1 text-sm text-gray-700 leading-relaxed">{t(`who${n}Body`)}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-10 md:space-y-14">
            <OfferBlock
              image="/hero-courses.jpg"
              imageAlt="Nurse in an online lesson"
              price={tc('groupPrice')}
              title={tc('groupTitle')}
              body={tc('groupDesc')}
              features={(['gFeature1', 'gFeature2', 'gFeature3', 'gFeature4', 'gFeature5'] as const).map((k) => tc(k))}
            >
              <Link href={signUp('group-10h')} className={primaryBtn}>
                {tc('fullBtn')}
              </Link>
              <Link href={signUp('group-5h')} className={textLink}>
                {tc('starterBtn')}
              </Link>
            </OfferBlock>

            <Divider />

            <OfferBlock
              image="/hero-home.jpg"
              imageAlt="Smiling nurse"
              flip
              price={tc('indPrice')}
              title={tc('individualTitle')}
              body={tc('individualDesc')}
              features={(['iFeature1', 'iFeature2', 'iFeature3', 'iFeature4', 'iFeature5'] as const).map((k) => tc(k))}
            >
              <Link href={signUp('individual')} className={primaryBtn}>
                {tc('indBtn')}
              </Link>
            </OfferBlock>

            <Divider />

            <OfferBlock
              image="/hero-contact.jpg"
              imageAlt="Nurse's uniform with a paper heart"
              price={tc('pdfPrice')}
              title={tc('materialsTitle')}
              body={t('materialsSub')}
              features={[`${tc('pdfTitle')}: ${tc('pdfDesc')}`, `${tc('videoTitle')} (${tc('videoComingSoon')}): ${tc('videoDesc')}`]}
            >
              <Link href={signUp('pdf')} className={primaryBtn}>
                {tc('pdfBtn')}
              </Link>
              <Link href={signUp('video')} className={textLink}>
                {tc('videoBtn')}
              </Link>
            </OfferBlock>
          </div>

          <p className="mt-10 text-center text-sm font-semibold text-green-800">{tc('prereq')}</p>

          {/* How it works */}
          <div className="mt-14 bg-cream rounded-3xl p-6 md:p-10">
            <h3 className="font-serif text-2xl font-semibold text-center mb-8">{t('howTitle')}</h3>
            <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {([1, 2, 3, 4] as const).map((n) => (
                <li key={n} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-green-700 text-white font-serif text-lg flex items-center justify-center mx-auto mb-3">
                    {n}
                  </div>
                  <p className="font-semibold">{t(`how${n}Title`)}</p>
                  <p className="mt-1 text-sm text-gray-700">{t(`how${n}Body`)}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQ */}
          <div className="mt-14 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-center mb-6">{tc('faqTitle')}</h3>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {([1, 2, 3, 4] as const).map((n) => (
                <details key={n} className="group py-4">
                  <summary className="flex justify-between gap-4 cursor-pointer list-none font-semibold">
                    {tc(`faq${n}Q`)}
                    <span className="text-green-700 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 text-gray-700 leading-relaxed">{tc(`faq${n}A`)}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CV */}
      <section id="experience" className="bg-cream py-14 md:py-20 px-4 md:px-6">
        <div className={container}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow>{ta('cvLabel')}</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold">{ta.rich('cvTitle', { em })}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 md:p-8">
              <h3 className="font-serif text-xl font-semibold mb-5">{ta('clinicalTitle')}</h3>
              <ol className="relative border-l-2 border-green-100 ml-1.5 space-y-5">
                {([1, 2, 3, 4] as const).map((n) => (
                  <li key={n} className="pl-5 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-green-600" />
                    <p className="font-semibold">{ta(`clinical${n}Title`)}</p>
                    <p className="text-sm text-gray-700">{ta(`clinical${n}Body`)}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white rounded-3xl p-6 md:p-8">
              <h3 className="font-serif text-xl font-semibold mb-5">{ta('qualTitle')}</h3>
              <ol className="relative border-l-2 border-green-100 ml-1.5 space-y-5">
                {([1, 2, 3, 4] as const).map((n) => (
                  <li key={n} className="pl-5 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-green-600" />
                    <p className="font-semibold">{ta(`qual${n}Title`)}</p>
                    <p className="text-sm text-gray-700">{ta(`qual${n}Sub`)}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact */}
      <Suspense>
        <ContactSection />
      </Suspense>
    </main>
  )
}
