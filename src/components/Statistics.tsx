import StatsGrid from "./StatsGrid";

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c9a227 0%, transparent 45%), radial-gradient(circle at 80% 80%, #c9a227 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <StatsGrid />
      </div>
    </section>
  );
}
