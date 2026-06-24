import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-12">Sobre <span className="gradient-text">mí</span></h1>

        <section className="mb-16">
          <h2 className="eyebrow mb-8">Objetivo</h2>
          <p className="text-[#475569] leading-relaxed panel-soft p-8 text-lg">
            Apasionado por el desarrollo de software y la gestión de datos, enfocado en la creación
            de soluciones eficientes, escalables y orientadas al análisis de información.
            Especializado en desarrollo backend, bases de datos y automatización de procesos para
            el negocio, con experiencia práctica en implementación de soluciones reales que
            optimizan operaciones comerciales y mejoran la eficiencia organizacional.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="eyebrow mb-8">Experiencia</h2>

          <div className="flex gap-6">
            <div className="flex flex-col items-center pt-2">
              <div className="w-3.5 h-3.5 rounded-full ring-4 ring-[#EAF1FF]" style={{ background: 'var(--grad-brand)' }}></div>
              <div className="w-0.5 h-full bg-gradient-to-b from-[#C7D7FF] to-transparent mt-2"></div>
            </div>
            <div className="flex-1 card-premium p-7 mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="chip chip-brand">Nexsys Centroamérica</span>
                <span className="chip">Departamento de Microsoft</span>
              </div>
              <h3 className="text-xl font-bold text-[#0E1726] mb-1">Desarrollador Backend</h3>
              <p className="text-sm font-medium text-[#3A86FF] mb-4">Práctica Profesional</p>
              <div className="space-y-4">
                <div>
                  <p className="text-[0.7rem] font-extrabold text-[#3A86FF] uppercase tracking-[0.12em] mb-2">Responsabilidades</p>
                  <ul className="list-disc list-inside text-[#475569] space-y-1">
                    <li>Desarrollo de herramientas internas para optimización de procesos comerciales</li>
                    <li>Participación en iniciativas de automatización orientadas a la mejora operativa</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[0.7rem] font-extrabold text-[#3A86FF] uppercase tracking-[0.12em] mb-2">Logro destacado</p>
                  <p className="text-[#475569]">
                    Desarrollo de herramientas internas que optimizaron procesos operativos del equipo,
                    mejorando la eficiencia y reduciendo tiempos de respuesta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="eyebrow mb-8">Educación</h2>
          <div className="card-premium p-8">
            <h3 className="text-xl font-bold text-[#0E1726]">Ingeniería en Sistemas de Computación</h3>
            <p className="text-[#3A86FF] font-semibold mt-1">Universidad Fidélitas</p>
            <p className="text-[#94A3B8] text-sm mt-1">100% - TCU Pendiente</p>
            <p className="text-[#475569] mt-4 leading-relaxed">
              El programa de estudios incluye fundamentos de desarrollo de software, arquitectura
              de sistemas, gestión de bases de datos y metodologías de ingeniería de software.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="eyebrow mb-8">Certificaciones</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Scrum Master', desc: 'Metodología ágil para gestión de proyectos de software', icon: '/images/scrum-logo.jpg' },
              { name: 'Cisco CCNA 1', desc: 'Configuración de redes y protocolos de comunicación', icon: '/images/LOGO_Cisco_CCNA.png' },
              { name: 'Cisco CCNA 2', desc: 'Routing y conmutación de redes', icon: '/images/LOGO_Cisco_CCNA.png' },
              { name: 'Cisco CCNA 3', desc: 'Administración de infraestructura tecnológica', icon: '/images/LOGO_Cisco_CCNA.png' },
            ].map((cert, i) => (
              <div key={i} className="card-premium p-5 flex items-center gap-4">
                <div className="w-14 h-14 relative flex-shrink-0 rounded-xl bg-white border border-[#F1F4FA] p-1.5 shadow-[var(--shadow-xs)]">
                  <Image src={cert.icon} alt={cert.name} fill className="object-contain p-1" />
                </div>
                <div>
                  <p className="font-bold text-[#0E1726]">{cert.name}</p>
                  <p className="text-sm text-[#64748B]">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}