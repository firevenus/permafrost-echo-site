import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.stubEnv('NEXT_PUBLIC_GA_MEASUREMENT_ID', 'G-TEST123');

describe('gtag', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('should export GA_MEASUREMENT_ID from env', async () => {
    const { GA_MEASUREMENT_ID } = await import('@/lib/gtag');
    expect(GA_MEASUREMENT_ID).toBe('G-TEST123');
  });

  it('should call gtag on pageview when gtag exists', async () => {
    const mockGtag = vi.fn();
    window.gtag = mockGtag;

    const { pageview } = await import('@/lib/gtag');
    pageview('/test-page');

    expect(mockGtag).toHaveBeenCalledWith('config', 'G-TEST123', {
      page_path: '/test-page',
    });
  });

  it('should not throw when gtag is undefined', async () => {
    // @ts-expect-error - intentionally undefined
    window.gtag = undefined;

    const { pageview } = await import('@/lib/gtag');
    expect(() => pageview('/test')).not.toThrow();
  });
});
