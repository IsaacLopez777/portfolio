import { setRequestLocale } from 'next-intl/server';
import { Card } from '@/components/ui';
import { projects } from '@/lib/db/profile';

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Proyectos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} hover className="flex flex-col h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h2>
            <p className="text-gray-700 mb-4 flex-1">{project.desc || project.description || ''}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.featured && (
              <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded self-start">
                Destacado
              </span>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}