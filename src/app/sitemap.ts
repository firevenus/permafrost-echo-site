import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://permafrost-echo.com';

const pages = [
  '',
  '/about',
  '/activities',
  '/games',
  '/community',
  '/team',
  '/roadmap',
  '/contact',
  '/partners',
  '/articles',
  '/articles/game-jam-2026-review',
  '/articles/ssca-2026-announcement',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
