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
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-28 pt-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2.5 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <span className="relative flex h-2 w-2">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-[#22B8CF] opacity-60"
                    animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22B8CF]" />
                </span>
                <span className="mono text-xs font-medium text-[#64748B] tracking-tight">
                  disponible para proyectos
                </span>
              </motion.div>

              <motion.p
                className="mono text-sm text-[#3A86FF] mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                &lt;/&gt; Backend &amp; Data Engineer
              </motion.p>

              <motion.h1
                className="text-[2.75rem] md:text-[3.75rem] font-extrabold text-[#0E1726] mb-6 leading-[1.02] tracking-[-0.03em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Isaac Tenorio López
              </motion.h1>

              <motion.div
                className="flex items-start gap-4 mb-9 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                <span className="mt-2.5 h-12 w-[3px] rounded-full flex-shrink-0" style={{ background: 'var(--grad-brand)' }} />
                <p className="text-[#64748B] leading-relaxed">
                  Transformo datos en información accionable para el negocio. Especialista en bases de datos,
                  desarrollo backend y automatización de procesos.
                </p>
              </motion.div>

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
                  className="btn-primary"
                  whileHover={{ scale: 1.04, y: -2 }}
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
                  className="btn-ghost"
                  whileHover={{ scale: 1.04, y: -2 }}
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
                  download
                  className="btn-dark"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar CV
                </motion.a>
              </motion.div>

              {/* Stat strip — sustancia real en vez de burbujas */}
              <motion.div
                className="flex flex-wrap gap-x-10 gap-y-6 mt-11 pt-9 border-t border-[#E9EDF5]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {[
                  { num: '+4', label: 'Proyectos\nentregados' },
                  { num: '4', label: 'Certificaciones\ntécnicas' },
                  { num: 'MS', label: 'Práctica en\nMicrosoft' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-extrabold text-[#0E1726] tracking-tight leading-none mb-2">
                      {stat.num}
                    </div>
                    <div className="mono text-[0.7rem] leading-tight text-[#94A3B8] whitespace-pre-line">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — retrato fundido con el fondo */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative w-full max-w-[330px]">
                {/* Halo de marca que se funde con la aurora del fondo */}
                <motion.div
                  className="absolute -inset-10 rounded-full opacity-60 blur-[70px]"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 42%, rgba(58,134,255,0.45) 0%, rgba(123,92,252,0.22) 45%, transparent 72%)',
                  }}
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Anillo punteado decorativo que ecoa el fondo */}
                <div
                  className="absolute inset-2 rounded-[3rem] opacity-60"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, rgba(58,134,255,0.25) 1px, transparent 0)',
                    backgroundSize: '14px 14px',
                    transform: 'rotate(-3deg) scale(1.06)',
                    maskImage: 'linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)',
                    WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)',
                  }}
                />

                {/* Retrato — squircle, sombra tintada difusa, sin marco duro */}
                <motion.div
                  className="relative aspect-[4/5] rounded-[2.75rem] overflow-hidden ring-1 ring-white/70"
                  style={{ boxShadow: '0 40px 80px -28px rgba(58, 99, 240, 0.55)' }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="/images/Isaac.jpg"
                    alt="Isaac Tenorio López"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Tinte de marca arriba para unificar color con la página */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#3A86FF]/12 via-transparent to-transparent" />
                  {/* Fundido inferior + pill de estado */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 glass rounded-2xl px-3.5 py-2.5 shadow-sm">
                    <span className="relative flex h-2 w-2 flex-shrink-0">
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full bg-[#22B8CF] opacity-60"
                        animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22B8CF]" />
                    </span>
                    <span className="text-[0.76rem] font-bold text-[#0E1726]">Abierto a oportunidades</span>
                  </div>
                </motion.div>

                {/* Un solo detalle flotante: stack — apoyado, sutil, legible */}
                <motion.div
                  className="absolute top-6 -right-3 sm:-right-5 glass rounded-2xl px-3.5 py-3 shadow-[var(--shadow-md)]"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                  transition={{ x: { delay: 0.8 }, opacity: { delay: 0.8 }, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
                >
                  <p className="mono text-[0.58rem] text-[#94A3B8] mb-1.5 uppercase tracking-wider">stack</p>
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 text-[0.72rem] font-semibold text-[#0E1726]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]" /> SQL Server
                    </span>
                    <span className="flex items-center gap-2 text-[0.72rem] font-semibold text-[#0E1726]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B63F0]" /> Spring Boot
                    </span>
                    <span className="flex items-center gap-2 text-[0.72rem] font-semibold text-[#0E1726]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22B8CF]" /> Java · C#
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </header>

        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="eyebrow mb-8">Experiencia</h2>

          <div className="flex gap-6">
            <motion.div
              className="flex flex-col items-center pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-3.5 h-3.5 rounded-full ring-4 ring-[#EAF1FF]"
                style={{ background: 'var(--grad-brand)' }}
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="w-0.5 h-full bg-gradient-to-b from-[#C7D7FF] to-transparent mt-2" />
            </motion.div>
            <motion.div
              className="flex-1 card-premium p-7 mb-6"
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="chip chip-brand">Nexsys Centroamérica</span>
                <span className="chip">Departamento de Microsoft</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E1726] mb-1">Desarrollador Backend</h3>
              <p className="text-sm font-medium text-[#3A86FF] mb-3">Práctica Profesional</p>
              <p className="text-[#64748B] leading-relaxed">
                Desarrollo de herramientas internas para optimización de procesos comerciales y participación en iniciativas de automatización orientadas a la mejora operativa de la empresa.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="eyebrow mb-8">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                className="panel-soft p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <h3 className="text-[0.7rem] font-extrabold text-[#3A86FF] uppercase tracking-[0.12em] mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="chip text-[0.72rem] cursor-default"
                      whileHover={{ scale: 1.08, y: -2 }}
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
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="eyebrow mb-8">Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className="card-premium p-6 cursor-pointer overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white shadow-[var(--shadow-glow)]"
                  style={{ background: 'var(--grad-brand)' }}
                  animate={hoveredProject === i ? { rotate: [0, 8, -8, 0] } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-bold text-[#0E1726] mb-2">{project.title}</h3>
                <p className="text-sm text-[#64748B] mb-5 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip text-[0.72rem]">
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
          <h2 className="eyebrow mb-8">Contacto</h2>

          <motion.div
            className="relative overflow-hidden rounded-[24px] p-10 text-center text-white shadow-[var(--shadow-lg)]"
            style={{ background: 'var(--grad-ink)' }}
            whileHover={{ scale: 1.01 }}
          >
            {/* glow accents */}
            <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle, #3A86FF, transparent 70%)' }} />
            <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #9B5CFC, transparent 70%)' }} />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#ffffff' }}>¿Tienes un proyecto en mente?</h3>
              <p className="mb-7" style={{ color: 'rgba(255,255,255,0.78)' }}>Hablemos y construyamos algo grande juntos.</p>
              <motion.a
                href="https://wa.me/50687425031?text=Hola%20Isaac,%20me%20gustaría%20contactarte."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Escríbeme por WhatsApp
              </motion.a>
              <p className="text-white/70 text-sm mt-6">lopeztenorio58@gmail.com</p>
            </div>
          </motion.div>
        </motion.section>

        <footer className="text-center py-8 border-t border-[#E9EDF5]">
          <p className="text-[#64748B]">© 2026 Isaac Tenorio López</p>
          <p className="text-[#94A3B8] text-sm mt-1">Tres Ríos, Costa Rica</p>
        </footer>
      </div>
    </div>
  );
}
