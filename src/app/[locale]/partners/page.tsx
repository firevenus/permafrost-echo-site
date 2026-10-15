'use client';

import { useTranslations, useLocale } from 'next-intl';
import { getPartners, getStats } from '@/lib/data';
import type { Locale } from '@/i18n/routing';
import PartnerOrbit from '@/components/PartnerOrbit';

export const runtime = 'edge';

export default function PartnersPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const partners = getPartners(locale);
  const stats = getStats();

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 scanlines" />
        <div className="section-glow-top" />
        <div className="page-container relative py-24 text-center">
          <h1 className="hero-title mb-5">
            <span className="gradient-text">{t('partners.title')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('partners.description')}
          </p>
          <div className="mt-7 inline-flex items-baseline gap-2 rounded-full border border-[rgba(76,201,240,0.16)] bg-[rgba(76,201,240,0.05)] px-5 py-2">
            <span className="text-2xl font-bold gradient-text whitespace-nowrap">{stats.partners}+</span>
            <span className="text-xs text-[rgba(237,242,250,0.45)]">{t('partners.title')}</span>
          </div>
        </div>
      </section>

      {/* Partners Orbit */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="text-center mb-5">
            <span className="section-label">{locale === 'zh' ? '共同形成回声' : 'An ecosystem in motion'}</span>
            <p className="text-xs text-[rgba(237,242,250,0.35)]">
              {locale === 'zh' ? '展示不分先后 · 拖动或使用方向键旋转' : 'Shown without ranking · drag or use arrow keys to rotate'}
            </p>
          </div>
          <PartnerOrbit partners={partners} />
        </div>
      </section>

      {/* CTA */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
        <div className="page-container relative text-center">
          <div className="glass-card p-12 max-w-[600px] mx-auto">
            <p className="text-[rgba(237,242,250,0.5)] text-sm leading-relaxed mb-6">
              {t('partners.cta')}
            </p>
            <a
              href={`mailto:contact@permafrost-echo.com`}
              className="btn-primary"
            >
              {t('partners.ctaButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
