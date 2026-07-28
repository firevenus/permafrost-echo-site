'use client';

import { useTranslations, useLocale } from 'next-intl';
import { getPartners } from '@/lib/data';
import type { Locale } from '@/i18n/routing';
import { ExternalLink } from 'lucide-react';

export const runtime = 'edge';

export default function PartnersPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const partners = getPartners(locale);

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
        </div>
      </section>

      {/* Partners Grid */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {partners.map((partner) => (
              <div key={partner.id} className="glass-card p-8 game-card group">
                <div className="flex items-center gap-6">
                  <div className={`w-36 h-36 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden transition-all duration-300 group-hover:scale-105 p-4 ${
                    partner.id.startsWith('netease') 
                      ? 'bg-white/20' 
                      : 'bg-[rgba(76,201,240,0.04)] group-hover:bg-[rgba(76,201,240,0.08)]'
                  }`}>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-[#edf2fa] mb-1 group-hover:text-white transition-colors duration-300">
                      {partner.name}
                    </h3>
                    {partner.nameEn && (
                      <p className="text-xs text-[#4cc9f0] font-medium mb-1">{partner.nameEn}</p>
                    )}
                    <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-[rgba(76,201,240,0.08)] text-[#4cc9f0] mb-2">
                      {partner.category}
                    </span>
                    <p className="text-xs text-[rgba(237,242,250,0.4)] leading-relaxed">
                      {partner.description}
                    </p>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#4cc9f0] hover:text-[#2abde6] transition-colors mt-2"
                      >
                        <ExternalLink size={12} />
                        {t('partners.visitWebsite')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
