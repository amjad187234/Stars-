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

## Kontaktformular per E-Mail aktivieren (SMTP)

Das Kontaktformular verschickt eine E-Mail per SMTP (z. B. über ein E-Mail-Konto bei Hostinger). Ohne konfigurierte Umgebungsvariablen wird die Anfrage nur in die Server-Logs geschrieben, das Formular funktioniert aber trotzdem (kein Fehler für den Besucher).

1. Bei Hostinger ein E-Mail-Postfach anlegen, z. B. `info@starseventsaal.de`
2. Die SMTP-Zugangsdaten dazu findest du im hPanel unter „E-Mails“ (üblicherweise `smtp.hostinger.com`, Port `465`, SSL)
3. Folgende Umgebungsvariablen setzen (siehe `.env.example`) – lokal in einer **nicht eingecheckten** `.env.local`, auf dem Server in den Umgebungsvariablen deiner Hosting-Plattform:

```
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@starseventsaal.de
SMTP_PASS=dein-postfach-passwort
CONTACT_TO_EMAIL=info@starseventsaal.de
```

**Wichtig:** `SMTP_PASS` niemals in den Code oder ins Git-Repo schreiben – nur als Umgebungsvariable auf der Hosting-Plattform hinterlegen.

## Struktur

- `src/app/page.tsx` – setzt alle Sektionen der One-Page-Website zusammen
- `src/components/` – einzelne Sektionen (Hero, About, Veranstaltungen, WhyChooseUs, Statistics, CTA, Contact, Footer, WhatsAppButton …)
- `src/lib/constants.ts` – Inhalte, Kontaktdaten, Navigation, Events, Features
- `src/lib/mailer.ts` – SMTP-E-Mail-Versand für das Kontaktformular
- `src/app/api/contact/route.ts` – Validierung + Versand des Kontaktformulars
- `src/app/impressum`, `src/app/datenschutz` – rechtliche Seiten
