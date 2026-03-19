import ProfileImage from '@/components/ProfileImage'

export const metadata = {
  title: 'About — Healthcare Finnish with Rachael',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-gray-200 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-4">
              Meet your instructor
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Hi, I&apos;m Rachael.</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              I&apos;m a registered nurse working in Accident &amp; Emergency in Finland. I teach healthcare Finnish
              because I&apos;ve lived the experience of learning it — and I know exactly where the gaps are between
              textbook Finnish and real clinical communication.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-80 rounded-2xl bg-green-50 overflow-hidden border border-green-200 shadow-lg flex items-center justify-center">
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
            <h2 className="text-2xl font-bold">Background</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
            <div className="space-y-5">
              <p>
                I graduated in 2005 from JAMK University College of Health and Social Sciences. Since then I&apos;ve
                worked across a wide range of healthcare settings in Finland — from elderly care homes and geriatric
                wards to cardiac units and, primarily, Accident &amp; Emergency.
              </p>
              <p>
                I didn&apos;t grow up speaking Finnish. I learned it the hard way — through formal courses, self-study,
                and the daily necessity of working in a Finnish-speaking environment. I hold language certificates from
                JAMK and Helsinki University.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                That experience gave me a very specific perspective: I know which Finnish phrases you actually need in a
                resus bay. I know how patients describe pain, confusion, and distress. And I know how nurses and doctors
                communicate in handovers, documentation, and emergencies.
              </p>
              <p>
                I teach healthcare Finnish to health professionals who already have general Finnish (B2 or above) and
                want to apply it with confidence in clinical settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical experience */}
      <section className="py-20 px-6 border-b border-gray-200 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-sm font-bold tracking-widest text-green-600">02</span>
            <h2 className="text-2xl font-bold">Clinical Experience</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '🚨', title: 'Accident & Emergency', body: 'Primary department. High-pressure, fast-paced communication with patients, families, and multidisciplinary teams.' },
              { icon: '❤️', title: 'Cardiac Ward', body: 'Vocabulary for cardiac monitoring, medications, patient education, and clinical documentation.' },
              { icon: '🏥', title: 'Medical Wards', body: 'General ward communication, medication rounds, and interdisciplinary handovers.' },
              { icon: '👴', title: 'Geriatric Care', body: 'Patient-centred communication with older adults, cognitive assessment language, and family discussions.' },
              { icon: '🏠', title: 'Elderly Home Care', body: 'Community-based care vocabulary, daily care documentation, and resident interaction.' },
              { icon: '🩺', title: 'Emergency Ward', body: 'Triage language, ABCDE assessment terminology, and emergency team communication.' },
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
            <h2 className="text-2xl font-bold">Qualifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
            {[
              { icon: '🎓', title: 'Bachelor of Health Care (Nursing)', sub: 'JAMK University of Applied Sciences, 2005' },
              { icon: '🇫🇮', title: 'Finnish Language Certificate', sub: 'JAMK University of Applied Sciences' },
              { icon: '📜', title: 'Finnish Language Certificate', sub: 'University of Helsinki' },
              { icon: '🏥', title: 'Registered Nurse — Finland', sub: 'Active clinical practice in Finnish healthcare' },
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
            Teaching philosophy
          </span>
          <blockquote className="text-2xl md:text-3xl font-bold leading-snug tracking-tight mb-8">
            &ldquo;Healthcare Finnish is not about being perfect. It&apos;s about being understood — by your patient,
            your colleague, and yourself in a high-pressure moment.&rdquo;
          </blockquote>
          <p className="text-green-100 leading-relaxed max-w-xl mx-auto">
            Every session is built around realistic situations. Not grammar drills. Not abstract vocabulary lists. Real
            language, in real contexts, that you&apos;ll use on your next shift.
          </p>
        </div>
      </section>
    </>
  )
}
