import React, { useState } from 'react';
import {
  LifeBuoy,
  BookOpen,
  Bot,
  Users,
  ShieldCheck,
  Menu,
  X,
  PhoneCall,
  LogOut,
  BrainCircuit,
  Mic
} from 'lucide-react';

export type ActiveTab = 'emergency' | 'mediathek' | 'audio-transcribe' | 'ai-chat' | 'community' | 'assessment';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleQuickExit = () => {
    window.location.replace('https://www.google.de/search?q=wetter+vorhersage+deutschland');
  };

  const navItems: { id: ActiveTab; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string; badgeColor?: string }[] = [
    {
      id: 'emergency',
      label: 'Erstanlaufstelle & Notfall',
      icon: LifeBuoy,
      badge: 'SOS',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
    },
    {
      id: 'mediathek',
      label: 'Mediathek',
      icon: BookOpen,
      badge: 'Kapitel & Videos',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
    },
    {
      id: 'audio-transcribe',
      label: 'Audio & Gedanken',
      icon: Mic,
      badge: 'Echtzeit',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
    },
    {
      id: 'ai-chat',
      label: 'KI-Begleiter',
      icon: Bot,
      badge: 'KI',
      badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40'
    },
    {
      id: 'community',
      label: 'Anonyme Community',
      icon: Users
    },
    {
      id: 'assessment',
      label: 'Selbst-Check',
      icon: ShieldCheck
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => onSelectTab('emergency')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-700 via-sky-600 to-teal-400 p-0.5 shadow-md shadow-sky-950/50">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-sky-400 group-hover:scale-105 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white font-sans">
                  Psycho <span className="text-sky-400">Spezial</span>
                </span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                  Extra
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Wissenschaftliche Aufklärung & Erstanlaufstelle
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-sky-300 shadow-sm border border-slate-700'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.2 rounded-full border ${item.badgeColor || 'bg-slate-800 text-slate-300'}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onSelectTab('emergency')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-950/60 text-rose-300 hover:bg-rose-900/80 border border-rose-800/80 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>Hilfe: 116 016</span>
            </button>

            <button
              type="button"
              onClick={handleQuickExit}
              title="Notfall-Exit (Drücken Sie ESC)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-700 hover:bg-rose-600 text-white transition-colors cursor-pointer shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Fluchtknopf</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleQuickExit}
              aria-label="Schnell verlassen"
              className="p-2 rounded-lg bg-rose-700 text-white text-xs font-bold"
            >
              <LogOut className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-800 text-sky-300 border border-slate-700'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor || 'bg-slate-800 text-slate-300'}`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => {
                onSelectTab('emergency');
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold bg-rose-950/60 text-rose-300 border border-rose-800/80"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Notfall-Nummern (116 016)</span>
            </button>
            <button
              type="button"
              onClick={handleQuickExit}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-rose-700 text-white"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
