import React, { useState, useEffect } from 'react';
import { QuickExitBanner } from './components/QuickExitBanner.tsx';
import { Navbar, ActiveTab } from './components/Navbar.tsx';
import { FirstResponseView } from './components/FirstResponseView.tsx';
import { MediathekView } from './components/MediathekView.tsx';
import { AIChatbotView } from './components/AIChatbotView.tsx';
import { CommunityView } from './components/CommunityView.tsx';
import { SelfAssessmentView } from './components/SelfAssessmentView.tsx';
import { AudioTranscribeView } from './components/AudioTranscribeView.tsx';
import { Shield, HeartHandshake, Lock, PhoneCall, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(() => {
    // Check URL search params for quick navigation or autostart
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    if (tabParam && ['emergency', 'mediathek', 'audio-transcribe', 'ai-chat', 'community', 'assessment'].includes(tabParam)) {
      return tabParam as ActiveTab;
    }
    return 'emergency';
  });

  useEffect(() => {
    // Sync tab to history state for clean back button behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1017] text-slate-100 selection:bg-sky-500/30 selection:text-white">
      {/* 1. Quick Exit & Discrete Banner */}
      <QuickExitBanner />

      {/* 2. Top Header Navigation */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* 3. Main Content Views */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'emergency' && (
          <FirstResponseView
            onNavigateToChat={() => setActiveTab('ai-chat')}
            onNavigateToAssessment={() => setActiveTab('assessment')}
          />
        )}

        {activeTab === 'mediathek' && <MediathekView />}

        {activeTab === 'audio-transcribe' && <AudioTranscribeView />}

        {activeTab === 'ai-chat' && <AIChatbotView />}

        {activeTab === 'community' && <CommunityView />}

        {activeTab === 'assessment' && (
          <SelfAssessmentView
            onNavigateToEmergency={() => setActiveTab('emergency')}
            onNavigateToMediathek={() => setActiveTab('mediathek')}
            onNavigateToChat={() => setActiveTab('ai-chat')}
          />
        )}
      </main>

      {/* 4. Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 px-4 sm:px-6 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 font-bold text-sm">
              <Shield className="w-4 h-4 text-sky-400" />
              <span>Psycho Spezial Extra</span>
              <span className="text-[10px] text-slate-400 font-normal px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                Wissenschaftlich fundiert
              </span>
            </div>
            <p className="max-w-md text-slate-400">
              Aufklärungsplattform, KI-Begleitung & Erstanlaufstelle für Betroffene von toxischen Beziehungsdynamiken, Narzissmus und Trauma.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <button
              type="button"
              onClick={() => setActiveTab('emergency')}
              className="hover:text-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>Notfall-Hilfen (116 016)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('mediathek')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Mediathek (45 Kapitel)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('community')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Anonyme Community
            </button>

            <div className="flex items-center gap-1 text-teal-400 font-medium">
              <Lock className="w-3.5 h-3.5" />
              <span>Zero-Tracking & Diskretion</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-900/80 text-[11px] text-slate-500 text-center flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Wichtiger Hinweis: Psycho Spezial ersetzt im Notfall keine Akutmedizin, Psychotherapie oder den Notruf (110 / 112).
          </span>
          <span className="text-slate-400">
            Im Notfall ESC drücken für sofortigen Flucht-Exit
          </span>
        </div>
      </footer>
    </div>
  );
}
