import Reveal from "./Reveal";
import EventsGrid from "./EventsGrid";

export default function Veranstaltungen() {
  return (
    <section id="veranstaltungen" className="bg-[#fbfaf7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Veranstaltungen
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Für jeden Anlass der passende Rahmen
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Ob intim oder groß, privat oder geschäftlich – der Stars Event
            Saal passt sich Ihrer Veranstaltung an.
          </p>
        </Reveal>

        <EventsGrid />
      </div>
    </section>
  );
}
