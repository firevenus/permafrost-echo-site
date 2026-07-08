import type { Viewport } from 'next';
import '@/app/globals.css';
import { Space_Grotesk, Noto_Sans_SC, Noto_Sans_JP, Noto_Sans_KR } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh"
      className={`${spaceGrotesk.variable} ${notoSansSC.variable} ${notoSansJP.variable} ${notoSansKR.variable}`}
    >
      <body className="antialiased bg-[#080e16] text-[#e8edf5] min-h-screen">
        <div className="bg-permafrost" />
        {children}
      </body>
    </html>
  );
}
