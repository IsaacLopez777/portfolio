import { setRequestLocale } from 'next-intl/server';
import { projects } from '@/lib/db/profile';

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#1a1a2e] mb-12">Proyectos</h1>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-5 border border-[#f0f0f5] hover:border-[#3a86ff] hover:shadow-lg transition-all"
            >
              <div className="w-8 h-8 bg-[#fafafa] rounded flex items-center justify-center mb-3">
                <span className="text-sm">📁</span>
              </div>
              <h2 className="text-base font-bold text-[#1a1a2e] mb-2">{project.title}</h2>
              <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">{project.desc || project.description || ''}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-[#f0f0f5] text-[#555] text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.featured && (
                <span className="inline-block mt-3 text-xs font-medium text-[#3a86ff] bg-[#e8f4ff] px-2 py-0.5 rounded-full">
                  Destacado
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}