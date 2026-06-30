// ─────────────────────────────────────────────────────────────
// Physiotherapie & Osteopathie Hartmut Meyer - Inhalts-Daten.
//
// VERBATIM erhalten: Hero-Claim, Therapie-/Trainings-/Praxis-Texte, alle
// Recruiting-Argumente („Wir bieten …") - diese stehen 1:1 auf der Altseite und
// sind damit belegt, nicht erfunden. Original-Tippfehler still korrigiert
// (Phsyiotherapie, Lmphyflüssigkeit, Ultraschwellen, Thearapieformen …).
//
// HWG-konform: keine Heilversprechen, keine Wirksamkeitsgarantien. Konkrete
// Stellentitel/Gehälter/Umfang = Operator-TODO (JUDGEMENT_CALLS.md).
// ─────────────────────────────────────────────────────────────

// ── Willkommen (verbatim Claim + belegte Praxis-Fakten) ──────
export const willkommen = {
  greeting: 'Herzlich willkommen',
  claim: 'Ihre leistungsstarke Therapie in Nymphenburg.',
  paras: [
    'Seit 1990 sind wir in der Wotanstraße zu Hause - eine persönlich geführte Praxis für Physiotherapie und Osteopathie mitten in München-Nymphenburg. Gegründet von Hartmut Meyer, seit 2025 geleitet von Dario Meyer.',
    'Wir nehmen uns Zeit: mindestens 25 bis 30 Minuten pro Behandlung. Jede Therapie ist auf Ihre Verordnung und Ihr Ziel abgestimmt - vom ersten Befund bis zum Training am Gerät.',
  ],
  sub: 'Ein großes, gemischtes Team aus ganz Europa und darüber hinaus. Mitglied im Berufsverband ZVK e.V. Bayern.',
};

// ── Praxis / Über uns (verbatim Kernaussagen) ────────────────
export const praxis = {
  lead: 'Eröffnet im Oktober 1990 von Physiotherapeut Hartmut Meyer - bis heute persönlich geführt und stetig weitergewachsen.',
  paras: [
    'Hartmut Meyer begann 1982 seine Ausbildung zum Physiotherapeuten an der RWTH Aachen und schloss sie 1984 mit dem Examen ab. Es folgten Stationen in Bad Ragaz (PNF), Enzensberg (Manualtherapie nach Kaltenborn), Bremen (Cyriax) und Gent in Belgien, wo das osteopathische Fachwissen vertieft wurde. Dazu Kurse in Atlastherapie, CMD und Nervenmobilisation.',
    'In den Jahren 2021 und 2022 wurde die Praxis größtenteils in Eigenregie renoviert und neu ausgestattet. Seit Herbst 2022 behandeln wir auch am Gerät (KG-Gerät) - mit Geräten von Gym80 und Technogym.',
    'Im Jahr 2025 übernahm Dario Meyer die Leitung der Praxis. Geplant sind der Einstieg in die Sportphysiotherapie und die weitere Anstellung von Personal.',
  ],
  closing: 'Wir freuen uns auf Sie.',
  facts: [
    { k: 'Seit', v: '1990 in der Wotanstraße' },
    { k: 'Behandlungszeit', v: 'mindestens 25-30 Minuten' },
    { k: 'Team', v: 'aus ganz Europa & darüber hinaus' },
    { k: 'Verband', v: 'ZVK e.V. Bayern' },
  ],
};

// ── Kern-Säulen (Startseite - 4 ruhige, symmetrische Karten) ──
export interface Pillar { name: string; icon: string; desc: string; href: string }
export const pillars: Pillar[] = [
  {
    name: 'Physiotherapie',
    icon: 'Activity',
    desc: 'Krankengymnastik, Manuelle Therapie, Lymphdrainage und mehr - abgestimmt auf Ihre ärztliche Verordnung.',
    href: '/therapie',
  },
  {
    name: 'Osteopathie',
    icon: 'Hand',
    desc: 'Feine manuelle Techniken, in Gent/Belgien vertieft - der Körper als zusammenhängendes Ganzes.',
    href: '/therapie',
  },
  {
    name: 'Ganzheitliche Therapie',
    icon: 'Leaf',
    desc: 'Wir nehmen uns Zeit und betrachten Beschwerden im Zusammenhang - nicht nur das einzelne Symptom.',
    href: '/therapie',
  },
  {
    name: 'Krankengymnastik am Gerät',
    icon: 'Dumbbell',
    desc: 'Neu: gezielter Aufbau an Gym80- und Technogym-Geräten, unter ständiger therapeutischer Aufsicht.',
    href: '/training',
  },
];

// ── Therapie-Modalitäten (verbatim /therapie, Tippfehler korrigiert) ──
export interface Modality { abbr: string; name: string; icon: string; desc: string }
export const therapieIntro =
  'Wir haben für Sie die passende Therapie, die spezialisierten Therapeuten und den idealen Ort in München-Nymphenburg. Was wir anbieten:';
export const modalities: Modality[] = [
  {
    abbr: 'KG', name: 'Krankengymnastik', icon: 'Activity',
    desc: 'Die eigentliche Tätigkeit eines Physiotherapeuten: erkrankten oder verletzten Menschen mit Eigenübungen und speziellen Griffen zurück zu ihrer ursprünglichen Ausgangssituation verhelfen.',
  },
  {
    abbr: 'MT', name: 'Manuelle Therapie', icon: 'Hand',
    desc: 'Zwei Gelenkpartner werden schonend bewegt, um ein Bewegungsdefizit aufzuheben - durch Fixation des einen und Mobilisation des anderen Knochens. Setzt eine abgeschlossene Ausbildung voraus.',
  },
  {
    abbr: 'KGG', name: 'Krankengymnastik am Gerät', icon: 'Dumbbell',
    desc: 'Ärztlich verordnete Anwendung ausschließlich am Gerät - etwa Beinpresse oder Seilzüge - unter ständiger Aufsicht. Gezielt gegen Muskelschwächen und Stabilisierungsprobleme. Ganzjährig für Regeneration, Kondition, Propriozeption und Koordination.',
  },
  {
    abbr: 'MLD', name: 'Manuelle Lymphdrainage', icon: 'Droplets',
    desc: 'Sanfte, oberflächliche, abschwellende Griffe. Sie umgehen einen Stau im Lymphsystem und schieben die Flüssigkeit in Richtung des Hauptlymphstamms. Erfordert eine anerkannte Ausbildung.',
  },
  {
    abbr: 'CMD', name: 'Cranio-Mandibuläre Dysfunktion', icon: 'Smile',
    desc: 'Bei Kiefergelenksbeschwerden - von Zähnen über Halswirbelsäule bis Kopf. Meist vom Zahnarzt verordnet. Mit Techniken und gezielten Eigenübungen lindern wir die Beschwerden.',
  },
  {
    abbr: 'KG-ZNS', name: 'Krankengymnastik des ZNS', icon: 'Brain',
    desc: 'Therapie bei neurologischen Erkrankungen wie Schlaganfall, MS oder Parkinson - nach Bobath, Vojta oder PNF. Jeweils mit anerkannter beruflicher Ausbildung.',
  },
  {
    abbr: '', name: 'Massagen', icon: 'HandHeart',
    desc: 'Zur Entspannung nach dem Alltag oder zur Leistungssteigerung im Sport (Vor- und Nachwettkampf). Durchgeführt von zertifizierten Masseuren, med. Bademeistern und Physiotherapeut:innen.',
  },
  {
    abbr: 'US', name: 'Ultraschalltherapie', icon: 'Radio',
    desc: 'Sanfte Ultraschallwellen werden über einen Schallkopf in den Körper geleitet - abschwellend, schmerzlindernd, tonussenkend, durchblutungsfördernd und entzündungshemmend.',
  },
  {
    abbr: 'ET', name: 'Elektrotherapie', icon: 'Zap',
    desc: 'Zwei Elektroden auf Gelenk oder Muskel, dazu eine passende Stromform. Je nach Auswahl schmerzlindernd, abschwellend, durchblutungsfördernd oder tonussenkend. Therapiedauer 5-30 Minuten.',
  },
  {
    abbr: '', name: 'Wärmetherapie', icon: 'Flame',
    desc: 'Fango - heilkräftiger Schlamm zur Schmerzlinderung. Rotlicht zur Muskelentspannung. Oft als Vorbereitung für Massage und Krankengymnastik.',
  },
];

// ── Training (verbatim /training) ────────────────────────────
export const training = {
  lead: 'Seit Herbst 2022 trainieren Sie bei uns auch am Gerät - mit Gym80 und Technogym. Dazu zwei der wichtigsten Übungen für eine aufrechte Haltung, die Sie überall mitnehmen können.',
  kgg: 'Krankengymnastik am Gerät (KGG) ist eine ärztlich verordnete Anwendung unter ständiger therapeutischer Aufsicht. Wir nutzen sie ganzjährig, um Gesundheit, Regeneration, Muskelaktivierung, Kondition, Propriozeption und Koordination zu verbessern.',
  exercises: [
    {
      name: 'Rudern im Sitzen',
      desc: 'Becken aufrichten, Bauchspannung, Ellenbogen und Unterarme auf 90 Grad, Brust öffnen, Oberkörper leicht nach vorn neigen (aber gestreckt bleiben), Blick und Kinn leicht nach oben. Zug nach hinten/unten in die Schulterblätter, bis sich eine leichte Hautfalte dazwischen ergibt. Hauptmuskel: M. latissimus dorsi.',
    },
    {
      name: 'Rudern im Liegen',
      desc: 'Brust öffnen, Arme auf Schulterhöhe (ca. 80 Grad Abduktion), Blick Richtung Theraband, Zug nach hinten zwischen die Schulterblätter. Hier kommen die Mm. rhomboidei mehr zum Einsatz - der M. latissimus dorsi wird mit beansprucht.',
    },
  ],
  note: 'Natürlich immer auf das passende Schuhwerk achten.',
};

// ── Galerien ─────────────────────────────────────────────────
export const galerieRaeume = {
  lead: '5 individuelle Therapieräume - für Osteopathie, Krankengymnastik, Manuelle Therapie und vieles mehr. 2021/2022 renoviert und neu ausgestattet.',
  images: [
    { src: '/images/raum-1.jpg', alt: 'Therapieraum mit Behandlungsliege in Nymphenburg' },
    { src: '/images/raum-2.jpg', alt: 'Heller Therapieraum der Praxis' },
    { src: '/images/raum-3.jpg', alt: 'Behandlungsraum mit Therapieausstattung' },
    { src: '/images/raum-4.jpg', alt: 'Individueller Therapieraum' },
    { src: '/images/raum-5.jpg', alt: 'Behandlungsraum für Osteopathie und Manuelle Therapie' },
    { src: '/images/kachel-praxis.jpg', alt: 'Blick in die Praxisräume' },
  ],
};
export const galerieTraining = {
  lead: 'Unser Trainingsbereich mit Geräten von Gym80 und Technogym - Beinpresse, Seilzüge, Sprossenwand, Laufband und Ergometer. Trainingsraum, Übungen, Mitmachen.',
  images: [
    { src: '/images/training-raum.jpg', alt: 'Trainingsraum mit Geräten' },
    { src: '/images/training-beinpresse.jpg', alt: 'Beinpresse, 180 Grad verstellbar' },
    { src: '/images/training-seilzuege.jpg', alt: 'Vertikale Seilzüge im Trainingsbereich' },
    { src: '/images/training-sprossenwand.jpg', alt: 'Sprossenwand für Übungen' },
    { src: '/images/training-laufband.jpg', alt: 'Laufband im Trainingsbereich' },
    { src: '/images/training-ergometer.jpg', alt: 'Fahrrad-Ergometer' },
    { src: '/images/training-baender.jpg', alt: 'Therabänder und Kleingeräte' },
    { src: '/images/training-1.jpg', alt: 'Übungsbereich der Praxis' },
  ],
};

// ── Karriere (verbatim belegte Argumente + Operator-Platzhalter) ──
export interface JobPosting {
  title: string;
  type: string;          // z. B. Voll-/Teilzeit - generisch, Details auf Anfrage
  summary: string;
  tasks: string[];
  profile: string[];
  placeholder?: boolean; // Operator muss Details bestätigen
}

export const karriere = {
  lead: 'Wir suchen ständig Verstärkung für unsere Physiotherapiepraxis, um unser Team zu vergrößern. Wenn Sie gerne mit Menschen arbeiten, sich fachlich weiterentwickeln möchten und ein eingespieltes, internationales Team schätzen, freuen wir uns auf Sie.',

  // „Wir bieten" - verbatim von der Altseite (belegt, nicht erfunden)
  benefits: [
    { icon: 'Clock', title: 'Flexible Arbeitszeiten mit Gleitzeit', desc: 'Arbeitszeiten, die in Ihr Leben passen.' },
    { icon: 'Shuffle', title: 'Abwechslungsreiche Arbeitstage', desc: 'Breites Spektrum von Physio über Osteopathie bis KGG.' },
    { icon: 'BellRing', title: 'Immer besetzte Anmeldung', desc: 'Ein eigenes Team an der Rezeption hält Ihnen den Rücken frei.' },
    { icon: 'Users', title: 'Großes & gemischtes Team', desc: 'Kolleg:innen aus ganz Europa und darüber hinaus.' },
    { icon: 'GraduationCap', title: 'Fortbildungen werden gefördert', desc: 'Manuelle Therapie, Bobath, KGG, CMD und mehr.' },
    { icon: 'HeartHandshake', title: 'Gutes Gehalt - und vieles mehr', desc: 'Ein faires Paket in einer wertschätzenden Praxis.' },
  ],

  // Gründe - ausschließlich belegte Fakten über die Praxis
  reasons: [
    { icon: 'MapPin', title: 'Nymphenburg statt Stadtrand', desc: 'Eine gepflegte Praxis in einem der schönsten Viertel Münchens, seit 1990 fest am Ort.' },
    { icon: 'Sparkles', title: '2021/2022 renoviert', desc: 'Moderne, neu ausgestattete Räume und ein eigener Trainingsbereich (Gym80, Technogym).' },
    { icon: 'Layers', title: 'Fachliche Breite', desc: 'Physiotherapie, Osteopathie, ganzheitliche Therapie und KGG - Raum, sich zu entwickeln.' },
    { icon: 'Timer', title: 'Zeit für Patient:innen', desc: 'Mindestens 25-30 Minuten pro Behandlung - kein Akkord, sondern echte Therapie.' },
    { icon: 'Star', title: '4,9 bei Google', desc: 'Eine sehr gute Reputation, auf die das ganze Team gemeinsam einzahlt.' },
    { icon: 'TrendingUp', title: 'Wir wachsen', desc: '2025 mit neuer Leitung - geplant sind Sportphysiotherapie und weitere Anstellungen.' },
  ],

  // Stellen - ehrliche Platzhalter. Konkrete Rollen/Umfang/Gehalt: Operator-TODO.
  jobs: [
    {
      title: 'Physiotherapeut:in (m/w/d)',
      type: 'Voll- oder Teilzeit · Umfang individuell',
      summary: 'Sie behandeln eigenverantwortlich mit ausreichend Zeit pro Patient:in und nutzen unser breites Spektrum von Manueller Therapie bis KGG.',
      tasks: [
        'Physiotherapeutische Behandlung nach ärztlicher Verordnung',
        'Mindestens 25-30 Minuten Behandlungszeit pro Termin',
        'Mitarbeit im Trainingsbereich (KGG) auf Wunsch',
      ],
      profile: [
        'Abgeschlossene Ausbildung als Physiotherapeut:in',
        'Freude am Umgang mit Menschen und an der Arbeit im Team',
        'Interesse, sich über geförderte Fortbildungen weiterzuentwickeln',
      ],
      placeholder: true,
    },
  ] as JobPosting[],

  apply: {
    note: 'Senden Sie uns einfach ein paar Zeilen per E-Mail oder rufen Sie an - formlos genügt. Unterlagen können Sie später nachreichen.',
    initiativ: 'Auch ohne passende ausgeschriebene Stelle freuen wir uns über Ihre Initiativbewerbung. Schreiben Sie uns, was Sie mitbringen.',
    privacy: 'Ihre Bewerbungsunterlagen behandeln wir vertraulich und verwenden sie ausschließlich für den Bewerbungsprozess. Es findet kein Tracking statt.',
  },
};
