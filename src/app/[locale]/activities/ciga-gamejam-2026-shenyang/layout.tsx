import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';

const BASE_URL = 'https://permafrost-echo.com';

const ogLocaleMap: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ko: 'ko_KR',
  ja: 'ja_JP',
  ru: 'ru_RU',
  mn: 'mn_MN',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await getMessages()) as Record<string, unknown>;
  const t = (messages.gamejamDetail as Record<string, string>) || {};

  const title = t.title || '2026 CiGA Game Jam Shenyang';
  const description = `${t.intro1 || ''} ${t.intro2 || ''}`.trim();
  const url = `${BASE_URL}/${locale}/activities/ciga-gamejam-2026-shenyang`;

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${BASE_URL}/${loc}/activities/ciga-gamejam-2026-shenyang`;
  }

  return {
    title: `${title} | Permafrost Echo`,
    description,
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
      locale: ogLocaleMap[locale] || 'zh_CN',
      siteName: '「冻土回声」 | Permafrost Echo',
      title: `${title} | Permafrost Echo`,
      description,
      url,
      images: [
        {
          url: `${BASE_URL}/images/og-default.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Permafrost Echo`,
      description,
      images: [`${BASE_URL}/images/og-default.png`],
    },
    // Google Search Console verification
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? {
          verification: {
            google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
          },
        }
      : {}),
  };
}

export default function CigaGameJamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
