'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-24">
          <div className="flex items-start gap-6 mb-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#f0f0f0] shadow-lg">
              <Image
                src="/images/Isaac.jpg"
                alt="Isaac Tenorio López"
                fill
                className="object-cover"
              />
            </div>
            <div className="pt-2">
              <p className="inline-block px-3 py-1 bg-[#f5f5f5] text-[#666] text-xs font-medium rounded-full mb-3">
                Disponible para proyectos
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight leading-tight">
                Isaac Tenorio López
              </h1>
            </div>
          </div>

          <p className="text-lg text-[#888] mb-5">
            Desarrollador de Software · Especialista en Bases de Datos
          </p>

          <p className="text-[#aaa] max-w-md mb-10 leading-relaxed">
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
              className="px-5 py-2.5 bg-white text-[#1a1a1a] text-sm font-medium rounded-lg border-2 border-[#e5e5e5] hover:bg-[#f5f5f5] transition-colors"
            >
              GitHub
            </a>
          </div>
        </header>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#ccc] uppercase tracking-[0.2em] mb-8">Experiencia</h2>

          <div className="border-l-2 border-[#e5e5e5] pl-6">
            <div className="mb-2">
              <span className="inline-block px-2 py-0.5 bg-[#f5f5f5] text-[#666] text-xs font-medium rounded">
                Nexsys Centroamérica
              </span>
              <span className="inline-block px-2 py-0.5 bg-[#f5f5f5] text-[#999] text-xs font-medium rounded ml-2">
                Departamento de Microsoft
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">Desarrollador Backend</h3>
            <p className="text-[#bbb] text-sm mb-4">Práctica Profesional</p>
            <p className="text-[#888] leading-relaxed max-w-lg">
              Desarrollo de herramientas internas para optimización de procesos comerciales y participación en iniciativas de automatización orientadas a la mejora operativa de la empresa.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#ccc] uppercase tracking-[0.2em] mb-8">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div key={group.category} className="bg-[#fafafa] rounded-lg p-5 border border-[#f0f0f0]">
                <h3 className="text-xs font-bold text-[#bbb] uppercase tracking-wider mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white text-[#555] text-xs font-medium rounded border border-[#eee]"
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
          <h2 className="text-xs font-bold text-[#ccc] uppercase tracking-[0.2em] mb-8">Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`bg-white rounded-lg p-5 border-2 transition-all cursor-pointer ${
                  hoveredProject === i
                    ? 'border-[#1a1a1a] shadow-lg'
                    : 'border-[#f0f0f0]'
                }`}
              >
                <div className="w-8 h-8 bg-[#fafafa] rounded flex items-center justify-center mb-3">
                  <span className="text-sm">📁</span>
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">{project.title}</h3>
                <p className="text-[#888] text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-[#fafafa] text-[#666] text-xs rounded border border-[#eee]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#ccc] uppercase tracking-[0.2em] mb-8">Contacto</h2>

          <div className="bg-[#fafafa] rounded-lg p-8 text-center border border-[#f0f0f0]">
            <p className="text-[#888] mb-5">¿Tienes un proyecto en mente? ¡Hablemos!</p>
            <a
              href="https://wa.me/50687425031?text=Hola%20Isaac,%20me%20gustaría%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-bold rounded-lg hover:bg-[#20BD5A] transition-colors"
            >
              💬 WhatsApp
            </a>
            <p className="text-[#aaa] text-sm mt-5">Lopeztenorio58@gmail.com</p>
          </div>
        </section>

        <footer className="text-center py-8 border-t border-[#f0f0f0]">
          <p className="text-[#bbb]">© 2026 Isaac Tenorio López</p>
          <p className="text-[#ddd] text-sm mt-1">Tres Ríos, Costa Rica</p>
        </footer>
      </div>
    </div>
  );
}