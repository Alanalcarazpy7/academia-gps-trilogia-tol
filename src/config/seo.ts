import { academy } from "./academy";

export const isPreviewDeployment =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development";

export const seoConfig = {
  title: "Trilogía TOL 2.0 | Dirección de Clínicas · Academia GPS",
  description:
    "De profesional de la salud a CEO de tu clínica. Formación online en finanzas, marketing y liderazgo con acompañamiento. Trilogía TOL 2.0, edición 2027.",
  metadataBaseUrl: "https://academiagps.com",
  canonicalPath: "/",
  canonicalPendingConfirmation: false,
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
    siteName: academy.name,
  },
} as const;
