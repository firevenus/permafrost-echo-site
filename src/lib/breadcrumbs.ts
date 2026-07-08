import { localeLabels, type Locale } from '@/i18n/routing';

const BASE_URL = 'https://permafrost-echo.com';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

/**
 * Generate BreadcrumbList items for a page given its locale and path segments.
 *
 * Path segments are pairs of [label key, URL segment]. The first segment
 * is always the home page.
 *
 * Example:
 *   getBreadcrumbs('zh', [['activities', 'activities'], ['gamejamDetail.title', 'ciga-gamejam-2026-shenyang']])
 *
 * Labels can be either:
 *   - A direct string (for static breadcrumbs)
 *   - A path like 'nav.xxx' to look up from translations
 */
export function getBreadcrumbs(
  locale: string,
  segments: [label: string, urlSegment: string][],
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    {
      name: 'Permafrost Echo',
      item: `${BASE_URL}/${locale}`,
    },
  ];

  let accumulatedPath = '';
  for (const [label, segment] of segments) {
    accumulatedPath += `/${segment}`;
    items.push({
      name: label,
      item: `${BASE_URL}/${locale}${accumulatedPath}`,
    });
  }

  return items;
}

/**
 * Pre-defined breadcrumb segments for common pages.
 * The label is used as the display name (can be overridden with translated text).
 */
export const breadcrumbLabels: Record<string, Record<Locale, string>> = {
  about: {
    zh: '关于我们',
    en: 'About',
    ko: '소개',
    ja: '概要',
    ru: 'О нас',
    mn: 'Тухай',
  },
  activities: {
    zh: '活动',
    en: 'Activities',
    ko: '활동',
    ja: '活動',
    ru: 'Мероприятия',
    mn: 'Үйл ажиллагаа',
  },
  games: {
    zh: '游戏作品',
    en: 'Games',
    ko: '게임',
    ja: 'ゲーム',
    ru: 'Игры',
    mn: 'Тоглоом',
  },
  community: {
    zh: '社区',
    en: 'Community',
    ko: '커뮤니티',
    ja: 'コミュニティ',
    ru: 'Сообщество',
    mn: 'Нийгэмлэг',
  },
  team: {
    zh: '团队',
    en: 'Team',
    ko: '팀',
    ja: 'チーム',
    ru: 'Команда',
    mn: 'Баг',
  },
  roadmap: {
    zh: '路线图',
    en: 'Roadmap',
    ko: '로드맵',
    ja: 'ロードマップ',
    ru: 'Дорожная карта',
    mn: 'Замын зураг',
  },
  contact: {
    zh: '联系我们',
    en: 'Contact',
    ko: '문의',
    ja: 'お問い合わせ',
    ru: 'Контакты',
    mn: 'Холбоо барих',
  },
  partners: {
    zh: '合作伙伴',
    en: 'Partners',
    ko: '파트너',
    ja: 'パートナー',
    ru: 'Партнёры',
    mn: 'Түншүүд',
  },
  articles: {
    zh: '文章',
    en: 'Articles',
    ko: '기사',
    ja: '記事',
    ru: 'Статьи',
    mn: 'Нийтлэл',
  },
  gamejam: {
    zh: 'CIGA GameJam 2026 沈阳站',
    en: 'CIGA GameJam 2026 Shenyang',
    ko: 'CIGA GameJam 2026 선양',
    ja: 'CIGA GameJam 2026 瀋陽',
    ru: 'CIGA GameJam 2026 Шэньян',
    mn: 'CIGA GameJam 2026 Шэньян',
  },
};
