import Link from 'next/link'

export const metadata = {
  title: 'Courses — Healthcare Finnish with Rachael',
}

export default function CoursesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-gray-200 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-4">
            Online — flexible scheduling
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Courses</h1>
          <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
            Specialized healthcare Finnish for professionals with B2 level or above. All sessions run online and are
            scheduled around your working hours.
          </p>
        </div>
      </section>

      {/* Group sessions */}
      <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-sm font-bold tracking-widest text-green-600">01</span>
            <h2 className="text-2xl font-bold">Group Sessions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Learn alongside other healthcare professionals in small online groups. Real scenarios, shared vocabulary
                building, and peer discussion — a great way to stay consistent and motivated.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  'Small groups (max 6 participants)',
                  'Clinical vocabulary and role-play',
                  'Patient communication scenarios',
                  'Medical documentation language',
                  'Sessions recorded for review',
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-0.5 text-green-700 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold text-green-700 uppercase tracking-wide">
                Prerequisite: Finnish B2 or equivalent
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 p-8 hover:border-green-700 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Starter Pack</h3>
                    <p className="text-gray-500 text-sm">5 hours</p>
                  </div>
                  <span className="text-2xl font-extrabold text-gray-900">€150</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  A focused introduction to healthcare Finnish in a group setting. Ideal for trialling the format before
                  committing to more.
                </p>
                <Link
                  href="/contact?course=group-5h"
                  className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-green-800 transition-colors"
                >
                  Sign up — Starter
                </Link>
              </div>
              <div className="rounded-2xl border-2 border-green-700 p-8 shadow-md relative bg-green-50/40">
                <span className="absolute -top-3 left-6 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Best value
                </span>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Full Pack</h3>
                    <p className="text-gray-500 text-sm">10 hours</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-gray-900">€300</span>
                    <p className="text-xs text-gray-500">€30/h</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  The comprehensive programme covering all major clinical areas: A&amp;E, ward care, documentation, and
                  patient interaction.
                </p>
                <Link
                  href="/contact?course=group-10h"
                  className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-green-800 transition-colors"
                >
                  Sign up — Full Pack
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
            <h2 className="text-2xl font-bold">1-on-1 Sessions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fully personalised sessions built around your specialty and your gaps. Rachael tailors each lesson to
                your department — whether that&apos;s emergency care, geriatrics, surgical wards, or community nursing.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  'Tailored to your specialty and department',
                  'Flexible — book at times that suit your shifts',
                  'Fast, direct feedback on pronunciation and phrasing',
                  'Focus on areas you find hardest',
                  "Real scenarios from Rachael's clinical practice",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-0.5 text-green-700 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold text-green-700 uppercase tracking-wide">
                Prerequisite: Finnish B2 or equivalent
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">Individual Sessions</h3>
                  <p className="text-gray-500 text-sm">Online, 1-on-1</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-gray-900">€40</span>
                  <p className="text-sm text-gray-500">/hour</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-8">
                Buy single sessions or a block. No minimum commitment — start with one and continue when it works for
                you.
              </p>
              <Link
                href="/contact?course=individual"
                className="block text-center bg-green-700 text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-green-800 transition-colors"
              >
                Sign up — 1-on-1
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
            <h2 className="text-2xl font-bold">Study Materials</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-green-700 transition-colors">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-bold text-lg mb-2">PDF Notes</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Clinical vocabulary sheets, phrase guides, and documentation templates. Organised by department and
                topic.
              </p>
              <p className="text-sm text-gray-500 mb-6">Priced per pack. Get in touch for details.</p>
              <Link
                href="/contact?course=pdf"
                className="inline-block bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors"
              >
                Enquire
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8 bg-gray-50 relative overflow-hidden">
              <span className="absolute top-4 right-4 bg-slate-200 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                Coming Soon
              </span>
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="font-bold text-lg mb-2">Video Library</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Pre-recorded lessons covering core healthcare Finnish topics. Watch and rewatch at your own pace —
                ideal for shift workers.
              </p>
              <p className="text-sm text-gray-500">
                Annual subscription fee. Join the waitlist to be notified when it launches.
              </p>
              <Link
                href="/contact?course=video"
                className="mt-6 inline-block border border-gray-200 text-gray-400 text-sm font-semibold px-5 py-2.5 rounded-lg cursor-default opacity-60"
              >
                Join Waitlist
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
            <h2 className="text-2xl font-bold">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What level of Finnish do I need?',
                a: "These courses are designed for professionals who already have B2-level Finnish or above. If you're unsure whether you qualify, book a free call with Rachael and she'll advise you.",
              },
              {
                q: 'How are sessions delivered?',
                a: 'All sessions are online via video call (Zoom or Teams). You just need a stable internet connection and a quiet space.',
              },
              {
                q: 'Can I do both group and 1-on-1?',
                a: 'Absolutely. Many students do group sessions for general clinical vocabulary and add 1-on-1 sessions to focus on their specific department or gaps.',
              },
              {
                q: 'What happens after I book?',
                a: "Rachael will get in touch within 48 hours to arrange a short intro call, confirm your background, and agree on a schedule.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
