import { siteConfig } from "./site";

export const seoConfig = {
  title: "Academia GPS | La Trilogía TOL para clínicas rentables",
  description:
    "Formación ejecutiva para profesionales de la salud que quieren dirigir una clínica rentable con finanzas, marketing y liderazgo.",
  metadataBaseUrl: "https://academiagps.online",
  canonicalPath: "/",
  canonicalPendingConfirmation: siteConfig.domains.finalDomainPendingConfirmation,
  keywords: [
    "gestión de clínicas",
    "administración de clínicas",
    "clínica rentable",
    "marketing para clínicas",
    "finanzas para clínicas",
    "liderazgo en clínicas",
    "cursos para profesionales de la salud",
    "cómo dirigir una clínica",
    "gestión de consultorios",
    "Academia GPS",
    "Trilogía TOL",
  ],
  openGraph: {
    type: "website",
    locale: "es_PY",
    siteName: siteConfig.parentBrand,
  },
} as const;
