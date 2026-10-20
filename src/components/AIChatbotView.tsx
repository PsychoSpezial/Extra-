import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  Sparkles,
  ShieldAlert,
  Trash2,
  Copy,
  Check,
  User,
  RefreshCw,
  PhoneCall,
  Info
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const AIChatbotView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content: `Willkommen bei **Psycho Spezial**. Ich bin Ihr trauma-informierter KI-Begleiter.

Ich bin hier, um Ihre Wahrnehmung zu validieren, psychologische Manipulationsmechanismen (wie Gaslighting, Trauma-Bindung, Silent Treatment oder Double Binds) verständlich zu erklären und Ihnen Werkzeuge zur emotionalen Entlastung an die Hand zu geben.

*Hinweis:* Alles, was Sie hier teilen, bleibt in Ihrer aktuellen Sitzung. Ich ersetze keine Psychotherapie oder den Notruf, begleite Sie aber wissenschaftlich fundiert und respektvoll.

Womit kann ich Sie heute unterstützen?`,
      timestamp: 'Gerade eben'
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const suggestedQuestions = [
    'Wie unterscheidet sich verdeckter von offenem Narzissmus?',
    'Warum entschuldige ich mich immer, obwohl ich verletzt wurde (DARVO)?',
    'Was tun bei Silent Treatment (strafendem Schweigen)?',
    'Wie überwinde ich den biochemischen Entzug nach der Trennung?',
    'Mein Körper steht unter Daueralarm – was hilft sofort?'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputPrompt).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Netzwerk-Antwort war nicht erfolgreich');
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'Ich bin da und höre Ihnen zu. Bitte wiederholen Sie Ihre Frage kurz.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        role: 'assistant',
        content: `Es tut mir leid, dass gerade ein Verbindungsfehler aufgetreten ist.
Bitte denken Sie daran: Ihre Gefühle und Ihre Wahrnehmung sind real.
Wenn Sie akute Notfallhilfe benötigen, rufen Sie bitte das kostenlose Hilfetelefon unter **116 016** oder die Telefonseelsorge unter **0800 111 0 111** an.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    if (confirm('Möchten Sie den Chatverlauf wirklich zurücksetzen?')) {
      setMessages([
        {
          id: 'init-reset',
          role: 'assistant',
          content: 'Der Chat wurde zurückgesetzt. Wie kann ich Sie im Moment unterstützen?',
          timestamp: 'Gerade eben'
        }
      ]);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-14rem)] min-h-[580px] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl animate-in fade-in duration-200">
      {/* Chat Header */}
      <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-white">Psycho Spezial KI-Begleiter</h2>
              <span className="text-[10px] bg-sky-950 border border-sky-800 text-sky-300 font-semibold px-2 py-0.2 rounded-full">
                Gemini KI
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Traumainformiert • Wissenschaftlich • Diskret
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:116016"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-rose-950/60 text-rose-300 border border-rose-800/80"
          >
            <PhoneCall className="w-3 h-3 text-rose-400" />
            <span>Krisennotruf: 116 016</span>
          </a>

          <button
            type="button"
            onClick={handleClearHistory}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors cursor-pointer"
            title="Chatverlauf leeren"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 custom-scrollbar">
        {/* Sensitive Information Banner */}
        <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-900/30 flex items-start gap-2.5 text-xs text-sky-200">
          <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Dieser KI-Begleiter analysiert Beziehungsmuster, entlarvt Gaslighting und unterstützt bei der Deeskalation. Bei akuter Bedrohung oder Suizidgedanken wählen Sie bitte sofort den Notruf 110/112 oder die Telefonseelsorge.
          </p>
        </div>

        {messages.map((message) => {
          const isUser = message.role === 'user';
          return (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  isUser
                    ? 'bg-slate-800 text-slate-300 border border-slate-700'
                    : 'bg-indigo-950 border border-indigo-800 text-indigo-300'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed ${
                  isUser
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-slate-950/90 border border-slate-800 text-slate-200 rounded-tl-none shadow-sm'
                }`}
              >
                <div className="prose prose-invert prose-sm max-w-none whitespace-pre-wrap">
                  {message.content}
                </div>

                <div
                  className={`mt-2 pt-1 flex items-center justify-between text-[10px] ${
                    isUser ? 'text-indigo-200' : 'text-slate-500'
                  }`}
                >
                  <span>{message.timestamp}</span>
                  {!isUser && (
                    <button
                      type="button"
                      onClick={() => handleCopyMessage(message.id, message.content)}
                      className="hover:text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
                      title="Antwort kopieren"
                    >
                      {copiedId === message.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Kopiert</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Kopieren</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-950 border border-indigo-800 text-indigo-300 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 rounded-tl-none text-slate-400 text-sm flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin text-sky-400" />
              <span>Psycho Spezial reflektiert und formuliert...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto custom-scrollbar flex items-center gap-2 shrink-0">
        <span className="text-[11px] text-slate-500 shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-sky-400" /> Leitfragen:
        </span>
        {suggestedQuestions.map((q, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSendMessage(q)}
            className="text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer shrink-0"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-2 shrink-0"
      >
        <input
          type="text"
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          placeholder="Beschreiben Sie Ihre Situation oder stellen Sie eine Frage..."
          disabled={isLoading}
          className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!inputPrompt.trim() || isLoading}
          className="p-3 bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white rounded-xl transition-all shadow-md cursor-pointer shrink-0"
          aria-label="Nachricht absenden"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
