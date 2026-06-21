'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f0f0f5] rounded-full text-sm text-[#555] mb-6 border border-[#e5e5ea]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  className="w-2 h-2 bg-[#3a86ff] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Disponible para proyectos
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Isaac Tenorio López
              </motion.h1>

              <motion.p
                className="text-lg text-[#3a86ff] font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Desarrollador de Software · Especialista en Bases de Datos
              </motion.p>

              <motion.p
                className="text-[#6b7280] mb-8 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Transformo datos en información accionable para el negocio. Apasionado por crear soluciones eficientes y escalables.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.a
                  href="https://www.linkedin.com/in/isaac-tenorio-8a0411288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3a86ff] text-white text-sm font-semibold rounded-lg shadow-md"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(58, 134, 255, 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/IsaacLopez777/Portafolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1a1a2e] text-sm font-semibold rounded-lg border-2 border-[#e5e5ea]"
                  whileHover={{ scale: 1.05, backgroundColor: '#f9fafb' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </motion.a>
                <motion.a
                  href="/CV/Isaac_Tenorio_Lopez_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a2e] text-white text-sm font-semibold rounded-lg shadow-md"
                  whileHover={{ scale: 1.05, backgroundColor: '#2a2a3e' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar CV
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#3a86ff] rounded-full opacity-20 blur-3xl"
                  animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/images/Isaac.jpg"
                    alt="Isaac Tenorio López"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-[#3a86ff] border border-[#e5e5ea]"
                animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                SQL
              </motion.div>
              <motion.div
                className="absolute -bottom-1 -left-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-[#3a86ff] border border-[#e5e5ea]"
                animate={{ y: [0, 5, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.2 }}
              >
                JS
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-5 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-[#3a86ff] border border-[#e5e5ea]"
                animate={{ y: [0, -3, 0], x: [0, 3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.7 }}
              >
                DB
              </motion.div>

              <motion.div
                className="absolute top-4 left-0 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-[#f0f0f5]"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <span className="text-[#ff6b6b]">❤️</span>
                <span className="text-xs font-semibold text-[#1a1a2e]">4 proyectos</span>
              </motion.div>
              <motion.div
                className="absolute bottom-8 -left-4 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-[#f0f0f5]"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-[#3a86ff]">💬</span>
                <span className="text-xs font-semibold text-[#1a1a2e]">Disponible</span>
              </motion.div>
            </motion.div>
          </div>
        </header>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-bold text-[#3a86ff] uppercase tracking-[0.2em] mb-8">Experiencia</h2>

          <div className="flex gap-6">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-3 h-3 bg-[#3a86ff] rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="w-0.5 h-full bg-[#e5e5ea] mt-2" />
            </motion.div>
            <motion.div
              className="flex-1 bg-[#fafafa] rounded-xl p-6 border border-[#f0f0f5] shadow-sm mb-6 hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                <motion.span
                  className="px-2.5 py-1 bg-[#e8f4ff] text-[#3a86ff] text-xs font-medium rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  Nexsys Centroamérica
                </motion.span>
                <motion.span
                  className="px-2.5 py-1 bg-[#f0f0f5] text-[#555] text-xs font-medium rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  Departamento de Microsoft
                </motion.span>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">Desarrollador Backend</h3>
              <p className="text-sm text-[#6b7280] mb-3">Práctica Profesional</p>
              <p className="text-[#555] leading-relaxed">
                Desarrollo de herramientas internas para optimización de procesos comerciales y participación en iniciativas de automatización orientadas a la mejora operativa de la empresa.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-bold text-[#3a86ff] uppercase tracking-[0.2em] mb-8">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                className="bg-[#fafafa] rounded-xl p-4 border border-[#f0f0f5]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xs font-semibold text-[#3a86ff] uppercase tracking-wider mb-2">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-1 bg-white text-[#555] text-xs font-medium rounded border border-[#e5e5ea]"
                      whileHover={{ scale: 1.1, backgroundColor: '#3a86ff', color: '#fff', borderColor: '#3a86ff' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-bold text-[#3a86ff] uppercase tracking-[0.2em] mb-8">Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`bg-white rounded-xl p-5 border cursor-pointer ${
                  hoveredProject === i
                    ? 'border-[#3a86ff] shadow-lg shadow-blue-100'
                    : 'border-[#f0f0f5] shadow-sm'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-8 h-8 bg-[#fafafa] rounded flex items-center justify-center mb-3"
                  animate={hoveredProject === i ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm">📁</span>
                </motion.div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{project.title}</h3>
                <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-[#f0f0f5] text-[#555] text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-bold text-[#3a86ff] uppercase tracking-[0.2em] mb-8">Contacto</h2>

          <motion.div
            className="bg-[#fafafa] rounded-xl p-8 text-center border border-[#f0f0f5]"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-[#6b7280] mb-5">¿Tienes un proyecto en mente? ¡Hablemos!</p>
            <motion.a
              href="https://wa.me/50687425031?text=Hola%20Isaac,%20me%20gustaría%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -5px rgba(37, 211, 102, 0.4)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              💬 WhatsApp
            </motion.a>
            <p className="text-[#aaa] text-sm mt-5">Lopeztenorio58@gmail.com</p>
          </motion.div>
        </motion.section>

        <footer className="text-center py-8 border-t border-[#f0f0f5]">
          <p className="text-[#6b7280]">© 2026 Isaac Tenorio López</p>
          <p className="text-[#aaa] text-sm mt-1">Tres Ríos, Costa Rica</p>
        </footer>
      </div>
    </div>
  );
}