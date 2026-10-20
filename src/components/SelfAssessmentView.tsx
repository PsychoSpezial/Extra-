import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  BookOpen,
  Info,
  ChevronRight
} from 'lucide-react';
import {
  ASSESSMENT_QUESTIONS,
  calculateRelationshipSafetyScore,
  ScoreAssessmentResult
} from '../utils/psychoLogic.ts';

interface SelfAssessmentViewProps {
  onNavigateToEmergency: () => void;
  onNavigateToMediathek: () => void;
  onNavigateToChat: () => void;
}

export const SelfAssessmentView: React.FC<SelfAssessmentViewProps> = ({
  onNavigateToEmergency,
  onNavigateToMediathek,
  onNavigateToChat
}) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [result, setResult] = useState<ScoreAssessmentResult | null>(null);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQuestion = ASSESSMENT_QUESTIONS[currentStepIndex];
  const isLastQuestion = currentStepIndex === totalQuestions - 1;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const handleSelectOption = (value: number) => {
    const updated = { ...answers, [currentQuestion.id]: value };
    setAnswers(updated);

    if (isLastQuestion) {
      const calculated = calculateRelationshipSafetyScore(updated);
      setResult(calculated);
    } else {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setResult(null);
  };

  const options = [
    { value: 0, label: 'Nie / Trifft gar nicht zu', sublabel: 'Kommt in der Beziehung praktisch nie vor' },
    { value: 1, label: 'Selten / Manchmal', sublabel: 'Vereinzelt in Streitphasen, aber keine Regel' },
    { value: 2, label: 'Häufig / Regelmäßig', sublabel: 'Wiederkehrendes Muster im Beziehungsalltag' },
    { value: 3, label: 'Ständig / Extrem ausgeprägt', sublabel: 'Beherrscht mein tägliches Denken und Fühlen' }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Intro Box */}
      {!result && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Wissenschaftliche Selbsteinschätzung
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Beziehungs- & Belastungs-Check
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Häufig spüren Betroffene, dass etwas tiefgreifend nicht stimmt, finden aber keine Worte dafür.
            Dieser 12-Fragen-Check erfasst typische Dynamiken von emotionaler Manipulation, Gaslighting, Zwangskontrolle und körperlichem Daueralarm.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
            <span>• 100% anonym (keine Speicherung auf Servern)</span>
            <span>• Dauer: ca. 3 Minuten</span>
          </div>
        </div>
      )}

      {/* Assessment Question Card */}
      {!result && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>
                Frage {currentStepIndex + 1} von {totalQuestions}
              </span>
              <span>{progressPercent}% beantwortet</span>
            </div>
            <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-sky-600 to-indigo-500 transition-all duration-300"
                style={{ width: `${((currentStepIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-3 py-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
              Kategorie: {currentQuestion.category}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {currentQuestion.text}
            </h2>
            <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>{currentQuestion.explanation}</span>
            </div>
          </div>

          {/* Answer Option Buttons */}
          <div className="grid grid-cols-1 gap-2.5">
            {options.map((opt) => {
              const isSelected = answers[currentQuestion.id] === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelectOption(opt.value)}
                  className={`p-4 rounded-xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-sky-950/60 border-sky-500 text-white shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-white block">
                      {opt.label}
                    </span>
                    <span className="text-xs text-slate-400 block">
                      {opt.sublabel}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </button>
              );
            })}
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              type="button"
              disabled={currentStepIndex === 0}
              onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
              className="text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 cursor-pointer"
            >
              ← Vorherige Frage
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Neu starten
            </button>
          </div>
        </div>
      )}

      {/* Result Display Card */}
      {result && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${result.badgeColor}`}>
                {result.badgeText}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {result.title}
              </h2>
            </div>

            <div className="text-right sm:border-l sm:border-slate-800 sm:pl-6 shrink-0">
              <span className="text-3xl sm:text-4xl font-black text-white">
                {result.totalScore}
              </span>
              <span className="text-xs text-slate-500 block">
                von {result.maxScore} Punkten ({result.percentage}%)
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Psychologische Einordnung
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Key Insights */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Wesentliche Erkenntnisse aus Ihren Angaben
            </h3>
            <div className="space-y-2">
              {result.keyInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Steps */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Empfohlene nächste Schritte
            </h3>
            <div className="space-y-2">
              {result.recommendedSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs sm:text-sm text-slate-200"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Alert if High / Critical */}
          {result.immediateActionRequired && (
            <div className="p-5 rounded-xl bg-rose-950/30 border border-rose-800/50 space-y-3">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>Akute Notfall-Empfehlung</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aufgrund Ihrer hohen Punktzahl besteht akuter Handlungsbedarf für Ihre seelische und eventuell physische Sicherheit. Bitte zögern Sie nicht, vertrauliche und kostenfreie Hilfe in Anspruch zu nehmen.
              </p>
              <div className="pt-1 flex flex-wrap gap-2">
                <a
                  href="tel:116016"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Hilfetelefon anrufen: 116 016</span>
                </a>
                <button
                  type="button"
                  onClick={onNavigateToEmergency}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                >
                  Alle Notfallstellen anzeigen
                </button>
              </div>
            </div>
          )}

          {/* Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Test wiederholen</span>
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={onNavigateToChat}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ergebnis im KI-Chat besprechen</span>
              </button>

              <button
                type="button"
                onClick={onNavigateToMediathek}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Kapitel in Mediathek vertiefen</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
