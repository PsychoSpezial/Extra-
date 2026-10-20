import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Bookmark,
  Share2,
  Clock,
  Sparkles,
  ChevronRight,
  X,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Wrench,
  Copy,
  Check,
  Tag,
  Shield,
  Layers,
  FileText,
  Video
} from 'lucide-react';
import { CHAPTERS_DATA, KNOWLEDGE_PARTS, Chapter } from '../data/knowledgeBase.ts';
import { searchKnowledgeBase } from '../utils/psychoLogic.ts';
import { VideoMediathekView } from './VideoMediathekView.tsx';

export const MediathekView: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'chapters' | 'videos' | 'tools'>('chapters');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('psycho_spezial_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // BIFF Tool state
  const [biffTopic, setBiffTopic] = useState<'finances' | 'kids' | 'accusation' | 'custom'>('accusation');
  const [biffCustomSituation, setBiffCustomSituation] = useState('');
  const [biffCopied, setBiffCopied] = useState(false);

  // Reality Check tool state
  const [realityStatements, setRealityStatements] = useState<Array<{ id: string; culpritPhrase: string; objectiveFact: string }>>([
    {
      id: '1',
      culpritPhrase: '„Das habe ich nie so gesagt, du verdrehst immer absichtlich meine Worte!“',
      objectiveFact: 'Ich habe mir die Notiz direkt nach dem Gespräch gemacht. Meine Wahrnehmung ist verlässlich.'
    },
    {
      id: '2',
      culpritPhrase: '„Wenn du mich lieben würdest, würdest du deine Freunde nicht treffen.“',
      objectiveFact: 'Liebe sperrt nicht ein. Freundschaften außerhalb der Partnerschaft sind gesund und mein gutes Recht.'
    }
  ]);
  const [newCulprit, setNewCulprit] = useState('');
  const [newFact, setNewFact] = useState('');

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      try {
        localStorage.setItem('psycho_spezial_bookmarks', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const filteredChapters = useMemo(() => {
    return searchKnowledgeBase(CHAPTERS_DATA, searchQuery, selectedPart, selectedTag);
  }, [searchQuery, selectedPart, selectedTag]);

  // Extract popular tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    CHAPTERS_DATA.forEach((c) => c.tags.forEach((t) => set.add(t)));
    return Array.from(set).slice(0, 16);
  }, []);

  // Pre-configured BIFF generators
  const biffTemplates: Record<string, { title: string; draft: string; explanation: string }> = {
    accusation: {
      title: 'Antwort auf Vorwürfe & Schuldumkehr (DARVO)',
      draft: 'Hallo. Ich habe deine Nachricht erhalten. Ich teile deine Einschätzung der Situation nicht und werde mich auf Vorwürfe nicht einlassen. Zur sachlichen Klärung von [Thema] schlage ich vor: [Lösung]. Viele Grüße.',
      explanation: 'BIFF: Brief (kurz), Informative (nur sachliche Fakten), Friendly (höflich neutral), Firm (fester Abschluss, keine Angriffsfläche).'
    },
    kids: {
      title: 'Organisation von Kindesübergaben / Terminen',
      draft: 'Hallo. Die Übergabe findet wie gerichtlich/vertraglich vereinbart am Freitag um 15:00 Uhr statt. Bitte gib die Schultasche und den Impfpass mit. Danke.',
      explanation: 'Keine Nebenschauplätze, keine Kommentare zu Emotionen des Ex-Partners.'
    },
    finances: {
      title: 'Forderungen & finanzielle Streitigkeiten',
      draft: 'Hallo. Die Abrechnung der Nebenkosten liegt vor. Gemäß Vereinbarung beträgt der Anteil 120,50 €. Ich habe den Betrag auf das bekannte Konto überwiesen. Den Beleg findest du im Anhang.',
      explanation: 'Reine Dokumentation der Fakten, entzieht emotionalen Erpressungsversuchen die Bühne.'
    },
    custom: {
      title: 'Individuelle Grenzen-Formel',
      draft: `Ich nehme deine Meinung zur Kenntnis. Meine Entscheidung bezüglich ${biffCustomSituation || '[Thema]'} steht fest und ist nicht verhandelbar. Ich wünsche dir einen ruhigen Tag.`,
      explanation: 'Schützt vor dem JADE-Muster (Justify, Argue, Defend, Explain).'
    }
  };

  const handleCopyBiff = () => {
    const text = biffTemplates[biffTopic].draft;
    navigator.clipboard.writeText(text);
    setBiffCopied(true);
    setTimeout(() => setBiffCopied(false), 2000);
  };

  const handleAddRealityStatement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCulprit.trim() || !newFact.trim()) return;
    setRealityStatements([
      ...realityStatements,
      { id: Date.now().toString(), culpritPhrase: newCulprit.trim(), objectiveFact: newFact.trim() }
    ]);
    setNewCulprit('');
    setNewFact('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            Wissenschaftliche Fach-Mediathek
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Psycho Spezial <span className="text-indigo-400">Extra</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl leading-relaxed">
            Das vollständige Werk mit 4 Teilen und 45 detaillierten Kapiteln: Von Täter- und Opferdynamiken über komplexe Traumamechanismen bis hin zu praxiserprobten Schutzstrategien.
          </p>
        </div>

        {/* Tab switch between Knowledge chapters, Videos, and Interactive tools */}
        <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl self-start overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('chapters')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'chapters'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>45 Fachkapitel</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'videos'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video-Mediathek</span>
            <span className="text-[10px] bg-rose-950/80 border border-rose-800 text-rose-300 px-1.5 py-0.2 rounded-full">
              Neu
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tools')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'tools'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Praxis-Werkzeuge</span>
          </button>
        </div>
      </div>

      {activeTab === 'videos' && <VideoMediathekView />}

      {activeTab === 'chapters' && (
        <div className="space-y-6">
          {/* Part Filter Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5">
            <button
              type="button"
              onClick={() => setSelectedPart(null)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedPart === null
                  ? 'bg-slate-800 border-indigo-500/50 text-white shadow-md'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block">
                Gesamtübersicht
              </span>
              <span className="text-xs font-bold text-slate-200 block mt-0.5">Alle 45 Kapitel</span>
            </button>

            {KNOWLEDGE_PARTS.map((part) => {
              const isSelected = selectedPart === part.part;
              return (
                <button
                  key={part.part}
                  type="button"
                  onClick={() => setSelectedPart(isSelected ? null : part.part)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-indigo-500/50 text-white shadow-md'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Teil {part.part} ({part.chapterCount} Kap.)
                  </span>
                  <span className="text-xs font-bold text-slate-200 line-clamp-1 mt-0.5">
                    {part.title.replace(/^Teil \d – /, '')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search bar & Tag chips */}
          <div className="space-y-3 bg-slate-900/70 border border-slate-800 p-4 rounded-xl">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Suche nach Begriffen: z.B. Gaslighting, Polyvagal, Fawn, Hoovering, K-PTBS, Wortsalat..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Popular tags row */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mr-1">
                <Tag className="w-3 h-3" /> Themenfilter:
              </span>
              {allTags.map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(isSelected ? null : tag)}
                    className={`text-[11px] px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 border-indigo-500 text-white'
                        : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    #{tag}
                  </button>
                );
              })}
              {selectedTag && (
                <button
                  type="button"
                  onClick={() => setSelectedTag(null)}
                  className="text-[11px] text-rose-400 hover:underline ml-2 cursor-pointer"
                >
                  Filter aufheben
                </button>
              )}
            </div>
          </div>

          {/* Results count & status */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              {filteredChapters.length} Kapitel gefunden
              {selectedPart && ` in Teil ${selectedPart}`}
              {selectedTag && ` mit #${selectedTag}`}
            </span>
            {bookmarkedIds.length > 0 && (
              <span className="flex items-center gap-1 text-indigo-400">
                <Bookmark className="w-3.5 h-3.5 fill-current" /> {bookmarkedIds.length} gemerkt
              </span>
            )}
          </div>

          {/* Chapters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredChapters.map((chapter) => {
              const isBookmarked = bookmarkedIds.includes(chapter.id);
              return (
                <div
                  key={chapter.id}
                  onClick={() => setActiveChapter(chapter)}
                  className="group bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-5 transition-all flex flex-col justify-between space-y-4 hover:shadow-lg hover:shadow-indigo-950/30 cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded">
                        Teil {chapter.part} • Kap. {chapter.chapterNumber}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {chapter.readTimeMin} Min
                        </span>
                        <button
                          type="button"
                          onClick={(e) => toggleBookmark(chapter.id, e)}
                          title={isBookmarked ? 'Lesezeichen entfernen' : 'Kapitel merken'}
                          className="text-slate-500 hover:text-indigo-400 transition-colors p-1"
                        >
                          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-indigo-400 text-indigo-400' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-2">
                        {chapter.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mt-1 line-clamp-2">
                        {chapter.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400/90 leading-relaxed line-clamp-3">
                      {chapter.summary}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1">
                      {chapter.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                      <span>Kapitel lesen & vertiefen</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredChapters.length === 0 && (
            <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-3">
              <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-300">Keine Kapitel gefunden</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Zu Ihrem Suchbegriff „{searchQuery}“ gibt es in diesem Filterbereich keine Treffer. Versuchen Sie allgemeinere Wörter oder setzen Sie den Filter zurück.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedPart(null);
                  setSelectedTag(null);
                }}
                className="mt-2 text-xs font-semibold text-indigo-400 hover:underline cursor-pointer"
              >
                Alle Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      )}

      {/* Interactive Tools Tab */}
      {activeTab === 'tools' && (
        <div className="space-y-8">
          {/* Tool 1: BIFF Boundary Generator */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-1">
                <Shield className="w-4 h-4" /> Schutz-Kommunikation
              </div>
              <h2 className="text-xl font-bold text-white">
                Grenzen setzen ohne Eskalation (BIFF-Formel)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Bei toxischen oder hochkonflikthaften Kontakten bieten Erklärungen und Emotionen nur neue Angriffsfläche.
                Nutzen Sie die wissenschaftlich validierte BIFF-Methode (Bill Eddy): <strong>Brief</strong> (kurz), <strong>Informative</strong> (sachlich), <strong>Friendly</strong> (neutral-höflich), <strong>Firm</strong> (bestimmt).
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'accusation', label: 'Bei Vorwürfen & DARVO' },
                  { id: 'kids', label: 'Kindesübergabe / Absprachen' },
                  { id: 'finances', label: 'Geld & Forderungen' },
                  { id: 'custom', label: 'Eigene Situation' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBiffTopic(item.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      biffTopic === item.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {biffTopic === 'custom' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Um welches Thema geht es konkret?
                  </label>
                  <input
                    type="text"
                    value={biffCustomSituation}
                    onChange={(e) => setBiffCustomSituation(e.target.value)}
                    placeholder="z.B. den Wochenend-Besuch der Schwiegereltern"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              )}

              {/* Generated BIFF Card */}
              <div className="bg-slate-950 border border-emerald-900/40 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">
                    {biffTemplates[biffTopic].title}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyBiff}
                    className="flex items-center gap-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded transition-colors cursor-pointer"
                  >
                    {biffCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{biffCopied ? 'Kopiert!' : 'In Zwischenablage kopieren'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-100 font-mono leading-relaxed whitespace-pre-wrap select-all">
                  {biffTemplates[biffTopic].draft}
                </div>

                <p className="text-xs text-slate-400 italic">
                  💡 {biffTemplates[biffTopic].explanation}
                </p>
              </div>
            </div>
          </div>

          {/* Tool 2: Gaslighting Reality Checker */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 mb-1">
                <FileText className="w-4 h-4" /> Realitätsprüfung
              </div>
              <h2 className="text-xl font-bold text-white">
                Gaslighting-Realitäts-Prüfer
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Gaslighting lässt Sie an Ihrem Verstand zweifeln. Stellen Sie die manipulierte Aussage des Täters der überprüfbaren Realität gegenüber, um geistige Klarheit zurückzugewinnen.
              </p>
            </div>

            {/* List of current reality pairs */}
            <div className="space-y-3">
              {realityStatements.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">
                      Was der Täter behauptet (Verzerrung):
                    </span>
                    <p className="text-xs text-slate-300 italic font-serif-quote">
                      {item.culpritPhrase}
                    </p>
                  </div>

                  <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-2 md:pt-0 md:pl-3">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Die überprüfbare Realität (Fakt):
                    </span>
                    <p className="text-xs text-slate-200 font-medium">
                      {item.objectiveFact}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Add new reality pair form */}
            <form onSubmit={handleAddRealityStatement} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Eigenen Satz entlarven:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={newCulprit}
                  onChange={(e) => setNewCulprit(e.target.value)}
                  placeholder="Manipulative Aussage (z.B. „Du bist undankbar...“)"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="text"
                  value={newFact}
                  onChange={(e) => setNewFact(e.target.value)}
                  placeholder="Ihre objektive Wahrheit (z.B. „Ich habe 3 Stunden geholfen...“)"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <button
                type="submit"
                disabled={!newCulprit.trim() || !newFact.trim()}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Gegenüberstellung hinzufügen
              </button>
            </form>
          </div>

          {/* Tool 3: Comparison Matrix: Trauma-Bond vs Healthy Love */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">
                Vergleichsmatrix: Trauma-Bindung vs. Gesunde Bindung
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Warum verwechseln wir Schmerz oft mit Intensität? Die Tabelle ordnet die Gefühle nüchtern ein.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80">
                    <th className="p-3 font-bold text-slate-400">Bereich</th>
                    <th className="p-3 font-bold text-rose-400">Trauma-Bindung (Toxisch)</th>
                    <th className="p-3 font-bold text-emerald-400">Gesunde Bindung (Sicher)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr>
                    <td className="p-3 font-semibold text-slate-300">Tempo</td>
                    <td className="p-3 text-slate-400">Überstürzt, sofortige Heirat/Zusammenzug („Seelenverwandte“)</td>
                    <td className="p-3 text-slate-300">Entspannt, gegenseitiges Kennenlernen über Monate</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-300">Konflikte</td>
                    <td className="p-3 text-slate-400">Vernichtend, tagelanges Schweigen, Schuldumkehr, Bestrafung</td>
                    <td className="p-3 text-slate-300">Lösungsorientiert, Reparaturbereitschaft, kein Liebesentzug</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-300">Gefühl im Körper</td>
                    <td className="p-3 text-slate-400">Herzrasen, Magendrücken, Angst vor dem nächsten Fehler</td>
                    <td className="p-3 text-slate-300">Ruhiger Puls, Entspannung, Wärme, Verlässlichkeit</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-300">Freunde & Hobbys</td>
                    <td className="p-3 text-slate-400">Werden eifersüchtig bekämpft oder madig gemacht</td>
                    <td className="p-3 text-slate-300">Werden gefördert und respektiert</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-300">Fehler machen</td>
                    <td className="p-3 text-slate-400">Wird jahrelang vorgehalten und als Munition genutzt</td>
                    <td className="p-3 text-slate-300">Fehler werden besprochen, verziehen und abgehakt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Chapter Detail Full-Screen / Modal Viewer */}
      {activeChapter && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  Teil {activeChapter.part} • Kapitel {activeChapter.chapterNumber}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {activeChapter.partTitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleBookmark(activeChapter.id)}
                  className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                    bookmarkedIds.includes(activeChapter.id)
                      ? 'bg-indigo-950 border-indigo-700 text-indigo-400'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                  title="Kapitel merken"
                >
                  <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(activeChapter.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveChapter(null)}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
              {/* Title Section */}
              <div className="space-y-2 border-b border-slate-800 pb-5">
                <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeChapter.title}
                </h2>
                <p className="text-sm sm:text-base text-indigo-300 font-medium">
                  {activeChapter.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {activeChapter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-950 border border-slate-800 text-slate-400 px-2.5 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 1. Zusammenfassung */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  1. Worum geht es? (Phänomen-Überblick)
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  {activeChapter.summary}
                </p>
              </div>

              {/* 2. Kernmechanismus & Psychologischer Hintergrund */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    Der manipulative Kernmechanismus
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeChapter.coreMechanism}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    Wissenschaftlicher Hintergrund
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeChapter.psychologicalBackground}
                  </p>
                </div>
              </div>

              {/* 3. So fühlt es sich von innen an */}
              <div className="p-5 rounded-xl bg-indigo-950/20 border border-indigo-900/30 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  So fühlt es sich von innen an (Das Erleben von Betroffenen)
                </h3>
                <p className="text-sm sm:text-base text-slate-200 italic font-serif-quote leading-relaxed">
                  „{activeChapter.victimExperience}“
                </p>
              </div>

              {/* 4. Warnsignale */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Typische Warnsignale & Symptome
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeChapter.warningSigns.map((sign, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1"
                    >
                      <span className="font-bold text-amber-400 block">Signal {idx + 1}</span>
                      <p className="leading-relaxed">{sign}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Konkrete Sofort-Schritte & Gegenstrategien */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Konkrete Handlungsschritte & Gegenstrategien
                </h3>
                <div className="space-y-2">
                  {activeChapter.concreteActionSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-950/10 border border-emerald-900/30 text-xs sm:text-sm text-slate-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-500">
                Psycho Spezial Extra • Wissenschaftlich fundiertes Wissen
              </span>
              <button
                type="button"
                onClick={() => setActiveChapter(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
