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
    <header className="bg-white border-b border-[#f0f0f0] sticky top-0 z-50">
      <nav className="max-w-3xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#1a1a1a]">Isaac López</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#999] hover:text-[#1a1a1a] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-1 ml-2 pl-5 border-l border-[#f0f0f0]">
              <button
                onClick={() => switchLocale('es')}
                className={`px-2.5 py-1 text-xs rounded transition-all ${locale === 'es' ? 'bg-[#1a1a1a] text-white' : 'text-[#bbb] hover:bg-[#f5f5f5]'}`}
              >
                ES
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-2.5 py-1 text-xs rounded transition-all ${locale === 'en' ? 'bg-[#1a1a1a] text-white' : 'text-[#bbb] hover:bg-[#f5f5f5]'}`}
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
            <svg className="w-5 h-5 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="block py-2 text-sm text-[#999]"
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