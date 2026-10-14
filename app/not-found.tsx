import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10 space-y-10">
        {/* Simple Vintage Headline */}
        <h1 className="text-4xl md:text-6xl newspaper-masthead text-[var(--ink-black)]">
          I think You are lost🫵, this page is not found;
        </h1>

        {/* Minimal CTA */}
        <div className="pt-4">
          <Link 
            href="/" 
            className="px-10 py-4 bg-[var(--ink-black)] text-[var(--paper-bg)] font-bold text-xs uppercase tracking-[0.4em] hover:bg-transparent hover:text-[var(--ink-black)] border-2 border-[var(--ink-black)] transition-all duration-500"
          >
            Retreat to the Front Page
          </Link>
        </div>
      </div>
      
      {/* Subtle Ornament */}
      <div className="mt-20 opacity-20">
        <div className="w-16 h-[1px] bg-[var(--ink-black)]" />
      </div>
    </div>
  );
}
