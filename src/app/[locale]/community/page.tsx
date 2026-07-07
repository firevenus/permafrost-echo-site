'use client';

import { useTranslations, useLocale } from 'next-intl';
import { getUniversities, getPartners } from '@/lib/data';
import type { Locale } from '@/i18n/routing';
import { Building2, Users, MessageCircle, HeartHandshake } from 'lucide-react';

export const runtime = 'edge';

export default function CommunityPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;

  const universities = getUniversities(locale);
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
            <span className="gradient-text">{t('community.title')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('community.description')}
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {[
              { icon: <Users size={24} />, value: '1000+', label: t('community.stats.wechatCount'), sub: t('community.stats.wechat') },
              { icon: <MessageCircle size={24} />, value: '500+', label: t('community.stats.qqCount'), sub: t('community.stats.qq') },
              { icon: <Building2 size={24} />, value: '20+', label: t('hero.stats.universities'), sub: t('community.universities.title') },
              { icon: <HeartHandshake size={24} />, value: '9', label: t('community.partners.title'), sub: t('community.partners.title') },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 text-center group">
                <div className="text-[#4cc9f0] mb-3 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.icon}
                </div>
                <div className="stat-number gradient-text mb-1.5 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-xs text-[rgba(237,242,250,0.4)] font-medium">{stat.label}</div>
                <div className="text-xs text-[rgba(237,242,250,0.25)] mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Alliance */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="text-center mb-12">
            <span className="section-label">{t('community.universities.title')}</span>
            <h2 className="section-title mb-4">{t('community.universities.title')}</h2>
            <p className="text-[rgba(237,242,250,0.4)] max-w-[480px] mx-auto leading-relaxed">
              {t('community.universities.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[900px] mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="glass-card p-6 text-center game-card group">
                <div className="w-14 h-14 rounded-xl bg-[rgba(76,201,240,0.04)] flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-[rgba(76,201,240,0.08)] group-hover:scale-110">
                  <span className="text-2xl">🏫</span>
                </div>
                <p className="text-sm font-medium text-[rgba(237,242,250,0.35)] mb-1 group-hover:text-[rgba(237,242,250,0.5)] transition-colors duration-300">
                  {t('community.universities.comingSoon')}
                </p>
                <p className="text-xs text-[rgba(237,242,250,0.2)] leading-relaxed">
                  {t('community.universities.stayTuned')}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <span className="text-xs text-[rgba(237,242,250,0.25)]">
              {t('community.universities.cta')}
            </span>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
        <div className="page-container relative">
          <div className="text-center mb-12">
            <span className="section-label">{t('community.partners.title')}</span>
            <h2 className="section-title mb-4">{t('community.partners.title')}</h2>
            <p className="text-[rgba(237,242,250,0.4)] max-w-[480px] mx-auto leading-relaxed">
              {t('community.partners.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-[700px] mx-auto">
            {partners.slice(0, 6).map((partner) => (
              <div
                key={partner.id}
                className="glass-card p-5 text-center game-card group"
              >
                <div className="text-3xl mb-2.5 transition-transform duration-300 group-hover:scale-110">{partner.logo}</div>
                <p className="text-xs text-[rgba(237,242,250,0.5)] font-medium group-hover:text-[#edf2fa] transition-colors duration-300">
                  {partner.name}
                </p>
                <p className="text-[10px] text-[rgba(237,242,250,0.25)] mt-1">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
