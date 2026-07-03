"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import { navLinks, contactInfo, siteConfig } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="logo-shine">
              <Image
                src="/images/logo.png"
                alt="Stars Event Saal Logo"
                width={592}
                height={379}
                className="h-16 w-auto"
              />
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Ihre stilvolle Eventlocation in Berlin für Hochzeiten,
              Verlobungen, Familienfeiern und Firmenevents.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Kontakt
            </p>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {contactInfo.street}
                  <br />
                  {contactInfo.cityLine}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`tel:${contactInfo.phoneHref}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all transition-colors hover:text-gold-light"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Rechtliches
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-white/70 transition-colors hover:text-gold-light"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-white/70 transition-colors hover:text-gold-light"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>

          <motion.button
            whileHover={{ y: -3 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Nach oben scrollen"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
