import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

const requiredFields = [
  "vorname",
  "nachname",
  "telefon",
  "email",
  "eventTyp",
] as const;

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || typeof data !== "object") {
    return NextResponse.json(
      { success: false, message: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const missing = requiredFields.filter(
    (field) => !String(data[field] ?? "").trim()
  );

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!missing.length && !emailPattern.test(String(data.email))) {
    return NextResponse.json(
      { success: false, message: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
      { status: 400 }
    );
  }

  if (missing.length) {
    return NextResponse.json(
      {
        success: false,
        message: "Bitte füllen Sie alle Pflichtfelder aus.",
        fields: missing,
      },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail({
      vorname: String(data.vorname),
      nachname: String(data.nachname),
      telefon: String(data.telefon),
      email: String(data.email),
      eventTyp: String(data.eventTyp),
      datum: data.datum ? String(data.datum) : undefined,
      gaesteanzahl: data.gaesteanzahl ? String(data.gaesteanzahl) : undefined,
      nachricht: data.nachricht ? String(data.nachricht) : undefined,
    });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns per WhatsApp.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message:
      "Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.",
  });
}
