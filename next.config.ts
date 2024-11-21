import type { NextConfig } from 'next';
import type { Redirect } from 'next/dist/lib/load-custom-routes';

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

export default nextConfig;
