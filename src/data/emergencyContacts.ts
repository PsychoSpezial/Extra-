export interface EmergencyContact {
  id: string;
  name: string;
  country: 'DE' | 'AT' | 'CH' | 'DACH';
  phone: string;
  phoneDisplay: string;
  available: string;
  targetGroup: string;
  freeOfCharge: boolean;
  anonymous: boolean;
  chatUrl?: string;
  description: string;
}

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'de-frauen',
    name: 'Hilfetelefon „Gewalt gegen Frauen“',
    country: 'DE',
    phone: '116016',
    phoneDisplay: '116 016',
    available: '24/7 rund um die Uhr',
    targetGroup: 'Frauen in Gewaltsituationen & Angehörige',
    freeOfCharge: true,
    anonymous: true,
    chatUrl: 'https://www.hilfetelefon.de',
    description: 'Kostenlose und anonyme Beratung in 18 Sprachen. Bei häuslicher Gewalt, Stalking und psychischem Missbrauch.'
  },
  {
    id: 'de-seelsorge',
    name: 'TelefonSeelsorge Deutschland',
    country: 'DE',
    phone: '08001110111',
    phoneDisplay: '0800 111 0 111 / 0800 111 0 222',
    available: '24/7 rund um die Uhr',
    targetGroup: 'Alle Menschen in seelischen Krisen',
    freeOfCharge: true,
    anonymous: true,
    chatUrl: 'https://online.telefonseelsorge.de',
    description: 'Anonyme, kompetente Begleitung bei Ängsten, Überforderung, Beziehungsdramen und akuten Verzweiflungszuständen.'
  },
  {
    id: 'de-maenner',
    name: 'Hilfetelefon „Gewalt an Männern“',
    country: 'DE',
    phone: '08001239900',
    phoneDisplay: '0800 123 99 00',
    available: 'Mo-Do 8-20 Uhr, Fr 8-15 Uhr',
    targetGroup: 'Männer als Betroffene von Gewalt',
    freeOfCharge: true,
    anonymous: true,
    chatUrl: 'https://www.maennerhilfetelefon.de',
    description: 'Fachberatung für männliche Opfer von psychischer, physischer und sexualisierter Gewalt in Partnerschaften.'
  },
  {
    id: 'de-krisenchat',
    name: 'krisenchat (für junge Menschen bis 25)',
    country: 'DACH',
    phone: '',
    phoneDisplay: 'Chat via WhatsApp / SMS',
    available: '24/7 rund um die Uhr',
    targetGroup: 'Kinder, Jugendliche und junge Erwachsene bis 25',
    freeOfCharge: true,
    anonymous: true,
    chatUrl: 'https://krisenchat.de',
    description: 'Niedrigschwellige psychosoziale Soforthilfe im Chat durch geschulte Fachkräfte in Krisensituationen.'
  },
  {
    id: 'at-seelsorge',
    name: 'Telefonseelsorge Österreich',
    country: 'AT',
    phone: '142',
    phoneDisplay: '142',
    available: '24/7 rund um die Uhr',
    targetGroup: 'Alle Personen in akuten Krisen',
    freeOfCharge: true,
    anonymous: true,
    chatUrl: 'https://www.telefonseelsorge.at',
    description: 'Kostenlose Notrufnummer bei psychischen Belastungen, Notlagen und Beziehungsabbrüchen in Österreich.'
  },
  {
    id: 'at-frauen',
    name: 'Frauenhelpline gegen Gewalt (Österreich)',
    country: 'AT',
    phone: '0800222555',
    phoneDisplay: '0800 222 555',
    available: '24/7 rund um die Uhr',
    targetGroup: 'Frauen & Mädchen',
    freeOfCharge: true,
    anonymous: true,
    chatUrl: 'https://www.frauenhelpline.at',
    description: 'Erstberatung bei allen Formen von Gewalt, Bedrohung, Nachstellung und Zwangskontrolle.'
  },
  {
    id: 'ch-dargeboten',
    name: 'Die Dargebotene Hand (Schweiz)',
    country: 'CH',
    phone: '143',
    phoneDisplay: '143',
    available: '24/7 rund um die Uhr',
    targetGroup: 'Alle Personen in der Schweiz',
    freeOfCharge: true,
    anonymous: true,
    chatUrl: 'https://www.143.ch',
    description: 'Das Schweizer Sorgentelefon für Menschen, die ein helfendes und vorurteilsfreies Gespräch brauchen.'
  },
  {
    id: 'dach-notruf',
    name: 'Polizei Notruf (Akute Lebensgefahr)',
    country: 'DACH',
    phone: '110',
    phoneDisplay: '110 (DE) / 133 (AT) / 117 (CH) / 112 (EU)',
    available: '24/7 Notfall',
    targetGroup: 'Akute Bedrohung & tätliche Angriffe',
    freeOfCharge: true,
    anonymous: false,
    description: 'Wenn Täter drohen, gewalttätig werden, die Wohnung belagern oder Waffen im Spiel sind: Sofort den Notruf wählen!'
  }
];
