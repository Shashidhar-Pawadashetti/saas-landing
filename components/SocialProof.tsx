"use client";

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SocialProof() {
  const { ref, isVisible } = useScrollAnimation();
  const brands = [
    { name: 'Acme Corp', logo: 'ACME' },
    { name: 'Quantum', logo: 'Quantum' },
    { name: 'Echo', logo: 'ECHO' },
    { name: 'Celestia', logo: 'Celestia' },
    { name: 'Pulse', logo: 'PULSE' },
    { name: 'Apex', logo: 'ΛPEX' },
  ];

  return (
    <section ref={ref} className={`border-y border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-900/50 py-12 sm:py-16 transition-colors duration-300 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Trusted by innovative teams worldwide
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-24">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="flex items-center justify-center text-xl sm:text-2xl font-black tracking-tighter text-slate-400 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:text-indigo-600"
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
