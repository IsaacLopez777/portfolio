import { setRequestLocale } from 'next-intl/server';
import { projects } from '@/lib/db/profile';

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

/* Icono y tinte por proyecto — cada tarjeta con identidad propia */
const projectVisuals: Record<string, { tile: string; icon: React.ReactNode }> = {
  'data-warehouse-santory': {
    tile: 'icon-tile-clay',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  'tienda-online': {
    tile: 'icon-tile-honey',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  'hotel-management': {
    tile: 'icon-tile-olive',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75m3 3h.75M6.75 21v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21" />
      </svg>
    ),
  },
  'sistema-comercial': {
    tile: 'icon-tile-clay',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM12.75 3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V3.375z" />
      </svg>
    ),
  },
};

const defaultVisual = projectVisuals['data-warehouse-santory'];

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl mb-4">Proyectos</h1>
        <p className="text-[#5D5245] mb-12 max-w-xl">Una selección de soluciones que he construido en datos, backend y automatización.</p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => {
            const visual = projectVisuals[project.id] ?? defaultVisual;
            return (
              <div
                key={project.id}
                className="card-premium p-7 group"
              >
                <span className={`icon-tile ${visual.tile} mb-5`}>{visual.icon}</span>
                <h2 className="text-xl mb-2">{project.title}</h2>
                <p className="text-[#5D5245] mb-5 leading-relaxed">{project.desc || project.description || ''}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="chip text-[0.72rem]">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 mt-5 chip chip-honey">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    Destacado
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
