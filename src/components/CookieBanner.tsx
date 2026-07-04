"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "stars-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        const timer = window.setTimeout(() => setVisible(true), 800);
        return () => window.clearTimeout(timer);
      }
    } catch {
      // Storage unavailable (e.g. blocked) – keep the banner hidden rather
      // than nagging on every visit without being able to remember a choice.
    }
  }, []);

  function choose(consent: "all" | "essential") {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ consent, timestamp: new Date().toISOString() })
      );
    } catch {
      // ignore
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Cookie-Hinweis"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-gold/20 bg-white p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] sm:inset-x-6 sm:bottom-6 sm:p-7"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
              <Cookie size={22} strokeWidth={1.5} />
            </span>
            <div>
              <p className="font-heading text-lg text-foreground">
                Wir verwenden Cookies
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Wir nutzen ausschließlich technisch notwendige Cookies, damit
                unsere Website zuverlässig funktioniert. Weitere Informationen
                finden Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="text-gold underline underline-offset-2 hover:text-gold-dark"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={() => choose("essential")}
              className="rounded-full border border-black/15 px-6 py-2.5 text-sm font-medium text-muted transition-colors hover:border-gold hover:text-gold"
            >
              Nur notwendige
            </button>
            <button
              onClick={() => choose("all")}
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.5)]"
            >
              Alle akzeptieren
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
