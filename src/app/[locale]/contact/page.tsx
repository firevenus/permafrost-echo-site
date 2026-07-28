'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';
import WechatQrModal from '@/components/WechatQrModal';

export const runtime = 'edge';

export default function ContactPage() {
  const t = useTranslations();
  const [wechatOpen, setWechatOpen] = useState(false);

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 scanlines" />
        <div className="section-glow-top" />
        <div className="page-container relative py-24 text-center">
          <h1 className="hero-title mb-5">
            <span className="gradient-text">{t('contact.title')}</span>
          </h1>
          <p className="text-[rgba(237,242,250,0.4)] text-lg max-w-[520px] mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-top" />
        <div className="page-container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            {/* Email */}
            <div className="glass-card p-8 game-card group">
              <div className="w-12 h-12 rounded-xl bg-[rgba(76,201,240,0.06)] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[rgba(76,201,240,0.12)] group-hover:scale-110">
                <Mail size={24} className="text-[#4cc9f0]" />
              </div>
              <h3 className="text-base font-semibold text-[#edf2fa] mb-2.5">
                {t('contact.email.title')}
              </h3>
              <a
                href="mailto:contact@permafrost-echo.com"
                className="text-[#4cc9f0] text-sm hover:text-[#2abde6] transition-colors flex items-center gap-1 mb-3"
              >
                {t('contact.email.value')}
                <ExternalLink size={12} />
              </a>
              <p className="text-xs text-[rgba(237,242,250,0.35)] leading-relaxed">
                {t('contact.email.description')}
              </p>
            </div>

            {/* WeChat */}
            <div className="glass-card p-8 game-card group">
              <div className="w-12 h-12 rounded-xl bg-[rgba(123,47,247,0.06)] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[rgba(123,47,247,0.12)] group-hover:scale-110">
                <MessageCircle size={24} className="text-[#7b2ff7]" />
              </div>
              <h3 className="text-base font-semibold text-[#edf2fa] mb-2.5">
                {t('contact.wechat.title')}
              </h3>
              <div className="w-32 h-32 rounded-xl overflow-hidden border border-[rgba(76,201,240,0.08)] mb-3 bg-[rgba(255,255,255,0.02)]">
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
        </div>
      </section>

      {/* Social Media */}
      <section className="page-section relative overflow-hidden">
        <div className="section-glow-bottom" />
        <div className="page-container relative">
          <div className="text-center mb-12">
            <span className="section-label">{t('contact.social.title')}</span>
            <h2 className="section-title mb-4">{t('contact.social.title')}</h2>
            <p className="text-[rgba(237,242,250,0.4)]">
              {t('contact.social.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-[640px] mx-auto">
            {[
              { icon: '💼', name: 'LinkedIn', href: 'https://www.linkedin.com/company/permafrost-echo/' },
              { icon: null, img: '/images/social/indieloop.png', name: 'IndieLoop', href: 'https://indieloop.com/#/journal/gameMedia?id=78' },
              { icon: null, img: '/images/social/bilibili.png', name: 'Bilibili', href: 'https://space.bilibili.com/3632304897395308' },
              { icon: null, img: '/images/social/wechat.png', name: 'WeChat', isWechat: true, qr: '/images/qr/wechat-official.png' },
              { icon: null, img: '/images/social/indienova.png', name: 'Indienova', href: 'https://indienova.com/indie-game-development/the-first-game-jam-in-three-provinces-of-northeast-china/' },
            ].map((social, i) => (
              social.isWechat ? (
                <button
                  key={i}
                  type="button"
                  onClick={() => setWechatOpen(true)}
                  className="glass-card p-5 text-center game-card group cursor-pointer w-full"
                >
                  <div className="flex items-center justify-center h-8 mb-2.5 transition-transform duration-300 group-hover:scale-110">
                    <img src={social.img} alt={social.name} className="h-8 w-auto object-contain" />
                  </div>
                  <p className="text-xs text-[rgba(237,242,250,0.4)] group-hover:text-[rgba(237,242,250,0.6)] transition-colors duration-300">
                    {t('contact.wechat.title')}
                  </p>
                </button>
              ) : (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 text-center game-card no-underline group"
                >
                  <div className="flex items-center justify-center h-8 mb-2.5 transition-transform duration-300 group-hover:scale-110">
                    {social.img ? (
                      <img src={social.img} alt={social.name} className="h-8 w-auto object-contain" />
                    ) : (
                      <span className="text-2xl">{social.icon}</span>
                    )}
                  </div>
                  <p className="text-xs text-[rgba(237,242,250,0.4)] group-hover:text-[rgba(237,242,250,0.6)] transition-colors duration-300">
                    {social.name}
                  </p>
                </a>
              )
            ))}
          </div>
        </div>
      </section>

      <WechatQrModal
        open={wechatOpen}
        onClose={() => setWechatOpen(false)}
        title={t('contact.wechat.title')}
        qrSrc="/images/qr/wechat-official.png"
        description={t('contact.wechat.description')}
      />
    </div>
  );
}
