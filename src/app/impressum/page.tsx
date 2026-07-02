import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { impressumInfo, contactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Stars Event Saal Berlin.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 lg:px-0">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
      >
        <ArrowLeft size={16} />
        Zurück zur Startseite
      </Link>

      <h1 className="mt-8 font-heading text-4xl text-foreground">Impressum</h1>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          Angaben gemäß § 5 TMG
        </h2>
        <p>{impressumInfo.operator}</p>
        {impressumInfo.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">Unternehmen</h2>
        <p>{impressumInfo.company}</p>
        {impressumInfo.companyAddress.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">Kontakt</h2>
        <p>Telefon: {contactInfo.phone}</p>
      </section>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">Steuernummer</h2>
        <p>{impressumInfo.taxNumber}</p>
      </section>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          Haftung für Inhalte
        </h2>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
          können wir jedoch keine Gewähr übernehmen.
        </p>
      </section>
    </main>
  );
}
