import React, { useState } from 'react';
import { HOTSPOTS, Hotspot } from '../data/iksData';
import { ArrowDown } from 'lucide-react';
import { LotusIcon } from './LotusIcon';

interface HeritageHeroProps {
  onSelectHotspot: (hotspot: Hotspot) => void;
  onExplorePillars: () => void;
}

export const HeritageHero: React.FC<HeritageHeroProps> = ({
  onSelectHotspot,
  onExplorePillars,
}) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('rishi');
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);

  const activeHotspot = HOTSPOTS.find((h) => h.id === activeHotspotId) || HOTSPOTS[0];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#070a10]">
      {/* Visual Canvas Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col items-center">
        
        {/* Top Text Header echoing the exact styling in the user's image */}
        <div className="text-center z-20 mb-4">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="text-amber-400 text-sm font-serif">✦</span>
            <p className="font-script text-2xl md:text-3xl lg:text-4xl text-amber-200 tracking-wide">
              Lets dive into the world of
            </p>
            <span className="text-amber-400 text-sm font-serif">✦</span>
          </div>

          {/* Lotus Emblem with horizontal decorative wings */}
          <div className="flex items-center justify-center gap-3 my-2 text-amber-400">
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-amber-400/60" />
            <LotusIcon className="w-7 h-7 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-amber-400/60" />
          </div>

          {/* Stately Indian Knowledge System Title */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            Indian Knowledge System
          </h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
        </div>

        {/* The Central Visual Stage reproducing the uploaded artwork with interactive hotspots */}
        <div className="relative w-full max-w-5xl rounded-xl overflow-hidden border border-amber-500/20 shadow-2xl bg-black/60 group">
          
          {/* Main Visual Image Asset directly referenced from local workspace */}
          <div className="relative aspect-[16/14] sm:aspect-[16/12] md:aspect-[16/10] w-full">
            <img
              src="/assets/aistudio/Exploring_India_s_Knowledge_Heritage_interface_1__6c2922a8.jpg"
              alt="Exploring India's Knowledge System - Ancient Sages, Gopuram Architecture, Konark Sun Wheel, Nataraja Dance, and Modern Students under a Spotlight"
              className="w-full h-full object-cover object-center select-none"
              referrerPolicy="no-referrer"
            />

            {/* Dynamic Spotlight Overlay highlighting active anchor */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-700"
              style={{
                background: `radial-gradient(circle 180px at ${activeHotspot.xPercent}% ${activeHotspot.yPercent}%, rgba(251, 191, 36, 0.22) 0%, rgba(245, 158, 11, 0.08) 50%, rgba(7, 10, 16, 0.45) 100%)`,
              }}
            />

            {/* Hotspot Markers placed over the artwork */}
            {HOTSPOTS.map((hotspot) => {
              const isActive = activeHotspotId === hotspot.id;
              const isHovered = hoveredHotspotId === hotspot.id;

              return (
                <div
                  key={hotspot.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                  style={{
                    left: `${hotspot.xPercent}%`,
                    top: `${hotspot.yPercent}%`,
                  }}
                  onMouseEnter={() => setHoveredHotspotId(hotspot.id)}
                  onMouseLeave={() => setHoveredHotspotId(null)}
                >
                  <button
                    onClick={() => {
                      setActiveHotspotId(hotspot.id);
                      onSelectHotspot(hotspot);
                    }}
                    aria-label={`Explore ${hotspot.title}`}
                    className={`relative flex items-center justify-center transition-all duration-300 focus-visible:outline-none ${
                      isActive
                        ? 'scale-125'
                        : isHovered
                        ? 'scale-115'
                        : 'scale-100 hover:scale-110'
                    }`}
                  >
                    {/* Pulsing beacon waves */}
                    <span
                      className={`absolute w-8 h-8 rounded-full transition-opacity duration-500 ${
                        isActive
                          ? 'bg-amber-400/40 animate-ping'
                          : 'bg-amber-300/20'
                      }`}
                    />
                    
                    {/* Inner core circle */}
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors shadow-lg ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 border-white ring-2 ring-amber-300/50'
                          : 'bg-slate-900/90 text-amber-200 border-amber-400/70 hover:bg-amber-500 hover:text-slate-950'
                      }`}
                    >
                      {hotspot.id === 'rishi' && '१'}
                      {hotspot.id === 'temple' && '२'}
                      {hotspot.id === 'wheel' && '३'}
                      {hotspot.id === 'dance' && '४'}
                      {hotspot.id === 'astronomy' && '५'}
                      {hotspot.id === 'ecology' && '६'}
                      {hotspot.id === 'projector' && '७'}
                    </span>
                  </button>

                  {/* Tooltip on hover */}
                  {(isHovered || isActive) && (
                    <div className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-slate-950/95 border border-amber-400/40 rounded shadow-xl text-center pointer-events-none z-40 backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                        {hotspot.category}
                      </p>
                      <p className="text-xs font-serif font-bold text-slate-100 leading-snug">
                        {hotspot.title}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Themed "Dive Inside" Portal Button */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
              <button
                onClick={onExplorePillars}
                className="group relative flex items-center gap-2.5 px-6 py-2.5 sm:px-7 sm:py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-serif font-bold text-xs sm:text-sm tracking-widest uppercase rounded-full shadow-[0_0_25px_rgba(251,191,36,0.65)] hover:shadow-[0_0_35px_rgba(251,191,36,0.9)] border border-amber-200/90 transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-amber-300 whitespace-nowrap cursor-pointer"
              >
                <LotusIcon className="w-4 h-4 text-slate-950 shrink-0" />
                <span className="font-display font-bold">Dive Inside</span>
                <ArrowDown className="w-4 h-4 text-slate-950 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Sector Selector Strip below the hero canvas */}
        <div className="w-full max-w-5xl mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {HOTSPOTS.map((h, index) => {
            const isSelected = activeHotspotId === h.id;
            return (
              <button
                key={h.id}
                onClick={() => {
                  setActiveHotspotId(h.id);
                  onSelectHotspot(h);
                }}
                className={`p-2 rounded text-left transition-all border ${
                  isSelected
                    ? 'bg-amber-950/60 border-amber-400/80 text-white shadow-md ring-1 ring-amber-400/30'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] tracking-widest uppercase font-mono text-amber-400/80">
                  Anchor 0{index + 1}
                </div>
                <div className="text-xs font-serif font-semibold text-slate-200 truncate mt-0.5">
                  {h.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Overview Banner linking to deeper exploration */}
        <div className="w-full max-w-5xl mt-6 p-4 sm:p-5 rounded-lg border border-amber-900/40 bg-gradient-to-r from-amber-950/20 via-slate-900/40 to-amber-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-serif text-lg text-amber-100 font-semibold">
              The Living Matrix of Ancient Indian Sciences
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              From Baudhayana's 800 BCE geometry and Sushruta's surgery to Madhava's infinite series calculus and Panini's formal grammar, explore primary manuscripts and interactive scientific proofs.
            </p>
          </div>
          <button
            onClick={onExplorePillars}
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs tracking-wider uppercase rounded-md transition-colors whitespace-nowrap shadow-md"
          >
            Explore 6 Knowledge Pillars
          </button>
        </div>

      </div>
    </section>
  );
};
