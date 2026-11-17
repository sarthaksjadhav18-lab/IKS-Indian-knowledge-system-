import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { LotusIcon } from './LotusIcon';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenQuiz,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      const publicUrl = window.location.origin;
      await navigator.clipboard.writeText(publicUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f17]/90 backdrop-blur-md border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group flex items-center gap-2.5 text-base md:text-lg font-bold tracking-wider text-amber-100 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          <LotusIcon className="w-5 h-5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)] shrink-0" />
          <span className="font-display tracking-widest uppercase">
            Indian Knowledge System
          </span>
        </button>

        {/* Zone 3: Navigation / Clean Header with Dossier Download & Share */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:bg-slate-700 hover:text-white text-xs font-medium tracking-wide transition-all shadow-sm"
            title="Copy Public Link to Clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Share Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
