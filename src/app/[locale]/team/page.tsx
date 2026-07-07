'use client';

import { useTranslations } from 'next-intl';

export const runtime = 'edge';

export default function TeamPage() {
  const t = useTranslations();

  const rawMessages = t as unknown as (key: string) => unknown;
  const members = [
    {
      name: rawMessages('team.members.0.name') as string || 'L',
      nameEn: rawMessages('team.members.0.nameEn') as string || 'L',
    },
    {
      name: rawMessages('team.members.1.name') as string || '成思',
      nameEn: rawMessages('team.members.1.nameEn') as string || 'Enki',
    },
    {
      name: rawMessages('team.members.2.name') as string || '疯兔',
      nameEn: rawMessages('team.members.2.nameEn') as string || 'FungTO',
    },
    {
      name: rawMessages('team.members.3.name') as string || '麻团',
      nameEn: rawMessages('team.members.3.nameEn') as string || 'MattUan',
    },
    {
      name: rawMessages('team.members.4.name') as string || '漆玄',
      nameEn: rawMessages('team.members.4.nameEn') as string || 'Akv_Qixuan',
    },
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
            <span className="gradient-text">{t('team.title')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('team.description')}
          </p>
        </div>
      </section>

      {/* Staff Count */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="glass-card p-10 text-center max-w-[400px] mx-auto mb-20">
            <div className="stat-number gradient-text mb-2.5">{t('team.staffCountValue')}</div>
            <p className="text-sm text-[rgba(237,242,250,0.4)]">
              {t('team.staffCount')} · {t('team.staffLabel')}
            </p>
          </div>
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
            {members.map((member, i) => (
              <div key={i} className="glass-card p-6 game-card group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4cc9f0] to-[#7b2ff7] flex items-center justify-center text-white text-lg font-bold flex-shrink-0 shadow-[0_0_20px_rgba(76,201,240,0.2)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(76,201,240,0.35)]">
                    {member.nameEn?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#edf2fa] group-hover:text-white transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#4cc9f0] font-medium">{member.nameEn}</p>
                  </div>
                </div>
              </div>
            ))}
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
