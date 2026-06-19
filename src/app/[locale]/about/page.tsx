import { setRequestLocale } from 'next-intl/server';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-12">Sobre mí</h1>

        <section className="mb-16">
          <h2 className="text-xs font-bold text-[#999] uppercase tracking-[0.2em] mb-6">Objetivo</h2>
          <p className="text-[#555] leading-relaxed bg-white p-8 rounded-lg border border-[#e5e5e5]">
            Apasionado por el desarrollo de software y la gestión de datos, enfocado en la creación
            de soluciones eficientes, escalables y orientadas al análisis de información.
            Especializado en desarrollo backend, bases de datos y automatización de procesos para
            el negocio, con experiencia práctica en implementación de soluciones reales que
            optimizan operaciones comerciales y mejoran la eficiencia organizacional.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-bold text-[#999] uppercase tracking-[0.2em] mb-6">Experiencia</h2>
          <div className="bg-white rounded-lg p-8 border border-[#e5e5e5]">
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
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold text-[#999] uppercase tracking-wider mb-2">Responsabilidades</p>
                  <ul className="list-disc list-inside text-[#666] space-y-1">
                    <li>Desarrollo de herramientas internas para optimización de procesos comerciales</li>
                    <li>Participación en iniciativas de automatización orientadas a la mejora operativa</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#999] uppercase tracking-wider mb-2">Logro destacado</p>
                  <p className="text-[#666]">
                    Desarrollo de herramientas internas que optimizaron procesos operativos del equipo,
                    mejorando la eficiencia y reduciendo tiempos de respuesta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-bold text-[#999] uppercase tracking-[0.2em] mb-6">Educación</h2>
          <div className="bg-white rounded-lg p-8 border border-[#e5e5e5]">
            <h3 className="text-lg font-bold text-[#1a1a1a]">Ingeniería en Sistemas de Computación</h3>
            <p className="text-[#1a1a1a] font-medium mt-1">Universidad Fidélitas</p>
            <p className="text-[#888] text-sm mt-1">100% - TCU Pendiente</p>
            <p className="text-[#666] mt-4">
              El programa de estudios incluye fundamentos de desarrollo de software, arquitectura
              de sistemas, gestión de bases de datos y metodologías de ingeniería de software.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-bold text-[#999] uppercase tracking-[0.2em] mb-6">Certificaciones</h2>
          <div className="space-y-3">
            {[
              { name: 'Scrum Master', desc: 'Metodología ágil para gestión de proyectos de software', icon: 'S' },
              { name: 'Cisco CCNA 1', desc: 'Configuración de redes y protocolos de comunicación', icon: 'C1' },
              { name: 'Cisco CCNA 2', desc: 'Routing y conmutación de redes', icon: 'C2' },
              { name: 'Cisco CCNA 3', desc: 'Administración de infraestructura tecnológica', icon: 'C3' },
            ].map((cert, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-[#e5e5e5] flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-white text-xs font-bold">
                  {cert.icon}
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">{cert.name}</p>
                  <p className="text-sm text-[#888]">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}