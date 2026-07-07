import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'activities.title', 'activities.description', '/activities');
}

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
