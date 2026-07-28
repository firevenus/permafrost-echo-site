'use client';

import { useTranslations, useLocale } from 'next-intl';
import { getTimelineEvents } from '@/lib/data';
import type { Locale } from '@/i18n/routing';

export const runtime = 'edge';

export default function RoadmapPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;

  const timelineEvents = getTimelineEvents(locale);

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 scanlines" />
        <div className="section-glow-top" />
        <div className="page-container relative py-24 text-center">
          <h1 className="hero-title mb-5">
            <span className="gradient-text">{t('roadmap.title')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('roadmap.description')}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="text-center mb-14">
            <span className="section-label">{t('roadmap.timeline')}</span>
            <h2 className="section-title mb-4">{t('roadmap.timeline')}</h2>
          </div>

          <div className="relative max-w-[700px] mx-auto">
            {/* Timeline line */}
            <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(76,201,240,0.12)] via-[rgba(76,201,240,0.25)] to-[rgba(76,201,240,0.04)] md:-translate-x-px" />

            <div className="space-y-10">
              {timelineEvents.map((event, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[16px] md:left-1/2 top-6 w-[15px] h-[15px] rounded-full bg-[#4cc9f0] shadow-[0_0_16px_rgba(76,201,240,0.5),0_0_40px_rgba(76,201,240,0.1)] md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <div className="glass-card p-5 group">
                      <span className="pill text-xs mb-2 inline-block">{event.year}</span>
                      <h3 className="text-sm font-semibold text-[#edf2fa] mb-1.5 group-hover:text-white transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-xs text-[rgba(237,242,250,0.4)] leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>

            {/* More coming */}
            <div className="text-center mt-16">
              <span className="text-sm text-[rgba(237,242,250,0.25)]">
                {t('roadmap.futurePlan')}
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
