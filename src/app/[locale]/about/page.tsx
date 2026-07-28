'use client';

import { useTranslations, useMessages, useLocale } from 'next-intl';
import { Quote, Target, Gamepad2, Calendar, Users, GraduationCap, Shield, Radio, Heart, Mail, MessageCircle, ExternalLink, MapPin } from 'lucide-react';
import { getTimelineEvents, getRoadmapPhases } from '@/lib/data';
import type { Locale } from '@/i18n/routing';

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
  const locale = useLocale() as Locale;
  const messages = useMessages();

  const members: TeamMember[] =
    (messages as Record<string, unknown>).team &&
    typeof (messages as Record<string, unknown>).team === 'object'
      ? ((messages as Record<string, { members?: TeamMember[] }>).team?.members || [])
      : [];

  const timelineEvents = getTimelineEvents(locale);
  const roadmapPhases = getRoadmapPhases(locale);

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
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 scanlines" />
        <div className="section-glow-top" />
        <div className="page-container relative py-24 text-center">
          {/* Brand mark */}
          <img
            src="/images/logo.png"
            alt="Permafrost Echo"
            className="w-16 h-16 rounded-2xl object-contain mx-auto mb-6 shadow-[0_0_30px_rgba(76,201,240,0.25)]"
          />
          <h1 className="hero-title mb-4">
            <span className="gradient-text">{t('about.brandName')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.5)] text-sm font-medium tracking-widest uppercase mb-4">
            {t('about.brandNameEn')}
          </p>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('about.slogan')}
          </p>
        </div>
      </section>

      {/* ── One-liner ── */}
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

      {/* ── Our Story ── */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="max-w-[740px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.origin.title')}</span>
              <h2 className="section-title mb-4">{t('about.title')}</h2>
            </div>
            <div className="glass-card p-8 md:p-12 space-y-5">
              <p className="text-[rgba(237,242,250,0.5)] leading-relaxed">
                {t('about.intro')}
              </p>
              <p className="text-[rgba(237,242,250,0.5)] leading-relaxed">
                {t('about.intro2')}
              </p>
              <div className="mt-6 pt-6 border-t border-[rgba(76,201,240,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={16} className="text-[#4cc9f0]" />
                  <span className="text-xs font-semibold text-[rgba(237,242,250,0.5)] tracking-wider uppercase">
                    {t('about.origin.title')}
                  </span>
                </div>
                <p className="text-[rgba(237,242,250,0.4)] leading-relaxed italic">
                  &ldquo;{t('about.origin.content')}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.business.title')}</span>
              <h2 className="section-title mb-4">{t('about.business.title')}</h2>
              <p className="text-[rgba(237,242,250,0.35)] text-sm max-w-[480px] mx-auto">
                {t('about.philosophy.content')}
              </p>
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

      {/* ── How We Work ── */}
      <section className="page-section">
        <div className="page-container">
          <div className="max-w-[740px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('about.advantage.title')}</span>
              <h2 className="section-title mb-4">{t('about.advantage.title')}</h2>
            </div>
            <div className="space-y-4">
              {[
                { num: '01', content: t('about.advantage.point1'), color: 'from-[#4cc9f0] to-[#2abde6]' },
                { num: '02', content: t('about.advantage.point2'), color: 'from-[#7b2ff7] to-[#5a1fd6]' },
                { num: '03', content: t('about.advantage.point3'), color: 'from-[#f48c06] to-[#d97706]' },
              ].map(({ num, content, color }, i) => (
                <div key={i} className="glass-card p-6 game-card group flex items-start gap-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    {num}
                  </div>
                  <p className="text-[rgba(237,242,250,0.5)] text-sm leading-relaxed group-hover:text-[rgba(237,242,250,0.65)] transition-colors duration-300 pt-1.5">
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="max-w-[800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Mission */}
              <div className="glass-card p-8 md:p-10 game-card group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f48c06] to-transparent opacity-40" />
                <Target size={24} className="text-[#f48c06] mb-5 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-bold text-[#edf2fa] mb-4">{t('about.mission.title')}</h3>
                <div className="space-y-3">
                  {[t('about.mission.item1'), t('about.mission.item2'), t('about.mission.item3'), t('about.mission.item4')].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#f48c06] text-xs mt-1 flex-shrink-0">◆</span>
                      <p className="text-xs text-[rgba(237,242,250,0.45)] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision */}
              <div className="glass-card p-8 md:p-10 game-card group relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7b2ff7] to-transparent opacity-40" />
                <div className="mb-5">
                  <span className="section-label text-left inline-block">{t('about.vision.title')}</span>
                </div>
                <p className="text-[rgba(237,242,250,0.5)] leading-relaxed text-base italic">
                  &ldquo;{t('about.vision.content')}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Journey  ── */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="text-center mb-14">
            <span className="section-label">{t('roadmap.timeline')}</span>
            <h2 className="section-title mb-3">{t('roadmap.timeline')}</h2>
            <p className="text-[rgba(237,242,250,0.35)] text-sm">{t('roadmap.description')}</p>
          </div>

          <div className="relative max-w-[700px] mx-auto">
            <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(76,201,240,0.12)] via-[rgba(76,201,240,0.25)] to-[rgba(76,201,240,0.04)] md:-translate-x-px" />

            <div className="space-y-10">
              {timelineEvents.map((event, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-[16px] md:left-1/2 top-6 w-[15px] h-[15px] rounded-full bg-[#4cc9f0] shadow-[0_0_16px_rgba(76,201,240,0.5),0_0_40px_rgba(76,201,240,0.1)] md:-translate-x-1/2 z-10" />
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
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <span className="text-sm text-[rgba(237,242,250,0.25)]">
                {t('roadmap.futurePlan')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap Phases ── */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('roadmap.title')}</span>
              <h2 className="section-title mb-4">{t('roadmap.title')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roadmapPhases.map((phase) => (
                <div key={phase.phase} className="glass-card p-6 game-card group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#4cc9f0]">{phase.phase}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      phase.status === 'completed'
                        ? 'bg-[rgba(76,201,240,0.08)] text-[#4cc9f0]'
                        : phase.status === 'in-progress'
                        ? 'bg-[rgba(244,140,6,0.08)] text-[#f48c06]'
                        : 'bg-[rgba(237,242,250,0.04)] text-[rgba(237,242,250,0.3)]'
                    }`}>
                      {t(`roadmap.status.${phase.status}`)}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#edf2fa] mb-3 group-hover:text-white transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-xs text-[rgba(237,242,250,0.4)] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#4cc9f0] mt-1 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our People ── */}
      <section className="page-section">
        <div className="page-container">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('team.coreTeam')}</span>
              <h2 className="section-title mb-4">{t('team.coreTeam')}</h2>
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

      {/* ── Get in Touch ── */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
        <div className="page-container relative">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">{t('contact.title')}</span>
              <h2 className="section-title mb-4">{t('contact.title')}</h2>
              <p className="text-[rgba(237,242,250,0.4)]">
                {t('contact.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {/* Email */}
              <div className="glass-card p-6 game-card group">
                <div className="w-10 h-10 rounded-xl bg-[rgba(76,201,240,0.06)] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[rgba(76,201,240,0.12)] group-hover:scale-110">
                  <Mail size={20} className="text-[#4cc9f0]" />
                </div>
                <h3 className="text-sm font-semibold text-[#edf2fa] mb-2">
                  {t('contact.email.title')}
                </h3>
                <a
                  href="mailto:contact@permafrost-echo.com"
                  className="text-[#4cc9f0] text-sm hover:text-[#2abde6] transition-colors flex items-center gap-1 mb-2"
                >
                  {t('contact.email.value')}
                  <ExternalLink size={12} />
                </a>
                <p className="text-xs text-[rgba(237,242,250,0.35)] leading-relaxed">
                  {t('contact.email.description')}
                </p>
              </div>

              {/* WeChat */}
              <div className="glass-card p-6 game-card group">
                <div className="w-10 h-10 rounded-xl bg-[rgba(123,47,247,0.06)] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[rgba(123,47,247,0.12)] group-hover:scale-110">
                  <MessageCircle size={20} className="text-[#7b2ff7]" />
                </div>
                <h3 className="text-sm font-semibold text-[#edf2fa] mb-2">
                  {t('contact.wechat.title')}
                </h3>
                <div className="w-28 h-28 rounded-xl overflow-hidden border border-[rgba(76,201,240,0.08)] mb-2 bg-[rgba(255,255,255,0.02)]">
                  <img
                    src="/images/qr/wechat-official.png"
                    alt={t('contact.wechat.title')}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-[rgba(237,242,250,0.35)] leading-relaxed">
                  {t('contact.wechat.description')}
                </p>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-sm font-semibold text-[#edf2fa] mb-1">
                {t('contact.social.title')}
              </h3>
              <p className="text-xs text-[rgba(237,242,250,0.35)]">
                {t('contact.social.description')}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: null, img: '/images/social/indieloop.png', name: 'IndieLoop', href: 'https://indieloop.com/#/journal/gameMedia?id=78' },
                { icon: '📱', name: 'WeChat', href: '#' },
                { icon: '🎯', name: 'Indienova', href: '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="glass-card p-4 text-center game-card no-underline group"
                >
                  <div className="flex items-center justify-center h-6 mb-1.5 transition-transform duration-300 group-hover:scale-110">
                    {social.img ? (
                      <img src={social.img} alt={social.name} className="h-6 w-auto object-contain" />
                    ) : (
                      <span className="text-xl">{social.icon}</span>
                    )}
                  </div>
                  <p className="text-xs text-[rgba(237,242,250,0.4)] group-hover:text-[rgba(237,242,250,0.6)] transition-colors duration-300">
                    {social.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
