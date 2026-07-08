import { describe, it, expect } from 'vitest';
import { getBreadcrumbs } from '@/lib/breadcrumbs';

describe('getBreadcrumbs', () => {
  it('should return home + no segments for empty array', () => {
    const crumbs = getBreadcrumbs('zh', []);
    expect(crumbs).toHaveLength(1);
    expect(crumbs[0].name).toBe('Permafrost Echo');
    expect(crumbs[0].item).toBe('https://permafrost-echo.com/zh');
  });

  it('should return breadcrumbs for about page', () => {
    const crumbs = getBreadcrumbs('zh', [['关于我们', 'about']]);
    expect(crumbs).toHaveLength(2);
    expect(crumbs[0].name).toBe('Permafrost Echo');
    expect(crumbs[1].name).toBe('关于我们');
    expect(crumbs[1].item).toBe('https://permafrost-echo.com/zh/about');
  });

  it('should return breadcrumbs for nested activity page', () => {
    const crumbs = getBreadcrumbs('en', [
      ['Activities', 'activities'],
      ['CIGA GameJam 2026 Shenyang', 'ciga-gamejam-2026-shenyang'],
    ]);
    expect(crumbs).toHaveLength(3);
    expect(crumbs[0].item).toBe('https://permafrost-echo.com/en');
    expect(crumbs[1].item).toBe('https://permafrost-echo.com/en/activities');
    expect(crumbs[2].item).toBe('https://permafrost-echo.com/en/activities/ciga-gamejam-2026-shenyang');
  });

  it('should handle articles slug page', () => {
    const crumbs = getBreadcrumbs('ja', [
      ['記事', 'articles'],
      ['game-jam-2026-review', 'game-jam-2026-review'],
    ]);
    expect(crumbs).toHaveLength(3);
    expect(crumbs[1].name).toBe('記事');
    expect(crumbs[2].name).toBe('game-jam-2026-review');
  });

  it('should return correct URLs for Korean locale', () => {
    const crumbs = getBreadcrumbs('ko', [['게임', 'games']]);
    expect(crumbs).toHaveLength(2);
    expect(crumbs[0].item).toBe('https://permafrost-echo.com/ko');
    expect(crumbs[1].item).toBe('https://permafrost-echo.com/ko/games');
  });
});
