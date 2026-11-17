import React, { useState } from 'react';
import {
  Send,
  Sparkles,
  BookOpen,
  Loader2,
  ExternalLink,
  Globe,
  RotateCcw,
  AlertCircle,
  Cpu,
} from 'lucide-react';

interface GroundingSource {
  title: string;
  uri: string;
}

export const IksAiInquirer: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [topic, setTopic] = useState<string>('All Domains');
  const [loading, setLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [activeModel, setActiveModel] = useState<string | null>(null);
  const [searchGrounded, setSearchGrounded] = useState<boolean>(false);
  const [sources, setSources] = useState<GroundingSource[]>([]);
  const [lastQuery, setLastQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const curatedTopics = [
    'All Domains',
    'Mathematics & Calculus',
    'Astronomy & Horology',
    'Surgery & Ayurveda',
    'Linguistics & NLP',
    'Metallurgy & Chemistry',
    'Maratha Heritage & Forts',
  ];

  const handleInquire = async (questionToAsk: string) => {
    const trimmed = questionToAsk.trim();
    if (!trimmed || loading) return;
    setLoading(true);
    setError(null);
    setAnswer(null);
    setSources([]);
    setActiveModel(null);
    setLastQuery(trimmed);

    try {
      const res = await fetch('/api/iks-inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: trimmed,
          topic: topic !== 'All Domains' ? topic : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to process inquiry via Gemini service.');
      }

      if (data.answer) {
        setAnswer(data.answer);
        setActiveModel(data.model || 'gemini-3.8-flash');
        setSearchGrounded(Boolean(data.searchGrounded));
        setSources(Array.isArray(data.sources) ? data.sources : []);
      } else {
        throw new Error(data.error || 'No response returned from Gemini.');
      }
    } catch (err: any) {
      console.error('Gemini query error:', err);
      setError(
        err.message ||
          'The Gemini search service encountered a temporary interruption. Please click Retry to re-submit your inquiry.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquire" className="py-16 bg-[#070a10]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Scholar · Powered by Gemini</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
            Inquire into the Indian Knowledge System
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Enter any enquiry or topic below. Gemini searches canonical treatises, Sanskrit etymologies, historical records, and cross-disciplinary modern scientific discoveries to deliver verified scholarly insights.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="bg-slate-950 border border-amber-900/40 rounded-xl p-4 sm:p-5 shadow-2xl">
          
          {/* Topic Pills */}
          <div className="mb-3">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
              Select Focus Domain (Optional):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {curatedTopics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTopic(t)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                    topic === t
                      ? 'bg-amber-500/25 border border-amber-400/80 text-amber-200'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleInquire(query);
            }}
            className="space-y-3"
          >
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask whatever inquiry or question you have — Gemini will search and synthesize historical treatises, scientific insights, and verified records (e.g., How did Baudhayana construct geometric altars?)..."
                rows={3}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Whatever you inquire will be searched & analyzed using Gemini</span>
              </div>

              <div className="flex items-center gap-2">
                {query.trim() && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="px-3 py-2 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    Clear
                  </button>
                )}

                <button
                  type="submit"
                  disabled={loading || !query.trim()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 disabled:opacity-50 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Searching with Gemini...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Search using Gemini</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-5 p-4 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{error}</span>
              </div>
              {lastQuery && (
                <button
                  type="button"
                  onClick={() => handleInquire(lastQuery)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rose-900/60 hover:bg-rose-800 border border-rose-700 text-rose-100 text-xs font-semibold transition-colors cursor-pointer shrink-0"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retry Inquiry</span>
                </button>
              )}
            </div>
          )}

          {/* Response Container */}
          {answer && (
            <div className="mt-6 pt-6 border-t border-slate-800">
              
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Gemini Knowledge Synthesis</span>
                </div>

                <div className="flex items-center gap-2">
                  {searchGrounded && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-[10px] text-emerald-300 font-mono">
                      <Globe className="w-3 h-3 text-emerald-400" />
                      <span>Google Search Grounded</span>
                    </span>
                  )}
                  {activeModel && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-mono">
                      <Cpu className="w-3 h-3 text-amber-400" />
                      <span>{activeModel}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Inquiry Prompt Echo */}
              {lastQuery && (
                <div className="text-xs text-slate-400 italic mb-3 px-3 py-1.5 bg-slate-900/60 rounded border border-slate-800">
                  <span className="text-amber-400/90 font-semibold not-italic">Inquiry:</span> "{lastQuery}"
                </div>
              )}

              {/* Formatted Answer Body */}
              <div className="p-4 sm:p-5 rounded-lg bg-slate-900/90 border border-amber-900/40 text-sm text-slate-100 leading-relaxed whitespace-pre-line font-sans shadow-inner">
                {answer}
              </div>

              {/* Grounding Web Sources / Treatises */}
              {sources.length > 0 && (
                <div className="mt-4 p-3.5 rounded-lg bg-slate-900/50 border border-slate-800">
                  <div className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-amber-400" />
                    <span>Grounding Sources & Web References ({sources.length}):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sources.map((src, i) => (
                      <a
                        key={i}
                        href={src.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-2 p-2 rounded bg-slate-850 hover:bg-slate-800 border border-slate-750 text-xs text-slate-300 hover:text-amber-300 transition-colors group"
                      >
                        <span className="truncate">{src.title}</span>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
