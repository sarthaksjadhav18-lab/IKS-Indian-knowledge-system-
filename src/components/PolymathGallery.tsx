import React, { useState } from 'react';
import { POLYMATHS, Polymath } from '../data/iksData';
import { User, Scroll, CheckCircle2 } from 'lucide-react';

export const PolymathGallery: React.FC = () => {
  const [selectedPolymathId, setSelectedPolymathId] = useState<string>('aryabhata');

  const selectedPolymath =
    POLYMATHS.find((p) => p.id === selectedPolymathId) || POLYMATHS[0];

  return (
    <section id="polymaths" className="py-16 bg-[#0a0e16] border-t border-amber-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Venerable Lineage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
            Pioneering Polymaths & Visionary Rishis
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            The astronomers, mathematicians, surgeons, and grammarians whose treatises established foundational paradigms of world science.
          </p>
        </div>

        {/* Master Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {POLYMATHS.map((polymath) => {
            const isSelected = selectedPolymathId === polymath.id;
            return (
              <button
                key={polymath.id}
                onClick={() => setSelectedPolymathId(polymath.id)}
                className={`p-3.5 rounded-lg text-left transition-all border ${
                  isSelected
                    ? 'bg-amber-950/60 border-amber-400 text-white shadow-lg ring-1 ring-amber-400/30'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] text-amber-400 font-serif">
                  {polymath.sanskritName}
                </div>
                <div className="font-serif font-bold text-sm text-white mt-0.5 truncate">
                  {polymath.name}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-1">
                  {polymath.field}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Polymath Profile Card */}
        <div className="mt-8 bg-slate-950 border border-amber-900/40 rounded-xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Bio & Details */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-mono">
                  <span>{selectedPolymath.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedPolymath.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">{selectedPolymath.field}</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mt-1">
                  {selectedPolymath.name} <span className="text-amber-400 font-normal">({selectedPolymath.sanskritName})</span>
                </h3>
                <p className="text-xs text-amber-300 font-mono mt-1">
                  Principal Magnum Opus: <strong>{selectedPolymath.masterwork}</strong>
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed pt-2">
                {selectedPolymath.biography}
              </p>

              {/* Key Scientific Contributions List */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-3">
                  Key Discoveries & Canonical Formulations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedPolymath.keyContributions.map((contrib, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 bg-slate-900/80 rounded border border-slate-800 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Context Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-amber-950/20 to-slate-900 p-6 rounded-lg border border-amber-900/30 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-wider font-semibold">
                <Scroll className="w-4 h-4" />
                <span>Treatise Preservation</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The surviving manuscripts of <em>{selectedPolymath.masterwork}</em> were preserved across centuries on palm leaves, birch bark, and copper plates, studied in ancient universities like Nalanda, Takshashila, Valabhi, and Ujjain.
              </p>

              <div className="p-3 bg-black/40 rounded border border-slate-800 text-xs space-y-1">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Transmission Center:</div>
                <div className="text-amber-200 font-medium">{selectedPolymath.location}</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider pt-2">Scholarly Era:</div>
                <div className="text-slate-200">{selectedPolymath.period}</div>
              </div>

              <div className="text-[11px] text-slate-400 italic">
                "Knowledge is not inherited by chance; it is cultivated through disciplined inquiry and perception (Pramāna)."
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
