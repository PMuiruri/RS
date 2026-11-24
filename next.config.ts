import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./localeConfig/request.ts')

const nextConfig: NextConfig = {
  // The marketing site is a single page; keep old section URLs working.
  async redirects() {
    return ['about', 'courses', 'contact'].flatMap((section) => [
      { source: `/:locale(en|fi)/${section}`, destination: `/:locale#${section}`, permanent: false },
      { source: `/${section}`, destination: `/#${section}`, permanent: false },
    ])
  },
}

export default withNextIntl(nextConfig)
