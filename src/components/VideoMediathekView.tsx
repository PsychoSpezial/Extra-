import React, { useState, useMemo } from 'react';
import {
  Video,
  Play,
  Clock,
  User,
  GraduationCap,
  Sparkles,
  Search,
  Tag,
  X,
  CheckCircle2,
  BookOpen,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { VIDEO_DATABASE, VideoContent, VideoTimestamp } from '../data/videoData.ts';
import { filterVideos } from '../utils/videoAndAudioLogic.ts';

export const VideoMediathekView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState<VideoContent | null>(null);
  const [currentTimestampSeconds, setCurrentTimestampSeconds] = useState<number>(0);

  const categories = [
    'Alle',
    'Experteninterviews',
    'Erklärvideos psychische Erkrankungen',
    'Entspannung & Achtsamkeit'
  ];

  const filteredVideos = useMemo(() => {
    return filterVideos(VIDEO_DATABASE, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Video className="w-4 h-4" />
            Wissenschaftliche Video-Mediathek
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Experten-Gespräche, Krankheitsbilder & Praxis-Übungen
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Wissenschaftlich fundiert und leicht verständlich aufbereitet: Interviews mit führenden Fachärzten, detaillierte Erklärungen zu K-PTBS & Narzissmus sowie geführte somatische Achtsamkeitsübungen.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Videos durchsuchen: z.B. K-PTBS, Sauer, Vagus, Gericht, PMR..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
            />
          </div>

          <div className="text-xs text-slate-400">
            <span>{filteredVideos.length} Videos verfügbar</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            onClick={() => {
              setActiveVideo(video);
              setCurrentTimestampSeconds(0);
            }}
            className="group bg-slate-900 border border-slate-800 hover:border-rose-500/50 rounded-2xl overflow-hidden transition-all flex flex-col justify-between hover:shadow-xl hover:shadow-rose-950/20 cursor-pointer"
          >
            {/* Video Thumbnail Simulation */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent z-10" />

              {/* Category-based visual gradient orb */}
              <div
                className={`w-32 h-32 rounded-full blur-2xl opacity-20 absolute ${
                  video.category === 'Experteninterviews'
                    ? 'bg-indigo-500'
                    : video.category === 'Erklärvideos psychische Erkrankungen'
                    ? 'bg-rose-500'
                    : 'bg-teal-500'
                }`}
              />

              <div className="relative z-20 w-12 h-12 rounded-2xl bg-rose-600/90 group-hover:bg-rose-500 group-hover:scale-110 text-white flex items-center justify-center transition-all shadow-lg shadow-rose-950/60">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </div>

              <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-center justify-between text-[11px] text-slate-300">
                <span className="font-bold px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-rose-300">
                  {video.category}
                </span>
                <span className="font-mono bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" /> {video.duration}
                </span>
              </div>
            </div>

            {/* Video Details */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium line-clamp-1">
                  {video.subtitle}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 pt-1">
                  <GraduationCap className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="font-semibold">{video.speaker}</span>
                  <span className="text-[10px] text-slate-500 truncate">({video.speakerRole})</span>
                </div>
                <p className="text-xs text-slate-400/90 leading-relaxed line-clamp-2 pt-1">
                  {video.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-rose-400 group-hover:text-rose-300">
                <span>Video ansehen & Notizen</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-2">
          <Video className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-sm font-bold text-slate-300">Keine Videos gefunden</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Versuchen Sie einen anderen Suchbegriff oder wählen Sie „Alle“ als Kategorie.
          </p>
        </div>
      )}

      {/* Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                  {activeVideo.category}
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  {activeVideo.speaker}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar">
              {/* Responsive Video Screen Container */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-950 mb-3 animate-pulse">
                  <Play className="w-7 h-7 ml-1 fill-current" />
                </div>
                <h3 className="text-lg font-bold text-white max-w-md">{activeVideo.title}</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm">
                  {activeVideo.subtitle} • Dauer: {activeVideo.duration}
                </p>
                <div className="flex items-center gap-3 mt-4 text-xs">
                  <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-semibold">
                    HD-Audio & Untertitel verfügbar
                  </span>
                  <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    Wissenschaftlich geprüft
                  </span>
                </div>
              </div>

              {/* Title & Speaker meta */}
              <div className="space-y-2 border-b border-slate-800 pb-5">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  {activeVideo.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span className="font-semibold text-rose-400">{activeVideo.speaker}</span>
                  <span>•</span>
                  <span className="text-slate-400">{activeVideo.speakerRole}</span>
                  <span>•</span>
                  <span className="text-indigo-400">{activeVideo.relatedChapterTitle}</span>
                </div>
              </div>

              {/* Interactive Chapters / Timestamps */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-rose-400" />
                  Kapitelmarken & Themenabschnitte
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeVideo.timestamps.map((ts, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentTimestampSeconds(ts.seconds)}
                      className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-rose-500/50 text-left flex items-center justify-between text-xs transition-colors cursor-pointer"
                    >
                      <span className="text-slate-200">{ts.label}</span>
                      <span className="font-mono font-bold text-rose-400 ml-2">{ts.time}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3 Core Takeaways */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Die 3 zentralen wissenschaftlichen Kernaussagen
                </h3>
                <div className="space-y-2">
                  {activeVideo.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Context */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
                <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">
                  Wissenschaftliche Fundierung:
                </span>
                <p className="text-slate-300 italic">{activeVideo.scientificContext}</p>
              </div>

              {/* Transcript Excerpt */}
              <div className="p-5 rounded-xl bg-indigo-950/20 border border-indigo-900/30 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  Transkript-Auszug
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 italic font-serif-quote leading-relaxed">
                  {activeVideo.transcriptExcerpt}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-500">
                Psycho Spezial Extra • Videoportal
              </span>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
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
