'use client';

import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

const quickLinks = [
  { key: 'about', href: '/about' },
  { key: 'activities', href: '/activities' },
  { key: 'games', href: '/games' },
  { key: 'community', href: '/community' },
  { key: 'partners', href: '/partners' },
  { key: 'team', href: '/team' },
  { key: 'contact', href: '/contact' },
  { key: 'articles', href: '/articles' },
];

export default function Footer({ messages }: { messages: Record<string, string> }) {
  const locale = useLocale() as Locale;

  const t = (key: string) => messages[key] || key;

  return (
    <footer className="relative border-t border-[rgba(76,201,240,0.08)] bg-[#050a12]">
      {/* Top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.1)] via-[rgba(76,201,240,0.15)] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="「冻土回声」 Permafrost Echo"
                width={36}
                height={36}
                className="w-9 h-9 rounded-lg object-contain shadow-[0_0_16px_rgba(76,201,240,0.25)]"
              />
              <span className="text-sm font-semibold text-[#edf2fa]">
                {t('footer.brand')}
              </span>
            </div>
            <p className="text-sm text-[rgba(237,242,250,0.4)] leading-relaxed">
              {t('footer.brandDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-[rgba(237,242,250,0.5)] uppercase tracking-[0.08em] mb-5">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-[rgba(237,242,250,0.4)] hover:text-[#4cc9f0] transition-colors duration-200"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-[rgba(237,242,250,0.5)] uppercase tracking-[0.08em] mb-5">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@permafrost-echo.com"
                className="inline-flex items-center gap-2.5 text-sm text-[rgba(237,242,250,0.4)] hover:text-[#4cc9f0] transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-[rgba(76,201,240,0.06)] flex items-center justify-center group-hover:bg-[rgba(76,201,240,0.1)] transition-colors duration-200">
                  <Mail size={14} className="text-[#4cc9f0]" />
                </span>
                contact@permafrost-echo.com
              </a>
              <a
                href="https://www.linkedin.com/company/permafrost-echo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-[rgba(237,242,250,0.4)] hover:text-[#4cc9f0] transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-[rgba(76,201,240,0.06)] flex items-center justify-center group-hover:bg-[rgba(76,201,240,0.1)] transition-colors duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#4cc9f0]">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                {t('footer.linkedin')}
              </a>
            </div>
          </div>

          {/* WeChat QR */}
          <div>
            <h3 className="text-xs font-semibold text-[rgba(237,242,250,0.5)] uppercase tracking-[0.08em] mb-5">
              {t('footer.wechatQr')}
            </h3>
            <div className="w-28 h-28 rounded-xl overflow-hidden border border-[rgba(76,201,240,0.08)] bg-[rgba(255,255,255,0.02)] relative">
              <Image
                src="/images/qr/wechat-official.png"
                alt={t('footer.wechatQr')}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[rgba(76,201,240,0.04)]">
          <p className="text-center text-xs text-[rgba(237,242,250,0.25)]">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
