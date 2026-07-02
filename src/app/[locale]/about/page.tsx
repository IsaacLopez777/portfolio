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
        <h1 className="text-5xl md:text-6xl mb-12">Sobre mí</h1>

        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-8">
            <p className="eyebrow">Objetivo</p>
            <span className="section-num">/ 01</span>
          </div>
          <div className="panel-soft p-8 flex items-start gap-5">
            <span className="icon-tile icon-tile-honey mt-1 hidden sm:inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </span>
            <p className="text-[#5D5245] leading-relaxed text-lg">
              Apasionado por el desarrollo de software y la gestión de datos, enfocado en la creación
              de soluciones eficientes, escalables y orientadas al análisis de información.
              Especializado en desarrollo backend, bases de datos y automatización de procesos para
              el negocio, con experiencia práctica en implementación de soluciones reales que
              optimizan operaciones comerciales y mejoran la eficiencia organizacional.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <p className="eyebrow">Experiencia</p>
            <span className="section-num">/ 02</span>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center pt-2">
              <div className="w-3.5 h-3.5 rounded-full ring-4 ring-[#F3E0EB] bg-[#8E4266]"></div>
              <div className="w-0.5 h-full bg-gradient-to-b from-[#EBD9C4] to-transparent mt-2"></div>
            </div>
            <div className="flex-1 card-premium p-7 mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="chip chip-brand">Nexsys Centroamérica</span>
                <span className="chip">Departamento de Microsoft</span>
              </div>
              <h3 className="text-xl mb-1">Desarrollador Backend</h3>
              <p className="text-sm font-semibold text-[#8E4266] mb-4">Práctica Profesional</p>
              <div className="space-y-4">
                <div>
                  <p className="text-[0.7rem] font-extrabold text-[#B9821F] uppercase tracking-[0.12em] mb-2">Responsabilidades</p>
                  <ul className="list-disc list-inside text-[#5D5245] space-y-1">
                    <li>Desarrollo de herramientas internas para optimización de procesos comerciales</li>
                    <li>Participación en iniciativas de automatización orientadas a la mejora operativa</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[0.7rem] font-extrabold text-[#B9821F] uppercase tracking-[0.12em] mb-2">Logro destacado</p>
                  <p className="text-[#5D5245]">
                    Desarrollo de herramientas internas que optimizaron procesos operativos del equipo,
                    mejorando la eficiencia y reduciendo tiempos de respuesta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <p className="eyebrow">Educación</p>
            <span className="section-num">/ 03</span>
          </div>
          <div className="card-premium p-8 flex items-start gap-5">
            <span className="icon-tile icon-tile-olive mt-1 hidden sm:inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </span>
            <div>
              <h3 className="text-xl">Ingeniería en Sistemas de Computación</h3>
              <p className="text-[#8E4266] font-semibold mt-1">Universidad Fidélitas</p>
              <p className="text-[#9A8D7B] text-sm mt-1">100% - TCU Pendiente</p>
              <p className="text-[#5D5245] mt-4 leading-relaxed">
                El programa de estudios incluye fundamentos de desarrollo de software, arquitectura
                de sistemas, gestión de bases de datos y metodologías de ingeniería de software.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <p className="eyebrow">Certificaciones</p>
            <span className="section-num">/ 04</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Scrum Master', desc: 'Metodología ágil para gestión de proyectos de software', icon: '/images/scrum-logo.jpg' },
              { name: 'Cisco CCNA 1', desc: 'Configuración de redes y protocolos de comunicación', icon: '/images/LOGO_Cisco_CCNA.png' },
              { name: 'Cisco CCNA 2', desc: 'Routing y conmutación de redes', icon: '/images/LOGO_Cisco_CCNA.png' },
              { name: 'Cisco CCNA 3', desc: 'Administración de infraestructura tecnológica', icon: '/images/LOGO_Cisco_CCNA.png' },
            ].map((cert, i) => (
              <div key={i} className="card-premium p-5 flex items-center gap-4">
                <div className="w-14 h-14 relative flex-shrink-0 rounded-xl bg-white border border-[#F3ECDE] p-1.5 shadow-[var(--shadow-xs)]">
                  <Image src={cert.icon} alt={cert.name} fill className="object-contain p-1" />
                </div>
                <div>
                  <p className="font-bold text-[#2D2318]">{cert.name}</p>
                  <p className="text-sm text-[#5D5245]">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
