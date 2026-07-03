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
        <p>E-Mail: {contactInfo.email}</p>
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
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen. Die Inhalte dieser Website wurden mit größter Sorgfalt
          erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
          Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
      </section>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          Haftung für Links
        </h2>
        <p>
          Unser Angebot enthält gegebenenfalls Links zu externen Websites
          Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
          wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
          Betreiber der Seiten verantwortlich.
        </p>
      </section>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
          Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <section className="mt-10 space-y-2 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2 hover:text-gold-dark"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>
    </main>
  );
}
