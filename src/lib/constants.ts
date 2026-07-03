export const siteConfig = {
  name: "Stars Event Saal",
  tagline: "Wo Ihre schönsten Momente strahlen",
  url: "https://starseventsaal.de",
  description:
    "Stars Event Saal ist Ihre stilvolle Eventlocation in Berlin für Hochzeiten, Verlobungen, Familienfeiern und Firmenevents. Elegantes Ambiente, moderne Ausstattung, Platz für bis zu 500 Gäste.",
};

// Change this number to update the WhatsApp contact everywhere on the site.
export const whatsappNumber = "+491779744839";
export const whatsappHref = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`;

export const contactInfo = {
  name: "Herr Alaa Doughmosh",
  street: "Kopenhagener Straße 105",
  cityLine: "13158 Berlin",
  phone: "+49 177 9744839",
  phoneHref: "+491779744839",
  email: "Alaa.doghmoush@web.de",
};

export const impressumInfo = {
  operator: "Alaa Doghmosh",
  address: ["Kopenhagener Straße 105", "13158 Berlin"],
  company: "Kopenhagener Lagerverwaltung 105 GmbH",
  companyAddress: ["Kopenhagener Straße 105", "13158 Berlin"],
  taxNumber: "37/393/50298",
};

export const navLinks = [
  { label: "Startseite", href: "#startseite" },
  { label: "Veranstaltungen", href: "#veranstaltungen" },
  { label: "Warum wir", href: "#warum-wir" },
  { label: "Kontakt", href: "#kontakt" },
];

export type EventCategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const eventCategories: EventCategory[] = [
  {
    slug: "hochzeiten-verlobungen",
    title: "Hochzeiten & Verlobungen",
    description:
      "Der perfekte Ort für den schönsten Tag Ihres Lebens. Feiern Sie Ihre Hochzeit oder Verlobung in einer eleganten Atmosphäre und schaffen Sie Erinnerungen, die für immer bleiben.",
    image: "/images/veranstaltungen/hochzeiten-verlobungen.jpg",
  },
  {
    slug: "geburtstage-familienfeiern",
    title: "Geburtstage & Familienfeiern",
    description:
      "Gemeinsam besondere Momente erleben. Ob Geburtstag, Jubiläum oder Familienfest – unsere stilvolle Location bietet den idealen Rahmen für unvergessliche Feiern.",
    image: "/images/veranstaltungen/geburtstage-familienfeiern.jpg",
  },
  {
    slug: "firmenfeiern-business-meetings",
    title: "Firmenfeiern & Business Meetings",
    description:
      "Professionell tagen und stilvoll feiern. Von Business Meetings bis zu Firmenfeiern – wir bieten die passende Umgebung für erfolgreiche Veranstaltungen.",
    image: "/images/veranstaltungen/firmenfeiern-business-meetings.jpg",
  },
  {
    slug: "konferenzen-seminare",
    title: "Konferenzen & Seminare",
    description:
      "Moderne Räumlichkeiten für erfolgreiche Events. Unsere großzügigen Säle eignen sich ideal für Konferenzen, Seminare, Workshops und Präsentationen.",
    image: "/images/veranstaltungen/konferenzen-seminare.jpg",
  },
  {
    slug: "messen-kulturelle-veranstaltungen",
    title: "Messen & Kulturelle Veranstaltungen",
    description:
      "Viel Platz für große Ideen. Ob Messe, Ausstellung oder kulturelle Veranstaltung – unsere Location bietet den perfekten Rahmen für Events jeder Größe.",
    image: "/images/veranstaltungen/messen-kulturelle-veranstaltungen.jpg",
  },
];

export type Feature = {
  icon: "Sparkles" | "Mic2" | "Armchair" | "Users" | "Car";
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "Sparkles",
    title: "Elegantes Ambiente",
    description:
      "Ein modernes und stilvolles Design sorgt für eine exklusive Atmosphäre bei jeder Veranstaltung.",
  },
  {
    icon: "Mic2",
    title: "Exklusive Bühne",
    description:
      "Unsere hochwertige Bühne eignet sich perfekt für Hochzeiten, Live-Musik, Präsentationen und besondere Programmpunkte.",
  },
  {
    icon: "Armchair",
    title: "Hochwertige Ausstattung",
    description:
      "Elegante Tische, komfortable Stühle und eine moderne Einrichtung bieten höchsten Komfort für Ihre Gäste.",
  },
  {
    icon: "Users",
    title: "Platz für bis zu 500 Gäste",
    description:
      "Unsere Location erstreckt sich über zwei Etagen und bietet ausreichend Platz für kleine und große Veranstaltungen.",
  },
  {
    icon: "Car",
    title: "Kostenlose Parkplätze",
    description:
      "Direkt vor dem Saal stehen ausreichend Parkmöglichkeiten für Sie und Ihre Gäste zur Verfügung.",
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Gäste" },
  { value: 2, suffix: "", label: "Etagen" },
  { value: 100, suffix: "+", label: "Veranstaltungen" },
  { value: 100, suffix: "%", label: "Zufriedene Kunden" },
];

export const eventTypeOptions = [
  "Hochzeit",
  "Verlobung",
  "Geburtstag / Familienfeier",
  "Firmenfeier / Business Meeting",
  "Konferenz / Seminar",
  "Messe / Kulturelle Veranstaltung",
  "Sonstiges",
];
