import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

const BASE_URL = 'https://permafrost-echo.com';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const localeConfig: Record<
  string,
  {
    lang: string;
    ogLocale: string;
    title: string;
    description: string;
  }
> = {
  zh: {
    lang: 'zh-CN',
    ogLocale: 'zh_CN',
    title: '冻土回声 | Permafrost Echo — 东北亚独立游戏生态平台',
    description:
      '冻土回声（Permafrost Echo）— 专注于独立游戏生态的内容与活动组织平台，立足沈阳，覆盖东北亚。举办 Game Jam、SSCA 游戏展区、高校联盟等活动。',
  },
  en: {
    lang: 'en',
    ogLocale: 'en_US',
    title: 'Permafrost Echo — Northeast Asia Indie Game Ecosystem Platform',
    description:
      'Permafrost Echo — a content and event platform for the indie game ecosystem, based in Shenyang, covering Northeast Asia. Hosting Game Jams, SSCA game zones, university alliances, and more.',
  },
  ko: {
    lang: 'ko',
    ogLocale: 'ko_KR',
    title: '페름프로스트 에코 — 동북아시아 인디 게임 생태계 플랫폼',
    description:
      '페름프로스트 에코 — 선양을 거점으로 동북아시아를 아우르는 인디 게임 생태계 플랫폼. Game Jam, SSCA 게임 존, 대학 연합 등을 주최합니다.',
  },
  ja: {
    lang: 'ja',
    ogLocale: 'ja_JP',
    title: 'パーマフロスト・エコー — 東北アジア・インディーゲーム・エコシステム',
    description:
      'パーマフロスト・エコー — 瀋陽を拠点に東北アジアをカバーするインディーゲームエコシステムプラットフォーム。Game Jam、SSCAゲームゾーン、大学連合などを開催。',
  },
  ru: {
    lang: 'ru',
    ogLocale: 'ru_RU',
    title: 'Пермафрост Эхо — Экосистема инди-игр Северо-Восточной Азии',
    description:
      'Пермафрост Эхо — платформа контента и мероприятий для экосистемы инди-игр, базирующаяся в Шэньяне, охватывающая Северо-Восточную Азию.',
  },
  mn: {
    lang: 'mn',
    ogLocale: 'mn_MN',
    title: 'Пермафрост Эхо — Зүүн Хойд Азийн Инди Тоглоомын Экосистем',
    description:
      'Пермафрост Эхо — Шэньян хотод төвтэй, Зүүн Хойд Азийг хамарсан инди тоглоомын экосистемийн контент ба арга хэмжээний платформ.',
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
          url: `${BASE_URL}/images/og-default.svg`,
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
      images: [`${BASE_URL}/images/og-default.svg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return <div>Language not supported</div>;
  }

  setRequestLocale(locale);
  const messages = await getMessages();

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
      <div className="min-h-screen bg-[#080e16] flex flex-col">
        <Header messages={navMessages} />
        <main className="flex-1 pt-16">{children}</main>
        <Footer messages={navMessages} />
      </div>
    </NextIntlClientProvider>
  );
}
