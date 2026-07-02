'use client';

import { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1, background: '#FBF6EE' }}
    >
      {/* Círculo rubor ciruela plano — esquina superior derecha */}
      <div
        className="absolute rounded-full"
        style={{
          top: '-14%',
          right: '-10%',
          width: '38vw',
          height: '38vw',
          minWidth: '340px',
          minHeight: '340px',
          background: '#F5E4EC',
          animation: 'drift-slow 24s ease-in-out infinite',
        }}
      />

      {/* Medio arco miel — plano, asoma por la izquierda */}
      <div
        className="absolute rounded-full"
        style={{
          top: '34%',
          left: '-16%',
          width: '26vw',
          height: '26vw',
          minWidth: '240px',
          minHeight: '240px',
          background: '#F7EDD4',
          animation: 'drift-slow 30s ease-in-out infinite reverse',
        }}
      />

      {/* Anillo ciruela fino — decorativo */}
      <div
        className="absolute rounded-full"
        style={{
          top: '8%',
          left: '12%',
          width: '180px',
          height: '180px',
          border: '1.5px solid rgba(142, 66, 102, 0.18)',
        }}
      />

      {/* Círculo oliva pequeño — abajo derecha */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: '6%',
          right: '8%',
          width: '120px',
          height: '120px',
          background: '#EEF1DC',
        }}
      />

      {/* Anillo miel — abajo izquierda */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: '-4%',
          left: '20%',
          width: '220px',
          height: '220px',
          border: '1.5px solid rgba(221, 161, 46, 0.22)',
        }}
      />

      {/* Grano de papel — textura sutil que se siente cara */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.035,
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
}
