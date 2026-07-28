import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

const BASE_URL = 'https://permafrost-echo.com';

const ogLocaleMap: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ko: 'ko_KR',
  ja: 'ja_JP',
  ru: 'ru_RU',
  mn: 'mn_MN',
};

function getOgLocale(locale: string): string {
  return ogLocaleMap[locale] || 'zh_CN';
}

function getNested(obj: Record<string, unknown>, path: string): string {
  const parts = path.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return path;
    }
  }
  return typeof current === 'string' ? current : path;
}

/**
 * Generate page-level metadata based on translation keys.
 * Includes canonical URL, hreflang alternates, OpenGraph, and Twitter cards.
 */
export async function getPageMetadata(
  locale: string,
  titleKey: string,
  descriptionKey: string,
  path: string,
): Promise<Metadata> {
  const messages = (await getMessages()) as Record<string, unknown>;

  const pageTitle = getNested(messages, titleKey);
  const pageDescription = getNested(messages, descriptionKey);
  const titleWithBrand = `${pageTitle} | 「冻土回声」 Permafrost Echo`;

  const url = `${BASE_URL}/${locale}${path}`;

  // Hreflang alternates for this page across all locales
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}${path}`;
  }

  return {
    title: titleWithBrand,
    description: pageDescription,
    alternates: {
      canonical: url,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    openGraph: {
      type: 'website',
      locale: getOgLocale(locale),
      siteName: '「冻土回声」 | Permafrost Echo',
      title: titleWithBrand,
      description: pageDescription,
      url,
      images: [
        {
          url: `${BASE_URL}/images/og-default.png`,
          width: 1200,
          height: 630,
          alt: titleWithBrand,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleWithBrand,
      description: pageDescription,
      images: [`${BASE_URL}/images/og-default.png`],
    },
    // Google Search Console verification — set NEXT_PUBLIC_GSC_VERIFICATION in .env.local
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? {
          verification: {
            google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
          },
        }
      : {}),
  };
}
