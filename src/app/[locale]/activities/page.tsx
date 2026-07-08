'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { getActivities } from '@/lib/data';
import type { Locale } from '@/i18n/routing';
import { Calendar, MapPin, Gamepad2, Palette, GraduationCap, Images, ArrowRight, Grid3X3 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import Lightbox from '@/components/ui/Lightbox';

export const runtime = 'edge';

export default function ActivitiesPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;

  const allActivities = getActivities(locale);
  const upcomingActivities = allActivities.filter((a) => a.status === 'upcoming');
  const completedActivities = allActivities.filter((a) => a.status === 'completed');

  /* ===== 灯箱状态 ===== */
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    alt: string;
  } | null>(null);

  const openLightbox = (images: string[], index: number, alt: string) => {
    setLightbox({ images, index, alt });
  };

  const closeLightbox = () => setLightbox(null);

  const lightboxPrev = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length,
    });
  };

  const lightboxNext = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index + 1) % lightbox.images.length,
    });
  };

  const lightboxSelect = (i: number) => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: i });
  };

  const renderActivityImage = (activity: (typeof allActivities)[0]) => {
    if (!activity.images || activity.images.length === 0) return null;

    return (
      <button
        className="activity-card-image group/image"
        onClick={() => openLightbox(activity.images!, 0, activity.title)}
        aria-label={`查看 ${activity.title} 的 ${activity.images!.length} 张照片`}
      >
        <Image
          src={activity.images[0]}
          alt={activity.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {/* 悬浮提示层 */}
        <div className="activity-image-hover">
          <Images size={20} />
          <span>{activity.images.length} 张</span>
        </div>
        {activity.images.length > 1 && (
          <span className="image-counter">{activity.images.length} 张</span>
        )}
      </button>
    );
  };

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

      {/* Completed Activities */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="mb-12">
            <span className="section-label">{t('activities.completed')}</span>
            <h2 className="section-title mb-2">{t('activities.completed')}</h2>
          </div>

          {completedActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedActivities.map((activity) => {
                const isCiga = activity.id === 'ciga-gamejam-2026-shenyang';
                return (
                <div
                  key={activity.id}
                  className={`glass-card group overflow-hidden ${isCiga ? 'ring-1 ring-[rgba(76,201,240,0.15)]' : ''}`}
                >
                  {renderActivityImage(activity)}
                  <div className={activity.images?.length ? 'p-6 pt-0' : 'p-6'}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(76,201,240,0.06)] flex items-center justify-center text-[#4cc9f0] transition-all duration-300 group-hover:bg-[rgba(76,201,240,0.12)] group-hover:scale-110">
                        {activity.id === 'ssca-2026' ? <Gamepad2 size={22} /> : activity.id === 'ggj-2026' ? <Palette size={22} /> : activity.id === 'ciga-gamejam-2026-shenyang' ? <Grid3X3 size={22} /> : <GraduationCap size={22} />}
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
                    {isCiga && (
                      <Link
                        href="/activities/ciga-gamejam-2026-shenyang"
                        className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-lg bg-[rgba(76,201,240,0.08)] border border-[rgba(76,201,240,0.12)] text-sm font-medium text-[#4cc9f0] hover:bg-[rgba(76,201,240,0.15)] hover:border-[rgba(76,201,240,0.25)] hover:text-white transition-all"
                      >
                        <Grid3X3 size={14} />
                        查看全部 26 款作品
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 text-[rgba(237,242,250,0.3)]">
              {t('activities.noCompleted')}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
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
                  {renderActivityImage(activity)}
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

      {/* ===== Lightbox ===== */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          alt={lightbox.alt}
          onClose={closeLightbox}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
          onSelect={lightboxSelect}
        />
      )}
    </div>
  );
}
