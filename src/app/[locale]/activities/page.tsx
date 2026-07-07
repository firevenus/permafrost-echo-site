'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { getActivities } from '@/lib/data';
import type { Locale } from '@/i18n/routing';
import { Calendar, MapPin, Gamepad2, Palette, GraduationCap } from 'lucide-react';

export const runtime = 'edge';

export default function ActivitiesPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;

  const allActivities = getActivities(locale);
  const upcomingActivities = allActivities.filter((a) => a.status === 'upcoming');
  const completedActivities = allActivities.filter((a) => a.status === 'completed');

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 scanlines" />
        <div className="section-glow-top" />
        <div className="page-container relative py-24 text-center">
          <h1 className="hero-title mb-5">
            <span className="gradient-text">{t('activities.title')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('activities.description')}
          </p>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="mb-12">
            <span className="section-label">{t('activities.upcoming')}</span>
            <h2 className="section-title mb-2">{t('activities.upcoming')}</h2>
          </div>

          {upcomingActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="glass-card game-card group overflow-hidden"
                >
                  {activity.images && activity.images.length > 0 && (
                    <div className="activity-card-image">
                      <Image
                        src={activity.images[0]}
                        alt={activity.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      {activity.images.length > 1 && (
                        <span className="image-counter">{activity.images.length} 张</span>
                      )}
                    </div>
                  )}
                  <div className={activity.images?.length ? 'p-6 pt-0' : 'p-6'}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(244,140,6,0.06)] flex items-center justify-center text-[#f48c06] transition-all duration-300 group-hover:bg-[rgba(244,140,6,0.12)] group-hover:scale-110">
                        <Calendar size={22} />
                      </div>
                      <span className="pill-ember">{t('activities.upcoming')}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#edf2fa] mb-3 group-hover:text-white transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-[rgba(237,242,250,0.35)] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {activity.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {activity.location}
                      </span>
                    </div>
                    <p className="text-sm text-[rgba(237,242,250,0.4)] leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-[rgba(237,242,250,0.3)]">
              {t('activities.noUpcoming')}
            </div>
          )}
        </div>
      </section>

      {/* Completed Activities */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
        <div className="page-container relative">
          <div className="mb-12">
            <span className="section-label">{t('activities.completed')}</span>
            <h2 className="section-title mb-2">{t('activities.completed')}</h2>
          </div>

          {completedActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="glass-card group overflow-hidden"
                >
                  {activity.images && activity.images.length > 0 && (
                    <div className="activity-card-image">
                      <Image
                        src={activity.images[0]}
                        alt={activity.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      {activity.images.length > 1 && (
                        <span className="image-counter">{activity.images.length} 张</span>
                      )}
                    </div>
                  )}
                  <div className={activity.images?.length ? 'p-6 pt-0' : 'p-6'}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(76,201,240,0.06)] flex items-center justify-center text-[#4cc9f0] transition-all duration-300 group-hover:bg-[rgba(76,201,240,0.12)] group-hover:scale-110">
                        {activity.id === 'ssca-2026' ? <Gamepad2 size={22} /> : activity.id === 'ggj-2026' ? <Palette size={22} /> : <GraduationCap size={22} />}
                      </div>
                      <span className="pill">{t('activities.completed')}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#edf2fa] mb-3 group-hover:text-white transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-[rgba(237,242,250,0.35)] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {activity.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {activity.location}
                      </span>
                    </div>
                    <p className="text-sm text-[rgba(237,242,250,0.4)] leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-[rgba(237,242,250,0.3)]">
              {t('activities.noCompleted')}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
