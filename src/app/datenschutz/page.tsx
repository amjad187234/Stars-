import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { impressumInfo, contactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung des Stars Event Saal Berlin.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 lg:px-0">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
      >
        <ArrowLeft size={16} />
        Zurück zur Startseite
      </Link>

      <h1 className="mt-8 font-heading text-4xl text-foreground">
        Datenschutzerklärung
      </h1>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          1. Verantwortlicher
        </h2>
        <p>
          {impressumInfo.operator}
          <br />
          {impressumInfo.address.join(", ")}
          <br />
          Telefon: {contactInfo.phone}
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          2. Erhebung und Verarbeitung von Daten
        </h2>
        <p>
          Wenn Sie uns über unser Kontaktformular oder per WhatsApp
          kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten
          (z. B. Name, Telefonnummer, E-Mail-Adresse, Angaben zu Ihrer
          Veranstaltung) ausschließlich zur Bearbeitung Ihrer Anfrage gemäß
          Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          3. Speicherdauer
        </h2>
        <p>
          Ihre Daten werden nur so lange gespeichert, wie es zur Bearbeitung
          Ihrer Anfrage sowie zur Erfüllung gesetzlicher Aufbewahrungspflichten
          erforderlich ist.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          4. Ihre Rechte
        </h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
          oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
          sowie ein Recht auf Datenübertragbarkeit und Widerspruch. Wenden
          Sie sich hierzu bitte an die oben genannten Kontaktdaten.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          5. WhatsApp-Kontakt
        </h2>
        <p>
          Wenn Sie uns über den WhatsApp-Button kontaktieren, gelten
          zusätzlich die Datenschutzbestimmungen von WhatsApp (WhatsApp
          Ireland Limited).
        </p>
      </section>
    </main>
  );
}
