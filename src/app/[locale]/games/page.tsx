'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Gamepad2, MonitorPlay, Rocket, Users, ExternalLink, Play } from 'lucide-react';
import { cigaGameJamGames } from '@/lib/gamejam-data';

export const runtime = 'edge';

const categoryConfig = [
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
  const tGj = useTranslations('gamejamDetail');

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

      {/* Category: Game Jam */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-10">
            <div
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4cc9f0] to-[#2abde6] flex items-center justify-center text-white"
              style={{ boxShadow: '0 0 20px rgba(76,201,240,0.25)' }}
            >
              <Gamepad2 size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#edf2fa]">
                {t('games.categories.gamejam')}
              </h2>
              <p className="text-sm text-[rgba(237,242,250,0.4)]">
                {t('games.categories.gamejamDesc')}
              </p>
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cigaGameJamGames.map((game) => (
              <div
                key={game.index}
                className="glass-card group overflow-hidden flex flex-col"
              >
                {/* Game Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Index badge */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-[rgba(0,0,0,0.6)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-xs font-semibold text-[#4cc9f0]">
                    {game.index}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-[#edf2fa] mb-1.5 group-hover:text-white transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-xs text-[rgba(237,242,250,0.35)] mb-3 flex items-center gap-1.5">
                    <Users size={11} />
                    {game.team}
                  </p>
                  <p className="text-xs text-[rgba(237,242,250,0.4)] leading-relaxed flex-1 line-clamp-3">
                    {game.description}
                  </p>

                  {/* Links */}
                  {(game.gmhubUrl || game.bilibiliUrl || game.playUrl) && (
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[rgba(76,201,240,0.06)]">
                      {game.gmhubUrl && (
                        <a
                          href={game.gmhubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[rgba(237,242,250,0.4)] hover:text-[#4cc9f0] transition-colors"
                        >
                          <Gamepad2 size={12} />
                          GMHub
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {game.bilibiliUrl && (
                        <a
                          href={game.bilibiliUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[rgba(237,242,250,0.4)] hover:text-[#f48c06] transition-colors"
                        >
                          <Play size={12} />
                          {tGj('bilibili')}
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {game.playUrl && (
                        <a
                          href={game.playUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[rgba(237,242,250,0.4)] hover:text-[#2dd4bf] transition-colors"
                        >
                          <Play size={12} />
                          {tGj('play')}
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories (placeholder) */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[680px] mx-auto">
            {categoryConfig.map((cat) => (
              <div key={cat.key} className="glass-card p-8 game-card text-center group">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mx-auto mb-5 transition-all duration-300 group-hover:scale-110`}
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
