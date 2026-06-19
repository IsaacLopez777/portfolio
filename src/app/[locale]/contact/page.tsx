import { profile } from '@/lib/db/profile';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Contacto</h1>
      <p className="text-slate-500 mb-8">
        ¿Quieres contactarme? Puedes hacerlo a través de los siguientes medios.
      </p>

      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-8">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Teléfono</p>
            <a href={`tel:${profile.phone}`} className="text-sm text-slate-700 hover:text-slate-900">{profile.phone}</a>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</p>
            <a href={`mailto:${profile.email}`} className="text-sm text-slate-700 hover:text-slate-900 break-all">{profile.email}</a>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Ubicación</p>
            <p className="text-sm text-slate-700">{profile.location}</p>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
          Referencia Profesional
        </h2>
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-slate-200 flex-shrink-0">
              <Image
                src="/Allan.jpg"
                alt="Allan Vega Redondo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">Allan Vega Redondo</h3>
              <p className="text-sm text-slate-500">Ingeniero de Preventa Microsoft</p>
              <p className="text-sm text-slate-500">Nexsys Centroamérica</p>
              <a href="tel:+50664046149" className="text-sm text-slate-700 hover:text-slate-900 mt-1 inline-block">+506 6404 6149</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}