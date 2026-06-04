'use client';

import { useState } from 'react';

export default function HomePage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const skills = [
    { category: 'Lenguajes', items: ['TypeScript', 'Java', 'C#', 'SQL'] },
    { category: 'Frameworks', items: ['Spring Boot', '.NET', 'Node.js'] },
    { category: 'Bases de Datos', items: ['SQL Server', 'Oracle', 'PostgreSQL', 'MySQL'] },
    { category: 'Cloud', items: ['Azure', 'Firebase', 'Docker'] },
  ];

  const projects = [
    {
      id: 1,
      title: 'Data Warehouse Santory',
      desc: 'Desarrollo completo de Data Warehouse en SQL Server con ETL, modelado dimensional y dashboards en Power BI.',
      tech: ['SQL Server', 'ETL', 'Power BI'],
    },
    {
      id: 2,
      title: 'Tienda en Línea',
      desc: 'Plataforma de comercio electrónico con Spring Boot, Thymeleaf y MySQL. Carrito de compras, autenticación y pagos seguros.',
      tech: ['Spring Boot', 'Firebase', 'MySQL'],
    },
    {
      id: 3,
      title: 'Sistema de Gestión Hotelera',
      desc: 'Base de datos Oracle con procedimientos almacenados, vistas especializadas y consultas avanzadas.',
      tech: ['Oracle', 'PL/SQL'],
    },
    {
      id: 4,
      title: 'Gestión Comercial',
      desc: 'Sistema integral para gestión de clientes, ventas y productos con automatización de procesos.',
      tech: ['Oracle', 'SQL'],
    },
  ];

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-slate-800 to-slate-800/20 rounded-full"></div>

      <header className="mb-20 pl-6">
        <p className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-white text-xs font-medium rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
          Disponible para proyectos
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Isaac Tenorio López
        </h1>

        <p className="text-xl text-slate-500 mb-4">
          Desarrollador de Software | Especialista en Bases de Datos
        </p>

        <p className="text-base text-slate-500 max-w-xl mb-8 leading-relaxed">
          Transformo datos en información actionable para el negocio. Apasionado por crear soluciones eficientes y escalables.
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/isaac-tenorio-8a0411288"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/IsaacLopez777/Portafolio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white text-slate-900 text-sm font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            GitHub
          </a>
        </div>
      </header>

      <section className="mb-16 pl-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
          Experiencia Profesional
        </h2>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-lg font-bold text-white">
              E
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">Nexsys Centroamérica · Departamento de Microsoft</h3>
              <p className="text-sm text-slate-500">Desarrollador Backend - Práctica Profesional</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Desarrollo de herramientas internas para optimización de procesos comerciales y participación en iniciativas de automatización orientadas a la mejora operativa de la empresa.
          </p>
        </div>
      </section>

      <section className="mb-16 pl-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
          Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((group) => (
            <div key={group.category} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-slate-800 text-white text-xs font-medium rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 pl-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`bg-white rounded-xl p-6 border transition-all cursor-default ${
                hoveredProject === i ? 'border-slate-800 shadow-lg -translate-y-1' : 'border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center mb-3">
                <span className="text-sm">📁</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 pl-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
          Contacto
        </h2>

        <div className="bg-slate-800 rounded-xl p-6 text-center">
          <p className="text-sm text-slate-300 mb-4">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          <a
            href="https://wa.me/50687425031?text=Hola%20Isaac,%20me%20gustaría%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-medium rounded-lg hover:bg-[#20BD5A] transition-colors"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
          <p className="text-xs text-slate-400 mt-4">Lopeztenorio58@gmail.com</p>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-slate-200 ml-6">
        <p className="text-sm text-slate-500">© 2026 Isaac Tenorio López</p>
        <p className="text-xs text-slate-400 mt-1">Tres Ríos, Costa Rica</p>
      </footer>
    </div>
  );
}