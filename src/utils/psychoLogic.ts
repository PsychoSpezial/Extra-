import type { Chapter } from '../data/knowledgeBase.ts';

export interface AssessmentQuestion {
  id: string;
  category: 'Täterdynamik' | 'Opferempfinden' | 'Isolation' | 'Körper';
  text: string;
  explanation: string;
}

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'q1',
    category: 'Opferempfinden',
    text: 'Haben Sie das Gefühl, „auf Eierschalen zu laufen“ und ständig die Laune des anderen vorausahnen zu müssen?',
    explanation: 'Daueranspannung und das Vermeiden jeglicher Auslöser sind klassische Anzeichen für ein hypererregtes Nervensystem in unberechenbaren Beziehungen.'
  },
  {
    id: 'q2',
    category: 'Täterdynamik',
    text: 'Werden Geschehnisse verdreht oder geleugnet („Das habe ich nie gesagt“, „Du bist zu empfindlich / bildest dir das ein“)?',
    explanation: 'Gaslighting zielt darauf ab, Ihr Vertrauen in Ihre eigene Wahrnehmung, Ihr Gedächtnis und Ihren Verstand zu zerstören.'
  },
  {
    id: 'q3',
    category: 'Täterdynamik',
    text: 'Enden Streitgespräche fast immer damit, dass Sie sich entschuldigen – selbst wenn Sie ursprünglich verletzt wurden?',
    explanation: 'Täter-Opfer-Umkehr (DARVO: Deny, Attack, Reverse Victim and Offender) ist eine fundamentale manipulative Schutzstrategie.'
  },
  {
    id: 'q4',
    category: 'Opferempfinden',
    text: 'Fühlen Sie sich nach Gesprächen oft verwirrt, geistig erschöpft oder wie im Nebel („Brain Fog“)?',
    explanation: 'Wortsalat und Zwangskontrolle überfordern die exekutiven Funktionen des Gehirns und führen zu mentaler Erschöpfung.'
  },
  {
    id: 'q5',
    category: 'Isolation',
    text: 'Haben Sie den Kontakt zu Freunden oder Familie eingeschränkt, um Konflikte oder Eifersuchtsszenen zu vermeiden?',
    explanation: 'Systematische oder schleichende soziale Isolation beraubt Sie wichtiger Realitätsprüfer und Schutzpersonen von außen.'
  },
  {
    id: 'q6',
    category: 'Täterdynamik',
    text: 'Werden Grenzen, die Sie setzen, ignoriert, verspottet oder mit Liebesentzug / tagelangem Schweigen bestraft?',
    explanation: 'Silent Treatment und das Strafen bei Grenzziehung sind Machtinstrumente zur Erzwingung von Unterwerfung.'
  },
  {
    id: 'q7',
    category: 'Opferempfinden',
    text: 'Erleben Sie eine emotionale Achterbahn: Extreme Hochphasen und Liebesbekundungen wechseln mit eiskalter Abwertung?',
    explanation: 'Intermittierende Verstärkung erzeugt eine biochemische Suchtbindung (Trauma-Bonding), die schwerer zu lösen ist als reine Missachtung.'
  },
  {
    id: 'q8',
    category: 'Körper',
    text: 'Reagiert Ihr Körper mit Magenbeschwerden, Herzrasen, Schlafstörungen oder Kloß im Hals in der Nähe der Person?',
    explanation: 'Die Neurozeption Ihres Körpers erkennt Gefahr oft lange bevor der Verstand die Dynamik rational greifen kann.'
  },
  {
    id: 'q9',
    category: 'Opferempfinden',
    text: 'Haben Sie das Gefühl, Ihre eigene Identität, Hobbys und Meinungen nach und nach verloren zu haben?',
    explanation: 'Selbstverleugnung und die Fawn-Reaktion (Anpassung als Überlebensstrategie) führen zur schleichenden Selbstentfremdung.'
  },
  {
    id: 'q10',
    category: 'Täterdynamik',
    text: 'Haben Sie Angst davor, was passiert, wenn Sie die Beziehung beenden oder Kritik äußern (Wutanfall, Rache, Drohung)?',
    explanation: 'Narzisstische Wut und Drohungen offenbaren, dass keine gesunde Partnerautonomie geduldet wird.'
  },
  {
    id: 'q11',
    category: 'Isolation',
    text: 'Werden Dritte gegen Sie ausgespielt („Alle anderen finden auch, dass du übertreibst“)?',
    explanation: 'Triangulation schwächt Ihre Position und suggeriert Ihnen, die ganze Welt stünde gegen Sie.'
  },
  {
    id: 'q12',
    category: 'Körper',
    text: 'Fühlen Sie sich emotional wie erstarrt, funktionieren nur noch mechanisch oder spüren sich selbst kaum mehr?',
    explanation: 'Dissoziative Zustände und innere Betäubung treten auf, wenn chronischer Schmerz die Verarbeitungskapazität übersteigt.'
  }
];

export interface ScoreAssessmentResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'critical';
  title: string;
  badgeText: string;
  badgeColor: string;
  description: string;
  keyInsights: string[];
  recommendedSteps: string[];
  immediateActionRequired: boolean;
}

export function calculateRelationshipSafetyScore(answers: Record<string, number>): ScoreAssessmentResult {
  const questionCount = ASSESSMENT_QUESTIONS.length;
  const maxScore = questionCount * 3;
  let totalScore = 0;

  for (const q of ASSESSMENT_QUESTIONS) {
    const val = answers[q.id] ?? 0;
    totalScore += Math.max(0, Math.min(3, val));
  }

  const percentage = Math.round((totalScore / maxScore) * 100);

  if (totalScore <= 8) {
    return {
      totalScore,
      maxScore,
      percentage,
      riskLevel: 'low',
      title: 'Niedrige bis vereinzelte Belastung',
      badgeText: 'Grün: Geringes Belastungsmuster',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      description: 'Ihre Antworten weisen aktuell auf keine dominante toxische Kontrollstruktur oder chronische Trauma-Dynamik hin. Gewöhnliche Reibungen in Beziehungen sind normal.',
      keyInsights: [
        'Wahrnehmung und Grenzen scheinen weitgehend intakt zu sein.',
        'Achten Sie dennoch aufmerksam auf das eigene Bauchgefühl und eventuelle Grenztests.'
      ],
      recommendedSteps: [
        'Eigene Grenzen weiterhin klar und frühzeitig kommunizieren.',
        'Werte und Freundschaften unabhängig von Partnerschaften pflegen.'
      ],
      immediateActionRequired: false
    };
  }

  if (totalScore <= 17) {
    return {
      totalScore,
      maxScore,
      percentage,
      riskLevel: 'moderate',
      title: 'Mäßige bis subtile Belastung (Warnstufe Gelb)',
      badgeText: 'Gelb: Frühe Warnsignale & Manipulation',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      description: 'Es zeigen sich deutliche Anzeichen subtiler Manipulation, Grenzverletzungen oder beginnender Realitätsverzerrung. Ihr Nervensystem sendet bereits Warnsignale.',
      keyInsights: [
        'Möglicherweise sind Sie bereits mit Gaslighting oder verdecktem Kontrollverhalten konfrontiert.',
        'Der Drang, sich zu rechtfertigen (JADE) oder nachzugeben (Fawn), wächst.'
      ],
      recommendedSteps: [
        'Ein vertrauliches Realitäts- und Gedächtnistagebuch für strittige Vorfälle führen.',
        'Sich Vertrauenspersonen außerhalb der Beziehung öffnen und Rückmeldung einholen.',
        'Die Kapitel zu Gaslighting und Grenzen in unserer Mediathek vertiefen.'
      ],
      immediateActionRequired: false
    };
  }

  if (totalScore <= 26) {
    return {
      totalScore,
      maxScore,
      percentage,
      riskLevel: 'high',
      title: 'Hohe toxische Belastung & Trauma-Bindung (Warnstufe Orange)',
      badgeText: 'Orange: Chronischer Missbrauch & Belastung',
      badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      description: 'Die Dynamik ist durch systematische Abwertung, Realitätskontrolle und emotionale Ausbeutung gekennzeichnet. Sie befinden sich sehr wahrscheinlich in einer Trauma-Bindung mit kognitiver Dissonanz.',
      keyInsights: [
        'Ihr Nervensystem befindet sich im chronischen Überlebensmodus (Daueralarm / Eierschalenlaufen).',
        'Sie zweifeln vermutlich an Ihrer eigenen Zurechnungsfähigkeit – das ist die direkte Folge von Gaslighting, nicht Ihre Schuld.'
      ],
      recommendedSteps: [
        'Erkennen: Sie können diese Person und das System nicht durch Liebe oder Wohlverhalten reparieren.',
        'Professionelle psychosoziale Beratung oder traumafokussierte Therapie in Betracht ziehen.',
        'Kontaktreduktion und den Notfallkontakt für Krisenmomente vorbereiten.'
      ],
      immediateActionRequired: false
    };
  }

  return {
    totalScore,
    maxScore,
    percentage,
    riskLevel: 'critical',
    title: 'Akute Gefährdung & Zwangskontrolle (Warnstufe Rot)',
    badgeText: 'Rot: Akute Schutzbedürftigkeit & Krise',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    description: 'Alarmierende Anzeichen für schwere psychische Gewalt, existentiellen Kontrollzwang, drohende Eskalation oder körperliche Gefährdung. Ihre seelische und physische Integrität ist massiv bedroht.',
    keyInsights: [
      'Sie befinden sich in einem Zwangskontrollsystem (Coercive Control).',
      'Trennungsphasen bergen in diesem Stadium erhöhte Risiken für Nachstellung und Gewalt.',
      'Sie müssen diesen Weg keinesfalls alleine bewältigen.'
    ],
    recommendedSteps: [
      'Wenden Sie sich umgehend an eine unserer kostenlosen und anonymen Notfall-Hotlines (siehe Erstanlaufstelle).',
      'Legen Sie unauffällig wichtige Papiere, Notgeld und Notfallkontakte bei einer sicheren Drittperson ab.',
      'Keine offenen Konfrontationen oder Trennungsdrohungen ohne Sicherheitsnetz aussprechen.'
    ],
    immediateActionRequired: true
  };
}

export function searchKnowledgeBase(
  chapters: Chapter[],
  query: string,
  partFilter: number | null = null,
  tagFilter: string | null = null
): Chapter[] {
  const cleanQuery = query.trim().toLowerCase();

  return chapters.filter((chapter) => {
    if (partFilter !== null && chapter.part !== partFilter) {
      return false;
    }

    if (tagFilter && !chapter.tags.some((t) => t.toLowerCase() === tagFilter.toLowerCase())) {
      return false;
    }

    if (!cleanQuery) {
      return true;
    }

    const searchableText = [
      chapter.title,
      chapter.subtitle,
      chapter.summary,
      chapter.coreMechanism,
      chapter.psychologicalBackground,
      chapter.victimExperience,
      ...chapter.warningSigns,
      ...chapter.concreteActionSteps,
      ...chapter.tags
    ].join(' ').toLowerCase();

    return searchableText.includes(cleanQuery);
  });
}

const PSEUDONYM_PREFIXES = [
  'Mutiger Phönix',
  'Stiller Beobachter',
  'Wachsamer Baum',
  'Freier Horizont',
  'Suchende Seele',
  'Klarer Geist',
  'Starker Fels',
  'Sanfter Fluss',
  'Leiser Wind',
  'Hoffnungsträger',
  'Neuer Morgen',
  'Lichtblick'
];

export function generateAnonymousPseudonym(): string {
  const prefix = PSEUDONYM_PREFIXES[Math.floor(Math.random() * PSEUDONYM_PREFIXES.length)];
  const num = Math.floor(100 + Math.random() * 900);
  return `${prefix} #${num}`;
}

export interface CommunityReply {
  id: string;
  authorPseudonym: string;
  avatarSeed: string;
  content: string;
  createdAt: string;
  empathyCount: number;
}

export interface CommunityPost {
  id: string;
  category: 'Täterdynamiken' | 'Trauma-Bindung' | 'Trennung & No Contact' | 'Körper & Nervensystem' | 'Helfersystem & Familie' | 'Alltägliche Bewältigung';
  title: string;
  content: string;
  authorPseudonym: string;
  avatarSeed: string;
  createdAt: string;
  triggerWarning?: string;
  reactions: {
    understand: number;
    notAlone: number;
    strength: number;
    insightful: number;
  };
  replies: CommunityReply[];
  tags: string[];
}

export function filterCommunityPosts(
  posts: CommunityPost[],
  selectedCategory: string,
  searchQuery: string
): CommunityPost[] {
  const query = searchQuery.trim().toLowerCase();

  return posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'Alle' || post.category === selectedCategory;

    if (!matchesCategory) return false;

    if (!query) return true;

    const searchable = [
      post.title,
      post.content,
      post.authorPseudonym,
      post.category,
      ...(post.tags || [])
    ].join(' ').toLowerCase();

    return searchable.includes(query);
  });
}
