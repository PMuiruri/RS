'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ContactContent() {
  const searchParams = useSearchParams()
  const preselected = searchParams.get('course') ?? ''

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-gray-200 bg-linear-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-700 mb-4">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Drop me a message.</h1>
          <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
            Whether you want to sign up, ask a question, or just find out if these courses are right for you — I&apos;d
            love to hear from you. I will respond in 3 working days.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left: contact info */}
          <div>
            <h2 className="text-xl font-bold mb-8">How to reach me</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <a href="mailto:kijosundell@outlook.com" className="text-green-700 hover:underline text-sm">
                    kijosundell@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Phone / WhatsApp</p>
                  <a href="tel:+358440399390" className="text-green-700 hover:underline text-sm">
                    044 039 9390
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Response time</p>
                  <p className="text-gray-600 text-sm">I will respond in 3 working days</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Sessions</p>
                  <p className="text-gray-600 text-sm">Online via Zoom or Teams</p>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="mt-12 bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-bold text-sm mb-4">What happens next?</h3>
              <ol className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="text-green-700 font-bold">1.</span> I&apos;ll read your message and get back to you within 3 working days.
                </li>
                <li className="flex gap-3">
                  <span className="text-green-700 font-bold">2.</span> We&apos;ll have a quick chat to make sure the course is the right fit for your level and goals.
                </li>
                <li className="flex gap-3">
                  <span className="text-green-700 font-bold">3.</span> I&apos;ll send you a schedule and payment details.
                </li>
                <li className="flex gap-3">
                  <span className="text-green-700 font-bold">4.</span> You&apos;re in — your first session is booked.
                </li>
              </ol>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h2 className="text-xl font-bold mb-8">Send me a message</h2>
            <form action="https://formspree.io/f/yourformid" method="POST" className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone / WhatsApp <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">I&apos;m interested in</label>
                <select
                  name="course_type"
                  defaultValue={preselected}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition bg-white"
                >
                  <option value="">Select a course…</option>
                  <option value="group-5h">Group Sessions — Starter (5h, €150)</option>
                  <option value="group-10h">Group Sessions — Full Pack (10h, €300)</option>
                  <option value="individual">1-on-1 Sessions (€40/h)</option>
                  <option value="pdf">PDF Study Materials</option>
                  <option value="video">Video Library (waitlist)</option>
                  <option value="free-call">Just a free intro call first</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Finnish level</label>
                <select
                  name="finnish_level"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition bg-white"
                >
                  <option value="">Select…</option>
                  <option value="B2">B2</option>
                  <option value="C1">C1</option>
                  <option value="C2">C2</option>
                  <option value="unsure">Not sure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your professional background
                </label>
                <input
                  type="text"
                  name="profession"
                  placeholder="e.g. RN, physiotherapist, doctor…"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any questions, or tell me a bit about your situation…"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white font-bold py-3.5 rounded-lg hover:bg-green-800 transition-colors text-sm"
              >
                Send Message
              </button>
              <p className="text-xs text-gray-500 text-center">
                No spam. I read and respond to every message personally.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  )
}
