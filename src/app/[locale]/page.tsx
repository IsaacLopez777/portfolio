'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const skills = [
    { category: 'Lenguajes', items: ['JavaScript', 'Java', 'C#', 'SQL'] },
    { category: 'Frameworks', items: ['Spring Boot', '.NET'] },
    { category: 'Bases de Datos', items: ['SQL Server', 'Oracle', 'MySQL', 'SQL'] },
    { category: 'Cloud', items: ['AWS', 'Azure', 'Firebase'] },
    { category: 'DevOps', items: ['Despliegues', 'Docker', 'CI/CD'] },
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
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f0f0f5] rounded-full text-sm text-[#555] mb-6 border border-[#e5e5ea]">
                <span className="w-2 h-2 bg-[#3a86ff] rounded-full"></span>
                Disponible para proyectos
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight">
                Isaac Tenorio López
              </h1>

              <p className="text-lg text-[#3a86ff] font-medium mb-4">
                Desarrollador de Software · Especialista en Bases de Datos
              </p>

              <p className="text-[#6b7280] mb-8 leading-relaxed max-w-md">
                Transformo datos en información accionable para el negocio. Apasionado por crear soluciones eficientes y escalables.
              </p>

              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/isaac-tenorio-8a0411288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#3a86ff] text-white text-sm font-semibold rounded-lg hover:bg-[#2563eb] transition-colors shadow-md"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/IsaacLopez777/Portafolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white text-[#1a1a2e] text-sm font-semibold rounded-lg border-2 border-[#e5e5ea] hover:bg-[#f9fafb] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-[#3a86ff] rounded-full opacity-20 blur-3xl scale-90"></div>
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/images/Isaac.jpg"
                    alt="Isaac Tenorio López"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-[#3a86ff] border border-[#e5e5ea]">
                  SQL
                </div>
                <div className="absolute -bottom-1 -left-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-[#3a86ff] border border-[#e5e5ea]">
                  JS
                </div>
                <div className="absolute top-1/2 -right-5 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-[#3a86ff] border border-[#e5e5ea]">
                  DB
                </div>
              </div>

              <div className="absolute top-4 left-0 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-[#f0f0f5]">
                <span className="text-[#ff6b6b]">❤️</span>
                <span className="text-xs font-semibold text-[#1a1a2e]">4 proyectos</span>
              </div>
              <div className="absolute bottom-8 -left-4 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-[#f0f0f5]">
                <span className="text-[#3a86ff]">💬</span>
                <span className="text-xs font-semibold text-[#1a1a2e]">Disponible</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-20">
          <div className="bg-white rounded-2xl border border-[#f0f0f5] shadow-lg shadow-blue-100/50 p-8 md:flex md:items-center md:gap-8">
            <div className="flex-shrink-0 flex justify-center mb-6 md:mb-0">
              <div className="w-20 h-20 bg-[#e8f4ff] rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-[#3a86ff] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{animationDuration: '2s'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-[#1a1a2e]">Descarga mi CV</h3>
                <span className="inline-block px-2 py-0.5 bg-[#e8f4ff] text-[#3a86ff] text-xs font-semibold rounded-full">PDF · 115 KB</span>
              </div>
              <p className="text-[#6b7280] mb-5">Conoce más sobre mi experiencia, habilidades y formación en mi currículum completo.</p>
              <a
                href="/CV/Isaac_Tenorio_Lopez_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3a86ff] text-white text-sm font-semibold rounded-xl hover:bg-[#2563eb] transition-all hover:shadow-lg hover:shadow-blue-200 group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </a>
              <p className="text-xs text-[#aaa] mt-3">Última actualización: Junio 2026</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#3a86ff] uppercase tracking-[0.2em] mb-8">Experiencia</h2>

          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-[#3a86ff] rounded-full"></div>
              <div className="w-0.5 h-full bg-[#e5e5ea] mt-2"></div>
            </div>
            <div className="flex-1 bg-[#fafafa] rounded-xl p-6 border border-[#f0f0f5] shadow-sm mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2.5 py-1 bg-[#e8f4ff] text-[#3a86ff] text-xs font-medium rounded-full">Nexsys Centroamérica</span>
                <span className="px-2.5 py-1 bg-[#f0f0f5] text-[#555] text-xs font-medium rounded-full">Departamento de Microsoft</span>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">Desarrollador Backend</h3>
              <p className="text-sm text-[#6b7280] mb-3">Práctica Profesional</p>
              <p className="text-[#555] leading-relaxed">
                Desarrollo de herramientas internas para optimización de procesos comerciales y participación en iniciativas de automatización orientadas a la mejora operativa de la empresa.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#3a86ff] uppercase tracking-[0.2em] mb-8">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {skills.map((group) => (
              <div key={group.category} className="bg-[#fafafa] rounded-xl p-4 border border-[#f0f0f5]">
                <h3 className="text-xs font-semibold text-[#3a86ff] uppercase tracking-wider mb-2">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white text-[#555] text-xs font-medium rounded border border-[#e5e5ea]"
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
          <h2 className="text-xs font-bold text-[#3a86ff] uppercase tracking-[0.2em] mb-8">Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`bg-white rounded-xl p-5 border transition-all cursor-pointer ${
                  hoveredProject === i
                    ? 'border-[#3a86ff] shadow-lg shadow-blue-100'
                    : 'border-[#f0f0f5] shadow-sm'
                }`}
              >
                <div className="w-8 h-8 bg-[#fafafa] rounded flex items-center justify-center mb-3">
                  <span className="text-sm">📁</span>
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{project.title}</h3>
                <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-[#f0f0f5] text-[#555] text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold text-[#3a86ff] uppercase tracking-[0.2em] mb-8">Contacto</h2>

          <div className="bg-[#fafafa] rounded-xl p-8 text-center border border-[#f0f0f5] mb-8">
            <p className="text-[#6b7280] mb-5">¿Tienes un proyecto en mente? ¡Hablemos!</p>
            <a
              href="https://wa.me/50687425031?text=Hola%20Isaac,%20me%20gustaría%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#20BD5A] transition-colors shadow-md"
            >
              💬 WhatsApp
            </a>
            <p className="text-[#aaa] text-sm mt-5">Lopeztenorio58@gmail.com</p>
          </div>
        </section>

        <footer className="text-center py-8 border-t border-[#f0f0f5]">
          <p className="text-[#6b7280]">© 2026 Isaac Tenorio López</p>
          <p className="text-[#aaa] text-sm mt-1">Tres Ríos, Costa Rica</p>
        </footer>
      </div>
    </div>
  );
}