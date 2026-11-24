import Link from 'next/link'

const stats = [
  { label: 'New enquiries', value: '3', change: 'This week' },
  { label: 'Active clients', value: '12', change: '2 starting soon' },
  { label: 'Sessions this month', value: '18', change: '4 remaining' },
  { label: 'Materials uploaded', value: '9', change: 'PDFs & notes' },
]

const enquiries = [
  { name: 'Anna Korhonen', email: 'anna@example.com', interest: 'Group — 5h', level: 'B2', date: '18 Mar' },
  { name: 'Mehmet Yilmaz', email: 'mehmet@example.com', interest: '1-on-1', level: 'B2+', date: '17 Mar' },
  { name: 'Sofia Mäkinen', email: 'sofia@example.com', interest: 'Group — 10h', level: 'C1', date: '15 Mar' },
]

const sessions = [
  { client: 'Anna Korhonen', type: 'Group', date: 'Mon 24 Mar', time: '17:00', status: 'Confirmed' },
  { client: 'Mehmet Yilmaz', type: '1-on-1', date: 'Tue 25 Mar', time: '10:00', status: 'Confirmed' },
  { client: 'Group A', type: 'Group', date: 'Wed 26 Mar', time: '18:00', status: 'Pending' },
]

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-green-800">Rachael</span>
          <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded-full">Admin</span>
        </div>
        <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">Sign out</Link>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
        <p className="text-gray-500 text-sm mb-8">Welcome back, Rachael.</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-200 p-5">
              <p className="text-3xl font-bold text-green-700 mb-1">{s.value}</p>
              <p className="text-sm font-medium text-gray-800">{s.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.change}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Enquiries */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-gray-900">Recent enquiries</h2>
              <span className="text-xs text-green-700 font-medium">View all</span>
            </div>
            <div className="space-y-4">
              {enquiries.map((e) => (
                <div key={e.email} className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{e.name}</p>
                    <p className="text-xs text-gray-400">{e.interest} · {e.level}</p>
                  </div>
                  <span className="text-xs text-gray-400">{e.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming sessions */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-gray-900">Upcoming sessions</h2>
              <span className="text-xs text-green-700 font-medium">View all</span>
            </div>
            <div className="space-y-4">
              {sessions.map((s, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{s.client}</p>
                    <p className="text-xs text-gray-400">{s.type} · {s.date} at {s.time}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    s.status === 'Confirmed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
