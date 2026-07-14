import { siteConfig } from "./site";

export const seoConfig = {
  title: "Trilogía TOL | Finanzas, Marketing y Liderazgo para Clínicas",
  description:
    "Aprende a dirigir una clínica rentable con formación práctica en finanzas, marketing y liderazgo para profesionales de la salud.",
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
