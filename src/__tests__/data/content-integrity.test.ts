import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n/routing';
import {
  activityCatalog,
  resolveActivityStatus,
} from '@/lib/data/activity-catalog';
import { getActivities } from '@/lib/data/activities';
import {
  getPendingPartnerLogoIds,
  partnerCatalog,
} from '@/lib/data/partner-catalog';
import { getPartners } from '@/lib/data/partners';
import { getStats } from '@/lib/data/stats';

describe('content data integrity', () => {
  it('keeps the same unique activity IDs in every locale', () => {
    const expectedIds = getActivities('zh').map((activity) => activity.id).sort();

    for (const locale of locales) {
      const ids = getActivities(locale).map((activity) => activity.id);
      expect(new Set(ids).size).toBe(ids.length);
      expect([...ids].sort()).toEqual(expectedIds);
    }
  });

  it('derives exact-date activity status instead of trusting copied locale fields', () => {
    expect(
      resolveActivityStatus(activityCatalog['ssca-2026-10'], '2026-10-13'),
    ).toBe('completed');
    expect(
      resolveActivityStatus(activityCatalog['ssca-2027-01'], '2026-10-13'),
    ).toBe('upcoming');
  });

  it('references existing activity assets', () => {
    for (const activity of Object.values(activityCatalog)) {
      for (const image of activity.images || []) {
        const absolutePath = path.join(process.cwd(), 'public', image.replace(/^\//, ''));
        expect(fs.existsSync(absolutePath), `${activity.id}: ${image}`).toBe(true);
      }
    }
  });

  it('keeps partner IDs unique and covered by the asset catalog', () => {
    for (const locale of locales) {
      const ids = getPartners(locale).map((partner) => partner.id);
      expect(new Set(ids).size).toBe(ids.length);
      expect(ids.every((id) => Boolean(partnerCatalog[id]))).toBe(true);
    }
  });

  it('tracks partners whose official logos are still pending', () => {
    expect(getPendingPartnerLogoIds().sort()).toEqual(
      ['autofull', 'gamesir', 'indie-light', 'youxichaguan'].sort(),
    );
  });

  it('keeps public metrics in one positive-number source', () => {
    expect(Object.values(getStats()).every((value) => Number.isFinite(value) && value > 0)).toBe(true);
  });
});
