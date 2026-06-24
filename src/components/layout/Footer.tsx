import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="glass border-t border-white/40 py-7">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-[#64748B]">
            © {new Date().getFullYear()} <span className="font-semibold text-[#0E1726]">Isaac Tenorio López</span>. {t('rights')}
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/isaac-tenorio-8a0411288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#64748B] hover:text-[#3A86FF] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/IsaacLopez777/Portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#64748B] hover:text-[#3A86FF] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}