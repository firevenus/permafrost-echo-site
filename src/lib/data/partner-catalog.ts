export interface PartnerCatalogEntry {
  id: string;
  logo?: string;
  logoText?: string;
  logoTone?: 'normal' | 'light';
  website?: string;
  /** Keep true until an official, display-authorized logo is supplied. */
  logoPending?: boolean;
}

/** Authoritative source for partner assets and links across all locales. */
export const partnerCatalog: Record<string, PartnerCatalogEntry> = {
  'unity-china': { id: 'unity-china', logo: '/images/partners/unity.svg' },
  'netease-digital': {
    id: 'netease-digital',
    logo: '/images/partners/netease-digital.png',
    logoTone: 'light',
  },
  'netease-edu': {
    id: 'netease-edu',
    logo: '/images/partners/netease-edu.png',
    logoTone: 'light',
  },
  'tencent-edu': { id: 'tencent-edu', logo: '/images/partners/tencent-edu.png' },
  'asus-liaoning': { id: 'asus-liaoning', logo: '/images/partners/asus.png' },
  aura: { id: 'aura', logo: '/images/partners/aula.png' },
  'xirang-games': {
    id: 'xirang-games',
    logo: '/images/partners/xirang-games.png',
    website: 'https://www.xirang.games/',
  },
  gamesir: {
    id: 'gamesir',
    logoText: 'GameSir · 盖世小鸡',
    logoPending: true,
  },
  autofull: {
    id: 'autofull',
    logoText: 'AutoFull · 傲风',
    logoPending: true,
  },
  youxichaguan: {
    id: 'youxichaguan',
    logoText: '游戏茶馆',
    logoPending: true,
  },
  'indie-light': {
    id: 'indie-light',
    logoText: '独立之光',
    logoPending: true,
  },
};

export function getPartnerCatalogEntry(id: string): PartnerCatalogEntry {
  const entry = partnerCatalog[id];
  if (!entry) {
    throw new Error(`Partner ${id} is missing from partnerCatalog.`);
  }
  return entry;
}

export function getPendingPartnerLogoIds(): string[] {
  return Object.values(partnerCatalog)
    .filter((partner) => partner.logoPending)
    .map((partner) => partner.id);
}
