# Style Guide — Physiotherapie & Osteopathie Hartmut Meyer

München-Nymphenburg · 2026-Redesign durch Blacklyne. Schwerpunkt: Employer
Branding / Recruiting + Vertrauen (Patient:innen).

## Logo-Farben (pixel-extrahiert via sharp)
Das Logo: kreisförmige **azurblaue Scheibe (#00BAFF)**, „PHYSIO" weiß, „THERAPIE"
azur, „HARTMUT MEYER" in tiefem Petrol-Navy (**#004866**). Klar, modern, frisch.

| Rang | Hex | Rolle |
|---|---|---|
| 1 | `#00BAFF` | Azur (Markenscheibe) — lebendiger Akzent |
| 2 | `#004866` | Petrol-Navy (Wortmarke) — Anker, Headlines, Buttons |

Markenmotiv: **Blauer Morphofalter** (`schmetterling.png`) — schillerndes
Morpho-Blau + tiefe Aubergine-Kanten (`#300639`). Liefert die edle Tiefe für die
Dark-Sektion (Petrol → Indigo) und einen sparsamen, hochwertigen Bildakzent.
Logo-Pixel-Analyse hat Vorrang vor jedem Branchen-Klischee.

## Farbpalette (Single Source of Truth: `src/styles/global.css` :root, RGB-Triplets)
Charakter: **hell, ruhig, frisch-hochwertig (Nymphenburg-Niveau)**. ~80 % Licht.
Warmes Elfenbein als Fundament, kühler Azur-Dunst für Wechselsektionen (frisch,
klinisch-sauber ohne kalt zu wirken). Dunkel nur bei CtaBand + Footer.

| Element | Hex | Quelle |
|---|---|---|
| Ink (Headlines) | `#08303F` | Logo-Petrol vertieft |
| Body / Muted | `#4A5C63` | kühles Slate, AA auf Paper |
| Paper (BG ~80%) | `#FAF9F6` | warmes Elfenbein |
| Cream (Wechsel) | `#EAF1F3` | Azur-Dunst (frisch) |
| Sand (tiefer) | `#DEEAEC` | tieferer Azur-Dunst |
| Border | `#E4E0D7` | warme Haarlinie |
| Azur (Akzent/Deko) | `#00A6DD` | Logo-Cyan, leicht getönt |
| Azur-Deep (Buttons/Eyebrow) | `#00567A` | Petrol-Azur, AA mit Weiß |
| Azur-Ink (Links) | `#023E59` | AAA |
| Azur-Bright (auf Dunkel) | `#38C6F5` | Logo-Cyan-Pop auf Petrol |
| Aqua (Health-Note, sparsam) | `#2E9C97` | harmoniert mit Azur |
| Dark (CtaBand) | `#062835` | tiefes Petrol-Teal |
| Dark-Deep (Footer) | `#04202B` | Footer-Basis |
| Live-„geöffnet"-Dot | `#3F9D6C` | universelles Grün |

Auf Dunkel: Akzente/`<em>` in Azur-Bright `#38C6F5` — echoet die Markenscheibe.
Morpho-Indigo nur als Verlaufstiefe in der Dark-Sektion, nie als Textfarbe.

## Schrift
Altes WP-Theme: generische System-Sans, kein eigenständiger Charakter.
Wahl Redesign:
- **Display: Fraunces Variable** (self-hosted, opsz+wght, `font-display:optional`
  → CLS ~0). Warme, etablierte Soft-Serif — persönlich + hochwertig, passt zu
  einer inhabergeführten Praxis in Nymphenburg, ohne Klinik-Kälte.
- **Body: Work Sans** (humanistisch, freundlich, exzellente Lesbarkeit).
Akzentwort in Headlines via `<em>` → Fraunces Italic in Azur-Deep.

## VOICE (verbindlich)
Sie-Form, warm, persönlich, kompetent, ruhig. **Hartmut Meyer** als Anker (Praxis
seit 1990, Leitung seit 2025 Dario Meyer). „Ihre leistungsstarke Therapie in
Nymphenburg." Keine Heilversprechen (HWG). Keine Superlative-Hülsen.
Recruiting: **einladend, ehrlich, menschlich** — echte Argumente (Gleitzeit,
geförderte Fortbildungen, großes gemischtes Team, immer besetzte Anmeldung,
moderne Räume + KGG, 4,9 Google), KEIN „Werde Teil unseres Teams!"-Schrei.
Recruiting-Benefits sind **belegt** (stehen verbatim auf der alten Seite) — nicht
erfunden. Konkrete Stellentitel/Gehälter = Operator-TODO.

## Brand-Charakter
Physio + Osteopathie · München-Nymphenburg · seit 1990 · ~18 im Team aus aller EU
+ Kolumbien · moderne Räume + Trainingsbereich (KGG, Gym80/Technogym) · 25-30 Min
Behandlungszeit · ganzheitlich · 4,9 Google · Markenmotiv Morphofalter.

## Bewegung
Dezent. `prefers-reduced-motion` respektiert. Scroll-Reveal sanft, Hero-Headline
nur Transform (LCP-sicher). Kein Auto-Kunden-Choreografie-Reflex.
