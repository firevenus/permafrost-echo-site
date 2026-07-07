'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getActivities, getUpcomingActivities, getStats } from '@/lib/data';
import type { Locale } from '@/i18n/routing';
import { ArrowRight, Calendar, MapPin, Gamepad2, Palette, GraduationCap } from 'lucide-react';

export const runtime = 'edge';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;

  const stats = getStats();
  const allActivities = getActivities(locale);
  const upcomingActivities = getUpcomingActivities(locale);

  const coreActivities = allActivities.slice(0, 3);

  const statItems = [
    { value: `${stats.members}+`, label: t('hero.stats.members') },
    { value: `${stats.universities}+`, label: t('hero.stats.universities') },
    { value: `${stats.games}+`, label: t('hero.stats.games') },
    { value: stats.years.toString(), label: t('hero.stats.years') },
  ];

  return (
    <div>
      {/* ========== Hero Section ========== */}
      <section className="relative overflow-hidden min-h-[calc(100dvh-64px)] flex items-center">
        {/* Deep space background with permafrost grid */}
        <div className="absolute inset-0 bg-grid pointer-events-none" />

        {/* Frost crystal motif — geometric visual anchor */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06]">
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="160" cy="160" r="158" stroke="url(#crystal-grad)" strokeWidth="1" />
            <circle cx="160" cy="160" r="110" stroke="url(#crystal-grad)" strokeWidth="0.5" strokeDasharray="4 6" />
            <circle cx="160" cy="160" r="60" stroke="url(#crystal-grad)" strokeWidth="0.8" />
            <line x1="160" y1="2" x2="160" y2="318" stroke="url(#crystal-grad)" strokeWidth="0.5" strokeDasharray="3 8" />
            <line x1="2" y1="160" x2="318" y2="160" stroke="url(#crystal-grad)" strokeWidth="0.5" strokeDasharray="3 8" />
            <line x1="48" y1="48" x2="272" y2="272" stroke="url(#crystal-grad)" strokeWidth="0.3" strokeDasharray="2 10" />
            <line x1="272" y1="48" x2="48" y2="272" stroke="url(#crystal-grad)" strokeWidth="0.3" strokeDasharray="2 10" />
            {/* Ice crystal sparks */}
            <circle cx="160" cy="50" r="2" fill="#4cc9f0" opacity="0.6" className="animate-pulse-subtle" />
            <circle cx="270" cy="160" r="1.5" fill="#2dd4bf" opacity="0.4" className="animate-pulse-subtle" style={{ animationDelay: '1.5s' }} />
            <circle cx="50" cy="160" r="1.5" fill="#c77dff" opacity="0.4" className="animate-pulse-subtle" style={{ animationDelay: '2.5s' }} />
            <circle cx="160" cy="270" r="2" fill="#4cc9f0" opacity="0.5" className="animate-pulse-subtle" style={{ animationDelay: '0.8s' }} />
            <defs>
              <linearGradient id="crystal-grad" x1="0" y1="0" x2="320" y2="320">
                <stop stopColor="#4cc9f0" />
                <stop offset="0.5" stopColor="#2dd4bf" />
                <stop offset="1" stopColor="#7b2ff7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Primary ice aurora — top center, ice blue + tundra green */}
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(ellipse,rgba(76,201,240,0.16)_0%,rgba(45,212,191,0.08)_20%,rgba(76,201,240,0.06)_40%,rgba(76,201,240,0.01)_60%,transparent_75%)] pointer-events-none animate-aurora-shift will-change-transform" />

        {/* Secondary purple + tundra aurora — bottom */}
        <div className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse,rgba(123,47,247,0.13)_0%,rgba(45,212,191,0.04)_25%,rgba(123,47,247,0.04)_45%,transparent_75%)] pointer-events-none animate-aurora-shift will-change-transform" style={{ animationDelay: '-4s' }} />

        {/* Warm accent — right side, 东北冬日炉火 */}
        <div className="absolute top-[25%] right-[-8%] w-[550px] h-[450px] bg-[radial-gradient(ellipse,rgba(244,140,6,0.06)_0%,rgba(220,47,2,0.02)_25%,transparent_60%)] pointer-events-none animate-aurora-shift will-change-transform" style={{ animationDelay: '-7s' }} />

        {/* Frost silver — left side, 白桦银冷光 */}
        <div className="absolute top-[40%] left-[-5%] w-[450px] h-[350px] bg-[radial-gradient(ellipse,rgba(168,180,196,0.04)_0%,transparent_55%)] pointer-events-none animate-aurora-shift will-change-transform" style={{ animationDelay: '-10s' }} />

        {/* Floating orbs — larger, more atmospheric */}
        <div className="absolute top-[15%] right-[8%] w-[400px] h-[400px] rounded-full bg-[rgba(45,212,191,0.05)] blur-[120px] pointer-events-none animate-float will-change-transform" />
        <div className="absolute bottom-[20%] left-[3%] w-[320px] h-[320px] rounded-full bg-[rgba(123,47,247,0.05)] blur-[100px] pointer-events-none animate-float will-change-transform" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-[50%] left-[35%] w-[250px] h-[250px] rounded-full bg-[rgba(76,201,240,0.03)] blur-[80px] pointer-events-none animate-float will-change-transform" style={{ animationDelay: '-5s' }} />

        <div className="relative max-w-[1200px] mx-auto px-6 py-24 w-full">
          <div className="max-w-[760px] mx-auto text-center">
            {/* Subtitle with enhanced label — 冰晶光泽 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(76,201,240,0.06)] border border-[rgba(76,201,240,0.1)] mb-10 fade-up shadow-[0_0_20px_rgba(76,201,240,0.06)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4cc9f0] shadow-[0_0_8px_rgba(76,201,240,0.6),0_0_16px_rgba(76,201,240,0.3)]" />
              <span className="text-xs font-medium text-[#4cc9f0] tracking-[0.06em] uppercase">
                {t('hero.subtitle')}
              </span>
            </div>

            {/* Main Brand Title */}
            <h1 className="brand-title gradient-text mb-2 fade-up fade-up-delay-1">
              冻土回声
            </h1>
            <p className="brand-title-en mb-6 fade-up fade-up-delay-2">
              Permafrost Echo
            </p>

            {/* Tagline — 破土而出，回响世界 */}
            <p className="brand-tagline mb-8 fade-up fade-up-delay-3">
              破土而出，回响世界
            </p>

            {/* Description */}
            <p className="text-[rgba(237,242,250,0.55)] text-lg mb-12 max-w-[520px] mx-auto leading-relaxed fade-up fade-up-delay-4">
              {t('home.activitiesDesc')}
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 mb-20 fade-up fade-up-delay-5">
              <Link href="/about" className="btn-primary">
                {t('hero.cta1')}
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                {t('hero.cta2')}
              </Link>
            </div>

            {/* Stats — enhanced cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up fade-up-delay-6">
              {statItems.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-5 text-center group cursor-default"
                >
                  <div className="stat-number gradient-text mb-1.5 transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[rgba(237,242,250,0.4)] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Core Activities ========== */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="absolute inset-0 scanlines" />
        <div className="page-container relative">
          <div className="text-center mb-16 section-reveal">
            <span className="section-label">{t('home.activities')}</span>
            <h2 className="section-title mb-4">{t('home.activities')}</h2>
            <p className="text-[rgba(237,242,250,0.4)] max-w-[480px] mx-auto leading-relaxed">
              {t('home.activitiesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreActivities.map((activity, idx) => (
              <Link
                key={activity.id}
                href="/activities"
                className="glass-card game-card no-underline block group reveal-up overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {activity.images && activity.images.length > 0 && (
                  <div className="activity-card-image">
                    <Image
                      src={activity.images[0]}
                      alt={activity.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    {activity.images.length > 1 && (
                      <span className="image-counter">{activity.images.length} 张</span>
                    )}
                  </div>
                )}
                <div className={activity.images?.length ? 'p-6 pt-0' : 'p-6'}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(76,201,240,0.06)] flex items-center justify-center text-[#4cc9f0] transition-all duration-300 group-hover:bg-[rgba(76,201,240,0.12)] group-hover:scale-110">
                    {activity.id === 'ssca-2026' ? <Gamepad2 size={22} /> : activity.id === 'ggj-2026' ? <Palette size={22} /> : <GraduationCap size={22} />}
                  </div>
                  <span className={`text-xs ${activity.status === 'upcoming' ? 'pill-ember' : 'pill'}`}>
                    {activity.status === 'upcoming' ? t('activities.upcoming') : t('activities.completed')}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#edf2fa] mb-2.5 group-hover:text-white transition-colors duration-300">
                  {activity.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[rgba(237,242,250,0.35)] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {activity.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {activity.location}
                  </span>
                </div>
                <p className="text-sm text-[rgba(237,242,250,0.4)] line-clamp-2 leading-relaxed">
                  {activity.description}
                </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Upcoming Events ========== */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
        <div className="page-container relative">
          <div className="text-center mb-16 section-reveal">
            <span className="section-label">{t('home.upcomingEvents')}</span>
            <h2 className="section-title mb-4">{t('home.upcomingEvents')}</h2>
            <p className="text-[rgba(237,242,250,0.4)] max-w-[480px] mx-auto leading-relaxed">
              {t('home.upcomingEventsDesc')}
            </p>
          </div>

          <div className="max-w-[720px] mx-auto">
            {upcomingActivities.length > 0 ? (
              <div className="space-y-4">
                {upcomingActivities.map((activity, idx) => (
                  <Link
                    key={activity.id}
                    href="/activities"
                    className="glass-card p-5 game-card no-underline flex flex-col sm:flex-row sm:items-center gap-5 group reveal-up"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[rgba(244,140,6,0.06)] flex items-center justify-center text-[#f48c06] flex-shrink-0 transition-all duration-300 group-hover:bg-[rgba(244,140,6,0.12)] group-hover:scale-110">
                      <Calendar size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-[#edf2fa] mb-1.5 group-hover:text-white transition-colors duration-300">
                        {activity.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[rgba(237,242,250,0.35)]">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {activity.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {activity.location}
                        </span>
                      </div>
                    </div>
                    <span className="pill-ember flex-shrink-0 self-start">
                      {t('activities.upcoming')}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-[rgba(237,242,250,0.3)]">
                {t('activities.noUpcoming')}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="page-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,201,240,0.09)_0%,rgba(45,212,191,0.04)_20%,rgba(123,47,247,0.06)_40%,rgba(244,140,6,0.03)_60%,transparent_80%)]" />
        <div className="absolute inset-0 scanlines" />
        <div className="page-container relative">
          <div className="max-w-[640px] mx-auto text-center">
            <h2 className="cta-title mb-5">
              <span className="gradient-text">{t('home.cta.title')}</span>
            </h2>
            <p className="text-[rgba(237,242,250,0.4)] mb-10 text-balance leading-relaxed">
              {t('home.cta.desc')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                {t('home.cta.contactUs')}
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-outline">
                {t('home.cta.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
