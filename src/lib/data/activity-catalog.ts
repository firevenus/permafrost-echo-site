export type ActivityStatus = 'upcoming' | 'completed';

export interface ActivityCatalogEntry {
  /** Stable identifier shared by every locale and asset directory. */
  id: string;
  /** Human-readable date shown on cards. */
  dateLabel: string;
  /** ISO date used for deterministic ordering. */
  sortDate: string;
  /** Exact dates are optional for older records whose day is not documented. */
  startDate?: string;
  endDate?: string;
  /** Used only when exact dates are unavailable. */
  statusFallback?: ActivityStatus;
  highlight?: boolean;
  images?: string[];
}

const activityImages = {
  'ggj-2026': [
    '/images/activities/ggj-2026/ggj-2026-cover.webp',
    '/images/activities/ggj-2026/ggj-2026-01.webp',
    '/images/activities/ggj-2026/ggj-2026-02.webp',
  ],
  'northern-anime-carnival-2026-05': [
    '/images/activities/northern-anime-carnival-2026-05/northern-anime-carnival-2026-05-cover.webp',
    '/images/activities/northern-anime-carnival-2026-05/northern-anime-carnival-2026-05-01.webp',
    '/images/activities/northern-anime-carnival-2026-05/northern-anime-carnival-2026-05-02.webp',
  ],
  'ssca-2026-10': [
    '/images/activities/ssca-2026-10/ssca-2026-10-cover.webp',
    '/images/activities/ssca-2026-10/ssca-2026-10-01.webp',
    '/images/activities/ssca-2026-10/ssca-2026-10-02.webp',
  ],
} as const;

/**
 * The authoritative source for dates, lifecycle state, ordering and assets.
 * Localized files may describe an activity, but must not redefine these fields.
 */
export const activityCatalog: Record<string, ActivityCatalogEntry> = {
  'ssca-2025': {
    id: 'ssca-2025',
    dateLabel: '2025-10',
    sortDate: '2025-10-01',
    statusFallback: 'completed',
  },
  'ggj-2026': {
    id: 'ggj-2026',
    dateLabel: '2026-02',
    sortDate: '2026-02-01',
    statusFallback: 'completed',
    images: [...activityImages['ggj-2026']],
  },
  'northern-anime-carnival-2026-05': {
    id: 'northern-anime-carnival-2026-05',
    dateLabel: '2026-05',
    sortDate: '2026-05-01',
    statusFallback: 'completed',
    images: [...activityImages['northern-anime-carnival-2026-05']],
  },
  'ciga-gamejam-2026-shenyang': {
    id: 'ciga-gamejam-2026-shenyang',
    dateLabel: '2026-07',
    sortDate: '2026-07-01',
    statusFallback: 'completed',
    images: [
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-01.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-02.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-03.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-04.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-05.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-06.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-07.webp',
    ],
  },
  'ssca-2026-07': {
    id: 'ssca-2026-07',
    dateLabel: '2026-07-31 — 08-02',
    sortDate: '2026-07-31',
    startDate: '2026-07-31',
    endDate: '2026-08-02',
  },
  'ssca-2026-10': {
    id: 'ssca-2026-10',
    dateLabel: '2026-10-01 — 10-04',
    sortDate: '2026-10-01',
    startDate: '2026-10-01',
    endDate: '2026-10-04',
    images: [...activityImages['ssca-2026-10']],
  },
  'ssca-2027-01': {
    id: 'ssca-2027-01',
    dateLabel: '2027-01-22 — 01-24',
    sortDate: '2027-01-22',
    startDate: '2027-01-22',
    endDate: '2027-01-24',
    highlight: true,
  },
  'ggj-2027': {
    id: 'ggj-2027',
    dateLabel: '2027-02',
    sortDate: '2027-02-01',
    statusFallback: 'upcoming',
  },
};

export function getShanghaiDate(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

export function resolveActivityStatus(
  entry: ActivityCatalogEntry,
  today = getShanghaiDate(),
): ActivityStatus {
  if (entry.endDate) {
    return today > entry.endDate ? 'completed' : 'upcoming';
  }

  if (!entry.statusFallback) {
    throw new Error(`Activity ${entry.id} needs an endDate or statusFallback.`);
  }

  return entry.statusFallback;
}

export function getActivityCatalogEntry(id: string): ActivityCatalogEntry {
  const entry = activityCatalog[id];
  if (!entry) {
    throw new Error(`Activity ${id} is missing from activityCatalog.`);
  }
  return entry;
}
