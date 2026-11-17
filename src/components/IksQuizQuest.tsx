import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/iksData';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, X } from 'lucide-react';

interface IksQuizQuestProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IksQuizQuest: React.FC<IksQuizQuestProps> = ({ isOpen, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSubmitOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#090d15] border border-amber-900/50 rounded-xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <div>
            {/* Header info */}
            <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
              <span className="text-amber-400 font-mono font-bold uppercase tracking-wider">
                {currentQ.domain}
              </span>
              <span>
                Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-800 h-1 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-amber-400 h-full transition-all duration-300"
                style={{
                  width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                }}
              />
            </div>

            {/* Question Text */}
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-5 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="mt-5 space-y-2.5">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let btnStyle =
                  'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-850';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyle =
                      'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle =
                      'bg-rose-950/70 border-rose-500 text-rose-200 font-semibold';
                  } else {
                    btnStyle = 'bg-slate-900/50 border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSubmitOption(idx)}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card after submit */}
            {isAnswerSubmitted && (
              <div className="mt-5 p-4 rounded-lg bg-amber-950/30 border border-amber-900/40 text-xs space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
                  <span>Scholarly Explanation</span>
                  <span className="font-mono text-slate-400">{currentQ.sourceTreatise}</span>
                </div>
                <p className="text-slate-200 leading-relaxed">{currentQ.explanation}</p>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Finished State */
          <div className="text-center py-6 space-y-4">
            <div className="inline-flex p-4 rounded-full bg-amber-950/50 border border-amber-400/40 text-amber-400 mb-2">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ramayana Test Completed
            </h3>
            <p className="text-sm text-slate-300">
              You scored <span className="text-amber-400 font-bold text-lg">{score}</span> out of{' '}
              <span className="font-bold text-lg">{QUIZ_QUESTIONS.length}</span>!
            </p>

            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              {score >= 8
                ? 'Outstanding Mastery! You possess deep scholarly knowledge of the Ramayana, its noble pillars, sacred events, and timeless Dharmic wisdom.'
                : score >= 5
                ? 'Commendable Knowledge! You appreciate the foundational teachings, heroic figures, and pivotal moments of the epic Ramayana.'
                : 'A Great Beginning! The Valmiki Ramayana holds profound virtues, valor, and insights waiting for you to discover.'}
            </p>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Test</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                Close Test
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
