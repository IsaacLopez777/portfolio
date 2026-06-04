import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/lib/i18n/routing';
import { Header, Footer } from '@/components/layout';
import InteractiveBackground from '@/components/sections/InteractiveBackground';
import '@/styles/globals.css';

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export const metadata: Metadata = {
  title: 'Isaac Tenorio López - Desarrollador de Software',
  description: 'Portafolio profesional de Isaac Tenorio López - Informático, Desarrollador de Software y Especialista en Bases de Datos',
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <InteractiveBackground />
          <Header locale={locale as 'es' | 'en'} />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}