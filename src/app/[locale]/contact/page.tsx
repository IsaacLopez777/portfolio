import { profile } from '@/lib/db/profile';
import Image from 'next/image';

export default function ContactPage() {
  const channels = [
    {
      label: 'Teléfono',
      tile: 'icon-tile-clay',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      content: (
        <a href={`tel:${profile.phone}`} className="font-semibold text-[#2D2318] hover:text-[#8E4266] transition-colors">
          {profile.phone}
        </a>
      ),
    },
    {
      label: 'Email',
      tile: 'icon-tile-honey',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      content: (
        <a href={`mailto:${profile.email}`} className="font-semibold text-[#2D2318] hover:text-[#8E4266] transition-colors break-all text-sm">
          {profile.email}
        </a>
      ),
    },
    {
      label: 'Ubicación',
      tile: 'icon-tile-olive',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      content: <p className="font-semibold text-[#2D2318]">{profile.location}</p>,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl mb-4">Contacto</h1>
        <p className="text-[#5D5245] mb-12 max-w-xl">Estoy a un mensaje de distancia. Elige el canal que prefieras.</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {channels.map((channel) => (
            <div key={channel.label} className="card-premium p-6 text-center">
              <span className={`icon-tile ${channel.tile} mb-3`}>{channel.icon}</span>
              <p className="text-[0.7rem] font-extrabold text-[#9A8D7B] uppercase tracking-[0.12em] mb-2">{channel.label}</p>
              {channel.content}
            </div>
          ))}
        </div>

        <div className="panel-cta p-10 text-center mb-12">
          <div className="absolute -top-14 -right-10 w-48 h-48 rounded-full" style={{ background: 'rgba(255, 244, 234, 0.12)' }} />
          <div className="absolute -bottom-16 -left-8 w-44 h-44 rounded-full" style={{ background: 'rgba(255, 244, 234, 0.09)' }} />
          <span className="absolute top-6 left-8 text-2xl select-none" style={{ color: 'rgba(255, 244, 234, 0.35)' }}>✳</span>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl mb-3" style={{ color: '#FFF9F1' }}>¿Tienes un proyecto en mente?</h2>
            <p className="mb-7" style={{ color: 'rgba(255, 244, 234, 0.85)' }}>Respondo rápido. ¡Hablemos!</p>
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
          <div className="flex items-baseline justify-between mb-6">
            <p className="eyebrow">Referencia</p>
          </div>
          <div className="card-premium p-8">
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 p-[2px] bg-[#8E4266]">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#FFFEFB]">
                  <Image
                    src="/images/Foto generica.png"
                    alt="Allan Vega Redondo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2D2318]">Allan Vega Redondo</h3>
                <p className="text-[#5D5245]">Ingeniero de Preventa Microsoft</p>
                <p className="text-[#9A8D7B] text-sm">Nexsys Centroamérica</p>
                <a href="tel:+50664046149" className="text-[#8E4266] hover:text-[#6F3050] font-medium text-sm mt-1 inline-block">+506 6404 6149</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
