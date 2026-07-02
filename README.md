# Stars Event Saal

Luxus-Website für die Eventlocation **Stars Event Saal** in Berlin. Gebaut mit Next.js (App Router), TypeScript, Tailwind CSS und Framer Motion.

## Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft dann unter [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Produktions-Build
npm run lint    # ESLint
```

## Bilder austauschen

Alle Fotos sind aktuell elegante Platzhalter (goldener Verlauf mit "FOTO FOLGT"-Schriftzug). Sobald echte Fotos vorliegen, einfach die Dateien **unter demselben Namen** in `public/images/` ersetzen — im Code muss nichts geändert werden:

- `public/images/hero.jpg` – Vollbild-Hero (Saal-Innenansicht)
- `public/images/about.jpg` – Bild im Abschnitt "Ihre perfekte Eventlocation"
- `public/images/cta-background.jpg` – Hintergrund im CTA-Abschnitt
- `public/images/og-image.jpg` – Social-Media-Vorschaubild (1200×630)
- `public/images/veranstaltungen/hochzeiten-verlobungen.jpg`
- `public/images/veranstaltungen/geburtstage-familienfeiern.jpg`
- `public/images/veranstaltungen/firmenfeiern-business-meetings.jpg`
- `public/images/veranstaltungen/konferenzen-seminare.jpg`
- `public/images/veranstaltungen/messen-kulturelle-veranstaltungen.jpg`

Das Logo (transparentes PNG) kann als `public/images/logo.png` abgelegt und im `Navbar`- bzw. `Footer`-Component eingebunden werden.

## WhatsApp-Nummer ändern

In `src/lib/constants.ts`:

```ts
export const whatsappNumber = "+491779744839";
```

## Struktur

- `src/app/page.tsx` – setzt alle Sektionen der One-Page-Website zusammen
- `src/components/` – einzelne Sektionen (Hero, About, Veranstaltungen, WhyChooseUs, Statistics, CTA, Contact, Footer, WhatsAppButton …)
- `src/lib/constants.ts` – Inhalte, Kontaktdaten, Navigation, Events, Features
- `src/app/api/contact/route.ts` – Validierung des Kontaktformulars
- `src/app/impressum`, `src/app/datenschutz` – rechtliche Seiten
