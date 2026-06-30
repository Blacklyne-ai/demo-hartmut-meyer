# Judgement Calls & Operator-TODOs — Physiotherapie & Osteopathie Hartmut Meyer

Redesign der WordPress-Bestandsseite (physio-hartmut-meyer.de) zu einer ruhigen,
modernen Astro-5-Site. Schwerpunkt: **Employer Branding / Recruiting**, gefolgt von
Patientenvertrauen. Alle Inhalte verbatim aus dem Scrape (siehe
`docs/CONTENT-VERBATIM.md`). Nichts erfunden.

## ★ Operator-TODOs (vom Inhaber zu liefern)

1. **Konkrete offene Stellen (wichtigster Punkt).** Die Karriere-Seite enthält
   aktuell EINE ehrliche Platzhalter-Stelle („Physiotherapeut:in (m/w/d)") mit
   echten Aufgaben/Profil aus dem belegten Praxis-Spektrum. Umfang, Eintritts-
   termin, Gehalt sind bewusst offen gelassen („individuell, auf Anfrage"). Bitte
   liefern: welche Rollen genau (Physio? Osteopath:in? Rezeption?), Voll-/Teilzeit,
   Stunden, Aufgaben, Benefits, ggf. Gehaltsrahmen. → in `src/data/content.ts`
   (`karriere.jobs`) ergänzen. NICHTS wurde erfunden.
2. **WhatsApp-Nummer.** Die Altseite bewarb „über WhatsApp Kontakt aufnehmen",
   nannte aber keine Nummer (Festnetz 089 ist nicht WhatsApp-fähig). Daher aktuell
   nur Telefon + E-Mail als Kontaktwege. Falls eine WhatsApp-(Mobil-)Nummer
   existiert, nachreichen → als Tile in `/kontakt` + Bewerbung ergänzen.
3. **Echte Google-Reviews.** Die 4,9 ist über die Place-ID
   (`ChIJiX9xZC12nkcRh7WUVfKk7xk`) verifiziert und wird als Badge gezeigt + auf
   Google verlinkt. Konkrete Review-Texte und die Bewertungsanzahl liegen nicht
   belegt vor → NICHT erfunden. Bei Bedarf echte Zitate/Anzahl nachreichen (dann
   auch `aggregateRating` im Schema mit `ratingCount` aktivierbar).
4. **Team-Fotos / Personalstand.** Alle 12 Teammitglieder sind mit echten Namen,
   Rollen und Fotos aus der Bestandsseite übernommen. Falls jemand kein Foto
   online haben möchte oder Personal gewechselt hat → in `src/data/site.ts`
   (`team`) anpassen.
5. **Rechtsform / Impressum.** Übernommen verbatim: Steuernr. 145/209/00374,
   vertreten durch Hartmut Meyer, Fax 089/178 14 76. Bitte prüfen, ob eine
   berufsrechtliche Angabe (zuständige Aufsicht) ergänzt werden soll.
6. **Kassen / Privat.** Auf der Altseite nicht eindeutig belegt → bewusst NICHT
   behauptet. Falls relevant (z. B. „alle Kassen & privat"), nachreichen.
7. **OG-Bild / Favicon.** Generiert aus Logo-Farbe (#00BAFF) + Markenmotiv
   Morphofalter. Bei Wunsch durch ein echtes Praxisfoto ersetzbar.

## Bewusste Design-/Content-Entscheidungen

- **Recruiting weit oben:** Recruiting-Bar im Header, „Im Team Meyer arbeiten"-CTA
  bereits im Hero, eigene Dark-Sektion als zweiter Abschnitt der Startseite, eigene
  `/karriere`-Seite mit wiederverwendbarer `JobCard`-Komponente.
- **„Wir bieten"-Benefits sind belegt** — sie stehen wörtlich auf der Altseite
  (Gleitzeit, abwechslungsreiche Arbeitstage, immer besetzte Anmeldung, großes
  gemischtes Team, geförderte Fortbildungen, gutes Gehalt). Daher verwendet.
- **Original-Tippfehler still korrigiert:** „Phsyiotherapie", „Lmphyflüssigkeit",
  „Ultraschwellen", „Thearapieformen", „Bobath-Therapeuth", „ganzjähriges".
- **Defekte Kontaktseite ersetzt:** Im Original lieferte `/kontakt` einen 404 und
  es gab keine Anfahrt. Neu gebaut mit Karte, Sprechzeiten, Kontaktwegen.
- **Therapie-Fachtexte** verbatim, aber HWG-konform belassen (keine Heil-
  versprechen, keine Wirksamkeitsgarantien).
- **Keine Kontaktformulare mit Backend** (statische Site): Bewerbung & Termin per
  `mailto`/Telefon. DSGVO-Hinweis bei Bewerbung, kein Tracking.
- **Google Maps DSGVO-konform** erst nach Einwilligung geladen (Platzhalter +
  „Karte laden", Consent geteilt mit Cookie-Banner).

## Marke / Technik

- Logo 1:1 (`/public/logo.png`), nie redesignt. Auf Dunkel auf hellem Chip.
- Farben pixel-extrahiert: Azur #00BAFF, Petrol-Navy #004866 → `tailwind.config.mjs`
  / `src/styles/global.css` (`:root`). Markenmotiv Morphofalter sparsam.
- Schrift: Fraunces (Display) + Work Sans (Body), self-hosted, CLS-sicher.
- Astro 5 STATIC, Tailwind v3.4, @lucide/astro (Instagram als inline SVG, da
  Lucide keine Brand-Icons hat), DSGVO-Banner, /dist HTML, Cloudflare Pages.
