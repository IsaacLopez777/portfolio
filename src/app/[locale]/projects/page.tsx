import { setRequestLocale } from 'next-intl/server';
import { projects } from '@/lib/db/profile';

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Proyectos</h1>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all"
          >
            <h2 className="text-base font-semibold text-slate-900 mb-2">{project.title}</h2>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">{project.desc || project.description || ''}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.featured && (
              <span className="inline-block mt-3 text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                Destacado
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}