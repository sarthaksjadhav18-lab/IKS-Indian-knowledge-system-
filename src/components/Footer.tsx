import React from 'react';
import { LotusIcon } from './LotusIcon';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#05080f] border-t border-amber-950/40 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Inscription */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2.5 text-white font-serif font-bold text-lg">
            <LotusIcon className="w-5 h-5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)] shrink-0" />
            <span className="tracking-wider uppercase font-display text-sm md:text-base">
              Exploring India's Knowledge System
            </span>
          </div>
          <p className="text-xs text-amber-200/70 font-serif italic">
            "विद्या ददाति विनयं विनयाद्याति पात्रताम्" · Knowledge bestows humility, from humility comes worthiness.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium uppercase tracking-wider text-slate-400">
          <button
            onClick={() => onNavigate('hero')}
            className="hover:text-amber-400 transition-colors"
          >
            Heritage Spotlight
          </button>
          <button
            onClick={() => onNavigate('pillars')}
            className="hover:text-amber-400 transition-colors"
          >
            Six Pillars
          </button>
          <button
            onClick={() => onNavigate('simulations')}
            className="hover:text-amber-400 transition-colors"
          >
            Empirical Lab
          </button>
          <button
            onClick={() => onNavigate('polymaths')}
            className="hover:text-amber-400 transition-colors"
          >
            Pioneer Rishis
          </button>
          <button
            onClick={() => onNavigate('inquire')}
            className="hover:text-amber-400 transition-colors"
          >
            Scholar AI
          </button>
          <a
            href="/IKS_Project_History_And_Changelog.pdf"
            download="IKS_Project_History_And_Changelog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400/90 hover:text-amber-300 underline underline-offset-4 transition-colors font-semibold"
          >
            Project History & Dossier (PDF)
          </a>
        </div>

        {/* Archival Note */}
        <div className="text-center md:text-right text-xs text-slate-500">
          <span>Grounded in canonical treatises & archaeological research.</span>
          <div className="text-[11px] text-slate-600 mt-0.5">
            Preserving classical Indian sciences for generations to come.
          </div>
        </div>

      </div>
    </footer>
  );
};
