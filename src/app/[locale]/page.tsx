'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const skills = [
    { category: 'Lenguajes', items: ['TypeScript', 'Java', 'C#', 'SQL'] },
    { category: 'Frameworks', items: ['React', 'Next.js', 'Spring Boot', '.NET'] },
    { category: 'Bases de Datos', items: ['SQL Server', 'Oracle', 'PostgreSQL', 'MySQL'] },
    { category: 'Cloud', items: ['Azure', 'Firebase', 'Docker'] },
  ];

  const projects = [
    {
      id: 1,
      title: 'Data Warehouse Santory',
      desc: 'Desarrollo completo de Data Warehouse en SQL Server con ETL, modelado dimensional y dashboards en Power BI para análisis estratégico del negocio.',
      tech: ['SQL Server', 'ETL', 'Power BI'],
      icon: '📊',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 2,
      title: 'Tienda en Línea',
      desc: 'Plataforma de comercio electrónico con Spring Boot, Thymeleaf y MySQL. Incluye carrito de compras, autenticación y pagos seguros.',
      tech: ['Spring Boot', 'Firebase', 'MySQL'],
      icon: '🛒',
      gradient: 'from-teal-500 to-emerald-600',
    },
    {
      id: 3,
      title: 'Sistema de Gestión Hotelera',
      desc: 'Base de datos Oracle con procedimientos almacenados, vistas especializadas y consultas avanzadas para operaciones de reservaciones.',
      tech: ['Oracle', 'PL/SQL'],
      icon: '🏨',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      id: 4,
      title: 'Gestión Comercial',
      desc: 'Sistema integral para gestión de clientes, ventas y productos con automatización de procesos de negocio mediante triggers.',
      tech: ['Oracle', 'SQL'],
      icon: '📈',
      gradient: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200">
            Disponible para proyectos
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
          Isaac Tenorio López
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
          Desarrollador de Software | Especialista en Bases de Datos
        </p>
        
        <p className="text-base text-slate-500 max-w-2xl mx-auto mb-10">
          Apasionado por crear soluciones eficientes y escalables. 
          Transformo datos en información actionable para el negocio.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/isaac-tenorio-8a0411288"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/20"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/IsaacLopez777/Portafolio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium border border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300/20"
          >
            GitHub
          </a>
        </div>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-teal-500"></span>
          Experiencia Profesional
        </h2>
        
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 p-8">
          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-teal-500/20">
              🏢
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Empresa de Tecnología</h3>
              <p className="text-teal-600 font-medium">Desarrollador Backend - Práctica Profesional</p>
              <p className="text-slate-400 text-sm">2025 - Presente</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-teal-50 to-teal-50/50 border-l-4 border-teal-400 p-5 rounded-r-xl">
            <p className="text-slate-700">
              <span className="text-teal-600 font-bold">📌 Responsabilidades:</span> Desarrollo de herramientas internas para optimización de procesos comerciales y participación en iniciativas de automatización orientadas a la mejora operativa de la empresa.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-teal-500"></span>
          Habilidades Técnicas
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-md border border-slate-200/60 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-teal-500"></span>
          Proyectos Destacados
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              onHoverStart={() => setHoveredProject(i)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200/60 transition-all duration-300 ${
                hoveredProject === i ? '-translate-y-2 shadow-xl' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                {project.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-teal-500"></span>
          Contáctame
        </h2>
        
        <div className="max-w-md mx-auto text-center">
          <p className="text-slate-500 mb-6">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <a
            href="https://wa.me/50687425031?text=Hola%20Isaac,%20me%20gustaría%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/25"
          >
            <span className="text-2xl">💬</span>
            <span>WhatsApp</span>
          </a>
          <p className="text-slate-400 text-sm mt-4">
            O escríbeme a: Lopeztenorio58@gmail.com
          </p>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center py-8 border-t border-slate-200"
      >
        <p className="text-slate-500">
          © 2026 Isaac Tenorio López. Todos los derechos reservados.
        </p>
        <p className="text-slate-400 text-sm mt-2">
          Tres Ríos, Costa Rica
        </p>
      </motion.footer>
    </div>
  );
}