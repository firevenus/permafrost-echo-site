import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { articleSlugs } from '@/lib/articles-data';

const BASE_URL = 'https://permafrost-echo.com';

const staticPages = [
  '',
  '/about',
  '/activities',
  '/activities/ciga-gamejam-2026-shenyang',
  '/games',
  '/community',
  '/team',
  '/roadmap',
  '/contact',
  '/partners',
  '/articles',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }

    // Dynamic article pages
    const slugs = articleSlugs[locale] || [];
    for (const slug of slugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/articles/${slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  return entries;
}
