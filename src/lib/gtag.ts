/**
 * Google Analytics 4 (GA4) configuration.
 *
 * To enable, set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local:
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetOrDate: string | Date,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export function pageview(url: string) {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}
