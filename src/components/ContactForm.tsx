"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { eventTypeOptions } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-all duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.success) {
        setState("error");
        setErrorMessage(
          result.message || "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."
        );
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMessage(
        "Verbindung fehlgeschlagen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per WhatsApp."
      );
    }
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 14 }}
        >
          <CheckCircle2 className="text-gold" size={56} strokeWidth={1.5} />
        </motion.div>
        <h3 className="mt-6 font-heading text-2xl text-foreground">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen,
          um Ihr besonderes Event zu planen.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-8 rounded-full border border-gold px-7 py-3 text-sm font-medium text-gold transition-colors duration-300 hover:bg-gold hover:text-white"
        >
          Weitere Anfrage senden
        </button>
      </motion.div>
    );
  }

  return (
    <form
      noValidate={false}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Vorname" required>
          <input name="vorname" type="text" required className={inputClasses} />
        </Field>
        <Field label="Nachname" required>
          <input name="nachname" type="text" required className={inputClasses} />
        </Field>
        <Field label="Telefon" required>
          <input name="telefon" type="tel" required className={inputClasses} />
        </Field>
        <Field label="E-Mail" required>
          <input name="email" type="email" required className={inputClasses} />
        </Field>
        <Field label="Art der Veranstaltung" required>
          <select name="eventTyp" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {eventTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Gewünschtes Datum">
          <input name="datum" type="date" className={inputClasses} />
        </Field>
        <Field label="Anzahl der Gäste" className="sm:col-span-2">
          <input
            name="gaesteanzahl"
            type="number"
            min={1}
            max={500}
            placeholder="z. B. 120"
            className={inputClasses}
          />
        </Field>
        <Field label="Nachricht" className="sm:col-span-2">
          <textarea
            name="nachricht"
            rows={4}
            placeholder="Erzählen Sie uns von Ihrer Veranstaltung..."
            className={`${inputClasses} resize-none`}
          />
        </Field>
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="datenschutzZustimmung"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-black/20 text-gold accent-gold focus:ring-gold/30"
        />
        <span>
          Ich habe die{" "}
          <Link
            href="/datenschutz"
            target="_blank"
            className="text-gold underline underline-offset-2 hover:text-gold-dark"
          >
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung
          meiner Anfrage einverstanden. <span className="text-gold">*</span>
        </span>
      </label>

      <AnimatePresence>
        {state === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:shadow-[0_0_28px_rgba(201,162,39,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Wird gesendet...
          </>
        ) : (
          "Anfrage senden"
        )}
      </button>
      <p className="text-center text-xs text-muted">
        Mit * markierte Felder sind Pflichtfelder.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block text-sm font-medium text-foreground ${className ?? ""}`}>
      <span>
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
