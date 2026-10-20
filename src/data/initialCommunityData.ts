import { CommunityPost } from '../utils/psychoLogic.ts';

export const INITIAL_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    category: 'Trauma-Bindung',
    title: 'Der Tag, an dem ich verstand, dass es eine biochemische Sucht ist',
    content: 'Ich habe mich jahrelang dafür verachtet, warum ich nach jeder Demütigung wieder zurückgekrochen bin. Außenstehende sagten nur: „Trenn dich doch einfach!“. Erst als ich hier das Kapitel über intermittierende Verstärkung und Trauma-Bonding las, fiel es mir wie Schuppen von den Augen: Mein Belohnungszentrum im Gehirn war buchstäblich auf die Versöhnungshochs konditioniert. Ich bin heute an Tag 42 von No Contact. Der Entzugsschmerz im Körper ist real, aber die Klarheit im Kopf kommt langsam zurück.',
    authorPseudonym: 'Freier Horizont #318',
    avatarSeed: 'horizon',
    createdAt: 'Vor 3 Tagen',
    triggerWarning: 'Erwähnung von emotionaler Entwertung & Entzugserscheinungen',
    reactions: {
      understand: 24,
      notAlone: 38,
      strength: 45,
      insightful: 19
    },
    tags: ['Trauma-Bonding', 'No Contact', 'Suchtentzug', 'Erkenntnis'],
    replies: [
      {
        id: 'rep-1-1',
        authorPseudonym: 'Stiller Beobachter #612',
        avatarSeed: 'watcher',
        content: 'Tag 42 ist eine riesige Leistung! Sei stolz auf jeden einzelnen Tag. Die ersten 60 Tage waren bei mir die schwersten, danach wurde das Gedankenkreisen messbar leiser.',
        createdAt: 'Vor 2 Tagen',
        empathyCount: 14
      },
      {
        id: 'rep-1-2',
        authorPseudonym: 'Mutiger Phönix #891',
        avatarSeed: 'phoenix',
        content: 'Genau dieser Begriff „biochemische Sucht“ hat mir damals meine Selbstachtung zurückgegeben. Man ist nicht dumm oder schwach – das Gehirn wurde manipuliert.',
        createdAt: 'Gestern',
        empathyCount: 11
      }
    ]
  },
  {
    id: 'post-2',
    category: 'Täterdynamiken',
    title: 'Verdeckter Narzissmus: Nach außen der Heilige, zuhause die Eiskammer',
    content: 'Mein Ex-Partner engagierte sich ehrenamtlich, half Nachbarn beim Einkaufen und galt im ganzen Freundeskreis als der verständnisvollste Mensch der Welt. Sobald die Haustür ins Schloss fiel, begann das Silent Treatment. Wochenlang. Wenn ich fragte, was los sei: „Nichts. Du bildest dir wieder Probleme ein.“ Ich dachte wirklich, ich verliere den Verstand. Wenn ihr das auch erlebt: Glaubt eurer Intuition. Das Außenbild ist die Schutzmauer des Täters.',
    authorPseudonym: 'Wachsamer Baum #504',
    avatarSeed: 'tree',
    createdAt: 'Vor 5 Tagen',
    reactions: {
      understand: 52,
      notAlone: 61,
      strength: 29,
      insightful: 34
    },
    tags: ['Verdeckter Narzissmus', 'Silent Treatment', 'Doppelleben', 'Gaslighting'],
    replies: [
      {
        id: 'rep-2-1',
        authorPseudonym: 'Suchende Seele #441',
        avatarSeed: 'soul',
        content: 'Dieses Kapitel 2 aus Teil 1 („Kommunaler Narzisst“) hat mich buchstäblich gerettet. Niemand hat mir geglaubt, bis ich die Fachbegriffe hatte. Danke fürs Teilen!',
        createdAt: 'Vor 4 Tagen',
        empathyCount: 18
      }
    ]
  },
  {
    id: 'post-3',
    category: 'Körper & Nervensystem',
    title: 'Wie mein Körper „Nein“ schrie, bevor mein Kopf es wahrhaben wollte',
    content: 'Zwei Jahre lang chronische Magenschmerzen, Haarausfall und Schlaflosigkeit zwischen 3 und 4 Uhr morgens. Fünf Ärzte konnten nichts finden. Heute weiß ich: Mein sympathisches Nervensystem stand 24/7 unter Strom, weil ich auf Eierschalen lief. Seit dem Auszug vor einem halben Jahr haben sich meine Blutwerte und mein Magen beruhigt. Hört auf euren Körper, er lügt nie!',
    authorPseudonym: 'Lichtblick #712',
    avatarSeed: 'light',
    createdAt: 'Vor 1 Woche',
    reactions: {
      understand: 41,
      notAlone: 49,
      strength: 33,
      insightful: 27
    },
    tags: ['Somatik', 'Polyvagal', 'Schlafstörungen', 'Körpergedächtnis'],
    replies: [
      {
        id: 'rep-3-1',
        authorPseudonym: 'Sanfter Fluss #195',
        avatarSeed: 'river',
        content: 'Das Aufwachen mit Herzrasen zwischen 3 und 4 Uhr – genau das hatte ich auch! Der Cortisol-Peak. Es tut so gut zu lesen, dass sich dein Körper erholt hat.',
        createdAt: 'Vor 5 Tagen',
        empathyCount: 16
      }
    ]
  },
  {
    id: 'post-4',
    category: 'Helfersystem & Familie',
    title: 'Wenn die eigene Familie den Täter in Schutz nimmt (Defendersyndrom)',
    content: 'Als ich meiner Mutter von den Demütigungen erzählte, sagte sie: „Er verdient doch gutes Geld und schlägt dich nicht. Mach kein Drama.“ Dieser Verrat hat tiefer wehgetan als manche Attacke meines Ex-Mannes. Das Kapitel über das Defendersyndrom hat mir geholfen zu verstehen, dass meine Familie ihr bequemes Weltbild verteidigen wollte. Ich habe den Kontakt zu beiden Seiten minimiert.',
    authorPseudonym: 'Klarer Geist #823',
    avatarSeed: 'mind',
    createdAt: 'Vor 2 Tagen',
    triggerWarning: 'Fehlende familiäre Unterstützung & sekundäre Viktimisierung',
    reactions: {
      understand: 36,
      notAlone: 42,
      strength: 51,
      insightful: 22
    },
    tags: ['Defendersyndrom', 'Familienkonflikt', 'Loyalität', 'Abgrenzung'],
    replies: []
  }
];
