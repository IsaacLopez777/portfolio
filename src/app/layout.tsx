import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Isaac Tenorio López - Desarrollador de Software',
  description: 'Portafolio profesional de Isaac Tenorio López - Informático, Desarrollador de Software y Especialista en Bases de Datos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}