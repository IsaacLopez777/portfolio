import { profile } from '@/lib/db/profile';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#1a1a2e] mb-4">Contacto</h1>
        <p className="text-[#6b7280] mb-10">¿Quieres contactarme? Puedes hacerlo a través de los siguientes medios.</p>

        <div className="bg-[#fafafa] rounded-xl p-8 border border-[#f0f0f5] mb-10">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-xs font-bold text-[#3a86ff] uppercase tracking-wider mb-2">Teléfono</p>
              <a href={`tel:${profile.phone}`} className="text-[#1a1a2e] hover:text-[#3a86ff]">{profile.phone}</a>
            </div>
            <div className="border-x border-[#f0f0f5]">
              <p className="text-xs font-bold text-[#3a86ff] uppercase tracking-wider mb-2">Email</p>
              <a href={`mailto:${profile.email}`} className="text-[#1a1a2e] hover:text-[#3a86ff] break-all text-sm">{profile.email}</a>
            </div>
            <div>
              <p className="text-xs font-bold text-[#3a86ff] uppercase tracking-wider mb-2">Ubicación</p>
              <p className="text-[#1a1a2e]">{profile.location}</p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-xs font-bold text-[#3a86ff] uppercase tracking-[0.2em] mb-6">Referencia</h2>
          <div className="bg-[#fafafa] rounded-xl p-8 border border-[#f0f0f5]">
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#f0f0f5] flex-shrink-0">
                <Image
                  src="/images/Foto generica.png"
                  alt="Referencia Profesional"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e]">Referencia Profesional</h3>
                <p className="text-[#6b7280]">Disponible bajo solicitud</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}