import nodemailer from "nodemailer";

export type ContactSubmission = {
  vorname: string;
  nachname: string;
  telefon: string;
  email: string;
  eventTyp: string;
  datum?: string;
  gaesteanzahl?: string;
  nachricht?: string;
};

function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
  );
}

function buildTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function formatSubmission(data: ContactSubmission) {
  const rows: [string, string][] = [
    ["Vorname", data.vorname],
    ["Nachname", data.nachname],
    ["Telefon", data.telefon],
    ["E-Mail", data.email],
    ["Art der Veranstaltung", data.eventTyp],
    ["Gewünschtes Datum", data.datum || "–"],
    ["Anzahl der Gäste", data.gaesteanzahl || "–"],
    ["Nachricht", data.nachricht || "–"],
    [
      "Datenschutz-Zustimmung",
      `Ja, am ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}`,
    ],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="color:#666;padding-right:16px"><strong>${label}</strong></td><td>${String(
          value
        ).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("")}</table>`;

  return { text, html };
}

// Sends the contact form to CONTACT_TO_EMAIL (or SMTP_USER as fallback) via
// SMTP. Returns false (without throwing) when SMTP isn't configured yet, so
// the form still works during setup and just logs to the server console.
export async function sendContactEmail(data: ContactSubmission) {
  if (!isSmtpConfigured()) {
    console.log("[contact] SMTP not configured, submission:", data);
    return false;
  }

  const transporter = buildTransport();
  const { text, html } = formatSubmission(data);
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

  await transporter.sendMail({
    from: `"Stars Event Saal Website" <${process.env.SMTP_USER}>`,
    to,
    replyTo: data.email,
    subject: `Neue Anfrage: ${data.eventTyp} – ${data.vorname} ${data.nachname}`,
    text,
    html,
  });

  return true;
}
