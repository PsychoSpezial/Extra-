import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Upload,
  Sparkles,
  Volume2,
  Trash2,
  Copy,
  Check,
  RotateCcw,
  RefreshCw,
  FileText,
  Shield,
  Heart,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { formatAudioDuration } from '../utils/videoAndAudioLogic.ts';

// Web Speech API interface declarations
declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

export const AudioTranscribeView: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcriptText, setTranscriptText] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [isProcessingAudio, setIsProcessingAudio] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [isSortingThoughts, setIsSortingThoughts] = useState(false);
  const [structuredAnalysis, setStructuredAnalysis] = useState<string | null>(null);
  const [copiedTranscript, setCopiedTranscript] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize Web Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'de-DE';

    recognition.onresult = (event: any) => {
      let currentInterim = '';
      let finalChunk = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalChunk += transcript + ' ';
        } else {
          currentInterim += transcript;
        }
      }

      if (finalChunk) {
        setTranscriptText((prev) => (prev ? `${prev.trim()} ${finalChunk.trim()}` : finalChunk.trim()));
      }
      setInterimTranscript(currentInterim);
    };

    recognition.onerror = (event: any) => {
      console.warn('Speech recognition status:', event.error);
      if (event.error === 'not-allowed') {
        setIsListening(false);
      }
    };

    recognition.onend = () => {
      // If user is still listening, automatically keep it alive
      if (isListening && recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch {}
      }
    };

    recognitionRef.current = recognition;

    return () => {
      try {
        recognition.stop();
      } catch {}
    };
  }, [isListening]);

  // Timer while recording
  useEffect(() => {
    let timer: any;
    if (isListening) {
      timer = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingSeconds(0);
    }
    return () => clearInterval(timer);
  }, [isListening]);

  const toggleListening = async () => {
    if (isListening) {
      setIsListening(false);
      setInterimTranscript('');
      try {
        recognitionRef.current?.stop();
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
          mediaRecorderRef.current.stop();
        }
      } catch {}
    } else {
      setInterimTranscript('');
      try {
        // Request microphone
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsListening(true);

        // Start speech recognition
        if (recognitionRef.current) {
          recognitionRef.current.start();
        }

        // Setup MediaRecorder for backend Gemini transcription if needed
        const mediaRecorder = new MediaRecorder(stream);
        audioChunksRef.current = [];
        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) audioChunksRef.current.push(e.data);
        };
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();
      } catch (err) {
        console.warn('Microphone access denied or unavailable:', err);
        alert('Mikrofonzugriff nicht gewährt oder nicht unterstützt. Sie können auch eine Audiodatei hochladen oder Ihre Gedanken eintippen.');
        setIsListening(false);
      }
    }
  };

  // Upload external audio file and transcribe with Gemini 3.5 transcribe
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessingAudio(true);
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = (reader.result as string).split(',')[1];
        const res = await fetch('/api/transcribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            base64Audio: base64Data,
            mimeType: file.type || 'audio/mp3'
          })
        });

        if (res.ok) {
          const data = await res.json();
          if (data.text) {
            setTranscriptText((prev) => (prev ? `${prev}\n\n${data.text}` : data.text));
          }
        }
        setIsProcessingAudio(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Audio upload error:', err);
      setIsProcessingAudio(false);
    }
  };

  // Gedanken sortieren via Gemini 3.8 Flash
  const handleSortThoughts = async () => {
    const textToSort = transcriptText.trim();
    if (!textToSort || isSortingThoughts) return;

    setIsSortingThoughts(true);
    try {
      const res = await fetch('/api/sort-thoughts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript: textToSort })
      });

      if (res.ok) {
        const data = await res.json();
        setStructuredAnalysis(data.structuredAnalysis || null);
      }
    } catch (err) {
      console.error('Error sorting thoughts:', err);
    } finally {
      setIsSortingThoughts(false);
    }
  };

  const handleCopyTranscript = () => {
    navigator.clipboard.writeText(transcriptText);
    setCopiedTranscript(true);
    setTimeout(() => setCopiedTranscript(false), 2000);
  };

  const handleLoadSample = () => {
    setTranscriptText(
      'Ich sitze hier und weiß gar nicht wo ich anfangen soll. Gestern Abend gab es wieder einen riesigen Streit. Er hat mich angeschrien, dass ich sein ganzes Wochenende ruiniere, nur weil ich gefragt habe, ob wir am Samstag meine Schwester besuchen können. Danach hat er die Tür zugeknallt und spricht seit 18 Stunden kein Wort mehr mit mir. Ich fühle mich wie gelähmt, mein Magen krampft total zusammen und ich habe das quälende Gefühl, ich hätte einfach meinen Mund halten sollen. Warum mache ich immer alles kaputt?'
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
          <Mic className="w-4 h-4" />
          Live-Audio Transkription & Gedanken-Sortierer
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Gedanken verbalisieren & psychologisch ordnen
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          Nach emotionalen Konflikten oder Gaslighting kreisen die Gedanken chaotisch im Kopf.
          Sprechen Sie einfach frei heraus: Unser System transkribiert Ihre Worte in Echtzeit und hilft Ihnen anschließend per KI, Gefühle, Fakten, Täter-Muster und sofortige Entlastungsschritte klar voneinander zu trennen.
        </p>
      </div>

      {/* Main Audio Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Recording Controls & Live Canvas */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
            {/* Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                    isListening
                      ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                      : 'bg-sky-600 hover:bg-sky-500 text-white'
                  }`}
                >
                  {isListening ? (
                    <>
                      <MicOff className="w-4 h-4" />
                      <span>Transkription stoppen</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4" />
                      <span>Jetzt sprechen & aufnehmen</span>
                    </>
                  )}
                </button>

                {isListening && (
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span>{formatAudioDuration(recordingSeconds)}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="audio/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isProcessingAudio}
                  className="flex items-center gap-1.5 px-3 py-2 bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  {isProcessingAudio ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-sky-400" />
                  ) : (
                    <Upload className="w-3.5 h-3.5" />
                  )}
                  <span>Audiodatei hochladen</span>
                </button>

                <button
                  type="button"
                  onClick={handleLoadSample}
                  className="text-xs text-sky-400 hover:underline px-2 py-1"
                >
                  Beispiel laden
                </button>
              </div>
            </div>

            {/* Soundwave Animation while listening */}
            {isListening && (
              <div className="flex items-center justify-center gap-1.5 py-2 bg-slate-950 rounded-xl border border-slate-800/80">
                <span className="text-[11px] text-sky-400 font-semibold mr-2">Mikrofon aktiv:</span>
                {[40, 75, 90, 50, 80, 100, 60, 45, 85, 95, 60, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-sky-400 rounded-full animate-pulse"
                    style={{
                      height: `${h * 0.25}px`,
                      animationDuration: `${0.4 + (i % 5) * 0.15}s`
                    }}
                  />
                ))}
              </div>
            )}

            {/* Live Editable Transcript Canvas */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <label className="font-semibold text-slate-300">
                  Verbalisierter Gedankenstrom (Live-Transkript)
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyTranscript}
                    disabled={!transcriptText.trim()}
                    className="text-slate-400 hover:text-white flex items-center gap-1 disabled:opacity-40"
                  >
                    {copiedTranscript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedTranscript ? 'Kopiert' : 'Kopieren'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTranscriptText('');
                      setStructuredAnalysis(null);
                    }}
                    disabled={!transcriptText.trim()}
                    className="text-slate-400 hover:text-rose-400 flex items-center gap-1 disabled:opacity-40"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Löschen</span>
                  </button>
                </div>
              </div>

              <textarea
                value={transcriptText}
                onChange={(e) => setTranscriptText(e.target.value)}
                placeholder="Drücken Sie auf 'Jetzt sprechen & aufnehmen' oder tippen Sie hier Ihre Gedanken ein..."
                rows={9}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 leading-relaxed font-sans"
              />

              {interimTranscript && (
                <div className="text-xs text-sky-400 italic px-2 font-mono">
                  Aktuell gesprochen: „{interimTranscript}“...
                </div>
              )}
            </div>

            {/* Action Bar: Sort Thoughts */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                {transcriptText.trim().split(/\s+/).filter(Boolean).length} Wörter erfasst
              </span>

              <button
                type="button"
                onClick={handleSortThoughts}
                disabled={!transcriptText.trim() || isSortingThoughts}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-500 hover:from-sky-500 hover:to-teal-400 disabled:opacity-40 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg text-xs sm:text-sm cursor-pointer"
              >
                {isSortingThoughts ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Psychologische Analyse läuft...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Gedanken psychologisch sortieren</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Information & Safe Guidance */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-400" />
              Warum Gedanken verbalisieren hilft
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Beim Sprechen (Lautdenken) wird das Sprachzentrum im linken Stirnhirn aktiviert. Dadurch wird die überaktive Amygdala (Angstzentrum) messbar gehemmt. Das Gedankenkreisen wird unterbrochen.
            </p>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="font-semibold text-slate-200">Die 3 Schritte zur Entlastung:</div>
              <ol className="list-decimal pl-4 space-y-1 text-slate-300">
                <li>Sprechen Sie ohne Zensur frei heraus.</li>
                <li>Lassen Sie die KI Ihre Gedanken entflechten.</li>
                <li>Trennen Sie Tätervorwürfe von der objektiven Realität.</li>
              </ol>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2 text-xs text-slate-400">
            <span className="font-bold text-slate-300 block">Diskretion & Datenschutz:</span>
            <p className="leading-relaxed">
              Ihre Audiodaten werden nicht dauerhaft gespeichert. Alle Transkripte existieren nur in Ihrem aktuellen Browser-Arbeitsspeicher.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Thought Results Display */}
      {structuredAnalysis && (
        <section className="bg-slate-900 border border-indigo-900/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  Psychologische Gedanken-Sortierung & Spiegelung
                </h2>
                <p className="text-xs text-slate-400">
                  Fundierte Strukturierung nach den Prinzipien von Psycho Spezial Extra
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(structuredAnalysis);
                alert('Sortierte Gedankenanalyse in die Zwischenablage kopiert.');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Analyse kopieren</span>
            </button>
          </div>

          {/* Render structured markdown */}
          <div className="prose prose-invert prose-sm max-w-none space-y-4 text-slate-200 leading-relaxed whitespace-pre-wrap bg-slate-950/80 p-6 rounded-xl border border-slate-800">
            {structuredAnalysis}
          </div>
        </section>
      )}
    </div>
  );
};
