'use client';

import { useTranslations, useMessages } from 'next-intl';
import { Quote, Target, Gamepad2, Calendar, Users, GraduationCap, Shield, Radio, Heart } from 'lucide-react';

export const runtime = 'edge';

interface TeamMember {
  name: string;
  nameEn: string;
  role?: string;
  bio?: string;
}

function avatarId(nameEn: string): string {
  return nameEn.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

export default function AboutPage() {
  const t = useTranslations();
  const messages = useMessages();
  const members: TeamMember[] =
    (messages as Record<string, unknown>).team &&
    typeof (messages as Record<string, unknown>).team === 'object'
      ? ((messages as Record<string, { members?: TeamMember[] }>).team?.members || [])
      : [];

  const bizIcons = [
    <Gamepad2 key="0" size={18} />,
    <Calendar key="1" size={18} />,
    <Users key="2" size={18} />,
    <GraduationCap key="3" size={18} />,
    <Shield key="4" size={18} />,
    <Radio key="5" size={18} />,
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 scanlines" />
        <div className="section-glow-top" />
        <div className="page-container relative py-24 text-center">
          <h1 className="hero-title mb-5">
            <span className="gradient-text">{t('about.title')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('about.slogan')}
          </p>
        </div>
      </section>

      {/* One-liner */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container">
          <div className="max-w-[800px] mx-auto">
            <div className="glass-card p-10 md:p-14 text-center">
              <Quote size={32} className="text-[#4cc9f0] mx-auto mb-6 opacity-60" />
              <p className="text-xl md:text-2xl text-[#edf2fa] leading-relaxed font-medium">
                {t('about.oneLiner')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.brandName')}</span>
              <h2 className="section-title mb-4">{t('about.title')}</h2>
            </div>
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/logo.png"
                  alt="冻土回声 Permafrost Echo"
                  className="w-14 h-14 rounded-2xl object-contain shadow-[0_0_20px_rgba(76,201,240,0.2)]"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#edf2fa]">
                    {t('about.brandName')}
                  </h3>
                  <p className="text-sm text-[#4cc9f0] font-medium">{t('about.brandNameEn')}</p>
                </div>
              </div>
              <p className="text-[rgba(237,242,250,0.5)] leading-relaxed mb-4">
                {t('about.intro')}
              </p>
              <p className="text-[rgba(237,242,250,0.5)] leading-relaxed">
                {t('about.intro2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="page-section">
        <div className="page-container">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.philosophy.title')}</span>
              <h2 className="section-title mb-4">{t('about.philosophy.title')}</h2>
            </div>
            <div className="glass-card p-10 md:p-14">
              <p className="text-[rgba(237,242,250,0.5)] leading-relaxed text-lg">
                &ldquo;{t('about.philosophy.content')}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Directions */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.business.title')}</span>
              <h2 className="section-title mb-4">{t('about.business.title')}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                t('about.business.item1'),
                t('about.business.item2'),
                t('about.business.item3'),
                t('about.business.item4'),
                t('about.business.item5'),
                t('about.business.item6'),
              ].map((item, i) => (
                <div key={i} className="glass-card p-5 flex items-center gap-4 game-card group">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(76,201,240,0.06)] flex items-center justify-center text-[#4cc9f0] flex-shrink-0 transition-all duration-300 group-hover:bg-[rgba(76,201,240,0.12)] group-hover:scale-110">
                    {bizIcons[i]}
                  </div>
                  <span className="text-[rgba(237,242,250,0.65)] text-sm font-medium group-hover:text-[#edf2fa] transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantage */}
      <section className="page-section">
        <div className="page-container">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.advantage.title')}</span>
              <h2 className="section-title mb-4">{t('about.advantage.title')}</h2>
            </div>
            <div className="glass-card p-10 md:p-14">
              <p className="text-[rgba(237,242,250,0.5)] leading-relaxed mb-8">
                {t('about.advantage.content')}
              </p>
              <div className="space-y-5">
                {[
                  t('about.advantage.point1'),
                  t('about.advantage.point2'),
                  t('about.advantage.point3'),
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-7 h-7 rounded-full bg-[rgba(76,201,240,0.08)] flex items-center justify-center text-[#4cc9f0] text-xs font-bold flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-[rgba(76,201,240,0.15)] group-hover:shadow-[0_0_12px_rgba(76,201,240,0.15)]">
                      {i + 1}
                    </div>
                    <p className="text-[rgba(237,242,250,0.5)] text-sm leading-relaxed group-hover:text-[rgba(237,242,250,0.65)] transition-colors duration-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.mission.title')}</span>
              <h2 className="section-title mb-4">{t('about.mission.title')}</h2>
            </div>
            <div className="glass-card p-10 md:p-14">
              <div className="space-y-4">
                {[
                  t('about.mission.item1'),
                  t('about.mission.item2'),
                  t('about.mission.item3'),
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-7 h-7 rounded-full bg-[rgba(244,140,6,0.08)] flex items-center justify-center text-[#f48c06] text-xs font-bold flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-[rgba(244,140,6,0.15)] group-hover:shadow-[0_0_12px_rgba(244,140,6,0.15)]">
                      {i + 1}
                    </div>
                    <p className="text-[rgba(237,242,250,0.5)] text-sm leading-relaxed group-hover:text-[rgba(237,242,250,0.65)] transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
        <div className="page-container relative">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.vision.title')}</span>
              <h2 className="section-title mb-4">{t('about.vision.title')}</h2>
            </div>
            <div className="glass-card p-10 md:p-14">
              <p className="text-[rgba(237,242,250,0.5)] leading-relaxed text-lg">
                &ldquo;{t('about.vision.content')}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Name Origin */}
      <section className="page-section">
        <div className="page-container">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.origin.title')}</span>
              <h2 className="section-title mb-4">{t('about.origin.title')}</h2>
            </div>
            <div className="glass-card p-10 md:p-14">
              <p className="text-[rgba(237,242,250,0.5)] leading-relaxed text-lg text-center italic">
                &ldquo;{t('about.origin.content')}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="page-section">
        <div className="page-container">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">
                {t('team.coreTeam')}
              </span>
              <h2 className="section-title mb-4">
                {t('team.coreTeam')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {members.map((member) => {
                const id = avatarId(member.nameEn);
                const avatarSrc = `/images/team/${id}.webp`;
                return (
                  <div key={id} className="glass-card p-5 game-card group flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4cc9f0] to-[#7b2ff7] flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(76,201,240,0.2)] overflow-hidden relative">
                      <span className="text-white text-sm font-bold absolute">
                        {member.nameEn?.charAt(0).toUpperCase()}
                      </span>
                      <img
                        src={avatarSrc}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-[#edf2fa] group-hover:text-white transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#4cc9f0] font-medium">{member.nameEn}</p>
                      {member.role && (
                        <p className="text-xs text-[rgba(237,242,250,0.35)] mt-1">{member.role}</p>
                      )}
                      {member.bio && (
                        <p className="text-xs text-[rgba(237,242,250,0.4)] mt-2 leading-relaxed line-clamp-3">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Volunteers */}
            {members.length > 0 && (
              <div className="text-center mt-10">
                <span className="text-sm text-[rgba(237,242,250,0.35)]">
                  <Heart size={12} className="inline mr-1 text-[#f48c06]" />
                  {t('team.volunteers')}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Brand Visual */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.brand.title')}</span>
              <h2 className="section-title mb-4">{t('about.brand.title')}</h2>
            </div>
            <div className="glass-card p-10 md:p-14">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8">
                {[
                  { color: '#050a10', label: t('about.brand.colorLabels.0'), css: 'bg-[#050a10]' },
                  { color: '#4cc9f0', label: t('about.brand.colorLabels.1'), css: 'bg-[#4cc9f0]' },
                  { color: '#7b2ff7', label: t('about.brand.colorLabels.2'), css: 'bg-[#7b2ff7]' },
                  { color: '#f48c06', label: t('about.brand.colorLabels.3'), css: 'bg-[#f48c06]' },
                ].map((c) => (
                  <div key={c.color} className="text-center group">
                    <div
                      className={`w-full aspect-square rounded-xl ${c.css} mb-3 border border-[rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg`}
                    />
                    <p className="text-xs text-[rgba(237,242,250,0.5)] font-medium">{c.label}</p>
                    <p className="text-[10px] text-[rgba(237,242,250,0.3)] font-mono mt-0.5">{c.color}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[rgba(237,242,250,0.4)] leading-relaxed mb-3">
                <strong className="text-[rgba(237,242,250,0.6)]">{t('about.brand.theme')}</strong>
              </p>
              <p className="text-sm text-[rgba(237,242,250,0.4)] leading-relaxed">
                {t('about.brand.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
