import { siteConfig } from "./site";

export const seoConfig = {
  title: "Academia GPS | La Trilogia TOL para clinicas rentables",
  description:
    "Formacion ejecutiva para profesionales de la salud que quieren dirigir una clinica rentable con finanzas, marketing y liderazgo.",
  metadataBaseUrl: "https://academiagps.online",
  canonicalPath: "/",
  canonicalPendingConfirmation: siteConfig.domains.finalDomainPendingConfirmation,
  keywords: [
    "gestion de clinicas",
    "administracion de clinicas",
    "clinica rentable",
    "marketing para clinicas",
    "finanzas para clinicas",
    "liderazgo en clinicas",
    "cursos para profesionales de la salud",
    "como dirigir una clinica",
    "gestion de consultorios",
    "Academia GPS",
    "Trilogia TOL",
  ],
  openGraph: {
    type: "website",
    locale: "es_PY",
    siteName: siteConfig.parentBrand,
  },
} as const;
