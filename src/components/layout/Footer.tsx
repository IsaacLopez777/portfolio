import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-white border-t border-[#f0f0f0] py-6">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-[#ccc]">
            © {new Date().getFullYear()} Isaac Tenorio López. {t('rights')}
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/isaac-tenorio-8a0411288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#ccc] hover:text-[#1a1a1a] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/IsaacLopez777/Portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#ccc] hover:text-[#1a1a1a] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}