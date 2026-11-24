import { useTranslations } from 'next-intl'
import { Link } from '@/localeConfig/navigation'

export default function Footer() {
  const t = useTranslations('Nav')
  const tf = useTranslations('Footer')

  return (
    <footer className="bg-slate-900 text-slate-400 py-8 px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <span className="font-serif text-lg font-semibold text-white">Healthcare Finnish</span>
        <div className="flex gap-6">
          <Link href={{ pathname: '/', hash: 'about' }} className="hover:text-white transition-colors">{t('about')}</Link>
          <Link href={{ pathname: '/', hash: 'courses' }} className="hover:text-white transition-colors">{t('courses')}</Link>
          <Link href={{ pathname: '/', hash: 'experience' }} className="hover:text-white transition-colors">{t('cv')}</Link>
          <Link href={{ pathname: '/', hash: 'contact' }} className="hover:text-white transition-colors">{t('contact')}</Link>
        </div>
        <span>{tf('rights')}</span>
      </div>
    </footer>
  )
}
