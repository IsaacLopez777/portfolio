'use client';

import { useEffect, useState, useRef } from 'react';

export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1, background: '#F8FAFC' }}
    >
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
    </div>
  );
}