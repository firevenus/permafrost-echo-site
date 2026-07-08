import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import AutoBreadcrumb from '@/components/seo/AutoBreadcrumb';
import type { Metadata } from 'next';

const BASE_URL = 'https://permafrost-echo.com';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const baseKeywords = ['Game Jam'];

const localeConfig: Record<
  string,
  {
    lang: string;
    ogLocale: string;
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  zh: {
    lang: 'zh-CN',
    ogLocale: 'zh_CN',
    title: '冻土回声 | Permafrost Echo — 东北亚独立游戏生态平台',
    description:
      '冻土回声（Permafrost Echo）— 专注于游戏开发的独立游戏生态平台，立足中国东北沈阳，覆盖东北亚。举办 Game Jam、SSCA 游戏展区、高校联盟等活动。探秘中国游戏市场新势力。',
    keywords: [...baseKeywords, '冻土回声', 'Permafrost Echo', '独立游戏', '游戏开发', '中国游戏市场', '中国东北', '东北亚', '沈阳', '游戏社区', '独立游戏生态', '游戏开发社区'],
  },
  en: {
    lang: 'en',
    ogLocale: 'en_US',
    title: 'Permafrost Echo — Northeast Asia Indie Game Ecosystem Platform',
    description:
      'Permafrost Echo — a game development and indie game ecosystem platform based in Northeast China (Shenyang), covering Northeast Asia. Hosting Game Jams, SSCA game zones, university alliances, and more. Explore the China game market.',
    keywords: [...baseKeywords, 'game development', 'China game market', 'Northeast China', 'Permafrost Echo', 'indie games', 'indie game ecosystem', 'Shenyang', 'game community', 'game dev', 'Northeast Asia'],
  },
  ko: {
    lang: 'ko',
    ogLocale: 'ko_KR',
    title: '페름프로스트 에코 — 동북아시아 인디 게임 생태계 플랫폼',
    description:
      '페름프로스트 에코 — 중국 동북(선양)에 기반을 둔 게임 개발 및 인디 게임 생태계 플랫폼. Game Jam, SSCA 게임 존, 대학 연합 등을 주최합니다. 중국 게임 시장의 새로운 물결.',
    keywords: [...baseKeywords, '게임 개발', '중국 게임 시장', '중국 동북', '페름프로스트 에코', '인디 게임', '인디 게임 생태계', '선양', '게임 커뮤니티', '동북아시아'],
  },
  ja: {
    lang: 'ja',
    ogLocale: 'ja_JP',
    title: 'パーマフロスト・エコー — 東北アジア・インディーゲーム・エコシステム',
    description:
      'パーマフロスト・エコー — 中国東北（瀋陽）を拠点とするゲーム開発・インディーゲームエコシステムプラットフォーム。Game Jam、SSCAゲームゾーン、大学連合などを開催。中国ゲーム市場の新たな可能性。',
    keywords: [...baseKeywords, 'ゲーム開発', '中国ゲーム市場', '中国東北', 'パーマフロスト・エコー', 'インディーゲーム', 'インディーゲームエコシステム', '瀋陽', 'ゲームコミュニティ', '東北アジア'],
  },
  ru: {
    lang: 'ru',
    ogLocale: 'ru_RU',
    title: 'Пермафрост Эхо — Экосистема инди-игр Северо-Восточной Азии',
    description:
      'Пермафрост Эхо — платформа для разработки игр и экосистемы инди-игр, базирующаяся в Северо-Восточном Китае (Шэньян). Game Jam, игровые зоны SSCA, университетские альянсы и многое другое. Изучите рынок игр Китая.',
    keywords: [...baseKeywords, 'разработка игр', 'рынок игр Китая', 'Северо-Восточный Китай', 'Пермафрост Эхо', 'инди-игры', 'экосистема инди-игр', 'Шэньян', 'игровое сообщество', 'Северо-Восточная Азия'],
  },
  mn: {
    lang: 'mn',
    ogLocale: 'mn_MN',
    title: 'Пермафрост Эхо — Зүүн Хойд Азийн Инди Тоглоомын Экосистем',
    description:
      'Пермафрост Эхо — Хятадын Зүүн Хойд (Шэньян) хотод төвтэй тоглоом хөгжүүлэлт ба инди тоглоомын экосистем платформ. Game Jam, SSCA тоглоомын бүс, их сургуулийн холбоо зэргийг зохион байгуулдаг. Хятадын тоглоомын зах зээлийг судлаарай.',
    keywords: [...baseKeywords, 'тоглоом хөгжүүлэлт', 'Хятадын тоглоомын зах зээл', 'Зүүн Хойд Хятад', 'Пермафрост Эхо', 'инди тоглоом', 'инди тоглоомын экосистем', 'Шэньян', 'тоглоомын нийгэмлэг', 'Зүүн Хойд Ази'],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const config = localeConfig[locale] || localeConfig.zh;

  const alternates: Record<string, string> = {};
  for (const loc of routing.locales) {
    alternates[loc] = `${BASE_URL}/${loc}`;
  }

  return {
    title: config.title,
    description: config.description,
    metadataBase: new URL(BASE_URL),
    keywords: config.keywords,
    authors: [{ name: '冻土回声 Permafrost Echo' }],
    creator: '冻土回声 Permafrost Echo',
    publisher: '冻土回声 Permafrost Echo',
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: alternates,
    },
    openGraph: {
      type: 'website',
      locale: config.ogLocale,
      siteName: '冻土回声 | Permafrost Echo',
      title: config.title,
      description: config.description,
      url: `${BASE_URL}/${locale}`,
      images: [
        {
          url: `${BASE_URL}/images/og-default.png`,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [`${BASE_URL}/images/og-default.png`],
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    manifest: '/manifest.webmanifest',
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

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return <div>Language not supported</div>;
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const config = localeConfig[locale] || localeConfig.zh;

  const navMessages: Record<string, string> = {};
  const rawMessages = messages as Record<string, unknown>;
  if (rawMessages.nav && typeof rawMessages.nav === 'object') {
    const nav = rawMessages.nav as Record<string, string>;
    for (const key of Object.keys(nav)) {
      navMessages[`nav.${key}`] = nav[key];
    }
  }
  if (rawMessages.footer && typeof rawMessages.footer === 'object') {
    const footer = rawMessages.footer as Record<string, string>;
    for (const key of Object.keys(footer)) {
      navMessages[`footer.${key}`] = footer[key];
    }
  }

  return (
    <NextIntlClientProvider messages={messages}>
      <JsonLd />
      <AutoBreadcrumb />
      <div className="min-h-screen bg-[#080e16] flex flex-col">
        <Header messages={navMessages} />
        <main className="flex-1 pt-16">{children}</main>
        <Footer messages={navMessages} />
      </div>
      <div className="bg-noise" />
    </NextIntlClientProvider>
  );
}
