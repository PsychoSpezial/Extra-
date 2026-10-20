import React, { useEffect } from 'react';
import { ShieldAlert, LogOut, EyeOff } from 'lucide-react';

export const QuickExitBanner: React.FC = () => {
  const handleQuickExit = () => {
    // Replace URL immediately in history so back button does not reopen this page
    window.location.replace('https://www.google.de/search?q=wetter+vorhersage+deutschland');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleQuickExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-300 px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
            <EyeOff className="w-3.5 h-3.5 text-slate-400" /> Schutz & Diskretion:
          </span>
          <span className="text-slate-400 hidden md:inline">
            Fühlen Sie sich beobachtet? Drücken Sie jederzeit <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono">ESC</kbd> für sofortigen Notfall-Exit.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-[11px] hidden sm:inline">
            Tipp: Privaten Modus (Inkognito) nutzen & Verlauf löschen
          </span>
          <button
            type="button"
            onClick={handleQuickExit}
            aria-label="Schnell verlassen - Schließt diese Seite sofort"
            className="flex items-center gap-1.5 bg-rose-700 hover:bg-rose-600 text-white font-medium px-3 py-1 rounded transition-colors text-xs shadow-sm cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="font-bold">Schnell verlassen</span>
          </button>
        </div>
      </div>
    </div>
  );
};
