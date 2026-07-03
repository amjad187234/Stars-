import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="ueber-uns" className="overflow-x-clip bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-0">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Unsere Location
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Ihre perfekte Eventlocation in Berlin
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Der Stars Event Saal verbindet modernes Design mit einer
              luxuriösen Atmosphäre. Helle Räumlichkeiten, stilvolle
              Dekoration und flexible Bestuhlung machen jede Veranstaltung zu
              einem besonderen Erlebnis – ganz nach Ihren Wünschen.
            </p>
            <p>
              Von der ersten Beratung bis zum letzten Tanz begleiten wir Sie
              mit Liebe zum Detail. Zwischen edlen Materialien, warmem
              Lichtdesign und großzügigen Flächen entsteht ein Rahmen, der
              Eleganz und Herzlichkeit vereint – für Momente, die in
              Erinnerung bleiben.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
            <div>
              <dt className="sr-only">Gästekapazität</dt>
              <dd className="font-heading text-2xl text-gold sm:text-3xl">
                500+
              </dd>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                Gäste
              </p>
            </div>
            <div>
              <dt className="sr-only">Etagen</dt>
              <dd className="font-heading text-2xl text-gold sm:text-3xl">
                2
              </dd>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                Etagen
              </p>
            </div>
            <div>
              <dt className="sr-only">Parkplätze</dt>
              <dd className="font-heading text-2xl text-gold sm:text-3xl">
                ∞
              </dd>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                Parkplätze
              </p>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
