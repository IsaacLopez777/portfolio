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
      style={{ zIndex: -1, background: '#F6F8FC' }}
    >
      {/* Soft color mesh — premium aurora glow */}
      <div
        className="absolute"
        style={{
          top: '-12%',
          left: '-8%',
          width: '46vw',
          height: '46vw',
          background:
            'radial-gradient(circle, rgba(58,134,255,0.20) 0%, rgba(58,134,255,0) 68%)',
          filter: 'blur(20px)',
          animation: 'mesh-drift 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '20%',
          right: '-12%',
          width: '42vw',
          height: '42vw',
          background:
            'radial-gradient(circle, rgba(155,92,252,0.16) 0%, rgba(155,92,252,0) 68%)',
          filter: 'blur(20px)',
          animation: 'mesh-drift 22s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '-16%',
          left: '28%',
          width: '40vw',
          height: '40vw',
          background:
            'radial-gradient(circle, rgba(34,184,207,0.12) 0%, rgba(34,184,207,0) 70%)',
          filter: 'blur(20px)',
          animation: 'mesh-drift 26s ease-in-out infinite',
        }}
      />

      {/* Fine dotted grid for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.16) 1px, transparent 0)',
          backgroundSize: '34px 34px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />
    </div>
  );
}
