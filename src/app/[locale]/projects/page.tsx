import { setRequestLocale } from 'next-intl/server';
import { projects } from '@/lib/db/profile';

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-4">Proyectos</h1>
        <p className="text-[#64748B] mb-12 max-w-xl">Una selección de soluciones que he construido en datos, backend y automatización.</p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-premium p-7 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white shadow-[var(--shadow-glow)]" style={{ background: 'var(--grad-brand)' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#0E1726] mb-2">{project.title}</h2>
              <p className="text-[#64748B] mb-5 leading-relaxed">{project.desc || project.description || ''}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="chip text-[0.72rem]">
                    {tech}
                  </span>
                ))}
              </div>
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 mt-5 chip chip-brand">
                  ★ Destacado
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}