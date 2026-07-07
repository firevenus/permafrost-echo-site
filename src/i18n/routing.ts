import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['zh', 'en', 'ko', 'ja', 'ru', 'mn'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  ru: 'Русский',
  mn: 'Монгол',
};

export const routing = defineRouting({
  locales,
  defaultLocale: 'zh',
  localePrefix: 'always',
});

export const { Link, usePathname, useRouter } = createNavigation(routing);
