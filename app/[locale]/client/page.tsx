import Link from 'next/link'

const sessions = [
  { type: 'Group Session', date: 'Mon 24 Mar', time: '17:00', topic: 'Emergency vocabulary', status: 'Confirmed' },
  { type: '1-on-1', date: 'Tue 1 Apr', time: '10:00', topic: 'Patient communication', status: 'Confirmed' },
]

const materials = [
  { title: 'Emergency Department — Core Vocabulary', type: 'PDF', size: '1.2 MB' },
  { title: 'Patient Communication Phrases', type: 'PDF', size: '0.8 MB' },
  { title: 'Clinical Documentation Language', type: 'PDF', size: '1.5 MB' },
]

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-green-800">Rachael</span>
          <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded-full">Student</span>
        </div>
        <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">Sign out</Link>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">My dashboard</h1>
        <p className="text-gray-500 text-sm mb-8">Welcome back. Here are your upcoming sessions and materials.</p>

        {/* Upcoming sessions */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-5">Upcoming sessions</h2>
          {sessions.length === 0 ? (
            <p className="text-sm text-gray-400">No sessions booked yet. <Link href="/#contact" className="text-green-700 hover:underline">Get in touch</Link> to sign up.</p>
          ) : (
            <div className="space-y-4">
              {sessions.map((s, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-green-50 border border-green-100">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{s.type}</p>
                    <p className="text-xs text-gray-500">{s.date} at {s.time} · {s.topic}</p>
                  </div>
                  <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Materials */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-5">My materials</h2>
          {materials.length === 0 ? (
            <p className="text-sm text-gray-400">No materials yet.</p>
          ) : (
            <div className="space-y-3">
              {materials.map((m, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded-lg">{m.type}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{m.title}</p>
                      <p className="text-xs text-gray-400">{m.size}</p>
                    </div>
                  </div>
                  <button className="text-xs text-green-700 font-medium hover:underline">Download</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Help */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <p className="font-semibold mb-1">Need to reschedule or have a question?</p>
          <p className="text-green-200 text-sm mb-4">Get in touch and I will get back to you within 3 working days.</p>
          <Link href="/#contact" className="inline-block bg-white text-green-800 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-green-50 transition-colors">
            Contact Rachael
          </Link>
        </div>
      </div>
    </main>
  )
}
