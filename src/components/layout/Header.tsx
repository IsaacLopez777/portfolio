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
    // Hangman ocultado del nav (la ruta /hangman sigue accesible directamente por URL)
    // { href: `/${locale}/hangman`, label: t('hangman') },
  ];

  const switchLocale = (newLocale: 'es' | 'en') => {
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <header className="glass sticky top-0 z-50" style={{ borderBottom: '1px solid rgba(235, 225, 207, 0.9)' }}>
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="serif text-2xl font-semibold tracking-tight text-[#2D2318]">
            isaac.
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-[#FFFEFB]/80 rounded-full px-2 py-1 border border-[#EBE1CF] shadow-[var(--shadow-xs)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  pathname === item.href || (item.href === `/${locale}` && pathname === `/${locale}`)
                    ? 'text-[#FFF9F1] bg-[#8E4266] shadow-[var(--shadow-glow)]'
                    : 'text-[#5D5245] hover:text-[#2D2318] hover:bg-[#F6EFE2]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 bg-[#FFFEFB]/80 rounded-full px-1 py-1 border border-[#EBE1CF]">
              <button
                onClick={() => switchLocale('es')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  locale === 'es' ? 'text-[#FFF9F1] bg-[#8E4266]' : 'text-[#5D5245] hover:bg-[#F6EFE2]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  locale === 'en' ? 'text-[#FFF9F1] bg-[#8E4266]' : 'text-[#5D5245] hover:bg-[#F6EFE2]'
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
            <svg className="w-5 h-5 text-[#5D5245]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    ? 'text-[#FFF9F1] bg-[#8E4266]'
                    : 'text-[#5D5245] hover:bg-[#F6EFE2]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-1 mt-2 bg-[#FFFEFB]/80 rounded-full px-1 py-1 border border-[#EBE1CF] w-fit">
              <button
                onClick={() => switchLocale('es')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  locale === 'es' ? 'text-[#FFF9F1] bg-[#8E4266]' : 'text-[#5D5245]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  locale === 'en' ? 'text-[#FFF9F1] bg-[#8E4266]' : 'text-[#5D5245]'
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
