import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'articles.title', 'articles.description', '/articles');
}

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
