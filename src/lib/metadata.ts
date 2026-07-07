import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';

const BASE_URL = 'https://permafrost-echo.com';

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
 * Title format: "{pageTitle} | 冻土回声 Permafrost Echo" (via template in root layout)
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

  const url = `${BASE_URL}/${locale}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${pageTitle} | 冻土回声 Permafrost Echo`,
      description: pageDescription,
      url,
      images: [
        {
          url: `${BASE_URL}/images/og-default.svg`,
          width: 1200,
          height: 630,
          alt: `${pageTitle} | 冻土回声 Permafrost Echo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} | 冻土回声 Permafrost Echo`,
      description: pageDescription,
      images: [`${BASE_URL}/images/og-default.svg`],
    },
  };
}
