import { useTranslations } from 'next-intl'
import { Link } from '@/localeConfig/navigation'

export default function Footer() {
  const t = useTranslations('Nav')
  const tf = useTranslations('Footer')

  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <span className="font-semibold text-white">Healthcare Finnish</span>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-white transition-colors">{t('about')}</Link>
          <Link href="/courses" className="hover:text-white transition-colors">{t('courses')}</Link>
          <Link href="/contact" className="hover:text-white transition-colors">{t('contact')}</Link>
        </div>
        <span>{tf('rights')}</span>
      </div>
    </footer>
  )
}
