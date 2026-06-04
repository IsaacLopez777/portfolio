import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre mí</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Objetivo Profesional</h2>
        <p className="text-gray-700 leading-relaxed italic bg-gray-100 p-6 rounded-lg border-l-4 border-blue-500">
          Apasionado por el desarrollo de software y la gestión de datos, enfocado en la creación 
          de soluciones eficientes, escalables y orientadas al análisis de información. 
          Especializado en desarrollo backend, bases de datos y automatización de procesos para 
          el negocio, con experiencia práctica en implementación de soluciones reales que 
          optimizan operaciones comerciales y mejoran la eficiencia organizacional.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Experiencia Profesional</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="text-xl font-bold text-gray-900">Práctica Profesional - Empresa de Tecnología</h3>
          <p className="text-gray-600 italic mb-4">Desarrollo de Soluciones</p>
          <div className="mb-4">
            <p className="font-semibold text-gray-700 mb-2">Responsabilidades principales:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Desarrollo de herramientas internas para optimización de procesos comerciales</li>
              <li>Participación en iniciativas de automatización orientadas a la mejora en la generación de propuestas técnicas</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-semibold text-gray-700 mb-1">Logro destacado:</p>
            <p className="text-gray-700">
              Desarrollo de herramientas internas que optimizaron procesos operativos del equipo,
              mejorando la eficiencia y reduciendo tiempos de respuesta en la generación de
              soluciones para clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Formación Académica</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900">Ingeniería en Sistemas de Computación</h3>
          <p className="text-gray-600">Universidad Fidélitas (95%)</p>
          <p className="text-gray-700 mt-2">
            El programa de estudios incluye fundamentos de desarrollo de software, arquitectura 
            de sistemas, gestión de bases de datos y metodologías de ingeniería de software.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Certificaciones Profesionales</h2>
        <ul className="space-y-2">
          <li className="bg-white shadow-md rounded-lg p-4 flex items-start gap-3">
            <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded">CCNA 1</span>
            <div>
              <p className="font-semibold text-gray-900">Cisco CCNA 1</p>
              <p className="text-gray-600 text-sm">Configuración de redes y protocolos de comunicación</p>
            </div>
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 flex items-start gap-3">
            <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded">CCNA 2</span>
            <div>
              <p className="font-semibold text-gray-900">Cisco CCNA 2</p>
              <p className="text-gray-600 text-sm">Routing y conmutación de redes</p>
            </div>
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 flex items-start gap-3">
            <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded">CCNA 3</span>
            <div>
              <p className="font-semibold text-gray-900">Cisco CCNA 3</p>
              <p className="text-gray-600 text-sm">Administración de infraestructura tecnológica</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}