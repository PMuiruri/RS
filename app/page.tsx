import Link from 'next/link'
import ProfileImage from '@/components/ProfileImage'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 border-b border-gray-200 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-6">
              Healthcare Finnish — Online
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Finnish for healthcare professionals.
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md">
              Specialized language training built around clinical settings — by a registered nurse who learned Finnish
              and now works in Finnish A&amp;E.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="bg-green-700 text-white font-bold px-7 py-3.5 rounded-lg hover:bg-green-800 transition-colors text-sm"
              >
                View Courses
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 text-gray-700 font-semibold px-7 py-3.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl bg-green-50 overflow-hidden border border-green-200 shadow-lg">
                <ProfileImage />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-md text-sm font-medium text-gray-700">
                🇫🇮&nbsp; Registered Nurse in Finland
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 px-6 bg-green-900">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 md:gap-0 md:justify-between items-center text-sm text-white">
          <div className="flex items-center gap-3">
            <span className="text-green-400 font-bold text-base">✓</span>
            <span>B2+ Finnish prerequisite</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-400 font-bold text-base">✓</span>
            <span>Clinical vocabulary focus</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-400 font-bold text-base">✓</span>
            <span>Group &amp; 1-on-1 online sessions</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-400 font-bold text-base">✓</span>
            <span>Taught by a practicing RN</span>
          </div>
        </div>
      </section>

      {/* 01: Who is this for */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-sm font-bold tracking-widest text-green-600">01</span>
            <h2 className="text-3xl font-bold tracking-tight">Who is this for?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Healthcare workers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nurses, doctors, physiotherapists, and other health professionals working or planning to work in Finland.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">B2–C2 Finnish speakers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You already have general Finnish. These courses sharpen your clinical and professional language for real
                workplace situations.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2">International professionals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trained abroad and navigating the Finnish healthcare system. Bridging language gaps with real clinical
                context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Why Rachael */}
      <section className="py-24 px-6 border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-sm font-bold tracking-widest text-green-600">02</span>
            <h2 className="text-3xl font-bold tracking-tight">Why learn with Rachael?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  n: 1,
                  title: 'Real clinical experience',
                  body: "Rachael works in Accident & Emergency in Finland. Every lesson is grounded in situations she encounters daily — not textbook scenarios.",
                },
                {
                  n: 2,
                  title: 'She learned Finnish too',
                  body: 'Rachael is not a native Finnish speaker. She learned through courses and self-study, holds certificates from JAMK and Helsinki University, and understands the challenges you face.',
                },
                {
                  n: 3,
                  title: 'Breadth across departments',
                  body: 'Elderly care, geriatric, medical, cardiac, and emergency wards. The vocabulary spans the full spectrum of hospital care.',
                },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-green-700 flex-shrink-0 flex items-center justify-center text-white text-sm font-bold shadow-sm">
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
                &ldquo;I know what it feels like to struggle with Finnish in a clinical setting. That&apos;s exactly why
                I teach it.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">
                  R
                </div>
                <div>
                  <p className="font-semibold text-sm">Rachael</p>
                  <p className="text-gray-500 text-xs">RN · JAMK Graduate · Finland</p>
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
            <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
          </div>
          <p className="text-gray-600 mb-12 ml-10">Online — flexible scheduling around your shifts.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-green-600 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg mb-1">Group Sessions</h3>
              <p className="text-gray-500 text-sm mb-6">Small group, online</p>
              <div className="space-y-2 mb-8 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">€150</span> — 5 hours
                </p>
                <p>
                  <span className="font-semibold text-gray-900">€300</span> — 10 hours
                </p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-green-700 font-semibold">✓</span> Interactive group learning
                </li>
                <li className="flex gap-2">
                  <span className="text-green-700 font-semibold">✓</span> Clinical vocabulary
                </li>
                <li className="flex gap-2">
                  <span className="text-green-700 font-semibold">✓</span> Role-play scenarios
                </li>
              </ul>
              <Link
                href="/courses"
                className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors"
              >
                Sign up
              </Link>
            </div>
            <div className="rounded-2xl border-2 border-green-700 p-8 shadow-lg relative bg-green-50/40">
              <span className="absolute -top-3 left-6 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most flexible
              </span>
              <h3 className="font-bold text-lg mb-1">1-on-1 Sessions</h3>
              <p className="text-gray-500 text-sm mb-6">Individual, online</p>
              <div className="mb-8 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">€40</span> / hour
                </p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-green-700 font-semibold">✓</span> Tailored to your specialty
                </li>
                <li className="flex gap-2">
                  <span className="text-green-700 font-semibold">✓</span> Your pace, your schedule
                </li>
                <li className="flex gap-2">
                  <span className="text-green-700 font-semibold">✓</span> Direct feedback
                </li>
              </ul>
              <Link
                href="/courses"
                className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors"
              >
                Sign up
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-green-600 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg mb-1">Study Materials</h3>
              <p className="text-gray-500 text-sm mb-6">PDF notes &amp; video (coming soon)</p>
              <div className="mb-8 text-sm text-gray-600">
                <p>Pricing on request</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-green-700 font-semibold">✓</span> PDF clinical notes
                </li>
                <li className="flex gap-2">
                  <span className="text-green-700 font-semibold">✓</span> Pre-recorded videos
                </li>
                <li className="flex gap-2">
                  <span className="text-green-700 font-semibold">✓</span> Study at your own pace
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center border border-gray-300 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get in touch
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
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: 1, title: 'Choose a course', body: 'Browse group or 1-on-1 options and pick the schedule that fits your shifts.' },
              { n: 2, title: 'Sign up', body: 'Fill in the form. Rachael confirms your place and sends you a schedule within 48 hours.' },
              { n: 3, title: 'Start learning', body: 'Online sessions with real clinical scenarios, vocabulary, and role-play.' },
              { n: 4, title: 'Communicate with confidence', body: 'Use Finnish fluently in your ward — with patients, colleagues, and in documentation.' },
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
