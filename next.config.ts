import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./localeConfig/request.ts')

const nextConfig: NextConfig = {}

export default withNextIntl(nextConfig)
