"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { whatsappHref } from "@/lib/constants";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.2 }}
            className="hidden whitespace-nowrap rounded-full bg-[#111111] px-4 py-2 text-sm text-white shadow-lg sm:block"
          >
            Jetzt per WhatsApp schreiben
          </motion.span>
        )}
      </AnimatePresence>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Jetzt per WhatsApp schreiben"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping motion-safe:opacity-60" />
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
