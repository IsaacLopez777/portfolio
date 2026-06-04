import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-white border-t border-slate-200 py-6">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Isaac Tenorio López. {t('rights')}
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/isaac-tenorio-8a0411288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/IsaacLopez777/Portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}