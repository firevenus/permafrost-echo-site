import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';
import { Inter, Noto_Sans_SC, Noto_Sans_JP, Noto_Sans_KR } from 'next/font/google';
import JsonLd from '@/components/seo/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-noto-sc',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-jp',
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-kr',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080e16',
};

const BASE_URL = 'https://permafrost-echo.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | 冻土回声 Permafrost Echo',
    default: '冻土回声 | Permafrost Echo — 东北亚独立游戏生态平台',
  },
  description:
    '冻土回声（Permafrost Echo）— 专注于独立游戏生态的内容与活动组织平台，立足沈阳，覆盖东北亚。举办 Game Jam、SSCA 游戏展区、高校联盟等活动。',
  keywords: [
    '冻土回声',
    'Permafrost Echo',
    '独立游戏',
    'Indie Game',
    'Game Jam',
    '游戏开发',
    '东北亚',
    '沈阳',
    '游戏社区',
    '独立游戏生态',
  ],
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
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '冻土回声 | Permafrost Echo',
    title: '冻土回声 | Permafrost Echo — 东北亚独立游戏生态平台',
    description:
      '冻土回声（Permafrost Echo）— 专注于独立游戏生态的内容与活动组织平台，立足沈阳，覆盖东北亚。',
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/images/og-default.svg`,
        width: 1200,
        height: 630,
        alt: '冻土回声 Permafrost Echo — 东北亚独立游戏生态平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '冻土回声 | Permafrost Echo',
    description: '东北亚独立游戏生态平台 — 破土而出，回响世界',
    images: [`${BASE_URL}/images/og-default.svg`],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh"
      className={`${inter.variable} ${notoSansSC.variable} ${notoSansJP.variable} ${notoSansKR.variable}`}
    >
      <body className="antialiased bg-[#080e16] text-[#e8edf5] min-h-screen">
        <JsonLd />
        <div className="bg-permafrost" />
        {children}
      </body>
    </html>
  );
}
