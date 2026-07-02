"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { eventCategories } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function EventsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer(0.12)}
      className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {eventCategories.map((event, i) => (
        <motion.article
          key={event.slug}
          variants={fadeUp}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className={`group overflow-hidden rounded-2xl bg-white shadow-[0_15px_40px_-20px_rgba(0,0,0,0.2)] ${
            i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
          }`}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
            <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl shadow-md backdrop-blur-sm">
              {event.emoji}
            </span>
          </div>
          <div className="p-7">
            <h3 className="font-heading text-xl text-foreground">
              {event.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {event.description}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
