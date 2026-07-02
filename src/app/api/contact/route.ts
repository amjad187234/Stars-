import { NextResponse } from "next/server";

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

  return NextResponse.json({
    success: true,
    message:
      "Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.",
  });
}
