import type { VideoContent } from '../data/videoData.ts';

export function filterVideos(
  videos: VideoContent[],
  category: string,
  query: string
): VideoContent[] {
  const cleanQuery = query.trim().toLowerCase();

  return videos.filter((video) => {
    const matchesCategory = category === 'Alle' || video.category === category;
    if (!matchesCategory) return false;

    if (!cleanQuery) return true;

    const searchable = [
      video.title,
      video.subtitle,
      video.speaker,
      video.speakerRole,
      video.summary,
      video.scientificContext,
      ...video.keyTakeaways,
      ...video.tags
    ].join(' ').toLowerCase();

    return searchable.includes(cleanQuery);
  });
}

export function formatAudioDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export interface StructuredThoughtResult {
  emotionalCore: string;
  identifiedPatterns: string[];
  factsVsEvaluations: {
    factualCore: string;
    internalizedGuiltOrCritic: string;
  };
  somaticStabilizationStep: string;
  suggestedAction: string;
}

export function parseStructuredThoughtText(aiText: string): StructuredThoughtResult {
  // Gracefully parse structured response from Gemini or fallback heuristic
  return {
    emotionalCore: extractSection(aiText, ['Emotionale Kernbotschaft', 'Emotionen', 'Gefühle']) ||
      'Belastung, emotionale Verwirrung und das Bedürfnis nach Klarheit und Sicherheit.',
    identifiedPatterns: extractBulletPoints(aiText, ['Muster', 'Manipulationsdynamiken', 'Erkannte Muster']) || [
      'Gefahr der Schuldübernahme (DARVO-Echo)',
      'Erhöhte Alarmbereitschaft des Nervensystems'
    ],
    factsVsEvaluations: {
      factualCore: extractSection(aiText, ['Fakten', 'Objektiver Kern', 'Tatsachen']) ||
        'Eine schwierige Interaktion hat stattgefunden, bei der Ihre Grenzen berührt wurden.',
      internalizedGuiltOrCritic: extractSection(aiText, ['Bewertung', 'Innerer Kritiker', 'Zweifel']) ||
        'Selbstzweifel und der Impuls, die Verantwortung allein bei sich zu suchen.'
    },
    somaticStabilizationStep: extractSection(aiText, ['Körperübung', 'Stabilisierung', 'Nervensystem']) ||
      'Atmen Sie dreimal tief durch die Nase ein und mit einem langen Seufzer durch den Mund aus. Spüren Sie Ihre Füße auf dem Boden.',
    suggestedAction: extractSection(aiText, ['Handlungsschritt', 'Empfehlung', 'Nächster Schritt']) ||
      'Keine impulsiven Nachrichten senden. Gönnen Sie sich 24 Stunden Pause zur Beruhigung des Nervensystems.'
  };
}

function extractSection(text: string, headings: string[]): string | null {
  for (const heading of headings) {
    const regex = new RegExp(`(?:###?\\s*)?${heading}[:\\s*]*\\n*([^#\\n]+(?:\\n(?!#|\\d\\.)[^#\\n]+)*)`, 'i');
    const match = text.match(regex);
    if (match && match[1]?.trim()) {
      return match[1].trim().replace(/^\*+|\*+$/g, '');
    }
  }
  return null;
}

function extractBulletPoints(text: string, headings: string[]): string[] | null {
  for (const heading of headings) {
    const regex = new RegExp(`(?:###?\\s*)?${heading}[:\\s*]*\\n*([\\s\\S]*?)(?=\\n###?|\\n\\n[A-Z]|$)`, 'i');
    const match = text.match(regex);
    if (match && match[1]) {
      const lines = match[1]
        .split('\n')
        .map((l) => l.replace(/^[-*•\d.]+\s*/, '').trim())
        .filter((l) => l.length > 3);
      if (lines.length > 0) return lines.slice(0, 4);
    }
  }
  return null;
}
