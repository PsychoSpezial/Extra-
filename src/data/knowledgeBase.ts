export interface Chapter {
  id: string;
  part: 1 | 2 | 3 | 4;
  partTitle: string;
  partSubtitle: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  summary: string;
  coreMechanism: string;
  psychologicalBackground: string;
  victimExperience: string;
  warningSigns: string[];
  concreteActionSteps: string[];
  tags: string[];
  readTimeMin: number;
}

export const KNOWLEDGE_PARTS = [
  {
    part: 1 as const,
    title: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    subtitle: 'Die Anatomie von Narzissmus, Kontrollzwang, Täuschung und psychologischer Kriegsführung.',
    chapterCount: 11,
    accentColor: 'rose'
  },
  {
    part: 2 as const,
    title: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    subtitle: 'Nervensystem, Trauma-Bindung, K-PTBS, Scham und der schleichende Identitätsverlust.',
    chapterCount: 16,
    accentColor: 'amber'
  },
  {
    part: 3 as const,
    title: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    subtitle: 'Emotionaler Inzest, Moral Injury, Trigger-Ketten, psychische Entropie & Defendersyndrom.',
    chapterCount: 9,
    accentColor: 'indigo'
  },
  {
    part: 4 as const,
    title: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    subtitle: 'Grenzen ohne Eskalation, Akut-Stabilisierung, Fehler im Helfersystem und Neuroplastizität.',
    chapterCount: 9,
    accentColor: 'emerald'
  }
];

export const CHAPTERS_DATA: Chapter[] = [
  // --- TEIL 1 ---
  {
    id: 't1-c1',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 1,
    title: 'Das narzisstische Spektrum – Vom gesunden zum toxischen Narzissmus',
    subtitle: 'Abgrenzung zwischen gesunden Selbstanteilen, problematischen Zügen und pathologischen Mustern.',
    summary: 'Narzissmus ist kein binärer Zustand, sondern ein Kontinuum. Während gesunder Narzissmus Selbstfürsorge, Abgrenzungsfähigkeit und ein stabiles Selbstwertgefühl sichert, zeichnet sich pathologischer Narzissmus durch Empathielosigkeit, Ausbeutung und Fragilität aus.',
    coreMechanism: 'Kompensation eines extrem brüchigen inneren Selbstwerts durch ständige Abwertung anderer und Erpressung von Bewunderung („Narzisstische Zufuhr“).',
    psychologicalBackground: 'Nach Otto Kernberg und Heinz Kohut liegt dem malignen Narzissmus eine unvollständige Selbst-Objekt-Differenzierung und eine Spaltung in ein grandioses Ideal-Selbst und ein verleugnetes, beschämtes Schatten-Selbst zugrunde.',
    victimExperience: 'Man spürt anfangs eine magische Anziehung, merkt jedoch bald, dass man nur als Statist im Theaterstück des anderen existiert und der eigene Wert von Wohlwollen des Gegenübers abhängt.',
    warningSigns: [
      'Schwarz-Weiß-Denken (Sie sind entweder der perfekte Engel oder der bösartigste Feind)',
      'Unfähigkeit, aufrichtige Reue zu empfinden oder Fehler zuzugeben',
      'Empathie wird nur strategisch simuliert, erlischt jedoch sofort bei eigenen Bedürfnissen'
    ],
    concreteActionSteps: [
      'Erkennen, dass Sie das fragile Selbst des Gegenübers nicht reparieren können',
      'Erwartungen an echte Reziprozität (Gegenseitigkeit) auf ein realistisches Maß senken',
      'Den eigenen Selbstwert unabhängig von der Bewertung des anderen verankern'
    ],
    tags: ['Narzissmus', 'Selbstwert', 'Spektrum', 'Diagnostik', 'Spaltung'],
    readTimeMin: 6
  },
  {
    id: 't1-c2',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 2,
    title: 'Tätertypen und Erscheinungsformen – Offen, verdeckt und sozial angepasst',
    subtitle: 'Kommunaler Narzisst, pervertierter Narzisst, dunkle Tetrade, dunkler Empath und manipulative Profile.',
    summary: 'Nicht jeder Täter tritt laut und polternd auf. Verdeckte Narzissten inszenieren sich oft als ewige Opfer, kommunale Narzissten profilieren sich als unersetzliche Wohltäter, während dunkle Empathen kognitive Empathie als Waffe zur Präzisionsmanipulation nutzen.',
    coreMechanism: 'Strategische Anpassung der äußeren Fassade an das soziale Milieu, um Kritik im Vorfeld zu neutralisieren („Der/Die tut doch so viel Gutes!“).',
    psychologicalBackground: 'Konzepte der Dunklen Tetrade (Machiavellismus, Narzissmus, Psychopathie, Sadismus) und Studien von Heym et al. (2020) zu Dark Empaths belegen, dass hohes Einfühlungsvermögen mit manipulativen Absichten koexistieren kann.',
    victimExperience: 'Man zweifelt an der eigenen Wahrnehmung, weil alle Außenstehenden den Täter vergöttern, während hinter verschlossenen Türen eisige Kälte und Nadelstiche herrschen.',
    warningSigns: [
      'Opfer-Narzissmus: Jedes Problem wird genutzt, um im Mittelpunkt des Mitleids zu stehen',
      'Gefälligkeiten mit unsichtbarem Preisschild und späterer emotionaler Erpressung',
      'Spürbare Diskrepanz zwischen öffentlicher Großzügigkeit und privater Entwertung'
    ],
    concreteActionSteps: [
      'Ausschließlich Taten im privaten Raum bewerten, niemals die öffentliche Reputation',
      'Dokumentation von Vorfällen zur Absicherung der eigenen Realitätsprüfung',
      'Keine Gefälligkeiten mehr annehmen, die als spätere Hebel genutzt werden'
    ],
    tags: ['Tätertypen', 'Verdeckter Narzissmus', 'Dunkle Tetrade', 'Dunkler Empath'],
    readTimeMin: 8
  },
  {
    id: 't1-c3',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 3,
    title: 'Die innere Welt des Täters – Bedürftigkeit, Leere und Kontrollzwang',
    subtitle: 'Wie Täter andere Menschen wahrnehmen, warum sie Zufuhr brauchen und weshalb Grenzen ständig getestet werden.',
    summary: 'Toxische Akteure empfinden ein quälendes inneres Vakuum. Um die Angst vor Nichtigkeit und Kontrollverlust abzuwehren, müssen sie ihre Mitmenschen dominieren und wie Marionetten steuern.',
    coreMechanism: 'Objektifizierung: Andere Personen werden nicht als eigenständige Subjekte wahrgenommen, sondern als Funktionsgegenstände zur Affektregulation des Täters.',
    psychologicalBackground: 'Frühkindliche Bindungsstörungen mit primärer Schamabwehr führen dazu, dass Autonomie im Umfeld als existentielle Bedrohung interpretiert wird.',
    victimExperience: 'Jede eigene Regung von Selbstständigkeit, eigenen Freunden oder Hobbys löst beim Gegenüber passive Aggression, Schmollen oder Kontrollanrufe aus.',
    warningSigns: [
      'Grenzen werden nicht respektiert, sondern als Herausforderung oder persönliche Beleidigung gesehen',
      'Chronische Langeweile und emotionale Leere, wenn kein Drama oder Konflikt da ist',
      'Zwanghafte Kontrolle über Zeit, Finanzen oder Kontakte des Partners'
    ],
    concreteActionSteps: [
      'Begreifen: Kontrollversuche sind kein Beweis von Liebe, sondern von Besitzanspruch',
      'Standhaftigkeit bei kleinen Grenzziehungen ohne Rechtfertigungsmarathon',
      'Eigene Hobbys und Freundschaften bewusst schützen und geheimhalten'
    ],
    tags: ['Kontrollzwang', 'Innere Leere', 'Narzisstische Zufuhr', 'Grenzverletzung'],
    readTimeMin: 6
  },
  {
    id: 't1-c4',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 4,
    title: 'Lügen, Täuschung und Realitätskontrolle – Das Fundament der Manipulation',
    subtitle: 'Systematisches Lügen, Grenztests, Verwirrung und Realitätsverdrehung als Grundstruktur.',
    summary: 'Lügen ist für toxische Persönlichkeiten kein Ausrutscher, sondern die methodische Architektur ihrer Beziehungsgestaltung. Durch Auslassungen, Verdrehungen und Scheinargumente wird die Urteilskraft des Opfers gezielt demontiert.',
    coreMechanism: 'Epistemische Verunsicherung: Das Opfer verliert das Vertrauen in die eigene Sinneswahrnehmung und lagert die Deutungshoheit an den Täter aus.',
    psychologicalBackground: 'Pseudologia phantastica und pathologisches Lügen dienen der Aufrechterhaltung eines falschen Selbstbildes und der Verhinderung jeglicher Rechenschaftspflicht.',
    victimExperience: 'Man ertappt sich dabei, Chatverläufe akribisch abzuspeichern oder Tonaufnahmen machen zu wollen, nur um sich zu beweisen, dass man nicht den Verstand verliert.',
    warningSigns: [
      'Glatte Lügen selbst bei völlig unwichtigen Alltagsdetails',
      'Widersprüche werden bei Konfrontation sofort mit Aggression oder Gegenangriffen beantwortet',
      'Ständiges Verschieben von Abmachungen („Moving the goalposts“)'
    ],
    concreteActionSteps: [
      'Keine endlosen Debatten über Fakten führen – wer lügt, will keine Wahrheit finden',
      'Ein privates, passwortgeschütztes Realitätstagebuch (Gedächtnisprotokoll) führen',
      'Konsequenzen ziehen statt auf ein Geständnis zu hoffen'
    ],
    tags: ['Lügen', 'Realitätskontrolle', 'Grenztests', 'Täuschung'],
    readTimeMin: 7
  },
  {
    id: 't1-c5',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 5,
    title: 'Psychologische Waffen – Gaslighting, Double Binds und Wortsalat',
    subtitle: 'Die wichtigsten Manipulationstechniken mit klarer Benennung und psychologischer Einordnung.',
    summary: 'Gaslighting lässt Betroffene an ihrem Verstand zweifeln („Das bildest du dir nur ein!“, „Du bist zu empfindlich“). Double Binds erzeugen ausweglose Doppelbotschaften („Sei spontan!“, „Warum bist du so unberechenbar?“), während Wortsalat jedes klärende Gespräch unmöglich macht.',
    coreMechanism: 'Kognitive Überlastung und Destabilisierung des logischen Denkens zur Abwehr von Kritik und zur Zementierung von Macht.',
    psychologicalBackground: 'Gregory Batesons Doppelbindungstheorie (Double Bind) und neuere Studien zu Gaslighting als Form intimer Zwangskontrolle (Coercive Control nach Evan Stark).',
    victimExperience: 'Man verlässt Gespräche mit brummendem Kopf, Schwindelgefühl und dem peinigenden Gefühl, sich für etwas entschuldigt zu haben, bei dem man eigentlich verletzt wurde.',
    warningSigns: [
      'Sätze wie: „Du verdrehst immer alles“, „Jeder andere würde mich verstehen, nur du machst Stress“',
      'Zirkuläre Streitgespräche, die stundenlang im Kreis laufen und das Ausgangsthema begraben',
      'Gefühl, in jeder Entscheidung im Unrecht zu sein'
    ],
    concreteActionSteps: [
      'Gespräche bei erstem Anzeichen von Wortsalat mit der „Grey Rock“-Methode beenden',
      'Die Formel anwenden: „Ich nehme das anders wahr und werde darüber nicht debattieren.“',
      'Aufschreiben, was tatsächlich gesagt wurde, direkt nach der Interaktion'
    ],
    tags: ['Gaslighting', 'Double Bind', 'Wortsalat', 'Zwangskontrolle', 'Manipulation'],
    readTimeMin: 9
  },
  {
    id: 't1-c6',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 6,
    title: 'Bindung durch Täuschung – Spiegeln, Future Faking und Breadcrumbing',
    subtitle: 'Wie künstliche Nähe erzeugt und später als Kontrollmittel eingesetzt wird.',
    summary: 'Zu Beginn wird der Betroffene mit Liebe, Aufmerksamkeit und Zukunftsplänen überschüttet (Love Bombing & Future Faking). Der Täter spiegelt Hobbys, Werte und Träume exakt wider, nur um diese Traumwelt später durch emotionale Brotkrumen (Breadcrumbing) als Köder zu nutzen.',
    coreMechanism: 'Erzeugung einer biochemischen Abhängigkeit (Dopamin-Ausschüttung durch intermittierende Belohnung) vor der ersten Entwertung.',
    psychologicalBackground: 'Intermittierende Verstärkung nach B.F. Skinner: Unvorhersehbare Belohnungen binden das Belohnungszentrum im Gehirn zehnmal stärker als verlässliche Zuwendung.',
    victimExperience: 'Man klammert sich an das Versprechen der ersten Monate und hofft verzweifelt, diesen wunderbaren Menschen wiederzubeleben – nicht ahnend, dass dies eine Maske war.',
    warningSigns: [
      'Heirats- oder Zusammenzugspläne bereits nach wenigen Tagen oder Wochen',
      'Aussagen wie: „Du bist mein Seelenverwandter, noch nie habe ich so empfunden“',
      'Späteres Nichterfüllen jeglicher Zusagen bei gleichzeitigen vagen Versprechungen für die Zukunft'
    ],
    concreteActionSteps: [
      'Entschleunigung: Bei schnellen Liebesbekundungen bewusst auf die Bremse treten',
      'Unterscheiden zwischen Worten und verlässlichen Taten über mindestens 6 bis 12 Monate',
      'Erkennen: Der Traumprinz/die Traumprinzessin der Anfangsphase war ein Spiegel Ihrer eigenen Großartigkeit'
    ],
    tags: ['Love Bombing', 'Future Faking', 'Breadcrumbing', 'Spiegeln', 'Dopamin'],
    readTimeMin: 7
  },
  {
    id: 't1-c7',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 7,
    title: 'Subtile Gewalt – Stimme, Schweigen, Provokation und indirekte Kommunikation',
    subtitle: 'Nicht nur Worte, sondern auch Tonfall, Schweigen und Signale steuern das Gegenüber.',
    summary: 'Gewalt beginnt lange vor dem ersten Schlag. Das eisige Schweigen (Silent Treatment), sarkastische Blicke, Seufzen, abwertende Kosenamen und gezielte Provokationen im Beisein Dritter zermürben das Nervensystem.',
    coreMechanism: 'Soziale Ächtung und Liebesentzug als Bestrafung für unerwünschtes autonomes Verhalten.',
    psychologicalBackground: 'Neurologische Studien (Eisenberger et al.) zeigen, dass sozialer Ausschluss und das Silent Treatment dieselben Schmerzrezeptoren im Gehirn aktivieren wie physische Schläge.',
    victimExperience: 'Man betritt den Raum und spürt sofort die eisige Kälte. Man bettelt darum, dass der andere doch bitte reden möge, und entschuldigt sich für Vergehen, die man gar nicht begangen hat.',
    warningSigns: [
      'Tage- oder wochenlanges Anschweigen ohne Klärungsbereitschaft',
      'Mikro-Entwertungen: Augenrollen, verächtliches Schnauben, abfälliger Tonfall',
      'Gezielte Nadelstiche in der Öffentlichkeit, die für Außenstehende wie Witze klingen'
    ],
    concreteActionSteps: [
      'Nicht hinterherlaufen oder um Zuwendung betteln – Schweigen als Pause für sich selbst nutzen',
      'Die manipulative Natur des Silent Treatments innerlich benennen',
      'Sich mit wohlwollenden Freunden und Aktivitäten umgeben'
    ],
    tags: ['Silent Treatment', 'Subtile Gewalt', 'Strafendes Schweigen', 'Mikroaggression'],
    readTimeMin: 6
  },
  {
    id: 't1-c8',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 8,
    title: 'Triangulation und Täter-Allianzen – Wenn das Umfeld mitmanipuliert wird',
    subtitle: 'Dritte Personen, Vertraute und Institutionen stabilisieren das System.',
    summary: 'Täter kämpfen selten allein. Durch Triangulation (Hinzuziehen von Ex-Partnern, Schwiegereltern, Kollegen oder „Flying Monkeys“) erzeugen sie Eifersucht, Isolierung und den Eindruck, das Opfer stünde mit seiner Kritik vollkommen allein da.',
    coreMechanism: 'Teile und herrsche: Zerstörung von Allianzen und Solidarität im Umfeld des Betroffenen.',
    psychologicalBackground: 'Karpman-Dramadreieck (Täter, Opfer, Retter) und systemische Familientheorien zur Instrumentalisierung unbeteiligter Dritter.',
    victimExperience: 'Plötzlich wenden sich gemeinsame Freunde ab oder belehren einen, man solle doch nachsichtiger mit dem armen Partner sein. Man fühlt sich von der ganzen Welt verraten.',
    warningSigns: [
      'Ständige Vergleiche mit Ex-Partnern, Freunden oder Kollegen („Die Anna würde da nie so ein Drama machen“)',
      'Verleumdungskampagnen (Smear Campaigns) hinter dem Rücken des Opfers',
      'Instrumentalisierung von Kindern im Trennungskontext'
    ],
    concreteActionSteps: [
      'Sich nicht auf Vergleiche oder Konkurrenzkämpfe mit Drittpersonen einlassen',
      'Direkten Kontakt zu Flying Monkeys und Parteigängern des Täters radikal kappen',
      'Ein eigenes, unabhängiges und loyales Unterstützungsnetzwerk aufbauen'
    ],
    tags: ['Triangulation', 'Flying Monkeys', 'Verleumdung', 'Drama-Dreieck'],
    readTimeMin: 7
  },
  {
    id: 't1-c9',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 9,
    title: 'Kränkung, Wut und Eskalation – Wenn die Maske fällt',
    subtitle: 'Was passiert, wenn Täter ignoriert, entlarvt oder begrenzt werden: Narzisstische Wut.',
    summary: 'Sobald ein Täter mit unverrückbaren Grenzen oder der Aufdeckung seiner Lügen konfrontiert wird, bricht seine narzisstische Abwehr zusammen. Die Folge ist narzisstische Wut (Narcissistic Rage), Racheakte, Drohungen oder hemmungslose Eskalation.',
    coreMechanism: 'Verzweifelte Abwehr existentieller Scham durch destruktive Externalisierung von Aggression auf das Opfer.',
    psychologicalBackground: 'Kohuts Konzept der narzisstischen Verletzung: Da keine reife Frustrationstoleranz vorliegt, wird jede Kritik als vernichtender Angriff auf das Dasein erlebt.',
    victimExperience: 'Man erlebt einen plötzlichen, beängstigenden Wesenswandel. Der Blick des Täters wird glasig oder schwarz vor Wut, gefolgt von hysterischem Anschreien oder kalter Vernichtungslust.',
    warningSigns: [
      'Explosionen wegen belangloser Kleinigkeiten (ein falsches Wort, ein Zuspätkommen)',
      'Drohungen gegen Hab und Gut, Haustiere, Kinder oder das berufliche Ansehen',
      'Physische Grenzüberschreitungen wie Blockieren von Türen oder Zerstören von Gegenständen'
    ],
    concreteActionSteps: [
      'Niemals versuchen, einen rasenden Täter in der Akutsituation logisch zu belehren',
      'Priorität: Physische Sicherheit! Den Raum/die Wohnung sofort verlassen',
      'Einen Sicherheitsplan für Notfälle bereithalten (wichtige Papiere, Notfalltasche)'
    ],
    tags: ['Narzisstische Wut', 'Eskalation', 'Kränkung', 'Sicherheitsplan'],
    readTimeMin: 7
  },
  {
    id: 't1-c10',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 10,
    title: 'Stalking, Nachstellungen und häusliche Gewalt – Wenn psychische Gewalt kippt',
    subtitle: 'Der Übergang von subtiler Kontrolle zu offenem Übergriff und Gefährdung.',
    summary: 'Psychische Gewalt und physische Übergriffe sind keine getrennten Welten, sondern Stufen derselben Eskalationsleiter. Nach Trennungen schlägt Kontrollverlust häufig in Stalking, Nachstellung, Cyber-Tracking und häusliche Gewalt um.',
    coreMechanism: 'Zwanghafte Weigerung, die Trennung und Autonomie des Opfers zu akzeptieren („Wenn ich dich nicht haben kann, hat dich niemand“).',
    psychologicalBackground: 'Forschung zur Tödlichkeit von Partnerschaftsgewalt (Danger Assessment nach Jacquelyn Campbell): Trennungsphasen sind statistisch die gefährlichste Zeit für Betroffene.',
    victimExperience: 'Panik beim Geräusch eines vorbeifahrenden Autos, ständige Kontrollnachrichten, das Gefühl, auf Schritt und Tritt beobachtet zu werden.',
    warningSigns: [
      'Auflauern vor Wohnung, Arbeitsplatz oder bei Freizeitaktivitäten',
      'Unzählige Anrufe von unterdrückten Nummern oder Fake-Profilen',
      'Explizite oder verdeckte Todes- und Suiziddrohungen zur Erpressung von Kontakt'
    ],
    concreteActionSteps: [
      'Stalking-Tagebuch lückenlos führen (Datum, Uhrzeit, Screenshots, Zeugen)',
      'Strikter Null-Kontakt (No Contact) – jedes Reagieren belohnt den Stalker',
      'Polizeiliche Anzeige nach § 238 StGB und Gewaltschutzantrag (Kontakt- und Näherungsverbot) beim Amtsgericht'
    ],
    tags: ['Stalking', 'Gewaltschutz', 'Häusliche Gewalt', 'Trennungsgefahr'],
    readTimeMin: 8
  },
  {
    id: 't1-c11',
    part: 1,
    partTitle: 'Teil 1 – Täterdynamiken und Manipulationssysteme',
    partSubtitle: 'Die Anatomie von Narzissmus und Täuschung',
    chapterNumber: 11,
    title: 'Täter im professionellen Kontext – Kollegen, Berater, Therapeuten',
    subtitle: 'Manipulation in Arbeitswelt, Beratung und Therapie als besonders folgenschwere Sonderform.',
    summary: 'In Hierarchien, Unternehmen, aber auch im therapeutischen und beratenden Kontext richten toxische Persönlichkeiten enormen Schaden an. Das Ausnutzen von Vertrauens- und Abhängigkeitsverhältnissen traumatisiert Klienten und Mitarbeiter tief.',
    coreMechanism: 'Ausnutzen institutioneller Macht und Vertrauensvorschüsse zur Immunisierung gegen Kritik.',
    psychologicalBackground: 'Sekundäre Viktimisierung und institutioneller Verrat (Institutional Betrayal nach Jennifer Freyd).',
    victimExperience: 'Man sucht Hilfe bei einem Therapeuten oder Berater und wird dort erneut abgewertet, missbraucht oder an den Täter ausgeliefert.',
    warningSigns: [
      'Grenzverletzungen durch Fachpersonen (private Nachrichten, Beziehungsangebote, Abhängigkeit)',
      'Chefs, die Mitarbeiter gegeneinander ausspielen und Erfolge für sich verbuchen',
      'Toxische Schuldzuweisungen in angeblich helfenden Settings'
    ],
    concreteActionSteps: [
      'Therapie oder Beratung bei unethischem Verhalten sofort abbrechen',
      'Meldung an Ethikkommissionen und Landespsychotherapeutenkammern',
      'Im Job: Mobbing-Tagebuch führen, Betriebsrat oder externe Anwälte hinzuziehen'
    ],
    tags: ['Berufswelt', 'Therapie-Missbrauch', 'Mobbing', 'Institutioneller Verrat'],
    readTimeMin: 7
  },

  // --- TEIL 2 ---
  {
    id: 't2-c1',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 1,
    title: 'Auf Eierschalen laufen – Leben in ständiger Alarmbereitschaft',
    subtitle: 'Wie Daueranspannung, Unsicherheit und Vorwegnahme von Gefahr den Alltag bestimmen.',
    summary: 'Betroffene leben in einer permanenten Habachtstellung. Jedes Geräusch der Haustür, jeder Schritt im Flur wird gescannt, um die aktuelle Laune des Täters zu erraten und einer Explosion zuvorzukommen.',
    coreMechanism: 'Chronische Übererregung (Hyperarousal) des sympathischen Nervensystems durch unvorhersehbare Bedrohung.',
    psychologicalBackground: 'Stephen Porges’ Polyvagal-Theorie: Der ventrale Vagus (Sicherheit & soziales Engagement) wird gehemmt, während Sympathikus und dorsaler Vagus den Organismus dominieren.',
    victimExperience: 'Man fühlt sich wie eine gespannte Saite, die jeden Moment zerreißt. Entspannung ist unmöglich, selbst wenn der Partner gerade scheinbar friedlich auf dem Sofa sitzt.',
    warningSigns: [
      'Körperliche Erstarrung oder Herzklopfen beim Schlüsselgeräusch an der Wohnungstür',
      'Ständiges Überdenken jedes Satzes vor dem Aussprechen',
      'Chronische Muskelverspannungen im Nacken-, Schulter- und Kieferbereich'
    ],
    concreteActionSteps: [
      'Den Zustand als physiologische Überlebensreaktion anerkennen, nicht als persönliche Schwäche',
      'Regelmäßige somatische Entlastungsinseln schaffen (z.B. Natur, stiller Raum)',
      'Orientierungsübungen im Hier und Jetzt: Blick im Raum schweifen lassen'
    ],
    tags: ['Eierschalenlaufen', 'Polyvagal', 'Daueralarm', 'Hyperarousal'],
    readTimeMin: 7
  },
  {
    id: 't2-c2',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 2,
    title: 'Kognitive Dissonanz – Der innere Widerspruch zwischen Wissen und Fühlen',
    subtitle: 'Warum Betroffene gleichzeitig erkennen, was passiert, und dennoch emotional gebunden bleiben.',
    summary: 'Kognitive Dissonanz ist der quälende Spagat zwischen zwei unvereinbaren Wahrheiten: „Dieser Mensch liebt mich und hat mir die Sterne vom Himmel geholt“ versus „Dieser Mensch zerstört mich systematisch“. Das Gehirn versucht diesen Widerspruch oft durch Selbstbeschuldigung aufzulösen.',
    coreMechanism: 'Affektive Rationalisierung: Um den Schmerz des Verrats zu dämpfen, redet das Opfer das destruktive Verhalten schön.',
    psychologicalBackground: 'Leon Festingers Theorie der kognitiven Dissonanz im Kontext von interpersonellem Trauma.',
    victimExperience: 'Man liest Artikel über Narzissmus und denkt: „Das ist exakt meine Beziehung!“. Zehn Minuten später schickt der Partner ein süßes Foto und man denkt: „Nein, ich tue ihm unrecht, er meint es doch gut.“',
    warningSigns: [
      'Ständiges Entschuldigen des Täters vor Freunden („Er hatte eine so schwere Kindheit“)',
      'Gefühl, zwei verschiedene Leben oder zwei verschiedene Partner zu haben',
      'Wiederkehrende Selbstzweifel trotz eindeutiger Beweise für Lügen und Betrug'
    ],
    concreteActionSteps: [
      'Beide Realitäten nebeneinander stehen lassen, ohne den Täter zu entschuldigen',
      'Eine „Realitätsliste“ aller verletzenden Vorfälle führen und in Momenten der Beschönigung lesen',
      'Akzeptieren: Traumatischer Missbrauch und liebevolle Momente schließen sich bei Tätern nicht aus'
    ],
    tags: ['Kognitive Dissonanz', 'Widerspruch', 'Beschönigung', 'Festinger'],
    readTimeMin: 8
  },
  {
    id: 't2-c3',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 3,
    title: 'Trauma-Bindung – Die toxische Loyalität zum Auslöser des Schmerzes',
    subtitle: 'Bindung an den Täter trotz Leid als traumapsychologisches Phänomen.',
    summary: 'Trauma-Bonding ist keine Liebe, sondern eine neurobiologische Fessel. Durch den zyklischen Wechsel von Terror und Erleichterung, Entwertung und Versöhnung wird der Täter gleichzeitig zur Quelle des Schmerzes und zum einzigen Spender von Linderung.',
    coreMechanism: 'Intermittierende biochemische Achterbahn (Adrenalin/Cortisol während des Angriffs, gefolgt von Oxytocin/Endorphinen bei der Versöhnung).',
    psychologicalBackground: 'Patrick Carnes’ Theorie des Trauma-Bondings und Analogien zum Stockholm-Syndrom.',
    victimExperience: 'Es fühlt sich an wie Heroinsucht. Selbst nach den grausamsten Demütigungen sehnt man sich nach der Umarmung genau der Person, die einen getreten hat.',
    warningSigns: [
      'Gefühl, ohne diesen Partner nicht lebensfähig zu sein, obwohl die Beziehung die Hölle ist',
      'Verteidigen des Partners gegen Menschen, die einen beschützen wollen',
      'Intensivstes Liebesgefühl unmittelbar nach überstandenen Streit- und Terrorphasen'
    ],
    concreteActionSteps: [
      'Die Bindung als biochemische Sucht begreifen – Entzugserscheinungen einplanen',
      'Strikte Kontaktsperre als Entgiftung für das Belohnungszentrum',
      'Professionelle traumafokussierte Begleitung zur Durchtrennung des Bandes'
    ],
    tags: ['Trauma-Bonding', 'Sucht', 'Oxytocin', 'Stockholm-Syndrom', 'Loyalität'],
    readTimeMin: 9
  },
  {
    id: 't2-c4',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 4,
    title: 'Bindungsangst und Verlassenheitsangst – Das zerstörerische Wechselspiel',
    subtitle: 'Wie frühe Bindungsverletzungen spätere toxische Beziehungen stabilisieren.',
    summary: 'Toxische Beziehungen sind oft das Zusammentreffen von ängstlich-gebundenen Partnern (Opfer) und vermeidend-narzisstischen Partnern (Täter). Die panische Angst vor dem Verlassenwerden klinkt sich nahtlos in das Rückzugs- und Bestrafungsmuster des Täters ein.',
    coreMechanism: 'Aktivierung des frühkindlichen Bindungspaniksystems bei drohendem Beziehungsabbruch.',
    psychologicalBackground: 'Bindungstheorie nach John Bowlby und Mary Ainsworth (Insecure-Anxious vs. Avoidant Attachment).',
    victimExperience: 'Wenn der Partner auf Distanz geht oder nicht antwortet, bricht pure Todesangst aus. Man tut alles, erniedrigt sich, nur damit der Kontakt nicht abreißt.',
    warningSigns: [
      'Übermäßige Wachsamkeit bezüglich minimaler Distanzierung des Partners',
      'Vollständige Selbstaufgabe, um den anderen nicht zu verärgern',
      'Verharren in Missbrauch aus panischer Angst vor dem Alleinsein'
    ],
    concreteActionSteps: [
      'Das „Innere Kind“ trösten: Die Verlassenheitsangst gehört oft in die eigene Kindheit',
      'Selbstberuhigungstechniken üben, wenn die Bindungspanik anflutet',
      'Erkennen: Alleinsein ist schmerzhaft, aber Missbrauch ist zerstörerisch'
    ],
    tags: ['Bindungsangst', 'Verlassenheitsangst', 'Bowlby', 'Inneres Kind'],
    readTimeMin: 7
  },
  {
    id: 't2-c5',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 5,
    title: 'Neurozeption und fehlendes Sicherheitsgefühl – Wenn der Körper nicht entwarnt',
    subtitle: 'Die unbewusste Gefahrenerkennung gerät aus dem Gleichgewicht.',
    summary: 'Neurozeption bezeichnet das unbewusste Scannen der Umwelt auf Sicherheit oder Gefahr. Nach chronischem Missbrauch kann das Nervensystem keine Entwarnung mehr geben. Selbst in friedlichen Momenten feuert die Amygdala weiter.',
    coreMechanism: 'Dysfunktionale Neurozeption hält das System in ständiger Kampf-Flucht- oder Erstarrungsreaktion gefangen.',
    psychologicalBackground: 'Polyvagal-Theorie (Stephen Porges): Chronischer Ausfall der sozialen Bremsfunktion (ventrovagale Regulation).',
    victimExperience: 'Man sitzt an einem idyllischen See und der Puls rast dennoch mit 110 Schlägen. Man kann nicht mehr begreifen, wie sich „Sicherheit“ überhaupt anfühlt.',
    warningSigns: [
      'Schreckhaftigkeit bei kleinsten Geräuschen',
      'Unfähigkeit, in Ruhephasen abzuschalten – stattdessen Rastlosigkeit oder Panik',
      'Körperliche Symptome ohne organischen Befund'
    ],
    concreteActionSteps: [
      'Somatische Erdung: Füße fest in den Boden drücken, Wände berühren',
      'Verlängerte Ausatmung zur Aktivierung des Vagusnervs (z.B. 4 Sekunden ein, 7 aus)',
      'Sichere Reize ganz bewusst im Gehirn verankern (Somatic Experiencing nach Peter Levine)'
    ],
    tags: ['Neurozeption', 'Sicherheit', 'Vagusnerv', 'Somatic Experiencing'],
    readTimeMin: 7
  },
  {
    id: 't2-c6',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 6,
    title: 'Fawn und Submit – Unterwerfung als Überlebensmodus',
    subtitle: 'Anpassung, Beschwichtigung und Selbstverleugnung als Traumaantwort.',
    summary: 'Neben Fight (Kampf), Flight (Flucht) und Freeze (Erstarrung) ist Fawn (Einschmeicheln/Beschwichtigen) die vierte fundamentale Traumaantwort. Das Opfer versucht den Täter durch extreme Zuvorkommenheit, Schmeicheln und Vorwegnahme aller Wünsche friedlich zu stimmen.',
    coreMechanism: 'Beschwichtigung des Aggressors zur Abwendung von Lebensgefahr oder seelischer Vernichtung.',
    psychologicalBackground: 'Pete Walker (Complex PTSD: From Surviving to Thriving): Die Fawn-Reaktion als konditionierte Überlebensstrategie bei narzisstischen Bezugspersonen.',
    victimExperience: 'Man lächelt und kocht das Lieblingsessen, während man innerlich weint und sich vor Ekel windet. Man hat das Gefühl, kein eigenes Rückgrat mehr zu besitzen.',
    warningSigns: [
      'Chronisches „People Pleasing“ – Unfähigkeit, Nein zu sagen',
      'Automatisches Lächeln und Nicken, selbst wenn man beleidigt wird',
      'Schuldgefühle bei jeder eigenen Meinungsäußerung'
    ],
    concreteActionSteps: [
      'Die Fawn-Reaktion ehren: Sie hat Ihr Überleben in gefährlichen Situationen gesichert',
      'Im sicheren Umfeld kleine Mikro-Grenzen üben („Ich möchte heute lieber Tee statt Kaffee“)',
      'Den körperlichen Impuls des Nachgebens wahrnehmen und für 5 Sekunden innehalten'
    ],
    tags: ['Fawn Response', 'Pete Walker', 'People Pleasing', 'Unterwerfung'],
    readTimeMin: 8
  },
  {
    id: 't2-c7',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 7,
    title: 'Nebel im Kopf – Exekutive Funktionsstörungen und kognitive Einschränkungen',
    subtitle: 'Trauma beeinflusst Konzentration, Planung, Entscheidungen und Alltag.',
    summary: 'Der sprichwörtliche „Brain Fog“ nach psychischem Missbrauch ist keine Einbildung. Unter chronischem Stress schrumpft das Arbeitsgedächtnis, der präfrontale Kortex wird gedrosselt, und Betroffene vergessen Termine, Schlüssel oder einfachste Wörter.',
    coreMechanism: 'Neurotoxische Wirkung dauerhaft erhöhter Cortisolspiegel auf den Hippocampus und den präfrontalen Kortex.',
    psychologicalBackground: 'Neurobiologie des Traumas nach Bessel van der Kolk (Der Körper erinnert sich).',
    victimExperience: 'Man steht im Supermarkt und weiß nicht mehr, was man kaufen wollte. Man liest denselben Absatz viermal und versteht kein Wort. Man glaubt, frühzeitig dement zu werden.',
    warningSigns: [
      'Ausgeprägte Wortfindungsstörungen und Gedächtnislücken',
      'Überforderung bei alltäglichen administrativen Aufgaben',
      'Entscheidungsunfähigkeit selbst bei Banalitäten'
    ],
    concreteActionSteps: [
      'Radikale Selbstentlastung: To-Do-Listen reduzieren, Notizen nutzen',
      'Wissen: Diese kognitiven Einschränkungen sind reversibel, sobald das Gehirn zur Ruhe kommt',
      'Schlafhygiene und nährstoffreiche Ernährung zur Unterstützung der Neurogenese'
    ],
    tags: ['Brain Fog', 'Exekutive Funktionen', 'Cortisol', 'Gedächtnis', 'Neurobiologie'],
    readTimeMin: 7
  },
  {
    id: 't2-c8',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 8,
    title: 'Scham – Die unsichtbare Kernemotion nach psychischem Missbrauch',
    subtitle: 'Nicht nur Angst, sondern tiefe Scham prägt Selbstbild und Sprachlosigkeit.',
    summary: 'Während Schuld sagt: „Ich habe etwas Schlechtes getan“, sagt toxische Scham: „Ich bin grundsätzlich fehlerhaft, wertlos und unliebbar“. Täter projizieren ihre eigene verleugnete Scham auf das Opfer, bis dieses die Last allein trägt.',
    coreMechanism: 'Internalisierung von Entwertung und Täterprojektionen als existentielle Selbstabwertung.',
    psychologicalBackground: 'Brené Brown zur Schamforschung und Gershen Kaufman (The Psychology of Shame).',
    victimExperience: 'Man möchte im Erdboden versinken. Man schämt sich dafür, mitgemacht zu haben, dafür, nicht früher gegangen zu sein, dafür, so naiv gewesen zu sein.',
    warningSigns: [
      'Vermeidung von Blickkontakt und sozialer Rückzug',
      'Quälende Schamgefühle beim Gedanken, anderen die Wahrheit über die Beziehung zu erzählen',
      'Gefühl, eine giftige oder defekte Person zu sein'
    ],
    concreteActionSteps: [
      'Scham entmachten durch Sprechen: Scham stirbt, wenn sie empathisch gehört wird',
      'Täterscham zurückgeben: „Diese Schandtat gehört dir, nicht mir“',
      'Selbstmitgefühl (Self-Compassion nach Kristin Neff) als Gegengift kultivieren'
    ],
    tags: ['Scham', 'Toxische Scham', 'Brené Brown', 'Selbstmitgefühl'],
    readTimeMin: 8
  },
  {
    id: 't2-c9',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 9,
    title: 'Das Täter-Introjekt – Wenn die Stimme des Täters nach innen wandert',
    subtitle: 'Die entwertende Täterstimme wird zum inneren Kritiker.',
    summary: 'Selbst wenn der Täter physisch abwesend ist, lebt er im Kopf des Opfers weiter. Das Täter-Introjekt kommentiert jeden Schritt mit Spott, Vorwürfen und Entmutigung („Das schaffst du sowieso nicht“, „Du bist zu fett, dumm, faul“).',
    coreMechanism: 'Introjektion: Unbewusste Übernahme fremder aggressiver Persönlichkeitsanteile zur Vorwegnahme von Bestrafung.',
    psychologicalBackground: 'Psychoanalytische Objektbeziehungstheorie und Internal Family Systems (IFS nach Richard Schwartz).',
    victimExperience: 'Man macht einen Fehler beim Kochen und beschimpft sich selbst sofort mit genau den Worten und dem Tonfall, den der Täter immer benutzt hat.',
    warningSigns: [
      'Bösartiger, gnadenloser innerer Kritiker im Alltag',
      'Ständige Selbstsabotage kurz vor wichtigen Erfolgen',
      'Gefühl, vom Täter besetzt oder kolonisiert zu sein'
    ],
    concreteActionSteps: [
      'Die Stimme identifizieren: „Wessen Stimme ist das eigentlich gerade?“',
      'Dem Introjekt ein klares Stoppzeichen setzen („Du bist nicht meine Stimme“)',
      'Die eigene innere Fürsprecherin / den wohlwollenden Beobachter stärken'
    ],
    tags: ['Täter-Introjekt', 'Innerer Kritiker', 'IFS', 'Introjektion'],
    readTimeMin: 7
  },
  {
    id: 't2-c10',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 10,
    title: 'Identitätsverlust – Der schleichende Verlust des eigenen Selbst',
    subtitle: 'Wie Werte, Wünsche, Sprache und Selbstgefühl unter Dauer-Manipulation zerfallen.',
    summary: 'Missbrauch löscht das eigene Ich schrittweise aus. Am Ende weiß der Betroffene nicht mehr, welche Musik er mag, was seine politischen Ansichten sind oder was er beruflich will – die gesamte Identität wurde auf das Überleben im System ausgerichtet.',
    coreMechanism: 'Entdifferenzierung und Fusion mit dem narzisstischen System des Täters.',
    psychologicalBackground: 'Erosion des Selbstkonzepts und Verlust von Agency (Selbstwirksamkeit).',
    victimExperience: 'Man blickt in den Spiegel und erkennt die Person darin nicht wieder. Ein Hülle ohne Inhalt, Augen ohne Glanz.',
    warningSigns: [
      'Unfähigkeit zu beantworten: „Was möchtest du heute essen oder tun?“',
      'Aufgabe aller alten Leidenschaften, des Kleidungsstils und des Freundeskreises',
      'Vollständige Orientierung an den Launen und Bedürfnissen des Partners'
    ],
    concreteActionSteps: [
      'Eine „Ich-Wiederfindungs-Liste“ anlegen: Dinge, die ich als Kind geliebt habe',
      'Kleine autonome Entscheidungen treffen, ohne jemanden um Erlaubnis zu bitten',
      'Geduld haben: Identität wächst langsam nach wie ein gerodeter Wald'
    ],
    tags: ['Identitätsverlust', 'Selbstwirksamkeit', 'Agency', 'Entfremdung'],
    readTimeMin: 8
  },
  {
    id: 't2-c11',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 11,
    title: 'Erlernte Hilflosigkeit und Wiederholungszwang – Wenn alte Muster weiterleben',
    subtitle: 'Warum Selbstwirksamkeit verloren geht und toxische Dynamiken sich wiederholen.',
    summary: 'Wenn Flucht und Kampf über Jahre erfolglos blieben, lernt der Organismus, dass jede Gegenwehr zwecklos ist. Gleichzeitig führt der Wiederholungszwang oft unbewusst dazu, wieder an ähnliche Partnertypen zu geraten, um das alte Kindheitstrauma nachträglich zu meistern.',
    coreMechanism: 'Konditionierte Resignation gepaart mit dem Versuch des Unbewussten, alte Wunden im neuen Gewand zu heilen.',
    psychologicalBackground: 'Martin Seligmans Modell der erlernten Hilflosigkeit und Sigmund Freuds Wiederholungszwang.',
    victimExperience: 'Man spürt: „Egal was ich mache, es ändert sich nichts“. Man bleibt bewegungslos im Leid sitzen.',
    warningSigns: [
      'Apathie und Resignation bei Konflikten',
      'Serie von toxischen Beziehungen mit identischem Verlauf',
      'Gefühl, vom Schicksal für toxische Menschen markiert zu sein'
    ],
    concreteActionSteps: [
      'Erkennen: Sie sind heute erwachsen und haben Handlungsoptionen, die Sie als Kind nicht hatten',
      'Kleine Siege der Selbstwirksamkeit feiern und aufschreiben',
      'Vor neuen Dates eine strenge Beobachtungsphase mit Checkliste einhalten'
    ],
    tags: ['Erlernte Hilflosigkeit', 'Wiederholungszwang', 'Seligman', 'Resignation'],
    readTimeMin: 7
  },
  {
    id: 't2-c12',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 12,
    title: 'Grübeln und offene Gestalten – Wenn kein innerer Abschluss möglich ist',
    subtitle: 'Gedankenkreisen, Zeigarnik-Effekt und die quälende Suche nach Auflösung.',
    summary: 'Da Täter niemals ehrliche Reue oder befriedigende Klärungsgespräche ermöglichen, bleibt die Beziehung als unvollendete Handlung im Gehirn hängen. Der Zeigarnik-Effekt treibt das Gehirn zu endlosem Grübeln (Rumination), um einen Sinn zu finden.',
    coreMechanism: 'Kognitive Schleifenbildung durch das Fehlen eines emotionalen Schlusspunkts (Closure).',
    psychologicalBackground: 'Bluma Zeigarniks Gestaltpsychologie über unvollendete Aufgaben und neuere Forschungen zu posttraumatischer Rumination.',
    victimExperience: 'Tag und Nacht laufen dieselben Fragen: „Warum hat er das getan? Hat sie mich je geliebt? Was hätte ich anders machen müssen?“',
    warningSigns: [
      'Schlaflosigkeit durch stundenlanges Gedankenkreisen',
      'Zwanghaftes Analysieren alter Chatverläufe und E-Mails',
      'Physische Erschöpfung durch unablässiges inneres Debattieren'
    ],
    concreteActionSteps: [
      'Begreifen: Die ersehnte Klärung (Closure) wird vom Täter niemals kommen – Sie müssen sich den Abschluss selbst schenken',
      'Grübelstopp-Techniken: Gedanken laut stoppen und physische Aktivität starten',
      'Einen ungesendeten Abschiedsbrief schreiben und verbrennen'
    ],
    tags: ['Grübeln', 'Zeigarnik-Effekt', 'Closure', 'Rumination', 'Abschluss'],
    readTimeMin: 8
  },
  {
    id: 't2-c13',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 13,
    title: 'Dissoziation im Alltag – Wegdriften, Funktionieren und innere Abspaltung',
    subtitle: 'Dissoziative Reaktionen sind oft leise, unauffällig und alltagsnah.',
    summary: 'Dissoziation ist die Notbremse der Psyche. Wenn Schmerz unerträglich wird und Flucht unmöglich ist, spaltet sich das Bewusstsein ab. Betroffene funktionieren im Job wie Roboter, fühlen ihren Körper nicht mehr oder erleben die Umwelt wie durch Watte oder eine Glasscheibe (Depersonalisation/Derealisation).',
    coreMechanism: 'Neurobiologische Schutzreaktion des dorsalen Vagusnervs zur Schmerz- und Reizdämpfung.',
    psychologicalBackground: 'Strukturierte Dissoziation der Persönlichkeit nach Onno van der Hart und Ellert Nijenhuis.',
    victimExperience: 'Man schaut auf die eigenen Hände und sie fühlen sich fremd an. Man hört den Täter schreien, aber es berührt einen nicht mehr – man ist kilometerweit weg.',
    warningSigns: [
      'Gefühl, neben sich zu stehen oder das Leben wie einen Film zu betrachten',
      'Taubheit im Körper, fehlendes Temperaturempfinden oder Schmerztoleranz',
      'Zeitsprünge im Alltag (man weiß nicht mehr, wie man von A nach B gekommen ist)'
    ],
    concreteActionSteps: [
      'Starke Sinnesreize zur Re-Orientierung: Eiswürfel lutschen, Chili-Bonbon, Gerüche (Lavendel/Ammoniak-Sticks)',
      'Benennen von 5 Dingen, die man im Raum sieht und anfassen kann',
      'Die Dissoziation nicht bekämpfen, sondern sich bedanken: „Danke, Schutzsystem, jetzt bin ich sicher“'
    ],
    tags: ['Dissoziation', 'Derealisation', 'Depersonalisation', 'Dorsaler Vagus'],
    readTimeMin: 8
  },
  {
    id: 't2-c14',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 14,
    title: 'Komplexe PTBS und Strukturstörung – Wenn das Trauma die Grundorganisation verändert',
    subtitle: 'Langanhaltender Missbrauch beeinflusst Affektregulation, Selbstbild und Beziehungen.',
    summary: 'Anders als bei einer einfachen PTBS (nach einem Autounfall oder Naturkatastrophe) entsteht eine K-PTBS durch monate- oder jahrelange zwischenmenschliche Gefangenschaft. Die Kernbereiche: Chronische emotionale Dysregulation, negatives Selbstbild und anhaltende Beziehungsschwierigkeiten.',
    coreMechanism: 'Tiefgreifende Erschütterung des grundlegenden Urvertrauens und der psychischen Struktur.',
    psychologicalBackground: 'Judith Herman (Trauma and Recovery), ICD-11 Diagnosekriterien der Komplexen PTBS (6B41).',
    victimExperience: 'Man fühlt sich für immer beschädigt. Emotionale Flashbacks überfluten das System ohne sichtbare Bilder – pure Gefühle von Panik, Einsamkeit und Vernichtung.',
    warningSigns: [
      'Plötzliche emotionale Flashbacks ohne greifbaren Anlass',
      'Schwere Schwierigkeiten, Wut, Trauer oder Angst zu regulieren',
      'Tiefes Misstrauen gegenüber allen Menschen gepaart mit Isolation'
    ],
    concreteActionSteps: [
      'Gezielte K-PTBS-spezifische Traumatherapie (z.B. EMDR, Brainspotting, Ego-State-Therapie)',
      'Erkennen emotionaler Flashbacks: „Ich erlebe gerade ein altes Gefühl, die Gefahr ist jetzt vorbei“',
      'Selbstfürsorge als tägliche Pflichtaufgabe etablieren'
    ],
    tags: ['K-PTBS', 'Komplexe PTBS', 'Judith Herman', 'Affektregulation', 'ICD-11'],
    readTimeMin: 9
  },
  {
    id: 't2-c15',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 15,
    title: 'Somatische Folgen – Schlafstörungen, Herzrasen, Schmerzen und Erschöpfung',
    subtitle: 'Psychische Gewalt wirkt nicht nur seelisch, sondern tief über den Körper fort.',
    summary: 'Der Körper lügt nicht. Chronische Zwangskontrolle und emotionale Gewalt manifestieren sich in Reizdarmsyndrom, Fibromyalgie, Migräne, Tinnitus, Autoimmunreaktionen und chronischer Fatigue.',
    coreMechanism: 'Dauerhafte Aktivierung der Hypothalamus-Hypophysen-Nebennierenrinden-Achse (HPA-Achse) führt zu systemischen Entzündungsprozessen.',
    psychologicalBackground: 'Gabor Maté (Wenn der Körper nein sagt) und Vincent Felittis ACE-Studien (Adverse Childhood Experiences).',
    victimExperience: 'Man rennt von Arzt zu Arzt, doch niemand findet organische Ursachen für den schmerzenden Magen oder die ständige Übelkeit.',
    warningSigns: [
      'Schlafstörungen (Durchschlafprobleme zwischen 2 und 4 Uhr morgens)',
      'Spontane Herzrasen-Attacken in völliger Ruhe',
      'Unerklärliche Verdauungsbeschwerden und Nahrungsmittelunverträglichkeiten'
    ],
    concreteActionSteps: [
      'Körperliche Symptome als Alarmsignal des Körpers begreifen, die toxische Umgebung zu verlassen',
      'Sanfte somatische Übungen (Yoga, Vagusnerv-Massagen, Spaziergänge)',
      'Medizinische Abklärung, aber parallel den psychosozialen Stressfaktor radikal reduzieren'
    ],
    tags: ['Somatik', 'Schlafstörungen', 'Gabor Maté', 'HPA-Achse', 'Entzündungen'],
    readTimeMin: 7
  },
  {
    id: 't2-c16',
    part: 2,
    partTitle: 'Teil 2 – Opferdynamiken, Trauma und Folgeschäden',
    partSubtitle: 'Körper, Geist und Nervensystem unter Dauerbeschuss',
    chapterNumber: 16,
    title: 'Binge Eating und Bewältigungsstrategien – Wenn Symptome Lösungen ersetzen',
    subtitle: 'Essen, Rückzug, Chaos oder Überanpassung als Versuche, innere Zustände zu regulieren.',
    summary: 'Symptome wie Binge Eating, Kaufen, exzessiver Sport oder Rückzug sind keine Willensschwächen, sondern verzweifelte Selbstbehandlungsversuche eines überlasteten Nervensystems, um unerträgliche Gefühlszustände zu betäuben.',
    coreMechanism: 'Dopaminerge und serotonerge Selbstmedikation zur kurzzeitigen Schmerzstillung.',
    psychologicalBackground: 'Emotionsfokussierte Coping-Strategien und süchtige Verhaltensmuster als Trauma-Kompensation.',
    victimExperience: 'Nach einem erniedrigenden Streit sitzt man nachts vor dem Kühlschrank und verschlingt mechanisch Mengen an Essen, nur um kurz etwas Wärme zu spüren.',
    warningSigns: [
      'Heißhungerattacken und Kontrollverlust beim Essen nach Konflikten',
      'Zwanghaftes Onlineshopping zur Stimmungsaufhellung',
      'Schamspiralen nach dem Ausführen der Bewältigungshandlung'
    ],
    concreteActionSteps: [
      'Den Nutzen des Verhaltens anerkennen: Es hat Ihnen geholfen, den Moment zu überstehen',
      'Alternative Skills bereitstellen (Warmbad, Decke, Boxsack, Spaziergang)',
      'Die Ursache (toxische Beziehung) behandeln, nicht nur das Symptom'
    ],
    tags: ['Binge Eating', 'Coping', 'Selbstregulation', 'Suchtverhalten'],
    readTimeMin: 7
  },

  // --- TEIL 3 ---
  {
    id: 't3-c1',
    part: 3,
    partTitle: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    partSubtitle: 'Seltene, aber tiefgreifende Dynamiken verstehen',
    chapterNumber: 1,
    title: 'Emotionaler Inzest – Wenn Grenzen in der Familie unsichtbar verletzt werden',
    subtitle: 'Ein oft übersehenes Entwicklungstrauma mit Folgen für Bindung und Schuld.',
    summary: 'Emotionaler Inzest (auch Parentifizierung oder Covert Incest) tritt auf, wenn ein Elternteil das Kind als Partnerersatz, Seelentröster oder Vertrauten für Erwachsenenprobleme missbraucht. Das Kind verliert seine Kindheit und wird zum emotionalen Wächter der Eltern.',
    coreMechanism: 'Rollenumkehr: Das Kind muss für die emotionale Stabilität des Erwachsenen sorgen.',
    psychologicalBackground: 'Patricia Loves Konzept des emotionalen Inzests und Salvador Minuchins strukturelle Familientherapie.',
    victimExperience: 'Man spürt ein diffuses Ekelgefühl bei übertriebener elterlicher Nähe und plagt sich zeitlebens mit Schuldgefühlen, wenn man ein eigenes Leben aufbauen will.',
    warningSigns: [
      'Elternteil weiht Kind in Eheprobleme oder finanzielle Sorgen ein',
      'Gefühl, für das Glück oder Unglück der Mutter/des Vaters verantwortlich zu sein',
      'Partnerwahl später nach dem Muster: hilfsbedürftige, emotionale Pflegefälle'
    ],
    concreteActionSteps: [
      'Klare emotionale Abgrenzung von den Eltern: „Das sind eure Themen, nicht meine“',
      'Trauer zulassen über die Kindheit, die man nie haben durfte',
      'Aufhören, den Therapeuten für die eigenen Eltern zu spielen'
    ],
    tags: ['Emotionaler Inzest', 'Parentifizierung', 'Familientrauma', 'Grenzen'],
    readTimeMin: 8
  },
  {
    id: 't3-c2',
    part: 3,
    partTitle: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    partSubtitle: 'Seltene, aber tiefgreifende Dynamiken verstehen',
    chapterNumber: 2,
    title: 'Moral Injury – Wenn das Gewissen gegen die eigene Person gewendet wird',
    subtitle: 'Schuld, Loyalität und falsche Verantwortungsübernahme als Folge toxischer Erziehung.',
    summary: 'Moral Injury beschreibt die seelische Verwundung, wenn ein Mensch gezwungen war, gegen seine tiefsten ethischen Werte zu handeln, oder erleben musste, wie elementare moralische Gerechtigkeit im engsten Kreis mit Füßen getreten wurde.',
    coreMechanism: 'Zerstörung des moralischen Weltbildes und Pervertierung von Loyalität.',
    psychologicalBackground: 'Jonathan Shay und Brett Litz zu Moral Injury bei Veteranen, übertragen auf Missbrauchsopfer.',
    victimExperience: 'Man quält sich mit der Frage: „Wie konnte ich zusehen, wie er mein Kind anbrüllt? Warum habe ich gelogen, um ihn zu decken?“',
    warningSigns: [
      'Tief sitzender Selbsthass und Verachtung für das eigene Schweigen in der Vergangenheit',
      'Gefühl, die eigene Seele oder Würde verkauft zu haben',
      'Verlust des Glaubens an das Gute im Menschen'
    ],
    concreteActionSteps: [
      'Verstehen: Sie handelten im Überlebensmodus unter Zwangskontrolle (Duress)',
      'Wiedergutmachung an sich selbst und betroffenen Schutzbefohlenen im Jetzt praktizieren',
      'Ein neues, eigenes ethisches Fundament definieren und konsequent leben'
    ],
    tags: ['Moral Injury', 'Gewissensbisse', 'Ethik', 'Loyalitätskonflikt'],
    readTimeMin: 8
  },
  {
    id: 't3-c3',
    part: 3,
    partTitle: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    partSubtitle: 'Seltene, aber tiefgreifende Dynamiken verstehen',
    chapterNumber: 3,
    title: 'Schuldgefühle und der geheime Auftrag der Kindheit',
    subtitle: 'Warum Loslösung sich falsch anfühlt: Frühe Rollenzuschreibungen binden Betroffene.',
    summary: 'Viele Betroffene erhielten in der Kindheit unbewusste Aufträge: „Du bist dafür da, die Familie zusammenzuhalten“, „Sei unauffällig“, „Mache Mama glücklich“. Das Verlassen toxischer Partner fühlt sich daher wie ein Hochverrat an diesem uralten Lebensauftrag an.',
    coreMechanism: 'Loyalitätsbindung an destruktive Generationsaufträge (Transgenerationale Weitergabe).',
    psychologicalBackground: 'Helm Stierlins Konzept der Delegation und Iván Böszörményi-Nagys unsichtbare Bindungen (Invisible Loyalties).',
    victimExperience: 'Im Moment des Kofferpackens fühlt man sich wie der größte Unmensch der Erde, obwohl man nur das eigene nackte Leben rettet.',
    warningSigns: [
      'Gefühl, für das Scheitern von Beziehungen immer die Alleinschuld zu tragen',
      'Unfähigkeit, eigene Erfolge zu genießen, wenn es anderen schlecht geht',
      'Chronisches Retter-Syndrom'
    ],
    concreteActionSteps: [
      'Den geheimen Kindheitsauftrag aufschreiben und formell kündigen',
      'Schuldgefühle aushalten lernen: Sie sind das Wachstumszeichen echter Emanzipation',
      'Verstehen: Sie schulden niemandem Ihre eigene Selbstzerstörung'
    ],
    tags: ['Delegation', 'Generationsauftrag', 'Schuldgefühle', 'Böszörményi-Nagy'],
    readTimeMin: 7
  },
  {
    id: 't3-c4',
    part: 3,
    partTitle: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    partSubtitle: 'Seltene, aber tiefgreifende Dynamiken verstehen',
    chapterNumber: 4,
    title: 'Trigger-Ketten und Mikrorauslöser – Wenn kleine Reize große Zustände aktivieren',
    subtitle: 'Nicht nur einzelne Trigger, sondern ganze Reaktionsketten prägen den Alltag.',
    summary: 'Ein Trigger kommt selten allein. Oft löst ein unscheinbarer Mikrorauslöser (ein bestimmter Parfümduft, ein WhatsApp-Benachrichtigungston, eine hochgezogene Augenbraue) eine Kaskade aus: Herzrasen -> Kognitive Verwirrung -> Panikgedanke -> Dissoziation.',
    coreMechanism: 'Klassische Furchtkonditionierung mit assoziativer Bahnung im Nervensystem.',
    psychologicalBackground: 'Neuroplastische Hebb’sche Lernregel („Neurons that fire together, wire together“) im Traumabereich.',
    victimExperience: 'Man hört den Klingelton des Handys und fällt binnen zwei Sekunden von heiterer Stimmung in bodenlose Verzweiflung.',
    warningSigns: [
      'Unverhältnismäßige emotionale Reaktionen auf banale Alltagsreize',
      'Panikattacken in Supermärkten, Straßenbahnen oder bei bestimmten Melodien',
      'Gefühl, dem eigenen Nervensystem ausgeliefert zu sein'
    ],
    concreteActionSteps: [
      'Trigger-Tagebuch: Den genauen Mikrorauslöser und die darauffolgende Kette entlarven',
      'Reiz-Entkopplung: Den Benachrichtigungston oder das Parfüm bewusst austauschen',
      'Somatic Anchoring: Beim Einsetzen der Kette sofort einen positiven Gegenreiz setzen'
    ],
    tags: ['Trigger', 'Mikrotrigger', 'Konditionierung', 'Nervensystem'],
    readTimeMin: 7
  },
  {
    id: 't3-c5',
    part: 3,
    partTitle: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    partSubtitle: 'Seltene, aber tiefgreifende Dynamiken verstehen',
    chapterNumber: 5,
    title: 'Psychische Entropie – Das psychische Chaos',
    subtitle: 'Innere Unordnung, Zerstreuung und Überforderung als Folge chronischer Destabilisierung.',
    summary: 'Entropie ist das Maß für Unordnung. Durch ständige Widersprüche, Überraschungsangriffe und Realitätswechsel des Täters steigt die psychische Entropie im Opfer dramatisch an. Die Gedanken zersplittern, der Alltag zerfällt ins Chaos.',
    coreMechanism: 'Zermürbung der kognitiven Ordnungssysteme durch ständige unberechenbare Fluktuationen.',
    psychologicalBackground: 'Mihaly Csikszentmihalyis Konzept der psychischen Entropie und informationstheoretische Modelle der Schizophrenogenese.',
    victimExperience: 'Die Wohnung versinkt im Chaos, man fängt zehn Dinge an und beendet keines. Man fühlt sich innerlich wie ein aufgewirbelter Bienenstock.',
    warningSigns: [
      'Chronische Unfähigkeit, Ordnung im Haushalt oder bei Finanzen zu halten',
      'Gedankensprünge und ständiges Gefühl von innerer Getriebenheit',
      'Extreme Erschöpfung durch minimale Sinneseindrücke'
    ],
    concreteActionSteps: [
      'Feste, unumstößliche Alltagsroutinen etablieren (z.B. Aufstehzeiten, Teerituale)',
      'Reizabschirmung: Smartphone für mehrere Stunden ausschalten',
      'Ein einziges Zimmer oder eine Ecke als absolute Oase der Ruhe und Ordnung gestalten'
    ],
    tags: ['Psychische Entropie', 'Chaos', 'Reizüberflutung', 'Struktur'],
    readTimeMin: 7
  },
  {
    id: 't3-c6',
    part: 3,
    partTitle: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    partSubtitle: 'Seltene, aber tiefgreifende Dynamiken verstehen',
    chapterNumber: 6,
    title: 'Projektive Identifizierung und Übertragung – Gefühle im Gegenüber platzieren',
    subtitle: 'Ein schweres, aber zentrales Thema zum Verstehen manipulativer Vorgänge.',
    summary: 'Projektive Identifizierung ist einer der primitivsten Abwehrmechanismen. Der Täter kann eigene unerträgliche Gefühle (z.B. Neid, Scham, Wut) nicht aushalten. Er manipuliert das Gegenüber so lange, bis dieser exakt diese Gefühle empfindet und ausagiert („Siehst du, du bist die Verrückte!“).',
    coreMechanism: 'Psychische Müllabfuhr: Entsorgung unerträglicher Selbstanteile in die Psyche des Opfers.',
    psychologicalBackground: 'Melanie Klein und Wilfred Bion zur projektiven Identifizierung in der Psychoanalyse.',
    victimExperience: 'Man war immer ein friedfertiger Mensch und plötzlich brüllt man wie eine Furie, während der Täter mit verschränkten Armen lächelt und sagt: „Guck dich mal an.“',
    warningSigns: [
      'Man fühlt Gefühle, die sich fremd anfühlen und nicht zum eigenen Charakter passen',
      'Täter provoziert gezielt bis zur Explosion und dokumentiert dann die Reaktion',
      'Ständiges Gefühl, der „Mülleimer“ für die schlechte Laune anderer zu sein'
    ],
    concreteActionSteps: [
      'Erkennen: „Dieses Gefühl gehört nicht zu mir, es wurde in mich hineingelegt“',
      'Den Affekt nicht ausagieren – die Projektion ins Leere laufen lassen',
      'Sich räumlich distanzieren, bevor der Siedepunkt erreicht wird'
    ],
    tags: ['Projektive Identifizierung', 'Melanie Klein', 'Projektion', 'Reaktiver Missbrauch'],
    readTimeMin: 8
  },
  {
    id: 't3-c7',
    part: 3,
    partTitle: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    partSubtitle: 'Seltene, aber tiefgreifende Dynamiken verstehen',
    chapterNumber: 7,
    title: 'Das Defendersyndrom – Wenn Vertraute den Täter schützen',
    subtitle: 'Warum Außenstehende, Familienmitglieder oder Fachpersonen Täter decken.',
    summary: 'Oft sind es die eigenen Eltern, Geschwister oder Freunde, die das Opfer im Stich lassen und den Täter verteidigen („Er liebt dich doch“, „Du musst ihm noch eine Chance geben“). Dies geschieht aus Angst vor eigener Konfrontation, Bequemlichkeit oder Täuschung.',
    coreMechanism: 'Kollusion und Systemstabilisierung: Um das eigene Weltbild nicht zu gefährden, wird das Opfer geopfert.',
    psychologicalBackground: 'Systemtheorie und Familienloyalitäten (Systemische Homöostase).',
    victimExperience: 'Die größte Wunde ist oft nicht der Täter selbst, sondern das Schweigen und der Verrat der Menschen, die einen hätten schützen müssen.',
    warningSigns: [
      'Familie bagatellisiert massive Gewaltausbrüche des Partners',
      'Vorwürfe an das Opfer: „Du machst unsere Familie kaputt mit deinen Vorwürfen“',
      'Täter wird bei Familienfesten hofiert, während das Opfer gemieden wird'
    ],
    concreteActionSteps: [
      'Den Schmerz des Verrats betrauern, statt vergeblich um Verständnis zu betteln',
      'Zu Mitläufern und Täter-Verteidigern ebenfalls klare Distanz aufbauen',
      'Verstehen: Wer den Täter schützt, macht sich zum Mittäter'
    ],
    tags: ['Defendersyndrom', 'Familienverrat', 'Systemische Kollusion', 'Gaslighting'],
    readTimeMin: 8
  },
  {
    id: 't3-c8',
    part: 3,
    partTitle: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    partSubtitle: 'Seltene, aber tiefgreifende Dynamiken verstehen',
    chapterNumber: 8,
    title: 'Warum Betroffene nicht gehen können – Verstehen statt Verurteilen',
    subtitle: 'Trauma-Bindung, Scham, Angst, Finanzen und Nervensystem erklären das Bleiben.',
    summary: 'Außenstehende fragen verständnislos: „Warum geht sie/er nicht einfach?“. Diese Frage zeugt von Unwissenheit. Betroffene bleiben wegen biochemischer Trauma-Bindung, realer Lebensbedrohung, finanzieller Abhängigkeit, zerstörter Selbstwirksamkeit und sozialer Isolation.',
    coreMechanism: 'Multifaktorielle Gefangenschaft im Zwangskontrollsystem (Battered Woman/Partner Syndrome).',
    psychologicalBackground: 'Lenore Walkers Zyklus der Gewalt und neuere Erkenntnisse zu Barrieren des Ausstiegs.',
    victimExperience: 'Man fühlt sich wie in einem gläsernen Käfig mit offener Tür, aber die Beine sind gelähmt und vor der Tür lauert ein Abgrund.',
    warningSigns: [
      'Wiederholte gescheiterte Trennungsversuche mit anschließender reumütiger Rückkehr',
      'Fehlendes Geld für eine eigene Kaution oder Rechtsbeistand',
      'Panische Angst vor Rache oder Verlust der Kinder'
    ],
    concreteActionSteps: [
      'Jede Selbstverurteilung stoppen: Eine Trennung aus toxischen Systemen braucht im Schnitt 7 Versuche',
      'Im Verborgenen einen pragmatischen Fluchtplan schmieden (Dokumente, Geld, Notunterkunft)',
      'Fachberatungsstellen (Frauenhäuser, Männerhilfetelefon) unverbindlich kontaktieren'
    ],
    tags: ['Trennungshürden', 'Ausstieg', 'Verständnis', 'Gewaltzyklus'],
    readTimeMin: 8
  },
  {
    id: 't3-c9',
    part: 3,
    partTitle: 'Teil 3 – Spezialthemen und psychologische Vertiefungen',
    partSubtitle: 'Seltene, aber tiefgreifende Dynamiken verstehen',
    chapterNumber: 9,
    title: 'Nach der Trennung – Hoovering, Rückfallkontakte und die lange Nachwirkung',
    subtitle: 'Die Beziehung endet formal früher als innerlich, psychisch und körperlich.',
    summary: 'Täter lassen Beute ungern ziehen. Durch „Hoovering“ (Staubsaugen: plötzliche Liebesnachrichten, vorgetäuschte Notfälle, Geschenke vor der Tür) versuchen sie, den Ex-Partner zurück ins System zu saugen. Die Heilung beginnt erst mit der Entwöhnung.',
    coreMechanism: 'Reaktivierung der Trauma-Bindung durch gezielte Nostalgie-Köder und Mitleidserpressung.',
    psychologicalBackground: 'Post-Separation Abuse und neurobiologische Entzugserscheinungen.',
    victimExperience: 'Monate nach der Trennung kommt eine SMS: „Ich habe gerade unser Lied gehört und an dich gedacht...“. Das Herz schlägt bis zum Hals und alle Vorsätze wanken.',
    warningSigns: [
      'Vorgetäuschte Krankheiten oder angebliche Selbstmorddrohungen nach der Trennung',
      'Zufällige „Begegnungen“ an Orten, an denen man sich aufhält',
      'Nachrichten über gemeinsame Bekannte oder Kinder'
    ],
    concreteActionSteps: [
      'Strikter No Contact auf allen Kanälen (Blockieren von Nummer, Social Media, E-Mail)',
      'Falls Kinder da sind: Ausschließlich schriftliche, sachliche Kommunikation (Grey Rock / Yellow Rock)',
      'Einen Rückfall-Notfallkontakt vereinbaren, den man anruft, BEVOR man dem Ex antwortet'
    ],
    tags: ['Hoovering', 'No Contact', 'Post-Separation Abuse', 'Rückfallschutz'],
    readTimeMin: 8
  },

  // --- TEIL 4 ---
  {
    id: 't4-c1',
    part: 4,
    partTitle: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    partSubtitle: 'Konkrete Werkzeuge, Schutzstrategien und Haltung',
    chapterNumber: 1,
    title: 'Warnsignale früh erkennen – Die wichtigsten roten Flaggen im Alltag',
    subtitle: 'Kompakte Orientierung für Beziehungen, Familie, Arbeit und professionelle Kontexte.',
    summary: 'Rote Flaggen sind keine Marotten, sondern Frühwarnsysteme der Intuition. Zu schnelles Tempo, ständige Opferrolle bei Ex-Partnern, Missachtung von Kellnern oder Servicepersonal und subtile Grenztests verraten toxische Muster lange vor der ersten Eskalation.',
    coreMechanism: 'Präventive Erkennung von Persönlichkeitsmustern vor dem Entstehen einer Bindung.',
    psychologicalBackground: 'Bauchgefühl und Neurozeption als evolutionäre Überlebenssensoren.',
    victimExperience: 'Hinterher sagt man fast immer: „Ganz am Anfang hatte ich so ein komisches Bauchgefühl, aber ich habe es weggewischt.“',
    warningSigns: [
      '„Alle meine Ex-Partner waren verrückt und narzisstisch“',
      'Überschreiten kleiner Grenzen unter dem Deckmantel von Humor oder Charme',
      'Verlangen nach Passwörtern oder ständiger Erreichbarkeit schon nach wenigen Wochen'
    ],
    concreteActionSteps: [
      'Das eigene Bauchgefühl als wissenschaftlich valides Alarmsignal ernst nehmen',
      'Frühe Grenzen testen: Ein klares „Nein, heute habe ich keine Zeit“ aussprechen und die Reaktion beobachten',
      'Niemals Mitleid als Grundlage für eine Beziehung akzeptieren'
    ],
    tags: ['Red Flags', 'Warnsignale', 'Bauchgefühl', 'Prävention'],
    readTimeMin: 7
  },
  {
    id: 't4-c2',
    part: 4,
    partTitle: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    partSubtitle: 'Konkrete Werkzeuge, Schutzstrategien und Haltung',
    chapterNumber: 2,
    title: 'Grenzen setzen ohne Eskalation – Schutzstrategien in schwierigen Dynamiken',
    subtitle: 'Praktische Möglichkeiten zur Abgrenzung, ohne unnötig zusätzliche Gefahr zu erzeugen.',
    summary: 'Klassische Kommunikationstipps („Ich-Botschaften“) scheitern bei toxischen Persönlichkeiten, weil sie Schwachstellen offenbaren. Stattdessen sind die BIFF-Methode (Brief, Informative, Friendly, Firm) und die Grey-Rock-Technik (langweilig wie ein grauer Kieselstein sein) überlebensnotwendig.',
    coreMechanism: 'Entzug von emotionalem Treibstoff (Zufuhr) bei gleichzeitiger Vermeidung offener Kriegserklärungen.',
    psychologicalBackground: 'De-Eskalationsstrategien nach Bill Eddy (High Conflict Institute).',
    victimExperience: 'Man hört auf, sich zu rechtfertigen, und stellt fest: Der Täter verliert das Interesse am Streit, wenn kein Drama mehr zurückkommt.',
    warningSigns: [
      'Stundenlanges Verfassen seitenlanger Erklärungsnachrichten',
      'Der Versuch, den Täter durch Argumente zur Einsicht zu bringen',
      'Emotionale Ausbrüche, die vom Täter sofort gegen einen verwendet werden'
    ],
    concreteActionSteps: [
      'Kein JADE: Justify (Rechtfertigen), Argue (Streiten), Defend (Verteidigen), Explain (Erklären) unterlassen',
      'Grey Rock: Antworten mit monotoner Stimme: „Aha“, „Interessant“, „Ich habe deine Meinung gehört“',
      'Schriftlich nur noch nach BIFF: Maximal 3 Sätze, sachlich, höflich, bestimmt'
    ],
    tags: ['Grenzen setzen', 'Grey Rock', 'BIFF', 'JADE', 'Deeskalation'],
    readTimeMin: 8
  },
  {
    id: 't4-c3',
    part: 4,
    partTitle: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    partSubtitle: 'Konkrete Werkzeuge, Schutzstrategien und Haltung',
    chapterNumber: 3,
    title: 'Was Betroffene in Akutphasen brauchen – Stabilisierung vor Aufarbeitung',
    subtitle: 'Sicherheit, Orientierung, Entlastung und kleine machbare Schritte statt Überforderung.',
    summary: 'In der Akutphase darf keine tiefe Psychoanalyse oder Traumabewältigung stattfinden. Das Nervensystem brennt! Oberste Priorität haben: Physische Sicherheit, Schlaf, Essen, Reizreduktion und emotionale Notfall-Erdung.',
    coreMechanism: 'Stabilisierung als Fundament jeder traumatherapeutischen Behandlung (Phase 1 nach Judith Herman).',
    psychologicalBackground: 'Phasenmodell der Traumatherapie: 1. Sicherheit & Stabilisierung, 2. Traumabearbeitung, 3. Re-Integration.',
    victimExperience: 'Man hat keine Kraft für Bücher oder Ratschläge – man braucht einfach jemanden, der einem eine warme Suppe bringt und die Hand hält.',
    warningSigns: [
      'Überforderung durch gut gemeinte Ratschläge von Bekannten',
      'Akute Suizidgedanken oder Panikzustände',
      'Vollständiger Zusammenbruch der Alltagsfähigkeit'
    ],
    concreteActionSteps: [
      'Das 3-Säulen-Prinzip der Akutphase: Schlafen, Trinken/Essen, Sicherheit',
      'Tagesablauf auf Mikroschritte reduzieren: Nur bis zum nächsten Mittagessen planen',
      'Notfallkontakte griffbereit haben'
    ],
    tags: ['Stabilisierung', 'Akuthilfe', 'Phasenmodell', 'Krisenintervention'],
    readTimeMin: 7
  },
  {
    id: 't4-c4',
    part: 4,
    partTitle: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    partSubtitle: 'Konkrete Werkzeuge, Schutzstrategien und Haltung',
    chapterNumber: 4,
    title: 'Gesprächsführung für das Helfersystem – Was hilft und was schadet',
    subtitle: 'Fragen, Reaktionen und Haltungen für Beratung, Therapie, Klinik und Jugendhilfe.',
    summary: 'Fachkräfte stehen vor großen Herausforderungen: Oft wirkt der Täter im Erstgespräch charmant, eloquent und einsichtig, während das Opfer verstört, gereizt, hysterisch oder inkohärent wirkt. Wer dieses Phänomen nicht kennt, fällt auf die Täter-Opfer-Umkehr herein.',
    coreMechanism: 'Traumainformierte Fallkonzeption und Erkennung von Täterstrategien im Helfersystem.',
    psychologicalBackground: 'Trauma-Informed Care Prinzipien: Sicherheit, Vertrauenswürdigkeit, Wahlmöglichkeit, Zusammenarbeit, Empowerment.',
    victimExperience: 'Es ist eine unendliche Erleichterung, an eine Beraterin zu geraten, die nickt, Gaslighting versteht und einen nicht mit „Da gehören immer zwei dazu“ abfertigt.',
    warningSigns: [
      'Fachkraft empfiehlt Paartherapie bei aktivem narzisstischen Missbrauch (Kontraindiziert!)',
      'Bagatellisierung: „Er meint es doch nicht so böse“',
      'Ungeduld gegenüber dem zögerlichen Trennungsverhalten des Opfers'
    ],
    concreteActionSteps: [
      'Niemals Paartherapie bei asymmetrischem emotionalem Missbrauch durchführen',
      'Die Gefühle des Opfers bedingungslos validieren, ohne zu drängen',
      'Dem Opfer die Kontrolle über jeden einzelnen Beratungsschritt überlassen'
    ],
    tags: ['Helfersystem', 'Beratung', 'Trauma-Informed Care', 'Paartherapie-Warnung'],
    readTimeMin: 8
  },
  {
    id: 't4-c5',
    part: 4,
    partTitle: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    partSubtitle: 'Konkrete Werkzeuge, Schutzstrategien und Haltung',
    chapterNumber: 5,
    title: 'Typische Helferfehler – Bagatellisierung, Retterrolle und Mitverstrickung',
    subtitle: 'Wie gut gemeinte Hilfe Betroffene entwerten oder Täterdynamiken fortsetzen kann.',
    summary: 'Gut gemeint ist oft das Gegenteil von gut gemacht. Helfer tappen häufig in drei Fallen: 1. Die Retterfalle (dem Opfer Entscheidungen abnehmen und es erneut entmündigen), 2. Bagatellisierung („Streiten tun alle mal“), 3. Täter-Kollusion („Er wirkt doch so nett“).',
    coreMechanism: 'Unbewusste Inszenierung des Drama-Dreiecks innerhalb professioneller Hilfestrukturen.',
    psychologicalBackground: 'Sekundäre Traumatisierung und Gegenübertragungsphänomene im Hilfesystem.',
    victimExperience: 'Man fühlt sich vom Helfer bevormundet und spürt denselben Kontrollverlust wie in der toxischen Partnerschaft.',
    warningSigns: [
      'Helfer drängt auf sofortige Trennung und wird ungehalten, wenn das Opfer zögert',
      'Helfer übernimmt Behördengänge komplett, statt das Opfer zu befähigen',
      'Übertragungsfalle: Helfer bekämpft den Täter stellvertretend für eigene unverarbeitete Konflikte'
    ],
    concreteActionSteps: [
      'Regelmäßige Supervision und Selbstreflexion für Fachkräfte',
      'Haltung: Begleitung auf Augenhöhe, nicht Retter von oben herab',
      'Das Tempo des Betroffenen respektieren'
    ],
    tags: ['Helferfehler', 'Retterrolle', 'Gegenübertragung', 'Supervision'],
    readTimeMin: 7
  },
  {
    id: 't4-c6',
    part: 4,
    partTitle: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    partSubtitle: 'Konkrete Werkzeuge, Schutzstrategien und Haltung',
    chapterNumber: 6,
    title: 'Arbeit mit Scham, Selbstwert und innerem Kritiker – Erste therapeutische Zugänge',
    subtitle: 'Praxisnahe Ansätze zur Entlastung nach psychischer Gewalt.',
    summary: 'Heilung beginnt nicht im Kopf, sondern im mitfühlenden Kontakt mit den verletzten und beschämten Anteilen. Durch Ego-State-Arbeit, Selbstmitgefühl und Externalisierung des inneren Kritikers wird der Weg für echten Selbstwert geebnet.',
    coreMechanism: 'Transformation pathologischer Selbstkritik in schützende Selbstfürsorge.',
    psychologicalBackground: 'Compassion Focused Therapy (CFT nach Paul Gilbert) und Ego-State-Therapie.',
    victimExperience: 'Zum ersten Mal spürt man kein Ekelgefühl gegen sich selbst, sondern nimmt sich innerlich wie ein verängstigtes Kind in den Arm.',
    warningSigns: [
      'Ständige Entschuldigungen für die eigene Existenz',
      'Unfähigkeit, Komplimente anzunehmen',
      'Chronisches Gefühl der Unzulänglichkeit'
    ],
    concreteActionSteps: [
      'Tägliche Übung der mitfühlenden Hand auf dem Herzraum',
      'Den inneren Kritiker als ehemaligen Schutzmechanismus würdigen und in den Ruhestand schicken',
      'Erfolgsjournal führen: Jeden Tag 3 Dinge notieren, die man gut gemeistert hat'
    ],
    tags: ['Selbstwert', 'Innerer Kritiker', 'CFT', 'Ego-State', 'Selbstmitgefühl'],
    readTimeMin: 8
  },
  {
    id: 't4-c7',
    part: 4,
    partTitle: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    partSubtitle: 'Konkrete Werkzeuge, Schutzstrategien und Haltung',
    chapterNumber: 7,
    title: 'Nach der Trennung stabil bleiben – Umgang mit Rückfällen, Zweifel und Sehnsucht',
    subtitle: 'Für die Zeit, in der der Täter äußerlich weg, innerlich aber noch sehr präsent ist.',
    summary: 'Die Wochen nach der Trennung sind die emotional schwerste Phase. Der biochemische Entzug schlägt mit voller Wucht zu. Rückfälle oder der Impuls, kurz anzurufen, sind menschlich und normal. Entscheidend ist der Umgang damit.',
    coreMechanism: 'Rückfallprophylaxe und Stabilisierung bei dopaminergen Entzugssymptomen.',
    psychologicalBackground: 'Suchtpsychologische Rückfallmodelle (Marlatt & Gordon) angewandt auf Trauma-Bonding.',
    victimExperience: 'Man vermisst nicht die Quälereien, sondern die Illusion. Die Stille in der eigenen Wohnung fühlt sich zunächst bedrohlich an.',
    warningSigns: [
      'Stundenlanges Anschauen alter Urlaubsfotos',
      'Der Drang, „nur noch eine letzte Sache“ mit dem Ex klären zu wollen',
      'Zweifel: „War ich vielleicht doch das Problem?“'
    ],
    concreteActionSteps: [
      'Die „Schwarze Liste“ an den Spiegel kleben: 10 schlimmste Taten des Ex',
      'Die 24-Stunden-Regel: Bei dem Drang zu schreiben, 24 Stunden warten und Vertraute anrufen',
      'Bei einem Rückfall nicht aufgeben: Aufstehen, Staub abklopfen, No Contact neu starten'
    ],
    tags: ['Rückfallschutz', 'Trennung', 'Suchtentzug', 'Sehnsucht'],
    readTimeMin: 8
  },
  {
    id: 't4-c8',
    part: 4,
    partTitle: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    partSubtitle: 'Konkrete Werkzeuge, Schutzstrategien und Haltung',
    chapterNumber: 8,
    title: 'Das Trauma-Gehirn neu verdrahten – Neuroplastizität alltagsnah erklärt',
    subtitle: 'Veränderung als langsamer, biologischer Lernprozess statt Wunderversprechen.',
    summary: 'Trauma hat das Gehirn verändert – aber das Gehirn ist bis ins hohe Alter neuroplastisch formbar! Durch wiederholte sichere Erfahrungen, neue Beziehungsmuster und gezieltes somatisches Training bilden sich neue neuronale Autobahnen der Entspannung.',
    coreMechanism: 'Neuroplastische Re-Konditionierung durch bewusste Fokussierung auf Sicherheitsreize.',
    psychologicalBackground: 'Rick Hansons „Hardwiring Happiness“ (Taking in the Good) und Hebb’sche Plastizität.',
    victimExperience: 'Eines Tages merkt man plötzlich: Der Herzschlag bleibt ruhig, obwohl die Türklingel geht. Man spürt: Das System heilt.',
    warningSigns: [
      'Ungeduld mit sich selbst: „Warum bin ich nach 6 Monaten immer noch nicht heil?“',
      'Glaube, für immer irreparabel beschädigt zu sein',
      'Vermeidung aller neuen sozialen Kontakte aus Angst vor Wiederholung'
    ],
    concreteActionSteps: [
      'Gute Momente 20 bis 30 Sekunden lang intensiv im Körper spüren (Taking in the Good)',
      'Neue Routinen und Sportarten ausprobieren zur Förderung des BDNF (Wachstumsfaktor im Gehirn)',
      'Geduld: Nervenbahnen brauchen Monate der Wiederholung zur Re-Myelinisierung'
    ],
    tags: ['Neuroplastizität', 'Gehirn', 'Heilung', 'Rick Hanson', 'Nervensystem'],
    readTimeMin: 8
  },
  {
    id: 't4-c9',
    part: 4,
    partTitle: 'Teil 4 – Praxisblock für Betroffene und Helfersystem',
    partSubtitle: 'Konkrete Werkzeuge, Schutzstrategien und Haltung',
    chapterNumber: 9,
    title: 'Kernaussagen und Arbeitsblätter – Verdichtung für Betroffene und Fachpersonen',
    subtitle: 'Kurze Merksätze, Reflexionsfragen, Checklisten und Mini-Übungen.',
    summary: 'Die Essenz des gesamten Werkes auf den Punkt gebracht: Warum Sie nicht verrückt sind, warum die Dynamik ein System ist, und welche fünf goldenen Regeln Ihr Leben dauerhaft schützen.',
    coreMechanism: 'Kognitive Konsolidierung und Handlungsbefähigung durch strukturierte Zusammenfassung.',
    psychologicalBackground: 'Psychoedukative Merkblätter zur Steigerung der Selbstwirksamkeit.',
    victimExperience: 'Ein kompaktes Werkzeug an der Hand zu haben, das man in der Tasche tragen und in Krisenmomenten hervorholen kann.',
    warningSigns: [
      'Gefühl von Wissensüberflutung ohne praktische Umsetzbarkeit',
      'Rückfall in Verwirrung bei akuten Manipulationsangriffen'
    ],
    concreteActionSteps: [
      'Die 5 Leitsätze ausdrucken oder als Screenshot auf dem Smartphone speichern',
      'Das integrierte Grenzen-Arbeitsblatt ausfüllen',
      'Die Wissensdatenbank jederzeit als Nachschlagewerk nutzen'
    ],
    tags: ['Arbeitsblätter', 'Merksätze', 'Zusammenfassung', 'Checklisten'],
    readTimeMin: 6
  }
];
