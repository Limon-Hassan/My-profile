'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            setLoading(false);
          }, 300);
        });
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-white/10 border-t-cyan-400" />

        <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
      </div>
    </div>
  );
}
