import React from 'react';
import { Hotspot } from '../data/iksData';
import { X, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

interface CuratorialModalProps {
  hotspot: Hotspot | null;
  onClose: () => void;
  onNavigateToSimulator?: () => void;
}

export const CuratorialModal: React.FC<CuratorialModalProps> = ({
  hotspot,
  onClose,
  onNavigateToSimulator,
}) => {
  if (!hotspot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0a0e17] border border-amber-500/40 rounded-xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Sanskrit Subtitle */}
        <div className="flex items-center gap-2 text-xs text-amber-400 font-mono uppercase tracking-wider">
          <span>{hotspot.category}</span>
          <span aria-hidden="true">·</span>
          <span>Archival Dossier</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
          {hotspot.title}
        </h3>
        <p className="text-sm font-serif text-amber-300/90 mt-0.5">
          {hotspot.sanskritTitle}
        </p>

        {/* Canonical Verse Box */}
        {hotspot.sanskritVerse && (
          <div className="mt-5 p-4 rounded-lg bg-amber-950/30 border border-amber-800/40 relative">
            <p className="text-[11px] uppercase tracking-wider text-amber-400/80 font-mono mb-1">
              Treatise Inscription ({hotspot.primarySource}):
            </p>
            <p className="font-serif text-base text-amber-100 italic leading-relaxed">
              {hotspot.sanskritVerse}
            </p>
            {hotspot.verseTranslation && (
              <p className="text-xs text-slate-300 mt-2 font-sans border-t border-amber-900/30 pt-2">
                {hotspot.verseTranslation}
              </p>
            )}
          </div>
        )}

        {/* Summary */}
        <div className="mt-5">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">
            Historical & Scientific Overview:
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {hotspot.summary}
          </p>
        </div>

        {/* Key Insights */}
        <div className="mt-5">
          <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-2">
            Archival Highlights:
          </h4>
          <ul className="space-y-2">
            {hotspot.keyInsights.map((insight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-300 p-2.5 bg-slate-900/70 rounded border border-slate-800"
              >
                <span className="text-amber-400 font-bold shrink-0">✦</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modern Scientific Parallel */}
        <div className="mt-5 p-3.5 bg-slate-900 border border-slate-800 rounded-lg text-xs">
          <span className="text-amber-300 uppercase tracking-wider font-semibold">
            Contemporary Scientific Bridge:
          </span>
          <p className="text-slate-300 mt-1 leading-relaxed">
            {hotspot.modernParallel}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-slate-400">
            Primary Source: <span className="text-slate-200">{hotspot.primarySource}</span>
          </div>
          <button
            onClick={() => {
              onClose();
              if (onNavigateToSimulator) onNavigateToSimulator();
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs tracking-wider uppercase rounded-md transition-colors"
          >
            <span>Open Interactive Lab</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
