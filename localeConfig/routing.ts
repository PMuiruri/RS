import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // Finnish is the main site. English is only shown when picked with the language switch.
  locales: ['fi', 'en'],
  defaultLocale: 'fi',
  localeDetection: false,
})
