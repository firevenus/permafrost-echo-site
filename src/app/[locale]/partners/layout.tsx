import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'partners.title', 'partners.description', '/partners');
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
