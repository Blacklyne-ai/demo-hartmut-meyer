# Physiotherapie & Osteopathie Hartmut Meyer — München-Nymphenburg

2026-Redesign der WordPress-Bestandsseite zu einer ruhigen, modernen Astro-5-Site.
Schwerpunkt: **Employer Branding / Recruiting**, gefolgt von Patientenvertrauen.

- **Stack:** Astro 5 (static), Tailwind v3.4, @lucide/astro, self-hosted Fonts
  (Fraunces + Work Sans). Kein SSR, kein Adapter. Output: `/dist` (Cloudflare Pages).
- **Marke:** Azur #00BAFF + Petrol-Navy #004866 (Logo-Pixel-Analyse), Markenmotiv
  Morphofalter. Siehe `STYLE-GUIDE.md`.
- **Inhalte:** verbatim aus `physio-hartmut-meyer.de` (`docs/CONTENT-VERBATIM.md`).
  Offene Punkte: `JUDGEMENT_CALLS.md`.

## Entwicklung
```bash
npm install
npm run dev      # localhost:4321 (bzw. --port)
npm run build    # → dist/
```

## Deploy (Cloudflare Pages)
Framework-Preset **Astro** · Build `npm run build` · Output `dist`.
