'use client';

import { useTranslations, useMessages } from 'next-intl';

export const runtime = 'edge';

interface TeamMember {
  name: string;
  nameEn: string;
}

function avatarId(nameEn: string): string {
  // Extract the "clean" identifier: lowercase, keep only alphanumeric
  return nameEn.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

export default function TeamPage() {
  const t = useTranslations();
  const messages = useMessages();
  const members = (messages as Record<string, unknown>).team &&
    typeof (messages as Record<string, unknown>).team === 'object'
    ? ((messages as Record<string, { members?: TeamMember[] }>).team?.members || [])
    : [];

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 scanlines" />
        <div className="section-glow-top" />
        <div className="page-container relative py-24 text-center">
          <h1 className="hero-title mb-5">
            <span className="gradient-text">{t('team.title')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('team.description')}
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
        <div className="page-container relative">
          <div className="text-center mb-12">
            <span className="section-label">{t('team.coreTeam')}</span>
            <h2 className="section-title mb-4">{t('team.coreTeam')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {members.map((member, i) => {
              const id = avatarId(member.nameEn);
              const avatarSrc = `/images/team/${id}.webp`;
              return (
              <div key={i} className="glass-card p-6 game-card group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4cc9f0] to-[#7b2ff7] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(76,201,240,0.2)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(76,201,240,0.35)] overflow-hidden relative">
                    <span className="text-white text-lg font-bold absolute">
                      {member.nameEn?.charAt(0).toUpperCase()}
                    </span>
                    <img
                      src={avatarSrc}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-full"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#edf2fa] group-hover:text-white transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#4cc9f0] font-medium">{member.nameEn}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          {/* Volunteers */}
          <div className="text-center mt-10">
            <span className="text-sm text-[rgba(237,242,250,0.35)]">
              {t('team.volunteers')}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
