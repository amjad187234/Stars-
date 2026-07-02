import { MapPin, Phone, Clock } from "lucide-react";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { fadeLeft, fadeRight } from "@/lib/motion";
import { contactInfo, whatsappHref } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Kontakt
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Lassen Sie uns Ihr Event planen
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal variants={fadeLeft} className="lg:col-span-2">
            <div className="sticky top-28 space-y-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                  Kontaktinformationen
                </p>
                <p className="mt-3 font-heading text-2xl text-foreground">
                  {contactInfo.name}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <MapPin size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Adresse
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {contactInfo.street}
                      <br />
                      {contactInfo.cityLine}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Phone size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Telefon
                    </p>
                    <a
                      href={`tel:${contactInfo.phoneHref}`}
                      className="mt-1 block text-sm text-muted transition-colors hover:text-gold"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Clock size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Erreichbarkeit
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      Termine nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-white"
              >
                Per WhatsApp schreiben
              </a>
            </div>
          </Reveal>

          <Reveal variants={fadeRight} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
