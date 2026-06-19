'use client';

import { useState } from 'react';

export default function HomePage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const skills = [
    { category: 'Lenguajes', items: ['JavaScript', 'Java', 'C#', 'SQL'] },
    { category: 'Frameworks', items: ['Spring Boot', '.NET'] },
    { category: 'Bases de Datos', items: ['SQL Server', 'Oracle', 'MySQL'] },
    { category: 'Cloud', items: ['Azure', 'Firebase'] },
    { category: 'Mobile', items: ['FlutterFlow'] },
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
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-24">
          <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white text-xl font-bold mb-8">
            I
          </div>

          <p className="inline-block px-3 py-1 bg-[#1a1a1a] text-white text-xs font-medium mb-4">
            Disponible para proyectos
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-tight leading-none">
            Isaac Tenorio López
          </h1>

          <p className="text-lg text-[#666] mb-5">
            Desarrollador de Software · Especialista en Bases de Datos
          </p>

          <p className="text-[#888] max-w-md mb-10 leading-relaxed">
            Transformo datos en información accionable para el negocio. Apasionado por crear soluciones eficientes y escalables.
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/isaac-tenorio-8a0411288"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-lg hover:bg-[#333] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/IsaacLopez777/Portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-[#1a1a1a] text-sm font-medium rounded-lg border-2 border-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors"
            >
              GitHub
            </a>
          </div>
        </header>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#999] uppercase tracking-[0.2em] mb-8">Experiencia</h2>

          <div className="border-l-2 border-[#1a1a1a] pl-6">
            <div className="mb-2">
              <span className="inline-block px-2 py-0.5 bg-[#f0f0f0] text-[#666] text-xs font-medium rounded">
                Nexsys Centroamérica
              </span>
              <span className="inline-block px-2 py-0.5 bg-[#1a1a1a] text-white text-xs font-medium rounded ml-2">
                Departamento de Microsoft
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">Desarrollador Backend</h3>
            <p className="text-[#888] text-sm mb-4">Práctica Profesional</p>
            <p className="text-[#666] leading-relaxed max-w-lg">
              Desarrollo de herramientas internas para optimización de procesos comerciales y participación en iniciativas de automatización orientadas a la mejora operativa de la empresa.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#999] uppercase tracking-[0.2em] mb-8">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div key={group.category} className="bg-white rounded-lg p-5 border border-[#e5e5e5]">
                <h3 className="text-xs font-bold text-[#999] uppercase tracking-wider mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-[#f5f5f5] text-[#333] text-xs font-medium rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#999] uppercase tracking-[0.2em] mb-8">Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`bg-white rounded-lg p-5 border-2 transition-all cursor-pointer ${
                  hoveredProject === i
                    ? 'border-[#1a1a1a]'
                    : 'border-[#e5e5e5]'
                }`}
              >
                <div className="w-8 h-8 bg-[#f0f0f0] rounded flex items-center justify-center mb-3">
                  <span className="text-sm">📁</span>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">{project.title}</h3>
                <p className="text-[#888] text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-[#f0f0f0] text-[#666] text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#999] uppercase tracking-[0.2em] mb-8">Contacto</h2>

          <div className="bg-[#1a1a1a] rounded-lg p-8 text-center">
            <p className="text-[#999] mb-5">¿Tienes un proyecto en mente? ¡Hablemos!</p>
            <a
              href="https://wa.me/50687425031?text=Hola%20Isaac,%20me%20gustaría%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-bold rounded-lg hover:bg-[#20BD5A] transition-colors"
            >
              💬 WhatsApp
            </a>
            <p className="text-[#666] text-sm mt-5">Lopeztenorio58@gmail.com</p>
          </div>
        </section>

        <footer className="text-center py-8 border-t border-[#e5e5e5]">
          <p className="text-[#999]">© 2026 Isaac Tenorio López</p>
          <p className="text-[#bbb] text-sm mt-1">Tres Ríos, Costa Rica</p>
        </footer>
      </div>
    </div>
  );
}