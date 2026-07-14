import { brand } from "./brand";

export const siteConfig = {
  name: brand.productDisplayName,
  parentBrand: brand.name,
  headline:
    "La universidad te enseñó a atender pacientes. Nosotros te enseñamos a dirigir una clínica altamente rentable.",
  description:
    "Formación práctica en finanzas, marketing y liderazgo para profesionales de la salud que quieren dirigir mejor su clínica o consultorio.",
  domains: {
    candidates: ["academiagps.online", "academiagps.com"],
    finalDomainPendingConfirmation: true,
  },
  assets: {
    heroImage: "/images/dra-nidia/dra-nidia-tablet.jpeg",
    heroImageAlt:
      "Dra. Nidia Carolina sentada con una tablet en un entorno profesional luminoso.",
  },
  futureRoute: "/trilogia-tol",
} as const;
