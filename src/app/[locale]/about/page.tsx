import { setRequestLocale } from 'next-intl/server';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Sobre mí</h1>

      <section className="mb-12">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Objetivo Profesional</h2>
        <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-200">
          Apasionado por el desarrollo de software y la gestión de datos, enfocado en la creación
          de soluciones eficientes, escalables y orientadas al análisis de información.
          Especializado en desarrollo backend, bases de datos y automatización de procesos para
          el negocio, con experiencia práctica en implementación de soluciones reales que
          optimizan operaciones comerciales y mejoran la eficiencia organizacional.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
          Experiencia Profesional
        </h2>
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-lg font-bold text-slate-600">
              E
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">Empresa de Tecnología</h3>
              <p className="text-sm text-slate-600">Desarrollador Backend - Práctica Profesional</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Responsabilidades</p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>Desarrollo de herramientas internas para optimización de procesos comerciales</li>
              <li>Participación en iniciativas de automatización orientadas a la mejora operativa</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Logro destacado</p>
            <p className="text-sm text-slate-600">
              Desarrollo de herramientas internas que optimizaron procesos operativos del equipo,
              mejorando la eficiencia y reduciendo tiempos de respuesta.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
          Formación Académica
        </h2>
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Ingeniería en Sistemas de Computación</h3>
          <p className="text-sm text-slate-600 mt-1">Universidad Fidélitas (100% - TCU Pendiente)</p>
          <p className="text-sm text-slate-500 mt-3">
            El programa de estudios incluye fundamentos de desarrollo de software, arquitectura
            de sistemas, gestión de bases de datos y metodologías de ingeniería de software.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
          Certificaciones
        </h2>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <p className="font-semibold text-slate-900">Cisco CCNA 1</p>
            <p className="text-sm text-slate-500">Configuración de redes y protocolos de comunicación</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <p className="font-semibold text-slate-900">Cisco CCNA 2</p>
            <p className="text-sm text-slate-500">Routing y conmutación de redes</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <p className="font-semibold text-slate-900">Cisco CCNA 3</p>
            <p className="text-sm text-slate-500">Administración de infraestructura tecnológica</p>
          </div>
        </div>
      </section>
    </div>
  );
}