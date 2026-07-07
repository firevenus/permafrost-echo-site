import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'community.title', 'community.description', '/community');
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
