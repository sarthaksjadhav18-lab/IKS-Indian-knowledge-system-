import React, { useState } from 'react';
import { KNOWLEDGE_PILLARS, KnowledgePillar } from '../data/iksData';
import { BookOpen, Award, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export const PillarExplorer: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('ganita');

  const selectedPillar =
    KNOWLEDGE_PILLARS.find((p) => p.id === selectedPillarId) || KNOWLEDGE_PILLARS[0];

  return (
    <section id="pillars" className="py-16 bg-[#070a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            The Sixfold Intellectual Disciplines
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
            Core Pillars of the Indian Knowledge System
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            A comprehensive compendium of empirical treatises, surgical manuals, astronomical tables, and formal linguistic models spanning three millennia.
          </p>
        </div>

        {/* Horizontal Navigation Tabs for the 6 Pillars */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {KNOWLEDGE_PILLARS.map((pillar) => {
            const isActive = selectedPillarId === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-bold'
                    : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{pillar.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase */}
        <div className="mt-8 bg-slate-950/80 border border-amber-900/40 rounded-xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
                <span>{selectedPillar.sanskritName}</span>
                <span aria-hidden="true">·</span>
                <span>Era: {selectedPillar.era}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {selectedPillar.name}
              </h3>
              <p className="text-sm text-amber-200/90 font-medium mt-1">
                {selectedPillar.tagline}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mt-6 max-w-4xl">
            {selectedPillar.description}
          </p>

          {/* Canonical Sanskrit Verse Box */}
          <div className="mt-6 p-5 rounded-lg bg-amber-950/20 border border-amber-800/40 relative overflow-hidden">
            <div className="absolute top-2 right-3 text-3xl text-amber-500/20 font-serif select-none">
              ॐ
            </div>
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              Primary Treatise Inscription ({selectedPillar.verse.source})
            </p>
            <p className="font-serif text-base sm:text-lg text-amber-100 italic leading-relaxed">
              "{selectedPillar.verse.sanskrit}"
            </p>
            <p className="text-xs text-amber-300/80 font-mono mt-1">
              {selectedPillar.verse.transliteration}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans border-t border-amber-900/30 pt-2">
              <strong className="text-amber-300">Scholarly Translation:</strong> {selectedPillar.verse.translation}
            </p>
          </div>

          {/* Two-Column Breakdown: Treatises vs. Breakthroughs */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: Foundational Treatises */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-bold mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Foundational Manuscripts & Treatises</span>
              </div>

              <div className="space-y-3">
                {selectedPillar.treatises.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg hover:border-amber-500/40 transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-serif font-bold text-base text-amber-100">
                        {t.title}
                      </h4>
                      <span className="text-xs text-slate-400 font-mono shrink-0">
                        {t.date}
                      </span>
                    </div>
                    <div className="text-xs text-amber-400/90 font-medium mt-0.5">
                      Authored by {t.author}
                    </div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {t.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Groundbreaking Innovations */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-bold mb-4">
                <Award className="w-4 h-4" />
                <span>Enduring Scientific Breakthroughs</span>
              </div>

              <div className="space-y-3">
                {selectedPillar.breakthroughs.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg hover:border-amber-500/40 transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-serif font-bold text-base text-white">
                        {b.title}
                      </h4>
                      {b.sanskritTerm && (
                        <span className="text-xs text-amber-400/90 font-serif shrink-0">
                          {b.sanskritTerm}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      {b.description}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-slate-800 text-xs text-slate-400">
                      <strong className="text-amber-300">Global Legacy:</strong> {b.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
