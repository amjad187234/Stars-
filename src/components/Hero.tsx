"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.38, 0.6]);

  return (
    <section
      id="startseite"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] h-[130%] w-full">
        <Image
          src="/images/hero.jpg"
          alt="Eleganter Innenraum des Stars Event Saal in Berlin"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="relative z-10 w-full px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-light sm:text-sm"
          >
            Eventlocation in Berlin
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Stars Event Saal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 font-heading text-lg italic text-gold-light sm:text-xl lg:text-2xl"
          >
            Wo Ihre schönsten Momente strahlen
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 space-y-3 text-sm leading-relaxed text-white/85 sm:text-base"
          >
            <p>
              Willkommen im Stars Event Saal – Ihrer stilvollen Eventlocation
              in Berlin.
            </p>
            <p className="hidden sm:block">
              Ob Hochzeit, Verlobung, Familienfeier oder Firmenevent – wir
              bieten den perfekten Rahmen für unvergessliche Veranstaltungen.
            </p>
            <p className="hidden sm:block">
              Mit elegantem Ambiente, moderner Ausstattung und Platz für bis
              zu 500 Gäste wird Ihr besonderer Anlass zu einem einzigartigen
              Erlebnis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#kontakt"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:shadow-[0_0_28px_rgba(201,162,39,0.65)]"
            >
              Jetzt anfragen
            </a>
            <a
              href="#ueber-uns"
              className="rounded-full border border-white/50 px-8 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold-light"
            >
              Mehr erfahren
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/80" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
