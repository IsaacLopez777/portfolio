import { profile } from '@/lib/db/profile';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Contacto</h1>
      <p className="text-slate-500 mb-8">
        ¿Quieres contactarme? Puedes hacerlo a través de los siguientes medios.
      </p>

      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
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
    </div>
  );
}