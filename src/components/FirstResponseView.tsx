import React, { useState, useEffect } from 'react';
import {
  LifeBuoy,
  PhoneCall,
  ShieldAlert,
  Wind,
  Eye,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Volume2,
  Snowflake,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/emergencyContacts.ts';

interface FirstResponseViewProps {
  onNavigateToChat: () => void;
  onNavigateToAssessment: () => void;
}

export const FirstResponseView: React.FC<FirstResponseViewProps> = ({
  onNavigateToChat,
  onNavigateToAssessment
}) => {
  const [selectedCountry, setSelectedCountry] = useState<'ALL' | 'DE' | 'AT' | 'CH'>('ALL');
  const [activeSosTool, setActiveSosTool] = useState<'grounding' | 'breathing' | 'coldSkill'>('grounding');

  // 5-4-3-2-1 Grounding State
  const [groundingStep, setGroundingStep] = useState(0);
  const groundingSteps = [
    {
      count: 5,
      sense: 'Sehen',
      prompt: 'Benennen Sie 5 Dinge in Ihrer Umgebung, die Sie sehen können.',
      examples: 'Eine Kante am Tisch, ein Lichtstrahl, eine Farbe, ein Muster, ein Schatten.'
    },
    {
      count: 4,
      sense: 'Spüren',
      prompt: 'Spüren Sie 4 Dinge körperlich ganz bewusst.',
      examples: 'Die Füße flach auf dem Boden, der Stoff des Pullovers, der Stuhl im Rücken, die kühle Luft an den Händen.'
    },
    {
      count: 3,
      sense: 'Hören',
      prompt: 'Achten Sie auf 3 Geräusche, die Sie hören können.',
      examples: 'Ein Summen des Kühlschranks, entfernter Verkehr, der eigene Atem.'
    },
    {
      count: 2,
      sense: 'Riechen',
      prompt: 'Nehmen Sie 2 Gerüche wahr.',
      examples: 'Der Duft von Kaffee/Tee, frische Luft aus dem Fenster, Handcreme, Holz.'
    },
    {
      count: 1,
      sense: 'Schmecken',
      prompt: 'Konzentrieren Sie sich auf 1 Geschmack.',
      examples: 'Ein Schluck kaltes Wasser, Minzgeschmack, die Zunge am Gaumen.'
    }
  ];

  // Breathing tool state
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'Einatmen' | 'Halten' | 'Ausatmen'>('Einatmen');
  const [breathCountdown, setBreathCountdown] = useState(4);

  useEffect(() => {
    let timer: any;
    if (isBreathingActive) {
      timer = setInterval(() => {
        setBreathCountdown((prev) => {
          if (prev > 1) return prev - 1;

          // Transition phases in 4-7-8 rhythm
          if (breathPhase === 'Einatmen') {
            setBreathPhase('Halten');
            return 7;
          } else if (breathPhase === 'Halten') {
            setBreathPhase('Ausatmen');
            return 8;
          } else {
            setBreathPhase('Einatmen');
            return 4;
          }
        });
      }, 1000);
    } else {
      setBreathPhase('Einatmen');
      setBreathCountdown(4);
    }
    return () => clearInterval(timer);
  }, [isBreathingActive, breathPhase]);

  const filteredContacts = EMERGENCY_CONTACTS.filter((c) => {
    if (selectedCountry === 'ALL') return true;
    return c.country === selectedCountry || c.country === 'DACH';
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Hero Alert Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-900 border border-rose-900/40 p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            Erstanlaufstelle & Krisenhilfe
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sie sind nicht verrückt, und Sie sind <span className="text-rose-400">nicht allein</span>.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Wenn Sie sich bedroht, emotional erpresst oder von Daueranspannung überwältigt fühlen:
            Hier finden Sie kostenlose, anonyme Notfall-Kontakte für den D-A-CH-Raum sowie sofortige somatische Stabilisierungswerkzeuge für Ihr Nervensystem.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="tel:116016"
              className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-rose-950/50 text-sm cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hilfetelefon anrufen: 116 016</span>
            </a>

            <button
              type="button"
              onClick={onNavigateToChat}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 px-4 py-2.5 rounded-xl transition-all text-sm font-semibold cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>KI-Begleiter im Chat befragen</span>
            </button>

            <button
              type="button"
              onClick={onNavigateToAssessment}
              className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 px-3.5 py-2.5 rounded-xl transition-all text-sm font-medium cursor-pointer"
            >
              <span>3-Minuten Selbst-Check</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>
      </div>

      {/* SOS Interactive Stabilisierungskit */}
      <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">
              <LifeBuoy className="w-4 h-4" />
              Sofort-Intervention
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Interaktives SOS-Stabilisierungskit
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Bei Panik, Dissoziation oder Übererregung: Holen Sie Ihr Nervensystem in die Gegenwart zurück.
            </p>
          </div>

          {/* Tool Selector Tabs */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveSosTool('grounding')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeSosTool === 'grounding'
                  ? 'bg-slate-800 text-sky-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>5-4-3-2-1 Erdung</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSosTool('breathing')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeSosTool === 'breathing'
                  ? 'bg-slate-800 text-sky-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Wind className="w-3.5 h-3.5" />
              <span>4-7-8 Atmung</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSosTool('coldSkill')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeSosTool === 'coldSkill'
                  ? 'bg-slate-800 text-sky-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Snowflake className="w-3.5 h-3.5" />
              <span>TIPP Kälte-Skill</span>
            </button>
          </div>
        </div>

        {/* SOS Tool 1: 5-4-3-2-1 Grounding */}
        {activeSosTool === 'grounding' && (
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">
                Schritt {groundingStep + 1} von {groundingSteps.length}
              </span>
              <button
                type="button"
                onClick={() => setGroundingStep(0)}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Von vorn beginnen
              </button>
            </div>

            {/* Step card */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center text-2xl font-black">
                {groundingSteps[groundingStep].count}
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-sky-400 tracking-wider">
                  Sinneskanal: {groundingSteps[groundingStep].sense}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {groundingSteps[groundingStep].prompt}
                </h3>
                <p className="text-sm text-slate-400 mt-2 max-w-md mx-auto italic">
                  „{groundingSteps[groundingStep].examples}“
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                {groundingStep < groundingSteps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setGroundingStep(groundingStep + 1)}
                    className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                  >
                    <span>Ich habe {groundingSteps[groundingStep].count} Dinge wahrgenommen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Sehr gut! Ihr Körper ist wieder mehr im Hier und Jetzt verankert.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGroundingStep(0)}
                      className="text-xs text-sky-400 hover:underline cursor-pointer"
                    >
                      Noch einen Durchgang machen
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Grounding progress bar */}
            <div className="grid grid-cols-5 gap-2">
              {groundingSteps.map((step, idx) => (
                <div
                  key={step.count}
                  className={`h-2 rounded-full transition-all ${
                    idx <= groundingStep ? 'bg-sky-500' : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* SOS Tool 2: 4-7-8 Paced Breathing */}
        {activeSosTool === 'breathing' && (
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-8 flex flex-col items-center text-center space-y-6">
            <div className="max-w-md">
              <h3 className="text-lg font-bold text-white">4-7-8 Beruhigungsatmung</h3>
              <p className="text-xs text-slate-400 mt-1">
                Längeres Ausatmen aktiviert den ventralen Vagusnerv und senkt Herzfrequenz und Cortisol innerhalb von 2 Minuten.
              </p>
            </div>

            {/* Breathing Circle animation container */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-full transition-all duration-1000 border-2 ${
                  breathPhase === 'Einatmen'
                    ? 'scale-110 bg-sky-500/20 border-sky-400 shadow-lg shadow-sky-500/20'
                    : breathPhase === 'Halten'
                    ? 'scale-110 bg-indigo-500/20 border-indigo-400 shadow-lg shadow-indigo-500/20'
                    : 'scale-90 bg-emerald-500/20 border-emerald-400'
                }`}
              />

              <div className="relative z-10 flex flex-col items-center">
                <span className="text-2xl font-black text-white">{breathCountdown}s</span>
                <span className="text-sm font-bold uppercase tracking-wider text-sky-300 mt-1">
                  {breathPhase}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsBreathingActive(!isBreathingActive)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer ${
                  isBreathingActive
                    ? 'bg-rose-600 hover:bg-rose-500 text-white'
                    : 'bg-sky-600 hover:bg-sky-500 text-white'
                }`}
              >
                {isBreathingActive ? 'Atemübung stoppen' : 'Atem-Taktgeber starten'}
              </button>
            </div>
            <p className="text-xs text-slate-500">
              4 Sekunden durch die Nase einatmen • 7 Sekunden Atem halten • 8 Sekunden sanft durch den Mund ausatmen
            </p>
          </div>
        )}

        {/* SOS Tool 3: TIPP Kälte-Skill */}
        {activeSosTool === 'coldSkill' && (
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 flex items-center justify-center shrink-0">
                <Snowflake className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Der physiologische Tauchreflex (TIPP-Skill nach DBT)
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Wenn Ihr Kopf rast und Sie vor Wut oder Panik nicht mehr klar denken können, hilft Logik oft nicht mehr weiter.
                  Der biologische Tauchreflex zwingt Ihr Herz-Kreislauf-System innerhalb von Sekunden zur Verlangsamung.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-teal-400 font-bold text-sm">1. Eiskaltes Wasser</div>
                <p className="text-xs text-slate-300">
                  Füllen Sie ein Waschbecken mit sehr kaltem Wasser. Tauchen Sie Ihr Gesicht für 15–20 Sekunden ein (oder legen Sie ein nasses, eiskaltes Tuch über Augen und Wangen).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-teal-400 font-bold text-sm">2. Kältepad am Nacken</div>
                <p className="text-xs text-slate-300">
                  Legen Sie einen Kühlbeutel oder Eiswürfel in ein Tuch gewickelt an den seitlichen Hals oder Nacken. Das stimuliert direkt den Karotissinus.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="text-teal-400 font-bold text-sm">3. Muskuläre Entladung</div>
                <p className="text-xs text-slate-300">
                  Spannen Sie danach für 5 Sekunden alle Muskeln (Fäuste, Schultern) mit voller Kraft an und lassen Sie mit einem tiefen Seufzer komplett locker.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Emergency Phone Contacts List */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-rose-400" />
              Offizielle Krisen-Hotlines (D-A-CH)
            </h2>
            <p className="text-xs text-slate-400">
              Kostenlos, anonym, rund um die Uhr erreichbar. Erscheint nicht auf der Telefonrechnung.
            </p>
          </div>

          {/* Country filter */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg text-xs self-start">
            {(['ALL', 'DE', 'AT', 'CH'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setSelectedCountry(code)}
                className={`px-2.5 py-1 rounded font-semibold transition-colors cursor-pointer ${
                  selectedCountry === code
                    ? 'bg-rose-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {code === 'ALL' ? 'Alle Länder' : code}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-slate-100 text-base">{contact.name}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                    {contact.country}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{contact.description}</p>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded text-emerald-400 font-medium">
                    {contact.available}
                  </span>
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded text-slate-300">
                    {contact.targetGroup}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                {contact.phone ? (
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 rounded-lg text-xs transition-colors cursor-pointer shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{contact.phoneDisplay}</span>
                  </a>
                ) : null}

                {contact.chatUrl && (
                  <a
                    href={contact.chatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors border border-slate-700"
                  >
                    <span>Online-Chat</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Akut-Verhalten: Was tun wenn ein Streit eskaliert */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          Akut-Leitfaden: Wenn eine Situation eskaliert
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30 space-y-2">
            <h3 className="font-bold text-emerald-300 text-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Was Sie JETZT tun sollten (Schutz)
            </h3>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              <li>Verlassen Sie physisch den Raum oder die Wohnung, wenn eine Eskalation droht.</li>
              <li>Antworten Sie nur noch kurz, monoton und emotionslos (Grey-Rock-Methode).</li>
              <li>Benachrichtigen Sie eine vertraute Person per Kurzcode oder Codewort.</li>
              <li>Halten Sie Autoschlüssel, Ausweis, Handy und Ladekabel griffbereit.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/30 space-y-2">
            <h3 className="font-bold text-rose-300 text-sm flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Was Sie VERMEIDEN sollten (Gefahr)
            </h3>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              <li>Kein JADE: Versuchen Sie nicht zu Rechtfertigen, Streiten, Verteidigen oder Erklären.</li>
              <li>Drohen Sie niemals impulsiv mit Trennung oder Polizei, solange Sie im selben Raum sind.</li>
              <li>Gehen Sie nicht auf Wortsalat oder gezielte Provokationen ein – es ist ein Köder für Wut.</li>
              <li>Schlucken Sie keine Beruhigungsmittel ohne ärztliche Aufsicht.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
