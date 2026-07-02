import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="glass py-7" style={{ borderTop: '1px solid rgba(235, 225, 207, 0.9)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-[#5D5245]">
            © {new Date().getFullYear()} <span className="font-semibold text-[#2D2318]">Isaac Tenorio López</span>. {t('rights')}
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/isaac-tenorio-8a0411288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#5D5245] hover:text-[#8E4266] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/IsaacLopez777/Portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#5D5245] hover:text-[#8E4266] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
