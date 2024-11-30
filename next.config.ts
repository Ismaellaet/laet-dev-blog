import type { NextConfig } from 'next';
import type { Redirect } from 'next/dist/lib/load-custom-routes';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async redirects(): Promise<Redirect[]> {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
