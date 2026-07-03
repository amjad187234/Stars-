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
          <br />
          E-Mail: {contactInfo.email}
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          2. Erhebung und Verarbeitung beim Besuch der Website
        </h2>
        <p>
          Beim Aufrufen unserer Website erhebt der Hosting-Anbieter
          automatisch technische Daten (Server-Logfiles), z. B. IP-Adresse,
          Datum und Uhrzeit des Zugriffs, verwendeter Browser und
          Betriebssystem. Diese Daten dienen ausschließlich der technischen
          Bereitstellung und Absicherung der Website (Art. 6 Abs. 1 lit. f
          DSGVO) und werden nicht mit anderen Daten zusammengeführt.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          3. Kontaktformular
        </h2>
        <p>
          Wenn Sie uns über unser Kontaktformular oder per WhatsApp
          kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten
          (z. B. Name, Telefonnummer, E-Mail-Adresse, Angaben zu Ihrer
          Veranstaltung) ausschließlich zur Bearbeitung Ihrer Anfrage gemäß
          Art. 6 Abs. 1 lit. b und lit. a DSGVO (Vertragsanbahnung und
          Einwilligung). Die Angabe dieser Daten ist freiwillig, jedoch für
          die Bearbeitung Ihrer Anfrage erforderlich.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          4. Cookies
        </h2>
        <p>
          Diese Website verwendet keine Analyse- oder Marketing-Cookies. Es
          werden ausschließlich technisch notwendige Daten verarbeitet, die
          für den Betrieb der Website erforderlich sind.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          5. Speicherdauer
        </h2>
        <p>
          Ihre Daten werden nur so lange gespeichert, wie es zur Bearbeitung
          Ihrer Anfrage sowie zur Erfüllung gesetzlicher Aufbewahrungspflichten
          erforderlich ist. Anschließend werden die Daten gelöscht.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          6. Ihre Rechte
        </h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
          oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
          sowie ein Recht auf Datenübertragbarkeit und Widerspruch. Erteilte
          Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft
          widerrufen. Wenden Sie sich hierzu bitte an die oben genannten
          Kontaktdaten. Außerdem haben Sie das Recht, sich bei einer
          Datenschutz-Aufsichtsbehörde zu beschweren.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">
          7. WhatsApp-Kontakt
        </h2>
        <p>
          Wenn Sie uns über den WhatsApp-Button kontaktieren, verlassen Sie
          unsere Website und es gelten zusätzlich die
          Datenschutzbestimmungen von WhatsApp (WhatsApp Ireland Limited).
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="font-heading text-xl text-foreground">8. Hosting</h2>
        <p>
          Diese Website wird bei einem externen Hosting-Anbieter (Hostinger)
          betrieben. Die im Rahmen des Betriebs dieser Website erhobenen
          personenbezogenen Daten werden auf den Servern des Hosters
          verarbeitet. Der Hoster wird auf Grundlage eines
          Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO eingesetzt.
        </p>
      </section>
    </main>
  );
}
