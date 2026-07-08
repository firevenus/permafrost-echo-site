'use client';

import { usePathname } from 'next/navigation';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { getBreadcrumbs, breadcrumbLabels } from '@/lib/breadcrumbs';
import type { Locale } from '@/i18n/routing';

const PAGE_SEGMENTS: Record<string, string[]> = {
  about: ['about'],
  activities: ['activities'],
  games: ['games'],
  community: ['community'],
  team: ['team'],
  roadmap: ['roadmap'],
  contact: ['contact'],
  partners: ['partners'],
  articles: ['articles'],
};

export default function AutoBreadcrumb() {
  const pathname = usePathname();

  // pathname format: /{locale}/page[/subpage/...]
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length < 2) return null;

  const locale = parts[0] as Locale;
  const pageKey = parts[1];

  // Home page — no breadcrumb needed (it's the root)
  if (parts.length === 2) {
    // Single-level page like /zh/about
    const label = breadcrumbLabels[pageKey]?.[locale] || pageKey;
    const items = getBreadcrumbs(locale, [[label, pageKey]]);
    return <BreadcrumbJsonLd items={items} />;
  }

  // Multi-level page like /zh/activities/ciga-gamejam-2026-shenyang
  // or /zh/articles/some-slug
  const segments: [string, string][] = [];
  let currentPath = '';

  for (let i = 1; i < parts.length; i++) {
    const seg = parts[i];
    const label = breadcrumbLabels[seg]?.[locale] || seg;
    segments.push([label, seg]);
  }

  const items = getBreadcrumbs(locale, segments);
  return <BreadcrumbJsonLd items={items} />;
}
