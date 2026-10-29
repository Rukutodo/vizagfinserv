import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VizagFinServ — AMFI-Registered Mutual Fund Distributor',
    short_name: 'VizagFinServ',
    description:
      'VizagFinServ (Sasanapuri Sreekar, ARN 138117) helps families in Visakhapatnam invest in mutual funds with clarity, discipline, and long-term goal-based planning.',
    start_url: '/',
    display: 'standalone',
    background_color: '#081426',
    theme_color: '#0F2A4A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
