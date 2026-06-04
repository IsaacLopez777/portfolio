import { setRequestLocale } from 'next-intl/server';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      <p className="text-gray-600">
        Próximamente encontrarás artículos sobre desarrollo de software, 
        bases de datos y mejores prácticas de programación.
      </p>
    </div>
  );
}