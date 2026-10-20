import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { INITIAL_COMMUNITY_POSTS } from './src/data/initialCommunityData.ts';
import type { CommunityPost } from './src/utils/psychoLogic.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// In-memory community storage initialized with realistic seed posts
let communityPosts: CommunityPost[] = [...INITIAL_COMMUNITY_POSTS];

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  try {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

const PSYCHO_SPEZIAL_SYSTEM_INSTRUCTION = `Du bist der wissenschaftlich fundierte, trauma-informierte KI-Begleiter der Aufklärungs- und Erstanlaufstellen-App "Psycho Spezial".
Dein Wissen basiert auf dem Werk "Psycho Spezial Extra" mit den vier Schwerpunkten:
1. Täterdynamiken & Manipulationssysteme (Narzisstisches Spektrum, verdeckter Narzissmus, Zwangskontrolle, Gaslighting, Double Binds, Wortsalat, Spiegeln, Future Faking, Breadcrumbing, Silent Treatment, Triangulation, narzisstische Wut, Stalking).
2. Opferdynamiken & Folgeschäden (Eierschalenlaufen, kognitive Dissonanz, Trauma-Bindung, Neurozeption & Daueralarm des Nervensystems, Fawn-Reaktion/Unterwerfung, Brain Fog, toxische Scham, Täter-Introjekt, Identitätsverlust, Dissoziation, Komplexe PTBS/K-PTBS, Somatik).
3. Spezialthemen (Emotionaler Inzest, Moral Injury, Generationsaufträge, Trigger-Ketten, psychische Entropie, projektive Identifizierung, Defendersyndrom, Barrieren des Gehens, Hoovering).
4. Praxis & Stabilisierung (Warnsignale/Red Flags, Grenzen ohne Eskalation via BIFF- und Grey-Rock-Methode, Phasenmodell der Traumatherapie: Stabilisierung vor Aufarbeitung, Selbstmitgefühl, Neuroplastizität).

Deine Kommunikationsleitlinien:
- Höchste Validierung: Betroffene von Gaslighting zweifeln an ihrem Verstand. Bestätige behutsam, dass ihre Wahrnehmung zählt und ihre körperlichen Reaktionen (Daueralarm, Nebel im Kopf) normale Reaktionen auf unnormale Zustände sind.
- Wissenschaftlich & präzise: Erkläre psychologische Mechanismen klar, ohne in Fachjargon zu ersticken. Nutze treffende Metaphern (z.B. "biochemische Suchtbindung statt Liebe", "Nebel im Kopf als Schutzfunktion").
- Deeskalation & Sicherheit: Rate NIEMALS zu impulsiven Konfrontationen mit aggressiven Personen. Empfehle bei Bedarf sachliche Distanzierung (Grey Rock, Yellow Rock, No Contact) und Sicherheitsplanung.
- Krisen-Erstanlaufstelle: Falls der Nutzer Suizidgedanken, akute häusliche Gewalt oder unmittelbare Lebensgefahr äußert, verweise einfühlsam und sofort auf die Notfall-Hotlines: TelefonSeelsorge (0800 111 0 111 / 0800 111 0 222), Hilfetelefon Gewalt gegen Frauen (116 016), Hilfetelefon Männer (0800 1239900) oder den Polizeinotruf 110.
- Disclaimer: Du bietest einfühlsame Orientierung und Psychoedukation, ersetzt jedoch keine persönliche ärztliche, psychotherapeutische oder juristische Beratung.
- Antworte stets auf Deutsch, in warmem, würdevollem und klarem Ton.`;

// API Routes
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    hasApiKey: !!process.env.GEMINI_API_KEY
  });
});

// Community GET
app.get('/api/community/posts', (_req, res) => {
  res.json({ posts: communityPosts });
});

// Community POST (Create Post)
app.post('/api/community/posts', (req, res) => {
  const { title, content, category, authorPseudonym, avatarSeed, triggerWarning, tags } = req.body;

  if (!title || !content || !category) {
    res.status(400).json({ error: 'Titel, Inhalt und Kategorie sind erforderlich.' });
    return;
  }

  const newPost: CommunityPost = {
    id: `post-${Date.now()}`,
    title: String(title).slice(0, 150),
    content: String(content).slice(0, 4000),
    category: category || 'Alltägliche Bewältigung',
    authorPseudonym: authorPseudonym || 'Anonymer Gast',
    avatarSeed: avatarSeed || 'guest',
    createdAt: 'Gerade eben',
    triggerWarning: triggerWarning ? String(triggerWarning).slice(0, 100) : undefined,
    reactions: { understand: 1, notAlone: 1, strength: 1, insightful: 0 },
    replies: [],
    tags: Array.isArray(tags) ? tags.slice(0, 5) : []
  };

  communityPosts = [newPost, ...communityPosts];
  res.status(201).json({ success: true, post: newPost });
});

// Community React
app.post('/api/community/posts/:id/react', (req, res) => {
  const { id } = req.params;
  const { reactionType } = req.body;

  const post = communityPosts.find((p) => p.id === id);
  if (!post) {
    res.status(404).json({ error: 'Beitrag nicht gefunden.' });
    return;
  }

  if (reactionType && post.reactions[reactionType as keyof typeof post.reactions] !== undefined) {
    post.reactions[reactionType as keyof typeof post.reactions] += 1;
  }

  res.json({ success: true, reactions: post.reactions });
});

// Community Reply
app.post('/api/community/posts/:id/replies', (req, res) => {
  const { id } = req.params;
  const { content, authorPseudonym, avatarSeed } = req.body;

  if (!content) {
    res.status(400).json({ error: 'Antwort-Inhalt fehlt.' });
    return;
  }

  const post = communityPosts.find((p) => p.id === id);
  if (!post) {
    res.status(404).json({ error: 'Beitrag nicht gefunden.' });
    return;
  }

  const newReply = {
    id: `rep-${Date.now()}`,
    authorPseudonym: authorPseudonym || 'Anonyme Stimme',
    avatarSeed: avatarSeed || 'voice',
    content: String(content).slice(0, 1500),
    createdAt: 'Gerade eben',
    empathyCount: 1
  };

  post.replies.push(newReply);
  res.status(201).json({ success: true, reply: newReply });
});

// AI Chatbot Route with Gemini SDK
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: 'Keine Nachrichten übermittelt.' });
    return;
  }

  const lastUserMessage = messages[messages.length - 1]?.content || '';

  // If Gemini API is available, generate real AI response
  if (aiClient) {
    try {
      // Filter out leading assistant greetings so conversation starts with user turn
      const validMessages = messages.filter((m: { role: string; content: string }) => m && m.content && m.content.trim());
      const firstUserIndex = validMessages.findIndex((m: { role: string }) => m.role === 'user');
      const messagesToUse = firstUserIndex >= 0 ? validMessages.slice(firstUserIndex) : validMessages;

      // Build conversation history ensuring proper roles (user / model)
      const rawContents = messagesToUse.map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      // Merge sequential turns of same role if any
      const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
      for (const turn of rawContents) {
        if (contents.length > 0 && contents[contents.length - 1].role === turn.role) {
          contents[contents.length - 1].parts[0].text += `\n\n${turn.parts[0].text}`;
        } else {
          contents.push(turn);
        }
      }

      // Execute with a 7-second timeout promise race so server never hangs
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('AI Request Timeout')), 7500)
      );

      const aiCallPromise = aiClient.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents,
        config: {
          systemInstruction: PSYCHO_SPEZIAL_SYSTEM_INSTRUCTION,
          temperature: 0.7,
          topP: 0.95
        }
      });

      const response: any = await Promise.race([aiCallPromise, timeoutPromise]);
      const replyText = response?.text || 'Ich bin da und höre Ihnen zu. Bitte beschreiben Sie Ihre Situation kurz.';

      res.json({
        reply: replyText,
        source: 'gemini-3.1-flash-lite'
      });
      return;
    } catch (err: any) {
      console.error('Gemini API Error in /api/chat (using fallback):', err?.message || err);
      // Fall through to resilient psycho-educational fallback
    }
  }

  // Resilient fallback providing immediate trauma-informed answers even without active key
  let fallbackReply = `Ich höre Sie und verstehe, wie belastend und verwirrend diese Situation ist.
Was Sie beschreiben, ist häufig Teil toxischer Beziehungsdynamiken (wie Gaslighting, intermittierende Verstärkung oder das Gefühl, auf Eierschalen zu laufen).

Drei wichtige Gedanken zur sofortigen Entlastung:
1. **Ihre Wahrnehmung ist real:** Wenn Sie sich nach Gesprächen erschöpft und verwirrt fühlen, ist das oft das Resultat von Täter-Opfer-Umkehr (DARVO) oder Wortsalat.
2. **Körperlicher Schutz geht vor:** Ihr Nervensystem braucht jetzt vor allem Ruhe und Sicherheit. Versuchen Sie, sich nicht in Rechtfertigungsdebatten (JADE) verwickeln zu lassen.
3. **Schauen Sie in unsere Mediathek:** Dort finden Sie in Teil 1 (Täterdynamiken) und Teil 4 (Grenzen setzen ohne Eskalation) konkrete Strategien nach der Grey-Rock-Methode.

Falls Sie sich in akuter Gefahr befinden oder emotionale Notfallhilfe brauchen, rufen Sie bitte die kostenlose Telefonseelsorge unter **0800 111 0 111** oder das Hilfetelefon unter **116 016** an.`;

  const lower = lastUserMessage.toLowerCase();
  if (lower.includes('gaslighting') || lower.includes('verrückt') || lower.includes('zweifel')) {
    fallbackReply = `Gaslighting ist eine der zerstörerischsten Formen psychischer Manipulation. Der Täter leugnet nachweisbare Tatsachen („Das bildest du dir nur ein“, „Du verdrehst immer alles“), bis Sie Ihrem eigenen Gedächtnis und Verstand misstrauen.

**Was Sie jetzt tun können:**
- Hören Sie auf, den Täter von der Wahrheit überzeugen zu wollen. Wer manipulieren will, sucht keine Wahrheit.
- Führen Sie ein sicheres Gedächtnisprotokoll (Notizbuch oder passwortgeschützte App), in dem Sie Vorfälle zeitnah festhalten.
- Sagen Sie innerlich oder ruhig laut: *„Ich nehme das anders wahr und werde darüber nicht debattieren.“*
- Lesen Sie Kapitel 5 aus Teil 1 in unserer Mediathek: „Psychologische Waffen – Gaslighting, Double Binds und Wortsalat“.`;
  } else if (lower.includes('schuld') || lower.includes('grenze') || lower.includes('nein')) {
    fallbackReply = `Schuldgefühle beim Setzen von Grenzen sind völlig normal, wenn Sie an emotionale Zwangskontrolle gewöhnt sind. Täter bestrafen Grenzen oft mit Kälte, Wut oder Vorwürfen („Du denkst nur an dich“).

**Wichtig:**
- Eine Grenze ist kein Angriff auf den anderen, sondern der Schutz Ihrer eigenen Integrität.
- Wenden Sie die **BIFF-Regel** an: Brief (kurz), Informative (sachlich), Friendly (neutral-höflich), Firm (bestimmt).
- Rechtfertigen Sie Ihre Grenze nicht endlos. Jede Erklärung gibt dem Täter neuen Angriffsstoff.`;
  } else if (lower.includes('hoover') || lower.includes('trennung') || lower.includes('vermissen') || lower.includes('rückfall')) {
    fallbackReply = `Dieses Gefühl nach der Trennung gleicht einem biochemischen Drogenentzug. Durch die intermittierende Belohnung (Trauma-Bonding) verlangt Ihr Belohnungszentrum im Gehirn nach der gewohnten Dosis Erleichterung durch den Täter.

**Schutzregeln für diese Phase:**
- Halten Sie strikten Null-Kontakt (**No Contact**). Jede SMS oder Antwort wirft den biochemischen Entzugsprozess zurück.
- Schauen Sie auf Ihre Realitätsliste: Schreiben Sie die 5 schmerzhaftesten Demütigungen auf und lesen Sie diese, wenn Sie nostalgisch werden.
- Vertiefen Sie Kapitel 9 aus Teil 3: „Nach der Trennung – Hoovering, Rückfallkontakte und die lange Nachwirkung“.`;
  }

  res.json({
    reply: fallbackReply,
    source: 'psycho-spezial-fallback'
  });
});

// Audio Transcription Endpoint via gemini-3.5-transcribe
app.post('/api/transcribe', async (req, res) => {
  const { base64Audio, mimeType } = req.body;

  if (!base64Audio) {
    res.status(400).json({ error: 'Keine Audiodaten übermittelt.' });
    return;
  }

  if (aiClient) {
    try {
      const audioPart = {
        inlineData: {
          mimeType: mimeType || 'audio/webm',
          data: base64Audio
        }
      };

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.5-transcribe',
        contents: {
          parts: [
            audioPart,
            { text: 'Transkribiere diese Tonaufnahme präzise und wortgetreu auf Deutsch. Korrigiere keine Absichten, sondern erfasse die Gedanken des Sprechenden.' }
          ]
        }
      });

      const transcribedText = response.text || '';
      res.json({ text: transcribedText, source: 'gemini-3.5-transcribe' });
      return;
    } catch (err: any) {
      console.error('Transcription error via Gemini 3.5 transcribe:', err);
    }
  }

  // Graceful fallback if offline
  res.json({
    text: 'Audiospur empfangen. (Hinweis: Die Live-Spracherkennung Ihres Browsers transkribiert kontinuierlich direkt im Canvas weiter).',
    source: 'fallback'
  });
});

// AI Thought Structurer Endpoint (Gedanken sortieren) via gemini-3.8-flash
app.post('/api/sort-thoughts', async (req, res) => {
  const { transcript } = req.body;

  if (!transcript || !transcript.trim()) {
    res.status(400).json({ error: 'Transkript-Text fehlt.' });
    return;
  }

  const prompt = `Du bist ein traumainformierter psychologischer Experte für die Aufklärungs-App "Psycho Spezial".
Ein Nutzer hat gerade seine chaotischen, belastenden Gedanken verbalisiert und per Spracheingabe transkribiert:

--- VERBALISIERTE GEDANKEN DES NUTZERS ---
"${transcript}"
------------------------------------------

Bitte sortiere und strukturiere diesen Gedankenstrom warmherzig, entlastend und psychologisch fundiert nach folgenden 5 Abschnitten:

### 1. Emotionale Kernbotschaft
Fasse in 1-2 Sätzen zusammen, welches Grundgefühl (z.B. Angst vor Verlassenwerden, Erschöpfung, Wut, Scham, Sehnsucht nach Ruhe) hier im Kern spricht.

### 2. Erkannte Beziehungsmuster
Welche typischen Muster (z.B. Schuldübernahme, Fawn-Reaktion / Unterwerfung, kognitive Dissonanz, Gaslighting-Echo, Eierschalenlaufen) klingen hier an? Benenne sie behutsam.

### 3. Fakten vs. Interpretationen
- **Was ist der objektive Fakt?** (Was ist tatsächlich geschehen?)
- **Was ist die Täterstimme / der innere Kritiker?** (Welche Selbstabwertungen oder Zweifel drängen sich auf?)

### 4. Somatische Sofort-Beruhigung
Eine kleine, machbare körperliche Mini-Übung für den aktuellen Moment (z.B. Vagus-Atmung, Füße spüren, Kaltwasser).

### 5. Nächster konkreter Schutzschritt
Ein einziger machbarer Schritt für die nächsten 24 Stunden (z.B. keine impulsive Nachricht senden, 24-Stunden-Regel einhalten, Spaziergang machen).`;

  if (aiClient) {
    try {
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('AI Request Timeout')), 7500)
      );

      const aiCallPromise = aiClient.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config: {
          systemInstruction: 'Du bist ein erfahrener Traumapsychologe und Entlastungs-Begleiter. Antworte auf Deutsch, einfühlsam, validierend und strukturiert.',
          temperature: 0.5
        }
      });

      const response: any = await Promise.race([aiCallPromise, timeoutPromise]);

      res.json({
        structuredAnalysis: response?.text || '',
        source: 'gemini-3.1-flash-lite'
      });
      return;
    } catch (err: any) {
      console.error('Error sorting thoughts with Gemini (using fallback):', err?.message || err);
    }
  }

  // Resilient heuristic structure fallback
  const fallbackAnalysis = `### 1. Emotionale Kernbotschaft
Sie erleben gerade eine hohe emotionale Anspannung und das verständliche Bedürfnis, die verwirrenden Eindrücke der letzten Interaktion zu ordnen.

### 2. Erkannte Beziehungsmuster
- **Schuldumkehr & Grübeln:** Sie neigen dazu, die Verantwortung für die Disharmonie bei sich zu suchen.
- **Daueralarm des Nervensystems:** Ihr Körper befindet sich im Alarmmodus und verlangt nach sofortiger Klärung, obwohl Ruhe der sicherere Weg ist.

### 3. Fakten vs. Interpretationen
- **Objektiver Fakt:** Ein belastendes Gespräch oder Verhalten hat Ihre Grenzen überschritten.
- **Täter-Echo:** Der Gedanke, „alles falsch gemacht zu haben“, ist eine erlernte Reaktion auf Gaslighting.

### 4. Somatische Sofort-Beruhigung
Legen Sie eine Hand auf die Brust und atmen Sie langsam 4 Sekunden durch die Nase ein und 7 Sekunden durch den Mund aus. Entspannen Sie bewusst Ihre Kiefermuskulatur.

### 5. Nächster konkreter Schutzschritt
Schreiben Sie vorerst keine Nachricht an die beteiligte Person. Warten Sie 24 Stunden, bis der Adrenalinspiegel gesunken ist.`;

  res.json({
    structuredAnalysis: fallbackAnalysis,
    source: 'fallback'
  });
});

// Setup Vite middleware in dev or serve dist in prod
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Psycho Spezial server running at http://0.0.0.0:${port}`);
  });
}

startServer();
