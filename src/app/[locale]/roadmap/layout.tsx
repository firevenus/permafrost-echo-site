import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'roadmap.title', 'roadmap.description', '/roadmap');
}

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
