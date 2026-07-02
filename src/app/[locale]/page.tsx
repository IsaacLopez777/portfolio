'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/* Iconos SVG — trazo consistente, sin librerías */
const icons = {
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  layers: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  ),
  database: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  cloud: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  terminal: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  warehouse: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  cart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
  building: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75m3 3h.75M6.75 21v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM12.75 3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V3.375z" />
    </svg>
  ),
  briefcase: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m-12 12.006c-.44-.34-.75-.86-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  ),
};

export default function HomePage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const skills = [
    { category: 'Lenguajes', icon: icons.code, tile: 'icon-tile-clay', dot: '#8E4266', items: ['JavaScript', 'Java', 'C#', 'SQL'] },
    { category: 'Frameworks', icon: icons.layers, tile: 'icon-tile-honey', dot: '#DDA12E', items: ['Spring Boot', '.NET'] },
    { category: 'Bases de Datos', icon: icons.database, tile: 'icon-tile-olive', dot: '#7C8C46', items: ['SQL Server', 'Oracle', 'MySQL'] },
    { category: 'Cloud', icon: icons.cloud, tile: 'icon-tile-clay', dot: '#8E4266', items: ['AWS', 'Azure', 'Firebase'] },
    { category: 'DevOps', icon: icons.terminal, tile: 'icon-tile-honey', dot: '#DDA12E', items: ['Despliegues', 'Docker', 'CI/CD'] },
  ];

  const projects = [
    {
      id: 1,
      title: 'Data Warehouse Santory',
      desc: 'Desarrollo completo de Data Warehouse en SQL Server con ETL, modelado dimensional y dashboards en Power BI.',
      tech: ['SQL Server', 'ETL', 'Power BI'],
      icon: icons.warehouse,
      tile: 'icon-tile-clay',
    },
    {
      id: 2,
      title: 'Tienda en Línea',
      desc: 'Plataforma de comercio electrónico con Spring Boot, Thymeleaf y MySQL. Carrito de compras, autenticación y pagos seguros.',
      tech: ['Spring Boot', 'Firebase', 'MySQL'],
      icon: icons.cart,
      tile: 'icon-tile-honey',
    },
    {
      id: 3,
      title: 'Sistema de Gestión Hotelera',
      desc: 'Base de datos Oracle con procedimientos almacenados, vistas especializadas y consultas avanzadas.',
      tech: ['Oracle', 'PL/SQL'],
      icon: icons.building,
      tile: 'icon-tile-olive',
    },
    {
      id: 4,
      title: 'Gestión Comercial',
      desc: 'Sistema integral para gestión de clientes, ventas y productos con automatización de procesos.',
      tech: ['Oracle', 'SQL'],
      icon: icons.chart,
      tile: 'icon-tile-clay',
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
                className="inline-flex items-center gap-2.5 mb-8 rounded-full border border-[#EBE1CF] bg-[#FFFEFB] px-3.5 py-1.5 shadow-[var(--shadow-xs)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <span className="relative flex h-2 w-2">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-[#7C8C46] opacity-60"
                    animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C8C46]" />
                </span>
                <span className="mono text-xs font-medium text-[#5D5245] tracking-tight">
                  disponible para proyectos
                </span>
              </motion.div>

              <motion.p
                className="eyebrow mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                Backend &amp; Data Engineer
              </motion.p>

              <motion.h1
                className="text-[2.9rem] md:text-[4rem] mb-6 leading-[1.05]"
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
                <span className="mt-2.5 h-12 w-[3px] rounded-full flex-shrink-0 bg-[#8E4266]" />
                <p className="text-[#5D5245] leading-relaxed">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12m0 0l-4-4m4 4l4-4m-9 8h10" />
                  </svg>
                  Descargar CV
                </motion.a>
              </motion.div>

              {/* Franja de datos reales */}
              <motion.div
                className="flex flex-wrap gap-x-10 gap-y-6 mt-11 pt-9 border-t border-[#EBE1CF]"
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
                    <div className="serif text-[2.1rem] font-semibold text-[#2D2318] tracking-tight leading-none mb-2">
                      {stat.num}
                    </div>
                    <div className="mono text-[0.7rem] leading-tight text-[#9A8D7B] whitespace-pre-line">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* DERECHA — retrato en arco editorial */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative w-full max-w-[330px]">
                {/* Círculo durazno plano detrás, desplazado */}
                <div
                  className="absolute -top-8 -left-10 w-52 h-52 rounded-full"
                  style={{ background: '#F5E2EB' }}
                />
                {/* Contorno de arco terracota desplazado — eco del retrato */}
                <div
                  className="absolute inset-0 translate-x-4 translate-y-4 border-[1.5px] border-[#8E4266]/30"
                  style={{ borderRadius: '999px 999px 28px 28px' }}
                />

                {/* Retrato — arco editorial */}
                <motion.div
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{
                    borderRadius: '999px 999px 28px 28px',
                    boxShadow: 'var(--shadow-lg)',
                    border: '4px solid #FFFEFB',
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="/images/Isaac.jpg"
                    alt="Isaac Tenorio López"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 glass rounded-full px-3.5 py-2.5 shadow-sm">
                    <span className="relative flex h-2 w-2 flex-shrink-0">
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full bg-[#7C8C46] opacity-60"
                        animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C8C46]" />
                    </span>
                    <span className="text-[0.76rem] font-bold text-[#2D2318]">Abierto a oportunidades</span>
                  </div>
                </motion.div>

                {/* Asterisco sol — motivo de marca girando lento */}
                <motion.span
                  className="absolute -top-3 right-6 text-3xl text-[#DDA12E] animate-spin-slow select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  ✳
                </motion.span>

                {/* Tarjeta flotante: stack */}
                <motion.div
                  className="absolute top-16 -right-3 sm:-right-6 glass rounded-2xl px-3.5 py-3 shadow-[var(--shadow-md)]"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                  transition={{ x: { delay: 0.8 }, opacity: { delay: 0.8 }, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
                >
                  <p className="mono text-[0.58rem] text-[#9A8D7B] mb-1.5 uppercase tracking-wider">stack</p>
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 text-[0.72rem] font-semibold text-[#2D2318]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E4266]" /> SQL Server
                    </span>
                    <span className="flex items-center gap-2 text-[0.72rem] font-semibold text-[#2D2318]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DDA12E]" /> Spring Boot
                    </span>
                    <span className="flex items-center gap-2 text-[0.72rem] font-semibold text-[#2D2318]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C8C46]" /> Java · C#
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
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">Trayectoria</p>
              <h2 className="text-3xl md:text-4xl">Experiencia</h2>
            </div>
            <span className="section-num">/ 01</span>
          </div>

          <div className="flex gap-6">
            <motion.div
              className="flex flex-col items-center pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-3.5 h-3.5 rounded-full ring-4 ring-[#F3E0EB] bg-[#8E4266]"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="w-0.5 h-full bg-gradient-to-b from-[#EBD9C4] to-transparent mt-2" />
            </motion.div>
            <motion.div
              className="flex-1 card-premium p-7 mb-6"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <span className="icon-tile icon-tile-clay mt-1 hidden sm:inline-flex">{icons.briefcase}</span>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="chip chip-brand">Nexsys Centroamérica</span>
                    <span className="chip">Departamento de Microsoft</span>
                  </div>
                  <h3 className="text-xl mb-1">Desarrollador Backend</h3>
                  <p className="text-sm font-semibold text-[#8E4266] mb-3">Práctica Profesional</p>
                  <p className="text-[#5D5245] leading-relaxed">
                    Desarrollo de herramientas internas para optimización de procesos comerciales y participación en iniciativas de automatización orientadas a la mejora operativa de la empresa.
                  </p>
                </div>
              </div>
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
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">Herramientas</p>
              <h2 className="text-3xl md:text-4xl">Skills</h2>
            </div>
            <span className="section-num">/ 02</span>
          </div>

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
                <span className={`icon-tile ${group.tile} mb-3.5`}>{group.icon}</span>
                <h3 className="text-[0.95rem] font-semibold mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="chip text-[0.72rem] cursor-default"
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      <span className="chip-dot" style={{ background: group.dot }} />
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
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">Trabajo seleccionado</p>
              <h2 className="text-3xl md:text-4xl">Proyectos</h2>
            </div>
            <span className="section-num">/ 03</span>
          </div>

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
                <motion.span
                  className={`icon-tile ${project.tile} mb-4`}
                  animate={hoveredProject === i ? { rotate: [0, 8, -8, 0] } : {}}
                  transition={{ duration: 0.4 }}
                >
                  {project.icon}
                </motion.span>
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-[#5D5245] mb-5 leading-relaxed">{project.desc}</p>
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
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">Hablemos</p>
              <h2 className="text-3xl md:text-4xl">Contacto</h2>
            </div>
            <span className="section-num">/ 04</span>
          </div>

          <motion.div
            className="panel-cta p-10 text-center"
            whileHover={{ scale: 1.01 }}
          >
            {/* Formas planas decorativas — nada de degradados */}
            <div className="absolute -top-14 -right-10 w-48 h-48 rounded-full" style={{ background: 'rgba(255, 244, 234, 0.12)' }} />
            <div className="absolute -bottom-16 -left-8 w-44 h-44 rounded-full" style={{ background: 'rgba(255, 244, 234, 0.09)' }} />
            <span className="absolute top-6 left-8 text-2xl select-none" style={{ color: 'rgba(255, 244, 234, 0.35)' }}>✳</span>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl mb-3" style={{ color: '#FFF9F1' }}>¿Tienes un proyecto en mente?</h3>
              <p className="mb-7" style={{ color: 'rgba(255, 244, 234, 0.85)' }}>Hablemos y construyamos algo grande juntos.</p>
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
              <p className="text-sm mt-6" style={{ color: 'rgba(255, 244, 234, 0.75)' }}>lopeztenorio58@gmail.com</p>
            </div>
          </motion.div>
        </motion.section>

        <footer className="text-center py-8 border-t border-[#EBE1CF]">
          <p className="text-[#5D5245]">© 2026 Isaac Tenorio López</p>
          <p className="text-[#9A8D7B] text-sm mt-1">Tres Ríos, Costa Rica</p>
        </footer>
      </div>
    </div>
  );
}
