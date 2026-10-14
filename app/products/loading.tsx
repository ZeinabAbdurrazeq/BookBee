import React from 'react';

export default function Loading() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10 text-center">
        {/* Animated Ink Icon / Mark */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 border-4 border-[var(--ink-black)] flex items-center justify-center animate-ink rotate-45">
            <div className="w-8 h-8 bg-[var(--ink-black)] -rotate-45" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-4xl newspaper-masthead text-[var(--ink-black)] tracking-widest">
            Inking the Archive
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[var(--ink-black)] opacity-30" />
            <p className="text-xs uppercase font-bold tracking-[0.5em] animate-pulse">
              Please Wait
            </p>
            <div className="h-px w-8 bg-[var(--ink-black)] opacity-30" />
          </div>
        </div>

        {/* Period Note */}
        <p className="mt-12 text-[10px] italic opacity-40 uppercase tracking-tighter">
          "Patience is the companion of wisdom." — The Editor
        </p>
      </div>
    </div>
  );
}
