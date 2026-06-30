// ─────────────────────────────────────────────────────────────
// Physiotherapie & Osteopathie Hartmut Meyer - zentrale Site-Konfiguration.
// Kontaktdaten, Sprechzeiten, Team, Impressum verbatim aus dem Scrape der
// Bestandsseite (physio-hartmut-meyer.de). Nichts erfunden. Deutsch, Sie-Form.
// Hartmut Meyer als Anker, Leitung seit 2025 Dario Meyer. Offene Punkte:
// JUDGEMENT_CALLS.md.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Physiotherapie & Osteopathie Hartmut Meyer',
  shortName: 'Physio Hartmut Meyer',
  owner: 'Hartmut Meyer',
  ownerRole: 'Physiotherapeut · Osteopathie · Gründer',
  leadName: 'Dario Meyer',
  leadRole: 'Praxisleitung seit 2025',
  legalName: 'Physiotherapie & Osteopathie Hartmut Meyer',
  claim: 'Ihre leistungsstarke Therapie in Nymphenburg', // verbatim Altseite
  tagline: 'Physiotherapie, Osteopathie und Training in München-Nymphenburg',
  description:
    'Physiotherapie, Osteopathie, ganzheitliche Therapie und Krankengymnastik am Gerät (KGG) in München-Nymphenburg. Persönlich geführte Praxis von Hartmut Meyer, seit 1990 in der Wotanstraße. Termine nach Vereinbarung.',
  url: 'https://demo-hartmut-meyer.pages.dev',

  email: 'info@physio-hartmut-meyer.de',

  phoneDisplay: '089 / 178 27 73',
  phoneIntl: '+49891782773',
  faxDisplay: '089 / 178 14 76',

  // Adresse (verbatim) - München-Nymphenburg
  street: 'Wotanstraße 37-39',
  postcode: '80639',
  city: 'München',
  district: 'Nymphenburg',

  instagram: 'https://www.instagram.com/physiotherapie_hartmut_meyer',
  instagramHandle: '@physiotherapie_hartmut_meyer',

  // Google (Place-ID aus Altseite verifiziert) - 4,9
  googleRating: '4,9',
  googlePlaceId: 'ChIJiX9xZC12nkcRh7WUVfKk7xk',

  mapsEmbed:
    'https://www.google.com/maps?q=Wotanstra%C3%9Fe+37-39,+80639+M%C3%BCnchen&z=16&output=embed',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Physiotherapie+Hartmut+Meyer+Wotanstra%C3%9Fe+37-39+80639+M%C3%BCnchen&query_place_id=ChIJiX9xZC12nkcRh7WUVfKk7xk',
  reviewsUrl:
    'https://search.google.com/local/reviews?placeid=ChIJiX9xZC12nkcRh7WUVfKk7xk',
};

// ── Sprechzeiten (verbatim) ──────────────────────────────────
export interface Opening { day: string; hours: string }
export const openings: Opening[] = [
  { day: 'Montag - Donnerstag', hours: '08:00 - 19:00 Uhr' },
  { day: 'Freitag', hours: '08:00 - 13:00 Uhr & nach Absprache' },
];
// Maschinenlesbar für den Live-„geöffnet"-Status (0=So … 6=Sa)
// Mo-Do 8-19, Fr 8-13
export const openingRanges: Record<number, [number, number][]> = {
  1: [[480, 1140]],
  2: [[480, 1140]],
  3: [[480, 1140]],
  4: [[480, 1140]],
  5: [[480, 780]],
};

// ── Eckpunkte (verbatim Fakten) ──────────────────────────────
export const facts = {
  since: 'seit 1990',
  rating: '4,9',
  treatTime: '25-30 Minuten Behandlungszeit',
  spectrum: 'Physio · Osteopathie · KGG',
};

// ── Team (verbatim aus /team - Namen + Rollen) ──────────────
// Reihenfolge & Qualifikationen 1:1 aus der Bestandsseite. Wo kein Foto
// belegt ist, bleibt photo leer (kein Erfinden) - siehe JUDGEMENT_CALLS.md.
export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  quals?: string[];
  lead?: boolean;
}
export const team: TeamMember[] = [
  {
    name: 'Hartmut',
    role: 'Physiotherapeut · Osteopathie · Gründer',
    photo: '/images/team-hartmut.jpg',
    quals: ['Manualtherapeut', 'PNF-Therapeut', 'Osteopathie', 'CMD-Therapeut'],
  },
  {
    name: 'Dario',
    role: 'Praxisleitung · Physiotherapeut',
    photo: '/images/team-dario.jpg',
    lead: true,
    quals: ['Manualtherapeut', 'Bobath-Therapeut', 'Masseur', 'Personal Trainer', 'Trainer für KG-Gerät', 'CMD-Therapeut'],
  },
  {
    name: 'Léa',
    role: 'Physiotherapeutin',
    photo: '/images/team-lea.jpg',
    quals: ['Manualtherapeutin', 'Lymphtherapeutin', 'Bobath-Therapeutin', 'Trainerin für KG-Gerät', 'CMD-Therapeutin'],
  },
  {
    name: 'Alexandra',
    role: 'Physiotherapeutin',
    photo: '/images/team-alexandra.jpg',
    quals: ['Lymphtherapeutin', 'Manualtherapeutin', 'Bobath-Therapeutin', 'CMD-Therapeutin'],
  },
  {
    name: 'Astrid',
    role: 'Physiotherapeutin & Osteopathin',
    photo: '/images/team-astrid.jpg',
    quals: ['Osteopathin', 'Trainerin für KG-Gerät'],
  },
  {
    name: 'Dennis',
    role: 'Physiotherapeut',
    photo: '/images/team-dennis.jpg',
  },
  {
    name: 'Alexander',
    role: 'Physiotherapeut',
    photo: '/images/team-alexander.jpg',
    quals: ['Lymphtherapeut', 'Masseur', 'CMD-Therapeut', 'Manualtherapeut', 'Bobath-Therapeut'],
  },
  {
    name: 'Regina',
    role: 'Anmeldung & Verwaltung',
    photo: '/images/team-regina.jpg',
    quals: ['Termine', 'Auskunft'],
  },
  {
    name: 'Steffi',
    role: 'Anmeldung & Verwaltung',
    photo: '/images/team-steffi.jpg',
    quals: ['Termine', 'Auskunft'],
  },
  {
    name: 'Nicole',
    role: 'Anmeldung & Verwaltung',
    photo: '/images/team-nicole.jpg',
    quals: ['Termine', 'Auskunft'],
  },
  {
    name: 'Angelika',
    role: 'Anmeldung & Verwaltung',
    photo: '/images/team-angelika.jpg',
    quals: ['Termine', 'Auskunft'],
  },
  {
    name: 'Christine',
    role: 'Anmeldung & Verwaltung',
    photo: '/images/team-christine.jpg',
    quals: ['Termine', 'Auskunft'],
  },
];

// ── Impressum (verbatim Scrape) ──────────────────────────────
export const legal = {
  name: 'Physiotherapie & Osteopathie Hartmut Meyer',
  represent: 'Hartmut Meyer',
  profession: 'Physiotherapeut',
  street: 'Wotanstraße 37/39',
  postcode: '80639',
  city: 'München',
  phone: '089 / 178 27 73',
  fax: '089 / 178 14 76',
  email: 'info@physio-hartmut-meyer.de',
  taxNo: '145/209/00374',
};

// ── Link-Helper ──────────────────────────────────────────────
export const telLink = `tel:${site.phoneIntl}`;
export const mailLink = `mailto:${site.email}`;
export function mailFor(subject: string, body?: string) {
  const q = new URLSearchParams({ subject });
  if (body) q.set('body', body);
  return `mailto:${site.email}?${q.toString()}`;
}
export const careerMail = mailFor('Bewerbung - Physiotherapie Hartmut Meyer');
export const initiativMail = mailFor('Initiativbewerbung - Physiotherapie Hartmut Meyer');
export const termineMail = mailFor('Terminanfrage');

// ── Navigation (Karriere prominent) ──────────────────────────
export interface NavChild { href: string; label: string }
export interface NavItem { href: string; label: string; highlight?: boolean; children?: NavChild[] }

export const galerieLinks: NavChild[] = [
  { href: '/galerie-therapieraeume', label: 'Therapieräume' },
  { href: '/galerie-training', label: 'Trainingsbereich' },
];

export const ueberUnsLinks: NavChild[] = [
  { href: '/unsere-praxis', label: 'Die Praxis' },
  { href: '/team', label: 'Das Team' },
];

export const nav: NavItem[] = [
  { href: '/therapie', label: 'Therapie' },
  { href: '/training', label: 'Training' },
  { href: '/unsere-praxis', label: 'Über uns', children: ueberUnsLinks },
  { href: '/galerie-therapieraeume', label: 'Galerie', children: galerieLinks },
  { href: '/karriere', label: 'Karriere', highlight: true },
  { href: '/kontakt', label: 'Kontakt' },
];

export const footerNav = {
  praxis: [
    { href: '/unsere-praxis', label: 'Die Praxis' },
    { href: '/team', label: 'Das Team' },
    { href: '/karriere', label: 'Karriere' },
    { href: '/kontakt', label: 'Termin anfragen' },
  ],
  leistungen: [
    { href: '/therapie', label: 'Therapie & Leistungen' },
    { href: '/training', label: 'Training & KGG' },
    { href: '/galerie-therapieraeume', label: 'Galerie Räume' },
    { href: '/galerie-training', label: 'Galerie Training' },
  ],
};

export const legalNav = [
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/impressum', label: 'Impressum' },
];
