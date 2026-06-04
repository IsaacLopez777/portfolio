import { Card } from '@/components/ui';
import { profile } from '@/lib/db/profile';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
      <p className="text-gray-600 mb-8">
        ¿Quieres contactarme? Puedes hacerlo a través de los siguientes medios.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <Card className="p-6">
          <p className="font-semibold text-gray-900 mb-2">Teléfono</p>
          <a href={`tel:${profile.phone}`} className="text-blue-600 hover:underline break-all">{profile.phone}</a>
        </Card>
        <Card className="p-6">
          <p className="font-semibold text-gray-900 mb-2">Email</p>
          <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline break-all text-sm">{profile.email}</a>
        </Card>
        <Card className="p-6">
          <p className="font-semibold text-gray-900 mb-2">Ubicación</p>
          <p className="text-blue-600">{profile.location}</p>
        </Card>
      </div>
    </div>
  );
}