'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { cigaGameJamGames } from '@/lib/gamejam-data';
import type { Locale } from '@/i18n/routing';
import { ArrowLeft, ExternalLink, Gamepad2, Users, Play } from 'lucide-react';

export const runtime = 'edge';

export default function CigaGameJamDetailPage() {
  const locale = useLocale() as Locale;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 scanlines" />
        <div className="section-glow-top" />
        {/* Aurora */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse,rgba(76,201,240,0.12)_0%,rgba(45,212,191,0.05)_30%,transparent_70%)] pointer-events-none" />

        <div className="page-container relative py-20 text-center">
          {/* Back link */}
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 text-sm text-[rgba(237,242,250,0.4)] hover:text-[#4cc9f0] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            返回活动列表
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(76,201,240,0.06)] border border-[rgba(76,201,240,0.1)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cc9f0] shadow-[0_0_8px_rgba(76,201,240,0.6)]" />
            <span className="text-xs font-medium text-[#4cc9f0] tracking-[0.06em] uppercase">
              CiGA Game Jam · 沈阳站
            </span>
          </div>

          <h1 className="hero-title mb-3">
            <span className="gradient-text">2026 CiGA Game Jam 沈阳站</span>
          </h1>
          <p className="text-lg text-[#4cc9f0] mb-4">作品展示</p>
          <p className="text-[rgba(237,242,250,0.4)] max-w-[600px] mx-auto leading-relaxed mb-8">
            中国独立游戏联盟（CiGA）年度 Game Jam 落地沈阳，48 小时限时创作，汇聚东北地区最具创意的游戏开发力量。
            本次主题「Anchor」，共诞生 26 款作品。
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 text-sm text-[rgba(237,242,250,0.35)]">
            <span className="flex items-center gap-2">
              <Gamepad2 size={14} className="text-[#4cc9f0]" />
              26 款作品
            </span>
            <span className="flex items-center gap-2">
              <Users size={14} className="text-[#4cc9f0]" />
              26 组团队
            </span>
            <span className="flex items-center gap-2">
              <ExternalLink size={14} className="text-[#4cc9f0]" />
              11 款已上线 GMHub
            </span>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
        <div className="page-container relative">
          <div className="mb-12">
            <span className="section-label">作品列表</span>
            <h2 className="section-title mb-2">全部作品</h2>
            <p className="text-[rgba(237,242,250,0.4)] text-sm">
              共 {cigaGameJamGames.length} 款作品，主题：Anchor
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                          B站
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
                          试玩
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

      {/* Footer note */}
      <section className="page-section relative overflow-hidden">
        <div className="page-container relative text-center pb-12">
          <p className="text-xs text-[rgba(237,242,250,0.25)]">
            数据来源：参赛团队反馈表 · 冻土回声（Permafrost Echo）整理 · 2026-07-08
          </p>
        </div>
      </section>
    </div>
  );
}
