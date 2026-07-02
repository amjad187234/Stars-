"use client";

import { motion } from "framer-motion";
import { Sparkles, Mic2, Armchair, Users, Car } from "lucide-react";
import { features, type Feature } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/motion";

const icons: Record<Feature["icon"], typeof Sparkles> = {
  Sparkles,
  Mic2,
  Armchair,
  Users,
  Car,
};

export default function WhyChooseUs() {
  return (
    <section id="warum-wir" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Warum Stars Event Saal?
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Exklusivität, die man spürt
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.12)}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-[0_10px_30px_-18px_rgba(0,0,0,0.18)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-light/20 to-gold/10">
                  <Icon className="text-gold" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-heading text-lg text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
