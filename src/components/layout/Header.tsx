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
    <header className="bg-white border-b border-[#f0f0f5] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="text-xl font-bold text-[#1a1a2e]">
            isaac<span className="text-[#3a86ff]">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-[#fafafa] rounded-full px-2 py-1 border border-[#f0f0f5]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  pathname === item.href || (item.href === `/${locale}` && pathname === `/${locale}`)
                    ? 'bg-[#1a1a2e] text-white'
                    : 'text-[#6b7280] hover:text-[#1a1a2e]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 bg-[#fafafa] rounded-lg px-1 py-1 border border-[#f0f0f5]">
              <button
                onClick={() => switchLocale('es')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                  locale === 'es' ? 'bg-[#1a1a2e] text-white' : 'text-[#6b7280] hover:bg-[#f0f0f5]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                  locale === 'en' ? 'bg-[#1a1a2e] text-white' : 'text-[#6b7280] hover:bg-[#f0f0f5]'
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
            <svg className="w-5 h-5 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm text-[#6b7280]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}