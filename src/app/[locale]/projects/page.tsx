import { setRequestLocale } from 'next-intl/server';
import { projects } from '@/lib/db/profile';

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-12">Proyectos</h1>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg p-5 border-2 border-[#e5e5e5] hover:border-[#1a1a1a] transition-all"
            >
              <div className="w-8 h-8 bg-[#f0f0f0] rounded flex items-center justify-center mb-3">
                <span className="text-sm">📁</span>
              </div>
              <h2 className="text-base font-bold text-[#1a1a1a] mb-2">{project.title}</h2>
              <p className="text-[#888] text-sm mb-4 leading-relaxed">{project.desc || project.description || ''}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-[#f5f5f5] text-[#666] text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.featured && (
                <span className="inline-block mt-3 text-xs font-medium text-[#999] bg-[#f5f5f5] px-2 py-0.5 rounded">
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