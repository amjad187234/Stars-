import StatsGrid from "./StatsGrid";

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c9a227 0%, transparent 45%), radial-gradient(circle at 80% 80%, #c9a227 0%, transparent 45%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <StatsGrid />
      </div>
    </section>
  );
}
