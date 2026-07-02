import Image from "next/image";
import Reveal from "./Reveal";
import { zoomIn } from "@/lib/motion";

export default function CTASection() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden py-28 sm:py-32">
      <Image
        src="/images/cta-background.jpg"
        alt="Stars Event Saal – festlich vorbereiteter Saal"
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/65" />

      <Reveal variants={zoomIn} className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold-light">
          Stars Event Saal
        </p>
        <h2 className="mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          Bereit für Ihr unvergessliches Event?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
          Lassen Sie uns gemeinsam Ihre Traumveranstaltung planen.
        </p>
        <a
          href="#kontakt"
          className="mt-9 inline-block rounded-full bg-gold px-9 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.65)]"
        >
          Jetzt Termin anfragen
        </a>
      </Reveal>
    </section>
  );
}
