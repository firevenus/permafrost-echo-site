'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { localeLabels } from '@/i18n/routing';

const navItems: { key: string; href: string }[] = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'activities', href: '/activities' },
  { key: 'games', href: '/games' },
  { key: 'articles', href: '/articles' },
  { key: 'community', href: '/community' },
  { key: 'team', href: '/team' },
  { key: 'partners', href: '/partners' },
  { key: 'roadmap', href: '/roadmap' },
  { key: 'contact', href: '/contact' },
];

export default function Header({ messages }: { messages: Record<string, string> }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const isActive = (href: string) => {
    const path = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    if (href === '/') return path === '/';
    return path.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(8,14,22,0.9)] backdrop-blur-xl shadow-[0_1px_0_rgba(76,201,240,0.08)]'
          : 'bg-transparent'
      }`}
    >
      {/* Top subtle glow line when scrolled — 冰晶光泽 */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.12)] via-[rgba(76,201,240,0.12)] to-transparent transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <Image
            src="/images/logo.png"
            alt="冻土回声 Permafrost Echo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg object-contain shadow-[0_0_16px_rgba(76,201,240,0.3)] transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(76,201,240,0.5)]"
          />
          <span className="text-sm font-semibold text-[#edf2fa] hidden sm:block">
            Permafrost Echo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#4cc9f0] ${
                isActive(item.href)
                  ? 'text-[#4cc9f0] bg-[rgba(76,201,240,0.06)]'
                  : 'text-[rgba(237,242,250,0.5)] hover:text-[#edf2fa] hover:bg-[rgba(255,255,255,0.03)]'
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {messages[`nav.${item.key}`] || item.key}
              {isActive(item.href) && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4cc9f0] shadow-[0_0_6px_rgba(76,201,240,0.5)]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-[rgba(237,242,250,0.5)] hover:text-[#edf2fa] rounded-lg hover:bg-[rgba(255,255,255,0.03)] transition-all duration-200"
            >
              <Globe size={14} />
              <span className="hidden sm:inline">{localeLabels[locale]}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 py-2 w-36 bg-[rgba(8,14,22,0.97)] backdrop-blur-xl border border-[rgba(76,201,240,0.12)] rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] z-50 overflow-hidden">
                {Object.entries(localeLabels).map(([code, label]) => (
                  <a
                    key={code}
                    href={`/${code}${pathname.replace(/^\/[a-z]{2}/, '') || ''}`}
                    className={`block px-4 py-2.5 text-sm transition-all duration-150 ${
                      code === locale
                        ? 'text-[#4cc9f0] bg-[rgba(76,201,240,0.06)]'
                        : 'text-[rgba(237,242,250,0.5)] hover:text-[#edf2fa] hover:bg-[rgba(255,255,255,0.03)]'
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[rgba(237,242,250,0.5)] hover:text-[#edf2fa] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[rgba(8,14,22,0.97)] backdrop-blur-xl border-t border-[rgba(76,201,240,0.08)]">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#4cc9f0] ${
                  isActive(item.href)
                    ? 'text-[#4cc9f0] bg-[rgba(76,201,240,0.06)]'
                    : 'text-[rgba(237,242,250,0.5)] hover:text-[#edf2fa] hover:bg-[rgba(255,255,255,0.03)]'
                }`}
              >
                {messages[`nav.${item.key}`] || item.key}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
