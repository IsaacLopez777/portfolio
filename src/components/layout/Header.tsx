'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  locale: 'es' | 'en';
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/projects`, label: t('projects') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const switchLocale = (newLocale: 'es' | 'en') => {
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <header className="glass border-b border-white/40 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-[#0E1726]">
            isaac<span className="gradient-text">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-white/70 rounded-full px-2 py-1 border border-[#E9EDF5] shadow-[var(--shadow-xs)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  pathname === item.href || (item.href === `/${locale}` && pathname === `/${locale}`)
                    ? 'text-white shadow-[var(--shadow-glow)] [background:var(--grad-brand)]'
                    : 'text-[#475569] hover:text-[#0E1726] hover:bg-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white/70 rounded-xl px-1 py-1 border border-[#E9EDF5]">
              <button
                onClick={() => switchLocale('es')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  locale === 'es' ? 'text-white [background:var(--grad-brand)]' : 'text-[#475569] hover:bg-white'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  locale === 'en' ? 'text-white [background:var(--grad-brand)]' : 'text-[#475569] hover:bg-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <button
            className="md:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-[#475569]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-3 pb-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                  pathname === item.href || (item.href === `/${locale}` && pathname === `/${locale}`)
                    ? 'text-white [background:var(--grad-brand)]'
                    : 'text-[#475569] hover:bg-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-1 mt-2 bg-white/70 rounded-xl px-1 py-1 border border-[#E9EDF5] w-fit">
              <button
                onClick={() => switchLocale('es')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  locale === 'es' ? 'text-white [background:var(--grad-brand)]' : 'text-[#475569]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  locale === 'en' ? 'text-white [background:var(--grad-brand)]' : 'text-[#475569]'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}