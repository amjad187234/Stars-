"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || menuOpen;

  // Tapping an anchor inside the collapsing mobile menu updates the hash but
  // the browser swallows the scroll, so close the menu first and scroll
  // programmatically once its exit animation has finished.
  function handleMobileNav(event: React.MouseEvent<HTMLAnchorElement>) {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    event.preventDefault();
    setMenuOpen(false);
    window.history.replaceState(null, "", href);
    window.setTimeout(() => {
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#startseite" className="logo-shine block">
          <Image
            src="/images/logo.png"
            alt="Stars Event Saal Logo"
            width={592}
            height={379}
            priority
            className="h-11 w-auto lg:h-14"
          />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative text-sm font-medium tracking-wide transition-colors duration-500 ${
                  dark ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontakt"
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.55)]"
            >
              Jetzt anfragen
            </a>
          </li>
        </ul>

        <button
          aria-label="Menü öffnen"
          onClick={() => setMenuOpen((o) => !o)}
          className={`lg:hidden ${dark ? "text-foreground" : "text-white"}`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleMobileNav}
                    className="block py-3 text-base font-medium text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#kontakt"
                  onClick={handleMobileNav}
                  className="block rounded-full bg-gold px-6 py-3 text-center text-sm font-medium text-white"
                >
                  Jetzt anfragen
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
