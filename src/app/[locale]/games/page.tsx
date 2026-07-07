'use client';

import { useTranslations } from 'next-intl';
import { Gamepad2, MonitorPlay, Rocket } from 'lucide-react';

export const runtime = 'edge';

const categoryConfig = [
  {
    key: 'gamejam',
    icon: <Gamepad2 size={24} />,
    color: 'from-[#4cc9f0] to-[#2abde6]',
    shadowColor: 'rgba(76,201,240,0.25)',
  },
  {
    key: 'exhibition',
    icon: <MonitorPlay size={24} />,
    color: 'from-[#7b2ff7] to-[#5a1fd0]',
    shadowColor: 'rgba(123,47,247,0.25)',
  },
  {
    key: 'upcoming',
    icon: <Rocket size={24} />,
    color: 'from-[#f48c06] to-[#dc2f02]',
    shadowColor: 'rgba(244,140,6,0.25)',
  },
] as const;

export default function GamesPage() {
  const t = useTranslations();

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 scanlines" />
        <div className="section-glow-top" />
        <div className="page-container relative py-24 text-center">
          <h1 className="hero-title mb-5">
            <span className="gradient-text">{t('games.title')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('games.description')}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {categoryConfig.map((cat) => (
              <div key={cat.key} className="glass-card p-8 game-card text-center group">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_${cat.shadowColor}]`}
                  style={{ boxShadow: `0 0 20px ${cat.shadowColor}` }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#edf2fa] mb-2.5 group-hover:text-white transition-colors duration-300">
                  {t(`games.categories.${cat.key}`)}
                </h3>
                <p className="text-sm text-[rgba(237,242,250,0.4)] mb-6 leading-relaxed">
                  {t(`games.categories.${cat.key}Desc`)}
                </p>
                <span className="pill">
                  {t('games.comingSoon')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
