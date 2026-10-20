export interface VideoTimestamp {
  time: string;
  seconds: number;
  label: string;
}

export interface VideoContent {
  id: string;
  category: 'Experteninterviews' | 'Erklärvideos psychische Erkrankungen' | 'Entspannung & Achtsamkeit';
  title: string;
  subtitle: string;
  speaker: string;
  speakerRole: string;
  duration: string;
  videoUrl: string;
  videoType: 'direct' | 'embed';
  summary: string;
  scientificContext: string;
  keyTakeaways: string[];
  timestamps: VideoTimestamp[];
  transcriptExcerpt: string;
  relatedChapterTitle: string;
  tags: string[];
}

export const VIDEO_DATABASE: VideoContent[] = [
  // --- EXPERTENINTERVIEWS ---
  {
    id: 'vid-exp-1',
    category: 'Experteninterviews',
    title: 'Narzisstischer Missbrauch vor Gericht & im Helfersystem',
    subtitle: 'Fachgespräch mit Fachärztin für Psychiatrie & Psychotherapie Dr. med. Christiane Sauer',
    speaker: 'Dr. med. Christiane Sauer',
    speakerRole: 'Fachärztin für Psychiatrie & Traumatherapeutin',
    duration: '24:15',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // safe embed placeholder
    videoType: 'embed',
    summary: 'Warum scheitern klassische Familiengerichtsverfahren und Mediationen so oft bei narzisstischen Akteuren? Dr. Sauer erläutert die Täter-Opfer-Umkehr (DARVO), die Täuschung von Gutachtern und wie Betroffene ihre Glaubhaftigkeit methodisch sichern.',
    scientificContext: 'Basierend auf forensisch-psychiatrischen Gutachtenstandards und Studien zur sekundären Viktimisierung im Justizsystem.',
    keyTakeaways: [
      'Niemals Mediation oder Paarberatung mit einem manipulativen Täter akzeptieren (Machtasymmetrie).',
      'Dokumentation: Nur chronologische Fakten ohne emotionale Bewertungen vor Gericht einreichen.',
      'Gutachter sind oft nicht ausreichend für verdeckten Narzissmus geschult – Anwälte mit Schwerpunkt Coercive Control wählen.'
    ],
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Einleitung: Das Problem der Täter-Fassade' },
      { time: '04:30', seconds: 270, label: 'Warum Täter im Erstkontakt charmant wirken' },
      { time: '11:15', seconds: 675, label: 'DARVO: Wie Opfer hysterisch gemacht werden' },
      { time: '18:40', seconds: 1120, label: 'Beweissicherung und Schutz von Kindern' }
    ],
    transcriptExcerpt: '„Das größte Dilemma vor Gericht ist: Der Täter tritt ruhig, gut gekleidet und scheinbar kompromissbereit auf. Das traumatisierte Opfer hingegen wirkt durch monatelangen Schlafmangel, Angst und Daueralarm gereizt, fahrig und inkohärent...“',
    relatedChapterTitle: 'Teil 1, Kap. 8: Triangulation und Täter-Allianzen',
    tags: ['Experteninterview', 'Gericht', 'Justiz', 'DARVO', 'Gutachten']
  },
  {
    id: 'vid-exp-2',
    category: 'Experteninterviews',
    title: 'Trauma-Bonding: Warum Trennung kein reiner Willensakt ist',
    subtitle: 'Neurowissenschaftliches Gespräch mit Prof. Dr. rer. nat. Marcus Lindner (Neurobiologe)',
    speaker: 'Prof. Dr. Marcus Lindner',
    speakerRole: 'Professor für klinische Neurobiologie & Suchtforschung',
    duration: '18:40',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    summary: 'Prof. Lindner entschlüsselt die Dopamin- und Oxytocin-Schleifen im Gehirn bei intermittierender Verstärkung. Er erklärt, warum der Ausstieg aus einer toxischen Beziehung identische Entzugssymptome erzeugt wie der kalte Entzug von Opiaten.',
    scientificContext: 'Neuroimaging-Studien zu Belohnungserwartung, Nucleus Accumbens und intermittierender Verstärkung.',
    keyTakeaways: [
      'Unvorhersehbare Zuwendung bindet neurobiologisch bis zu zehnmal stärker als dauerhafte Liebe.',
      'Die Sehnsucht nach der Trennung ist ein biochemischer Hunger des Belohnungszentrums, keine echte Liebe.',
      'No Contact (Null-Kontakt) ist die notwendige neurobiologische Entgiftungsphase.'
    ],
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Die biochemische Achterbahn' },
      { time: '05:10', seconds: 310, label: 'Dopamin vs. Oxytocin bei Trauma-Bindung' },
      { time: '12:00', seconds: 720, label: 'Die ersten 90 Tage: Was im Gehirn passiert' },
      { time: '16:15', seconds: 975, label: 'Rückfallprophylaxe im Alltag' }
    ],
    transcriptExcerpt: '„Wenn Menschen sagen: ‚Verlass ihn doch einfach!‘, begreifen sie nicht, dass hier dieselben Rezeptoren im Gehirn feuern wie bei einer schweren stoffgebundenen Abhängigkeit. Das Opfer leidet unter realen körperlichen Entzugsschmerzen...“',
    relatedChapterTitle: 'Teil 2, Kap. 3: Trauma-Bindung',
    tags: ['Neurobiologie', 'Trauma-Bonding', 'Dopamin', 'Sucht', 'No Contact']
  },
  {
    id: 'vid-exp-3',
    category: 'Experteninterviews',
    title: 'Gaslighting in der Praxis: Strategien für Therapeuten und Berater',
    subtitle: 'Fachdialog mit Dipl.-Psych. Katharina Wegner über episteme Gewalt',
    speaker: 'Katharina Wegner',
    speakerRole: 'Psychologische Psychotherapeutin & Supervisorin',
    duration: '21:05',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    summary: 'Wie Therapeuten Gaslighting erkennen, ohne dem Täter unbewusst in die Hände zu spielen. Über episteme Ungerechtigkeit, Realitätsraub und den Wiederaufbau des Vertrauens in die eigene Wahrnehmung.',
    scientificContext: 'Konzepte der epistemischen Injustiz nach Miranda Fricker und Zwangskontrolle nach Evan Stark.',
    keyTakeaways: [
      'Gefühle von Verwirrung beim Klienten als diagnostischen Leuchtturm ernst nehmen.',
      'Schuldumkehr im Beratungsgespräch sofort aktiv unterbrechen.',
      'Das Führen eines passwortgeschützten Realitätsprotokolls als therapeutische Hausaufgabe.'
    ],
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Definition und Formen von Gaslighting' },
      { time: '06:20', seconds: 380, label: 'Der Verlust der epistemischen Souveränität' },
      { time: '14:00', seconds: 840, label: 'Fallbeispiel: Verdeckter Narzissmus in der Praxis' }
    ],
    transcriptExcerpt: '„Gaslighting ist kein Meinungsstreit. Es ist die gezielte Demontage der Urteilskraft eines anderen Menschen, bis dieser die Realität nur noch durch die Augen des Aggressors wahrnehmen kann...“',
    relatedChapterTitle: 'Teil 1, Kap. 5: Psychologische Waffen – Gaslighting',
    tags: ['Gaslighting', 'Therapie', 'Supervision', 'Realitätskontrolle']
  },

  // --- ERKLÄRVIDEOS PSYCHISCHE ERKRANKUNGEN ---
  {
    id: 'vid-erk-1',
    category: 'Erklärvideos psychische Erkrankungen',
    title: 'Komplexe PTBS (K-PTBS) verständlich erklärt',
    subtitle: 'Ursachen, Symptome nach ICD-11 und Abgrenzung zur einfachen PTBS',
    speaker: 'Psycho Spezial Bildungsteam',
    speakerRole: 'Klinisch-psychologische Redaktion',
    duration: '14:20',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    summary: 'Während eine klassische PTBS nach einmaligen Schockereignissen entsteht, ist die K-PTBS das Resultat von chronischer zwischenmenschlicher Gefangenschaft und seelischer Gewalt. Dieses Video erklärt die Kernbereiche: Affektregulation, negatives Selbstkonzept und Beziehungsschwierigkeiten.',
    scientificContext: 'WHO ICD-11 Diagnosekategorie 6B41 und Phasenmodell nach Judith Herman.',
    keyTakeaways: [
      'Emotionale Flashbacks beinhalten oft keine Bilder, sondern reine überwältigende Gefühle von Panik und Einsamkeit.',
      'K-PTBS ist eine normale Reaktion auf abnorme, langandauernde Missbrauchssituationen.',
      'Heilung erfordert zuerst körperliche und seelische Stabilisierung vor jeder Traumabearbeitung.'
    ],
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Was unterscheidet K-PTBS von einfacher PTBS?' },
      { time: '03:45', seconds: 225, label: 'Die 3 K-PTBS Kernsymptome im Alltag' },
      { time: '08:10', seconds: 490, label: 'Emotionale Flashbacks erkennen & stoppen' },
      { time: '11:30', seconds: 690, label: 'Therapeutische Wege (EMDR, Ego-State, DBT)' }
    ],
    transcriptExcerpt: '„Ein emotionaler Flashback fühlt sich an wie ein plötzlicher Sturz in ein bodenloses schwarzes Loch. Betroffene fühlen sich klein, hilflos und zutiefst beschämt – ohne zu wissen, was den Auslöser darstellte...“',
    relatedChapterTitle: 'Teil 2, Kap. 14: Komplexe PTBS und Strukturstörung',
    tags: ['K-PTBS', 'Trauma', 'ICD-11', 'Flashbacks', 'Affektregulation']
  },
  {
    id: 'vid-erk-2',
    category: 'Erklärvideos psychische Erkrankungen',
    title: 'Narzisstische Persönlichkeitsstörung (NPS) & verdeckte Subtypen',
    subtitle: 'Vom grandiosen zum vulnerablen Narzissmus – Ein Blick hinter die Maske',
    speaker: 'Psycho Spezial Bildungsteam',
    speakerRole: 'Klinisch-psychologische Redaktion',
    duration: '16:50',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    summary: 'Erfahren Sie die psychodynamischen Wurzeln pathologischen Narzissmus. Warum entstehen grandiose und verdeckte Ausprägungen? Wie schützen sich Täter vor unerträglicher Scham durch Spaltung, Projektion und Entwertung?',
    scientificContext: 'DSM-5 / ICD-11 Kriterien sowie Otto Kernbergs strukturelle Organisation der Persönlichkeit.',
    keyTakeaways: [
      'Verdeckte Narzissten präsentieren sich oft als leidend, schüchtern oder moralisch überlegen.',
      'Kritik löst narzisstische Wut oder eisige Kränkung aus, da kein stabiler Kern vorhanden ist.',
      'Reale Verhaltensänderung tritt ohne intensive, langjährige Psychotherapie so gut wie nie auf.'
    ],
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Das Spektrum des Narzissmus' },
      { time: '04:15', seconds: 255, label: 'Offener vs. verdeckter Narzissmus im Vergleich' },
      { time: '09:30', seconds: 570, label: 'Die Abwehrmechanismen: Spaltung & Projektion' },
      { time: '13:50', seconds: 830, label: 'Gibt es Hoffnung auf Besserung?' }
    ],
    transcriptExcerpt: '„Unter der grandiosen Fassade verbirgt sich kein böses Genie, sondern ein psychisches Vakuum – eine unendliche Leere und panische Angst vor Scham, die durch die Entwertung anderer Menschen überdeckt werden muss...“',
    relatedChapterTitle: 'Teil 1, Kap. 1: Das narzisstische Spektrum',
    tags: ['Narzissmus', 'NPS', 'Persönlichkeitsstörung', 'Verdeckter Narzissmus']
  },
  {
    id: 'vid-erk-3',
    category: 'Erklärvideos psychische Erkrankungen',
    title: 'Dissoziation & Depersonalisation: Die Notbremse des Gehirns',
    subtitle: 'Wenn die Seele abdriftet, um den unerträglichen Schmerz zu dämpfen',
    speaker: 'Psycho Spezial Bildungsteam',
    speakerRole: 'Klinisch-psychologische Redaktion',
    duration: '12:10',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    summary: 'Dissoziation ist eine geniale biologische Notfallreaktion des Körpers bei auswegloser Bedrohung. Dieses Video erklärt, was im Gehirn passiert, warum die Welt wie hinter Glas wirkt und wie Sie sich sanft ins Hier und Jetzt zurückholen.',
    scientificContext: 'Modell der strukturellen Dissoziation nach Nijenhuis & van der Hart.',
    keyTakeaways: [
      'Dissoziation ist keine Verrücktheit, sondern der Rettungsanker des dorsalen Vagusnervs.',
      'Symptome: Taubheitsgefühle, Wattekopf, Fremdheitsgefühl gegenüber dem eigenen Körper.',
      'Orientierung im Raum und starke sensorische Reize beenden dissoziative Zustände sicher.'
    ],
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Das Gefühl wie im Nebel oder hinter Glas' },
      { time: '03:10', seconds: 190, label: 'Die neurobiologische Schutzschaltung' },
      { time: '07:45', seconds: 465, label: 'Alltägliche vs. traumabedingte Dissoziation' },
      { time: '10:00', seconds: 600, label: 'Re-Orientierung: Die 3 goldenen Schritte' }
    ],
    transcriptExcerpt: '„Wenn ein Tier im Maul des Raubtiers gefangen ist und weder fliehen noch kämpfen kann, greift der Erstarrungsreflex. Die Schmerzwahrnehmung schaltet sich ab. Genau das tut Ihr Gehirn bei chronischer psychischer Gewalt...“',
    relatedChapterTitle: 'Teil 2, Kap. 13: Dissoziation im Alltag',
    tags: ['Dissoziation', 'Derealisation', 'Depersonalisation', 'Dorsaler Vagus']
  },

  // --- ENTSPANNUNGS- UND ACHTSAMKEITSÜBUNGEN ---
  {
    id: 'vid-ent-1',
    category: 'Entspannung & Achtsamkeit',
    title: 'Polyvagal-Regulation: Sofortige Entwarnung für das Nervensystem',
    subtitle: 'Geführte somatische Übung zur Aktivierung des ventralen Vagusnervs',
    speaker: 'Elena Menzel',
    speakerRole: 'Trauma-Körpertherapeutin (Somatic Experiencing)',
    duration: '15:30',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    summary: 'Eine sanfte, geführte somatische Übungseinheit: Nacken- und Augenübungen nach Stanley Rosenberg, sanftes Summen zur Vagusstimulation und bewusstes Erden der Fußsohlen. Bringt den Körper vom Fluchtmodus in Sicherheit.',
    scientificContext: 'Polyvagaltheorie nach Dr. Stephen Porges und somatische Übungen nach Stanley Rosenberg.',
    keyTakeaways: [
      'Augenbewegungen nach links und rechts stimulieren direkt den Hirnstamm und den Vagusnerv.',
      'Tiefes Brummen oder Summen erzeugt Vibrationen im Kehlkopf, die den Herzschlag messbar senken.',
      'Sicherheit beginnt im Körper, nicht im rationalen Denken.'
    ],
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Vorbereitung: Sichere Sitzhaltung' },
      { time: '02:30', seconds: 150, label: 'Die Grundübung für Augen und Nacken' },
      { time: '07:15', seconds: 435, label: 'Vagales Tönen (Voicing & Vibration)' },
      { time: '12:00', seconds: 720, label: 'Nachspüren und Verankerung im Körper' }
    ],
    transcriptExcerpt: '„Legen Sie Ihre Hände sanft an Ihren Hinterkopf. Schauen Sie mit den Augen ganz nach rechts, ohne den Kopf zu drehen. Halten Sie den Blick, bis ein spontanes Gähnen oder Seufzen kommt – das ist das biologische Signal der Entwarnung...“',
    relatedChapterTitle: 'Teil 2, Kap. 5: Neurozeption und fehlendes Sicherheitsgefühl',
    tags: ['Achtsamkeit', 'Polyvagal', 'Vagusnerv', 'Somatic Experiencing', 'Nervensystem']
  },
  {
    id: 'vid-ent-2',
    category: 'Entspannung & Achtsamkeit',
    title: 'Geführte Safe-Place-Imagination (Der sichere innere Ort)',
    subtitle: 'Traumainformierte Visualisierung zur Abgrenzung und Selbstberuhigung',
    speaker: 'Dr. phil. Stefan Bach',
    speakerRole: 'Klinischer Psychologe & Hypnotherapeut',
    duration: '17:45',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    summary: 'Eine klassische traumasensible Imagination: Sie erschaffen in Ihrer Vorstellung einen unantastbaren, sicheren Wohlfühlort, zu dem toxische Personen keinen Zutritt haben. Mit multisensorischer Verankerung.',
    scientificContext: 'Ressourcenorientierte Traumatherapie nach Luise Reddemann (PITT).',
    keyTakeaways: [
      'Der innere sichere Ort muss absolute Unverletzlichkeit und Ruhe bieten.',
      'Sensorische Details (Farben, Temperatur, Geräusche) verstärken die neuronale Beruhigung.',
      'Kann jederzeit als mentaler Anker in Stresssituationen abgerufen werden.'
    ],
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Einführung und Körperwahrnehmung' },
      { time: '03:40', seconds: 220, label: 'Die Entdeckung Ihres sicheren Ortes' },
      { time: '09:15', seconds: 555, label: 'Die Schutzgrenzen und Helferfiguren' },
      { time: '14:30', seconds: 870, label: 'Verankerung mit einer sanften Handgeste' }
    ],
    transcriptExcerpt: '„An diesem Ort gibt es keine Erwartungen, keine Vorwürfe und keine lauten Stimmen. Hier bestimmt allein Ihr Wohlbefinden. Schauen Sie sich um: Was für ein Licht herrscht hier? Welche Temperatur hat die Luft?...“',
    relatedChapterTitle: 'Teil 4, Kap. 3: Was Betroffene in Akutphasen brauchen',
    tags: ['Safe Place', 'Imagination', 'Luise Reddemann', 'Innere Ruhe', 'Ressource']
  },
  {
    id: 'vid-ent-3',
    category: 'Entspannung & Achtsamkeit',
    title: 'Progressive Muskelentspannung (PMR) bei Schlaflosigkeit',
    subtitle: 'Kompakte 10-Minuten-Anleitung nach Edmund Jacobson für die Nacht',
    speaker: 'Elena Menzel',
    speakerRole: 'Entspannungspädagogin & Heilpraktikerin für Psychotherapie',
    duration: '11:20',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    summary: 'Chronische Muskelanspannung durch Eierschalenlaufen verhindert das Einschlafen. Durch das gezielte Anspannen und abrupte Loslassen von 7 Hauptmuskelgruppen lernt das Gehirn, die parasympathische Entspannung zuzulassen.',
    scientificContext: 'Verhaltensmedizinische Evidenz zur Reduktion von Einschlafstörungen und Spannungskopfschmerz.',
    keyTakeaways: [
      'Das bewusste Erleben des Kontrasts zwischen Anspannung und Entspannung stoppt Grübeln.',
      'Ideal direkt im Bett bei Dunkelheit mit Kopfhörern anzuwenden.',
      'Besonders wirksam bei morgendlichem Aufwachen mit Herzrasen.'
    ],
    timestamps: [
      { time: '00:00', seconds: 0, label: 'Vorbereitung im Liegen' },
      { time: '02:00', seconds: 120, label: 'Fäuste, Unterarme und Bizeps' },
      { time: '05:15', seconds: 315, label: 'Gesicht, Kiefer und Nacken' },
      { time: '08:30', seconds: 510, label: 'Bauch, Gesäß und Beine' }
    ],
    transcriptExcerpt: '„Ballen Sie beide Hände fest zu Fäusten. Spüren Sie die Kraft für 5 Sekunden: 1, 2, 3, 4, 5... und lassen Sie mit einem Mal vollkommen los. Spüren Sie, wie die Wärme in Ihre Fingerkuppen strömt...“',
    relatedChapterTitle: 'Teil 2, Kap. 15: Somatische Folgen',
    tags: ['PMR', 'Schlaf', 'Jacobson', 'Muskelentspannung', 'Schlaflosigkeit']
  }
];
