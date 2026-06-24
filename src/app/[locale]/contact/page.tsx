import { profile } from '@/lib/db/profile';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-4">Contacto</h1>
        <p className="text-[#64748B] mb-12 max-w-xl">Estoy a un mensaje de distancia. Elige el canal que prefieras.</p>

        <div className="card-premium p-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[0.7rem] font-extrabold text-[#3A86FF] uppercase tracking-[0.12em] mb-2">Teléfono</p>
              <a href={`tel:${profile.phone}`} className="font-semibold text-[#0E1726] hover:text-[#3A86FF] transition-colors">{profile.phone}</a>
            </div>
            <div className="sm:border-x border-[#E9EDF5]">
              <p className="text-[0.7rem] font-extrabold text-[#3A86FF] uppercase tracking-[0.12em] mb-2">Email</p>
              <a href={`mailto:${profile.email}`} className="font-semibold text-[#0E1726] hover:text-[#3A86FF] transition-colors break-all text-sm">{profile.email}</a>
            </div>
            <div>
              <p className="text-[0.7rem] font-extrabold text-[#3A86FF] uppercase tracking-[0.12em] mb-2">Ubicación</p>
              <p className="font-semibold text-[#0E1726]">{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[24px] p-10 text-center text-white shadow-[var(--shadow-lg)] mb-12" style={{ background: 'var(--grad-ink)' }}>
          <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle, #3A86FF, transparent 70%)' }} />
          <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #9B5CFC, transparent 70%)' }} />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#ffffff' }}>¿Tienes un proyecto en mente?</h2>
            <p className="mb-7" style={{ color: 'rgba(255,255,255,0.78)' }}>Respondo rápido. ¡Hablemos!</p>
            <a
              href="https://wa.me/50687425031?text=Hola%20Isaac,%20me%20gustaría%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>

        <section>
          <h2 className="eyebrow mb-6">Referencia</h2>
          <div className="card-premium p-8">
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 p-[2px]" style={{ background: 'var(--grad-brand)' }}>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src="/images/Foto generica.png"
                    alt="Allan Vega Redondo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0E1726]">Allan Vega Redondo</h3>
                <p className="text-[#64748B]">Ingeniero de Preventa Microsoft</p>
                <p className="text-[#94A3B8] text-sm">Nexsys Centroamérica</p>
                <a href="tel:+50664046149" className="text-[#3A86FF] hover:text-[#2563EB] font-medium text-sm mt-1 inline-block">+506 6404 6149</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}