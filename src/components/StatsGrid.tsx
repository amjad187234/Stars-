"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";
import { stats } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function StatsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.15)}
      className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp}>
          <p className="font-heading text-4xl text-gold sm:text-5xl">
            <Counter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/70 sm:text-sm">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
