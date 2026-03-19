import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <span className="font-semibold text-white">Healthcare Finnish</span>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <span>© 2025 Rachael — All rights reserved</span>
      </div>
    </footer>
  )
}
